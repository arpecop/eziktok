import { NextApiRequest, NextApiResponse } from 'next';

import { client } from '../../../data/graphql';
import { gql } from '@apollo/client';
import { usernameformat } from '../../../utils/username';
import { verifytoken } from '../../../utils/awsConfig';

interface Item {
  id: string;
  title: string;
  from: string;
  to: string;
  read: boolean;
  createdAt: Date;
  adsmainID: string;
}

interface Messages {
  items: Item[];
}

interface Ad {
  messages: Messages;
  title: string;
  images: string[];
}

interface Data2 {
  ads: Ad[];
}

interface Data {
  data: Data2;
}

interface RootObject {
  data: Data;
}

const INBOX_GET = gql`
  query MyQuery($username: String = "arpecop") {
    data: listAdsMains(filter: { username: { eq: $username } }) {
      ads: items {
        messages: AdsMessages(
          filter: { read: { eq: false }, from: { attributeExists: true } }
        ) {
          items {
            id
            from
            createdAt
            adsmainID
          }
        }
        title
        images
        id
      }
    }
  }
`;

const MARK_READ_PREP = gql`
  query MyQuery($username: String = "arpecop") {
    data: listAdsMains(filter: { username: { eq: $username } }) {
      ads: items {
        messages: AdsMessages(
          filter: { read: { eq: false }, to: { eq: $username } }
        ) {
          items {
            id
          }
        }
      }
    }
  }
`;

const DELETE_THREAD = gql`
  mutation MyMutation($subjectid: uuid = "") {
    update_userpms_many(
      updates: {
        _set: { to: $subjectid, from: $subjectid }
        where: { subjectid: { _eq: $subjectid } }
      }
    ) {
      affected_rows
    }
  }
`;

const UNREAD = gql`
  query MyQuery($username: String) {
    received: listAdsMessages(
      limit: 100
      filter: { to: { eq: $username }, read: { eq: false } }
    ) {
      items {
        read
      }
    }
    sent: listAdsMessages(limit: 100, filter: { from: { eq: $username } }) {
      items {
        read
      }
    }
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }
  const { body } = req;
  const { user, type, to, message, subjectid } = body;
  await verifytoken(body.user.accessToken.jwtToken);
  if (type === 'unread') {
    const response = await client.query({
      query: UNREAD,
      variables: {
        username: usernameformat(user)
      }
    });
    const unread =
      response.data.received.items.length - response.data.sent.items.length;
    res.status(200).json({ unread });
  } else if (type === 'send') {
    const SEND_MESSAGE = await client.query({
      query: gql`
        mutation MyMutation(
          $subjectid: ID
          $to: String = ""
          $message: String = ""
          $from: String = ""
        ) {
          createAdsMessages(
            input: {
              adsmainID: $subjectid
              from: $from
              message: $message
              read: false
              to: $to
            }
          ) {
            createdAt
          }
        }
      `,
      variables: {
        from: usernameformat(user),
        to,
        message,
        subjectid
      }
    });
    console.log(SEND_MESSAGE);

    res.status(200).json(SEND_MESSAGE.data);
    // fetchGraphQL(SEND_MSG, obj).then((response) => {   }).catch;
  } else if (type === 'inbox') {
    const response = (await client.query({
      query: INBOX_GET,
      variables: {
        username: usernameformat(user)
      }
    })) as RootObject;
    //console.log(response.data.data.ads[0].messages);
    const stream = response.data.data.ads
      .flatMap((x1) => x1.messages)
      .flatMap((x3) => x3.items)
      .sort((a, z) => {
        return (
          new Date(a.createdAt).getTime() - new Date(z.createdAt).getTime()
        );
      });
    //console.log(stream);
    res.status(200).json({ stream });
  } else if (type === 'markread') {
    // MARK READ
    console.log('trigger markread');

    const my_ads = (await client.query({
      query: MARK_READ_PREP,
      variables: {
        username: usernameformat(user)
      }
    })) as RootObject;

    const MARK_READ_MUT = (arr: string[]) => {
      const modded = arr
        .map((mut, i) => {
          return `
        x${i.toString()}:updateAdsMessages(input: {id:"${mut}", read: true }) {
          id
        }`;
        })
        .join(' ');

      return gql`mutation MyMutation  { ${modded} }`;
    };
    const active_threads = my_ads.data.data.ads
      .flatMap((x) => x.messages)
      .flatMap((x) => x.items)
      .filter((x) => x.id)
      .map((x) => x.id);
    if (active_threads.length > 0) {
      await client.mutate({
        mutation: MARK_READ_MUT(active_threads)
      });
      res.status(200).json({});
    } else {
      res.status(200).json({});
    }
  } else if (type === 'deletethread') {
    const response = await client.mutate({
      mutation: DELETE_THREAD,
      variables: {
        subjectid
      }
    });
    res.status(200).json(response.data);
  }
}

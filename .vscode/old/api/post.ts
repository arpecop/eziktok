import type { NextApiRequest, NextApiResponse } from 'next';

import { fetchGraphQL } from '../../data/client';
import { usernameformat } from '../../utils/username';
import { verifytoken } from '../../utils/awsConfig';

const ADD_ITEM = `
  mutation MyMutation(
    $username: String = ""
    $value: String = ""
    $title: String = ""
    $parrent: jsonb = ""
    $images: jsonb = ""
    $user: String = ""
    $type: String = ""
  ) {
    insert_userposts_one(
      object: { parrent: $parrent, username: $username, value: $value , type: $type , title: $title , images: $images }
    ) {
      id
      uid
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
  await verifytoken(body.user.accessToken.jwtToken);
  fetchGraphQL(ADD_ITEM, {
    title: body.title,
    value: body.value,
    parrent: body.parrent,
    images: body.images,
    username: usernameformat(body.user),
    type: body.type
  })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

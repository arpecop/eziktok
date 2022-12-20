import { NextApiRequest, NextApiResponse } from 'next';

import { fetchGraphQL } from '../../../data/client';

const GET_PHONE_NUM = `
query MyMutation($_eq: uuid = "") {
    userads(limit: 1, where: {uid: {_eq: $_eq}}) {
      data
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
  const {
    body: { uid }
  } = req;

  //await verifytoken(user.accessToken.jwtToken);
  fetchGraphQL(GET_PHONE_NUM, {
    _eq: uid
  })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

import type { NextApiRequest, NextApiResponse } from 'next';

async function postData(body = {}, secret?: string | null) {
  // Default options are marked with *
  const response = await fetch('http://54.247.0.27/v1/graphql', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: secret
      ? {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': secret
        }
      : {
          'Content-Type': 'application/json'
        },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  postData(
    req.body,
    (Object.values(req.headers).filter(
      (x) => x === process.env.HASURA_SECRET
    )[0] as string) || null
  ).then((data) => {
    res.status(200).json(data);
  }).catch;
}

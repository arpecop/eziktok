import { NextApiRequest, NextApiResponse } from 'next';
import { client, env, gquery } from '../../../data/graphql';

import { usernameformat } from '../../../utils/username';
import { verifytoken } from '../../../utils/awsConfig';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(200).send({ message: 'Only POST requests allowed' });
    return;
  }
  const { body } = req;
  const {
    title,
    description,
    price,
    phone,
    category,
    images,
    user,
    data,
    parrent
  } = body;
  await verifytoken(body.user.accessToken.jwtToken);
  const datasubmitted = {
    title,
    description,
    price: price ? price : -1,
    phone: phone || '',
    type: env === 'development' ? 'ad' : 'adprod',
    cat: `${category} ${JSON.stringify(parrent)}`,
    date: new Date().toISOString().split('T')[0],
    username: usernameformat(user),
    query: JSON.stringify(Object.values(data))
      .toLowerCase()
      .replaceAll('"', ' ')
      .replaceAll('\n', ' ')
      .replaceAll(',', ' ')
      .replace('[', '')
      .replace(']', '')
      .trim(),
    images: JSON.stringify(images),
    data: JSON.stringify(data),
    parrent: JSON.stringify(parrent)
  };
  try {
    const response = await client.mutate({
      mutation: gquery.ADS_ADD_NEW,
      variables: datasubmitted
    });
    res.status(200).json(response.data.createAdsMain);
  } catch (error) {
    res.status(200).send(error);
  }
}

import { NextApiRequest, NextApiResponse } from 'next';

import adsData from '~/json/adsData.json';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id }
  } = req;
  if (id) {
    const cat = adsData.find((ad) => ad.slug === id);
    res.status(200).json(cat || { error: 'not found' });
  }
  const cats = adsData.map((ad) => ({
    slug: ad.slug,
    name: ad.name,
    icon: ad.icon
  }));
  res.status(200).json(cats);
}

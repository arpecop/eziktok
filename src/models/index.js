// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Condition = {
  "NEW": "NEW",
  "PARTS": "PARTS",
  "USED": "USED"
};

const Curr = {
  "EUR": "EUR",
  "LV": "LV"
};

const { Ad, Joke, News, Twusers, Movies, Companies } = initSchema(schema);

export {
  Ad,
  Joke,
  News,
  Twusers,
  Movies,
  Companies,
  Condition,
  Curr
};
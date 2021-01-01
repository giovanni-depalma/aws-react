// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Pizza } = initSchema(schema);

export {
  Pizza
};
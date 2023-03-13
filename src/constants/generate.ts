import { CODE_TYPES } from '../types/enums';

interface IObject {
  name: string;
}

export const typeOfObjectsToGenerate = [
  {
    title: 'Tel',
    type: CODE_TYPES.TEL,
  },
  {
    title: 'Text',
    type: CODE_TYPES.TEXT,
  },
  {
    title: 'Email',
    type: CODE_TYPES.MATMSG,
  },
  {
    title: 'URL',
    type: CODE_TYPES.URL,
  },
  {
    title: 'SMS',
    type: CODE_TYPES.SMS,
  },
  {
    title: 'WiFi',
    type: CODE_TYPES.WIFI,
  },
  {
    title: 'Geo',
    type: CODE_TYPES.GEO,
  },
];

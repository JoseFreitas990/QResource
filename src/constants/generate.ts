import { CODE_TYPES } from '../types/enums';

interface IObject {
  name: string;
}

export const typeOfObjectsToGenerate = [
  {
    title: 'Tel',
    type: CODE_TYPES.TEL,
    image: require('../../assets/telephone.png'),
  },
  {
    title: 'Text',
    type: CODE_TYPES.TEXT,
    image: require('../../assets/text.png'),
  },
  {
    title: 'Email',
    type: CODE_TYPES.MATMSG,
    image: require('../../assets/email.png'),
  },
  {
    title: 'URL',
    type: CODE_TYPES.URL,
    image: require('../../assets/url.png'),
  },
  {
    title: 'SMS',
    type: CODE_TYPES.SMS,
    image: require('../../assets/sms.png'),
  },
  {
    title: 'WiFi',
    type: CODE_TYPES.WIFI,
    image: require('../../assets/wifi.png'),
  },
  {
    title: 'Geo',
    type: CODE_TYPES.GEO,
    image: require('../../assets/geo.png'),
  },
];

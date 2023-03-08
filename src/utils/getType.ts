import { CODE_TYPES } from '../types/enums';

export default function getType(data: string) {
  let firstElement = splitAndReturnFirstElement(data).toUpperCase();
  let type;

  if (checkIfHasHTTPS(firstElement)) {
    type = checkIfIsUrlOrMaps(data.toUpperCase());
  } else {
    type = checkCodeType(firstElement);
  }
  return type;
}

function splitAndReturnFirstElement(data: string) {
  let typeString = data.split(':')[0];

  return typeString;
}

function checkIfHasHTTPS(type: string) {
  const regEx = new RegExp('^(HTTP|HTTPS)');

  return regEx.test(type);
}

function checkIfIsUrlOrMaps(data: string) {
  const googleMapsRegEx = new RegExp('^(HTTP|HTTPS)://MAPS.GOOGLE.COM/');
  const googleMapsRegEx_2 = new RegExp('^(HTTP|HTTPS)://WWW.GOOGLE.COM/MAPS');

  if (googleMapsRegEx.test(data)) {
    return CODE_TYPES.GEOM;
  } else if (googleMapsRegEx_2.test(data)) {
    return CODE_TYPES.GEOM2;
  } else {
    return CODE_TYPES.URL;
  }
}

function checkCodeType(type: string) {
  if (type.length > 6) return CODE_TYPES.TEXT;

  switch (type) {
    // TODO VINFORMATION
    case CODE_TYPES.GEO:
      return CODE_TYPES.GEO;
    case CODE_TYPES.MAILTO:
      return CODE_TYPES.MAILTO;
    case CODE_TYPES.MATMSG:
      return CODE_TYPES.MATMSG;
    case CODE_TYPES.SMS:
      return CODE_TYPES.SMS;
    case CODE_TYPES.TEL:
      return CODE_TYPES.TEL;
    case CODE_TYPES.WIFI:
      return CODE_TYPES.WIFI;
    case CODE_TYPES.VINFO:
      return 'not done';
    default:
      return CODE_TYPES.TEXT;
  }
}

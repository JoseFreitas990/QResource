import { ILocation, IMail, ISMS, IWiFi } from '../types';
import { split } from './utils';

function getTypeParams(data: string, type: string) {}

function getSMSParams(data: string): ISMS {
  let to = split(data, 1);
  let body = split(data, 2);

  return { to, body };
}

function getGeoParams(data: string): ILocation {
  let latitude = parseInt(split(data, 1));
  let longitude = parseInt(split(data, 2));

  return { latitude, longitude };
}

function getGeoMParams(data: string): ILocation {
  let wantedString = data.split('?')[1];
  let lat = wantedString.substring(
    wantedString.indexOf('=') + 1,
    wantedString.lastIndexOf(',')
  );

  let lon = wantedString.split(',')[1];

  let latitude = parseFloat(lat);
  let longitude = parseFloat(lon);

  return { latitude, longitude };
}

function getGeoMParams2(data: string): ILocation {
  let wantedString = data.substring(
    data.indexOf('@') + 1,
    data.lastIndexOf('m/')
  );

  let lat = wantedString.split(',')[0];
  let lon = wantedString.split(',')[1];

  let latitude = parseFloat(lat);
  let longitude = parseFloat(lon);

  return { latitude, longitude };
}

function getMailToParams(data: string): IMail {
  let to = data.substring(
    data.indexOf('mailto:') + 1,
    data.lastIndexOf('?subject=')
  );

  let subject = data.substring(
    data.indexOf('?subject=') + 1,
    data.lastIndexOf('?subject&body=')
  );

  let body = data.substring(data.indexOf('?subject&body=') + 1);

  return { to, subject, body };
}

function getMatMsgToParams(data: string): IMail {
  let to = data.substring(data.indexOf('TO:') + 1, data.lastIndexOf(';SUB:'));

  let subject = data.substring(
    data.indexOf(';SUB:') + 1,
    data.lastIndexOf(';BODY:')
  );

  let body = data.substring(data.indexOf(';BODY:') + 1, data.lastIndexOf(';;'));

  return { to, subject, body };
}

// TODO: SMTP

function getWiFiToParams(data: string): IWiFi {
  let networkType = '';
  let name = '';
  let password = '';
  let hidden = false;

  name = data.substring(data.indexOf(':S:') + 1, data.lastIndexOf(';T:'));

  networkType = data.substring(
    data.indexOf(';T:') + 1,
    data.lastIndexOf(';P:')
  );

  password = data.substring(data.indexOf(';P:') + 1, data.lastIndexOf(';H:'));

  if (
    data.substring(data.indexOf(';H:') + 1, data.lastIndexOf(';;')) === 'true'
  )
    hidden = true;

  return { networkType, name, password, hidden };
}

import { ILocation, ISMS } from '../types';
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

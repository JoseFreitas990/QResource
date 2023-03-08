import { ISMS } from '../types';

function getTypeParams(data: string, type: string) {}

function getSMSParams(data: string): ISMS {
  let to = split(data, 1);
  let body = split(data, 2);

  return { to, body };
}

function split(data: string, index: number) {
  return data.split(':')[index];
}

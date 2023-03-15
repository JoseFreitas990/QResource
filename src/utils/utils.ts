export function split(data: string, index: number) {
  return data.split(':')[index];
}

export function removeWhiteSpaces(data: string) {
  return data.replace(/\s/g, '');
}

export function mountReplaceNumber(value: string) {
  const credit = '#### #### #### ####';
  const replaced =
    credit.substring(0, 0) + value + credit.substring(0 + value.length);
  return replaced.split('');
}

export function mountReplaceResponse(value: string) {
  let replaced = value;
  replaced = replaced.replace(' ', '');
  replaced = replaced.replace(' ', '');
  replaced = replaced.replace(' ', '');
  replaced = replaced.replace(' ', '');
  replaced = replaced.replace(/[0-9](?=([0-9]{4}))/g, '*');

  return replaced;
}

import React from 'react';

export function creditCard(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 19;
  let { value } = e.currentTarget;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{4})(\d)/, '$1 $2');
  value = value.replace(/(\d{4})(\d)/, '$1 $2');
  value = value.replace(/(\d{4})(\d)/, '$1 $2');
  value = value.replace(/(\d{4})(\d)/, '$1 $2');
  e.currentTarget.value = value;
  return e;
}

export function onlyString(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 25;
  let { value } = e.currentTarget;
  value = value.replace(/[0-9]+/, '');
  e.currentTarget.value = value;
  return e;
}

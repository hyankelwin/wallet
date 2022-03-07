export function months() {
  let i = 1;
  const month = [];
  while (i <= 12) {
    month.push({
      id: i,
      label: i < 10 ? `0${i}` : String(i),
      value: i < 10 ? `0${i}` : String(i),
    });
    i++;
  }
  return month;
}

export function years() {
  let currentYear = new Date().getFullYear();
  const yearEnd = currentYear + 10;
  const year = [];
  let i = 1;
  while (currentYear <= yearEnd) {
    year.push({
      id: i,
      label: String(currentYear),
      value: String(currentYear),
    });
    currentYear++;
    i++;
  }
  return year;
}

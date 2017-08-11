export function shortDateFilter(date) {
  if (!date) {
    return '';
  }
  return date.substring(0, 10);
}

export function longDateFilter(date) {
  if (!date || typeof date !== 'string') {
    return '';
  }
  return `${date}T00:00:00.000Z`;
}

export function getDateWithoutOffset(date) {

  if (!date) {
    return new Date();
  }

  let newDate = new Date(date);
  newDate = new Date(newDate.getTime() + (newDate.getTimezoneOffset() * 60000));

  return newDate;
}

export function normalizeError(err) {

  if (err.name !== 'SyntaxError') {
    if (typeof err === 'string') {
      return err;
    } else if (err && err.message) {
      return err.message;
    }
  }

  return 'We have an error. Please try again in a few minutes.';
}

export function dateFilter(date) {
  if (!date) {
    return '';
  }
  return date.substring(0, 10);
}

export function normalizeError(err) {

  if (typeof err === 'string') {
    return err;
  } else if (err && err.message) {
    return err.message;
  }

  return 'We have an error. Please try again in a few minutes.';
}

function isEmpty(value) {
  if (value === null) {
    return true;
  }

  if (Array.isArray(value) || typeof value === 'string') {
    return !value.length;
  }

  if (typeof value === 'object') {
    return !Object.keys(value).length;
  }

  return true;
}

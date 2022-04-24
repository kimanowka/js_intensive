function selectFromInterval(arr, from, to) {
  const result = [];

  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not a array.`);
  }
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) {
      throw new Error(`${arr[i]} is not a number.`);
    }
  }
  if (!Number.isInteger(from) || !Number.isInteger(to)) {
    throw new Error(`arguments from and to must be a number.`);
  }
  let number;
  if (from > to) {
    number = from;
    from = to;
    to = number;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= from && arr[i] <= to) {
      result.push(arr[i]);
    }
  }
  return result;
}

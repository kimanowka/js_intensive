function makeObjectDeepCopy(obj) {
  let copy = {};
  if (!obj || typeof obj !== "object") {
    throw new Error(`${obj} is not a object.`);
  }
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      copy[key] = makeObjectDeepCopy(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
}

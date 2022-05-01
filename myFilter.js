Array.prototype.myFilter = function (cb, thisArg) {
  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }
  if (typeof cb !== "function") {
    throw new Error("Callback is not a function");
  }
  let context = this;

  const ObjectFromArray = Object(this);

  if (arguments.length > 1) {
    context = thisArg;
  }

  const res = [];

  for (let i = 0; i < ObjectFromArray.length; i++) {
    if (i in ObjectFromArray) {
      if (cb.call(context, context[i], i, ObjectFromArray)) {
        res.push(context[i]);
      }
    }
  }

  return res;
};

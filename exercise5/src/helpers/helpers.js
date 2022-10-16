export default {
  // group an array by key and returns an object containing percentage for each group
  // ex: groupByKey([{color: 'blue'}, {color: 'green'}, {color: 'blue'}, {color: 'blue'}], 'color')  =>  {blue: 0.75, green: 0.25}
  groupByKey(array = [], key) {
    if (array.length === 0) return;
    let total = 0;
    const valueCounter = {};
    array.forEach((obj) => {
      valueCounter[obj[key]] = valueCounter[obj[key]] ? valueCounter[obj[key]] + 1 : 1;
      total += 1;
    });
    Object.keys(valueCounter).forEach((key) => {
      valueCounter[key] = ((valueCounter[key] / total)).toFixed(2);
    });
    return valueCounter;
  },
  // get the value of an object at a given dotted path
  // ex: getValueAtPath({my: {dotted: {path: 123}}}, 'my.dotted.path')  =>  123
  getValueAtPath(obj, path, defaultValue='none') {
    if (path.indexOf('.') !== -1) {
      const nestedPath = path.split('.');
      return this.getValueAtPath(obj[nestedPath[0]], nestedPath.slice(1).join('.'));
    }
    return obj[path] || defaultValue;
  },
};

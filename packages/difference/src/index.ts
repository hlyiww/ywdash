const difference = (array: Array<any>, excludes: Array<any>) =>
  array.reduce(
    (acc, cur) => (excludes.includes(cur) ? acc : (acc.push(cur), acc), acc),
    []
  );
export default difference;

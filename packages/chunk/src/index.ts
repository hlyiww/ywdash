const chunk = (collection: Array<any>, size: number) => {
  let index = 0;
  return collection.reduce(
    (acc, cur) => (
      (acc[index] = acc[index] ?? []),
      acc[index].length < size
        ? acc[index].push(cur)
        : ((index += 1), (acc[index] = []), acc[index].push(cur)),
      acc
    ),
    []
  );
};

export default chunk;

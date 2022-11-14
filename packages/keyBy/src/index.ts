const handlerMap = {
  string: <T extends Array<any>>(collection: T, handler: handlerType<T>) =>
    collection.reduce((acc, cur) => ((acc[cur[handler]] = cur), acc), {}),
  function: <T extends Array<any>>(collection: T, handler: handlerType<T>) =>
    collection.reduce(
      (acc, cur) => ((acc[(handler as funcHandlerType<T>)(cur)] = cur), acc),
      {}
    ),
};

const keyBy = <T extends Array<any>>(
  collection: T,
  handler: handlerType<T>
) => {
  const handlerType = typeof handler as handlerTypeType;
  if (handlerType in handlerMap) {
    return handlerMap[handlerType](collection, handler);
  }
  console.warn("使用了不正确的处理方式");
};

export default keyBy;

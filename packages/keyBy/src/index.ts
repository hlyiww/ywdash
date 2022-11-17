import { handlerType, handlerTypeType, funcHandlerType } from "./type";

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
): { [key: keyof any]: UnwrapArray<T> } => {
  const handlerType = typeof handler as handlerTypeType;
  return handlerMap[handlerType](collection, handler);
};

export default keyBy;

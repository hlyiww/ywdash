import { handlerType } from "./type";

const groupBy = <T extends Array<any>>(
  collection: T,
  handler: handlerType<T>
) =>
  collection.reduce(
    (acc, cur) => (
      acc[handler(cur)] === undefined
        ? (acc[handler(cur)] = [])
        : acc[handler(cur)],
      acc[handler(cur)].push(cur),
      acc
    ),
    {}
  );

export default groupBy;

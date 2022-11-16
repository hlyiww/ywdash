type HandlerType<T> = (value: T[keyof T], key: keyof T) => {};

const nonEmptyFilter = (value: any) => value !== null && value !== undefined;

const pickBy = <T>(
  object: ObjectType<T>,
  handler: HandlerType<T> = nonEmptyFilter
) =>
  Object.keys(object)
    .map((key) => [
      object[key as keyof ObjectType<T>],
      key as keyof ObjectType<T>,
    ])
    .reduce(
      (acc: Partial<ObjectType<T>>, cur: any) =>
        handler(cur[0], cur[1])
          ? ((acc[cur[1] as keyof ObjectType<T>] = cur[0]), acc)
          : acc,
      {}
    );

export default pickBy;

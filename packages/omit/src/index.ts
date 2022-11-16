type OmitResultType<T, P> = Pick<
  ObjectType<T>,
  Exclude<keyof ObjectType<T>, UnwrapArray<P>>
>;

const omit = <T, P extends Array<keyof T>>(
  object: ObjectType<T>,
  props: P
): OmitResultType<T, P> =>
  Object.keys(object)
    .filter((e) => !props.includes(e as keyof ObjectType<T>))
    .reduce(
      (acc, cur) => ((acc[cur] = object[cur as keyof ObjectType<T>]), acc),
      {} as any
    );

export default omit;

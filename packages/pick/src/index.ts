type PickResultType<T, P> = Pick<
  ObjectType<T>,
  Extract<keyof ObjectType<T>, UnwrapArray<P>>
>;

const pick = <T, P extends Array<keyof T>>(
  object: ObjectType<T>,
  props: P
): PickResultType<T, P> =>
  props.reduce((acc, cur) => ((acc[cur] = object[cur]), acc), {} as any);

export default pick;

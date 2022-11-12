const compose =
  (...fns: FuncType[]) =>
  (...args: any[]) =>
    fns.reduce(
      (acc, cur) => () =>
        cur(...(acc(...args) instanceof Array ? acc(...args) : [acc(...args)]))
    )();

export default compose;

const compose =
  (...fns) =>
  (...args) =>
    fns.reduce(
      (acc, cur) => () =>
        cur(...(acc(...args) instanceof Array ? acc(...args) : [acc(...args)]))
    )();

export default compose;

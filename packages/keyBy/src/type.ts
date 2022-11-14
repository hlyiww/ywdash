type funcHandlerType<T> = (...args: UnwrapArray<T>[]) => any;
type handlerType<T> = keyof UnwrapArray<T> | funcHandlerType<T>;
type handlerTypeType = "string" | "function";

export type funcHandlerType<T> = (...args: UnwrapArray<T>[]) => any;
export type handlerType<T> = keyof UnwrapArray<T> | funcHandlerType<T>;
export type handlerTypeType = "string" | "function";

type FuncType = (...args: any[]) => any;

type ObjectType<T = any> = {
  [key in keyof T]: T[key];
};

type UnwrapArray<T> = T extends Array<infer P> ? P : never;

type ItemType<T extends object[]> = {
  [K in keyof UnwrapArray<T>]: UnwrapArray<T>[K];
};

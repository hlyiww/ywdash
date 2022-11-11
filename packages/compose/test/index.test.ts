import compose from "../src/index";
test("happy path", () => {
  const fn1 = (x: any, y: any) => x + y;
  const fn2 = (x: any) => x * 2;
  const fn3 = (x: any) => x / 3;

  expect(compose(fn1, fn2, fn3)(1, 2)).toBe(2);
});

test("muti args", () => {
  const fn4 = (x: any, y: any) => [x + y, 2];
  const fn5 = (x: any, y: any) => x * y;
  expect(compose(fn4, fn5)(1, 2)).toBe(6);
});

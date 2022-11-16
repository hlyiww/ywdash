import pickBy from "../src/index";

it("happy path", () => {
  const obj = {
    a: 1,
    b: 2,
    name: "john",
    sign: false,
    habits: null,
  };
  const a = pickBy(obj, (value, key) => value === 2);
  expect(pickBy(obj, (value, key) => value === 2)).toEqual({
    b: 2,
  });
  expect(pickBy(obj)).toEqual({
    a: 1,
    b: 2,
    name: "john",
    sign: false,
  });
});

import keyBy from "../src/index";

it("key is string", () => {
  const obj = [
    { name: "john", age: 12 },
    { name: "tom", age: 32 },
    { name: "jack", age: 62 },
  ];
  expect(keyBy(obj, "name")).toEqual({
    john: { name: "john", age: 12 },
    tom: { name: "tom", age: 32 },
    jack: { name: "jack", age: 62 },
  });
});

it("key is function", () => {
  const obj = [
    { name: "john", age: 12 },
    { name: "tom", age: 32 },
    { name: "jack", age: 62 },
  ];
  expect(keyBy(obj, (item) => item.age + 20)).toEqual({
    32: { name: "john", age: 12 },
    52: { name: "tom", age: 32 },
    82: { name: "jack", age: 62 },
  });
});

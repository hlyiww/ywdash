import pick from "../src/index";

it("happy path", () => {
  const obj = {
    a: 1,
    b: "2",
    c: 3,
  };
  const ac = pick(obj, ["a", "c"]);

  expect(pick(obj, ["a", "c"])).toEqual({
    a: 1,
    c: 3,
  });
});

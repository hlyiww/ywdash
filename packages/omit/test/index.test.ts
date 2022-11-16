import omit from "../src/index";

it("happy path", () => {
  const users = {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true },
  };

  expect(omit(users, ["fred", "pebbles"])).toEqual({
    barney: { age: 36, active: true },
  });
});

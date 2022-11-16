import difference from "../src/index";

it("happy path", () => {
  expect(difference([3, 2, 1], [4, 2])).toEqual([3, 1]);
  expect(difference([3, 5, 21, 267, 23], [5, 21])).toEqual([3, 267, 23]);
});

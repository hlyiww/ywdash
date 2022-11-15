import chunk from "../src/index";

const array = [1, 2, 3, 4, 5];
const array2 = [{ name: "test" }, 2, 3, 4, 5];

test("happy path ", () => {
  expect(chunk(array, 2)).toEqual([[1, 2], [3, 4], [5]]);
  expect(chunk(array, 3)).toEqual([
    [1, 2, 3],
    [4, 5],
  ]);
  expect(chunk(array2, 4)).toEqual([[{ name: "test" }, 2, 3, 4], [5]]);
});

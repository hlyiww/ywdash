import groupBy from "..//src/index";

test("happy path", () => {
  const array = [6.1, 4.2, 6.3];
  expect(groupBy(array, Math.floor)).toEqual({
    4: [4.2],
    6: [6.1, 6.3],
  });
});

test("custom function", () => {
  const arr = [12, "2123", 67];
  const fn = (item: any) => {
    item = Number(item);
    if (item > 100) {
      return "> 100";
    }
    return "<= 100";
  };
  expect(groupBy(arr, fn)).toEqual({
    "> 100": ["2123"],
    "<= 100": [12, 67],
  });
});

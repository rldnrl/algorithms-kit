import selectionSort from "./selection-sort";
import insertionSort from "./insertion-sort";

describe("Selection Sort", () => {
  it("success sort", () => {
    expect(insertionSort([4, 5, 1, 2, 3, 0])).toStrictEqual([0, 1, 2, 3, 4, 5])
    expect(insertionSort([10, 3, 2, 1, 100, 50])).toStrictEqual([1, 2, 3, 10, 50, 100])
  })
})
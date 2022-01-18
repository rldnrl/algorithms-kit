import checkCamelCase from "./checkCamelCase";

describe("check camel case", () => {
  it("should be true", () => {
    expect(checkCamelCase("endOfString")).toBeTruthy();
    expect(checkCamelCase("python")).toBeTruthy();
  });

  it("should be false", () => {
    expect(checkCamelCase("PascalCase")).toBeFalsy();
    expect(checkCamelCase("snake_case")).toBeFalsy();
    expect(checkCamelCase("")).toBeFalsy();
  });
});

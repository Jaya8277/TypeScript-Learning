const sum = require("../sum_arguments");

describe("Testing sum of two numbers", function () {
  test("should work on all posititive numbers", function () {
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, 1)).toBe(1);
    expect(sum(3, 3)).toBe(6);
  });

  test("should work on all negative numbers", function () {
    expect(sum(-3, -3)).toBe(-6);
    expect(sum(-3, -4)).toBe(-7);
  });

  test("should work on all real numbers", function () {
    expect(sum(-3, 3)).toBe(0);
    expect(sum(-3, 4)).toBe(1);
  });

  test("should work on all rational numbers", function () {
    expect(sum(1.2, 2.1)).toBe(3.3);
    expect(sum(-3.1, 3.1)).toBe(0);
  });
});
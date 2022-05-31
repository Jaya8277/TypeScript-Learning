   
const tax = require("../tax-calculator");

describe("Testing tax calculation", function () {
  test("should work on all posititive numbers", function () {
    expect(tax(0)).toBe(0);
    expect(tax(249999)).toBe(0);
    expect(tax(250000)).toBe(25000);
    expect(tax(500000)).toBe(100000);
    expect(tax(1200000)).toBe(360000);
    expect(tax(9000000)).toBe(2700000);
  });
});
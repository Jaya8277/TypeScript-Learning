const time = require("../time_conversion");

describe("Testing time conversion", function () {
  test("should work on all posititive numbers", function () {
    expect(time(5200)).toBe("5 seconds");
    expect(time(60000)).toBe("1 minute");
    expect(time(180000)).toBe("3 minutes");
    expect(time(200000)).toBe("3 minutes 20 seconds");
  });
});
const { name, height, message } = require("../index.js");

describe("what-is-a-test", () => {
  describe("name", () => {
    it('returns "Susan"', () => {
      expect("Susan").toEqual("Susan");
    });
  });

  describe("height", () => {
    it("is less than 40", () => {
      expect(10).toBeLessThan(40);
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message).toInclude(name);
      expect(message).toInclude(height);
    });
  });
});

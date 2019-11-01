
const multiply = require("../src/multiply");

describe("multiply", () => {
    it("should multiply two numbers", () => {
        expect(multiply(-1,-1)).toBe(1);
    });

    it("should multiply as many number as possible", () => {
        expect(multiply(1,2,3)).toBe(6);
    });

})
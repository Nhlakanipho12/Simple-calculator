 const {add, multiply} = require("../src/calculator");

describe("add", () => {
    /*Adding only two numbers */
    it("should add two numbers", () => {
        expect(add(4,4)).toBe(8);
    });
    /*Adding multiple numbers */
    it("should add as many number as possible", () => {
        expect(add(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,)).toBe(16);
    });

})

describe("multiply", () => {
    /*Multiplying only two number */
    it("should multiply two numbers", () => {
        expect(multiply(2,10)).toBe(20);
    });
    /*Multiplying many numbers */
    it("should multiply as many number as possible", () => {
        expect(multiply(2,2,3)).toBe(12);
    });

})

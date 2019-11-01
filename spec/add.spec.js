const add = require("../src/add");

/*describe("add", () => {
    it("should add two numbers", () => {
        expect(add(1,1)).toBe(0);
    });
});*/

describe("add", () => {
    it("should add two numbers", () => {
        expect(add(1,1)).toBe(2);
    });

    it("should add as many number as possible", () => {
        expect(add(1,2,3)).toBe(6);
    });

});

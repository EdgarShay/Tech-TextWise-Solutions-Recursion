const reverseString = require("../reverseString.js");
describe("Reverse String Tests", () => {
    // -------- Normal Cases --------
    test("Reverses a normal word", () => {
        expect(reverseString("hello")).toBe("olleh");
    });

     test("Reverses sentence with spaces", () => {
        expect(reverseString("Text Wise")).toBe("esiW txeT");
    });
    test("Reverses numeric string", () => {
        expect(reverseString("12345")).toBe("54321");
    });
    // -------- Edge Cases --------
    test("Handles empty string", () => {
        expect(reverseString("")).toBe("");
    });
    test("Handles single character", () => {
        expect(reverseString("A")).toBe("A");
    });
    test("Throws error on null input", () => {
        expect(() => reverseString(null)).toThrow();
    });
});


const {removeWord} = require("./removeWord");

describe("remove word", () => {
    test('should remove specified word', () => {
        expect(removeWord("hello world", "hello")).toBe("world");
    })

    test('should return empty string', () => {
        expect(removeWord("", "hello")).toBe("");
    })

    test('should return string without blank space', () => {
        expect(removeWord("hello world")).toBe("helloworld");
    })

})

const {removeWord} = require("./removeWord");

test('remove word from string', () => {
    expect(removeWord("hello world", "hello")).toBe("world");
})
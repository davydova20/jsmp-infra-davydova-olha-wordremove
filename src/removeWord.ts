const _ = require("lodash");

export function removeWord(str: string, word: string) {
    const arr = _.split(str, " ");
    _.pull(arr, word);
    return _.join(arr, "");
}


module.exports = function check(str, bracketsConfig) {
    const res = [];
    for (const char of str) {
        if (res[res.length - 1] == char) {
            res.pop();
        } else {
            const pair = bracketsConfig.find(pair => pair[0] === char);
            if (pair) res.push(pair[1]);
            else return false;
        }
    }
    return !res.length;
};

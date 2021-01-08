function maxChar(str) {
    const charMap = {};

    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
        }
    }
    console.log(max);
    console.log(charMap);
}
maxChar('apple');
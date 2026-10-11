class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
            let s = "";

    for (let i = 0; i < strs.length; i++) {
        s += strs[i];
        s += '#hassan';

    }

    return s;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) { 

        let words = str.split("#hassan");
        words.pop();


    return words
    }
}

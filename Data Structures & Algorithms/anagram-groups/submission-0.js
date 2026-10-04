class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashtable = new Map();
        strs.forEach((str) => {
            let key = str.split("").sort().join("");
            if (!hashtable.has(key)) {
                hashtable.set(key, []);
            }
            hashtable.get(key).push(str);

        });
            return Array.from(hashtable.values());

    }
}

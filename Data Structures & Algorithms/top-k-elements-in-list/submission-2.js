class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashtable = new Map();
        nums.forEach((num) => {
            let key = num;
            if (hashtable.has(num)) {
                hashtable.set(key, hashtable.get(num) + 1);
            }
            if (!hashtable.has(num)) {
                hashtable.set(key, 1);
            }


        });
                    let buckets = Array.from({ length: nums.length + 1 }, () => []);
            hashtable.forEach((frequency, num) => {
                buckets[frequency].push(num);
            });
            
            let result = [];

            for (let i = buckets.length - 1; i >= 1; i--) {
                for (let num of buckets[i]) {
                    result.push(num);

                    if (result.length === k) {
                        return result;
                    }
                }
            }

            return result;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    charCount(string) {
        let obj = {};
        for (const ch of string) {
            if (obj[ch]) {
                obj[ch]++
            } else {
                obj[ch] = 1
            }
        }
        return obj;
    }

    isAnagram(s, t) {
        const firstObj = this.charCount(s);
        const secondObj = this.charCount(t);
        if (Object.keys(firstObj).length !== Object.keys(secondObj).length) {
            return false
        } else {
            for (const key in firstObj) {
                if (secondObj[key] !== firstObj[key]) {
                    return false
                }

            }
            return true
        }


    }
}

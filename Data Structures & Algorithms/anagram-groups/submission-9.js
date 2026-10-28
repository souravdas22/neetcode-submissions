class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    sortString(str) {
        return str.split('').sort().join('');
    }

    // groupAnagrams(strs) {
    //     const result = []
    //     const alreadyUsed = new Set()

    //     for (let i = 0; i < strs.length; i++) {
    //          if (alreadyUsed.has(i)) {
    //             continue
    //         }
    //         const group = [strs[i]]
    //         for (let j = i + 1; j < strs.length; j++) {
    //             if (this.sortString(strs[i]) === this.sortString(strs[j])) {
    //                 group.push(strs[j])
    //                 alreadyUsed.add(j)
    //             }
    //         }
           
    //         result.push(group)
    //     }
    //     return result;

    // }
    groupAnagrams(strs) {
    const groups = {};

    for (const str of strs) {
        const key = this.sortString(str);

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(str);
    }

    return Object.values(groups);
}
}

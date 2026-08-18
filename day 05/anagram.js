function isAnagram(str1,str2) {
    if (str1.length !== str2.length) {
        return "not anagram";
    }
    let count1 ={};
    let count2 ={};
    for (let i = 0;i <str1.length;i++){
        let char1 =str1[i];
        let char2 =str2[i];
        count1[char1] = (count1[char1] || 0) + 1;
        count2[char2] = (count2[char2] || 0) + 1;
    }
    for (let char in count1) {
        if (count1[char] !==count2[char]) {
            return"notanagram";
        }
    }
    return"anagram";
}
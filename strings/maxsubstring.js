function getMaxSubstring(s = "") {
    let chars = {};
    let maxSub = 0;
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        if (s[r] in chars)
            l = Math.max(chars[s[r]] + 1, l);
        chars[s[r]] = r;
        maxSub = Math.max(maxSub, r - l + 1);
    }

    return maxSub;
}

/**
 * Finds out if a string is a palindrome using two pointer method
 * @param {String} str 
 */
function is_palind(str) {
    let l = 0,
        r = str.length - 1;

    while (l < r) {
        if (str[l] !== str[r])
            return false;
        l++;
        r--;
    }
    return true;
}

console.log(is_palind('racecar'));
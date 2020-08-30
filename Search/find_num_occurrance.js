
function binarySearch(arr = [], t, l, r) {
    let mid = Math.floor((r + l) / 2);

    if (t === arr[mid])
        return mid;
    if (r < l)
        return -1;
    if (arr[mid] > t)
        return binarySearch(arr, t, l, mid - 1);
    else
        return binarySearch(arr, t, mid + 1, r);
}


function index(arr, t) {
    let index = binarySearch(arr, t, 0, arr.length - 1);
    if (index == -1)
        return 0;
    let count = 1;
    let left = index - 1;
    while (arr[left] === t) {
        count++;
        left--;
    }
    let right = index + 1;
    while (arr[right] === t) {
        count++;
        right++;
    }
    return count;
}

console.log(index([1, 2, 3, 4, 4, 4,4, 5, 5, 6, 7, 8, 9], 4))
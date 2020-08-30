/**
 * search an element in a sorted and rotated array
 * @example Input: arr[]=[5,6,7,8,9,10,1,2,3], target=3 Output: Found at index 8
 * 
 */

/**
 * first of all, we use binary search to find the pivot point, then 
 * divide the array into subarrays and use binary search to search 
 * each of the sub array to look for the target
 */

function binarySearch(arr, target, r, l) {
    r = r || arr.length - 1, l = l || 0;

    if (r < l)
        return -1;

    let mid = Math.floor((r + l) / 2);
    if (target === arr[mid])
        return mid;
    if (target > arr[mid])
        return binarySearch(arr, target, r, mid + 1);
    else
        return binarySearch(arr, target, mid - 1, l);
}

function findPivot(arr = [], r, l) {
    l = l || 0;
    r = r || arr.length - 1;
    let mid = Math.floor((r + l) / 2);

    if (r < l)
        return -1;
    if (r == l)
        return l;
    if (arr[mid] > arr[mid + 1])
        return mid;
    if (arr[mid] < arr[mid - 1])
        return mid - 1;
    if (arr[mid] > arr[r])
        return findPivot(arr, r, mid + 1);
    else
        return findPivot(arr, mid - 1, l);
}

/**
 * Main entry point
 * @param {Array} arr 
 * @param {*} key 
 * @param {*} l 
 * @param {*} r 
 */
function pivotedBinarySearch(arr, key, l, r) {
    let n = arr.length;
    let pivot = findPivot(arr, n - 1, 0)
    if (arr[pivot] == key)
        return pivot;

    if (pivot === -1)
        return binarySearch(arr, key, n - 1, 0); // the array is not rotated at all.
    if (key >= arr[0])
        return binarySearch(arr, key, pivot - 1, 0);
    else
        return binarySearch(arr, key, n - 1, pivot + 1);
}

console.log(pivotedBinarySearch([5, 6, 7, 8, 9, 10, 1, 2, 3], 2))

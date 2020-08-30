/**
 * Given a sorted array of integers and a target sum T,
 * return true if there exists a pair in the array that sums to T.
 * @example 
 * Arr=[2,3,4,5,6,7,9]
 * T = 5   -  True
 * T = 2   -  False
 * T = 7   -  True
 */

/**
 * SOLUTION
 * 
 * Questions
 * 1. Are there negative elements in the array?
 * 2. Are there repetitions?
 * 3. Are there upper&lower bounds?
 * 4. Is empty array a possiblity?
 */

/**
 * BRUTE FORCE
 * 
 * we loop the array in 'n' times
 * then loop the array again in n-1 times to compare pairs
 * 
 * return true if any pair sum up to T
 * 
 * Time Complexity: n*n-1 === O(n2)
 */

/**
 * Efficient solution 1: Binary Search
 * Time Complexity: O(nlogn)  
 */
function FindSum(arr = [], T) {
    for (elem in arr) {
        if (binarySearch(T - elem) > -1)
            return true
    }
    return false;
}

/**
 * Efficient solution 2: Two Pointer  
 * Time Complexity: O(n) 
 */
function FindSum(arr = [], T) {
    let leftIndex = 0,
        rightIndex = arr.length - 1;
    while (leftIndex < rightIndex) {
        let cur = arr[leftIndex] + arr[rightIndex];
        if (cur == T)
            return true;
        else if (cur > T)
            rightIndex -= 1;
        else
            leftIndex += 1;
    }
    return false;
}








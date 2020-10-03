class Sort {
    bubble(arr = []) {
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n - 1; j++) {
                if (arr[i] > arr[j + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    selection(arr = []) {
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            let min_index = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[min_index]) {
                    let temp = arr[j];
                    arr[j] = arr[min_index];
                    arr[min_index] = temp;
                }
            }
        }
        return arr;
    }

    merge(arr = []) {

        function mergeArrays(leftArr = [], rightArr = []) {
            let l = 0,
                r = 0;
            let tempArr = [];
            while (l < leftArr.length && r < rightArr.length) {
                if (leftArr[l] < rightArr[r]) {
                    tempArr.push(leftArr[l]);
                    l++;
                } else {
                    tempArr.push(rightArr[r]);
                    r++;
                }
            }
            // let add the remaining items in the left array
            while (l < leftArr.length) {
                tempArr.push(leftArr[l]);
                l++;
            }
            // let add the remaining items in the right array
            while (r < rightArr.length) {
                tempArr.push(rightArr[r]);
                r++;
            }
            return tempArr;
        }

        /**
         * Main entry point
         * @param {Array} arr 
         */
        function mergeSort(arr = []) {
            if (arr.length <= 1)
                return arr;
            // let find the middle point to divide the array into two half
            let middle = Math.floor(arr.length / 2);
            // let get the left and the right halves
            let leftArr = arr.slice(0, middle);
            let rightArr = arr.slice(middle);

            let result = mergeArrays(mergeSort(leftArr), mergeSort(rightArr));
            return result;
        }

        return mergeSort(arr);
    }
}

module.exports = Sort;

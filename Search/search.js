
class Search {

    binary(arr = [], target) {

        let max = arr.length - 1,
            min = 0;
        while (max >= min) {
            let middle = Math.floor((max + min) / 2);
            if (arr[middle] === target)
                return middle;
            if (arr[middle] > target) {
                max = middle - 1;
            } else {
                min = middle + 1;
            }
        }
        return -1;
    }

    binaryRecurence(arr = [], target, l, r) {
        l = l || 0;
        r = r || arr.length - 1;

        if (r < l)
            return -1;

        let mid = Math.floor((r + l) / 2);

        if (arr[mid] === target)
            return mid;
        if (target > arr[mid])
            return this.binaryRecurence(arr, target, mid + 1, r);
        else
            return this.binaryRecurence(arr, target, l, mid - 1);
    }

    linear(arr = [], target = 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target)
                return i;
        }
        return -1;
    }
}

module.export = Search;

class Search {

    binary(arr = [], target) {

        let r = arr.length - 1,
            l = 0;
        while (r >= l) {
            let mid = Math.floor((r + l) / 2);
            if (arr[mid] === target)
                return mid;
            if (arr[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
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
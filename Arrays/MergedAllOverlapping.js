function mergeOverlapse(arr = [[]]) {
    let transFormArr = arr.map((ar) => ({ start: ar[0], end: ar[1] }));
    transFormArr.sort((a, b) => {
        if (a.start > b.start)
            return 1;
        else if (a.start < b.start)
            return -1;
        else
            return 0;
    })
    // console.log(transFormArr)
    let output = [];
    for (int of transFormArr) {
        let outlen = output.length;
        if (outlen > 0 && int.start <= output[outlen - 1][1])
            output[outlen - 1][1] = Math.max(output[outlen - 1][1], int.end)
        else {
            output.push(Array.of(int.start, int.end))
        }
    }
    console.log(output)
}

mergeOverlapse([[1, 2], [4, 6], [3, 5], [7, 9], [4, 8]])
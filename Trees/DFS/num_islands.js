var matrix = [
    [1, 0, 1, 1],
    [0, 1, 0, 1],
    [1, 0, 0, 0]
];


function DFS(x, y, grid = [[]]) {
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === 0)
        return;
    grid[x][y] = 0;
    DFS(x + 1, y, grid);
    DFS(x - 1, y, grid);
    DFS(x, y - 1, grid);
    DFS(x, y + 1, grid);
}

function get_num_islands(grid = [[]]) {
    if (grid.length === 0)
        return 0;
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                count++;
                DFS(i, j, grid);
            }
        }
    }
    return count;
}

console.log(get_num_islands(matrix));
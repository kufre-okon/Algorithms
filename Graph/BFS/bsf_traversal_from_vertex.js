class Graph {
    /**
     * @param v - number of vertices(nodes)
     */
    constructor(v = 0) {
      this.V = v;
      this.adj = [[]];
      for (let i = 0; i < v; i++) {
        this.adj.push([]);
      }
    }
    /**
     * Add an edge into the graph
     */
    addEdge(v, u) {
      this.adj[v].push(u);
    }
  
    /**
     * Print BFS travesal from a given source s
     */
    BFS(s) {
      // mark all the vertices as not visited
      var visited = [];
      for (let i = 0; i < this.V; i++) {
        visited[i] = false;
      }
      // create a queue for BFS
      var queue = [];
      // mark the current node as visited
      visited[s] = true;
      queue.push(s);
  
      while (queue.length) {
        // dequeue a vertex from queue and print it
        s = queue.pop();
        // get all adjacent vertices of the dequeued vertex s.
        // if a adjacent has not been visited, then mark it
        var list = this.adj[s];
        for (let v in list) {
          if (!visited[list[v]]) {
            visited[list[v]] = true;
            queue.push(list[v]);
          }
        }
      }
    }
  }
  
  var g = new Graph(4);
  g.addEdge(0, 1);
  g.addEdge(0, 2);
  g.addEdge(1, 2);
  g.addEdge(2, 0);
  g.addEdge(2, 3);
  g.addEdge(3, 3);
  console.log("Following is the BFS traversal(starting from vertex 2)\n");
  g.BFS(2);
  
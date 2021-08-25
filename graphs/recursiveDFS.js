const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

function dfs(graph, startNode) {
   console.log(startNode);
   for(let neighbour of graph[startNode]) {
       dfs(graph, neighbour);
   }
}

dfs(graph, 'a');
function dfs(graph, start, visited) {
    if(visited.has(String(start))) return;
    visited.add(String(start));
    for(let neighbour of graph[start]) {
        dfs(graph, neighbour, visited);
    }
}

function countComponents(graph) {
    let count = 0;
    let visited = new Set();
    for(let node in graph) {
        if(!visited.has(String(node))) {
            count++;
            dfs(graph, node, visited);
        }
    }
    return count;
}



console.log(countComponents({
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
  }));
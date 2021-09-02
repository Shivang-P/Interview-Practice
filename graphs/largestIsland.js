function getComponentSize(graph, start, visited) {
    if(visited.has(start)) return 0;
    visited.add(start);
    count = 1;

    for(let neighbour of graph[start]) {
        if(!visited.has(neighbour)) {
            count += getComponentSize(graph, neighbour, visited);
        }
    }
    return count;
}

function getLargest(graph) {
    let max = 0;
    let visited = new Set();
    for(let node in graph) {
        if(!visited.has(node)) {
            max = Math.max(max, getComponentSize(graph, node, visited));
        }
    }
    return max;
}


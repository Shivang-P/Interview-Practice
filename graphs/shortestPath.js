function getGraph(edges) {
    let graph = {};
    for(let edge of edges) {
        const [a, b] = edge;
        if(!(graph[a])) graph[a] = [];
        if(!(graph[b])) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

function shortestPath(edges, start, end) {
    const graph = getGraph(edges)
    let visited = new Set();
    if(start == end) return 0;
    let queue = [[start, 0]]
    visited.add(start);

    while(queue.length > 0) {
        const [currentNode, currentDistance] = queue.shift();
        if(currentNode == end) return currentDistance;
        for(let neighbour of graph[currentNode]) {
            if(!visited.has(neighbour)) {
                queue.push([neighbour, currentDistance + 1])
                visited.add(neighbour);
            }
        }
    }
}
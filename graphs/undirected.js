function getAdjacencyList(edgeList) {
    let graph = {}

    for(let connection of edgeList) {
        const [a, b] = connection;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

function hasPath(graph, start, end, visited) {
    if(visited.has(start)) return false;
    if(start == end) return true;

    visited.add(start);
    for(let neighbour of graph[start]) {
        if(hasPath(graph, neighbour, end, visited)) {
            return true;
        }
    }

    return false;
}

let edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
    ['k', 'j']
]

console.log(getAdjacencyList(edges));
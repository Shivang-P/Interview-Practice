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

function hasPath(graph, start, end) {
    let stack = [ start ];
    let visited = new Set();
    visited.add(start);

    while(stack.length > 0) {
        let current = stack.pop();

        if(current == end) {
            return true;
        }

        for(let neighbour of graph[current]) {
            if(!visited.has(neighbour)) {
                stack.push(neighbour);
                visited.add(neighbour);
            }
        }
    }
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
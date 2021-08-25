const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

function dfs(graph, startNode) {
    if(!graph) return;
    let stack = [];
    stack.push(startNode);
    while(stack.length > 0) {
        let current = stack.pop();
        console.log(current);
        for(let neighbour of graph[current]) {
            stack.push(neighbour);
        }
    }
}

dfs(graph, 'a');
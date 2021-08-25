const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

function bfs(graph, startNode){
    if(!graph) return;

    let queue = [ startNode ];

    while(queue.length > 0) {
        let current = queue.shift();
        console.log(current);
        for(let neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }
}

bfs(graph, 'a');
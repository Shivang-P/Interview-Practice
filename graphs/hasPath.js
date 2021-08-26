//Return a boolean that represents whether a directed, acyclic, graph has a path between a given
//start node and end node.

function hasPath(graph, start, end) {
    let stack = [ start ];
    while(stack.length > 0) {
        let current = stack.pop();
        if(current == end) {
            return true;
        }

        for(let neighbour of graph[current]) {
            stack.push(neighbour);
        }
    }
    return false;
}

// const graph = {
//     f: ['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
//   };

// console.log(hasPath(graph, 'f', 'k')); //true

// const graph = {
//     f: ['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
//   };
  
//   console.log(hasPath(graph, 'f', 'j')); //false

// const graph = {
//     f: ['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
//   };
  
//   console.log(hasPath(graph, 'i', 'h')); //true

// const graph = {
//     v: ['x', 'w'],
//     w: [],
//     x: [],
//     y: ['z'],
//     z: [],  
//   };
  
//   console.log(hasPath(graph, 'v', 'w')); //true

// const graph = {
//     v: ['x', 'w'],
//     w: [],
//     x: [],
//     y: ['z'],
//     z: [],  
//   };
  
//   console.log(hasPath(graph, 'v', 'z')); //false



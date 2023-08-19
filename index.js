const queue = [];
const visited = new Set();
let solution;
let found = false;

const moveset = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]];

function isValidMove(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8 && !visited.has(`${x},${y}`);
}

function knightMoves(start, end) {
    queue.push({ position: start, path: [[start]] });
    visited.add(`${start[0]},${start[1]}`);

    while (queue.length > 0) {

        let current = queue.shift();

        if (current.position[0] === end[0] && current.position[1] === end[1]) {
            solution = current;
            found = true;
            break;
        }

        for (let i = 0; i < moveset.length; i++) {
            const move = moveset[i];
            const newX = current.position[0] + move[0];
            const newY = current.position[1] + move[1];

            if (!isValidMove(newX, newY)) {
                continue;
            }

            visited.add(`${newX},${newY}`);

            const newPosition = [newX, newY];
            const newPath = [...current.path];
            newPath.push(newPosition);

            const newMove = {
                position: newPosition,
                path: newPath
            }

            queue.push(newMove);
        }
    }

    if (found) {
        console.log("[[" + solution.path.join("],\n[") + "]]")
    } else {
        console.log("no solution");
    }

}

const start = [0, 0];
const end = [7, 7];

knightMoves(start, end);
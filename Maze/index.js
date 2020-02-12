const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

const cells = 3;
const width = 600;
const height = 600;
//every cell that i create will be this tall and this wide
const unitLength = width / cells;

//Add the canvas
const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: true,
        width,
        height
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);

//walls
const walls = [
    Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
    Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
    Bodies.rectangle(width, height / 2, 2, height, { isStatic: true })
];
World.add(world, walls);

//MAZE GENERATION :

//array that will reorder the element inside the array
const shuffle = arr => {
    let counter = arr.length;

    while(counter > 0 ) {
        const index = Math.floor(Math.random() * counter);

        counter --;

        const temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }
    return arr;
};

const grid = Array(cells)
    .fill(null)
    .map(() => Array(cells).fill(false));

const verticals = Array(cells)
    .fill(null)
    .map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
    .fill(null)
    .map(() => Array(cells).fill(false));


const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);


//function for starting row and column
const stepTroughCell = (row, column) => {
    //if visited the cell at[row, column]then return
    if (grid[row][column]) {
        return;
    };
    //mark this cell as being visited
    grid[row][column] = true;
    //assemble randomly-ordered list of neighbors
    const neighbors = shuffle([
        [row - 1, column, 'up'],
        [row, column + 1, 'right'],
        [row + 1, column, 'down'],
        [row, column - 1, 'left']
    ]);
    //for each neighbor ..
    for (let neighbor of neighbors) {
        const [nextRow, nextColumn, direction] = neighbor;
    
    //see if that neighbor is out of bounds
    if(
        nextRow <0 || 
        nextRow >= cells || 
        nextColumn <0 || 
        nextColumn >= cells
        ){
        continue;
    }

    //if we visited that neighbor, continue to next neighbor
    if(grid[nextRow][nextColumn]) {
        continue;
    }
    //remove wall from either horizontals or vertials
    if (direction === 'left') {
        verticals[row][column - 1] = true;
    } else  if (direction === 'right') {
        verticals[row][column] = true;
    } else if (direction === 'up') {
        horizontals[row - 1][column] = true;
    } else if (direction === 'down') {
        horizontals[row][column] = true;
    }

    stepTroughCell(nextRow, nextColumn);
    }
    //visit that next cell
};

stepTroughCell(startRow, startColumn);

//iterate horizontals
horizontals.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
        if (open) {
            return;
        }
        
        const wall = Bodies.rectangle(
            columnIndex * unitLength + unitLength / 2,
            rowIndex * unitLength + unitLength,
            unitLength,
            5,
            {
                isStatic: true
            } 
        );
        World.add(world, wall);
    });
});

//iterate verticals
verticals.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
        if(open) {
            return;
        }
        
        const wall = Bodies.rectangle(
            columnIndex * unitLength + unitLength,
            rowIndex * unitLength + unitLength / 2,
            5,
            unitLength,
            {
                isStatic: true
            } 
        );
        World.add(world, wall);
    });
});

// goal
const goal = Bodies.rectangle(
    width - unitLength / 2,
    height - unitLength / 2,
    unitLength * .7,
    unitLength * .7,
    {
        label: 'goal',
        isStatic: true        
    }
);
World.add(world, goal);

//BALL
const ball = Bodies.circle(
    unitLength / 2,
    unitLength / 2,
    unitLength / 4,
    {label: 'ball'}
);
World.add(world, ball);

//move ball
document.addEventListener('keydown', event => {
    const { x, y } = ball.velocity;
    if (event.keyCode === 87) {
        Body.setVelocity(ball, { x, y: y - 5 });
    }

    if (event.keyCode === 68) {
        Body.setVelocity(ball, { x: x + 5, y });
    }
    if (event.keyCode === 83) {
        Body.setVelocity(ball, { x, y: y + 5 });
    }
    if (event.keyCode === 65) {
        Body.setVelocity(ball, { x: x - 5, y });
    }
})

//GAME OVER, Win condition

Events.on(engine, 'collisionStart', event => {
    event.pairs.forEach(collision => {
        const labels = ['ball', 'goal'];

        if (
            labels.includes(collision.bodyA.label) &&
            labels.includes(collision.bodyB.label)
        ){
            console.log('winner')
        }
    });
});

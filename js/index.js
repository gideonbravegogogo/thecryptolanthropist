
canvas = document.querySelector('canvas')
canvas.width = 1920
canvas.height = 1080

c = canvas.getContext('2d')
let shapes = []

shapeTypes = ['circ'] //['squa', 'circ', 'rect']
maxSize = 16
add = true

themes = [
    g = { r: 9, g: 133, b: 50 },
    b = { r: 50, g: 9, b: 255 },
    r = { r: 255, g: 0, b: 0 },
    y = { r: 9, g: 255, b: 255, random: 1 },
    y = { r: 255, g: 255, b: 9, random: 3 },
]

theme = themes[Math.floor(Math.random() * themes.length)]

drawMouseArc = false

const mouseArc = {
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    radius: 230,
    color: 'rgba(255,255,50,0.5) '
}

function spawnShapes(num) {
    for (let i = 0; i < num; i++) {
        let color = 'purple';

        color = switchColors()

        shapes.push(
            new shape({
                type: shapeTypes[thisshape],
                position: {
                    x: Math.floor(canvas.width * Math.random()),
                    y: -500+Math.floor(canvas.height * Math.random())
                },
                width: size,
                height: Math.floor(size * Math.random()),
                r: size,
                color

            }))
    }
}
maxShapes = 500
function animate() {
    if (maxSize === 30) {
        add = false
    }
    if (maxSize === 12) {
        add = true
    }
    if (add) { maxSize++ } else { maxSize-- }
    window.requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    //drawRect(0, 0, canvas.width, canvas.height,'rgba:0,0,0,0.1')
    //DRAW MOUSE ARC if (drawMouseArc){drawArc(mouseArc.position.x,mouseArc.position.y,mouseArc.color,mouseArc.radius)}

    size = Math.floor(maxSize * Math.random())
    thisshape = Math.floor(Math.random() * shapeTypes.length)
    //console.log(shapes.length)
    if (shapes.length < maxShapes) {
        spawnShapes(2)
    } else {
        //shapes.splice(1,1)
    }
    prevShape = null
    shapes.forEach(shape => {
        for (let i = 0; i < shapes.length; i++) {
            const indexedShape = shapes[i]
            if (this != null && indexedShape != null && indexedShape != this) {
                shape.detectCollisions(indexedShape)
            }
        }

        shape.update()
    });
}
animate()

window.addEventListener('keydown', (event) => {
    if (event.code==='keyG'){console.log('clean up shapes')}
    shapes.forEach(shape => {
        shape.movement(true, event.code)
    });
})
window.addEventListener('keyup', (event) => {
    shapes.forEach(shape => {
        shape.movement(false, event.code)
    });
})


const mouse = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) => {
    // Update the mouse's position
    mouse.x = event.clientX - canvas.getBoundingClientRect().left;
    mouse.y = event.clientY - canvas.getBoundingClientRect().top;
    mouseArc.position.x = mouse.x
    mouseArc.position.y = mouse.y
    // Call the track method for each shape
    shapes.forEach(shape => {
        shape.track(mouse);
    });
});


window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyG') { 
        shapes = []}
    if (event.key === 'Enter'){onYouTubeIframeAPIReady() } 

    if (event.key === 'ArrowUp'){
        maxShapes++} else if (event.key === 'ArrowDown'){ 
            maxShapes--}

    shapes.forEach(shape => {

        switch (event.code) {
            case 'KeyW':
                shape.velocity.y -= (5 / shape.mass)
                break;
            case 'KeyA':
                shape.velocity.x -= (5 / shape.mass)
                break;
            case 'KeyS':
                shape.velocity.y += (5 / shape.mass)
                break;
            case 'KeyD':
                shape.velocity.x += (5 / shape.mass)
                break;
        }
    })
});


window.addEventListener('mousedown', (event) => {
    theme = themes[Math.floor(Math.random() * themes.length)]
    drawMouseArc = true
    shapes.forEach(shape => {
        if (circlesCollide(shape, mouseArc)) {
            //console.log(`${shape.color} is colliding with mouse`)
            shape.color = switchColors()
        }
    });
});



window.addEventListener('mouseup', (event) => {
    drawMouseArc = false
});

function changeGravity(newValue){
    console.log("you have clicked button")
 gravity = newValue
}
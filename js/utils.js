function drawArc(x, y, col, r, ang = Math.PI * 2) {
    c.beginPath()
    c.arc(x, y, r, 0, ang)
    c.fillStyle = col
    c.fill()
    c.closePath()
}


function drawRect(x, y, w, h, col = 'black') {
    c.fillStyle = col
    c.fillRect(x, y, w, h)
}
let gravity = 0.7

function areCirclesColliding(circle1, circle2) {
    if (circle1 != undefined) return
    if (circle2 != undefined) return
    
    // Calculate the distance between the centers of the two circles
    const dx = circle1.position.x - circle2.position.x;
    const dy = circle1.position.y - circle2.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Check if the distance is less than or equal to the sum of the radii
    if (distance <= circle1.radius + circle2.radius) {
        // Check if the distance is less than or equal to the sum of the radii
        if (distance <= this.radius + object.radius) {
            // Calculate the unit vector between the two marbles
            const unitX = dx / distance;
            const unitY = dy / distance;

            // Calculate relative velocity
            const relativeVelocityX = this.velocity.x - object.velocity.x;
            const relativeVelocityY = this.velocity.y - object.velocity.y;

            // Calculate the dot product of relative velocity and the unit vector
            const dotProduct = relativeVelocityX * unitX + relativeVelocityY * unitY;

            // Update velocities based on the collision
            this.velocity.x -= 2 * object.mass / (this.mass + object.mass) * dotProduct * unitX;
            this.velocity.y -= 2 * object.mass / (this.mass + object.mass) * dotProduct * unitY;
            object.velocity.x += 2 * this.mass / (this.mass + object.mass) * dotProduct * unitX;
            object.velocity.y += 2 * this.mass / (this.mass + object.mass) * dotProduct * unitY;
        }
    }


    return false; // Not colliding
}




function circlesCollide(circle1, circle2) {
    // Calculate the distance between the centers of the two circles
    const dx = circle1.position.x - circle2.position.x;
    const dy = circle1.position.y - circle2.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Check if the distance is less than the sum of the radii
    if (distance <= circle1.radius + circle2.radius) {
        return true; // Collide
    } else {
        return false; // Do not collide
    }
}


function switchColors (){
    if (!theme.random) {
        return `rgb(${Math.floor(Math.random() * theme.r)},${Math.floor(Math.random() * theme.g)}, ${Math.floor(Math.random() * theme.b)})`
    }
    else {
        switch (theme.random) {
            case 1:
                copy = Math.floor(Math.random() * theme.b)
                return `rgb(${Math.floor(Math.random() * theme.r)},${copy}, ${copy})`
                break
            case 2:
                copy = Math.floor(Math.random() * theme.r)
                return `rgb(${copy},${Math.floor(Math.random() * theme.g)}, ${copy})`
                break
            case 3:
                copy = Math.floor(Math.random() * theme.g)
                return `rgb(${copy},${copy}, ${Math.floor(Math.random() * theme.b)})`
                break
        }
    }
}


function collision({object1,object2}){
    return(
        object1.position.y + object1.height >= object2.position.y &&
        object1.position.y <= object2.position.y+object2.height &&
        object1.position.x <= object2.position.x+object2.width &&
        object1.position.x +object1.width>= object2.position.x
        )
}
function wait(sec){
    
}
class shape {
    constructor({
        type = 'square',
        position = {
            x: 0,
            y: 0
        },
        width = 100,
        height = 100,
        r = 10,
        color = 'red',
        density = 10
    }) {
        this.density = density
        this.type = type
        this.mass =0
        this.width = width
        this.height = height
        this.radius = r
        switch (this.type){
            case 'circ':
                this.mass = this.density*this.radius
                break
            case 'squa':
                this.mass = this.density*this.width
                break
            case 'rect':
                this.mass = this.density*this.this.width
                break

        }
        if (this.mass===0)this.mass = 1
        this.position = position
        this.trackSpeed = 0
        this.trackFast = true
        this.color = color
        this.velocity = {
            x: 0,
            y: 0
        },
            this.config = {
                mUp: 'KeyW',
                mLeft: 'KeyA',
                mDown: 'KeyS',
                mRight: 'KeyD',
            }
    }
    detectCollisions(object){
        switch (this.type) {
            case 'squa':
                break
            case 'rect':
                break
            case 'circ':
                areCirclesColliding(object,this)                
                break
        }
    }
    draw() {
        switch (this.type) {
            case 'squa':
                drawRect(this.position.x, this.position.y, this.width, this.height, this.color)
                break
            case 'rect':
                drawRect(this.position.x, this.position.y, this.width, this.height, this.color)
                break
            case 'circ':
                drawArc(this.position.x, this.position.y, this.color, this.radius)
                break
        }
    }
    movement(pressed, key) {
        if (pressed) {
            switch (key) {
                case this.config.mUp:
                    this.velocity.y += -15/this.mass*100
                    break
                case this.config.mDown:
                    this.velocity.y += 5/this.mass*100
                    break
                case this.config.mLeft:
                    this.velocity.x += -5/this.mass*100
                    break
                case this.config.mRight:
                    this.velocity.x += 5/this.mass*100
                    break
        }
        } else {
        }
    }
    track(object){ //eg track the mouse, with mouse.x, mouse.y
        if (this.trackFast){
            console.log(this.trackSpeed)
            this.trackSpeed+=5
        } else {this.trackSpeed-=5}
        if (this.trackSpeed === 1000){this.trackFast= false}
        if (this.trackSpeed === 0){this.trackFast= true}
        const changeinX = object.x-this.position.x
        const changeinY = object.y-this.position.y
        const theta = Math.atan2(changeinY,changeinX)
        const speedX = Math.cos(theta)
        const speedY = Math.sin(theta)
        this.velocity.x = speedX*this.trackSpeed/this.mass
        this.velocity.y = speedY*this.trackSpeed/this.mass
    }
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.velocity.x>0){this.velocity.x-=0.04}
        if (this.velocity.x<0){this.velocity.x+=0.04}
        this.applyGravity()
    }
    applyGravity() {
        if (this.position.y + this.height + this.velocity.y < canvas.height) {
            this.velocity.y += gravity
        } else {
            this.velocity.y = 0
            this.position.y = canvas.height - this.height
        }
    }
}
class Ball {
    constructor(coords){
        this.x = coords.x;
        this.y = coords.y;

        this.diameter = 67

        this.img = loadImage("/src/assets/sprites/ball.png");

        this.speed = 5;

        this.speedX =5;
        this.speedY =5;

        this.hitSound = loadSound("/src/assets/sfx/kick.wav");
    }

    move(){
        if(this.y >= board.height-this.diameter || this.y <= 0){
            this.speedY *= -1;
            this.hitSound.play();
        }
        this.x += this.speedX;
        this.y += this.speedY;

    }
    bounceHorizontal(){
        this.speedX *= -1;
        this.hitSound.play();
    }

    draw() {
        image(this.img, this.x, this.y, this.diameter, this.diameter);
        this.move();
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
}

const BallFactory = {
    coords: (x,y) => {
        return{
            x,
            y,
        };
    },
};
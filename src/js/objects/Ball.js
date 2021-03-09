class Ball {
    constructor(coords, players){
        this.x = coords.x;
        this.y = coords.y;

        this.diameter = 67

        this.img = loadImage("/src/assets/sprites/ball.png");
        this.hitSound = loadSound("/src/assets/sfx/kick.wav");
        this.pointSound = loadSound("/src/assets/sfx/point.wav");

        this.speed = 5;

        this.speedX =5;
        this.speedY =5;

        this.players = players;

        this.hb = new HitboxSquare(
            HitboxFactory.coords(this.x + 19, this.y + 19),
            HitboxFactory.squareDims(29,29),
        );
    }

    move(){
        if(this.y >= board.height-this.diameter || this.y <= 0){
            this.speedY *= -1;
            this.hitSound.play();
        }

        this.players.forEach(player => {
            if(player.pointsHb.wasHitSquare(this.hb)){
                this.pointSound.play();

                this.speedX = this.randomSpeed();
                this.speedY = this. randomSpeed();

                this.x = board.width/2;
                this.y = board.height/2;

                this.hb.x = this.x + 19;
                this.hb.y = this.y + 19;
                
                pts.scorePoint(player.playerId);
                
            }
        });

        if(this.players.some((player) => player.hb.wasHitSquare(this.hb))){
            this.bounceHorizontal();
        }

        this.x += this.speedX;
        this.y += this.speedY;
        this.hb.x += this.speedX;
        this.hb.y += this.speedY;
    }
    
    bounceHorizontal(){
        this.speedX *= -1;
        this.hitSound.play();
    }

    draw() {
        image(this.img, this.x, this.y, this.diameter, this.diameter);
        this.move();
        this.hb.draw();
        console.log(this.randomSpeed());
    }

    randomSpeed(){
        let spd;
        spd = Math.floor(Math.random()*2);
        spd = (spd == 0) ? -5: 5;
        return spd;
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
class Paddle{
    constructor(coords, controlSettings,playerId){
        this.x = coords.x;
        this.y = coords.y;

        this.img = loadImage("/src/assets/sprites/paddle.png")

        this. width = paddle.width;
        this.height = paddle.height;

        this.speed = 5;

        this.controlSettings = controlSettings;

        this.hb = new HitboxSquare(
            HitboxFactory.coords(this.x + 8, this.y + 8),
            HitboxFactory.squareDims(19, 110.5),
        );

        //Points HB
        this.playerId = playerId
        let pointHbCoords;

        if(playerId === playersId.player1){
            pointHbCoords = HitboxFactory.coords(-20, 0);
        }else{
            pointHbCoords = HitboxFactory.coords(board.width + 10, 0);
        }

        this.pointsHb = new HitboxSquare(
            pointHbCoords,
            HitboxFactory.squareDims(10,board.height)
        );
    }

    draw(){
        image(this.img, this.x, this.y, this.width, this.height);
        this.move();
        this.hb.draw();
    }

    move(){
        this.controlSettings.forEach((control) => {
            if(keyIsDown(control.key)){
                this[control.name]();
            }
        });
    }


    moveUp(){
        if(this.hb.y >= 0){
            this.y -= this.speed;
            this.hb.y -= this.speed;
        }
    }
    
    moveDown(){
        if(this.hb.y <= board.height-paddle.height){
            this.y += this.speed;
            this.hb.y += this.speed;
        }
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
}

const PaddleFactory = {
    coords: (x,y) => {
        return{
            x,
            y,
        };
    },
    controlSettings: (moveUpKey, moveDownKey) =>{
        return[
            {
                name: "moveUp",
                key: moveUpKey,
            },
            {
                name:"moveDown",
                key: moveDownKey,
            },
        ];
    },
};
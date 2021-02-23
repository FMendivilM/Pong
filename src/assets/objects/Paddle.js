class Paddle{
    constructor(coords, controlSettings){
        this.x = coords.x;
        this.y = coords.y;

        this.img = loadImage("/src/assets/sprites/paddle.png")

        this. width = paddle.width;
        this.height = paddle.height;

        this.speed = 5;

        this.controlSettings = controlSettings;
    }

    draw(){
        image(this.img, this.x, this.y, this.width, this.height);
        this.move();
    }

    move(){
        this.controlSettings.forEach((control) => {
            if(keyIsDown(control.key)){
                this[control.name]();
            }
        });
    }

    moveUp(){
        if(this.y >= 0){
            this.y -= this.speed
        }
    }
    
    moveDown(){
        if(this.y <= board.height-paddle.height){
            this.y += this.speed
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
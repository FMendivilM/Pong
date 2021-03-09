class Points {
    constructor(coords, font){

        this.x = coords.x;
        this.y = coords.y;
        this.font = font;

        this.p1 = 0;
        this.p2 = 0;
    }

    draw(){
        fill("#fff");
        textSize(35);
        textFont(this.font);
        textAlign(CENTER);
        text(`${this.p1} - ${this.p2}`, this.x, this.y);
    }

    scorePoint(playerId){
        this[playerId]++;
    }
}

const PointFactory = {
    coords:(x,y) =>{
        return{
            x,
            y,
        };
    },
};
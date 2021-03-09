class HitboxSquare{
    constructor(coords, squareDims){
        this.x = coords.x;
        this.y = coords.y;
        this.width = squareDims.width;
        this.height = squareDims.height;
    }
    between(x, min, max){
        return x >= min && x <= max;
    }

    wasHitSquare(hbs){
        return (
            this.between(hbs.x, this.x - hbs.width, this.x + this.width) &&
            this.between(hbs.y, this.y - hbs.height, this.y + this.height)
        );
    }

    draw(){
        rect(this.x, this.y, this.width, this.height);
    }
        
}

const HitboxFactory = {
    coords: (x,y) => {
        return{
            x,
            y,
        };
    },

    squareDims: (width,height) => {
        return{
            width,
            height,
        };
    },
};
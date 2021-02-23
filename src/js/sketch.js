let bg;
let ball;
let players = [];
let target1, target2;
let hit = true;
function setup() {
  bg = loadImage("/src/assets/sprites/board.png")
  ball = new Ball(BallFactory.coords(board.width/2, board.height/2));

  players.push(
    new Paddle(
      PaddleFactory.coords(0, board.height/2 - paddle.height/2),
      PaddleFactory.controlSettings("87","83")
      ),
  
    new Paddle(
      PaddleFactory.coords(board.width - paddle.width, board.height/2 - paddle.height/2),
      PaddleFactory.controlSettings("38","40")
      ),

  );


  createCanvas(board.width,board.height);
}

function between(x, min, max){
 return x >= min && x <= max;
}

function draw() {

  background(bg);
  ball.draw();
  players.forEach(player => player.draw());
  
  if((between(ball.getX(), players[0].getX(), players[0].getX()+5) && between(ball.getY(), players[0].getY()- paddle.height/2, players[0].getY() + paddle.height)) && hit){
    ball.bounceHorizontal();
    hit = !hit;
  }

  if((between(ball.getX(), players[1].getX()- paddle.width, players[1].getX()) && between(ball.getY(), players[1].getY()- paddle.height/2, players[1].getY() + paddle.height)) && hit){
    ball.bounceHorizontal();
    hit = !hit;
  }

  if(ball.getX() == board.width/2){
    hit = true;
  }
}

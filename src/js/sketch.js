let bg;
let ball;
let players = [];
let pts;
let gameFont;

var musicLoop;

function preload(){
  musicLoop = loadSound("/src/assets/sfx/musicloop.wav");
  bg = loadImage("/src/assets/sprites/board.png");
  gameFont = loadFont("/src/assets/font/kenvector_future_thin.ttf");
}

function setup() {
 
  players.push(
    new Paddle(
      PaddleFactory.coords(0, board.height/2 - paddle.height/2),
      PaddleFactory.controlSettings("87","83"),
      playersId.player1,
      ),
  
    new Paddle(
      PaddleFactory.coords(board.width - paddle.width, board.height/2 - paddle.height/2),
      PaddleFactory.controlSettings("38","40"),
      playersId.player2,
      ),
  );

  ball = new Ball(BallFactory.coords(board.width/2, board.height/2),players);

  pts = new Points(PointFactory.coords(board.width/2, 100),gameFont);

  createCanvas(board.width,board.height);

  musicLoop.loop();

}

function draw() {
  background(bg);
  ball.draw();
  pts.draw();
  players.forEach(player => player.draw());
}

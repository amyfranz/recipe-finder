var config = {
  type: Phaser.Auto,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,

    extend: {
      makePlayer: makePlayer
    }
  }
};

var game = new Phaser.Game(config);
var spacefield;

function preload() {
  this.load.image("player", "assets/player.png");
}
function create() {
  player = this.makePlayer(this.sys.canvas.width / 2, this.sys.canvas.height);
  leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
  rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
}
function update() {
  debugger;
  if (rightKey.isDown) {
    player.x += player.props.speed;
  } else if (leftKey.isDown) {
    player.x -= player.props.speed;
  }
}

function makePlayer(x, y) {
  const player = this.add.image(x, y, "player").setOrigin(0.5, 1);
  player.props = {};
  player.props.speed = 5;
  return player;
}


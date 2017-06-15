import {
  RADIUS,
  GRAVITATIONAL_ACCELERATION,
  TEAM_TYPE,
  DIRECTION,
  HOME_COLOR,
  AWAY_COLOR,
  VX,
  BOUND_AMPLITUDE,
  HOME_BALL_IMAGE,
  AWAY_BALL_IMAGE
} from './Constant';
import { canvas, ctx } from './DOM';
import Utility from './Utility';
import { gameState } from './GameState';

export default class Ball {
  constructor(x, y, vx, color) {
    this.x = x;
    this.y = y;
    this.r = RADIUS;
    this.vx = vx;
    this.vy = 0;
    this.gravity = GRAVITATIONAL_ACCELERATION;
    this.color = color;
    this.isSelected = false;
  }
  draw() {
    let image;
    switch (this.color) {
      case HOME_COLOR:
        image = HOME_BALL_IMAGE;
        break;
      case AWAY_COLOR:
        image = AWAY_BALL_IMAGE;
        break;
      default:
    }
    ctx.drawImage(image, this.x, this.y, 50, 50);
  }
  move() {
    //跳ね返り処理
    if (this.y + this.r < canvas.height / 2 + BOUND_AMPLITUDE) {
      this.vy += this.gravity;
    }
    if (
      !this.isSelected &&
      this.y + this.r > canvas.height / 2 + BOUND_AMPLITUDE
    ) {
      this.vy = -this.vy;
    }
    this.x += this.vx;
    this.y += this.vy;
  }
  static create() {
    function adjustPosition(pos, r, max) {
      if (pos - r < 0) {
        return pos;
      } else if (pos + r > max) {
        return max - r;
      } else {
        return pos;
      }
    }
    let x,
      y = adjustPosition(-RADIUS + canvas.height / 2, RADIUS, canvas.height),
      color;
    switch (Utility.random()) {
      case TEAM_TYPE.HOME:
        color = HOME_COLOR;
        break;
      case TEAM_TYPE.AWAY:
        color = AWAY_COLOR;
        break;
    }
    switch (Utility.random()) {
      case DIRECTION.LEFT: // 左側からのボール
        x = adjustPosition(-RADIUS, RADIUS, canvas.width);
        gameState.balls.push(new Ball(x, y, VX, color));
        break;
      case DIRECTION.RIGHT: // 右側からのボール
        x = adjustPosition(canvas.width + RADIUS, RADIUS, canvas.width);
        gameState.balls.push(new Ball(x, y, -VX, color));
        break;
    }
  }
}

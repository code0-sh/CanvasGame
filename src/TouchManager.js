import { canvas } from './DOM';
import { RADIUS, V } from './Constant';
import { gameState } from './GameState';

export default class TouchManager {
  constructor() {
    this.ball = null; // 選択されたボール
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
  }

  setStartPosition(e) {
    let rect = e.target.getBoundingClientRect();
    let touchX =
      (e.changedTouches[0].clientX - rect.left) /
      (canvas.offsetWidth / canvas.width);
    let touchY =
      (e.changedTouches[0].clientY - rect.top) /
      (canvas.offsetHeight / canvas.height);

    this.startX = touchX;
    this.startY = touchY;
  }

  setEndPosition(e) {
    let rect = e.target.getBoundingClientRect();
    let touchX =
      (e.changedTouches[0].clientX - rect.left) /
      (canvas.offsetWidth / canvas.width);
    let touchY =
      (e.changedTouches[0].clientY - rect.top) /
      (canvas.offsetHeight / canvas.height);

    this.endX = touchX;
    this.endY = touchY;
  }

  getVX() {
    let r = Math.sqrt(
      (this.endX - this.startX) * (this.endX - this.startX) +
        (this.endY - this.startY) * (this.endY - this.startY)
    );
    let x = this.endX - this.startX;
    return x / r * V;
  }

  getVY() {
    let r = Math.sqrt(
      (this.endX - this.startX) * (this.endX - this.startX) +
        (this.endY - this.startY) * (this.endY - this.startY)
    );
    let y = this.endY - this.startY;
    return y / r * V;
  }

  onCanvasTouchStart(e) {
    e.preventDefault();
    //stop();
    for (var i = 0; i < gameState.balls.length; i++) {
      if (
        this.isTouchPointExistsInCircle(
          e,
          gameState.balls[i].x,
          gameState.balls[i].y
        )
      ) {
        gameState.balls[i].isSelected = true;
        this.ball = gameState.balls[i];
        this.setStartPosition(e);
      }
    }
  }

  onCanvasTouchMove(e) {
    e.preventDefault();
  }

  onCanvasTouchEnd(e) {
    e.preventDefault();
    if (this.ball) {
      this.setEndPosition(e);
      // ボールを弾く
      this.ball.gravity = 0;
      this.ball.vx = this.getVX();
      this.ball.vy = this.getVY();

      this.ball = null;
    }
  }

  isTouchPointExistsInCircle(e, x, y) {
    let rect = e.target.getBoundingClientRect();
    let touchX =
      (e.changedTouches[0].clientX - rect.left) /
      (canvas.offsetWidth / canvas.width);
    let touchY =
      (e.changedTouches[0].clientY - rect.top) /
      (canvas.offsetHeight / canvas.height);

    return (touchX - x) * (touchX - x) + (touchY - y) * (touchY - y) < RADIUS * RADIUS;
  }
}

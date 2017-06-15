// @flow
import { canvas } from './DOM';
import { RADIUS, V } from './Constant';
import { gameState } from './GameState';
import Ball from './Ball';

export default class TouchManager {
  ball: Ball;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  constructor() {
    this.ball = null; // 選択されたボール
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
  }
  setStartPosition(e: any) {
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

  setEndPosition(e: any) {
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

  onCanvasTouchStart(e: any) {
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

  onCanvasTouchMove(e: any) {
    e.preventDefault();
  }

  onCanvasTouchEnd(e: any) {
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

  isTouchPointExistsInCircle(e: any, x: number, y: number) {
    let rect = e.target.getBoundingClientRect();
    let touchX =
      (e.changedTouches[0].clientX - rect.left) /
      (canvas.offsetWidth / canvas.width);
    let touchY =
      (e.changedTouches[0].clientY - rect.top) /
      (canvas.offsetHeight / canvas.height);

    return (
      (touchX - x) * (touchX - x) + (touchY - y) * (touchY - y) <
      RADIUS * RADIUS
    );
  }
}

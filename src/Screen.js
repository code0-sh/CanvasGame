import Pitch from './Pitch';
import { container, canvas, ctx } from './DOM';
import { HOME_BALL_IMAGE, AWAY_BALL_IMAGE } from './Constant';
import Ball from './Ball';
import { gameState } from './GameState';
import TouchManager from './TouchManager';

export default class Screen {
  constructor() {
    // Canvasのサイズを変更する
    this.intervalAnimationID = null;
    this.intervalCreateID = null;
    this.pitch = new Pitch();

    this.sizing();
  }
  //親要素のサイズをCanvasに指定
  sizing() {
    canvas.height = container.offsetHeight;
    canvas.width = container.offsetWidth;
    this.pitch.draw();
  }
  clearstage() {
    ctx.fillStyle = '#ecf0f1';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  update() {
    this.clearstage();
    this.pitch.draw();
    for (var i = 0; i < gameState.balls.length; i++) {
      gameState.balls[i].draw();
      gameState.balls[i].move();
    }
    let self = this;
    this.intervalAnimationID = setTimeout(function() {
      self.update();
    }, 30);
  }
  imageLoader(loadedCount, callback) {
    let count = 0;
    return function() {
      count++;
      if (count == loadedCount) {
        callback();
      }
    };
  }
  startGame() {
    let self = this;
    let onload = this.imageLoader(2, function() {
      console.log('All images loaded!');
      // ボールを生成する
      Ball.create();
      self.intervalCreateID = setInterval(function() {
        Ball.create();
      }, 2000);

      // 描画を更新する
      self.update();
    });

    HOME_BALL_IMAGE.onload = onload;
    AWAY_BALL_IMAGE.onload = onload;
    this.bindEvent();
  }
  bindEvent() {
    let touchManager = new TouchManager();
    canvas.addEventListener(
      'touchstart',
      function(e) {
        touchManager.onCanvasTouchStart(e);
      },
      false
    );
    canvas.addEventListener(
      'touchmove',
      function(e) {
        touchManager.onCanvasTouchMove(e);
      },
      false
    );
    canvas.addEventListener(
      'touchend',
      function(e) {
        touchManager.onCanvasTouchEnd(e);
      },
      false
    );
  }
}

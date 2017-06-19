import { canvas, ctx } from './DOM';
import { PITCH_MARGIN, PITCH_COLOR, PITCH_LINE_COLOR } from './Constant';

export default class Pitch {
  draw() {
    // Ground lines
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = PITCH_COLOR;
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = PITCH_LINE_COLOR;
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = PITCH_LINE_COLOR;

    // Outer lines
    ctx.beginPath();
    ctx.rect(
      PITCH_MARGIN,
      PITCH_MARGIN,
      canvas.width - PITCH_MARGIN * 2,
      canvas.height - PITCH_MARGIN * 2
    );
    ctx.fillStyle = PITCH_COLOR;
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = PITCH_LINE_COLOR;
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = PITCH_LINE_COLOR;

    // Mid line
    ctx.beginPath();
    ctx.moveTo(PITCH_MARGIN, canvas.height / 2);
    ctx.lineTo(canvas.width - PITCH_MARGIN, canvas.height / 2);
    ctx.stroke();
    ctx.closePath();

    //Mid circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 25, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.closePath();
    //Mid point
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();

    //Home penalty box
    ctx.beginPath();
    ctx.rect((canvas.width - 150) / 2, PITCH_MARGIN, 150, 50);
    ctx.stroke();
    ctx.closePath();
    //Home goal box
    ctx.beginPath();
    ctx.rect((canvas.width - 100) / 2, PITCH_MARGIN, 100, 20);
    ctx.stroke();
    ctx.closePath();
    //Home goal
    ctx.beginPath();
    ctx.moveTo(
      canvas.width / 2 - 22,
      PITCH_MARGIN + 2,
      canvas.width / 2 - 22,
      1
    );
    ctx.lineTo(
      canvas.width / 2 + 22,
      PITCH_MARGIN + 2,
      canvas.width / 2 + 22,
      1
    );
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
    ctx.lineWidth = 1;

    //Home penalty point
    ctx.beginPath();
    ctx.arc(canvas.width / 2, PITCH_MARGIN + 35, 1, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.closePath();
    //Home half circle
    ctx.beginPath();
    ctx.arc(
      canvas.width / 2,
      PITCH_MARGIN + 35,
      25,
      0.79 * Math.PI,
      0.21 * Math.PI,
      true
    );
    ctx.stroke();
    ctx.closePath();

    //Away penalty box
    ctx.beginPath();
    ctx.rect(
      (canvas.width - 150) / 2,
      canvas.height - 50 - PITCH_MARGIN,
      150,
      50
    );
    ctx.stroke();
    ctx.closePath();
    //Away goal box
    ctx.beginPath();
    ctx.rect(
      (canvas.width - 100) / 2,
      canvas.height - 20 - PITCH_MARGIN,
      100,
      20
    );
    ctx.stroke();
    ctx.closePath();
    //Away goal
    ctx.beginPath();
    ctx.moveTo(
      canvas.width / 2 - 22,
      canvas.height - PITCH_MARGIN - 2,
      canvas.width / 2 - 22,
      canvas.height - 1
    );
    ctx.lineTo(
      canvas.width / 2 + 22,
      canvas.height - PITCH_MARGIN - 2,
      canvas.width / 2 + 22,
      canvas.height - 1
    );
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
    ctx.lineWidth = 1;
    //Away penalty point
    ctx.beginPath();
    ctx.arc(
      canvas.width / 2,
      canvas.height - PITCH_MARGIN - 35,
      1,
      0,
      2 * Math.PI,
      true
    );
    ctx.fill();
    ctx.closePath();
    //Away half circle
    ctx.beginPath();
    ctx.arc(
      canvas.width / 2,
      canvas.height - PITCH_MARGIN - 35,
      25,
      1.21 * Math.PI,
      1.79 * Math.PI,
      false
    );
    ctx.stroke();
    ctx.closePath();

    //Home R corner
    ctx.beginPath();
    ctx.arc(PITCH_MARGIN, PITCH_MARGIN, 8, 0, 0.5 * Math.PI, false);
    ctx.stroke();
    ctx.closePath();
    //Home L corner
    ctx.beginPath();
    ctx.arc(
      canvas.width - PITCH_MARGIN,
      PITCH_MARGIN,
      8,
      0.5 * Math.PI,
      1 * Math.PI,
      false
    );
    ctx.stroke();
    ctx.closePath();
    //Away L corner
    ctx.beginPath();
    ctx.arc(
      PITCH_MARGIN,
      canvas.height - PITCH_MARGIN,
      8,
      2 * Math.PI,
      1.5 * Math.PI,
      true
    );
    ctx.stroke();
    ctx.closePath();
    //Away R corner
    ctx.beginPath();
    ctx.arc(
      canvas.width - PITCH_MARGIN,
      canvas.height - PITCH_MARGIN,
      8,
      1 * Math.PI,
      1.5 * Math.PI,
      false
    );
    ctx.stroke();
    ctx.closePath();
  }
}

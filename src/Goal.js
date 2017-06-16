import { canvas, ctx } from './DOM';
import {
  GOAL_WIDTH,
  GOAL_HEIGHT,
  GOAL_LEFT_TOP_IMAGE,
  GOAL_RIGHT_TOP_IMAGE,
  GOAL_LEFT_BOTTOM_IMAGE,
  GOAL_RIGHT_BOTTOM_IMAGE
} from './Constant';

export default class Goal {
  draw() {
    ctx.drawImage(GOAL_LEFT_TOP_IMAGE, -30, 5, GOAL_WIDTH, GOAL_HEIGHT);
    ctx.drawImage(
      GOAL_RIGHT_TOP_IMAGE,
      canvas.width - 125,
      -30,
      GOAL_WIDTH,
      GOAL_HEIGHT
    );
    ctx.drawImage(
      GOAL_LEFT_BOTTOM_IMAGE,
      5,
      canvas.height - 92,
      GOAL_WIDTH,
      GOAL_HEIGHT
    );
    ctx.drawImage(
      GOAL_RIGHT_BOTTOM_IMAGE,
      canvas.width - 90,
      canvas.height - 127,
      GOAL_WIDTH,
      GOAL_HEIGHT
    );
  }
}

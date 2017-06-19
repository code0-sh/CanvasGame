import BallImage from './BallImage';
import GoalImage from './GoalImage';

export const GRAVITATIONAL_ACCELERATION = 0.98; // 重力加速度

export const TEAM_TYPE = {
  HOME: 0,
  AWAY: 1
};

export const DIRECTION = {
  LEFT: 0,
  RIGHT: 1
};

const GOAL_COLOR = 'rgb(255, 255, 255)'; // ゴールのカラー
const GOAL_ROTATE_CENTER_X = 150; // ゴールの回転の中心座標X
const GOAL_ROTATE_CENTER_Y = 150; // ゴールの回転の中心座標Y
export const GOAL_WIDTH = 200; // ゴールの幅
export const GOAL_HEIGHT = 200; // ゴールの高さ

export const PITCH_MARGIN = 70; // グラウンドとピッチのマージン
export const PITCH_COLOR = 'rgb(0, 102, 0)'; // ピッチのカラー
export const PITCH_LINE_COLOR = 'rgb(255, 255, 255)'; // ピッチラインのカラー

export const HOME_COLOR = 'rgb(0, 0, 255)'; // ホームカラー
export const AWAY_COLOR = 'rgb(253, 217, 217)'; // アウェーカラー

export const RADIUS = 25; // ボールの半径
export const V = 20; // 弾いたボールの速さ
export const VX = 5; // ボールのX方向の速さ
export const BOUND_AMPLITUDE = 50; // ボールのバウンドの振幅

export const HOME_BALL_IMAGE = BallImage(HOME_COLOR);
export const AWAY_BALL_IMAGE = BallImage(AWAY_COLOR);

export const GOAL_LEFT_TOP_IMAGE = GoalImage(
  -45,
  GOAL_ROTATE_CENTER_X,
  GOAL_ROTATE_CENTER_Y,
  GOAL_COLOR
);
export const GOAL_RIGHT_TOP_IMAGE = GoalImage(
  45,
  GOAL_ROTATE_CENTER_X,
  GOAL_ROTATE_CENTER_Y,
  GOAL_COLOR
);
export const GOAL_LEFT_BOTTOM_IMAGE = GoalImage(
  -135,
  GOAL_ROTATE_CENTER_X,
  GOAL_ROTATE_CENTER_Y,
  GOAL_COLOR
);
export const GOAL_RIGHT_BOTTOM_IMAGE = GoalImage(
  135,
  GOAL_ROTATE_CENTER_X,
  GOAL_ROTATE_CENTER_Y,
  GOAL_COLOR
);

import BallImage from './BallImage';

export const GRAVITATIONAL_ACCELERATION = 0.98; // 重力加速度

export const TEAM_TYPE = {
  HOME: 0,
  AWAY: 1
};

export const DIRECTION = {
  LEFT: 0,
  RIGHT: 1
};

export const HOME_COLOR = 'rgb(0, 0, 255)'; // ホームカラー
export const AWAY_COLOR = 'rgb(253, 217, 217)'; // アウェーカラー

export const RADIUS = 50; // ボールの半径
export const V = 30; // 弾いたボールの速さ
export const VX = 5; // ボールのX方向の速さ
export const BOUND_AMPLITUDE = 50; // ボールのバウンドの振幅

export const HOME_BALL_IMAGE = BallImage(HOME_COLOR);
export const AWAY_BALL_IMAGE = BallImage(AWAY_COLOR);

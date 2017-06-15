import "./style.scss";
import Screen from "./Screen";
import { canvas } from "./DOM";

const screen = new Screen();
screen.startGame();

window.addEventListener("resize", function() {
  !window.requestAnimationFrame
    ? setTimeout(function() {
        screen.sizing();
      }, 300)
    : window.requestAnimationFrame(function() {
        screen.sizing();
      });
});

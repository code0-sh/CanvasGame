// @flow
export default function(
  rotate: number,
  x: number,
  y: number,
  color: string
): Image {
  let svg =
    '<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
    '<g transform="rotate(' +
    rotate +
    ',' +
    x +
    ',' +
    y +
    ')">' +
    '  <rect x="97.66" y="113.576" width="233.058" height="96.634" style="fill-rule: evenodd; fill-opacity: 0; fill: url(#pattern-0-0);"/>' +
    '  <path d="M 315.938 195.43 L 314.801 124.945 L 110.165 126.081 L 110.165 196.567 L 315.938 195.43 Z" style="stroke: ' +
    color +
    '; fill: rgb(237, 234, 234); fill-opacity: 0;"/>' +
    '  <path d="M 110.165 124.945 L 205.662 196.567 L 292.064 126.081 L 313.665 140.861 L 222.715 196.567 L 127.218 126.081 L 109.028 138.587 L 184.062 194.294 L 270.464 124.945 L 313.665 157.914 L 239.768 195.43 L 144.271 124.945 L 109.028 153.366 L 165.872 195.43 L 248.863 124.945 L 314.801 176.104 L 259.095 194.294 L 165.872 126.081 L 109.028 168.146 L 146.545 193.157 L 223.852 126.081 L 312.528 193.157" style="stroke: ' +
    color +
    '; fill: rgb(237, 234, 234); fill-opacity: 0;"/>' +
    '  <path d="M 312.528 184.062 L 277.285 194.294 L 184.062 123.808 L 109.028 182.925 L 128.355 193.157 L 205.662 124.945 L 295.475 195.43 L 312.528 184.062 Z" style="stroke: ' +
    color +
    '; fill: rgb(237, 234, 234); fill-opacity: 0;"/>' +
    '  <path d="M 310.254 124.945 L 220.441 194.294" style="fill: none; stroke: ' +
    color +
    ';"/>' +
    '  <path d="M 101.07 195.43 L 99.934 114.713 L 323.896 112.439 L 325.033 195.43" style="fill: none; stroke: ' +
    color +
    ';"/>' +
    '</g>' +
    '</svg>';
  let image = new Image();
  image.src = 'data:image/svg+xml;base64,' + btoa(svg);
  return image;
}

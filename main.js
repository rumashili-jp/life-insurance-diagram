import { DrawUtil } from './utility.js';

const pageWidth = 794;
const pageHeight = 1123;
const margin = 20;
const axisMargin = 20;
const innerMargin = 10;

const canvas = document.getElementById('c');
const draw = new DrawUtil(canvas);

// 初期描画
const arrowX = [pageWidth-margin, pageHeight-(margin+axisMargin)]
const arrowY = [margin+axisMargin, pageHeight-margin]
const arrowW = axisMargin/2
draw.line(margin+axisMargin, margin, arrowY[0], arrowY[1], 'black', 1);
draw.line(arrowX[0], arrowX[1], arrowX[0]-arrowW, arrowX[1]-arrowW, 'black', 1)
draw.line(arrowX[0], arrowX[1], arrowX[0]-arrowW, arrowX[1]+arrowW, 'black', 1)
draw.line(margin, pageHeight-(margin+axisMargin), arrowX[0], arrowX[1], 'black', 1);
draw.line(arrowY[0], arrowY[1], arrowY[0]-arrowW, arrowY[1]+arrowW, 'black', 1)
draw.line(arrowY[0], arrowY[1], arrowY[0]+arrowW, arrowY[1]+arrowW, 'black', 1)

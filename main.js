import { DrawUtil } from './utility.js';

const canvas = document.getElementById('c');
const draw = new DrawUtil(canvas);

// 初期描画
draw.rect(50, 50, 100, 60, 'skyblue');
draw.line(50, 50, 150, 110, 'red', 2);
draw.text('Hello!', 200, 100, 20);

// クリックで描画
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  draw.circle?.(x, y, 5, 'black'); // circleあれば
});

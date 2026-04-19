export class DrawUtil {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);

    this.ctx.textBaseline = 'top';
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  rect(x, y, w, h, color = '#000') {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }

  line(x1, y1, x2, y2, color = '#000', width = 1) {
    const ctx = this.ctx;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(Math.round(x1), Math.round(y1));
    ctx.lineTo(Math.round(x2), Math.round(y2));
    ctx.stroke();
  }

  text(str, x, y, size = 16, color = '#000') {
    const ctx = this.ctx;
    ctx.fillStyle = color;
    ctx.font = `${Math.round(size)}px sans-serif`;
    ctx.fillText(str, Math.round(x), Math.round(y));
  }
  polygon(coords, opts = {}) {
    const ctx = this.ctx;

    if (!coords || coords.length < 2) return;

    const {
      fill = false,
      fillColor = '#000',
      stroke = true,
      strokeColor = '#000',
      lineWidth = 1,
      close = true
    } = opts;

    ctx.beginPath();

    // 最初の点
    ctx.moveTo(Math.round(coords[0][0]), Math.round(coords[0][1]));

    // 残りの点
    for (let i = 1; i < coords.length; i++) {
      const [x, y] = coords[i];
      ctx.lineTo(Math.round(x), Math.round(y));
    }

    if (close) ctx.closePath();

    // 塗り
    if (fill) {
      ctx.fillStyle = fillColor;
      ctx.fill();
    }

    // 枠線
    if (stroke) {
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
  }
}

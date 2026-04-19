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
}

export class GameLoop {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  canvasSize: number;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.canvasSize = this.canvas.width;
  }

  start() {
    window.requestAnimationFrame(this.gameLoop);
  }

  gameLoop() {
    window.requestAnimationFrame(this.gameLoop);
  }
}

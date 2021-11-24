export class GameLoop {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d');
  }

  start() {
    window.requestAnimationFrame(this.gameLoop);
  }

  gameLoop() {
    window.requestAnimationFrame(this.gameLoop);
  }
}

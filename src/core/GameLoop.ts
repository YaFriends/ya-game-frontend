import MiniGame from './MiniGame';

export class GameLoop {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;
  MiniGame: MiniGame;

  constructor(canvasId: string, miniGame: MiniGame) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d');
    this.MiniGame = miniGame;
  }

  start() {
    window.requestAnimationFrame(this.gameLoop);
  }

  gameLoop() {
    this.MiniGame.draw();
    window.requestAnimationFrame(this.gameLoop);
  }
}

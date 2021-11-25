import MiniGame, { Team } from '../MiniGame';
import { TRANSLATION } from '../../lang/ru/translation';
import { TicTacToeCircle } from './common/TicTacToeCircle';
import { TicTacToeCross } from './common/TicTacToeCross';

type TicTacToeBoardCell = string;
type TicTacToeBoard = TicTacToeBoardCell[];

export type TicTacToeFigureProps = {
  sectionSize: number;
  params: {
    top: number;
    left: number;
  };
};

type TicTacTieMiniGameProps = {
  teams: Team[];
  canvasId: string;
};

export class TicTacToeMiniGame extends MiniGame {
  board: TicTacToeBoard;
  sectionSize: number;
  lineWidth: number;
  lineColor: string;
  currentPlayer: 0 | 1;

  constructor(props: TicTacTieMiniGameProps) {
    super({
      icon: '/static/img/games/tic_tac_toe/icon.jpg',
      name: TRANSLATION.TicTacToe.label,
      ...props,
    });

    this.board = [];
    this.sectionSize = this.GameLoop.canvasSize / 3;
    this.currentPlayer = 1;
    this.lineColor = '#DDD';
    this.lineWidth = 10;
  }

  async gameLoop(): Promise<void> {
    return new Promise(res => {
      res();
    });
  }

  draw() {
    this._initBoard();
    this._drawLines(this.lineWidth, this.lineColor);
    this._addListener();
  }

  makeTurn() {}

  finish() {
    return {
      winner: {
        players: [
          {
            login: 'TeViYu',
            id: 1,
            first_name: 'Test',
            second_name: 'test 1',
            display_name: 'Testovich',
            email: 'string',
            phone: 'string',
            avatar: '',
          },
        ],
      },
    };
  }

  _initBoard() {
    this.board = Array(9).fill('');
  }

  _addPlayingPiece(mouse: { x: number; y: number }) {
    let xCoord;
    let yCoord;

    for (let i = 0; i < 9; i++) {
      xCoord = Math.floor(i / 3) * this.sectionSize;
      yCoord = (i % 3) * this.sectionSize;

      if (
        mouse.x >= xCoord &&
        mouse.x <= xCoord + this.sectionSize &&
        mouse.y >= yCoord &&
        mouse.y <= yCoord + this.sectionSize
      ) {
        this._clearPlayingArea(xCoord, yCoord);

        if (this.currentPlayer === 1) {
          new TicTacToeCross({
            sectionSize: this.sectionSize,
            params: {
              top: yCoord,
              left: xCoord,
            },
          }).draw(this.GameLoop.context);
        } else {
          new TicTacToeCircle({
            sectionSize: this.sectionSize,
            params: {
              top: yCoord,
              left: xCoord,
            },
          }).draw(this.GameLoop.context);
        }
      }
    }
  }

  _clearPlayingArea(xCoord: number, yCoord: number) {
    this.GameLoop.context.fillStyle = '#FFF';
    this.GameLoop.context.fillRect(xCoord, yCoord, this.sectionSize, this.sectionSize);
  }

  _drawLines(lineWidth: number, strokeStyle: string) {
    const lineStart = 4;
    const lineLength = this.GameLoop.canvasSize - 5;
    this.GameLoop.context.lineWidth = lineWidth;
    this.GameLoop.context.lineCap = 'round';
    this.GameLoop.context.strokeStyle = strokeStyle;
    this.GameLoop.context.beginPath();

    /*
     * Horizontal lines
     */
    for (let y = 1; y <= 2; y++) {
      this.GameLoop.context.moveTo(lineStart, y * this.sectionSize);
      this.GameLoop.context.lineTo(lineLength, y * this.sectionSize);
    }

    /*
     * Vertical lines
     */
    for (let x = 1; x <= 2; x++) {
      this.GameLoop.context.moveTo(x * this.sectionSize, lineStart);
      this.GameLoop.context.lineTo(x * this.sectionSize, lineLength);
    }

    this.GameLoop.context.stroke();
  }

  _getCanvasMousePosition({ clientX, clientY }: MouseEvent) {
    const { left, top } = this.GameLoop.canvas.getBoundingClientRect();

    return {
      x: clientX - left,
      y: clientY - top,
    };
  }

  _addListener() {
    this.GameLoop.canvas.addEventListener('mouseup', event => {
      if (this.currentPlayer === 1) {
        this.currentPlayer = 0;
      } else {
        this.currentPlayer = 1;
      }

      const canvasMousePosition = this._getCanvasMousePosition(event);
      this._addPlayingPiece(canvasMousePosition);
      this._drawLines(10, this.lineColor);
    });
  }
}

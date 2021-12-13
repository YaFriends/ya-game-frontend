import { Rivals } from '../../@types/MiniGame';
import { UserData } from '../../@types/UserTypes';
import { TRANSLATION } from '../../lang/ru/translation';
import MiniGame from '../MiniGame';

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
  players: Rivals;
  canvasId: string;
};

export class TicTacToeMiniGame extends MiniGame {
  board: TicTacToeBoard;
  sectionSize: number;
  lineWidth: number;
  lineColor: string;
  isCurrentPlayerFirst: boolean;
  currentPlayer: UserData | null;

  constructor(props: TicTacTieMiniGameProps) {
    super({
      icon: '/static/img/games/tic_tac_toe/icon.jpg',
      name: TRANSLATION.TicTacToe.label,
      ...props,
    });

    this.board = [];
    this.sectionSize = this.GameLoop.canvasSize / 3;
    this.currentPlayer = null;
    this.isCurrentPlayerFirst = false;
    this.lineColor = '#DDD';
    this.lineWidth = 5;
  }

  draw() {
    this._initBoard();
    this._drawLines(this.lineWidth, this.lineColor);
    this._addListener();
  }

  makeTurn() {
    console.log('makeTurn');
  }

  finish() {
    return {
      winner: {
        login: 'TeViYu',
        id: 1,
        first_name: 'Test',
        second_name: 'test 1',
        display_name: 'Testovich',
        email: 'string',
        phone: 'string',
        avatar: '',
      },
    };
  }

  run() {
    return new Promise<void>(() => {
      this.draw();
      // res();
    });
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
        if (this.board[i] !== '') {
          return;
        }

        this.board[i] = this.isCurrentPlayerFirst ? '1' : '0';
        this._clearPlayingArea(xCoord, yCoord);

        if (this.isCurrentPlayerFirst) {
          new TicTacToeCross({
            sectionSize: this.sectionSize,
            params: {
              top: yCoord,
              left: xCoord,
            },
          }).draw(this.GameLoop.context);
          this.currentPlayer = this.players[1];
        } else {
          new TicTacToeCircle({
            sectionSize: this.sectionSize,
            params: {
              top: yCoord,
              left: xCoord,
            },
          }).draw(this.GameLoop.context);
          this.currentPlayer = this.players[0];
        }
      }
    }
  }

  _clearPlayingArea(xCoord: number, yCoord: number) {
    this.GameLoop.context.fillStyle = '#8B949E';
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
      const canvasMousePosition = this._getCanvasMousePosition(event);
      this._addPlayingPiece(canvasMousePosition);
      this._drawLines(this.lineWidth, this.lineColor);
    });
  }
}

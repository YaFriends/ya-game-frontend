import { FinishFn, MiniGameFinishResponse, Rivals } from '../../@types/MiniGame';
import { UserData } from '../../@types/UserTypes';
import { TRANSLATION } from '../../lang/ru/translation';
import MiniGame from '../MiniGame';

import { TicTacToeCircle } from './common/TicTacToeCircle';
import { TicTacToeCross } from './common/TicTacToeCross';

type TicTacToeBoardCell = -1 | 1 | '';
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
  finishCb: FinishFn | null;
  totalMoves: number;

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
    this.finishCb = () => null;
    this.totalMoves = 0;
  }

  draw() {
    this._initBoard();
    this._drawLines(this.lineWidth, this.lineColor);
    this._addListener();
  }

  finish(player: UserData) {
    this._removeListener();
    if (typeof this.finishCb === 'function') {
      this.finishCb({
        winner: player,
      });
    }
  }

  run(): Promise<MiniGameFinishResponse> {
    return new Promise<MiniGameFinishResponse>(res => {
      this.finishCb = res;
      this.draw();
    });
  }

  _initBoard() {
    this.board = Array(9).fill('');
  }

  _clearBoard() {
    this.GameLoop.context.clearRect(0, 0, this.GameLoop.canvasSize, this.GameLoop.canvasSize);
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

        this.board[i] = this.isCurrentPlayerFirst ? 1 : -1;
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

        this.isCurrentPlayerFirst = !this.isCurrentPlayerFirst;
        this.totalMoves++;
        this._checkForFinish();

        if (this.totalMoves === this.board.length) {
          this._restartGame();
        }
      }
    }
  }

  _restartGame() {
    this.totalMoves = 0;
    this._initBoard();
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

  _onMouseUp = (event: MouseEvent) => {
    const canvasMousePosition = this._getCanvasMousePosition(event);
    this._addPlayingPiece(canvasMousePosition);
    this._drawLines(this.lineWidth, this.lineColor);
  };

  _addListener() {
    this.GameLoop.canvas.addEventListener('mouseup', this._onMouseUp);
  }

  _removeListener() {
    this.GameLoop.canvas.removeEventListener('mouseup', this._onMouseUp);
  }

  _checkForFinish() {
    for (let i = 0; i < 3; i++) {
      const currentRowOffset = i * 3;
      const rowSum =
        Number(this.board[currentRowOffset]) +
        Number(this.board[currentRowOffset + 1]) +
        Number(this.board[currentRowOffset + 2]);

      const colSum = Number(this.board[i]) + Number(this.board[i + 3]) + Number(this.board[i + 6]);
      if (rowSum === 3 || colSum === 3) {
        this.finish(this.players[0]);
      } else if (rowSum === -3 || colSum === -3) {
        this.finish(this.players[1]);
      }
    }

    const rightDiagonalSum = Number(this.board[0]) + Number(this.board[4]) + Number(this.board[9]);
    const leftDiagonalSum = Number(this.board[2]) + Number(this.board[4]) + Number(this.board[7]);

    if (rightDiagonalSum === 3 || leftDiagonalSum === 3) {
      this.finish(this.players[0]);
    } else if (rightDiagonalSum === -3 || leftDiagonalSum === -3) {
      this.finish(this.players[1]);
    }
  }
}

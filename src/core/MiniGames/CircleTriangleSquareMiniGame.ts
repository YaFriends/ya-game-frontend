import { FinishFn, MiniGameFinishResponse, MiniGamePickInfo, Rivals } from '../../@types/MiniGame';
import { UserData } from '../../@types/UserTypes';
import { TRANSLATION } from '../../lang/ru/translation';
import { GameLoop } from '../GameLoop';
import MiniGame from '../MiniGame';
import { CIRCLE_TRIANGLE_SQUARE_GAME_ID } from '../constants';

type itemProps = {
  id: number;
  name: string;
  label: string;
  src: string;
};

type CircleTriangleSquareProps = {
  players: Rivals;
  canvasId: string;
};

const FONT_FOR_TEXT = 'bold 24px sans-serif';

// Игрок выбирает одну из 3 корточек на след. экране показывается выбор игроков и далее на след экране, кто победил и снова по кругу до 3 побед
export class CircleTriangleSquareMiniGame extends MiniGame {
  finishCb: FinishFn | null;
  loop: GameLoop;
  items: itemProps[];
  roundsWinForWin: number;
  currentPlayerScore: number;
  enemyPlayerScore: number;

  constructor(props: CircleTriangleSquareProps) {
    super({
      icon: '/static/img/games/circle_triangle_square/icon.jpg',
      name: TRANSLATION.CircleTriangleSquare.label,
      ...props,
    });

    this.items = [
      {
        id: 1,
        name: 'circle',
        label: TRANSLATION.CircleTriangleSquare.circle,
        src: '/static/img/games/circle_triangle_square/circle.jpeg',
      },
      {
        id: 2,
        name: 'triangle',
        label: TRANSLATION.CircleTriangleSquare.triangle,
        src: '/static/img/games/circle_triangle_square/triangle.jpeg',
      },
      {
        id: 3,
        name: 'square',
        label: TRANSLATION.CircleTriangleSquare.square,
        src: '/static/img/games/circle_triangle_square/square.jpeg',
      },
    ];
    this.roundsWinForWin = 3;
    this.currentPlayerScore = 0;
    this.enemyPlayerScore = 0;

    this.loop = new GameLoop('canvas');
    this.finishCb = () => null;
  }

  static get config(): MiniGamePickInfo {
    return {
      id: CIRCLE_TRIANGLE_SQUARE_GAME_ID,
      miniGame: CircleTriangleSquareMiniGame,
      icon: '/static/img/games/circle_triangle_square/icon.jpg',
      pick_image_url: '/static/img/games/circle_triangle_square/pick.png',
      name: TRANSLATION.CircleTriangleSquare.label,
    };
  }

  run() {
    return new Promise<MiniGameFinishResponse>(res => {
      this.finishCb = res;
      this.draw();
    });
  }

  draw() {
    this._initStageStartGame();
  }

  finish(player: UserData) {
    if (typeof this.finishCb === 'function') {
      this.finishCb({
        winner: player,
      });
    }
  }

  _initStageStartGame() {
    this._addListener();
    this._clearGameField();
    const step = 150;

    this.GameLoop.context.font = FONT_FOR_TEXT;
    this.GameLoop.context.fillText(TRANSLATION.CircleTriangleSquare.chooseCardWithFigure, 60, 75);

    this.items.forEach(({ src }, index) => {
      const image = new Image();
      const { height } = this.GameLoop.canvas.getBoundingClientRect();
      image.src = src;

      const drawItem = () => {
        const x = 50 + step * index;
        const y = height / 2 - image.height / 2;
        this.GameLoop.context.drawImage(image, x, y);
      };

      image.addEventListener('load', drawItem);
    });
  }

  _initStageMiddleGame(currentPlayer: number, enemyPlayer: number, isNobody = false) {
    this._clearGameField();
    const step = 150;

    this.GameLoop.context.font = FONT_FOR_TEXT;

    if (isNobody) {
      this.GameLoop.context.fillText(TRANSLATION.CircleTriangleSquare.nobody, 210, 75);
    } else {
      this.GameLoop.context.fillText(TRANSLATION.CircleTriangleSquare.selectedShapes, 130, 75);
    }

    [currentPlayer, enemyPlayer].forEach((i, index) => {
      const item = this.items.find(({ id }) => id === i);

      const image = new Image();
      const { height } = this.GameLoop.canvas.getBoundingClientRect();
      image.src = item!.src;

      const drawItem = () => {
        const x = 125 + step * index;
        const y = height / 2 - image.height / 2;
        this.GameLoop.context.drawImage(image, x, y);
      };

      image.addEventListener('load', drawItem);
    });
  }
  _initStageEndGame(winnerOnRound: number) {
    this._clearGameField();

    this.GameLoop.context.font = FONT_FOR_TEXT;
    this.GameLoop.context.fillText(TRANSLATION.CircleTriangleSquare.win, 200, 75);

    const item = this.items.find(({ id }) => id === winnerOnRound);

    const image = new Image();
    const { height } = this.GameLoop.canvas.getBoundingClientRect();
    image.src = item!.src;

    const drawItem = () => {
      const x = 200;
      const y = height / 2 - image.height / 2;
      this.GameLoop.context.drawImage(image, x, y);
    };

    image.addEventListener('load', drawItem);
  }

  _clearGameField() {
    this.GameLoop.context.clearRect(0, 0, this.GameLoop.canvasSize, this.GameLoop.canvasSize);
  }

  _addListener() {
    this.GameLoop.canvas.addEventListener('mouseup', this._onMouseUp);
  }

  _removeListener() {
    this.GameLoop.canvas.removeEventListener('mouseup', this._onMouseUp);
  }

  _onMouseUp = (event: MouseEvent) => {
    const canvasMousePosition = this._getCanvasMousePosition(event);
    this._chooseItem(canvasMousePosition);
  };

  _getCanvasMousePosition({ clientX, clientY }: MouseEvent) {
    const { left, top } = this.GameLoop.canvas.getBoundingClientRect();

    return {
      x: clientX - left,
      y: clientY - top,
    };
  }

  _chooseItem(mouse: { x: number; y: number }) {
    const { x, y } = mouse;
    let choosePlayer = null;

    if (y >= 200 && y <= 300) {
      if (x >= 50 && x <= 150) {
        choosePlayer = this.items[0].id;
      } else if (x >= 200 && x <= 300) {
        choosePlayer = this.items[1].id;
      } else if (x >= 350 && x <= 450) {
        choosePlayer = this.items[2].id;
      }
    }

    if (choosePlayer !== null) {
      this._removeListener();
      this._comparisonOfChoosingResults(choosePlayer, this._randomResultEnemyPlayer());
    }
  }

  // TODO: заменить _randomResultEnemyPlayer на функцию просчета игрока по сети
  // Временная функция, пока нет сети (генерация выбора противника)
  _randomResultEnemyPlayer() {
    const max = 3;
    return Math.floor(Math.random() * max) + 1; // Добавляем 1, чтобы отсчет был от 1, а не от 0
  }

  _comparisonOfChoosingResults(currentPlayer: number, enemyPlayer: number) {
    const delayScreen = 1250;
    this._initStageMiddleGame(currentPlayer, enemyPlayer);

    setTimeout(() => {
      if (currentPlayer === enemyPlayer) {
        this._initStageMiddleGame(currentPlayer, enemyPlayer, currentPlayer === enemyPlayer);
      } else if (currentPlayer === 1 && enemyPlayer === 2) {
        this.currentPlayerScore += 1;
        this._initStageEndGame(currentPlayer);
      } else if (currentPlayer === 2 && enemyPlayer === 3) {
        this.currentPlayerScore += 1;
        this._initStageEndGame(currentPlayer);
      } else if (currentPlayer === 3 && enemyPlayer === 1) {
        this.currentPlayerScore += 1;
        this._initStageEndGame(currentPlayer);
      } else {
        this.enemyPlayerScore += 1;
        this._initStageEndGame(enemyPlayer);
      }
    }, delayScreen);

    setTimeout(() => {
      this._checkingWin();
    }, delayScreen * 2);
  }

  _checkingWin() {
    const winner =
      this.currentPlayerScore > this.enemyPlayerScore ? this.players[0] : this.players[1];
    if (
      this.currentPlayerScore === this.roundsWinForWin ||
      this.enemyPlayerScore === this.roundsWinForWin
    ) {
      this.finish(winner);
    } else {
      this._initStageStartGame();
    }
  }
}

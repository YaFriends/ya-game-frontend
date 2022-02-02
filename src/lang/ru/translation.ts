export const TRANSLATION: Record<string, Record<string, string>> = {
  Register: {
    label: 'Регистрация',
    title: 'Регистрация',
    linkToLogin: 'Назад',
    inputFirstNameLabel: 'Имя',
    inputFirstNamePlaceholder: 'Введите имя',
    inputSecondNameLabel: 'Фамилия',
    inputSecondNamePlaceholder: 'Введите фамилию',
    inputLoginLabel: 'Логин',
    inputLoginPlaceholder: 'Введите логин',
    inputEmailLabel: 'Email',
    inputEmailPlaceholder: 'Введите email',
    inputPhoneLabel: 'Телефон',
    inputPhonePlaceholder: 'Введите телефон +7 999 999 99 99',
    inputPasswordLabel: 'Пароль',
    inputPasswordPlaceholder: 'Введите пароль',
    submitButtonText: 'Зарегистрироваться',
  },
  Login: {
    label: 'Логин',
    title: 'Авторизация',
    linkToRegisterText: 'Регистрация',
    inputLoginLabel: 'Логин',
    inputLoginPlaceholder: 'Введите логин',
    inputPasswordLabel: 'Пароль',
    inputPasswordPlaceholder: 'Введите пароль',
    submitButtonText: 'Войти',
    linkToDashboardText: 'Вернуться на главную',
    OAuthYandex: 'OAuth Яндекс',
  },
  Logout: {
    label: 'Выйти',
  },
  Dashboard: {
    label: 'Главная',
    LastGames: 'Последние игры',
    GameHistory: 'История всех игр',
    WatchAllGames: 'Посмотреть все игры',
  },
  GameSession: {
    label: 'Игра',
  },
  GameCreation: {
    label: 'Игра: создать',
    CreateSession: 'Создание сессии',
    SelectLabel: 'Количество игр',
    SelectPlaceholder: 'Выбрать количество игр',
    ButtonText: 'Создать сессию',
    BackLink: 'Назад',
  },
  InvitationLink: {
    label: 'Ссылка для приглашения',
    ButtonText: 'Скопировать ссылку',
    defaultLink: 'Получаем ссылку...',
    awaiting: 'Ожидание подключение противника...',
  },
  GameLobby: {
    label: 'Игра: лобби',
  },
  Leaderboard: {
    label: 'Таблица лидеров',
    title: 'Таблица лидеров',
    tableColumnPosition: 'Позиция #',
    tableColumnName: 'Имя',
    tableColumnWins: 'Победы',
    subtitleNotTable: 'Тебя нет в таблице',
    subtitleHaveTable: 'Твоё место в таблице #',
  },
  Profile: {
    label: 'Профиль',
    SaveButton: 'Сохранить',
    LinkToChangeInfo: 'Изменить данные',
    LinkToChangePassword: 'Изменить пароль',
    LinkToBack: 'Назад',
    PasswordTitle: 'Настройки - Изменить пароль',
    OldPasswordLabel: 'Старый пароль',
    OldPasswordPlaceholder: 'Введите старый пароль',
    NewPasswordLabel: 'Новый пароль',
    NewPasswordPlaceholder: 'Введите новый пароль',
    EditDisabledTitle: 'Настройки',
    EditTitle: 'Настройки - Изменить данные',
    AttributeName: 'Имя',
    AttributeNamePlaceholder: 'Тут могло быть твое имя',
    AttributeSecondName: 'Фамилия',
    AttributeSecondNamePlaceholder: 'А тут фамилия',
    AttributeLogin: 'Логин',
    AttributeLoginPlaceholder: 'Тут твой логин',
    AttributeEmail: 'Почта',
    AttributePhone: 'Телефон',
    AttributeNickname: 'Никнейм',
    userThumbnailHoverText: 'Изменить',
  },
  ProfileHistory: { label: 'Профиль: История', ReturnToMain: 'Вернуться на главную' },
  Forum: {
    label: 'Форум',
    subtitle: 'Скоро тут будет форум :)',
    createPost: 'Создать пост',
    noPosts: 'К сожалению, постов пока нет, но вы можете создать новый',
    popupTitle: 'Создать новый пост',
    popupSend: 'Создать',
    popupTitleInput: 'Название поста',
    popupDescriptionInput: 'Описание поста',
  },
  Game: {
    Wins: 'Побед',
    Win: 'Победа',
    Date: 'Дата',
  },
  GameResult: {
    win: 'Победа',
    lose: 'Поражение',
  },
  Error404: {
    label: '404',
    subtitle: 'Что-то произошло, но вы держитесь!',
    link: 'В главное меню',
  },
  Main: {
    label: 'YaFriends',
    linkToLogin: 'Входи',
    linkToRegister: 'Регистрируйся',
    gamesLabel: 'Игры',
    circle_triangle_square: 'Квадрат/Круг/Треугольник',
    circle_triangle_squareDesc: 'Механика игры, как и в камень/ножницы/бумага.',
    click_more: 'Самый быстрый кликун',
    click_moreDesc:
      'Необходимо кликать на скорость, побеждает тот, кто заполнит свою колбу кликов первым',
    tic_tac_toe: 'Крестики/Нолики',
    field_battle: 'Квадраты',
    field_battleDesc:
      'Необходимо кидать кости, и закрашивать области на игровом поле, побеждает тот, кто закрасит большее количество клеток к концу игры. Игра заканчивается когда на поле больше нет ходов',
    bombermans: 'Взрывашка',
    bombermansDesc:
      '1 этап, игроки ставят по n бомб на поле. 2 этап - надо взорвать бомбу противника. Побеждает тот, кто быстрее нашел бомбу противника.',
    team: 'Команда',
    teamName1: 'Юра',
    teamName2: 'Роман',
    teamName3: 'Виген',
    teamName4: 'Сергей',
  },
  ErrorMessage: {
    message: 'Упс, что-то пошло не так',
    buttonText: 'попробовать снова',
  },
  Loading: {
    ChosenGames: 'Выбранные игры',
    ChosenGame: 'Выбранная игра',
    label: 'Загрузка...',
  },
  TicTacToe: {
    label: 'Крестики-нолики',
  },
  ClickMore: {
    label: 'Нажми больше',
  },
  CircleTriangleSquare: {
    label: 'Круг Треугольник Квадрат',
  },
  FieldBattle: {
    label: 'Битва за поле',
  },
  Bombermans: {
    label: 'Взорви не себя',
  },
  GameSetEnd: {
    you: 'Поздравляем! Ты победил :)',
    notYou: 'Упс, кажется, твоему товарищу повезло чуть-чуть больше',
    winner: 'Ииииииииии наш победитель:',
    played: 'Вы играли в:',
    backToMain: 'Вернуться на главную',
    playAgain: 'Сыграть еще',
  },
  GameSetPick: {
    title: 'Pick/Ban игр',
    ban: 'BANNED',
  },
  Post: {
    like: 'Лайкнуть',
    unlike: 'Убрать лайк',
    delete: 'Удалить пост',
    comments: 'Комментарии',
    noComments: 'К сожалению, пока еще нет комментариев, но ты можешь быть первым!',
  },
};

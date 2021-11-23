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
    ButtonText: 'Скопировать',
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
    subtitleHaveTable: 'Твое место в таблице #',
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
    ConfirmPasswordLabel: 'Повтор нового пароля',
    ConfirmPasswordPlaceholder: 'Повторите введенный новый пароль',
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
  },

  ProfileHistory: { label: 'Профиль: История', ReturnToMain: 'Вернуться на главную' },
  Forum: {
    label: 'Форум',
    subtitle: 'Скоро тут будет форум :)',
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
    label: 'Скоро тут будет лендинг',
    linkToLogin: 'Авторизоваться',
    linkToDashboard: 'Пройти в главное меню',
    linkToRegister: 'Зарегистрироваться',
  },
  ErrorMessage: {
    message: 'Упс, что-то пошло не так',
    buttonText: 'попробовать снова',
  },
};

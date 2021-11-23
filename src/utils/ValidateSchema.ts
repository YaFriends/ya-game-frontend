import * as yup from 'yup';

const first_name = yup
  .string()
  .matches(/^[А-ЯЁA-Z]+/g, {
    message: 'Имя должно начинаться с большой буквы',
  })
  .matches(/^[А-ЯЁа-яёA-Za-z-]*$/g, {
    message:
      'Имя должно удовлетворять требованиям - латиница или кириллица, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
  })
  .required('Это поле обязательное');
const second_name = yup
  .string()
  .matches(/^[А-ЯЁA-Z]+/g, {
    message: 'Фамилия должна начинаться с большой буквы',
  })
  .matches(/^[А-ЯЁа-яёA-Za-z-]*$/g, {
    message:
      'Фамилия должна удовлетворять требованиям - латиница или кириллица, без пробелов и без цифр, нет' +
      ' спецсимволов (допустим только дефис)',
  })
  .required('Это поле обязательное');
const login = yup
  .string()
  .matches(/^[A-Za-z0-9_-]*$/g, {
    message:
      'Логин только из латиницы, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
  })
  .min(3, ({ min }) => `Длина логина должна быть больше ${min} символов`)
  .max(20, ({ max }) => `Длина логина должна быть меньше ${max} символов`)
  .required('Это поле обязательное');
const display_name = yup
  .string()
  .matches(/^[A-Za-z0-9_-]*$/g, {
    message:
      'Логин только из латиницы, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
  })
  .min(3, ({ min }) => `Длина логина должна быть больше ${min} символов`)
  .max(20, ({ max }) => `Длина логина должна быть меньше ${max} символов`)
  .required('Это поле обязательное');
const email = yup.string().email('Введен некорректный email').required('Это поле обязательное');
const phone = yup
  .string()
  .matches(/^\+?[0-9]*$/g, {
    message: 'Телефон может содержать только цифры и + в начале',
  })
  .min(10, ({ min }) => `Длина телефона должна быть больше ${min} символов`)
  .max(15, ({ max }) => `Длина телефона должна быть меньше ${max} символов`)
  .required('Это поле обязательное');
const password = yup
  .string()
  .matches(/^((?=.*[0-9])|(?=.*[A-Za-z]+))(?=.*[A-Z])(?!.*\s)(?!.*[а-яёА-ЯЁ]).*$/g, {
    message: 'Пароль должен содержать обязательно хотя бы одну заглавную букву и цифру.',
  })
  .min(8, ({ min }) => `Длина пароля должна быть больше ${min} символов`)
  .max(40, ({ max }) => `Длина пароля должна быть меньше ${max} символов`)
  .required('Это поле обязательное');

export const LoginSchema = yup.object({
  login,
  password,
});

export const SignUpSchema = yup.object({
  first_name,
  second_name,
  login,
  email,
  phone,
  password,
});

export const ProfileInfoSchema = yup.object({
  first_name,
  second_name,
  login,
  email,
  phone,
  display_name,
});

export const ProfilePasswordSchema = yup.object({
  newPassword: password,
  oldPassword: password,
  confirmPassword: password,
});

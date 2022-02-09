export const parseCookie = (cookie: string) => cookie.substr(0, cookie.indexOf(';')) + '; Path=/;';

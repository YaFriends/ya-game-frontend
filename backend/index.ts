import { dbConnect } from './init';

(() => {
  dbConnect().then(() => {
    console.info('Connected');
  });
})();

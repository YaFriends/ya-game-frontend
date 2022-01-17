import { dbConnect } from './init';

(() => {
  dbConnect().then(async () => {
    console.log('Connected');
  });
})();

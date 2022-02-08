import { dbConnect } from './db/connect';
import { listen } from './server/listen';

(async () => {
  await dbConnect();
  listen();
})();

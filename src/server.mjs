import express from 'express';
import Routes from '../src/routes/index.mjs';

export function run(port) {
  const app = express();

  app.set('view engine', 'ejs');
  app.set('views', 'src/views');
  app.use(express.static('src/public'))

  app.use(Routes)

  app.listen(port, (err) => {
    if(err) {
      console.error(err.message);
      process.exit(1);
    }

    console.log('[INFO] Server on port: ' + port);
  })
}

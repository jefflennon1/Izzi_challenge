import express from 'express';
import routes from './routes/Routes';

import './database'

const app = express();


app.use(routes);


app.listen(3333, ()=>{
  console.log('BackEnd started! 🚀')
})

export default app;
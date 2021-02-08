import express from 'express';

const app = express();

app.get('/checkout', (request, response)=>{
  return response.json("hello word!");
});

app.listen(3333, ()=>{
  console.log('BackEnd started! 🚀')
})

export default app;
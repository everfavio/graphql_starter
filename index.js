import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ mensaje: 'app levantada'});
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})
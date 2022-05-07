import express from 'express';
import { v4 } from 'uuid';
console.log(v4());
const app = express();
app.get('/', (req, res) => {
  res.json({
    message: 'Api is working fine and now changed and changed again',
  });
});
const PORT = process.env.PORT!;
setInterval(() => {
  if (PORT == '8005') {
    console.log('prod server 123');
  } else {
    console.log('dev server');
  }
}, 2000);
app.listen(PORT, () => {
  console.log('listening on PORT', PORT);
});
const nameValue = 'rahul mere darkhast hai ye jo aai raat';
console.log(nameValue);
console.log('hii changed');

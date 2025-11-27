import express from 'express';
import cors from 'cors';

let wiadomosc = 'Serwer działa poprawnie!';


const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({ message: `${wiadomosc}` });
});

// Odbierz dane z frontendu
app.post('/data', express.json(), (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);
  if(receivedData.message.length < 20000){
    wiadomosc = receivedData.message;
    res.json({ status: 1 });
  }  else{
    res.json({ status: 0 });
  }
});

app.listen(7070, () => {
  console.log('Server is running on port 7070');
});



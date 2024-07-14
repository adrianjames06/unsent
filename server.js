const http = require('https');
const express = require('express');
const PORT = process.env.PORT | 3000 | 5000 | 8080;
const app = express();
const prefix = "//"

app.get('/', (req, res) => res.send('Its me ya boi Dev Earl!'));

app.listen(PORT, () =>
  console.log(`Your app is listening at http://localhost:${PORT}\n`)
);

app.listen(() => console.log('SERVER START\n'));

app.use('/', (req, res) => {
	res.send(new Date());
});

app.listen(() => console.log('SERVER STARTED!\n\n'));

app.listen(() => console.log('THANK YOU FOR USING MY ANTI UNSENT BOT!\n'));

app.listen(() => console.log('PLEASE ENJOY!\n'));

app.listen(() => console.log('THIS BOT WAS DEVELOPED BY EARL SHINE (DEV EARL) FROM CALLBACK DEVELOPERS. DO NOT STEAL WITHOUT PROPER CREDITS!'));

app.get('/',(req,res)=>res.sendStatus(200))
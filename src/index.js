import app from './app';
/* import bodyParser from 'body-parser';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); */
const port = process.env.PORT || 4000;
app.listen(port);

console.log(`Servidor escuchando en el puerto ${port}`);

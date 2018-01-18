import path from 'path';
import express from 'express';
<<<<<<< HEAD
import cors from 'cors';
import router from './router';

const app = express();

const assets = express.static(path.join(__dirname, '../'));

app.use(cors());

app.use(assets);

app.get('*', router);
=======

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(publicPath);

app.get('/', (req,res) => {
	res.sendFile(indexPath);
})
>>>>>>> 8478cfc76c40a4ed42a4c04cc7f1dbafa479e142

export default app;



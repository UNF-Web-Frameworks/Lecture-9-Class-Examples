import express from 'express';
import bodyparser from 'body-parser';
import { dogRoute } from './routes/dogsroute';
import { handlerRoute } from './routes/handlerroute';

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/Dogs',dogRoute);
app.use('/Handler',handlerRoute);




app.listen(3000);

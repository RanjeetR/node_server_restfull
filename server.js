import express from 'express';
import fs from 'fs';
import cors from 'cors';
import 'babel-polyfill';
import routes from './routes';
import connectToDb from './db/connect';
const app = express();
app.use(cors());
// add your cors options here
// var corsOptions = {
//     origin: 'http://localhost:8080',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

// Connect with Database 
connectToDb();

app.use('/', routes);
const server = app.listen(process.env.PORT || 8086 , () => {
    console.log(`server started at ${server.address().port}`);
});
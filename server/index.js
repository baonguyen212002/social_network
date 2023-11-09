import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

const URI = 'mongodb+srv://admin:lJQHZqgcNkR6OiDJ@cluster.ql8h2s5.mongodb.net/?retryWrites=true&w=majority'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());

app.use('/posts', posts);

mongoose
.connect(URI)
.then(() => {
    console.log('connected to DB');
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`);
    });

}).catch((err) => {
    console.log('err', err);
}) 


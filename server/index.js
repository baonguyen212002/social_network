import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import posts from './routers/posts.js';
import users from './routers/users.js';
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

const URI = 'mongodb+srv://admin:lJQHZqgcNkR6OiDJ@cluster.ql8h2s5.mongodb.net/?retryWrites=true&w=majority'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static('public'));
app.use('/api', posts);
app.use('/',users);

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


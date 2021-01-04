import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import PostRoute from './routes/PostRoute.js';

const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/galleryproject',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
}).then(()=>{
    app.listen(4000,(err)=>{
        console.log("server started on port 4000");
    })
}).catch(err=>{
    console.log("try again");
});

app.use('/posts',PostRoute);
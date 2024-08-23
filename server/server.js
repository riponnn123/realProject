// const express = require('express');
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 8000;

app.use(
    cors({
        origin: ['http://localhost:5173'],
        credentials: true
    })
);

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());

function startServer(){
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
};

startServer();



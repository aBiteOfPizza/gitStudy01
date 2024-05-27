// Git 사용해보기

const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.end('<h1> Hello World </h1>');
});
// master는 여기까지

// branch

app.get('/home', (req,res) => {
    res.end('<h1> Home Sweet Home </h1>');
});
// app_step1 에서는 여기까지

// master로 돌아가면 app.get() 작성 부분은 사라짐.
// --- merge---

app.get('/profile', (req,res) => {
    res.end('<h1> Profile Picture </h1>');
});

app.get('/shop', (req,res) => {
    res.end('<h1> Shopping Store </h1>');
});

// step1

const server = http.createServer(app);
server.listen(3000, () => {
    console.log("Run on server http://localhost:3000");
});


const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    // res.status(200);
    // res.json( { message : "Hello Node!" });
    res.sendFile(__dirname + "/assets/contacts.html");
});






app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});


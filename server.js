console.log('Starting Server');

const express = require('express');
const app = express();
const port = 3000;

app.get("/api", (req,res)=> {
        res.send("API from here");
})

const quotesTable = [
        {content: "The whatever writing here...", author:"whoever"},
        {content: "The whatever writing here...", author:"whoever"},
        {content: "The whatever writing here...", author:"whoever"},
        {content: "The whatever writing here...", author:"whoever"},
        {content: "The whatever writing here...", author:"whoever"}
]


app.listen(port,() => 
        console.log(`Example app listening on port ${port}!`));

app.get("./APIs/Express-API", (req,res) => {
        res.json ({
              status: "OK",
                count: quotesTable.length,
                data: quotesTable
        })
})

app.post("./APIs/Express-API", (req,res)=> {
        console.log("Info from REQ --->",req)
})
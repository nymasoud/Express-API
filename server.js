console.log('Starting Server');

const express = require('express');
const app = express();
const port = 3000;

app.use ( express.json() );
app.use ( express.urlencoded ({extended: true}) );




app.get("/api", (req,res)=> {
        res.send("API from here");
})

const quotesTable = [
        {content: " 1 The whatever writing here...", author:"whoever"},
        {content: " 2 The whatever writing here...", author:"whoever"},
        {content: " 3 The whatever writing here...", author:"whoever"},
        {content: " 4 The whatever writing here...", author:"whoever"},
        {content: " 5 The whatever writing here...", author:"whoever"}
]



app.get("/api/quotes", (req,res) => {
        res.json ({
                status: "OK",
                count: quotesTable.length,
                data: quotesTable
        })
})

app.post("/api/quotes", (req,res)=> {
        console.log("Info from REQ --->",req)
        quotesTable.push(req,body)
        res.json ({
                status: "OK",
                count: quotesTable.length,
                data: quotesTable
        })
})

app.get("/api/quotes/:idx",(req,res)=> {
        //const {idx} = req.params
        console.log("REQ Params is This --->", req.params)
        res.json({
                data: quotesTable[req.params.idx],
                msg:"OK"
        })
})

app.put("/api/quotes/:idx",(req,res)=> {
        console.log("REQ Params is This --->", req.params)
        quotesTable[req.params.idx] = req.body
        res.json ({
                status: "OK",
                count: quotesTable.length,
                data: quotesTable
        })
        
})

app.delete("/api/quotes/:idx",(req,res)=> {
        quotesTable.splice(req.params.idx, 1)
        res.json ({
                status: "OK",
                count: quotesTable.length,
                data: quotesTable
        })
        
})
     

app.listen(port,() => console.log(`Example app listening on port ${port}!`));
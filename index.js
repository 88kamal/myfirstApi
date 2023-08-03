import express from 'express';
import cors from 'cors';
import apiData from "./data.json" assert {type : 'json'}

const app = express();
app.use(cors());

const port = 2000;

app.get("/", (req,res)=>{
    res.send(apiData);
})

app.listen(port, ()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
})
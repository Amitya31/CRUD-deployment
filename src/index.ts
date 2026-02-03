import express, { type Request, type Response } from "express";

const app = express();

app.use(express.json())

app.get("/", (req:Request,res:Response)=>{
    res.send("Hello world")
} )

app.listen(3000, ()=>{
    console.log("Running on 3000")
})
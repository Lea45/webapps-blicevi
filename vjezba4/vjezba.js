import express from 'express'
//const express = require("express")
import bodyParser from 'body-parser'
import usersRoutes from "./routes/users.js"
import uuid4 from "uuid4"

const app = express()
const PORT = 3000

app.use(bodyParser.json())
    var tempStorage = []

app.get("/vratiSveKorisnike", (req, res) => {
    console.log(tempStorage)
    res.send(tempStorage)
})

app.post("/dodajKorisnika", (req, res) => {
    var data = res.body
    console.log(data)
    /*var {ime} = req.body
    console.log(ime)
    data.id = dataId
    res.send(data)*/
})

app.patch("/urediKorisnika/:id", (req, res) =>{
    var{id} = req.paramconsole.log(id)
    res.send(id)
})

app.delete("/izbrisiKorisnika/:id", (req, res) => {
    var {id} = req.params

    tempStorage = tempStorage.filter(x => x.id == id)
    res.send(tempStorage)
})

app.listen(port, () => console.log("Works on port ${port}"))
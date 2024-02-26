import express from "express"
const PORT = 3000
const app = express ()

app.listen (()=> {
    console.log ("Servidor inicializado en el puerto ",PORT)
})
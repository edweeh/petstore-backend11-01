const express = require("express");
const cors = require("cors")
const signupRouter = require('./routes/signupRoute')
const db = require("./Connection/Database")


const app = new express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());




app.get('/', (request, response) => {
    response.send("hi database")
})

app.use("/signup", signupRouter)




app.listen(4000, (request, response) => {
    console.log("Port is running in 4000")
})
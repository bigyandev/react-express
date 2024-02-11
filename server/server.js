const express = require("express")
const app = express()
const http = require("http")

app.use(express.urlencoded({extended:false}))
app.get("/api/users", (req,res) => {
    res.json({"user": [
        {name:"bigyan", age: 21}, 
        {name:"shoyub", age: 22}, 
        {name:"pratik",age:19}
    ]
})
app.post("/api/users", (req,res) => {
  console.log("submmited")
  console.log(req.body)
})
})

app.listen(1234)
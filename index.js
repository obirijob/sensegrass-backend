const app = require("express")()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

app.get("/data", (req,res) => res.sendFile(__dirname + "/data.json"))

app.listen(2000, ()=> console.log("app running on port 2000"))
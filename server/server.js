const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT||3000;

const PathPublic = path.join(__dirname,"../public");
app.use(express.static(PathPublic));
// app.get('/',(req,res)=>{

// });

app.listen(port,()=>{
    console.log("Server is up on port 3000");
});
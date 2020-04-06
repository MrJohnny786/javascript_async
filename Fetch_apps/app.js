const express = require('express')
const app = express()
var path = require("path");
const port = 3000
app.use(express.static('public'))

// var btn = document.querySelector('#btn');

// btn.addEventListener("click", function(){
//     alert("clicked")
// })


app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/public/a.html')))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
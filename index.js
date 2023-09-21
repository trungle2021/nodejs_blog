const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var a = 2;
  var b = 3;
  var c = a+b;
  res.send('Hello World!' + c)
})

//127.0.0.1 - localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
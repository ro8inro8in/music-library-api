const express = require('express')
const app = express()
//const port = 4000;
app.use(express.json())
//app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('I know what you did last summer!!!')
  })
  














module.exports = app
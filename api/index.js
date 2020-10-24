const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

const port = 3000
const Calculate = require('./controller/Calculate')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/add', new Calculate().add)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

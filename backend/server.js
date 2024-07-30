const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.json({fruits: ['grapes', 'peaches', 'apples']})
  
})

app.get('/list', (req, res) => {
  res.json("This is a dummy get request")
  
})

app.post('/companies', (req, res) => {
  res.send('POST request to the add companies')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
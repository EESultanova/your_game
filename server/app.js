const express = require('express')
// const { v4: uuidv4 } = require('uuid')
const cors = require('cors')

const app = express()
const PORT = 3000

let DB = [
  {
    questions: [
      {
      id: 11,
      text: 'a',
      answ: 'a',
      points: 300,
      },
      {
      id: 12,
      text: 'b',
      answ: 'b',
      points: 400,
      },
    ],
    title: 'ab',
    id: 1,
  },
  {
    questions: [
      {
      id: 21,
      text: 'c',
      answ: 'c',
      points: 300,
      },
      {
      id: 22,
      text: 'd',
      answ: 'd',
      points: 400,
      },
    ],
    title: 'cd',
    id: 2,
  }
]
  


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/api/v1/game', (req, res) => {
  return res.json(DB)
})

//validate <3


app.listen(PORT, () => {
  console.log('Server has been started on port ', PORT)
})

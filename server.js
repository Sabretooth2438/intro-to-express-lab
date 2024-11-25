// Main Setup
const express = require('express')
const app = express()

// 1. Be Polite, Greet the User
app.get('/greetings/:username', (req, res) => {
  const username = req.params.username
  res.send(`Hello there, ${username}!`)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

// 2. Rolling the Dice
app.get('/roll/:number', (req, res) => {
  const number = parseInt(req.params.number, 10)

  if (isNaN(number)) {
    res.send('You must specify a number.')
  } else {
    const roll = Math.floor(Math.random() * (number + 1))
    res.send(`You rolled a ${roll}.`)
  }
})

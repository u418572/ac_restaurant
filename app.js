// include express
const express = require('express')
const app = express()
const port = 3000
// include handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('happy new year')
})

app.listen(port ,() => {
  console.log(`Express is listening on http://localhost:${port}`)
})
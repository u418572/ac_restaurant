// include express
const express = require('express')
const exphbs = require('express-handlebars')
// require restaurant.json
const restaurants = require('./restaurant.json')
const app = express()
const port = 3000

// include handlebars

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')



app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {restaurants: restaurants.results})
})

// render restaurant/
app.get('/restaurants/:restaurant_id', (req, res) => {
  console.log('req params', req.params.restaurant_id)
  const restaurant = restaurants.results.find(item => item.id.toString()==req.params.restaurant_id)
  res.render('show', {restaurant: restaurant})
})
// search bar
app.get('/search',(req, res) => {
  const keyword = req.query.keyword
  const restaurantSearch = restaurants.results.filter(item =>item.name.toLowerCase().includes(keyword.toLowerCase()))
  const category = restaurants.results.filter(item => item.category.toLowerCase().includes(keyword.toLowerCase()))
  res.render('index',{restaurants: restaurantSearch, keyword: keyword,restaurants: category})

})
app.listen(port ,() => {
  console.log(`Express is listening on http://localhost:${port}`)
})
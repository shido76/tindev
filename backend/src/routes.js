routes = require('express').Router()

routes.get('/', (req, res) => {
  return res.json({ message: `Hello World ${req.query.name}` })
})

routes.post('/devs', (req, res) => {
  return res.json(req.body)
})

module.exports = routes
routes = require('express').Router()
const DevController = require('./controllers/Dev')
const LikeController = require('./controllers/Like')
const DisLikeController = require('./controllers/DisLike')

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/dislikes', DisLikeController.store)
module.exports = routes
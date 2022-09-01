require('dotenv').config();
const Router = require('@koa/router');
const usersHandler = require('./handlers/users');
const reviewsHandler = require('./handlers/reviews');
const messagesHendler = require('./handlers/messages');

const router = new Router();

router.get('/reviews', reviewsHandler.getReviews);
router.get('/messages', messagesHendler.getMessages);
router.post('/reg', usersHandler.createNewUser);
router.post('/login', usersHandler.findUserByLogin);
router.post('/upload', reviewsHandler.createNewReview);
router.post('/chat', messagesHendler.createNewMessage);
  
module.exports = router;
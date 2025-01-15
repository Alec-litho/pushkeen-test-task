const Router = require('express');
const router = new Router();
const cardController = require('../controllers/cardController');


router.get("/cards", cardController.getCards)
router.post("/cards", cardController.createCard)
router.delete("/cards/:id", cardController.deleteCard)


module.exports = router
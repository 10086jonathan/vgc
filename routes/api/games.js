const router = require('express').Router();
const gamesCtrl = require('../../controllers/games');

router.get('/', gamesCtrl.getGames);
// router.post('/favorites', gamesCtrl.addFavorite)

module.exports = router;
var express = require('express');
var router = express.Router();

var destinationsCtrl = require('../controllers/destinations');
var upload = require('../config/file-upload');
// var ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/destinations', destinationsCtrl.index);
/* GET users listing. */
router.get('/destinations/new', destinationsCtrl.new);
router.post('/destinations', destinationsCtrl.create);
router.get('/destinations/:id', destinationsCtrl.show);


router.get('/destinations/:id/edit', destinationsCtrl.edit);
router.put('/destinations/:id', destinationsCtrl.update);
router.delete('/destinations/:id', destinationsCtrl.delete);




module.exports = router;

// order of routes matters

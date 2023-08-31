var express = require('express');
var router = express.Router();

var destinationsCtrl = require('../controllers/destinations');

/* GET users listing. */
router.get('/new', destinationsCtrl.new);
router.post('/', destinationsCtrl.create);


router.get('/:id/edit', destinationsCtrl.edit);
router.put('/:id', destinationsCtrl.update);
router.get('/:id', destinationsCtrl.show);
router.delete('/:id', destinationsCtrl.delete);

router.get('/', destinationsCtrl.index);



module.exports = router;

// order of routes matters

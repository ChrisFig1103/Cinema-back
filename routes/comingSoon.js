const { Router } =require('express');
const router = Router();
const comingSoonCtrl = require('../controllers/comingSoon.controller');

router.get('/',comingSoonCtrl.getComingSoons);

router.post('/',comingSoonCtrl.createComingSoon);

router.get('/:id',comingSoonCtrl.getComingSoon);

router.put('/:id',comingSoonCtrl.editComingSoon);

router.delete('/:id',comingSoonCtrl.deleteComingSoon);

module.exports = router;
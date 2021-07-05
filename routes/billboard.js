const { Router } =require('express');
const router = Router();
const billboardCtrl = require('../controllers/billboard.controller');

router.get('/',billboardCtrl.getBillboards);

router.post('/',billboardCtrl.createBillboard);

router.get('/:id',billboardCtrl.getBillboard);

router.put('/:id',billboardCtrl.editBillboard);

router.delete('/:id',billboardCtrl.deleteBillboard);

module.exports = router;
const express= require('express');
const router = express.Router();
const { getTestingProducts,getActualProducts } = require('../controllers/prodController');

router.get('/actualProducts',getActualProducts );
router.get('/testingProducts', getTestingProducts );

module.exports= router;
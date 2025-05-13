const { signUp ,login } = require('../controllers/userController');
const {userVerification} = require('../middleware/authMiddleware');
const express= require('express');
const router = express.Router();

router.post('/signUp', signUp);
router.post('/login', login);
router.post('/userVerify', userVerification)

module.exports = router;
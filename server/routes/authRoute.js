const { signUp , loginUser, logoutUser } = require('../controllers/userController');
const {userVerification} = require('../middleware/authMiddleware');
const express= require('express');
const router = express.Router();

router.post('/signUp', signUp);
router.post('/login', loginUser);
router.get('/userVerify', userVerification);
router.post('/logout', logoutUser);

module.exports = router;
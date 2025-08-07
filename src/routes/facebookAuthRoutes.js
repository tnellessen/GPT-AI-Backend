const express = require('express');
const router = express.Router();
const { facebookCallback } = require('../controllers/facebookAuthController');

// 🔹 STEP 1: Redirect user to Facebook for login
router.get('/facebook', (req, res) => {
  const fbLoginUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${process.env.FB_APP_ID}&redirect_uri=${encodeURIComponent('https://gpt-ai-backend-y1ic.onrender.com/auth/facebook/callback')}&scope=email`;

  res.redirect(fbLoginUrl);
});

// 🔹 STEP 2: Handle Facebook OAuth callback
router.get('/facebook/callback', facebookCallback);

module.exports = router;

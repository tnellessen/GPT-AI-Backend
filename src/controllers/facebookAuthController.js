const axios = require('axios');

exports.facebookCallback = async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send('Missing authorization code');
  }

  try {
    const tokenResponse = await axios.get('https://graph.facebook.com/v18.0/oauth/access_token', {
      params: {
        client_id: process.env.FB_APP_ID,
        client_secret: process.env.FB_APP_SECRET,
        redirect_uri: 'https://gpt-ai-backend-y1ic.onrender.com/auth/facebook/callback',
        code: code,
      },
    });

    const accessToken = tokenResponse.data.access_token;

    const userResponse = await axios.get('https://graph.facebook.com/me', {
      params: {
        access_token: accessToken,
        fields: 'id,name,email',
      },
    });

    const user = userResponse.data;

    return res.json({ user });
  } catch (error) {
    console.error(error.response?.data || error.message);
    return res.status(500).send('OAuth Error');
  }
};

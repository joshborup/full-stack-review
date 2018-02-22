const axios = require('axios');
module.exports = {
    connect: (req, res) => {
        const authorizationCode = req.query.code;
        axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, {
            client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            code: authorizationCode,
            grant_type: 'authorization_code',
            redirect_uri: `http://${req.headers.host}/auth/callback`
        }).then(accessTokenResponse => {
            return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessTokenResponse.data.access_token}`).then(userInfoResponse => {

            req.session.user = userInfoResponse.data;
            console.log(req.session.user);
            res.redirect('/account');

            }).catch(error => console.log('access token', error));
        }

        ).catch(error => console.log('Auth0 token', error));
    }
}
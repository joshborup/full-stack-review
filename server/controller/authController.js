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

            userInfo = userInfoResponse.data;
            req.app.get('db').get_user_by_authid(userInfo.sub).then(users => {
                    if(users.length){
                    const user = {
                        user: userInfo.name,
                        id: userInfo.sub,
                        picture: userInfo.picture,
                        email: userInfo.email
                    }
                    req.session.user = user;
                    res.redirect('/account');
                }else{
                    return req.app.get('db').create_user([userInfo.sub, userInfo.profile_name, userInfo.picture, userInfo.email]).then(newUser => {
                        const user = {
                            name: newUser[0].profile_name,
                            id: newUser[0].sub,
                            picture: newUser[0].picture,
                            email: newUser[0].email
                        }
                        req.session.user = user;
                        res.redirect('/account');
                    })
                }
            })
            

            }).catch(error => console.log('access token', error));
        }

        ).catch(error => console.log('Auth0 token', error));
    }
}
const axios = require('axios');
const app = require('express')();
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const authController = require('./controller/authController');
const userController = require('./controller/userController');
const checkUserStatus = require('./middlewares/checkUserStatus');

require('dotenv').config();


app.use(bodyParser.json());



app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie:{
        //two weeks
        maxAge: 60 * 60 * 24 * 14 * 1000
    }
}));

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.get('/auth/callback', authController.connect);
app.get('/api/user-data', checkUserStatus, userController.getUser)
// app.get('/api/user-data', (req, res)=> {
//     res.json({
//         name: 'josh',
//         email: 'joshborup@gmail.com',
//         id: 56
//     })
// });
app.post('/api/logout', userController.logout)

const PORT = process.env.SERVER_PORT || 4000;

app.listen(PORT, ()=> console.log(`connected to port ${PORT}`));
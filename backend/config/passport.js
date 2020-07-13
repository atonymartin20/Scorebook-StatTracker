const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const userModel = require('../data/models/userModel');

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL
        },

        function(accessToken, refreshToken, profile, email, cb) {
            let err = null;
            let emailValue = email.emails[0].value
            userModel.findUserByEmail(emailValue)
                .then(user => {
                    if (user) {
                        if ( user.googleId !== email.id) {
                            user.googleId = email.id;
                            userModel.update(user.id, user).then(count => {
                                if (!count) {
                                    err = {message: 'Unable to update googleId'};
                                }
                            })
                        }
                        return cb(err, profile);
                    }
                    else {
                        let user = {
                            email: emailValue,
                            username: email.displayName,
                            firstName: email.name.givenName,
                            lastName: email.name.familyName,
                            googleId: email.id
                        };
                        userModel.insert(user).then(ids => {
                            if (!ids.length) {
                                err = { message: 'Unable to create user.'};
                            }
                        }) 
                        return cb(err, profile);
                    }
                })
            .catch(err => {
                return cb(err, profile);
            })
        }
    )
)

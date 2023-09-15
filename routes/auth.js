var express = require('express');

var router = express.Router();

router.get('/login', function (req, res, next) {
    res.render('login');
});

router.get('/signup', function (req, res, next) {
    res.render('signup');
});

router.post('/signup', function (req, res, next) {
    var salt = crypto.randomBytes(16);
    crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', function (err, hashedPassword) {
        if (err) { return next(err); }
        db.run('INSERT INTO users (username, hashed_password, salt) VALUES (?, ?, ?)', [
            req.body.username,
            hashedPassword,
            salt
        ], function (err) {
            if (err) { return next(err); }
            passport.serializeUser(function (user, cb) {
                process.nextTick(function () {
                    cb(null, { id: user.id, username: user.username });
                });
            });
            
            passport.deserializeUser(function (user, cb) {
                process.nextTick(function () {
                    return cb(null, user);
                });
            });
            var user = {
                id: this.lastID,
                username: req.body.username
            };
            req.login(user, function (err) {
                if (err) { return next(err); }
                res.redirect('/');
            });
        });
    });
});

router.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});



module.exports = router;
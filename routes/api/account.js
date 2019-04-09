const db = require("../../models");
//package to encrypt password
const bcrypt = require("bcrypt");
const { check, validationResult } = require('express-validator/check');
//number of times it hashes password
const saltRounds = 10;
//authentication packages
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        db.Account.findOne({where: {username: username}})
        .then(function(user) {
            console.log(user.password);
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            // if (!user.validPassword(password)) {
            //   return done(null, false, { message: 'Incorrect password.' });
            // }
            else{
                const hash = user.password;
                bcrypt.compare(password, hash, function(err, response){
                    if(response === true){
                    return done(null, user);
                    }
                });
            }
        });
    }
));

module.exports = function(app){
    app.post('/login', passport.authenticate(
        "local", {
        successRedirect: "/",
        failureRedirect: "/login"
    }));
    app.get('/logout', function(req, res){
        req.logout();
        req.session.destroy();
        res.redirect('/');
    });
    app.post('/register', [
        // check("username").isEmpty().withMessage("Username field cannot be empty."),
        check("username").isLength({min: 4, max:15}).withMessage("Username must be between 4-15 characters long."),
        check("password").withMessage( "Password must be between 8-100 characters long.")
        .isLength({min: 8,max: 100})
        .custom((value,{req, loc, path}) => {
            if (value !== req.body.passwordMatch) {
                // trow error if passwords do not match
                throw new Error("Passwords don't match");
            } else {
                return value;
            }
        })
    ],
    (request, response) => {
        const errors = validationResult(request);
        if(!errors.isEmpty()){
            db.character.findAll({}).then(function(result) {
                let charObj = {
                    characters: result
                };
                // console.log(`Errors ${JSON.stringify(errors.array())}`);
                response.render('characters', {title: "Registration Error", errors: errors.array(), character: charObj});
            });
        }
        else{
            let username = request.body.username;
            let password = request.body.password;
            let passwordMatch = request.body.passwordMatch;
            let image = request.body.profilepic;
            bcrypt.hash(password, saltRounds, function(err, hash) {
                // Store hash in your password DB.
                db.Account.create({
                    username: username,
                    password: hash,
                    profilepic: image
                }).then(function(dbAccount) {
                    console.log(`===== ${dbAccount.id} ========`)
                    // if (dbAccount !== null) {
                        // request.session.loggedin = true;
                        // request.session.username = username;
                        request.login(dbAccount, function(err){
                            response.redirect('/');
                        });
                    // }
                });
            });
        }
    });
    app.get("/bigbrains", authenticationMiddleware() ,function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/big_brains.html"));
        let user = {
            username: req.user.username,
            image: req.user.profilepic
        }
        res.render("bigBrains", {layout: "game.handlebars", user: user});
    });
};

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    db.Account.findOne({where: {id: id}})
    .then(function(user) {
        done(null, user);
    });
});

function authenticationMiddleware() {  
	return (req, res, next) => {
		console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

	    if (req.isAuthenticated()) return next();
	    res.redirect('/login')
	}
}
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, getUserByUsername) {
  const authenticateUser = (email, password, done) => {
    const user = getUserByUsername(username)  
    if (user == null) {
      return done(null, false, { message: "No user in Database" });
    }

    try{
        if(await bcrypt.compare(passpord, user.password)){
            return done(null, user)
        }else{
            return done(null, false, {message:"Password incorrect"})
        }
    }catch (e){
        return done(e);
    }
  };
  passport.use(new LocalStrategy({ usernameField: "name" }), authenticateUser);
  passport.serializeUser((user, done) => {});
  passport.deserialize((id, done) => {});
}

module.exports = initialize
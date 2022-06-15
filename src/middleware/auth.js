const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


// ----------------------------------------------- Authenticate Middleware ----------------------------------------------------------

const mid1 = function(req, res, next){
    
  
    let token = req.headers["x-Auth-Token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });    //If no token is present in the request header return error
  console.log(token);
  
  let decodedToken = jwt.verify(token, "functionup-radon");   // If a token is present then decode the token with verify function
  if (!decodedToken)                                         // Input 1 is the token to be decoded and Input 2 was same as generated earlier
    return res.send({ status: false, msg: "token is invalid" });

    
    // let userId = req.params.userId;
    // let userDetails =  userModel.findById(userId);
    // if (!userDetails)
    // return res.send({ status: false, msg: "No such user exists" });
      next()
};




// --------------------------------- Authorisation --------------------------------

const mid2 = function(req, res, next){
    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });    //If no token is present in the request header return error
    console.log(token);
    
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)                                         // Input 1 is the token to be decoded and Input 2 was same as generated earlier
    return res.send({ status: false, msg: "token is invalid" });

    let userToBeModified = req.params.userId;
    let userLoggedIn = decodedToken.userId
  
    if(userToBeModified != userLoggedIn) 
    return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

  next()
}


module.exports.mid1 = mid1
module.exports.mid2 = mid2
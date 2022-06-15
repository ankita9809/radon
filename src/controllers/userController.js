const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



//-------------------------------------- PROBLEM 1 ------------------------------------------------------------------------------------

const createUser = async function (abcd, xyz) {         //You can name the req, res objects anything
  let data = abcd.body;                                 //but the first parameter is always the request
  let savedData = await userModel.create(data);         //the second parameter is always the response
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
};                      


//-------------------------------------- PROBLEM 2 ------------------------------------------------------------------------------------

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(                  // Once the login is successful, create the jwt token with sign function
    {
      userId: user._id.toString(),      // Input 1 is the payload or the object containing data to be set in token
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"                  // Input 2 is the secret
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};


//-------------------------------------- PROBLEM 3 ------------------------------------------------------------------------------------

const getUserData =  function (req, res) { 

  let userId = req.params.userId;
    let userDetails =  userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
  
   res.send({ status: true, data: userDetails });
  
  
};


//-------------------------------------- PROBLEM 4 ------------------------------------------------------------------------------------

const updateUser = async function (req, res) { 

  // let userId = req.params.userId;
  // let userDetails =  userModel.findById(userId);         
  // if (!userDetails)
  //   return res.send({ status: false, msg: "No such user exists" });   //Return an error if no user with the given id exists in the db

  //let userId = req.params.userId;
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);  
  res.send({ status: updatedUser, data: updatedUser });
};


//-------------------------------------- PROBLEM 5 ------------------------------------------------------------------------------------
  
const deleteUser = async function(req, res){
  let userId = req.params.userId;
  let userDetails =  userModel.findById(userId);         
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });   //Return an error if no user with the given id exists in the db

  //let userId = req.params.userId;
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },{$set : {isDeleted: true}}, userData);
  res.send({ status: updatedUser, data: updatedUser });
};

// -------------------------------------- PROBLEM 6 ----------------------------------------------------------------------------------

const postMessage = async function(req, res){
  let message = req.body.message
  
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });    //If no token is present in the request header return error
  console.log(token);
  
  let decodedToken = jwt.verify(token, "functionup-radon");   // If a token is present then decode the token with verify function
  if (!decodedToken)                                         // Input 1 is the token to be decoded and Input 2 was same as generated earlier
    return res.send({ status: false, msg: "token is invalid" });
  
  
  let userToBeModified = req.params.userId;
  let userLoggedIn = decodedToken.userId

  if(userToBeModified != userLoggedIn) 
  return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
  
  let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts

    updatedPosts.push(message)    //add the message to user's posts
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{$set :{posts: updatedPosts}}, {$new: true})
    return res.send({status: true, data: updatedUser})    //return the updated user document
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage

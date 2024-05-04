const UserModel = require('../model/userModel.js');


/*
module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        userModel.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }

module.exports.createUserDBService = (userDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var userModelData = new userModel();
 
        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;

        userModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }


 module.exports.updateUserDBService = (id,userDetails) => {     
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndUpdate(id,userDetails, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }
        });
 
    });
 }


 module.exports.removeUserDBService = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndDelete(id, function returnData(error, result) {
 
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    });
 
 }
*/


 // Change from callback style to promise style
const getDataFromDBService = () => {
    return new Promise((resolve, reject) => {
      UserModel.find()
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  };
  

  const createUserDBService = (userDetails) => {
    return new Promise((resolve, reject) => {
      var userModelData = new UserModel();
      userModelData.name = userDetails.name;
      userModelData.address = userDetails.address;
      userModelData.phone = userDetails.phone;
  
      userModelData.save()
        .then(() => resolve(true))
        .catch((error) => reject(false));
    });
  };

const updateUserDBService = (id, userDetails) => {
    console.log(userDetails);
    return new Promise((resolve, reject) => {
        UserModel.findByIdAndUpdate(id, userDetails)
        .then((result) => resolve(result))
        .catch((error) => reject(false));
    });
};

const removeUserDBService = (id) => {
    return new Promise((resolve, reject) => {
        UserModel.findByIdAndDelete(id)
            .then((result) => resolve(result))
            .catch((error) => reject(false));
    });
};

module.exports = {
    getDataFromDBService,
    createUserDBService,
    updateUserDBService,
    removeUserDBService
};

"use strict";
const User = require("./user.model");
const { SUCCESS, BADREQUEST } = require("../config/resCodes");
const { sendResponse, errReturned } = require("../config/dto");

// get users
exports.users = async (req, res) => {
  try {
    const users = await User.find();
    if(users.length > 0){
      return sendResponse(res, SUCCESS, "Get users successfully!", users);
    }
    return sendResponse(res, BADREQUEST, "Users not found!");
  } catch (error) {
    errReturned(res, error);
  }
};

// Add users
exports.addUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    return sendResponse(res, SUCCESS, "User added successfully!", newUser);
  } catch (error) {
    errReturned(res, error);
  }
};
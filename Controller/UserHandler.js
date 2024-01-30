const express = require("express");
const UserService = require("../service/UserService.js");

const GetUserByToken = async (req, res) => {
  try {
    // Assuming there is a User model with findById method
    console.log("Decoded User ID in Controller:", req.user.id);

    const user = await UserService.getUserById(req.user.id);
    console.log("User Details:", user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error(error);
    +res.status(500).json({ message: "Internal server error" });
  }
};
const GetAllUser = async (req, res) => {
  try {
    const AllUser = await UserService.GetAllUsers();

    if (!AllUser) {
      return res.status(404).json({ message: "Users not found" });
    } else {
      return res.json({ AllUser });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  GetUserByToken,
  GetAllUser,
};

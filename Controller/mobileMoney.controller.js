const express = require("express");
const MobileMoneyService = require("../service/mobileMoney.service");
const MobileMoney = require('../model/mobileMoney.model')

async function createMobileMoney(req, res, next) {
  try {
    const { user, operateurNom, monnaie } =
      req.body;
    const newMobileMoney = new MobileMoney(
      user,
      operateurNom,
      monnaie
    );

    await MobileMoneyService.createMobileMoney(newMobileMoney);

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    next(error); // Pass the error to the next middleware (error handler)
  }
}

const GetMobileMoneyById = async (req, res) => {
  try {
    // Assuming there is a MobileMoney model with findById method
    console.log("Decoded MobileMoney ID in Controller:", req.mobileMoney.id);

    const mobileMoney = await MobileMoneyService.getMobileMoneyById(req.mobileMoney.id);
    console.log("MobileMoney Details:", mobileMoney);

    if (!mobileMoney) {
      return res.status(404).json({ message: "MobileMoney not found" });
    }

    res.json({ mobileMoney });
  } catch (error) {
    console.error(error);
    +res.status(500).json({ message: "Internal server error" });
  }
};

const GetAllMobileMoney = async (req, res) => {
  try {
    const AllMobileMoney = await MobileMoneyService.GetAllMobileMoney();

    if (!AllMobileMoney) {
      return res.status(404).json({ message: "MobileMoneys not found" });
    } else {
      return res.json({ AllMobileMoney });
    }
  } catch (error) {
    console.error(error);
  }
};

async function updateMobileMoney(req, res, next) {
  try {
    const { user, operateurNom, monnaie } =
      req.body;
    const newMobileMoney = new MobileMoney(
      user,
      operateurNom,
      monnaie
    );

    await MobileMoneyService.updateMobileMoney(newMobileMoney);

    res.status(200).json({ message: "MobileMoney registered successfully" });
  } catch (error) {
    next(error); // Pass the error to the next middleware (error handler)
  }
}

async function deleteMobileMoney(req, res, next) {
  try {
    const id = req.body;

    await MobileMoneyService.deleteMobileMoneyById(id);

    res.status(200).json({ message: "MobileMoney registered successfully" });
  } catch (error) {
    next(error); // Pass the error to the next middleware (error handler)
  }
}

module.exports = {
  createMobileMoney,
  GetMobileMoneyById,
  GetAllMobileMoney,
  updateMobileMoney,
  deleteMobileMoney
};

const express = require("express");
const OffreSpecialeService = require("../service/offreSpeciale.service");
const OffreSpeciale = require('../model/offreSpeciale.model')

async function createOffreSpeciale(req, res, next) {
  try {
    const { promotion, description, serviceConcerne, start, end  } =
      req.body;
    const newOffreSpeciale = new OffreSpeciale(
        promotion,
        description,
        serviceConcerne,
        start,
        end
    );

    await OffreSpecialeService.createOffreSpeciale(newOffreSpeciale);

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    next(error); // Pass the error to the next middleware (error handler)
  }
}

const GetOffreSpecialeById = async (req, res) => {
  try {
    // Assuming there is a OffreSpeciale model with findById method
    console.log("Decoded OffreSpeciale ID in Controller:", req.offreSpeciale.id);

    const offreSpeciale = await OffreSpecialeService.getOffreSpecialeById(req.offreSpeciale.id);
    console.log("OffreSpeciale Details:", offreSpeciale);

    if (!offreSpeciale) {
      return res.status(404).json({ message: "OffreSpeciale not found" });
    }

    res.json({ offreSpeciale });
  } catch (error) {
    console.error(error);
    +res.status(500).json({ message: "Internal server error" });
  }
};

const GetAllOffreSpeciale = async (req, res) => {
  try {
    const AllOffreSpeciale = await OffreSpecialeService.GetAllOffreSpeciale();

    if (!AllOffreSpeciale) {
      return res.status(404).json({ message: "OffreSpeciales not found" });
    } else {
      return res.json({ AllOffreSpeciale });
    }
  } catch (error) {
    console.error(error);
  }
};

async function updateOffreSpeciale(req, res, next) {
  try {
    const { promotion, description, serviceConcerne, start, end } =
      req.body;
    const newOffreSpeciale = new OffreSpeciale(
        promotion,
        description,
        serviceConcerne,
        start,
        end
    );

    await OffreSpecialeService.updateOffreSpeciale(newOffreSpeciale);

    res.status(200).json({ message: "OffreSpeciale registered successfully" });
  } catch (error) {
    next(error); // Pass the error to the next middleware (error handler)
  }
}

async function deleteOffreSpeciale(req, res, next) {
  try {
    const id = req.body;

    await OffreSpecialeService.deleteOffreSpecialeById(id);

    res.status(200).json({ message: "OffreSpeciale registered successfully" });
  } catch (error) {
    next(error); // Pass the error to the next middleware (error handler)
  }
}

module.exports = {
  createOffreSpeciale,
  GetOffreSpecialeById,
  GetAllOffreSpeciale,
  updateOffreSpeciale,
  deleteOffreSpeciale
};

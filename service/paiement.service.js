const database = require("../../database.js");

async function createPaiement(paiement) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("paiement");

    // Insert the paiement into the collection
    await collection.insertOne({
        montant: paiement.montant,
        motif: paiement.motif,
        temp: paiement.temp,
        operateur: paiement.operateur,
        idRendezVous: paiement.idRendezVous
    });

    console.log("paiement registered successfully");
  } catch (err) {
    console.error("Error during paiement registration:", err);
    throw err;
  }
}

async function getPaiementById(id, db) {
  try {
    const collection = db.collection("paiement");

    const paiement = await collection.findOne({ _id: ObjectId(id) });

    return paiement;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}

async function GetAllPaiement() {
  try {

    const collection = database.client.db("MEAN").collection("paiement");

    // Find all documents in the collection
    const paiements = await collection.find({}).toArray();

    return paiements;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}

async function updatePaiement(paiement) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("paiement");

    const filter = { id: paiement.id }; // Use other relevant fields from paiement if needed

    // Update object with changes (modify fields and values as needed)
    const updatePaiement = {
        $set: {
            montant: paiement.montant,
            motif: paiement.motif,
            temp: paiement.temp,
            operateur: paiement.operateur,
            idRendezVous: paiement.idRendezVous
        }
    };

    // Update the document
    const result = await collection.updateOne(filter, updatePaiement);

    if (result.matchedCount === 0) {
      console.warn("No paiement found with the provided filter:", filter);
    } else {
      console.log("paiement updated successfully:", result.matchedCount);
    }
  } catch (err) {
    console.error("Error during paiement update:", err);
    throw err;
  }
}

async function deletePaiementById(idPaiement) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("paiement");

    // Define the filter criteria
    const filter = { id: idPaiement };

    // Delete the paiement document
    const result = await collection.deleteOne(filter);

    if (result.deletedCount === 0) {
      console.warn("No paiement found with the provided id:", idPaiement);
    } else {
      console.log("paiement deleted successfully:", result.deletedCount);
    }
  } catch (err) {
    console.error("Error during paiement deletion:", err);
    throw err;
  }
}


module.exports = {
    createPaiement,
    getPaiementById,
    GetAllPaiement,
    updatePaiement,
    deletePaiementById
};

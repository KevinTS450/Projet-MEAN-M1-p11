const database = require("../../database.js");

async function createOffreSpeciale(offreSpeciale) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("offreSpeciale");

    // Insert the offreSpeciale into the collection
    await collection.insertOne({
        promotion: offreSpeciale.promotion,
        description: offreSpeciale.description,
        serviceConcerne: offreSpeciale.serviceConcerne,
        start: offreSpeciale.start,
        end: offreSpeciale.end
    });

    console.log("offreSpeciale registered successfully");
  } catch (err) {
    console.error("Error during offreSpeciale registration:", err);
    throw err;
  }
}

async function getOffreSpecialeById(id, db) {
  try {
    const collection = db.collection("offreSpeciale");

    const offreSpeciale = await collection.findOne({ _id: ObjectId(id) });

    return offreSpeciale;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}

async function GetAllOffreSpeciale() {
  try {

    const collection = database.client.db("MEAN").collection("offreSpeciale");

    // Find all documents in the collection
    const offreSpeciales = await collection.find({}).toArray();

    return offreSpeciales;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}

async function updateOffreSpeciale(offreSpeciale) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("offreSpeciale");

    const filter = { id: offreSpeciale.id }; // Use other relevant fields from offreSpeciale if needed

    // Update object with changes (modify fields and values as needed)
    const updateOffreSpeciale = {
        $set: {
            promotion: offreSpeciale.promotion,
            description: offreSpeciale.description,
            serviceConcerne: offreSpeciale.serviceConcerne,
            start: offreSpeciale.start,
            end: offreSpeciale.end
        }
    };

    // Update the document
    const result = await collection.updateOne(filter, updateOffreSpeciale);

    if (result.matchedCount === 0) {
      console.warn("No offreSpeciale found with the provided filter:", filter);
    } else {
      console.log("offreSpeciale updated successfully:", result.matchedCount);
    }
  } catch (err) {
    console.error("Error during offreSpeciale update:", err);
    throw err;
  }
}

async function deleteOffreSpecialeById(idOffreSpeciale) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("offreSpeciale");

    // Define the filter criteria
    const filter = { id: idOffreSpeciale };

    // Delete the offreSpeciale document
    const result = await collection.deleteOne(filter);

    if (result.deletedCount === 0) {
      console.warn("No offreSpeciale found with the provided id:", idOffreSpeciale);
    } else {
      console.log("offreSpeciale deleted successfully:", result.deletedCount);
    }
  } catch (err) {
    console.error("Error during offreSpeciale deletion:", err);
    throw err;
  }
}


module.exports = {
    createOffreSpeciale,
    getOffreSpecialeById,
    GetAllOffreSpeciale,
    updateOffreSpeciale,
    deleteOffreSpecialeById
};

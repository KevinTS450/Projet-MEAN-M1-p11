const database = require("../../database.js");

async function createRappel(rappel) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("rappel");

    // Insert the rappel into the collection
    await collection.insertOne({
      employee: rappel.employee,
      client: rappel.client,
      moment: rappel.moment,
      note: rappel.note
    });

    console.log("rappel registered successfully");
  } catch (err) {
    console.error("Error during rappel registration:", err);
    throw err;
  }
}

async function getRappelById(id, db) {
  try {
    const collection = db.collection("rappel");

    const rappel = await collection.findOne({ _id: ObjectId(id) });

    return rappel;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}

async function GetAllRappel() {
  try {

    const collection = database.client.db("MEAN").collection("rappel");

    // Find all documents in the collection
    const rappels = await collection.find({}).toArray();

    return rappels;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}

async function updateRappel(rappel) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("rappel");

    const filter = { id: rappel.id }; // Use other relevant fields from rappel if needed

    // Update object with changes (modify fields and values as needed)
    const updateRappel = {
        $set: {
            employee: rappel.employee,
            client: rappel.client,
            moment: rappel.moment,
            note: rappel.note
        }
    };

    // Update the document
    const result = await collection.updateOne(filter, updateRappel);

    if (result.matchedCount === 0) {
      console.warn("No rappel found with the provided filter:", filter);
    } else {
      console.log("rappel updated successfully:", result.matchedCount);
    }
  } catch (err) {
    console.error("Error during rappel update:", err);
    throw err;
  }
}

async function deleteRappelById(idRappel) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("rappel");

    // Define the filter criteria
    const filter = { id: idRappel };

    // Delete the rappel document
    const result = await collection.deleteOne(filter);

    if (result.deletedCount === 0) {
      console.warn("No rappel found with the provided id:", idRappel);
    } else {
      console.log("rappel deleted successfully:", result.deletedCount);
    }
  } catch (err) {
    console.error("Error during rappel deletion:", err);
    throw err;
  }
}


module.exports = {
    createRappel,
    getRappelById,
    GetAllRappel,
    updateRappel,
    deleteRappelById
};

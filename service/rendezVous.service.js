const database = require("../../database.js");

async function createRendezVous(rendezVous) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("rendezVous");

    // Insert the rendezVous into the collection
    await collection.insertOne({
      employee: rendezVous.employee,
      client: rendezVous.client,
      serviceAsked: rendezVous.serviceAsked,
      start: rendezVous.start
    });

    console.log("rendezVous registered successfully");
  } catch (err) {
    console.error("Error during rendezVous registration:", err);
    throw err;
  }
}

async function getRendezVousById(id, db) {
  try {
    const collection = db.collection("rendezVous");

    const rendezVous = await collection.findOne({ _id: ObjectId(id) });

    return rendezVous;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}

async function GetAllRendezVous() {
  try {

    const collection = database.client.db("MEAN").collection("rendezVous");

    // Find all documents in the collection
    const rendezVous = await collection.find({}).toArray();

    return rendezVous;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}

async function updateRendezVous(rendezVous) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("rendezVous");

    const filter = { id: rendezVous.id }; // Use other relevant fields from rendezVous if needed

    // Update object with changes (modify fields and values as needed)
    const updateRendezVous = {
        $set: {
            employee: rendezVous.employee,
            client: rendezVous.client,
            serviceAsked: rendezVous.serviceAsked,
            start: rendezVous.start,
            end: rendezVous.end,
            isDone: rendezVous.isDone,
            isConfirmed: rendezVous.isDone
        }
    };

    // Update the document
    const result = await collection.updateOne(filter, updateRendezVous);

    if (result.matchedCount === 0) {
      console.warn("No rendezVous found with the provided filter:", filter);
    } else {
      console.log("rendezVous updated successfully:", result.matchedCount);
    }
  } catch (err) {
    console.error("Error during rendezVous update:", err);
    throw err;
  }
}

async function deleteServiceById(idRendezVous) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("rendezVous");

    // Define the filter criteria
    const filter = { id: idRendezVous };

    // Delete the rendezVous document
    const result = await collection.deleteOne(filter);

    if (result.deletedCount === 0) {
      console.warn("No rendezVous found with the provided id:", idRendezVous);
    } else {
      console.log("rendezVous deleted successfully:", result.deletedCount);
    }
  } catch (err) {
    console.error("Error during rendezVous deletion:", err);
    throw err;
  }
}


module.exports = {
    createRendezVous,
    getRendezVousById,
    GetAllRendezVous,
    updateRendezVous,
    deleteServiceById
};

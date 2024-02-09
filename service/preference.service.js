const database = require("../../database.js");

async function createPreference(preference) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("preference");

    // Insert the preference into the collection
    await collection.insertOne({
        employee: preference.employee,
        client: preference.client,
        service: preference.service
    });

    console.log("preference registered successfully");
  } catch (err) {
    console.error("Error during preference registration:", err);
    throw err;
  }
}

async function getPreferenceById(id, db) {
  try {
    const collection = db.collection("preference");

    const preference = await collection.findOne({ _id: ObjectId(id) });

    return preference;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}

async function GetAllPreference() {
  try {

    const collection = database.client.db("MEAN").collection("preference");

    // Find all documents in the collection
    const preference = await collection.find({}).toArray();

    return preference;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}

async function updatePreference(preference) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("preference");

    const filter = { id: preference.id }; // Use other relevant fields from preference if needed

    // Update object with changes (modify fields and values as needed)
    const updatePreference = {
        $set: {
            employee: preference.employee,
            client: preference.client,
            service: preference.service
        }
    };

    // Update the document
    const result = await collection.updateOne(filter, updatePreference);

    if (result.matchedCount === 0) {
      console.warn("No preference found with the provided filter:", filter);
    } else {
      console.log("preference updated successfully:", result.matchedCount);
    }
  } catch (err) {
    console.error("Error during preference update:", err);
    throw err;
  }
}

async function deletePreferenceById(idPreference) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("preference");

    // Define the filter criteria
    const filter = { id: idPreference };

    // Delete the preference document
    const result = await collection.deleteOne(filter);

    if (result.deletedCount === 0) {
      console.warn("No preference found with the provided id:", idPreference);
    } else {
      console.log("preference deleted successfully:", result.deletedCount);
    }
  } catch (err) {
    console.error("Error during preference deletion:", err);
    throw err;
  }
}


module.exports = {
    createPreference,
    getPreferenceById,
    GetAllPreference,
    updatePreference,
    deletePreferenceById
};

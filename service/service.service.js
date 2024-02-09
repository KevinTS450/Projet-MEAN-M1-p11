const database = require("../../database.js");

async function createService(service) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("service");

    // Insert the service into the collection
    await collection.insertOne({
      nom: service.nom,
      prix: service.prix,
      dure_minute: service.dure_minute,
      commission: service.commision
    });

    console.log("service registered successfully");
  } catch (err) {
    console.error("Error during service registration:", err);
    throw err;
  }
}

async function getServiceById(id, db) {
  try {
    const collection = db.collection("service");

    const service = await collection.findOne({ _id: ObjectId(id) });

    return service;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}

async function GetAllService() {
  try {

    const collection = database.client.db("MEAN").collection("service");

    // Find all documents in the collection
    const services = await collection.find({}).toArray();

    return services;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}

async function updateService(service) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("service");

    const filter = { id: service.id }; 

    const updateService = {
      $set: {
        nom: service.nom,
        prix: service.prix,
        dure_minute: service.dure_minute,
        commission: service.commision,
      }
    };

    // Update the document
    const result = await collection.updateOne(filter, updateService);

    if (result.matchedCount === 0) {
      console.warn("No service found with the provided filter:", filter);
    } else {
      console.log("service updated successfully:", result.matchedCount);
    }
  } catch (err) {
    console.error("Error during service update:", err);
    throw err;
  }
}

async function deleteServiceById(idService) {
  try {
    const collection = database.client.db("MEAN").collection("service");

    const filter = { id: idService };

    const result = await collection.deleteOne(filter);

    if (result.deletedCount === 0) {
      console.warn("No service found with the provided id:", idService);
    } else {
      console.log("service deleted successfully:", result.deletedCount);
    }
  } catch (err) {
    console.error("Error during service deletion:", err);
    throw err;
  }
}


module.exports = {
  createService,
  getServiceById,
  GetAllService,
  updateService,
  deleteServiceById
};

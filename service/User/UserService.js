const database = require("../../database.js");

async function getUserById(id, db) {
  try {
    const collection = db.collection("users"); // Assuming 'users' is your collection name

    // Find the user by ID
    const user = await collection.findOne({ _id: ObjectId(id) });

    return user;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}
async function GetAllUsers() {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("users");

    // Find all documents in the collection
    const users = await collection.find({}).toArray();

    return users;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}
module.exports = {
  getUserById,
  GetAllUsers,
};

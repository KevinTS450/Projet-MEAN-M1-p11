const database = require("../../database.js");

async function getUserById(id) {
  try {
    const query = "SELECT * FROM users WHERE id = $1";
    const result = await database.pool.query(query, [id]);
    return result.rows[0]; // Assuming you want to return the first matching user
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

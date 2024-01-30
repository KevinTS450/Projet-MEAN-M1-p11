const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to MongoDB
async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Specify the database
    const database = client.db("MEAN");
    console.log('Using database "MEAN"');

    // Create a collection (optional)
    await database.createCollection("mycollection");
    console.log('Collection "mycollection" created');
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}

module.exports = {
  connect,
  client,
};

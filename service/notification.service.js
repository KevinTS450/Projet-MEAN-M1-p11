const database = require("../../database.js");
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

async function createNotification(notification) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("notification");

    // Insert the notification into the collection
    await collection.insertOne({
        notification: notification.notification,
        remarque: notification.remarque,
        temps: notification.temps,
        isSent: notification.isSent,
        isRead: notification.isRead,
        serviceConcerne: notification.serviceConcerne,
        destinataire: notification.destinataire
    });

    console.log("notification registered successfully");
  } catch (err) {
    console.error("Error during notification registration:", err);
    throw err;
  }
}

async function getNotificationById(id, db) {
  try {
    const collection = db.collection("notification");

    const notification = await collection.findOne({ _id: new ObjectId(id) });

    return notification;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}

async function GetAllNotification() {
  try {

    const collection = database.client.db("MEAN").collection("notification");

    // Find all documents in the collection
    const notifications = await collection.find({}).toArray();

    return notifications;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}

async function updateNotification(notification) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("notification");

    const filter = { id: notification.id }; // Use other relevant fields from notification if needed

    // Update object with changes (modify fields and values as needed)
    const updateNotification = {
        $set: {
            notification: notification.notification,
            remarque: notification.remarque,
            temps: notification.temps,
            isSent: notification.isSent,
            isRead: notification.isRead,
            serviceConcerne: notification.serviceConcerne,
            destinataire: notification.destinataire
        }
    };

    // Update the document
    const result = await collection.updateOne(filter, updateNotification);

    if (result.matchedCount === 0) {
      console.warn("No notification found with the provided filter:", filter);
    } else {
      console.log("notification updated successfully:", result.matchedCount);
    }
  } catch (err) {
    console.error("Error during notification update:", err);
    throw err;
  }
}

async function deleteNotificationById(idNotification) {
  try {
    // Specify the collection
    const collection = database.client.db("MEAN").collection("notification");

    // Define the filter criteria
    const filter = { id: idNotification };

    // Delete the notification document
    const result = await collection.deleteOne(filter);

    if (result.deletedCount === 0) {
      console.warn("No notification found with the provided id:", idNotification);
    } else {
      console.log("notification deleted successfully:", result.deletedCount);
    }
  } catch (err) {
    console.error("Error during notification deletion:", err);
    throw err;
  }
}


module.exports = {
    createNotification,
    getNotificationById,
    GetAllNotification,
    updateNotification,
    deleteNotificationById
};

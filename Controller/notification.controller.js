const express = require("express");
const NotificationService = require("../service/notification.service");
const Notification = require('../model/notification.model')

async function createNotification(req, res, next) {
  try {
    const { notification, remarque, temps, isSent, isRead, serviceConcerne, destinataire  } =
      req.body;
    const newNotification = new Notification(
      notification,
      remarque,
      temps,
      isSent,
      isRead,
      serviceConcerne,
      destinataire
    );

    await NotificationService.createNotification(newNotification);

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    next(error); // Pass the error to the next middleware (error handler)
  }
}

const GetNotificationById = async (req, res) => {
  try {
    // Assuming there is a Notification model with findById method
    console.log("Decoded Notification ID in Controller:", req.notification.id);

    const notification = await NotificationService.getNotificationById(req.notification.id);
    console.log("Notification Details:", notification);

    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    res.json({ notification });
  } catch (error) {
    console.error(error);
    +res.status(500).json({ message: "Internal server error" });
  }
};

const GetAllNotification = async (req, res) => {
  try {
    const AllNotification = await NotificationService.GetAllNotification();

    if (!AllNotification) {
      return res.status(404).json({ message: "Notifications not found" });
    } else {
      return res.json({ AllNotification });
    }
  } catch (error) {
    console.error(error);
  }
};

async function updateNotification(req, res, next) {
  try {
    const { notification, remarque, temps, isSent, isRead, serviceConcerne, destinataire } =
      req.body;
    const newNotification = new Notification(
      notification,
      remarque,
      temps,
      isSent,
      isRead,
      serviceConcerne,
      destinataire
    );

    await NotificationService.updateNotification(newNotification);

    res.status(200).json({ message: "Notification registered successfully" });
  } catch (error) {
    next(error); // Pass the error to the next middleware (error handler)
  }
}

async function deleteNotification(req, res, next) {
  try {
    const id = req.body;

    await NotificationService.deleteNotificationById(id);

    res.status(200).json({ message: "Notification registered successfully" });
  } catch (error) {
    next(error); // Pass the error to the next middleware (error handler)
  }
}

module.exports = {
  createNotification,
  GetNotificationById,
  GetAllNotification,
  updateNotification,
  deleteNotification
};

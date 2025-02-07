
import express from "express"
import {Event} from "../models/event.model.js"

const router = express.Router();
// Create Event
router.post("/", async (req, res) => {
  const { name, description, date, createdBy } = req.body;
  try {
    const event = new Event({ name, description, date, createdBy });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "username");
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

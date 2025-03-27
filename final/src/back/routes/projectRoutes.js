const express = require("express");
const Project = require("../models/Project");
const router = express.Router();

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().populate("createdBy", "name");
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a project
router.post("/", async (req, res) => {
  try {
    const { title, description, createdBy } = req.body;
    const newProject = new Project({ title, description, createdBy });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

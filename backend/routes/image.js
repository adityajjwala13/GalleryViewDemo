const Image = require("../models/Image");
const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");

//ROUTE 1: Upload an image: POST "/api/image/upload". Login required
router.post("/upload", fetchUser, async (req, res) => {});

module.exports = router;

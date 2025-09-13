const express = require('express')
require('dotenv').config();
const User = require('../models/user')

async function saveUser(req, res, next) {


    console.log("📩 Incoming body:", req.body);

  const { fullName, primaryEmail } = req.body;
  if (!fullName || !primaryEmail) {
    console.log("❌ Missing data, not saving");
    return res.status(400).json({ error: "Missing data" });
  }

  
  try {
    const { fullName, primaryEmail } = req.body;

    // Check if user already exists
    let user = await User.findOne({ primaryEmail });
    if (!user) {
      user = new User({ fullName, primaryEmail });
      await user.save();
      return res.json({ message: "✅ User saved", user });
    }

    return res.json({ message: "User already exists", user });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }


}

 module.exports = saveUser;
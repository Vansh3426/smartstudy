const e = require('express');
const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
  url: String,       // Cloudinary file URL
  public_id: String, // Cloudinary file ID (useful for deletion later)
  uploadedAt: { type: Date, default: Date.now },
  mimetype : String,
  originalName : String,
  extension : String, 
  folder : String

  

});

module.exports = mongoose.model("FileModel", fileSchema);

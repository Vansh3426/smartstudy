
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const FileModel = require('../models/file');
const router = express.Router();
const fs = require('fs');


const upload = multer({ dest: "uploads/" });




router.post("/upload", upload.single("file"), async (req, res) => {

  const mimeToExt = {
    "application/pdf": "pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
    "application/msword": "doc",
    "image/jpeg": "jpg",
    "image/png": "png",
  };

  let ext = mimeToExt[req.file.mimetype];
  if (!ext) {
    let originalExt = path.extname(req.file.originalname).slice(1); // remove "."
    if (originalExt) {
      ext = originalExt;
    }
  }
  if (!ext) {
    return res.status(400).json({ error: "Unsupported file type or missing extension" });
  }


  let resourceType = "raw";
  if (req.file.mimetype.startsWith("image/")) resourceType = "image";
  else if (req.file.mimetype.startsWith("video/")) resourceType = "video";

  const { branch, semno, sub } = req.body;

  const folderName = `${branch}sem${semno}${sub}${ext}`;

  if (!branch || !semno || !sub) {
    return res.status(400).json({ error: "Please provide branch, semester no. and subject  in the request body" });
  }
  try {
    let result = await cloudinary.uploader.upload(req.file.path, {
      folder: folderName,
      resource_type: resourceType,
      format: ext,
      use_filename: true,
      unique_filename: true,
    });

    // Remove local temp file

    fs.unlink(req.file.path, (err) => {
      if (err) console.error("Failed to delete temp file:", err);
    });

    // Save details in MongoDB
    const newFile = new FileModel({
      url: result.secure_url,      // Cloudinary secure URL
      public_id: result.public_id, // Cloudinary file ID
      mimetype: req.file.mimetype,
      originalName: req.file.originalname,
      extension: ext,  
      folder:folderName,         
    });

    await newFile.save();

    res.json({
      message: "File uploaded successfully",
      file: newFile,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
});



// router.get("/getallfiles", async (req, res) => {

//   const allFiles = await FileModel.find(); 

//   res.json(allFiles.map(f => ({
//   name: f.originalName,
//   url: f.url,
//   id:f.public_id,
//   ext: f.extension
// })));

// })

// router.get("/getallfiles/:foldername", async (req, res) => {
//   try {
//     const folderName = req.params.foldername; 

//     const files = await FileModel.find({ folder: folderName });
//    console.log("files fetched from db:", files)
//     if (files.length === 0) {
//       return res.status(404).json({ message: "No files found in this folder" });
//     }

//   res.json(files.map(f => ({
//   name: f.originalName,
//   url: f.url,
//   id:f.public_id,
//   ext: f.extension
// })));

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch files" });
//   } 
// })

router.get("/getallfiles/:foldername", async (req, res) => {
  try {
    const folderName = req.params.foldername; 
    const files = await FileModel.find({ folder: folderName });
    console.log("files fetched from db:", files);

    // Always return an array (empty if no files)
    res.json(
      files.length > 0
        ? files.map(f => ({
            name: f.originalName,
            url: f.url,
            id: f.public_id,
            ext: f.extension
          }))
        : [] // empty array if folder doesn't exist
    );

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch files" });
  } 
});




// router.get("/getfiles/:identifier", async (req, res) => {
//   const identifier = req.params.identifier;

//   try {
//     let file = null;

//     // Try to find by ID first
//     if (mongoose.Types.ObjectId.isValid(identifier)) {
//       file = await FileModel.findById(identifier);
//     }

//     // If not found by ID, try by name
//     if (!file) {
//       file = await FileModel.findOne({ name: identifier });
//     }

//     if (!file) {
//       return res.status(404).json({ error: "File not found" });
//     }

//     // Send the Cloudinary URL to frontend
//     res.json({ url: file.url });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch file" });
//   }
// });



// router.get("/getfiles/:id", async (req, res) => {
//   try {
//     const file = await FileModel.findById(req.params.id);
//     if (!file) {
//       return res.status(404).json({ error: "File not found" });
//     }

//     // Send the Cloudinary URL to frontend
//     res.json({ url: file.url });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch file" });
//   }
// });


// router.get("/getfiles/name", async (req, res) => {
//   try {
//     const file = await FileModel.findOne(req.params.name);
//     if (!file) {
//       return res.status(404).json({ error: "File not found" });
//     }

//     // Send the Cloudinary URL to frontend
//     res.json({ url: file.url });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch file" });
//   }
// });


// // GET a single file by ID (MongoDB _id)
// router.get("/getfiles/:id", async (req, res) => {
//   try {
//     const file = await FileModel.findById(req.params.id);
//     if (!file) {
//       return res.status(404).json({ error: "File not found" });
//     }
//     res.json(file);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch file" });
//   }
// });


// DELETE a file by ID
router.delete("/deletefile/:identifier", async (req, res) => {
  const identifier = req.params.identifier;
  try {
    let file = null;

     if (mongoose.Types.ObjectId.isValid(identifier)) {
      file = await FileModel.findById(identifier);
    }
    
    
    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    let resourceType = "image"; // default
    if (file.mimetype === "application/pdf" || file.mimetype === "application/msword" || file.mimetype.startsWith("application/")) {
      resourceType = "raw"; // for PDFs, DOCs, etc.
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(file.public_id, { resource_type: resourceType });

    // Delete from MongoDB
    let deletedFile = null;

// Try by ID first
if (mongoose.Types.ObjectId.isValid(req.params.identifier)) {
  deletedFile = await FileModel.findByIdAndDelete(req.params.identifier);
}

// If not found by ID, try by name
if (!deletedFile) {
  deletedFile = await FileModel.findOneAndDelete({ name: identifier });
}

 if (!deletedFile) {
  return res.status(404).json({ error: "File not found for deletion" });
}

 else res.json({ message: "File deleted successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete file" });
  }
});



module.exports = router;
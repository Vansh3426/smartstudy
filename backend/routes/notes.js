const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/',(req,res)=>{

    res.send("hey your in notes")
} )

module.exports = router;
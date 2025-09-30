
const { clerkMiddleware,requireAuth } = require("@clerk/express");
const express = require('express')
const saveUser = require("./middleware/userinfo"); 
const mongoose = require('mongoose'); 
require('dotenv').config();

const cors = require('cors');
// const sessionClaims = require('./middleware/sessionClaims')
const app = express()

app.use(express.json());
// const books = require('./routes/books')
// const pdf = require('./routes/pdf')
// const notes = require('./routes/notes')
const fileConfig = require('./routes/fileConfig')

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));



mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));




// app.use(sessionClaims)


// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true ,
// }));

// app.get("/session", sessionClaims, (req, res) => {
//   res.json({ message: "Middleware ran on Home visit" });
// });

app.use(express.static("public"));

// app.use(clerkMiddleware)

// app.use('/books', requireAuth,books);
// app.use('/pdf', requireAuth, pdf);
// app.use('/notes', requireAuth,notes);

app.post("/save-user", saveUser, (req, res) => {
 
})

app.use("/file", fileConfig);

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})

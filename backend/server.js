const express = require('express')
const cors = require('cors');
const app = express()
const books = require('./routes/books')
const pdf = require('./routes/pdf')
const notes = require('./routes/notes')
app.use(cors());
const port =3000

app.use(express.static("public"));

app.use('/books', books);
app.use('/pdf', pdf);
app.use('/notes',notes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const mongoose = require('mongoose');

const DB = process.env.DATABASE_LOCAL;
console.log(DB);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB Connection succesfull!'));

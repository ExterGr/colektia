const express = require("express");
const app = express();
const db = require("./models");
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

const apiRoutes = require("./routes/index");
app.use("/api", apiRoutes);

db.sequelize.sync().then((e) => {
  app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
  });
});

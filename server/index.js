const connectDB = require("./db");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
require("dotenv").config();

//Import Routes
const postsRoute = require("./routes/postsRoute");
const signUpRoute = require("./routes/signUpRoute");
const signInRoute = require("./routes/signInRoute");
const confirmEmailRoute = require("./routes/confirmEmailRoute");
//CONNECT TO DB
connectDB();

const cors = require("cors");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//MIDDLEWARES
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());

//ROUTES
app.use("/posts", postsRoute);
app.use("/register", signUpRoute);
app.use("/login", signInRoute);
app.use("/confirm", confirmEmailRoute);

//How do we start listening to the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

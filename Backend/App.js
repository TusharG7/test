const express = require("express");
const allRoutes = require("./routes/allRoutes.js");
const cors = require("cors");

const app = express();
const port = 3004;
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

//Routes

// app.use("/api/categories/:name", productsRoutes);
app.use("/api/categories", allRoutes);
// app.use("/api", (req, res) => res.send({ message: "Api is working" }));

//Server

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server listening on port %d", port);
  }
});

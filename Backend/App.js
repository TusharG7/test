import express from "express";
import categoriesRoutes from "./routes/allRoutes.js";
import cors from "cors";

const app = express();
const port = 3004;
app.use(express.json());
// app.use(
//   cors({
//     origin: "*",
//   })
// );

//Routes

// app.use("/api/categories/:name", productsRoutes);
app.use("/api/categories", categoriesRoutes);
// app.use("/api", (req, res) => res.send({ message: "Api is working" }));

//Server

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server listening on port %d", port);
  }
});

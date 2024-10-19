import logger from "jet-logger";
import morgan from "morgan";
import helmet from "helmet";
import express from "express";
import cors from "cors";
import db from "./models";

const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());


app.use("/api", require("./routes/routes"));

// Authenticate database connection and start the server
db.sequelize
  .authenticate()
  .then(() => {
    app.listen(port, () => {
      const SERVER_START_MSG = `DB Activated and Server started on port: ${port}`;
      logger.info(SERVER_START_MSG);
    });
  })
  .catch((err) => {
    logger.err(`Unable to connect DB: ${err.message}`);
    process.exit(1);
  });

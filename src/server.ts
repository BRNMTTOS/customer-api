import express from "express"
import { routes } from "./routes";

const app = express();

app.use(express.json()); // For parsing JSON bodies
app.use(routes);
const port = 3000;

app.listen(port, () => console.log("Server is running."));
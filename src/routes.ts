import { Router } from "express";
import { Controller } from "./controller";

const routes = Router();

const customerController = new Controller();

routes.get("/customers", (req, res, next) => { customerController.findAll});
routes.get("/customers/:id", (req, res, next) => {customerController.findById});
routes.post("/customers",(req, res, next) => { customerController.create});
routes.delete("/customers/:id",(req, res, next) => { customerController.delete});
routes.put("/customers/:id", (req, res, next) => {customerController.update});

export {routes}
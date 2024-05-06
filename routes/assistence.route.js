import AssistenceController from "../controller/assistence.controller.js";
import { Router } from "express";

const AssistenceRoute = Router();

AssistenceRoute.get("/assistence", (req, res) => {
  AssistenceController.getAll(req, res);
})
  .get("/assistence/:id", (req, res) => {
    AssistenceController.getById(req, res);
  })
  .post("/assistence", (req, res) => {
    AssistenceController.createRegister(req, res);
  })
  .put("/assistence/:id", (req, res) => {
    AssistenceController.updateRegister(req, res);
  })
  .delete("/assistence/:id", (req, res) => {
    AssistenceController.deleteRegister(req, res);
  });

export default AssistenceRoute;

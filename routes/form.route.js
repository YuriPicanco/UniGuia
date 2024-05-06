import FormController from "../controller/form.controller.js";
import { Router } from "express";

const FormRoute = Router();
const formController = new FormController();

FormRoute.get("/form", (req, res) => {
  formController.getAll(req, res);
})
  .get("/form/:id", (req, res) => {
    formController.getById(req, res);
  })
  .post("/form", (req, res) => {
    formController.createRegister(req, res);
  })
  .put("/form/:id", (req, res) => {
    formController.updateRegister(req, res);
  })
  .delete("/form/:id", (req, res) => {
    formController.deleteRegister(req, res);
  });

export default FormRoute;

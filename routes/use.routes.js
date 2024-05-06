import UserController from "../controller/user.controller.js";
import { Router } from "express";

const UseRoute = Router();
const userController = new UserController();

UseRoute.get("/user", (req, res) => {
  userController.getAll(req, res);
})
  .get("/user/:id", (req, res) => {
    userController.getById(req, res);
  })
  .post("/user", (req, res) => {
    userController.createRegister(req, res);
  })
  .put("/user/:id", (req, res) => {
    userController.updateRegister(req, res);
  })
  .delete("/user/:id", (req, res) => {
    userController.deleteRegister(req, res);
  });

export default UseRoute;

// class UseRoute {
//   constructor() {
//     this.router = Router();
//
//   }

//   async router() {
//     const route = Router();
//     route.get("/user", (req, res) => {
//       return res.status(200).json({ message: "user" });
//     });
//   }
// }

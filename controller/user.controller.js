import UserService from "../services/user.services.js";
import Controller from "./Controller.js";

const useService = new UserService();

export default class UserController extends Controller {
  constructor() {
    super(useService);
  }
}

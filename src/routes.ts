import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ensureAthenticate } from "./middleware/ensureAthenticate";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handler);

router.post("/messages", ensureAthenticate, new CreateMessageController().handler);

export { router }
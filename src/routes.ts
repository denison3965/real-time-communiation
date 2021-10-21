import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ensureAthenticate } from "./middleware/ensureAthenticate";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handler);

router.post("/messages", ensureAthenticate, new CreateMessageController().handler);

router.get('/messages/last3', new GetLast3MessagesController().handle)

export { router }
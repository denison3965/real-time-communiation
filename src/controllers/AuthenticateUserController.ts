import {Request, Response} from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
    async handler(request: Request, response: Response){

        const { code } = request.body;


        const service = new AuthenticateUserService();

        try {
            const result = await service.execute(code);

            response.json(result);
            
        } catch (error) {
            return response.json({ error : error.message });
        }


    } 
}

export { AuthenticateUserController }
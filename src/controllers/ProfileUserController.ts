import { Response } from 'express';
import { Request } from 'express';
import { ProfileUserServices } from '../services/ProfileUserService';



class GetProfileUserController {
  async handle(request: Request, response: Response){

    const { user_id } = request;

    try {
        const service = new ProfileUserServices();

        const result = await service.execute(user_id);

        return response.json(result);

    } catch (error) {
        return response.status(500).json({
            errorCode: error.message
        });
    }
  }
}


export { GetProfileUserController }

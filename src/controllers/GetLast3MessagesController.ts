import { Response } from 'express';
import { Request } from 'express';
import { GetLast3MessagesServices } from '../services/GetLast3MessagesService';


class GetLast3MessagesController {
  async handle(request: Request, response: Response){

    const service = new GetLast3MessagesServices();

    try {
        const result = await service.execute();
        return response.json(result);
        
    } catch (error) {
        return response.status(500).json({
            errorCode: error.message
        });
    }
  }
}


export { GetLast3MessagesController }

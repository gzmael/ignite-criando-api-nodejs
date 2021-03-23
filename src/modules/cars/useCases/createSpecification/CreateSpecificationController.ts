import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    try {
      const category = this.createSpecificationUseCase.execute({
        name,
        description,
      });
      return response.status(201).json(category);
    } catch (err) {
      return response.status(500).json({
        error: err.message,
      });
    }
  }
}

export { CreateSpecificationController };

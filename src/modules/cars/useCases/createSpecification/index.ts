import { SpecificationsRepository } from '@modules/cars/repositories/implementations/SpecificationsRepository';

import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRepository = SpecificationsRepository.getInstance();
const createCategoryUseCase = new CreateSpecificationUseCase(
  specificationsRepository,
);

const createSpecificationController = new CreateSpecificationController(
  createCategoryUseCase,
);

export { createSpecificationController };

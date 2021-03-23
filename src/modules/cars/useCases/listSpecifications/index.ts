import { SpecificationsRepository } from '@modules/cars/repositories/implementations/SpecificationsRepository';

import { ListSpecificationsController } from './ListSpecificationController';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationsRepository,
);

const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase,
);

export { listSpecificationsController };

import { Specification } from '@modules/cars/models/Specification';
import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): Specification {
    const hasCategory = this.specificationsRepository.findByName(name);

    if (hasCategory) {
      throw new Error('This specification already exists');
    }

    const category = this.specificationsRepository.create({
      name,
      description,
    });

    return category;
  }
}

export { CreateSpecificationUseCase };

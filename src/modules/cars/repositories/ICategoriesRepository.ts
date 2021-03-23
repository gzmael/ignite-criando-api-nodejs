import { ICreateCategoryDTO } from '../dtos/CategoryDTO';
import { Category } from '../models/Category';

interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Category;
  list(): Category[];
  findByName(name: string): Category | undefined;
}

export { ICategoriesRepository };

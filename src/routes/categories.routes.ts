import { createCategoryController } from '@modules/cars/useCases/createCategory';
import { importCategoriesController } from '@modules/cars/useCases/importCategories';
import { listCategoryController } from '@modules/cars/useCases/listCategories';
import { Router } from 'express';
import multer from 'multer';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request, response) =>
  createCategoryController.handle(request, response),
);

categoriesRoutes.get('/', (request, response) =>
  listCategoryController.handle(request, response),
);

categoriesRoutes.post('/import', upload.single('file'), (request, response) =>
  importCategoriesController.handle(request, response),
);

export { categoriesRoutes };

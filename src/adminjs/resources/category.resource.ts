import { Category } from '../../entities/categories/category.entity'
import { alimentacion } from './food.resource'

export const CategoriesResource = {
  resource: Category,
  options: { navigation: alimentacion },
}

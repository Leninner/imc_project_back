import { ResourceWithOptions } from 'adminjs'
import { Food } from '../../entities/food/food.entity'
import { injectManyToManySupport } from '../hooks/many-to-many.hook'

export const alimentacion = {
  name: 'Alimentacion',
  icon: 'Archive',
}

export const FoodResource: ResourceWithOptions = {
  resource: Food,
  options: injectManyToManySupport(
    {
      navigation: alimentacion,
      properties: {},
      actions: {
        new: {
          after: [],
        },
        edit: {
          after: [],
        },
      },
    },
    [
      {
        propertyName: 'categories',
        modelClassName: 'Category',
      },
    ],
  ),
}

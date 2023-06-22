import { ValidationError, ResourceWithOptions } from 'adminjs'
import { User } from '../../entities/users/user.entity'

const validateForm = async (request) => {
  const { payload = {}, method } = request
  if (method !== 'post') return request

  const { email = '', id } = payload

  const errors: Record<string, { message: string }> = {}

  if (email.includes('@') === false) {
    errors.email = {
      message: 'Email is not valid',
    }
  }

  if (!id) {
    const isEmailTaken = await User.findOne({ where: { email } });

    if (isEmailTaken) {
      errors.email = {
        message: 'Email ya registrado',
      };
    }
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors)
  }

  return request
}

export const UserResource: ResourceWithOptions = {
  resource: User,
  options: {
    navigation: {},
    actions: {
      new: {
        before: [validateForm],
      },
      edit: {
        before: [validateForm],
      },
    },
    properties: {
      email: {
        isRequired: true,
      },
      name: {
        isRequired: true,
      },
      password: {
        isRequired: true,
        type: 'password',
        isVisible: {
          list: false,
          edit: true,
          filter: false,
          show: false,
        },
      },
      gender: {
        availableValues: [
          { value: 'male', label: 'Masculino' },
          { value: 'female', label: 'Femenino' },
          { value: 'other', label: 'Otro' },
          { value: 'notSay', label: 'Prefiero no decirlo' },
        ],
      },
      createdAt: {
        isVisible: {
          list: false,
          edit: false,
          filter: true,
          show: true,
        },
      },
      updatedAt: {
        isVisible: {
          list: false,
          edit: false,
          filter: true,
          show: true,
        },
      },
    },
  },
}

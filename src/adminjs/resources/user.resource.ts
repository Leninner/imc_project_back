import { ValidationError } from 'adminjs'
import { User } from '../../entities/users/user.entity'
// import { SOME_CUSTOM_COMPONENT } from '../componentLoader'

// here your custom validations
const validateForm = async (request) => {
  const { payload = {}, method } = request
  if (method !== 'post') return request

  const { name = null, email = '' } = payload

  const errors: Record<string, { message: string }> = {}

  if (email.includes('@') === false) {
    errors.email = {
      message: 'Email is not valid',
    }
  }

  const isEmailTaken = await User.findOne({ where: { email } })

  if (isEmailTaken) {
    errors.email = {
      message: 'Email ya registrado',
    }
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors)
  }

  return request
}

export const UserResource = {
  resource: User,
  options: {
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

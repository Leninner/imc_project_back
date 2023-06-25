import { ValidationError, ResourceWithOptions } from 'adminjs'
import { User } from '../../entities/users/user.entity'
import { SupabaseInstance } from '../../utils/supabase-client'

const validateForm = async (request) => {
  request.payload.record = null

  const { payload = {}, method } = request
  if (method !== 'post') return request

  const { email = '', id, password = '', name = '', lastName = '' } = payload

  const errors: Record<string, { message: string }> = {}

  const regexpName = /^[a-zA-Z\s]{3,}$/
  if (!regexpName.test(name)) {
    errors.name = {
      message: 'El nombre debe tener al menos 3 letras y no contener números',
    }
  }

  if (!regexpName.test(lastName)) {
    errors.lastName = {
      message: 'El apellido debe tener al menos 3 letras y no contener números',
    }
  }

  if (password.length < 6) {
    errors.password = {
      message: 'La contraseña debe tener al menos 6 caractéres',
    }
  }

  const regexpCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/

  if (!regexpCorreo.test(email)) {
    errors.email = {
      message: 'El correo no es válido',
    }
  }

  if (!id) {
    const isEmailTaken = await User.findOne({ where: { email } })

    if (isEmailTaken) {
      errors.email = {
        message: 'Email ya registrado',
      }
    }
  } else {
    const query = User.createQueryBuilder('user')
      .where('user.email = :email', { email })
      .andWhere('user.id != :id', { id })

    const user = await query.getOne()

    if (user) {
      errors.email = {
        message: 'Email ya registrado',
      }
    }
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors)
  }

  return request
}

const createNewUserHandler = async (request) => {
  const { email, lastName, birthday, gender, password, name } = request.payload

  const { error } = await SupabaseInstance.getInstance().auth.admin.createUser({
    email,
    password,
    user_metadata: {
      name,
      lastName,
      gender,
      birthday,
      password,
      email,
    },
  })

  if (error) {
    throw new ValidationError({
      email: {
        message: 'Email ya registrado',
      },
    })
  }

  return {
    record: {},
    redirectUrl: '/admin/resources/User/actions/list',
  }
}

const deleteUserFromSupabaseAuth = async (response) => {
  const recordId = response.record.params.id

  const { error } = await SupabaseInstance.getInstance().auth.admin.deleteUser(
    recordId,
  )

  if (error) {
    throw new ValidationError({
      email: {
        message: 'No se pudo eliminar el usuario',
      },
    })
  }

  // eslint-disable-next-line require-atomic-updates
  response.notice = {
    message: '¡La acción se ejecutó con éxito!',
    type: 'success',
  }

  return response
}

export const UserResource: ResourceWithOptions = {
  resource: User,
  options: {
    navigation: {},
    actions: {
      new: {
        before: [validateForm],
        handler: createNewUserHandler,
        after: async (response) => {
          response.notice = {
            message: '¡La acción se ejecutó con éxito!',
            type: 'success',
          }

          return response
        },
      },
      edit: {
        isVisible: false,
      },
      bulkDelete: {
        isVisible: false,
      },
      delete: {
        after: deleteUserFromSupabaseAuth,
      },
    },
    properties: {
      email: {
        isRequired: true,
        isVisible: {
          list: true,
          edit: true,
          filter: true,
          show: true,
        },
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

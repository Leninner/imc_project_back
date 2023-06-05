import { APP_PORTS } from '../constants/app-constants'

export default () => ({
  port: parseInt(process.env.PORT, 10) || APP_PORTS.HTTP,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || APP_PORTS.DATABASE,
  },
})

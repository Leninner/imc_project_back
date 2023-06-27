import { createClient } from '@supabase/supabase-js'

export class SupabaseInstance {
  static supabase: any

  static getInstance() {
    if (!this.supabase) {
      this.supabase = createClient(
        process.env['SUPABASE_URL'],
        process.env['SUPABASE_SERVICE_ROLE_KEY'],
        {
          auth: {
            autoRefreshToken: false,
            persistSession: false,
          },
        },
      )
    }

    return this.supabase
  }
}

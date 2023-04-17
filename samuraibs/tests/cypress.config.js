const { defineConfig } = require("cypress");
const { Pool } = require('pg');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      const pool = new Pool({
        host: 'trumpet.db.elephantsql.com',
        user: 'yytbngih',
        password: 'obS78oVT2S45dtgquU6XM_Ha9v__6DdV',
        database: 'yytbngih',
        port: 5432
      });

      on('task', {
        removeUser(email) {
          return new Promise((resolve) => {
            pool.query('DELETE FROM public.users WHERE email = $1', [email], (error, result) => {
              if (error) {
                throw error
              }
              resolve({ success: result })
            })
          })
        }
      })

    },
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1440,
    viewportHeight: 900,

  },
});

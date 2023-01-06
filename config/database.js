const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'app-fa455828-657e-4f42-b0d0-de000246f304-do-user-13244656-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'virion-labs-db'),
      user: env('DATABASE_USERNAME', 'virion-labs-db'),
      password: env('DATABASE_PASSWORD', 'AVNS_q2Tb74Wi7uAnwqptNHu'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});



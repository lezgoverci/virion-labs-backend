// path: ./config/plugins.js

module.exports = ({ env }) => ({

    i18n: true,

    email: {
      config: {
        provider: 'sendmail',
        settings: {
          defaultFrom: 'no-reply@virionlabs.io',
          defaultReplyTo: 'verci@virionlabs.io',
        },
      },
    },

  });
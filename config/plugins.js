// path: ./config/plugins.js

module.exports = ({ env }) => ({
    // enable a plugin that doesn't require any configuration
    i18n: true,

    // enable a custom plugin
    email: {
      // my-plugin is going to be the internal name used for this plugin
      enabled: true,
    },

  });
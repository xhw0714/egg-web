/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {
    view: {
      cache: true,
      defaultViewEngine: "nunjucks",
      mapping: {
        ".html": "nunjucks"
      }
    },
    mysql: {
      // database configuration
      client: {
        host: "123.57.56.25",
        port: "3306",
        user: "moto",
        password: "KLaMiEBGrKmCmK8M",
        database: "moto"
      },
      // load into app, default true
      app: true,
      // load into agent, default false
      agent: false
    },
    security: {
      csrf: {
        enable: false
      }
    },
    // multipart: {
    //   mode: "stream"
    // }
  });

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1575943420434_5570";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    middleware: [ 'nav' ]
  };

  return {
    ...config,
    ...userConfig
  };
};

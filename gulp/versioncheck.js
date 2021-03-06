'use strict';

module.exports = function (gulp, gutil) {
  /**
   * Checks the version on the server
   */
  gulp.task('version-check', function(cb, errorCallback) {
    var server = require('../lib/server.js')(gulp, gutil);
    require('../lib/version-check.js')(gulp, gutil).process(server, {
      debugMode: gutil.env.debug
    }, cb, errorCallback);
  });
};

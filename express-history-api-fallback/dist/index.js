'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (req, res, next) {
    if (req.method === 'GET' && req.accepts('html')) {
      res.sendFile.apply(res, args.concat([function (err) {
        return err && next();
      }]));
    } else next();
  };
};

module.exports = exports['default'];

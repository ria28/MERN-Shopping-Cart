"use strict";

var mockFetch = require('./mock-fetch');

var successResponse = [{
  'userId': '1',
  "data": 'This looks slick!'
}, {
  'userId': '2',
  "data": 'I think this can be improved.'
}, {
  'userId': '1',
  "data": 'What kind of improvement?'
}];
mockFetch('/api/comments', successResponse);

function getCommentsByUserId(userId) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, i;

  return regeneratorRuntime.async(function getCommentsByUserId$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;

          for (_iterator = successResponse[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            i = _step.value;

            if (i.userId == userId) {
              console.log(i.data);
            }
          }

          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 11:
          _context.prev = 11;
          _context.prev = 12;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 14:
          _context.prev = 14;

          if (!_didIteratorError) {
            _context.next = 17;
            break;
          }

          throw _iteratorError;

        case 17:
          return _context.finish(14);

        case 18:
          return _context.finish(11);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 7, 11, 19], [12,, 14, 18]]);
}

module.exports = getCommentsByUserId;
getCommentsByUserId('1');
'use strict';

var utils = {};

// Array utils
utils.sortBy = require('array-sort');
utils.flatten = require('arr-flatten');

// Html utils
utils.block = require('to-gfm-code-block');
utils.tag = require('html-tag');

// JavaScript language utils
utils.typeOf = require('kind-of');

// matching utils
utils.isGlob = require('is-glob');
utils.mm = require('micromatch');
utils.falsey = require('falsey');

// Number utils
utils.isEven = require('is-even');
utils.isNumber = require('is-number');

// Object utils
utils.getObject = require('get-object');
utils.get = require('get-value');
utils.forOwn = require('for-own');

/**
 * Expose `utils`
 */

var createFrameUtils = {};
createFrameUtils.define = require('define-property');
createFrameUtils.extend = require('extend-shallow');
createFrameUtils.isObject = require('isobject');

utils.createFrame = function createFrame(data) {
  if (!createFrameUtils.isObject(data)) {
    throw new TypeError('createFrame expects data to be an object');
  }

  var extend = createFrameUtils.extend;
  var frame = extend({}, data);
  frame._parent = data;

  createFrameUtils.define(frame, 'extend', function(data) {
    extend(this, data);
  });

  if (arguments.length > 1) {
    var args = [].slice.call(arguments, 1);
    var len = args.length, i = -1;
    while (++i < len) {
      frame.extend(args[i] || {});
    }
  }
  return frame;
};

module.exports = utils;

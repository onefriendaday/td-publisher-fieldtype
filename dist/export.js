(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  mixins: [window.Storyblok.plugin],
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    initWith: function initWith() {
      return {
        plugin: 'td-publisher'
      };
    },
    deploy: function deploy(hookUrl) {
      var _this = this;

      this.loading = true;

      jQuery.ajax({
        url: hookUrl,
        type: 'POST'
      }).done(function (res) {
        console.log(res, 'success');
      }).fail(function (res) {
        console.log(res, 'error');
      }).always(function (res) {
        _this.loading = false;
        console.log(res, 'complete');
      });
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div><div v-if=loading>Loading...</div><div v-else=\"\"><a class=\"uk-button uk-display-block\" v-on:click=\"deploy('https://api.netlify.com/build_hooks/597ed8470752d0099b79185c')\">Deploy to production </a><a class=\"uk-button uk-display-block uk-margin-small-top\" v-on:click=\"deploy('https://api.netlify.com/build_hooks/597edb3b424ef210e08513d2')\">Deploy to staging</a></div></div>"

},{}],2:[function(require,module,exports){
'use strict';

var _Plugin = require('../Plugin.vue');

var _Plugin2 = _interopRequireDefault(_Plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = _Plugin2.default.methods.initWith();

window.storyblok.field_types[init.plugin] = _Plugin2.default;

},{"../Plugin.vue":1}]},{},[2]);

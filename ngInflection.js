!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.ngInflection=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(){

var inflection = window ? window.inflection : require('inflection');
var angular = window ? window.angular : require('angular');

angular.module('ngInflection', [])
	.filter('indexOf', function () { return function(arr) { if (arr) return inflection.indexOf.apply(this, arguments); } })
	.filter('pluralize', function () { return function(string) { if (string) return inflection.pluralize.apply(this, arguments); } })
	.filter('singularize', function () { return function(string) { if (string) return inflection.singularize.apply(this, arguments); } })
	.filter('inflect', function () { return function(string) { if (string) return inflection.inflect.apply(this, arguments); } })
	.filter('camelize', function () { return function(string) { if (string) return inflection.camelize.apply(this, arguments); } })
	.filter('underscore', function () { return function(string) { if (string) return inflection.underscore.apply(this, arguments); } })
	.filter('humanize', function () { return function(string) { if (string) return inflection.humanize.apply(this, arguments); } })
	.filter('capitalize', function () { return function(string) { if (string) return inflection.camelize.apply(this, arguments); } })
	.filter('dasherize', function () { return function(string) { if (string) return inflection.dasherize.apply(this, arguments); } })
	.filter('titleize', function () { return function(string) { if (string) return inflection.titleize.apply(this, arguments); } })
	.filter('demodulize', function () { return function(string) { if (string) return inflection.demodulize.apply(this, arguments); } })
	.filter('tableize', function () { return function(string) { if (string) return inflection.tableize.apply(this, arguments); } })
	.filter('classify', function () { return function(string) { if (string) return inflection.classify.apply(this, arguments); } })
	.filter('foreign_key', function () { return function(string) { if (string) return inflection.foreign_key.apply(this, arguments); } })
	.filter('ordinalize', function () { return function(string) { if (string) return inflection.ordinalize.apply(this, arguments); } })
	.filter('transform', function () { return function(string,arr) { if (string && arr) return inflection.transform(string, arr); } });
};
module.exports();
},{"angular":"angular","inflection":"inflection"}]},{},[1])(1)
});
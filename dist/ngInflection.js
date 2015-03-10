!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.ngInflection=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function() {
    var inflection = window && window.inflection ? window.inflection : require('inflection');
    var angular = window && window.angular ? window.angular : require('angular');
    var app = angular.module('ngInflection', []);

    function wrap(op) {
    	return function() {
	        return function(inp) {
	            if (inp) {
	                return inflection[op].apply(this, arguments);
	            }
	        };
    	};
    }

    var ops = [
    	'indexOf',
    	'pluralize',
    	'singularize',
    	'inflect',
    	'camelize',
    	'underscore',
    	'humanize',
    	'capitalize',
    	'dasherize',
    	'titleize',
    	'demodulize',
    	'tableize',
    	'classify',
    	'foreign_key',
    	'ordinalize'
    ];

    for (var i in ops) {
    	app.filter(ops[i], wrap(ops[i]));
    }

    app.filter('transform', function () {
		return function(string,arr) {
			if (string && arr) {
				return inflection.transform(string, arr);
			}
		};
	});
};

module.exports();
},{"angular":"angular","inflection":"inflection"}]},{},[1])(1)
});
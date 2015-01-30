module.exports = function() {
    var inflection = window ? window.inflection : require('inflection');
    var angular = window ? window.angular : require('angular');
    var module = angular.module('ngInflection', []);

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
    	module.filter(ops[i], wrap(ops[i]));
    }

    module.filter('transform', function () {
		return function(string,arr) {
			if (string && arr) {
				return inflection.transform(string, arr);
			}
		};
	});
};

module.exports();
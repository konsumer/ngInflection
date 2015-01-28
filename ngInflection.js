if (require && module && (!angular && !inflection)){
	var angular = require('angular');
	var inflection = require('inflection');
}
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

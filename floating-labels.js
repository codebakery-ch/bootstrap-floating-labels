var app = angular.module('app', []).
.directive('inlineLabel',function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: false,
            scope: {
                label: '@placeholder'
            },
            link: function (scope, element, attrs) {
                $(element).parents('.form-group').addClass('floating-label-form-group');
                $(element).before('<label>'+scope.label+'</label>')
            }
        }
    })

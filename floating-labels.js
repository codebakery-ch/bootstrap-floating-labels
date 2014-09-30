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
                $(element).before('<label>' + scope.label + '</label>');

                $('body')
                    .on("input propertychange", ".floating-label-form-group", function (e) {
                        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
                    });
                $(element)
                    .on("focus", function () {
                        $(this).addClass("floating-label-form-group-with-focus");
                    });
                $(element)
                    .on("blur", function () {
                        $(this).removeClass("floating-label-form-group-with-focus");
                    });

            }
        }
    });

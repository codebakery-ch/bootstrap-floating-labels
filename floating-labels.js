.directive('inlineLabel',function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: false,
            scope: {
                label: '@placeholder',
                pos: '@pos'
            },
            link: function (scope, element, attrs) {
               //default
                if (!attrs.pos) {
                    scope.pos = 'top'
                }
                
                var parentRow = element.parents('.form-group');
                parentRow.addClass('floating-label-form-group');
                element.before('<label class="' + scope.pos + '">' + scope.label + '</label>');

                parentRow.toggleClass("floating-label-form-group-with-value", !!element.val());

                element.bind('paste keyup blur focus', function (event) {
                    var eventType = event.type;
                    if (eventType == 'focus') {
                        parentRow.addClass("floating-label-form-group-with-focus");
                    }

                    if (eventType == 'blur') {
                        parentRow.removeClass("floating-label-form-group-with-focus");
                    }

                    if (eventType == 'keyup' || 'paste') {
                        parentRow.toggleClass("floating-label-form-group-with-value", !!element.val());
                    }

                });

            }
        }
    })

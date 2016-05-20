'use strinct';

eventsApp.controller('ComplieSamplecontroller',
  function ComplieSamplecontroller($scope, $compile, $parse) {

    var fn = $parse('1 + 2');

    var getter = $parse('event.name');

    var context1 = {
      event: {
        name: 'context 1 name'
      }
    };
    var context2 = {
      event: {
        name: 'context 2 name'
      }
    };

    console.log(getter(context1));
    console.log(getter(context2));

    console.log(getter(context2, context1));

    var setter = getter.assign;
    setter(context2, 'override');

    console.log(context2.event.name);

    $scope.appendDivToElement = function(markup) {
      return $compile(markup)($scope)
        .appendTo(angular.element("#appendHere"));
    }
  }
);

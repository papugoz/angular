'use strinct';

eventsApp.controller('LocaleSamplecontroller',
  function LocaleSamplecontroller($scope, $locale) {

    $scope.myDate = Date.now();
    $scope.myFormat = $locale.DATETIME_FORMATS.fulldate;
  }
);

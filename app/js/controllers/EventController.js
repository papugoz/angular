'use strict';

eventsApp.controller('EventController',
  function EventController($scope) {
    $scope.event = {
      name: 'Angular Boot Camp',
      date: '2016-01-01',
      time: '10:30',
      location: {
        address: 'Postępu 14',
        city: 'Warsaw',
        country: 'Poland'
      },
      imageUrl: '/img/angularjs-logo.png'
    }
  }
);

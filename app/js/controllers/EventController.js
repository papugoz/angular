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
            imageUrl: '/img/angularjs-logo.png',
            sessions: [{
                name: 'Dam son',
                creatorName: 'Marcin Cieśla',
                duration: '1 h',
                level: 'basic',
                abstract: 'just introduction, since noone really knows how to use this language and we need to explain everything to everyone.',
                upVoteCount: 0
            }, {
                name: 'where you find this',
                creatorName: 'Marcin Cieśla',
                duration: '30 min',
                level: 'adwanced',
                abstract: 'just introduction, since noone really knows how to use this language and we need to explain everything to everyone.',
                upVoteCount: 0
            }, {
                name: 'you do dis man?',
                creatorName: 'Marcin Cieśla',
                duration: '1 h',
                level: 'basic',
                abstract: 'just introduction, since noone really knows how to use this language and we need to explain everything to everyone.',
                upVoteCount: 0
            }]
        }

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);

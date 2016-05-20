'use strict';

eventsApp.filter('durations', function() {
    return function(duration) {
        switch (duration) {
            case 1:
                return "Half Hour";
            case 2:
                return "1 Hour";
            case 3:
                return "Half Day";
            case 4:
                return "Full Day";
        }
    }
})

eventsApp.filter('levels', function() {
    return function(val, level) {
        var lvl = 0;
        switch (level) {
            case "Introductory":
                lvl = 1;
                break;
            case "Intermediate":
                lvl = 2;
                break;
            case "Advanced":
                lvl = 3;
                break;
        }
        for (var i = 1; i <= lvl; i++) {
            val.push(i);
        }
        return val;
    }
})

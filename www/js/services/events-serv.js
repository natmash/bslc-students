'use strict';
angular.module('main')
  .service('Events', function ($log) {

    $log.log('Hello from your Service: Events in module main');

    this.getById = function (id) {
      var events = this.getAll();
      var event = events[0]; //default post
      for (var i = 0; i < events.length; i++) {
        if ((events[i].id + '' ) === id) {
          event = events[i];
          break;
        }
      }
      return event;
    };

    this.getAll = function () {
      return [
        {
          location: [-94.41, 45.12],
          title: 'Middle School Lock-In',
          datetime: '10/26/2016 10:00pm',
          groups: ['High School', 'Middle School'],
          details: 'We are going to be having a lock-in and will have makeovers, sports and a Madden tournament.  Bring snacks and a 12 pack of soda if you can.',
          organizer: 'Josh Keithley'
        },
        {
          location: [-94.41, 45.12],
          title: 'Middle School Life Group',
          datetime: '10/26/2016 10:00pm',
          groups: ['High School', 'Middle School'],
          details: 'We are going to be having a lock-in and will have makeovers, sports and a Madden tournament.  Bring snacks and a 12 pack of soda if you can.',
          organizer: 'Jack Gifford'
        },
        {
          location: [-94.41, 45.12],
          title: 'Sunday School',
          datetime: '10/26/2016 10:00pm',
          groups: ['High School', 'Middle School'],
          details: 'We are going to be having a lock-in and will have makeovers, sports and a Madden tournament.  Bring snacks and a 12 pack of soda if you can.',
          organizer: 'Matt Nash'
        },
        {
          location: [-94.41, 45.12],
          title: 'High School Life Group',
          datetime: '10/26/2016 10:00pm',
          groups: ['High School', 'Middle School'],
          details: 'We are going to be having a lock-in and will have makeovers, sports and a Madden tournament.  Bring snacks and a 12 pack of soda if you can.',
          organizer: 'Stacy Nash'
        }
      ];
    };
  });

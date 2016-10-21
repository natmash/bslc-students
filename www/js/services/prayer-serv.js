'use strict';
angular.module('main')
  .service('Prayer', function ($log) {

    $log.log('Hello from your Service: Prayer in module main');

    this.getById = function (id) {
      // TODO, this needs some love
      var prayers = this.getAll();
      var prayer = prayers[0]; //default post
      for (var i = 0; i < prayers.length; i++) {
        if ((prayers[i].id + '' ) === id) {
          prayer = prayers[i];
          break;
        }
      }
      return prayer;
    };

    this.getAll = function () {
      // TODO, this needs some love
      return [{
        id: 1000,
        person: 'Matt Nash',
        anonymous: true,
        type: 'Prayer',
        content: 'I need lots of help to get me through this test God.',
        datetime: '10/15/2016 1:00pm'
      },
        {
          id: 1001,
          person: 'Matt Nash',
          anonymous: false,
          type: 'Prayer',
          content: 'I need lots of help to get me through this test God.',
          datetime: '10/15/2016 12:00pms'
        },
        {
          id: 1002,
          person: 'Matt Nash',
          type: 'Praise',
          anonymous: true,
          content: 'I need lots of help to get me through this test God.',
          datetime: '10/15/2016 11:00am'
        },
        {
          id: 1003,
          person: 'Matt Nash',
          type: 'Praise',
          anonymous: false,
          content: 'I need lots of help to get me through this test God.',
          datetime: '10/15/2016 10:00am'
        }
      ];
    };
  })


'use strict';
angular.module('main')
  .service('Verse', function ($log) {

    $log.log('Hello from your Service: Verse in module main');

    this.getById = function (id) {
      var verses = this.getAll();
      var verse = verses[0]; //default post
      for (var i = 0; i < verses.length; i++) {
        if ((verses[i].id + '' ) === id) {
          verse = verses[i];
          break;
        }
      }
      return verse;
    };

    this.getAll = function () {
      return [{
        id: 1000,
        title: 'Micah 6:8',
        content: 'He has showed you O man, what is good, and what does the Lord require of you. But to do justice, to love kindness, and to walk humbly with your God.',
        datetime: '10/15/2016'
      },
        {
          id: 1001,
          title: 'John 3:16',
          content: 'For God so loved the world, that He gave his only Son, so that all who believed in Him, shall not perish but have eternal life.',
          datetime: '10/14/2016'
        },
        {
          id: 1002,
          title: 'Phillippians 4:8',
          content:'Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things.',
          datetime: '10/13/2016'
        },
        {
          id: 1003,
          title: 'Phillippians 4:8',
          content:'Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things.',
          datetime: '10/12/2016'
        }
      ];
    };
  });


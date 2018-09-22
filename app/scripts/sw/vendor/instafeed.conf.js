(function () {
  'use strict';
  var feed = new Instafeed({
    get: 'user',
    userId: '425048461',
    accessToken: '425048461.1677ed0.5b8de143f14a41f4ac30c1b49270919b',
    success: function (suc) {
      console.log('suc', suc);
    },
    err: function (err) {
      console.log('err', err);
    }
  });

  feed.run();
})();

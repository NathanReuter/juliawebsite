(function () {
  'use strict';
  var feed = new Instafeed({
    get: 'user',
    userId: '425048461',
    clientId: '2f19beb208d447b6a1d2f0c4ca151489',
    success: function (suc) {
      console.log('suc', suc);
    },
    err: function (err) {
      console.log('err', err);
    }
  });

  feed.run();
})();

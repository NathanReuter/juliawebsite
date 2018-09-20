(function () {
  'use strict';

  var feed = new Instafeed({
    get: 'user',
    userId: '2254432013',
    clientId: '2f19beb208d447b6a1d2f0c4ca151489'
  });

  feed.run();
})();

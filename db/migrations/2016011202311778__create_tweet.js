module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateTweet extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016011202311778;
    }

    up() {

      return [
        this.createTable("tweets", [{"name":"user_id","type":""},{"name":"int"},{"name":"body","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("tweets")
      ];

    }

  }

  return CreateTweet;

})();

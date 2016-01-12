module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Tweet = Nodal.require('app/models/tweet.js');

  class V1TweetsController extends Nodal.Controller {

    index() {

      Tweet.query()
        .join('user')
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models, ['id', 'body', 'created_at', {user: ['id', 'username', 'created_at']}]);

        });

    }

    show() {

      Tweet.find(this.params.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Tweet.create(this.params.body.data, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Tweet.update(this.params.id, this.params.body.data, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Tweet.destroy(this.params.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1TweetsController;

})();

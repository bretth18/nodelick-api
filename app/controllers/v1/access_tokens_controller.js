module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const AccessToken = Nodal.require('app/models/access_token.js');

  class V1AccessTokensController extends Nodal.Controller {

    index() {

      AccessToken.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      AccessToken.find(this.params.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      AccessToken.create(this.params.body.data, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      AccessToken.update(this.params.id, this.params.body.data, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      AccessToken.destroy(this.params.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1AccessTokensController;

})();

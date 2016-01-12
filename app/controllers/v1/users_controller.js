module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('app/models/user.js');

  class V1UsersController extends Nodal.Controller {

    index() {

      User.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models, ['id', 'username', 'email', 'created_at']);


        });

    }

    show() {

      User.find(this.params.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      User.create(this.params.body.data, (err, model) => {

        this.respond(err || model, ['id', 'username', 'email', 'created_at']);

      });

    }

    update() {

      User.update(this.params.id, this.params.body.data, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      User.destroy(this.params.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1UsersController;

})();

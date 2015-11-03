'use strict';

var path = require('path');

module.exports = {
    name: 'ember-cli-identicon',

    blueprintsPath: function() {
        return path.join(__dirname, 'blueprints');
    },

    included: function (app) {
        this._super.included(app);
        this.app.import(app.bowerDirectory + '/jsSHA/src/sha.js');
        this.app.import(app.bowerDirectory + '/identicon.js/pnglib.js');
        this.app.import(app.bowerDirectory + '/identicon.js/identicon.js');
        this.app.import('vendor/ember-cli-identicon/shim.js', {
            type: 'vendor',
            exports: {
                'identicon.js': ['default'],
                'jsSHA': ['default']
            }
        });
    }
};

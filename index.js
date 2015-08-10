/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-cli-identicon',

    included: function (app, parentAddon) {
        var target = (parentAddon || app);
        this._super.included(target);

        target.import('vendor/sha.js');
        target.import('vendor/pnglib.js');
        target.import('vendor/identicon.js');
    }
};

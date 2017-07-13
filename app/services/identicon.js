import Ember from 'ember';
/* global jsSHA */
/* global Identicon */

/**
 * @classdesc Description
 * @extends Ember.Service
 */
export default Ember.Service.extend({
    create: function(hash, options) {
        options || (options = {});
        var raw = new jsSHA('SHA-1', 'TEXT');
        raw.update(hash);

        options.size = options.size || 420;
        options.margin = options.margin || 0.1;
        // Backwards compatibility
        options.background = options.background || options.bgColors;

        var updatedHash = raw.getHash('HEX'),
            data = new Identicon(updatedHash, options).toString();

        return 'data:image/png;base64,' + data;
    }
});

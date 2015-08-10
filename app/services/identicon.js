import Ember from 'ember';


/**
 * @classdesc Description
 * @extends Ember.Service
 */
export default Ember.Service.extend({
    create: function(hash, options) {
        options || (options = {});
        var raw = new jsSHA('SHA-1', 'TEXT');
        raw.update(hash);

        var updatedHash = raw.getHash('HEX'),
            data = new Identicon(updatedHash, options.size || 420, options.margin || .1, options).toString();

        return 'data:image/png;base64,' + data;
    }
});
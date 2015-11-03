module.exports = {
    normalizeEntityName: function() {
        // this prevents an error when the entityName is
        // not specified (since that doesn't actually matter
        // to us
    },

    afterInstall: function () {
        return this.addBowerPackagesToProject([{name: 'jsSHA', version: '2.0.2'},{name: 'identicon'}]);
    }
};

module.exports = {
    normalizeEntityName: function() {
        // this prevents an error when the entityName is
        // not specified (since that doesn't actually matter
        // to us
    },

    afterInstall: function () {
        this.addBowerPackageToProject('jsSHA#1.0');
        this.addBowerPackageToProject('identicon#1.0');
    }
};

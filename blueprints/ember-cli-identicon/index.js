module.exports = {
    normalizeEntityName: function() {

    },

    afterInstall: function (options) {
        return this.addBowerPackageToProject([{name: 'jsSHA'},{name: 'identicon.js'}]);
    }
};

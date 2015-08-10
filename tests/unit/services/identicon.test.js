import { test, moduleFor } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

var App;

moduleFor('service:identicon', 'Unit - IdenticonService', {
    beforeEach: function() {
        App = startApp();
    },
    afterEach: function() {
        Ember.run(App, 'destroy');
    }
});

test('it exists', function(assert) {
    assert.ok(this.subject());
});


test('it returns a valid png response', function(assert) {
    var pngPrefix = /^data:image\/png;base64,.+$/g;
    assert.equal(true, pngPrefix.test(this.subject().create('sampleInput')));
});
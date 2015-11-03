# Ember-cli-identicon
an `identicon.js` addon for `ember-cli v1.13.8` apps

## Installation
```javascript
ember install ember-cli-identicon
```

## General Usage
in *app/pods/components/user-avatar/component.js*
```javascript
import Ember from 'ember';

export default Ember.Component.extend({
    // Inject a reference to the identicon service provided by this addon
    identicon: Ember.inject.service(),

    // Profile image src. If user does not have an associated image, generate
    // an icon using the identicon.js service
    src: function() {
        // look for an image attribute on the user record and return it if found
        var image = this.get('user.image');
        if (image) {
            return image;
        }

        // get a reference to the identicon service and any options provided from
        // outside this component
        var identicon = this.get('identicon'),
            options = this.get('options') || {};
            
        // generate an identicon using the user's email address and any provided
        // options, with defaults: 20% margin between the edge of the image and the
        // generated pattern, 48x48px in dimension, and a background color of 
        // RGB(224, 224, 224)
        return identicon.create(this.get('user.email'), {
            margin: options.margin || 0.2,
            size: options.size || 48,
            bgColors: options.bgColors || [224,224,224]
        });
    }.property('user')
});
```

in *app/pods/components/user-avatar/template.hbs*
```handlebars
<img class="responsive-img circle" src="{{src}}" alt=""/>
```

## Development
### Installation
1. `git clone` this repo
2. `npm install`
3. `ember g ember-cli-identicon`

## Running Tests
* `ember test`
* `ember test --server`

## Contributing
1. [Fork it](https://github.com/cludden/ember-cli-identicon/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License
Copyright (c) 2015 Chris Ludden.
Licensed under the [MIT license](LICENSE.md).

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

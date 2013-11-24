# node-gm-bin [![Build Status](https://secure.travis-ci.org/chrisdanford/node-gm-bin.png?branch=master)](http://travis-ci.org/chrisdanford/node-gm-bin)

[GraphicsMagick](http://www.graphicsmagick.org/) 0.7.4 Node.js wrapper that makes it seamlessly available as a local dependency on OS X, Linux, and Windows.  Windows support is untested.

> GraphicsMagick is the swiss army knife of image processing.

## Install

Install with [npm](https://npmjs.org/package/gm-bin): `npm install --save gm-bin`


## Example usage

```js
var execFile = require('child_process').execFile;
var gmPath = require('gm-bin').path;

execFile(gmPath, ['identify', 'foo.png'], function(err, stdout, stderr) {
    console.log('file details:', stdout);
});
```

Can also be run directly from `./node_modules/.bin/gm-bin`.


## License

gm licensed under an [MIT license](http://www.graphicsmagick.org/).

MIT

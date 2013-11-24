'use strict';

var Bin = require('bin-wrapper');
var path = require('path');

var vendorDir = path.join(__dirname, '../vendor');
var options = {
    name: 'gm',
    bin: 'gm',
    path: vendorDir,
    src: 'http://downloads.sourceforge.net/project/graphicsmagick/graphicsmagick/1.3.18/GraphicsMagick-1.3.18.tar.gz',
    buildScript: './configure && make && cp utilities/gm ' + vendorDir,
    url: 'https://github.com/404', // bin-wrapper requires this this exist and be a valid URI for each platform.  Dumb.

    // bin-check makes it difficult to bundle binaries that need require than one file.
    // Just distribute all files in the npm download.
    // The "url" props below are dummies.  "bin-check" won't attempt to download the URL
    // because the binary already exists from the npm download.
    platform: {
        darwin: {
            path: path.join(vendorDir, 'osx', 'bin')
        },
        linux: {
            arch: {
                x64: {
                    path: path.join(vendorDir, 'linux', 'x64')
                }
            }
        },
        win32: {
            bin: 'gm.exe',
            path: path.join(vendorDir, 'win32')
        }
    }
};
var bin = new Bin(options);

exports.bin = bin;
exports.options = options;
exports.path = bin.path;

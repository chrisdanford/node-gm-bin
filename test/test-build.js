/*global describe, it */
'use strict';

var assert = require('assert');
var Bin = require('bin-wrapper');
var fs = require('fs');
var options = require('../lib/gm-bin').options;
var path = require('path');
var _ = require('lodash');

describe('gm.build()', function () {
    xit('should rebuild the gm binaries', function (cb) {
        // We don't support building on win32 or darwin.
        if (process.platform === 'win32' || process.platform === 'darwin') {
            cb();
            return;
        }

        this.timeout(false);
        var tempDir = path.join(__dirname, '../tmp');
        var newOpt = _.extend(options, {
            path: tempDir,
            buildScript: './configure && make && cp utilities/gm ' + tempDir
        });
        var bin = new Bin(options);

        var origCTime = fs.statSync(bin.path).ctime;
        bin.build(function () {
            var newCTime = fs.statSync(bin.path).ctime;

            assert(newCTime !== origCTime);
            cb();
        });
    });
});

/*global describe, it */
'use strict';

var assert = require('assert');
var Bin = require('bin-wrapper');
var fs = require('fs');
var options = require('../lib/gm-bin').options;
var path = require('path');

describe('gm.build()', function () {
    xit('should rebuild the gm binaries', function (cb) {
        this.timeout(false);
        var bin = new Bin(options);

        bin.path = options.path;
        bin.buildScript = options.buildScript;

        bin.build(function () {
            var origCTime = fs.statSync(bin.path).ctime;
            var actualCTime = fs.statSync(bin.path).ctime;

            assert(actualCTime !== origCTime);
            cb();
        });
    });
});

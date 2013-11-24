/*global describe, it, after */
'use strict';

var assert = require('assert');
var execFile = require('child_process').execFile;
var fs = require('fs');
var path = require('path');

describe('gm()', function () {
    it('should return path to gm binary', function (cb) {
        var binPath = require('../lib/gm-bin').path;

        execFile(binPath, ['help'], function (err, stdout, stderr) {
            assert(stdout.toString().indexOf('GraphicsMagick') !== -1);
            cb();
        });
    });

    it('should successfully proxy gm', function (cb) {
        var binPath = path.join(__dirname, '../bin/gm-bin.js');

        execFile('node', [binPath, 'help'], function (err, stdout, stderr) {
            assert(stdout.toString().indexOf('GraphicsMagick') !== -1);
            cb();
        });
    });

    it('should identify a .png', function (cb) {
        var binPath = path.join(__dirname, '../bin/gm-bin.js');
        var args = [
            'identify',
            path.join(__dirname, 'fixtures', 'test.png')
        ];

        execFile('node', [binPath].concat(args), function (err, stdout, stderr) {
            assert(stdout.toString().indexOf('PNG') !== -1);
            cb();
        });
    });
});

var assert = require('assert');
var path = require('path');
var fs = require('fs');
var exec = require('child_process').exec;

function print(err, stdout, stderr){

    console.log('err:' +  err);
    console.log('stdout:');
    console.log(stdout);
    console.log('stderr:');
    console.log(stderr);
}

describe('gm-bin', function () {
    before(function (){
        var binPath = require('../lib/gm-bin').path;
        fs.chmodSync(binPath, 0755);
    });

    after(function () {
        // fs.unlinkSync('test/after.png');
    });

    it('should return gm help', function (cb) {
        var binPath = require('../lib/gm-bin').path;

        exec(binPath, function (err, stdout, stderr) {
            print(err, stdout, stderr);
            assert(stdout.toString().indexOf('GraphicsMagick') !== -1);
            cb();
        });
    });

    it('should successfully proxy gm', function (cb) {
        var binPath = path.join(__dirname, '../bin/gm-bin');

        exec('node ' + binPath, function (err, stdout, stderr) {
            print(err, stdout, stderr);
            assert(stdout.toString().indexOf('GraphicsMagick') !== -1);
            cb();
        });
    });
/*
    it('should encode a .png', function (cb) {
        var binPath = path.join(__dirname, '../bin/gm-bin');
        var args = [
            path.join(__dirname, 'fixtures', 'test.png'),
            '-o', path.join(__dirname, 'after.png')
        ];

        exec('node ' + binPath + ' ' + args.join(' '), function (err, stdout, stderr) {
            print(err, stdout, stderr);
            var actual = fs.statSync('test/test.png').size;
            var original = fs.statSync('test/fixtures/after.png').size;
            assert(actual < original);
            cb();
        });
    }); */
});

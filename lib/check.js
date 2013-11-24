'use strict';

var bin = require('./gm-bin').bin;
var chalk = require('chalk');

var timer = setTimeout(function(){}, 1000);
var done = function() { clearTimeout(timer); };

var args = ['help'];

bin.check(args, function (works) {
    if (!works) {
        console.log(chalk.red('✗ pre-build test failed, compiling from source...'));

        if (process.platform === 'win32' || process.platform === 'darwin') {
            console.log(chalk.red('✗ building is not supported on ' + process.platform));
            done();
        }

        return bin.build(function (err) {
            if (err) {
                console.log(chalk.red('✗ ' + err.message));
            } else {
                console.log(chalk.green('✓ rebuilt successfully'));
            }
            done();
        });
    }

    console.log(chalk.green('✓ pre-build test passed successfully'));
    done();
});

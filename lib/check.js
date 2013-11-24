'use strict';

var bin = require('./gm-bin').bin;
var chalk = require('chalk');

var args = [
    'help'
];

bin.check(args, function (works) {
    if (!works) {
        console.log(chalk.red('✗ pre-build test failed, compiling from source...'));

        if (process.platform === 'win32' || process.platform === 'darwin') {
            return console.log(chalk.red('✗ building is not supported on ' + process.platform));
        }

        return bin.build(function (err) {
            if (err) {
                return console.log(chalk.red('✗ ' + err.message));
            }

            console.log(chalk.green('✓ rebuilt successfully'));
        });
    }

    console.log(chalk.green('✓ pre-build test passed successfully'));
});
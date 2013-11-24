'use strict';

var bin = require('./gm-bin').bin;
var chalk = require('chalk');

console.log('chrisdanford a');
bin.check('help', function(works) {
    console.log('chrisdanford b');
    if (works) {
        console.log(chalk.green('✓ pre-build test passed successfully'));
        return;
    }

    console.log(chalk.red('✗ pre-build test failed, compiling from source...'));

    if (process.platform === 'win32' || process.platform === 'darwin') {
        console.log(chalk.red('✗ building is not supported on ' + process.platform));
        return;
    }

    console.log('chrisdanford here1');
    return bin.build(function (err) {
        console.log('chrisdanford here2');
        if (err) {
            console.log(chalk.red('✗ ' + err.message));
            return;
        }

        console.log('chrisdanford here3');
        console.log(chalk.green('✓ optipng built successfully'));
    });
});

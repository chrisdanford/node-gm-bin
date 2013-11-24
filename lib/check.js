'use strict';

var bin = require('./gm-bin').bin;
var chalk = require('chalk');

var timer = setTimeout(function(){}, 1000);
var done = function() { clearTimeout(timer); };

var args = ['help'];

bin.check(args, function (works) {
    if (!works) {
        console.log(chalk.red('✗ pre-build test failed.  Install GraphicsMagic yourself and we\'ll use the system version.'));
    } else {
        console.log(chalk.green('✓ pre-build test passed successfully'));
    }

    done();
});

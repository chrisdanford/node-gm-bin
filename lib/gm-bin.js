var path = require('path');

if (process.platform === 'darwin') {
    exports.path = path.join(__dirname, '../vendor/osx', 'gm');
} else if (process.platform === 'linux') {
    exports.path = path.join(__dirname, '../vendor/linux/', 'gm');
} else if (process.platform === 'win32') {

    if (process.arch === 'x64') {
        exports.path = path.join(__dirname, '../vendor/win64', 'gm.exe');
    } else {
        exports.path = path.join(__dirname, '../vendor/win32', 'gm.exe');
    }

} else {
    console.log('Unsupported platform:', process.platform, process.arch);
}

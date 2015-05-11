var appModule = require('application');
var format = require('format');

/*
GLOBAL.L = require('nativeLang')();

<Label text={{L('My Text')}} />
*/

module.exports = function () {
	return function L () {
		args[0] = NSLocalizedString(args[0]);

		return format.vsprintf.apply(this, args );
	};
};

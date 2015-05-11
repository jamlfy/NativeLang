var appModule = require('application');
var format = require('format');

/*
GLOBAL.L = require('nativeLang')();

<Label text={{L('My Text')}} />
*/

module.exports = function () {
	var res = appModule.android.context.getResources();

	return function L () {
		var args = Array.prototype.slice.call(arguments);
		if( res )
			args[0] = res.getString(args[0]);

		return format.vsprintf.apply(this, args );
	};
};

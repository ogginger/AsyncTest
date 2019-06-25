//AsyncTest_Run_UnknownError_RejectsError.js: Testing logic.

define([
	"log",
	"promise",
	"AsyncTest",
	"bIsObjectEqual"
], function(
	log,
	promise,
	AsyncTest,
	bIsObjectEqual
) {
	return {
		"Async": true,
		"Name":"AsyncTest_Run_UnknownError_RejectsError",
		"Input": {
			"Async": true,
			"Name": "FailingAsyncFunction",
			"Input": undefined,
			"Function": function() {
				return promise(function( resolve, reject ) {
					reject({ "Message": "Error" });
				});
			},
			"ExpectedOutput": true,
			"ExceptionTest": false,
			"Debug": false
		},
		"Function": function( Input ) {
			var xResult = {};
			return promise(function( resolve ) {
				AsyncTest( Input ).Run().catch(function( Error ) {
					xResult = Error;
				}).finally(function() {
					resolve( xResult );
				});
			});
		},
		"ExpectedOutput": { "Message": "UnknownError" },
		"Comparator": { "Object": true },
		"Debug": false
	};
});

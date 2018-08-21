//AsyncTestRun_SimplePassingTest_ResolvesTestThatPasses.js: Testing logic.

define([
	"AsyncTest",
	"promise"
], function(
	AsyncTest,
	promise
) {
	return {
		"Async": true,
		"Name":"AsyncTestRun_SimplePassingTest_ResolvesTestThatPasses",
		"Input": {
			"Object": new AsyncTest({
				"Name": "SimplePassingTest",
				"Input": undefined,
				"Function": function() {
					return promise(function( resolve ) {
						resolve( true );
					});
				},
				"ExpectedOutput": true
			})
		},
		"Function": function( Input ) {
			return promise(function( resolve ) {
				Input.Object.Run().then(function( Result ) {
					resolve( Result );
				});
			});
		},
		"ExpectedOutput": true
	};
});

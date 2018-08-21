//AsyncTest.js: Functional Logic.

define([
	"promise",
	"Debug",
	"AsyncSetup",
	"AsyncAssertion"
], function(
	promise,
	Debug,
	AsyncSetup,
	AsyncAssertion
) {
  return function( Input ) {
	return {
		"Name": Input.Name,
		"Run": function() {
			return promise(function( resolve ) {
				//AsyncSetup
				AsyncSetup( Input.Input ).then(function( Setup ) {
					//Action
					Input.Function( Setup ).then(function( Result ) {
						Input.Result = Result;
						Debug( Input );
						//Assertion
						AsyncAssertion( Input ).then(function( TestResult ) {
							resolve( TestResult );
						});
					});
				});	
			});
		}
	};
  };
});

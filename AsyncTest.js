//AsyncTest.js: Functional Logic.

define([
	"log",
	"promise",
	"Debug",
	"AsyncSetup",
	"AsyncAssertion",
	"AsyncAction"
], function(
	log,
	promise,
	Debug,
	AsyncSetup,
	AsyncAssertion,
	AsyncAction
) {
  return function( Input ) {
	return {
		"Name": Input.Name,
		"Run": function() {
			return promise(function( resolve, reject ) {
				//AsyncSetup
				AsyncSetup( Input.Input ).then(function( Setup ) {
					Input.Input = Setup;
					
					//Action
					AsyncAction( Input ).then(function( Result ) {
						Input.Result = Result;
						Debug( Input );
						//Assertion
						AsyncAssertion( Input ).then(function( TestResult ) {
							resolve( TestResult );
						});
					}).catch(function( Error ) {	
						reject( Error );
					});
				});	
			});
		}
	};
  };
});

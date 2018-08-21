//build.js: Configuration file for optimizing the AsyncTest function. 
/*
*/ 
({
    paths: {
	"underscore": "lib/underscore.min",
	"log": "lib/log.min",
	"bIsObjectEqual": "lib/is_object_equal",
	"rsvp": "lib/rsvp.min",
	"promise": "lib/promise.min",
	"AsyncAssertion": "lib/async_assertion.min",
	"AsyncSetup": "lib/async_setup.min",
	"Debug": "lib/debug.min"
    },
    exclude: [ "underscore", "log", "rsvp", "promise" ],
    name: "AsyncTest",
    out: "async_test.min.js"
})

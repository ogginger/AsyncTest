//test_AsyncTest.js: Testing Logic.

define([
  "promise",
  "TestSuite",
  "log",
  "tests/AsyncTestRun_SimplePassingTest_ResolvesTestThatPasses",
  "tests/AsyncTest_Run_UnknownError_RejectsError"
], function(
  promise,
  TestSuite,
  log,
  AsyncTestRun_SimplePassingTest_ResolvesTestThatPasses,
  AsyncTest_Run_UnknownError_RejectsError
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_AsyncTest initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "AsyncTest" );
	//xTestSuite.add( AsyncTestRun_SimplePassingTest_ResolvesTestThatPasses );     
	xTestSuite.add( AsyncTest_Run_UnknownError_RejectsError );

      xTestSuite.test();
    }
  });
});

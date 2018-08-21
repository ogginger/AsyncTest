//test_AsyncTest.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "tests/AsyncTestRun_SimplePassingTest_ResolvesTestThatPasses"
], function(
  TestSuite,
  log,
  AsyncTestRun_SimplePassingTest_ResolvesTestThatPasses
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_AsyncTest initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "AsyncTest" );
	xTestSuite.add( AsyncTestRun_SimplePassingTest_ResolvesTestThatPasses );      
      xTestSuite.test();
    }
  });
});

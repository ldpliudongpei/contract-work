var Counter = artifacts.require("Counter");

contract("Counter", function() {
  var counterInstance;

  it("set counter", function() {
    return Counter.deployed().then(function(instance) {
      counterInstance = instance;
      return counterInstance.count();
    }).then(function() {
      return counterInstance.set(5);
    }).then(function() {
      return counterInstance.counter();
    }).then(function(count) {
      assert.equal(count, 6);
    });
  })
})
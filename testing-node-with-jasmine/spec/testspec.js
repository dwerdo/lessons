var myMath = require("../myMath");
describe("a very basic test", function() {
  var foo;

  beforeEach(function() {
    foo = myMath.add(2,2);
  });

  it("should be able to add", function() {
    expect(foo).toBe(4);
  });
});

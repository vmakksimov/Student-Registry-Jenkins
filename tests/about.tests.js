const assert = require('assert');
const fetch = require('node-fetch');

suite('About page', function() {
  test('Page title', async function(done) {
    let res = await fetch("http://localhost:8888/about");
    let body = await res.text();
    assert.ok(body.includes("<title>About</title>"));
    assert.ok(body.includes("<h1>Hello DevOps People</h1>"));
    done();
  }).timeout(10000);
});

const assert = require('assert');
const fetch = require('node-fetch');
const delay = require('delay');

suite('About page', function() {
  test('Page title', async function() {
    await delay(1000)
    let res = await fetch("http://localhost:8888/about");
    let body = await res.text();
    assert.ok(body.includes("<title>About</title>"));
    assert.ok(body.includes("<h1>Hello DevOps People</h1>"));
    
  });
});

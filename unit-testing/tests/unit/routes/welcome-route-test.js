import { moduleFor, test } from 'ember-qunit';

moduleFor('route:welcome-route', 'Unit | Route | welcome route', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test("check if someBoolean value is modifying", function(assert) {
  let route = this.subject();
  route.send('edit');
  assert.equal(route.get("someBoolean"), true);
});

import { moduleFor, test } from 'ember-qunit';

moduleFor('route:posts/post/show', 'Unit | Route | posts/post/show', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});

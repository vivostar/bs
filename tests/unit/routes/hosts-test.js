import { module, test } from 'qunit';
import { setupTest } from 'bs/tests/helpers';

module('Unit | Route | hosts', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:hosts');
    assert.ok(route);
  });
});

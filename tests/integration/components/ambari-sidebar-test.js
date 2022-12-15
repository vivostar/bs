import { module, test } from 'qunit';
import { setupRenderingTest } from 'bs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ambari-sidebar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AmbariSidebar />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <AmbariSidebar>
        template block text
      </AmbariSidebar>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('m-update-text-fields', 'Integration | Component | m update text fields', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{m-update-text-fields}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#m-update-text-fields}}
      template block text
    {{/m-update-text-fields}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

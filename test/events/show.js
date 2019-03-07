import QUnit from 'qunit';
import $ from 'jquery';

$(() => {
  const $input = window.createInput();

  $input.on('show.datepicker', (e) => {
    QUnit.test('events.show', (assert) => {
      assert.strictEqual(e.type, 'show');
      assert.strictEqual(e.namespace, 'datepicker');
    });
  }).datepicker({
    show(e) {
      QUnit.test('options.show', (assert) => {
        assert.strictEqual(e.type, 'show');
        assert.strictEqual(e.namespace, 'datepicker');
      });
    },
  }).datepicker('show').datepicker('hide');
});

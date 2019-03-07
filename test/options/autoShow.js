import QUnit from 'qunit';

QUnit.test('options.autoShow', (assert) => {
  const $input = window.createInput();
  const datepicker = $input.datepicker({
    autoShow: true,
  })
    .data('datepicker');

  assert.ok(datepicker.$picker.is(':visible'));
  $input.datepicker('hide');
});

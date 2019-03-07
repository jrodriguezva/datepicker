QUnit.test('method.show', function (assert) {
  const $input = window.createInput();
  const datepicker = $input.datepicker().data('datepicker');

  assert.ok(!datepicker.shown);
  $input.datepicker('show');
  assert.ok(datepicker.shown);
  assert.ok(datepicker.$picker.is(':visible'));
  $input.datepicker('hide');
});

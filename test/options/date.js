import QUnit from 'qunit';

QUnit.test('options.date: Date', (assert) => {
  const $input = window.createInput();
  const initialDate = new Date(2014, 1, 14);

  $input.datepicker({
    date: initialDate,
  });

  assert.strictEqual($input.datepicker('getDate')
    .getTime(), initialDate.getTime());
});

QUnit.test('options.date: String', (assert) => {
  const $input = window.createInput();
  const initialDate = '02/14/2014';

  $input.datepicker({
    date: initialDate,
  });

  assert.strictEqual($input.datepicker('getDate', true), initialDate);
});

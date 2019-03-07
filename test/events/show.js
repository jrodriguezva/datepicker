$(function () {
  const $input = window.createInput();

  $input.on('show.datepicker', function (e) {
    QUnit.test('events.show', function (assert) {
      assert.strictEqual(e.type, 'show');
      assert.strictEqual(e.namespace, 'datepicker');
    });
  })
    .datepicker({
      show: function (e) {
        QUnit.test('options.show', function (assert) {
          assert.strictEqual(e.type, 'show');
          assert.strictEqual(e.namespace, 'datepicker');
        });
      },
    })
    .datepicker('show')
    .datepicker('hide');
});

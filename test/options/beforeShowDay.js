QUnit.test('options.filter', function (assert) {
  const $input = window.createInput();
  const datepicker = $input.datepicker({
    beforeShowDay: function (date) {
      // Disable all Sundays
      return date.getDay() !== 0;
    },
  })
    .data('datepicker');

  $input.datepicker('show');

  datepicker.$days.children()
    .each(function (i) {
      if (i % 7 === 0) {
        assert.ok($(this)
          .hasClass(datepicker.options.selectedClass));
      }
    });

  $input.datepicker('hide');
});

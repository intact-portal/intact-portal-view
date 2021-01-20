export class FoundationUtils {
  public static adjustWidth(): void {
    let buttons = $('button[data-toggle].adjust-width');
    buttons.each((i, button) => {
      let $button = $(button);
      let pane = $('#' + $button.attr('data-toggle'));

      $button.width(pane.outerWidth(true) - ($button.outerWidth() -$button.width()));
    })
  }
}

export class FoundationUtils {
  public static adjustWidth(): void {
    let buttons = $('button[data-toggle].adjust-width');
    buttons.each((i, button) => {
      let $button = $(button);
      let pane = $('#' + $button.attr('data-toggle'));

      if (pane.outerWidth() > $button.outerWidth()) {
        $button.width(pane.outerWidth(true) - ($button.outerWidth() - $button.width()));
      } else {
        pane.width($button.outerWidth() - 1);
      }
    })
  }
}

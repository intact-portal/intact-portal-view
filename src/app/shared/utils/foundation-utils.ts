export class FoundationUtils {
  public static adjustWidth(): void {
    const buttons = $('button[data-toggle].adjust-width');
    buttons.each((i, button) => {
      const $button = $(button);
      const pane = $('#' + $button.attr('data-toggle'));

      if (pane.outerWidth() > $button.outerWidth()) {
        $button.width(pane.outerWidth(true) - ($button.outerWidth() - $button.width()));
      } else {
        pane.width($button.outerWidth(true));
      }
    })
  }
}

$(function () {
  var element = document.querySelectorAll('.slimScroll');
  var customScroll = new slimScroll(element[0], {
    wrapperClass: 'scroll-wrapper unselectable mac',
    scrollBarContainerClass: 'scrollBarContainer',
    scrollBarContainerSpecialClass: 'animate',
    scrollBarClass: 'scroll',
    keepFocus: true,
  });
  window.onresize = customScroll.resetValues; // pure javascript example.
});

function _dataApiClickHandler(event) {
  var selector = Util.getSelectorFromElement(this);

  if (!selector) {
    return;
  }

  var target = $(selector)[0];

  if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
    return;
  }

  var config = $.extend({}, $(target).data(), $(this).data());
  var slideIndex = this.getAttribute('data-slide-to');

  if (slideIndex) {
    config.interval = false;
  }

  Carousel._jQueryInterface.call($(target), config);

  if (slideIndex) {
    $(target).data(DATA_KEY).to(slideIndex);
  }

  event.preventDefault();
  }
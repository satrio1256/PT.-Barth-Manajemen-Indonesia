var frame;
var slidee;
var wrap;

function reload(arg) {
  $("#forcecentered").sly(false);
  $("#basic").sly(false);
  if (arg === 768) {
    frame = $('#basic');
    slidee = frame.children('ul').eq(0);
    wrap = frame.parent();

    // Call Sly on frame
    frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: wrap.find('.scrollbar'),
      scrollBy: 1,
      pagesBar: wrap.find('.pages'),
      activatePageOn: 'click',
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Buttons
      forward: wrap.find('.forward'),
      backward: wrap.find('.backward'),
      prev: wrap.find('.prev'),
      next: wrap.find('.next'),
      prevPage: wrap.find('.prevPage'),
      nextPage: wrap.find('.nextPage')
    });
  } else if (arg === 767){
    frame = $('#forcecentered');
    wrap = frame.parent();

    // Call Sly on frame
    frame.sly({
      horizontal: 1,
      itemNav: 'forceCentered',
      smart: 1,
      activateMiddle: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: wrap.find('.scrollbar'),
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Buttons
      prev: wrap.find('.prev'),
      next: wrap.find('.next')
    });
  }
}

$(function() {
  if ($(window).width() < 768) {
    $("#basic").attr("id", "forcecentered");
    reload(767);
  } else {
    $("#forcecentered").attr("id", "basic");
    reload(768);
  }

  $(window).resize(function() {
    if ($(window).width() < 768) {
      $("#basic").attr("id", "forcecentered");
      reload(767);
    } else {
      $("#forcecentered").attr("id", "basic");
      reload(768);
    }
  });
});
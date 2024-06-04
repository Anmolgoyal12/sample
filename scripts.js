$(document).ready(function() {
  let zoomLens = $('#zoomLens');
  let zoomedContent = $('#zoomedContent');

  function zoomContent(e, element) {
    let offset = element.offset();
    let elementWidth = element.outerWidth();
    let elementHeight = element.outerHeight();
    let zoomLensWidth = zoomLens.width();
    let zoomLensHeight = zoomLens.height();
    let mouseX = e.pageX - offset.left;
    let mouseY = e.pageY - offset.top;

    if (mouseX > 0 && mouseY > 0 && mouseX < elementWidth && mouseY < elementHeight) {
      zoomLens.show();
      zoomedContent.html(element.clone().css({
        width: elementWidth + 'px',
        height: elementHeight + 'px',
        transform: 'scale(2)',
        transformOrigin: `${mouseX}px ${mouseY}px`
      }));

      zoomLens.css({
        top: e.pageY - zoomLensHeight / 2 + 'px',
        left: e.pageX + 20 + 'px'
      });

      zoomedContent.css({
        top: -mouseY + zoomLensHeight / 2 + 'px',
        left: -mouseX + zoomLensWidth / 2 + 'px'
      });
    } else {
      zoomLens.hide();
    }
  }

  $('.zoomable').on('mousemove', function(e) {
    zoomContent(e, $(this));
  });

  $('.zoomable').on('mouseleave', function() {
    zoomLens.hide();
  });
});
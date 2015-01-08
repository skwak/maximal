$(function() {
  sketch();
  // imageResize();
  drag();
  dropImage();
});

function sketch() {
  $("#collage-spot").sketch();
}

function drag() {
  $(".image-bucket").draggable({
    containment: $("#collage-wrapper"),
    tolerance: 'fit',
    cursor: 'pointer',
    position: 'relative',
    revert:"valid",
    helper:"clone"
  });
}

function dropImage() {
  $(".image-bucket").droppable({
    drop: function (e, ui) {
      $(ui.draggable).clone().appendTo($(this));
    }
  });
}
  



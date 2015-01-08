$(function() {
  sketch();
  // imageResize();
  drag();
});

function sketch() {
  $("#collage-spot").sketch();
}

function drag() {
  $(".image-bucket").draggable({
    containment: $("#collage-wrapper"),
    tolerance: 'fit',
    cursor: 'pointer',
    position: 'relative' 
  });
}
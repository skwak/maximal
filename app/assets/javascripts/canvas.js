$(function() {
  sketch();
  drag();
});

function sketch() {
  $("#collage-spot").sketch();
};

function drag() {
  $(".image-bucket").draggable({
    containment: $("#collage-spot"),
    tolerance: 'fit',
    cursor: 'pointer',
    position: 'relative' 
  });
};
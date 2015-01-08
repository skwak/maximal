$(function() {
  sketch();
  imageResize();
});

function sketch() {
  $("#collage-spot").sketch();
}

function resize() {
  $(".image-bucket").resizable({
    containment: $(".image-bucket")
  });  
  drag();
}

function drag() {
  $(".image-bucket").draggable({
    containment: $("#collage-spot"),
    tolerance: 'fit',
    cursor: 'pointer',
    position: 'relative' 
  });
}
$(function() {
  sketch();
  // imageResize();
  drag();
});

function sketch() {
  $("#collage-spot").sketch();
}
// 
// function imageResize() {
//   $(".image-bucket").resizable({
//     containment: $(".image-bucket")
//   });  
//   drag();
// }

function drag() {
  $(".image-bucket").draggable({
    containment: $(".everything-collage"),
    tolerance: 'fit',
    cursor: 'pointer',
    position: 'relative' 
  });
}
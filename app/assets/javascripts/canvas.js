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
  $(".selected-image").draggable({
    // containment: $("#collage-spot"),
    // tolerance: 'fit',
    // cursor: 'pointer',
    // position: 'relative',
    rever: "valid",
    helper: "clone"
    // stop: handleDragStop
  });
}

// function handleDragStop( event, ui ) {
//   var offsetXPos = parseInt( ui.offset.left );
//   var offsetYPos = parseInt( ui.offset.top );
//   alert( "Drag stopped!\n\nOffset: (" + offsetXPos + ", " + offsetYPos + ")\n");
// }
// 

function dropImage() {
  $("#collage-spot").droppable({
    // accept: $(".selected-image"),
    drop: function (e, ui){  
      $(ui.draggable).clone().appendTo($(this));
    } 
  });
}
  
  
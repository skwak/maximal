$(function() {
  $("#grid").click(function() {
    console.log($(this));
    setBackground();
  });
});

function setBackground() {
  var imageLink = $("#grid").attr("src");
  $("#collage-spot").css("background", "url('" + imageLink + "')");
}


  // sketch();
  // imageResize();
  // drag();
  // dropImage();


// function sketch() {
//   $("#collage-spot").sketch();
// }

// function drag() {
//   $(".selected-image").draggable({
    // containment: $(".container"),
//     revert: "invalid",
//     helper: "clone",
//   });
// }

// function dropImage() {
//   $("#collage-spot").droppable({
//     accept: $("#selections .selected-image"),
//     drop: function (event, ui) {  
//       $(this).append($(ui.helper).clone().draggable({
//         containment: "parent"
//       }));
//     }
//   });
// }

// function handleDragStop( event, ui ) {
//   var offsetXPos = parseInt( ui.offset.left );
//   var offsetYPos = parseInt( ui.offset.top );
  // alert( "Drag stopped!\n\nOffset: (" + offsetXPos + ", " + offsetYPos + ")\n");
// }


  
  
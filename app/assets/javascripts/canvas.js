$(function() {
  sketch();
  tweetDrag();
  $("#grid").click(function() {
    setBackground();
  });
});

function sketch() {
  $("#collage-spot").sketch();
}

function setBackground() {
  var imageLink = $("#grid").attr("src");
  $("#collage-spot").css("background", "url('" + imageLink + "')");
}
    
function dropTweet() {
  $("#collage-spot").droppable( {
    drop: function (event, ui) {
      $(this).append($(ui.draggable).clone());
    }
  });
}

function tweetDrag() {
  $(".tweet").draggable({
    revert: "invalid",
    helper: "clone"
  });
}   

  // imageResize();
  // drag();
  // dropImage();

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


  
  
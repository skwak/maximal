$(function() {
  sketch();
  tweetDrag();
  dropTweet();
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

function tweetDrag() {
  $(".tweet").draggable({
    helper: "clone"
  });
}  

 
// .resizable(),

function dropTweet () {
  $(".container").droppable({
    accept: $(".tweet"),
    drop: function(event,ui){
    var context = $(this)[0].getContext("2d");
    context.fillText($(ui.draggable).clone().text(),
    ui.position.left - event.target.offsetLeft, ui.position.top - event.target.offsetTop
      );
  }
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


  
  
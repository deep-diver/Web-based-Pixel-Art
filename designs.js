// when the page is fully loaded and ready
$(function() {
  //when a user hit a button to make a grid
  $("#sizePicker").submit(function(event) {
      //this line of code will prevent default browser's behaviour to submit
      event.preventDefault();

      //make grid
      makeGrid();
  });
});

/*
  when one of <th> tags are clicked, whenMouseClickOnGrid() function is called.
  This function get the color value in Hex from pallette control (#colorPicker),
  and set the color as the background-color of the <th> tag.
*/
function whenMouseClickOnGrid() {
  const color = $("#colorPicker").val();
  $(this).css("background-color", color);
}

/*
  this is where the grid gets drawn.
  when this function is called, it will append the below structure to the <table> tag.

  <tr>                <- 1st row
    <th></th>         <- 1st column of the 1st row
    ..
  </tr>
  <tr>                <- 2nd row
    <th></th>
    ..
  </tr>
  ..
*/
function makeGrid() {
  //before drawing, clear the area for the new grid.
  const table = $("#pixel_canvas");
  table.empty();

  const width = $("#input_width").val();
  const height = $("#input_height").val();

  for (let row = 0; row < height; row++) {
      const newTr = $("<tr></tr>");

      for (let col = 0; col < width; col++) {
          const newCol = $("<th></th>");
          newCol.css("width", "20px");
          newCol.css("height", "20px");
          newCol.css("border", "1px solid black");
          newCol.on("click", whenMouseClickOnGrid);
          newTr.append(newCol);
      }

      table.append(newTr);
  }
}

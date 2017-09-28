// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(function() {
    $("input[type=submit]").on("click", function(event) {
        makeGrid();
        event.preventDefault();
    });
});

function clearGrid() {
    const table = $("#pixel_canvas");
    table.empty();
}

function whenMouseOverOnGrid() {
    $(this).text("1");
}

function makeGrid() {
    clearGrid();

    const width = $("#input_width").val();
    const height = $("#input_height").val();
    const table = $("#pixel_canvas");

    for (let row = 0; row < height; row++) {
        const newTr = $("<tr></tr>");

        for (let col = 0; col < width; col++) {
            const newCol = $("<th></th>");
            newCol.on("click", whenMouseOverOnGrid);
            newTr.append(newCol);
        }

        table.append(newTr);
    }
}
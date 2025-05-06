// Using jQuery, write code to:

    // When a list item is clicked, change its background color to yellow
    // When another list item is clicked, reset the previous item's color and highlight the new one
    // Add a "Reset" button that clears all highlighting

    $("#fruit-list li").click(function () {
        $("#fruit-list li").removeClass("highlighted");
        $(this).addClass("highlighted");
    });

    $("#reset-btn").click(function(){
        $("#fruit-list li").removeClass("highlighted");
    })
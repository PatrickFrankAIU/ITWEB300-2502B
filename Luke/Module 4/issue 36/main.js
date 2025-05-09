
// Create an index.html file with a simple accordion structure (headers and content panels)
// Using jQuery, write code to:
//     Show only one accordion panel at a time
//     When a header is clicked, hide any open panel and show the clicked panel's content
//     Add a visual indicator to show which panel is active

// Initially, all accordion panels should be closed
// When a header is clicked, its content panel should slide down
// If another header is clicked, the currently open panel should close and the new one should open
// The active header should have a visual indicator (different background color and bold text)



$(document).ready(function () {

    $(".accordion-content").hide();

    $(".accordion-header").click(function () {

        let active = $(this).hasClass("active");

        $(".accordion-header").removeClass("active");
        $(".accordion-content").slideUp();

        if (!active) {
            $(this).addClass("active");
            $(this).next(".accordion-content").slideDown();
        }

    });

});
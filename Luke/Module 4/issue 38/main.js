
// When a thumbnail is clicked, display the corresponding larger image in the main display area
// Add a "previous" and "next" button to navigate through the images
// Add a simple fade transition effect when changing images
// Highlight the currently selected thumbnail

// Initially, the first image is displayed in the main image area
// When a thumbnail is clicked, the corresponding image is displayed in the main image area with a fade effect
// The selected thumbnail is highlighted with a blue border
// The previous and next buttons allow navigation through the gallery
// Navigation wraps around (next on the last image goes to the first, previous on the first goes to the last)

$(document).ready(function () {

    // function that shows image by index
    function showImage(index) {

        // removes active class from main image
        $(".main-image img").removeClass("active").hide();

        //uses the extracted index from the clicked thumbnail and uses it to display the corresponding larger image
        $(".main-image img[data-index='" + index + "']").addClass("active").fadeIn();

        //makes current selected thumbnail active
        $(".thumbnail").removeClass("active");
        $(".thumbnails img[data-index='" + index + "']").addClass("active");
    };

    //shows the main image when thumbnail is clicked
    $(".thumbnails img").click(function () {
        const index = $(this).data("index");
        showImage(index);

    });

    $("#prev-btn").click(function () {

        // selects the active image
        let currImg = $(".main-image img.active");
        let currIndex = currImg.data("index");
        let prevIndex = currIndex - 1;

        if (prevIndex < 0) {
            prevIndex = $(".main-image img").length - 1;
        }

        showImage(prevIndex);

    });

    $("#next-btn").click(function () {

        // selects the active image
        let currImg = $(".main-image img.active");
        let currIndex = currImg.data("index");
        let nextIndex = currIndex + 1;

        if (nextIndex >= $(".main-image img").length) {
            nextIndex = 0
        }

        showImage(nextIndex);

    });

});

// Update a color preview box as the sliders are adjusted
// Display the current RGB values as text
// Add a button to copy the current RGB value to clipboard
// Add a "random color" button that sets random RGB values


// Moving any slider updates the color preview in real-time
// The RGB value text updates as sliders are adjusted
// Clicking "Random Color" sets all sliders to random values
// Clicking "Copy RGB Value" copies the current RGB value to the clipboard
// The color preview box background color reflects the current RGB values

$(document).ready(function () {

    function updateColor() {
        let r = parseInt($("#red-slider").val());
        let g = parseInt($("#green-slider").val());
        let b = parseInt($("#blue-slider").val());
        $("#color-preview").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
        $("#rgb-value").text("rgb(" + r + "," + g + "," + b + ")");
    }
    $("#red-slider, #green-slider, #blue-slider").on("input", updateColor);

    $("#random-color-btn").click(function () {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        $("#red-slider").val(r);
        $("#green-slider").val(g);
        $("#blue-slider").val(b);
        updateColor();
    });

    $("#copy-rgb-btn").click(function () {
        let rgb = $("#rgb-value").text();
        navigator.clipboard.writeText(rgb)


    });



});

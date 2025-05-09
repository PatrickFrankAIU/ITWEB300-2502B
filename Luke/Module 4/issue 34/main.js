$(document).ready(function () {

    $("#toggle-panel1").click(function () {
        $("#panel1").fadeToggle();
    });

    $("#toggle-panel2").click(function () {
        $("#panel2").slideToggle();
    });

    $("#toggle-panel3").click(function () {
        $("#panel3").toggle();
    });

    $("#show-all").click(function () {
        $("#panel1").fadeIn();
        $("#panel2").slideDown();
        $("#panel3").show();
    });

    $("#hide-all").click(function () {
        $("#panel1").fadeOut();
        $("#panel2").slideUp();
        $("#panel3").hide();
    });
});
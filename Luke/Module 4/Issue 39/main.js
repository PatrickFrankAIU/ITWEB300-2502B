// In this exercise, you will learn how to load data asynchronously using jQuery's AJAX methods. You'll create a simple application that loads and displays weather data for different cities.

// Important Note: This program won't work with a normal F5 debug in VS Code. When finished, display the page using the Live Server extension. This is because of an important browser security restriction: It can't load the local data file (weather.data.js). If you were to just give the program access to the file using a script tag it would be able to access it, but the point here is to use the ajax function.
// Instructions

// Create an index.html file with a dropdown menu of city options
// Using jQuery, write code to:
// Load weather data when a city is selected
// Display the data in a formatted card
// Add a loading indicator while data is being fetched
// Handle any errors gracefully

// populates a weather card with data that is populated from the ajax request based on the city that is selected from the dropdown
$(document).ready(function () {

    $("#city-select").change(function () {
        let selectedCity = $("#city-select").val(); //obtains the city that is selected from the dropdown


        $("#loading").show(); //shows the inital loading message before the ajax request

        $("#error-message").hide(); //hides the error message before the ajax request

        $("#weather-card").hide();//hides the weather card before ajax


        setTimeout(function() {
        //ajax request that retrieves the JSON data and populates it in the weather card
        $.ajax({
            url: "sample weather-data.json",
            type: "GET",
            dataType: "json",
            success: function (data) {
                let weatherData = data[selectedCity];

                $("#city-name").text(weatherData.city);
                $("#weather-icon").text(weatherData.icon);
                $("#temperature").text(weatherData.temperature);
                $("#condition").text(weatherData.condition);
                $("#humidity").text(weatherData.humidity);
                $("#wind-speed").text(weatherData.windSpeed);

                $("#loading").hide();
                $("#weather-card").show();
                
                
            },
            error: function () { //hides loading and displays error message
                $("#loading").hide();
                $("#error-message").show();
            },
        });

        }, 2000); //simulates a 2 second delay to call the server
    


});










});
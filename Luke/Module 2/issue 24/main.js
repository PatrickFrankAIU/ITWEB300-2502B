let str = "Today is sunny, tomorrow is rainy, and the day after will be cloudy.";

let result = str.replace(/\bsunny\b|\brainy\b|\bcloudy\b/g, function(matched) {
    if (matched === "sunny") return "bright";
    if (matched === "rainy") return "wet";
    if (matched === "cloudy") return "overcast";

});

console.log(result);


let weather = prompt("Enter your area's weather?  Is it \na. Hot \nb. Cold \nc. Windy \nd. Foggy \ne. Stormy \nf. Sunny \ng. Cloudy \nh. Rainy \ni. Snowy?");

if(weather == "Hot" || weather == "hot"){
    document.write("<div class='box'>" + 
    "<div class='img-div'>" + 
    "<img src='images/hot.jpg' class='img'>" + 
    "</div>" + "<p class='text'>" +"Its " + "<b>" + weather + "</b>" + " today. Stay Hydrated😊" + "</p>" +
    "</div>")
} else if (weather == "Cold" || weather == "cold") {
    document.write("<div class='box'>" + 
    "<div class='img-div'>" + 
    "<img src='images/cold.jpg' class='img'>" + 
    "</div>" + "<p class='text'>" +" Its " + "<b>" + weather + "</b>" + " today. Enjoy the weather😊" + "</p>" +
    "</div>")
} else if (weather == "Windy" || weather == "windy") {
    document.write("<div class='box'>" + 
    "<div class='img-div'>" + 
    "<img src='images/windy.jpg' class='img'>" + 
    "</div>" + "<p class='text'>" + "Its " + "<b>" + weather + "</b>" + " today. Close your windows😊" + "</p>"+"</div>")
} else if (weather == "Foggy" || weather == "foggy") {
    document.write("<div class='box'>" + 
    "<div class='img-div'>" + 
    "<img src='images/foggy.jpg' class='img'>" + 
    "</div>" + "<p class='text'>" + "Its " + "<b>" + weather + "</b>" + " today. Stay Home, Stay safe😊" + "</p>"+"</div>")
} else if (weather == "Stormy" || weather == "stormy") {
    document.write("<div class='box'>" + 
    "<div class='img-div'>" + 
    "<img src='images/stormy.jpg' class='img'>" + 
    "</div>" + "<p class='text'>" + "Its " + "<b>" + weather + "</b>" +" today. Stay Home, Stay safe😊" + "</p>"+"</div>")
} else if (weather == "Sunny" || weather == "sunny") {
    document.write("<div class='box'>" + 
    "<div class='img-div'>" + 
    "<img src='images/sunny.jpg' class='img'>" + 
    "</div>" + "<p class='text'>" + "Its " + "<b>" + weather + "</b>" + " today🌞. Enjoy the day😊" + "</p>" + "</div>")
} else if (weather == "Cloudy" || weather == "cloudy") {
    document.write("<div class='box'>" + 
    "<div class='img-div'>" + 
    "<img src='images/cloudy.jpg' class='img'>" + 
    "</div>" + "<p class='text'>" + "Its " + "<b>" + weather + "</b>" + " today. Stay safe and have a nice day😊"+ "</p>" + "</div>")
} else if (weather == "Rainy" || weather == "rainy") {
    document.write("<div class='box'>" + 
    "<div class='img-div'>" + 
    "<img src='images/rainy.jpg' class='img'>" + 
    "</div>" + "<p class='text'>" + "Its " + "<b>" + weather + "</b>" + " today🌧️. Stay home and stay safe😊" + "</p>" + "</div>")
} else if (weather == "Snowy" || weather == "snowy") {
    document.write("<div class='box'>" + 
    "<div class='img-div'>" + 
    "<img src='images/snowy.jpg' class='img'>" + 
    "</div>" + "<p class='text'>" + "Its " + "<b>" + weather + "</b>" + " today. Enjoy the weather😊" + "</p>" + "</div>")
} else {
    document.write("<div class='box'>"+ "<p class='text'>" + "<b>" + " 😆Haha, Are you Kidding?" + "</b>" + " Please enter a Valid weather" + "</p>" + "</div>")
}
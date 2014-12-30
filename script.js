window.onload = function() {
  var buttons = document.getElementsByTagName("button");

  var firstButton = buttons[0];
  var secondButton = buttons[1];

  firstButton.onclick = function() {
  
    var input = prompt("What Are You Hungry For?");

    if (input !== "broccoli") {
      window.location = "http://www.yelp.com/search?find_desc=" + input
    } else {
      window.location = "http://img1.wikia.nocookie.net/__cb20140924021657/walkingdead/images/5/51/Jimmy-fallon-ew.gif"
    }

  };


  secondButton.onclick = function() {
    prompt("What time do you want to eat?")
  };
}



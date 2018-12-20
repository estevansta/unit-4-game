// Initial Variables //

    var wins = 0;
    var losses = 0;
    var randomNumber = [];
    var yourTotalScore = [];

// Random number has to be generated //
    $(document).ready(function() {
    var randomNumber = Math.floor(Math.random() * 120) + 19;
    console.log(randomNumber);
    document.querySelector("#random-number").innerHTML = randomNumber;
    });
          
// Wins and Losses have to be recorded // possible code for when results can be displayed (HOLD)

function numberGuessed(result) {

    if (result === randomNumber) {
        wins++;
        $("#wins").html("<h3>" + wins + "</h3>");
      }

      else {
        losses++;
        $("#losses").html("<h3>" + losses + "</h3>");
      }
    
}
// If won/loss random number has to restart //

// Gems need to be assign values and be click-able buttons //

// Gem values must appear on Your Total Score //

// Gem values must be reassigned after every round //

// connect to HTML //


        // 
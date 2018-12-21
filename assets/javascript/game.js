// Initial Variables //

    var wins = 0;
    var losses = 0;
    var randomNumber = [];
    var yourTotalScore = [];


    var images = ["assets/images/gem_1.jpg", "assets/images/gem_2.jpg", "assets/images/gem_3.jpg", "assets/images/gem_4.jpg"]



// Random number has to be generated // DONE****
    $(document).ready(function() {
    var randomNumber = Math.floor(Math.random() * 120) + 19;
    console.log(randomNumber);
    document.querySelector("#random-number").innerHTML = randomNumber;
    });
          
    //Crystal values need to be assigned //

    for(var i = 0; i < 4; i++) {
        
        var random = Math.floor(Math.random() * 12);
        console.log(random);
    }
        var container = $("<div>");
            container.attr({"class": "crystals",
            "data-random": random
            }); 


        container.css({
            "background-image":"url('" + (images[i]) + "')",
            "background-size": "cover"

        });

        $(".container").append(container);

            
                
    
    // Crystal must appear on Your Total Score //

    // $("#crystal-1").on("click", function() {
    //     yourTotalScore++;
    //     $("crystal-1").text(yourTotalScore);
    //     yourTotalScore(0);
    //   });



    // Gem values must be reassigned after every round //

// If won/loss random number has to restart //

// Gems/crysal need to be assign values (1-12) and be click-able buttons //
// $("#gem-1").on("click", function() {
//     yourTotalScore++;
//     $("#your-total-score").html("<h1 id=", yourTotalScore ,"></h1>");
//     numberGuessed(0);
//   });

// Wins and Losses have to be recorded // possible code for when results can be displayed (HOLD)

// function numberGuessed(result) {

//     if (result === randomNumber) {
//         wins++;
//         $("#wins").html("<h3>" + wins + "</h3>");
//       }

//       else {
//         losses++;
//         $("#losses").html("<h3>" + losses + "</h3>");
    

// connect to HTML //
            
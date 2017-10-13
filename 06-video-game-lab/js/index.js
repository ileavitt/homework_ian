//Setup variables
var total = 0;

//Define functions
function startGame() {
    //Set your health to the variable in line2
    var total = 0;
    $('#your-health').html(total);

    //Set the actionImage to the main banner
    $('#actionImage').attr('src', './images/excitebike-start.gif');
    $('#end').html("");
}

//Add Click Events
$('#start').on('click', startGame);

$('#jump').on('click', function () {
    $('#end').html("");
    $('#actionImage').attr('src', './images/excitebike-jump.gif');

    if (total == 50) {
        $('#end').html("You win!");
    } else if (total >= 0 && total < 50) {
        $('#your-health').html(total += 5);
    } else {
        $('#end').html("Game Over - You LOSE!");
    }
});

$('#crash').on('click', function () {
    $('#end').html("");
    $('#actionImage').attr('src', './images/excitebike-crash.gif');

    if(total <= 0) {
        $('#end').html("Game Over - You LOSE!");
        $('#your-health').html(0);
    } else {
        $('#your-health').html(total -=5);
    }
    
});

$('#reset').on('click', startGame);





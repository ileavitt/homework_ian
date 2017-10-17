
var value;

// Get value
$('#amount').blur(function () {
    value = parseInt($(this).val());

    return value;
});

// Declare conversion function
function doTheConversion() {
    value = Math.ceil((value - 32) / 1.8);

    if (isNaN(value)) {
        value = 'Please enter a number without $';
        $('#convertedAmount').html(value);
    } else {
        $('#convertedAmount').html(value + '&deg; C');
    }

    if (value <= 16) {
        $('i').removeClass().addClass('fa fa-thermometer-quarter blue');
    } else if (value >= 17 && value <= 24) {
        $('i').removeClass().addClass('fa fa-thermometer-half red');
    } else if (value >= 25 && value <= 30) {
        $('i').removeClass().addClass('fa fa-thermometer-three-quarters dk-red');
    } else if (value >= 31) {
        $('i').removeClass().addClass('fa fa-thermometer-full dk-red');
    } else {
        $('i').removeClass().addClass('fa fa-thermometer-quarter blue');
    }
}

// Invoke function on click method passed in as parameter
$('#convert').on('click', doTheConversion);

// Reset everything
$('#amount').focus(function () {
    $(this).val('');
    $('#convertedAmount').html('Convert Fahrenheit to Celsius');
    $('i').removeClass().addClass('fa fa-thermometer-empty');
});

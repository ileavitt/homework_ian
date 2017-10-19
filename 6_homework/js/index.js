
var value;

// Get value
$('#amount').blur(function () {
    value = parseInt($(this).val());

    return value;
});

// Declare conversion function
function doTheConversion() {
    convertedValue = Math.ceil((value - 32) / 1.8);

    if (isNaN(convertedValue)) {
        convertedValue = 'Please enter a number without $';
        $('#convertedAmount').html(convertedValue);
    } else {
        $('#convertedAmount').html(convertedValue + '&deg; C');
    }

    if (convertedValue <= 16) {
        $('i').removeClass().addClass('fa fa-thermometer-quarter blue');
    } else if (convertedValue <= 24) {
        $('i').removeClass().addClass('fa fa-thermometer-half red');
    } else if (convertedValue <= 30) {
        $('i').removeClass().addClass('fa fa-thermometer-three-quarters dk-red');
    } else if (convertedValue >= 31) {
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

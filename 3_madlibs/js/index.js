var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

var save = [],
    generatedString = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];

$('#create').on('click', function () {
    $('#xForY').html(generatedString);
});

$('#save').on('click', function () {
    save.push(generatedString);
});

$('#print').on('click', function () {
    $('#favorites').html(save);
});


//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

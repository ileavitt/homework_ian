$(function(){

    /**
    * Add 5 products with images
    * Write a function called buildStore and invoke it
    * buildStore should iterate the array of objects and inject HTML into the DOM to display a store
    */

    //An ARRAY of OBJECTS
    var products    = [
        {
            "item": "buses",
            "adj": "SLOW",
            "imageClass": "fa-bus",
            "price": 3,
            "quantity": 50
        },
        {
            "item": "fighter jets",
            "adj": "LOUD",
            "imageClass": "fa-fighter-jet",
            "price": 2,
            "quantity": 20
        },
        {
            "item": "rockets",
            "adj": "FIREY",
            "imageClass": "fa-rocket",
            "price": 1,
            "quantity": 30
        },
        {
            "item": "ambulances",
            "adj": "NOISEY",
            "imageClass": "fa-ambulance",
            "price": 2,
            "quantity": 40
        },
        {
            "item": "automobiles",
            "adj": "FAST",
            "imageClass": "fa-car",
            "price": 5,
            "quantity": 60
        }
    ];

    function buildStore() {

        var output = '';
        output += '<table class="table table-striped table-bordered">';

        for (var i = 0; i < products.length; i++) {
            var product = products[i];

            output += '<tr>';
            output += ' <td class="text-center">';
            output += '     <p class="text-info">';
            output += '     The cost for ' + product.quantity;
            output += '     of these amazingly ' + product.adj + ' ' + product.item;
            output += '     just happens to be $' + product.price;
            output += '     </p>';
            output += '     <p class="text-warning">';
            output +=       'Here\'s a photo of the ' + product.item;
            output += '     <p/><span class="fa ' + product.imageClass + '" style="font-size:24px"></span>';
            output += '     </p>';
            output += ' </td>';
            output += '</tr>';
        }

        output += '</table>';

        $('body').append(output);
    }

    buildStore();
});

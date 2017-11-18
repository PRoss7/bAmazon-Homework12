var mysql = require("mysql");
var prompt = require("prompt");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",

    // Your password
    password: "PAR/8628490",
    database: "bamazon_DB"
});

var purchased = [];


connection.connect();

connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {

    if (err) throw err;

    var table = new Table({
        head: ['Item Id', 'Product Name', 'Price', 'Department', '# in Stock'],
        style: {
            head: ['blue'],
            compact: false,
            colAligns: ['center'],
        }
    });

    for (var i = 0; i < res.length; i++) {

        table.push(

            [res[i].item_id, res[i].product_name, res[i].price, res.department_name, res[i].stock_quantity]

        );

    }

    console.log(table.toString());

    transaction();

});

var transaction = function () {

    var productInfo = {

        props: {

            item_id: { description: 'Please indicate the ID of the product you would like to purchase' },
            quant: { description: 'How many would you like to purchase?' }

        },

    };

    prompt.start();

    prompt.get(productInfo, function (err, res) {

        var custPurch = {

            item_id: res.item_id,
            quant: res.quant

        };

        purchased.push(custPurch);

        connection.query('SELECT * FROM products WHERE item_id = ?', purchased[0].item_id, function (err, res) {

            if (err) console.log("That item cannot be found");

            if (res[0].stock_quantity < purchased[0].quant) {

                console.log('Sorry, we are out of that product');
                connection.end();

            } else if (res[0].stock_quantity >= purchased[0].quant) {

                console.log('======================================================');

                console.log(purchased[0].quant + ' items purchased');

                console.log(res[0].product_name + ' ' + res[0].price);

                connection.query('UPDATE products SET stock_quantity = ' + newQuant + 'WHERE item_id = ' + purchased[0].item_id, function (err, res) {

                    console.log('======================================================');
                    console.log('Your order has been processed. We appreciate your business!');
                    console.log('======================================================');

                    connection.end();

                });

            }

        });

    });

}



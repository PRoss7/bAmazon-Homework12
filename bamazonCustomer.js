var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "PAR/8628490",
    database: "bamazon_DB"
});

connection.connect(function (err) {

    if (err) throw err;

    console.log("connected as id " + connection.threadId);

    showProducts();

    questions();


});


function showProducts() {

    var query = connection.query("SELECT * FROM products", function (err, res) {

        for (var i = 0; i < res.length; i++) {

            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + "$" + res[i].price + " | " + res[i].stock_quantity);

        }

        console.log("======================================================");

    });

}

function questions() {

    inquirer.prompt({

        name: "action",
        message: "Please indicate the ID of the product you would like to purchase",
        choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    }).then(function (answer) {


        switch (answer.action) {

            case "1":
                trans1();
                break;

            case "2":
                transactions();
                break;

            case "3":
                transactions();
                break;

            case "4":
                transactions();
                break;

            case "5":
                transactions();
                break;

            case "6":
                transactions();
                break;

            case "7":
                transactions();
                break;

            case "8":
                transactions();
                break;

            case "9":
                transactions();
                break;

            case "10":
                transactions();
                break;

        }

    });

}

function trans1() {

    inquirer.prompt({
        name: "product",
        type: "input",
        message: "How many units would you like?"
    }).then(function (answer) {

        var query = "UPDATE products SET ? WHERE ?";
        connection.query(query, function (err, res) {

            if (err) throw err;

            for (var i = 0; i < res.length; i++) {

                if (answer > this.res[i].stock_quantity) {

                    console.log("Sorry, we dont have that many units.");

                } else {

                    console.log(this.res[i].product_name + this.res[i].price * answer);

                }

            }

        });

    });

}


// var query = connection.query(

//     "UPDATE products SET ? WHERE ?",

//     [
//         {
//             stock_quantity: this - answer
//         },

//         {
//             item_ID: this.answer
//         }
//     ],
//     function (err, res) {

//         if (err) throw err;

//         for (var i = 0; i < res.length; i++) {

//             if (answer > this.res[i].stock_quantity) {

//                 console.log("Sorry, we dont have that many units.");

//             } else {

//                 console.log(this.res[i].product_name + this.res[i].price * answer);

//             }

//         }

//     }
// )
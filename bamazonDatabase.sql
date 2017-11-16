drop database if exists bamazon_DB;
create database bamazon_DB;
use bamazon_DB;



create table products(
id int auto_increment not null,
item_id int(10) null,
product_name varchar(50) null,
department_name varchar(50) null,
price int(10) null,
stock_quantity int(10) null,
primary key (id)
);

select * from products;

INSERT INTO `bamazon_db`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('001', 'Aux Cord', 'Audio', '8.99', '15');
INSERT INTO `bamazon_db`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('002', 'Xbox One X', 'Gaming', '499.99', '10');
INSERT INTO `bamazon_db`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('003', 'CODE by Charles Petzold', 'Books', '10.99', '20');
INSERT INTO `bamazon_db`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('004', 'Beats by Dre', 'Audio', '249.99', '13');
INSERT INTO `bamazon_db`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('005', 'PS4 Pro', 'Gaming', '399.97', '10');
INSERT INTO `bamazon_db`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('006', 'Xbox One Controller- White', 'Gaming', '48.99', '18');
INSERT INTO `bamazon_db`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('007', 'Rubber Duck', 'Programming', '1.00', '100000000');
INSERT INTO `bamazon_db`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('008', 'Life Proof Case- iPhone X', 'Phones', '74.99', '25');
INSERT INTO `bamazon_db`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('009', 'Logitech Wireless Mouse', 'Computers', '9.99', '30');
INSERT INTO `bamazon_db`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('010', 'UE Boom Speaker', 'Audio', '99.99', '20');
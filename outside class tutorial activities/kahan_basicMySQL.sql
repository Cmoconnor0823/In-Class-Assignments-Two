CREATE TABLE products(
product_id integer,
product_name text ,
department_name text,
price integer,
stock_quantity integer,
aisle integer
);

 select * from products;
 
 Insert into products (product_id, product_name, department_name, price, stock_quantity, aisle)
 values
 (1, "Tissues","home", 3.99, 100, 3);
 
  Insert into products (product_id, product_name, department_name, price, stock_quantity, aisle)
 values
 (2, "Paper Towels","home", 4.99, 200, 3);
 
  Insert into products (product_id, product_name, department_name, price, stock_quantity, aisle)
 values
 (3, "Dry Pasta","pantry", 0.99, 150, 1);
 
  Insert into products (product_id, product_name, department_name, price, stock_quantity, aisle)
 values
 (4, "Canned Soup","pantry", 1.99, 170, 1);
 
  Insert into products (product_id, product_name, department_name, price, stock_quantity, aisle)
 values
 (5, "Blank CD's","electronics", 7.95, 75, 4);
 
  Insert into products (product_id, product_name, department_name, price, stock_quantity, aisle)
 values
 (6, "Mouse Pad-Green","electronics", 2.99, 50, 4);
 
  Insert into products (product_id, product_name, department_name, price, stock_quantity, aisle)
 values
 (7, "Mouse Pad-Red","electronics", 2.99, 50, 4);
 
  Insert into products (product_id, product_name, department_name, price, stock_quantity, aisle)
 values
 (8, "Potting Soil","outdoor", 3.99, 140, 5);
 
  Insert into products (product_id, product_name, department_name, price, stock_quantity, aisle)
 values
 (9, "10'in Table-top Grill","outdoor", 15.65, 110, 5);
 
  Insert into products (product_id, product_name, department_name, price, stock_quantity, aisle)
 values
 (10, "Light Bulbs - 3 count","home", 7.05, 160, 3);
 
 Insert into products (product_id, product_name, department_name, price, stock_quantity, aisle)
 values
 (11, "Mouse Pad-Blue","electronics", 2.99, 50,4);
 
  Insert into products (product_id, product_name, department_name, price, stock_quantity,aisle)
 values
 (12, "Apples","produce", 0.75, 160, 2);
 
  Insert into products (product_id, product_name, department_name, price, stock_quantity, aisle)
 values
 (13, "Bananas","produce", 0.65, 120, 2);
 
  Insert into products (product_id, product_name, department_name, price, stock_quantity, aisle)
 values
 (14, "Carrots","produce", 0.05, 180, 2);
 
 Insert into products (product_id, product_name, department_name, price, stock_quantity, aisle)
 values
 (15, "Corn on the Cob","produce", 0.50, 190, 2);
 
 
select * from products;


SELECT * FROM products  ORDER BY aisle;

Select sum(stock_quantity) from products;



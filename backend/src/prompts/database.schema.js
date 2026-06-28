const DATABASE_SCHEMA = `
Database Name: ai_sql

Tables:

users
------
id INT PRIMARY KEY
name VARCHAR(100)
email VARCHAR(255)
phone VARCHAR(20)
city VARCHAR(100)
created_at TIMESTAMP

categories
----------
id INT PRIMARY KEY
name VARCHAR(100)

products
--------
id INT PRIMARY KEY
category_id INT
name VARCHAR(200)
price DECIMAL(10,2)
stock INT

Relationship:
products.category_id -> categories.id

orders
------
id INT PRIMARY KEY
user_id INT
total DECIMAL(10,2)
status ENUM('Pending','Paid','Shipped','Delivered','Cancelled')
order_date DATETIME

Relationship:
orders.user_id -> users.id

order_items
-----------
id INT PRIMARY KEY
order_id INT
product_id INT
quantity INT
price DECIMAL(10,2)

Relationships:
order_items.order_id -> orders.id
order_items.product_id -> products.id
`;

module.exports = DATABASE_SCHEMA;
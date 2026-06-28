-- ==========================================
-- ECOMMERCE DATABASE SETUP
-- ==========================================

DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS users;

-- ==========================================
-- USERS
-- ==========================================

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20),
    city VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, phone, city)
VALUES
('John Smith','john@test.com','9876543210','New York'),
('Alex Johnson','alex@test.com','9876543211','Chicago'),
('David Brown','david@test.com','9876543212','Los Angeles'),
('Emma Wilson','emma@test.com','9876543213','Houston'),
('Sophia Miller','sophia@test.com','9876543214','Boston'),
('Liam Davis','liam@test.com','9876543215','Seattle'),
('Olivia Taylor','olivia@test.com','9876543216','Miami'),
('Noah Anderson','noah@test.com','9876543217','Dallas'),
('James Thomas','james@test.com','9876543218','Denver'),
('Charlotte White','charlotte@test.com','9876543219','Atlanta');

-- ==========================================
-- CATEGORIES
-- ==========================================

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);

INSERT INTO categories(name)
VALUES
('Electronics'),
('Fashion'),
('Home Appliances'),
('Books'),
('Sports');

-- ==========================================
-- PRODUCTS
-- ==========================================

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT,
    name VARCHAR(200),
    price DECIMAL(10,2),
    stock INT,
    FOREIGN KEY(category_id) REFERENCES categories(id)
);

INSERT INTO products(category_id,name,price,stock)
VALUES
(1,'iPhone 15',999.00,20),
(1,'Samsung Galaxy S24',899.00,18),
(1,'MacBook Air M3',1499.00,10),
(1,'Sony Headphones',199.00,40),
(2,'Men T-Shirt',25.00,100),
(2,'Women Jeans',45.00,80),
(2,'Running Shoes',120.00,60),
(3,'LG Refrigerator',899.00,12),
(3,'Microwave Oven',150.00,30),
(3,'Air Conditioner',650.00,15),
(4,'JavaScript Guide',35.00,100),
(4,'Node.js Design Patterns',50.00,50),
(5,'Football',30.00,70),
(5,'Cricket Bat',90.00,35),
(5,'Yoga Mat',25.00,60);

-- ==========================================
-- ORDERS
-- ==========================================

CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    total DECIMAL(10,2),
    status ENUM('Pending','Paid','Shipped','Delivered','Cancelled'),
    order_date DATETIME,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO orders(user_id,total,status,order_date)
VALUES
(1,1198.00,'Delivered','2025-01-10 10:30:00'),
(2,944.00,'Shipped','2025-01-15 11:45:00'),
(3,175.00,'Paid','2025-02-02 15:20:00'),
(1,150.00,'Pending','2025-02-12 18:00:00'),
(4,650.00,'Delivered','2025-03-01 09:15:00'),
(5,85.00,'Cancelled','2025-03-05 14:30:00'),
(6,999.00,'Delivered','2025-03-15 16:10:00'),
(7,75.00,'Paid','2025-03-20 12:00:00'),
(8,120.00,'Pending','2025-03-22 19:00:00'),
(9,1499.00,'Shipped','2025-04-01 08:45:00');

-- ==========================================
-- ORDER ITEMS
-- ==========================================

CREATE TABLE order_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10,2),
    FOREIGN KEY(order_id) REFERENCES orders(id),
    FOREIGN KEY(product_id) REFERENCES products(id)
);

INSERT INTO order_items(order_id,product_id,quantity,price)
VALUES
(1,1,1,999.00),
(1,4,1,199.00),

(2,2,1,899.00),
(2,5,1,25.00),
(2,11,1,20.00),

(3,9,1,150.00),
(3,15,1,25.00),

(4,9,1,150.00),

(5,10,1,650.00),

(6,11,1,35.00),
(6,13,1,30.00),
(6,15,1,20.00),

(7,1,1,999.00),

(8,11,1,35.00),
(8,13,1,30.00),
(8,15,1,10.00),

(9,7,1,120.00),

(10,3,1,1499.00);

-- ==========================================
-- VERIFY DATA
-- ==========================================

SELECT * FROM users;
SELECT * FROM categories;
SELECT * FROM products;
SELECT * FROM orders;
SELECT * FROM order_items;
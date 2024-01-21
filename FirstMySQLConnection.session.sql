CREATE TABLE customers (
    customer_id int,
    firstname varchar(255),
    lastname varchar(255),
    email varchar(255),
    phone varchar(255),
    address varchar(255),
    PRIMARY KEY (customer_id)
);
DROP DATABASE test;
USE plant_shop;
INSERT INTO customers (
        customer_id,
        firstname,
        lastname,
        email,
        phone,
        address
    )
VALUES (
        1,
        'Max',
        'Mustermann',
        'max.mustermann@example.com',
        '1234567890',
        'Hauptstraße 10 63128 Dietzenbach'
    ),
    (
        2,
        'Lisa',
        'Müller',
        'lisa.müller@example.com',
        '9876543210',
        'Leipzigerstraße 27 60320 Frankfurt am Main'
    ),
    (
        3,
        'Loukmane',
        'Chaou',
        'loukmane.chaou@example.com',
        '5555787645',
        'Friedbergerlandstraße 12 60316 Frankfurt am Main '
    );
CREATE TABLE IF NOT EXISTS plants (
    plant_id INT,
    plant_name VARCHAR(255),
    plant_description VARCHAR(255),
    price VARCHAR(255),
    stock_quantity VARCHAR(255),
    PRIMARY KEY(plant_id)
);
CREATE TABLE IF NOT EXISTS orders (
    order_id INT,
    customer_id INT,
    order_date DATETIME,
    total_amount DECIMAL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
);
ALTER TABLE orders
MODIFY COLUMN order_id INT PRIMARY KEY;
CREATE TABLE IF NOT EXISTS order_details (
    order_detail_id INT,
    order_id INT,
    plant_id INT,
    quantity INT,
    subtotal DECIMAL,
    PRIMARY KEY (order_detail_id),
    FOREIGN KEY (order_id) REFERENCES orders (order_id),
    FOREIGN KEY (plant_id) REFERENCES plants (plant_id)
);
INSERT INTO plants (
        plant_id,
        plant_name,
        plant_description,
        price,
        stock_quantity
    )
VALUES (
        103,
        'Alocasia',
        'The Alocasia, or elephant ear plant, is a striking indoor specimen distinguished by its large, uniquely shaped leaves, adding a bold and tropical touch to interior spaces.',
        25,
        8
    );
INSERT INTO orders (order_id, customer_id, order_date, total_amount)
VALUES (
        202,
        2,
        '2024-01-15 12:30:45',
        30
    );
USE sakila;
show tables;
INSERT INTO customer (
        store_id,
        first_name,
        last_name,
        email,
        address_id,
        active
    )
VALUES (
        1,
        'Loukmane' 'Chaou',
        'loukmane@chaou.com',
        'address_id:smallint',
        'active:tinyint',
    );
SELECT *
FROM information_schema.columns
WHERE TABLE_SCHEMA = 'sakila' -- replace with your database name
    AND TABLE_NAME = 'customer';
INSERT INTO address (
        address,
        city_id,
        district,
        postal_code,
        phone,
        location
    )
VALUES (
        'Friedbergerlandstraße 12',
        601,
        'Bockenheim',
        '60311',
        '0157039685',
        POINT(0, 0)
    );
SET @address_id := LAST_INSERT_ID();
SELECT *
from address
where address = 'Friedbergerlandstraße 12';
DELETE FROM address
where address = 'Friedbergerlandstraße 12';
SELECT *
FROM customer
WHERE first_name = 'Loukmane';
USE sakila;
START TRANSACTION;
INSERT INTO sakila.customer (
        store_id,
        first_name,
        last_name,
        email,
        address_id,
        active
    )
VALUES (
        1,
        'Loukmane',
        'Chaou',
        'loukmane.chaou@email.com',
        610,
        1
    );
COMMIT;
SELECT *
FROM sakila.customer
where first_name = "jo";
SELECT *
FROM city
    INNER JOIN country
where city.country_id = country.country_id
    AND country.country = "Germany";
INSERT INTO city (city, country_id)
VALUES ('Frankfurt am Main', 38);
INSERT INTO customer (
        store_id,
        first_name,
        last_name,
        email,
        address_id,
        active
    )
VALUES (
        2,
        'jo',
        'han',
        'jo@mail.com',
        1,
        1
    );
use sakila;
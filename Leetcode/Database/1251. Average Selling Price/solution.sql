-- Write your PostgreSQL query statement below
SELECT
    Prices.product_id,
    COALESCE(
        ROUND((sum(price * units * 1.0)) / sum(units), 2),
        0
    ) AS average_price
FROM
    Prices
    left join UnitsSold ON Prices.product_id = UnitsSold.product_id
    AND purchase_date between start_date AND end_date
GROUP BY
    Prices.product_id;

-- Write your MySQL query statement below
SELECT
    Prices.product_id,
    IFNULL (ROUND(sum(price * units) / sum(units), 2), 0) AS average_price
FROM
    Prices
    left join UnitsSold ON Prices.product_id = UnitsSold.product_id
    AND purchase_date between start_date AND end_date
GROUP BY
    Prices.product_id;
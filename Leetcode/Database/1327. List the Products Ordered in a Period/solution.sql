-- Write your MySQL query statement below
select
    product_name,
    sum(unit) as unit
from
    orders
    left join products on products.product_id = orders.product_id
where
    order_date between '2020-02-01' and '2020-02-29'
group by
    orders.product_id
having
    unit >= 100

-- Write your PostgreSQL query statement below

select
    product_name,
    sum(unit) as unit
from
    orders
    left join products on products.product_id = orders.product_id
where
    order_date between '2020-02-01' and '2020-02-29'
group by
    orders.product_id,
    product_name
having
    sum(unit) >= 100
-- Write your MySQL query statement below
SELECT sell_date, count(distinct(product)) as num_sold, GROUP_CONCAT( DISTINCT product order by product ASC separator ',') AS products
from Activities as a group by sell_date order by sell_date
-- Write your MySQL query statement below
select
    class
from
    courses
group by
    class
having
    count(distinct student) > 4

-- Write your PostgreSQL query statement below 
select
    class
from
    courses
group by
    class
having
    count(distinct student) > 4
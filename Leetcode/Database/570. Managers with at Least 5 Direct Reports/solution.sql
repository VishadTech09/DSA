-- Write your MySQL query statement below
select
    e1.name
from
    employee e1
    left join employee e2 on e1.id = e2.managerId
where
    e2.id is not null
group by
    e1.id
having
    count(*) > 4;

-- Write your PostgreSQL query statement below 
select
    e1.name
from
    employee e1
    left join employee e2 on e1.id = e2.managerId
where
    e2.id is not null
group by
    e1.id,
    e1.name
having
    count(*) > 4;
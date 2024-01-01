-- Write your PostgreSQL query statement below
select
    employee_id
from
    Employees
where
    salary < 30000
    and manager_id not in (
        select
            e2.employee_id
        from
            employees e2
    )
order by
    employee_id
    -- Write your MySQL query statement below
select
    employee_id
from
    Employees
where
    salary < 30000
    and manager_id not in (
        select
            e2.employee_id
        from
            employees e2
    )
order by
    employee_id
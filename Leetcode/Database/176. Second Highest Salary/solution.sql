-- Write your PostgreSQL query statement below
SELECT
    (
        SELECT
            SALARY
        FROM
            EMPLOYEE
        GROUP BY
            SALARY
        ORDER BY
            SALARY DESC
        LIMIT
            1
        OFFSET
            1
    ) AS SecondHighestSalary

-- Write your MySQL query statement below
SELECT
    (
        SELECT
            SALARY
        FROM
            EMPLOYEE
        GROUP BY
            SALARY
        ORDER BY
            SALARY DESC
        LIMIT
            1, 1
    ) AS SecondHighestSalary
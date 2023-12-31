-- Write your PostgreSQL query statement below
SELECT
    project.project_id,
    ROUND(
        sum(experience_years * 1.0) / count(employee.employee_id),
        2
    ) AS average_years
FROM
    PROJECT
    LEFT JOIN EMPLOYEE ON PROJECT.EMPLOYEE_ID = EMPLOYEE.EMPLOYEE_ID
WHERE
    employee.experience_years IS NOT NULL
GROUP BY
    project.project_id



--- Write your MySQL query statement below
SELECT
    project.project_id,
    round(
        sum(experience_years) / count(employee.employee_id),
        2
    ) AS average_years
FROM
    PROJECT
    LEFT JOIN EMPLOYEE ON PROJECT.EMPLOYEE_ID = EMPLOYEE.EMPLOYEE_ID
WHERE
    employee.experience_years IS NOT NULL
GROUP BY
    project.project_id
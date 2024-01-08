-- Write your Mysql query statement below
SELECT E1.employee_id, E1.name, COUNT(E2.reports_to) AS reports_count, ROUND(AVG(E2.age),0) AS average_age
FROM Employees as E1 
INNER JOIN Employees as E2 
ON E1.employee_id = E2.reports_to
GROUP BY E2.reports_to
ORDER BY E1.employee_id;


-- Write your PostgreSQL query statement below 
SELECT E1.employee_id, E1.name, COUNT(E2.reports_to) AS reports_count, ROUND(AVG(E2.age)::numeric,0) AS average_age
FROM Employees as E1 
INNER JOIN Employees as E2 
ON E1.employee_id = E2.reports_to
GROUP BY E2.reports_to, e1.employee_id, e1.name
ORDER BY E1.employee_id;
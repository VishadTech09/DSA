SELECT 
    dept.name AS 'Department', 
    emp1.name AS 'Employee', 
    emp1.salary
FROM employee emp1
JOIN department dept ON emp1.departmentId = dept.id
WHERE 3 > (
    SELECT COUNT(DISTINCT emp2.salary)
    FROM employee emp2
    WHERE emp2.salary > emp1.salary AND emp1.departmentId = emp2.departmentId
);
-- Write your MySQL query statement below
SELECT
    'Low Salary' AS category,
    COUNT(INCOME) AS accounts_count
FROM
    ACCOUNTS
WHERE
    income < 20000
union
SELECT
    'Average Salary' AS category,
    COUNT(INCOME) AS accounts_count
FROM
    ACCOUNTS
WHERE
    income >= 20000
    AND income <= 50000
union
SELECT
    'High Salary' AS category,
    COUNT(INCOME) AS accounts_count
FROM
    ACCOUNTS
WHERE
    income > 50000

-- Write your PostgreSQL query statement below 
SELECT
    'Low Salary' AS category,
    COUNT(INCOME) AS accounts_count
FROM
    ACCOUNTS
WHERE
    income < 20000
union
SELECT
    'Average Salary' AS category,
    COUNT(INCOME) AS accounts_count
FROM
    ACCOUNTS
WHERE
    income >= 20000
    AND income <= 50000
union
SELECT
    'High Salary' AS category,
    COUNT(INCOME) AS accounts_count
FROM
    ACCOUNTS
WHERE
    income > 50000
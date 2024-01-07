-- Write your PostgreSQL query statement below
SELECT
    MAX(num) AS num
FROM
    (
        SELECT
            num
        FROM
            MyNumbers
        group by
            num
        HAVING
            count(num) = 1
    ) AS non_repeatnumber

-- Write your MySQL query statement below
SELECT
    MAX(num) AS num
FROM
    (
        SELECT
            num
        FROM
            MyNumbers
        group by
            num
        HAVING
            count(num) = 1
    ) AS non_repeatnumber
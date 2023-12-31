-- Write your PostgreSQL query statement below
SELECT
    contest_id,
    ROUND(
        (
            count(user_id) * 100.0 / (
                SELECT
                    COUNT(*)
                FROM
                    users
            )
        ),
        2
    ) AS percentage
FROM
    register
GROUP BY
    contest_id
ORDER BY
    percentage DESC,
    contest_id

-- Write your MySQL query statement below
SELECT
    contest_id,
    ROUND(
        (
            count(user_id) * 100.0 / (
                SELECT
                    COUNT(*)
                FROM
                    users
            )
        ),
        2
    ) AS percentage
FROM
    register
GROUP BY
    contest_id
ORDER BY
    percentage DESC,
    contest_id
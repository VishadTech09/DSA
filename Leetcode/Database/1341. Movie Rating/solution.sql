-- Write your PostgreSQL query statement below
(
    SELECT
        users.name as results
    from
        movierating
        left join users on users.user_id = movierating.user_id
    group by
        users.name
    order by
        count(*) desc,
        users.name
    limit
        1
)
union all
(
    select
        movies.title as results
    from
        movierating
        left join movies on movies.movie_id = movierating.movie_id
    where
        created_at between '2020-02-01' and '2020-02-29'
    group by
        movies.title
    order by
        avg(rating) desc,
        title
    limit
        1
)

-- Write your MySQL query statement below
(
    SELECT
        users.name as results
    from
        movierating
        left join users on users.user_id = movierating.user_id
    group by
        users.name
    order by
        count(*) desc,
        users.name
    limit
        1
)
union all
(
    select
        movies.title as results
    from
        movierating
        left join movies on movies.movie_id = movierating.movie_id
    where
        created_at between '2020-02-01' and '2020-02-29'
    group by
        movies.title
    order by
        avg(rating) desc,
        title
    limit
        1
)
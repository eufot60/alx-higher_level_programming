-- lists all shows from hbtn_od_tvshows_rate by their rating
-- lists all rows of a table by the sum of a linked row
SELECT title, SUM(tv_show_ratings.rate) 'rating'
FROM tv_shows
LEFT JOIN tv_show_ratings ON tv_show_ratings.show_id = tv_shows.id
GROUP BY title
ORDER BY rating DESC;

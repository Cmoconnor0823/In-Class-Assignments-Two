set SQL_SAFE_UPDATES =0;
DROP DATABASE IF EXISTS favorite_db;

CREATE DATABASE favorite_db;


use favorite_db;


CREATE TABLE favorite_foods (
  
   food varcharacter(30) NOT NULL,

  score INTEGER(10)
);

CREATE TABLE favorite_songs (
  
  song varcharacter(30) NOT NULL,
 
  artist varcharacter(30),

  score INTEGER(10)
);

CREATE TABLE favorite_movies (

  id integer(10) NOT NULL AUTO_INCREMENT,
 
 movie varcharacter(30) NOT NULL,
  
  five_times boolean not null default 0,
  
  score INTEGER(10),
  
  date_added timestamp,
  
  PRIMARY KEY (id)
);



INSERT INTO favorite_foods (food, score)
VALUES ("cookies", 5);

INSERT INTO favorite_movies (movie, five_times, score)
VALUES ("Red", 0, 1);

INSERT INTO favorite_songs (song, artist, score)
VALUES ("toto", "africa" ,10);

set SQL_SAFE_UPDATES =0;

update favorite_movies
set movie = "Nemo", five_times = 1 , score = 7
where id = 3;
	
    
SELECT * from favorite_movies;

DELETE FROM favorite_movies 
WHERE movie = "red";
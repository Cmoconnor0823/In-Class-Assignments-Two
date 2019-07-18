Drop Database If EXISTS top_songsDB;

Create Database top_songsDB;

USE top_songsDB

DROP DATABASE IF EXISTS top_songs_db;

CREATE DATABASE top_songs_db;

USE top_songs_db;

CREATE TABLE top5000 (
    id INT NOT NULL primary key AUTO_INCREMENT,
    artist VARCHAR(50) NOT NULL,
    album VARCHAR(50) NOT NULL,
    releaseYear INT(4) NOT NULL,
    aggScore FLOAT(7) NOT NULL,
    ukScore FLOAT(7) NOT NULL,
    usScore FLOAT(7) NOT NULL,
    euScore FLOAT(7) NOT NULL,
    restOfWorld FLOAT(7) NOT NULL

);


select * FROM top5000;


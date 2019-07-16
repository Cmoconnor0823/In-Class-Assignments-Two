ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Stitch626'

Drop Database If Exists play_listDB;

Create Database play_listDB;

USE play_listDB;

Create Table songs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) Null,
    artist VARCHAR(30) NULL,
    genre VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
    VALUES("Africa", "Toto", "Pop Rock");

    Insert Into songs (title, artist, genre)
	values("Always", "Blink-182", "pop-punk");
    
Insert Into songs (title, artist, genre)
	values("All About That Base", "Megan-Trainor", "pop");
    
Insert Into songs (title, artist, genre)
	values("Smells Like Teen Sprit", "Nirvana", "punk");
DROP database IF Exists wishes_db;
CREATE DATABASE wishes_db;
USE wishes_db;

CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);


-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('World Peace');
INSERT INTO wishes (wish) VALUES ('End World Hunger');
INSERT INTO wishes (wish) VALUES ('Win A Nobel Peace Prize');


 select * from wishes;
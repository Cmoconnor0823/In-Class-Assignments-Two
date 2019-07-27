Create database How_I_Met_Your_Mother_db;
USE How_I_Met_Your_Mother_db;

create table actors(
id int auto_increment,
actor_name varchar (50) not null,
coolness_points int(20) not null,
attitudes int(20) not null,
primary key (id)
);

insert into actors (actor_name, coolness_points, attitudes)
values
("Josh Radnor", "2", "1");

insert into actors (actor_name, coolness_points, attitudes)
values
("Cobie Smulders", "6", "9");

insert into actors (actor_name, coolness_points, attitudes)
values
("Neil Patrick Harris", "100000", "100000");

insert into actors (actor_name, coolness_points, attitudes)
values
("Alyson Hannigan", "5", "3");

select * from actors;
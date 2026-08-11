
select * from users where age > 30 and role ilike 'user';

select * from users where age > 30 or role ilike 'user';

select * from users where age > 17 and age < 31;

-- here 18 and 30 will be included
select * from users where age between 18 and 30;

-- records that match age 18 and 30
select * from users where age in (18, 30);


-- select * from users where age in (18, 20, 30);      

-- select age from users where age > 17 and age < 31;       --> 18 20 30

-- this is called a subquery ie. when you have a query inside another query
select * from users where age in (select age from users where age > 17 and age < 31);



-- 1. get me all the mangers is ascending order of age
-- 2. get me user with role user whose age is above 50



-- the below table is made using constraints, this comes into play when you try to insert data inside the table
-- this is so that we can keep the data clean and within the constraints
create table users (
    id serial primary key,
    name varchar(50) not null,
    email varchar(50) not null unique,  
    age int default 18 check(age>=1 and age <=100),  
    role varchar(10) default 'user' check(role in('user', 'admin', 'manager')),  
    create_at timestamp default now()
)

create table posts (
    id serial primary key,
    title text not null,
    body text,
    user_id int references users(id) on delete cascade,    
    created_at timestamp default now()
)

-- primary key is that column of the table that uniquely identifies every row in that table
--  user_id int references users(id) -> this is how we connect the 2 tables
-- delete cascade -> if the data is deleted in the parent table it should be reflected in the child tables

-- A foreign key is a column (or a set of columns) in one SQL table that provides a link to the 
-- primary key in another table

insert into posts (title, body, user_id) values
('pranav title 1', 'prnaav body 1', 9),
('pranav title 2', 'prnaav body 2', 9),
('pranav title 3', 'prnaav body 3', 9),
('pranav title 4', 'prnaav body 4', 9);


-- the below will not work bc there is no user with id as 100
insert into posts (title, body, user_id) values
('pranav title 1', 'prnaav body 1', 100);


-- this counting records in your table
select count (*) from users;
select count (*) from posts;

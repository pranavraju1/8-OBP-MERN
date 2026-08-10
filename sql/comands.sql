-- creating a table
create table users(
    id serial,
    name varchar(50),
    email varchar(100),
    role varchar(25) default 'user',
    created_at timestamp default now()
)

-- inserting data in table
insert into users (name, email) values ('gaurav', 'gaurav@gmail.com');

-- display all data from the table
select * from users;

-- display selected data from the table
select name, role from users;


-- displaying the data as soon as you insert it into the table
insert into users (name, email) values ('pranav', 'pranav@gmail.com')
returning id, name, created_at;



-- inserting multiple data inside your table
insert into users (name, email) values 
('sneha', 'sneha@gmail.com'),
('rahul', 'rahul@gmail.com'),
('raj', 'raj@gmail.com')
returning id, name, created_at;


-- where statement
-- getting the user whose id is 1
select * from users where id = 1;

-- getting all the users with role as user
select name from users where role = 'user';


-- updating the record
-- here where statement is inportant, if you don't specify it, it will update the whole column
update users set role = 'manager' where id = 2 ;

update users set role = 'manager' where id = 3 
returning name, role;


-- deleting data from the table
-- here where is very inportant ie. if you do not specify where it will delete all the data from users
delete from users where id = 2;


-- adding a coulmn to your table
-- syntax -> alter table <table name> add column <column name> <datatype>; 
alter table users add column age integer default 0;

-- HW how to delete a column


-- ordering detials in the table
-- descending order
select * from users order by id desc;

-- ascending order
select * from users order by id asc;
-- or
select * from users order by id;


-- oldest user details
select * from users order by age desc limit 1;

-- youngest user details
select * from users order by age asc limit 1;






select * from users where age < 21;

-- case sensitive checking
select * from users where name like 'pranav';

-- case insensitive checking
select * from users where name ilike 'pranav';






-- begining with 'pra'
select * from users where name ilike 'pra%';

-- ends with 'av'
select * from users where name ilike '%av';

-- checks for 'r' anywhere on name (works like includes statement in JS)
select * from users where name ilike '%r%';

-- second letter in 'r'
select * from users where name ilike '_r%';

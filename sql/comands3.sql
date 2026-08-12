CREATE TABLE students ( 
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL, 
    age INT CHECK (age >= 16), 
    email VARCHAR(100) UNIQUE, 
    city VARCHAR(50) 
    );

CREATE TABLE courses ( 
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL, 
    duration_weeks INT NOT NULL, 
    fee DECIMAL(8,2) NOT NULL 
); 

CREATE TABLE enrollments ( 
    id SERIAL PRIMARY KEY, 
    student_id INT NOT NULL, 
    course_id INT NOT NULL, 
    enrollment_date DATE, 
    FOREIGN KEY (student_id) REFERENCES students(id), 
    FOREIGN KEY (course_id) REFERENCES courses(id) 
);


INSERT INTO students (name, age, email, city) VALUES 
('Aarav', 19, 'aarav@example.com', 'Pune'), 
('Meera', 20, 'meera@example.com', 'Mumbai'), 
('Riya', 18, 'riya@example.com', 'Nashik'), 
('Kabir', 21, 'kabir@example.com', 'Pune'),
 ('Sara', 22, 'sara@example.com', 'Nagpur'); 
 
 INSERT INTO courses (title, duration_weeks, fee) VALUES 
 ('SQL Basics', 6, 2500.00), 
 ('Web Development', 10, 5000.00), 
 ('Python Fundamentals', 8, 4000.00);

 INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES
 (1, 1, '2026-05-01'), (1, 2, '2026-05-03'), (2, 1, '2026-05-04'), (3, 3, '2026-05-05');

select * from students;
select * from courses;
select * from enrollments;




-- 1. find students from pune
-- 2. find students aged 20 or above
-- 3. find courses with fees less than 5000
-- 4. find students from mumbai and pune

-- 5. show students ordered by age ascending
-- 6. show youngest student
-- 7. show 2 most expensive courses

-- 8. change kabir's city to delhi
-- 9. change fees of sql basics to 3000
-- 10. increase meera's age to 21

-- 11. delete student with id 5
-- 12. delete all students from nasik
-- 13. delete all courses with fee above 6000



-- this is how we join to different tables
-- "as" is alias where we can give a temp name to that column
  
-- inner join only gives the common records between user and posts 
-- ie if user_id is null in posts table it will not be included
select  posts.title, users.name as auther
from posts inner join users on posts.user_id = users.id;

-- left join gives all recods in posts and common in users
-- even if that data is not available in users table ie all left rows + matched right rows 
select  posts.title, users.name as auther
from posts left join users on posts.user_id = users.id;

-- right join gives all recods in users and common in posts
-- even if that data is not available in posts table ie all right rows + matched left rows 
select  posts.title, users.name as auther
from posts right join users on posts.user_id = users.id;




-- number of posts made by each user
select users.name, count(posts.id) as post_cout
from users left join posts on posts.user_id = users.id
group by users.id, users.name; 
/*
Authenticate user, given some username U and password P
If this is an empty set, then the credentials were invalid
*/
select * from account
where username = U and password = P

/*
See if username U already exists
*/
select userID from account
where username = U

/*
Create new account, given username U, password P, and email E
*/
Insert into account
values U, P, E

/*
Get calendar ID's that user with user_id U has access to
*/
select calendar_id from calendar
where user_id = U

/*
Get information for calendar with calendar_id C
*/
select * from task
where calendar_id = C

/*
Create new task
*/
Insert into task
values ...

/*
create new comment with given values.  use Today() for date/time
*/
insert into comment
values T, A, today(), C

/*
Change information in a task T
*/
UPDATE task
SET column1 = value1, column2 = value2, ...
WHERE task_id = T;

/*
Add user C into your task T
*/
insert into user_in_calendar
values U, T

/*
Given user U and day D, get all tasks that the user is in for that specific day
*/
select * from (calendar join user_in_calendar on calendar.account_id = user_in_calendar.account_id) natural join task
where user_id = given_user_id and date_due = given_date

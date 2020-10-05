create table account (
    account_id int,
    username varchar(100),
    password varchar(100),
    email varchar(100),
    PRIMARY KEY (account_id)
);

create table calendar (
    calendar_id int,
    title varchar(100),
    description varchar(100),
    account_id int,		/*The user account that owns this calendar*/
    PRIMARY KEY (calendar_id),
    FOREIGN KEY (account_id) REFERENCES account(account_id)
);

create table task (
    task_id int,
    calendar_id int,		/*The calendar this is in*/
    title varchar(100),
    description varchar(500),
    date_created datetime,
    date_due datetime,
    priority int,
    PRIMARY KEY (task_id),
    FOREIGN KEY (calendar_id) REFERENCES calendar(calendar_id)
);

create table user_in_task (	/*For users being added to specific tasks*/
    account_id int,
    task_id varchar(100),
    FOREIGN KEY (account_id) REFERENCES account(account_id),
    FOREIGN KEY (task_id) REFERENCES task(task_id)
);


create table comment (		/*For comments to be posted on a task*/
    comment_id int,
    task_id int,		/*Which task*/
    account_id int,		/*Which user posted it*/
    date_posted datetime,
    content varchar(200),
    PRIMARY KEY (comment_id),
    FOREIGN KEY (task_id) REFERENCES task(task_id),
    FOREIGN KEY (account_id) REFERENCES account(account_id)
);

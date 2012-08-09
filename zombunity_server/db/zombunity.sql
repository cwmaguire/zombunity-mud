create memory table msg_to_client
(id integer generated always as identity (start with 1) primary key,
json varchar(500) not null);

create memory table msg_to_server
(id integer generated always as identity (start with 1) primary key,
json varchar(500) not null);

create memory table login_state
(conn_id bigint,
login varchar(100),
num_logins tinyint,
num_passwords tinyint);

create memory table user
(id integer generated always as identity (start with 1) primary key,
login varchar(100) not null,
password varchar(100) not null,
unique (login));

insert into user (login, password) values ('a','b');

create memory table chat_msg
(id integer generated always as identity (start with 1) primary key,
msg CLOB(1K) not null);

commit;

 create table bx_users(
     userid bigint primary key not null,
     username varchar(100) not null,
     city varchar(100),
     country varchar(100),
     age int,
     sex varchar(10),
     password varchar(100),
     role varchar(100));

 create table bx_books(
     bookid bigint primary key not null,
     title varchar(300) not null,
     author varchar(300),
     publishdate varchar(300),
     press varchar(300),
     pic1 varchar(300),
     pic2 varchar(300),
     pic3 varchar(300),
     cid bigint not null,
     cname varchar(300),
     unitprice double(6,2),
     description TEXT,
     catalog TEXT,
     content TEXT,
     status int);

 create table bx_category(
     cid int primary key not null,
     cname varchar(100) not null,
     cname2 varchar(100) not null);

 create table bx_book_ratings(
     userid bigint not null,
     bookid bigint not null,
     score int not null);

 create table bx_orders(
     orderid bigint primary key not null,
     userid bigint not null,
     status int not null,
     orderdate varchar(100) not null,
     subtotal double(10,2) not null);

 create table bx_orderitems(
     bookid bigint not null,
     orderid bigint not null,
     unitprice double(6,2) not null,
     quantity int not null,
     modifydate varchar(100) not null,
     score int not null);

 create table bx_clickstream_log(
     ipaddress varchar(200),
     uniqueid varchar(200),
     url varchar(200),
     sessionid varchar(200),
     sessiontimes varchar(200),
     areaaddress varchar(200),
     localaddress varchar(200),
     browsertype varchar(200),
     operationsys varchar(200),
     referurl varchar(200),
     receivetime varchar(200),
     userid varchar(200),
     csvp varchar(200));
DROP TABLE IF EXISTS bx_users;
CREATE TABLE bx_users(
    id INT(11) NOT NULL AUTO_INCREMENT  COMMENT '用户ID' ,
    username VARCHAR(100) NOT NULL   COMMENT '用户名' ,
    password VARCHAR(100) NOT NULL   COMMENT '用户密码' ,
    register_time TIMESTAMP NOT NULL  DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间' ,
    update_time TIMESTAMP NOT NULL  DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间' ,
    age TINYINT    COMMENT '年龄' ,
    sex VARCHAR(10)    COMMENT '性别' ,
    PRIMARY KEY (id)
)  COMMENT = '用户表';

DROP TABLE IF EXISTS bx_addresses;
CREATE TABLE bx_addresses(
    id INT(11) NOT NULL AUTO_INCREMENT  COMMENT '地址ID' ,
    uid INT(11) NOT NULL   COMMENT '用户ID' ,
    country VARCHAR(100)    COMMENT '国家' ,
    city VARCHAR(100)    COMMENT '市' ,
    district VARCHAR(100) NOT NULL   COMMENT '区' ,
    street VARCHAR(100) NOT NULL   COMMENT '街道' ,
    province VARCHAR(100) NOT NULL   COMMENT '省' ,
    detail_address VARCHAR(100) NOT NULL   COMMENT '具体地址' ,
    post_code VARCHAR(20) NOT NULL   COMMENT '邮编' ,
    CREATE_TIME TIMESTAMP NOT NULL  DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间' ,
    UPDATE_TIME TIMESTAMP NOT NULL  DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间' ,
    PRIMARY KEY (id,uid,district,street,province,detail_address,post_code)
)  COMMENT = '收货地址表';

DROP TABLE IF EXISTS bx_orders;
CREATE TABLE bx_orders(
    id INT(11) NOT NULL AUTO_INCREMENT  COMMENT '订单ID' ,
    uid INT(11) NOT NULL   COMMENT '下单用户ID' ,
    status INT(11) NOT NULL   COMMENT '订单状态' ,
    order_date DATETIME NOT NULL  DEFAULT CURRENT_DATETIME COMMENT '创建时间' ,
    update_date DATETIME NOT NULL  DEFAULT CURRENT_DATETIME COMMENT '更新时间' ,
    add_id INT(11)    COMMENT '收货地址ID' ,
    total_price DOUBLE    COMMENT '总金额' ,
    PRIMARY KEY (id)
)  COMMENT = '订单表';

DROP TABLE IF EXISTS bx_category;
CREATE TABLE bx_category(
    id INT(11) NOT NULL AUTO_INCREMENT  COMMENT '类别ID' ,
    cname1 VARCHAR(100) NOT NULL   COMMENT '类别名称1' ,
    cname2 VARCHAR(100)    COMMENT '类别名称2' ,
    PRIMARY KEY (id)
)  COMMENT = '分类表';

DROP TABLE IF EXISTS bx_books;
CREATE TABLE bx_books(
    id INT(11) NOT NULL AUTO_INCREMENT  COMMENT '书籍ID' ,
    title VARCHAR(100)    COMMENT '书名' ,
    describe TEXT    COMMENT '简介' ,
    pic1 VARCHAR(300)    COMMENT '封面URL' ,
    author VARCHAR(100)    COMMENT '作者' ,
    price DOUBLE    COMMENT '单价' ,
    press VARCHAR(100)    COMMENT '出版社' ,
    publish_date VARCHAR(100)    COMMENT '出版日期' ,
    rating DOUBLE    COMMENT '评分' ,
    comment_num INT(11)    COMMENT '评价数量' ,
    book_id INT(11)    COMMENT '书号' ,
    PRIMARY KEY (id)
)  COMMENT = '书籍表';

DROP TABLE IF EXISTS bx_comment;
CREATE TABLE bx_comment(
    id INT(11) NOT NULL AUTO_INCREMENT  COMMENT '评价ID' ,
    uid INT(11) NOT NULL   COMMENT '用户ID' ,
    book_id INT(11) NOT NULL   COMMENT '书号' ,
    CREATED_TIME TIMESTAMP NOT NULL  DEFAULT CURRENT_TIMESTAMP COMMENT '评价时间' ,
    content TEXT    COMMENT '评价内容' ,
    rating DOUBLE    COMMENT '评分' ,
    PRIMARY KEY (id)
)  COMMENT = '评价表';


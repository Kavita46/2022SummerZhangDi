# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class ScrapyBookItem(scrapy.Item):

    # 图书id、书名、作者、出版日期、出版社、小图、中图、大图、类别id、类别名称、单价

    # 豆瓣图书ID
    bookid= scrapy.Field();
    # 书名
    title = scrapy.Field()
    # 作者
    author = scrapy.Field()
    # 出版日期
    publishdate = scrapy.Field()
    # ISBN
    isbn = scrapy.Field()

    info = scrapy.Field()
    # 出版社
    press = scrapy.Field()
    # 小图
    pic1= scrapy.Field()
    # 中图
    pic2 = scrapy.Field()
    # 大图
    pic3 = scrapy.Field()
    # 类别id
    cid = scrapy.Field()
    # 类别名称
    cname = scrapy.Field()
    # 单价
    unitprice = scrapy.Field()
    # 图书一句话描述
    describle = scrapy.Field()

    commentnum = scrapy.Field();

    rating = scrapy.Field()

    sub_url = scrapy.Field()
    img = scrapy.Field()
    score = scrapy.Field()
    num = scrapy.Field()

    catalog=scrapy.Field()

    content=scrapy.Field()

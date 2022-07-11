# -*- coding: utf-8 -*-
import scrapy

from scrapy_book.items import ScrapyBookItem
import time
import random


class SpiderForXPath(scrapy.Spider):
    name = 'spider_xpath_douban'
    def start_requests(self):
        for a in range(10):
            url = 'https://book.douban.com/top250?start={}'.format(a * 25)
            yield scrapy.Request(url=url,callback=self.parse)

    #  cookies={'viewed':'"1083428"', '__utmv':'30149280.3975'},





    def parse(self, response):
        items = []
        # item[''] = book.xpath("") .extract_first().replace('\n', '').strip()
        for book in response.xpath('//*[@id="content"]/div/div[1]/div/table'):
            # print(book)
            item = ScrapyBookItem()

            title1 = book.xpath("./tr/td[2]/div[1]/a/@title").extract_first().replace('\n', '').strip()
            title2 = "无" if book.xpath("./tr/td[2]/div[1]/span/text()").extract_first() == None else book.xpath(
                "./tr/td[2]/div[1]/span/text()").extract_first().replace('\n', '').strip()
            item['title'] = title1
            item['pic1'] = book.xpath("./tr/td[1]/a/img/@src").extract_first().replace('\n', '').strip()
            item['describle'] = "无" if book.xpath("./tr/td[2]/p[2]/span/text()").extract_first() == None else book.xpath(
                "./tr/td[2]/p[2]/span/text()").extract_first().replace('\n', '').strip()

            info= book.xpath("./tr/td[2]/p[1]/text()").extract_first().replace('\n', '').strip()
            # 处理长标签info
            arr = (info.split(" / "))
            strLen = len(arr)
            if(strLen==4):
                item['author'] = arr[0]
                item['press'] = arr[1]
                item['publishdate'] = arr[2]
                item['unitprice'] = arr[3]
            elif(strLen==5):
                item['author'] = arr[0]+'/'+ arr[1]
                item['press'] = arr[2]
                item['publishdate'] = arr[3]
                item['unitprice'] = arr[4]

            #
            # item['info'] = book.xpath("./tr/td[2]/p[1]/text()").extract_first().replace('\n', '').strip()
            # item['cid'] = 0

            item['rating'] =book.xpath("./tr/td[2]/div[2]/span[2]/text()").extract_first().replace('\n', '').strip()
            item['commentnum'] = book.xpath("./tr/td[2]/div[2]/span[3]/text()").extract_first().replace('\n', '').replace("(","").replace(")","").replace("人评价","").strip()
            # item['author'] = book.xpath("./tr/td[2]/p[1]").extract_first().replace('\n', '').strip()

            sub_url = book.xpath("./tr/td[2]/div/a/@href").extract_first().replace('\n', '').strip()
            items.append(item)
            item['bookid'] = sub_url.replace("https://book.douban.com/subject/", "").replace("/>", "").replace("/", "")


            # meta={"item":item} 传递item引用SinaItem对象
            # time.sleep(random.random()*5)

            # 这个版本不进入子页面
            yield scrapy.Request(url=sub_url, callback=self.parse_second, meta={"item": item})
            # yield scrapy.Request(url=sub_url,  meta={"item": item})


    def parse_second(self, response):
        # for info in response.xpath('//*[@id="info"]'):
        #     print(info)
            item = response.meta["item"]
            # item['author'] = info.xpath("./span[1]/a/text()").extract_first()
            # .extract_first().replace('\n', '').strip()
            # item['publishdate'] = info.xpath("./text()[1]").extract_first().replace('\n', '').strip()
            # item['unitprice'] = info.xpath("./span[3]/following-sibling::text()[1]").extract_first().replace('\n', '').strip()
            # item['isbn'] = info.xpath("./text()[6]").extract_first().replace('\n', '').strip()
            # item['press'] = info.xpath("./a[1]/text()").extract_first()
            # author 报错， press 不正确
            # book = response.xpath('//div[@class="indent"]/div').extract_first()
            # item["author"] = book.xpath("./div[1]/a[1]/text()").extract_first().replace('\n', '').strip()
            # item["publisher"] = book.xpath("./div[1]/a/@href").extract_first().replace('\n', '').strip()
            # item["pub_date"] = book.xpath("./div[1]/a/@href").extract_first().replace('\n', '').strip()
            # item["price"] = book.xpath("./div[1]/a/@href").extract_first().replace('\n', '').strip()
            # item["m_img"] = book.xpath("./div[1]/a/@href").extract_first().replace('\n', '').strip()
            # item["b_img"] = book.xpath("./div[1]/a/@href").extract_first().replace('\n', '').strip()
            # item["isbn"] = book.xpath("./div[2]/a[1]/text()").extract_first().replace('\n', '').strip()
            yield item
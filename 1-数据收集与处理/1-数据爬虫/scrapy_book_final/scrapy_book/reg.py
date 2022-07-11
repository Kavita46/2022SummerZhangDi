string  = "https://book.douban.com/subject/25985021/>"


string = string.replace("https://book.douban.com/subject/", "").replace("/>", "")

print(string)

print(len(string))

str1 = '[清] 曹雪芹 著 / 人民文学出版社 / 1996-12 / 59.70元'
str2 = '阿·柯南道尔 / 丁钟华 等 / 群众出版社 / 1981-8 / 53.00元/68.00元'
str3 = 'J.K.罗琳 (J.K.Rowling) / 苏农 / 人民文学出版社 / 2008-12-1 / 498.00元'


def funstr(str):
    arr = (str.split(" / "))
    strLen = len(arr)
    if(strLen==4):
        author = arr[0]
        press = arr[1]
        publishdate = arr[2]
        price = arr[3]
        print(author)
        print(press)
        print(publishdate)
        print(price)
    elif(strLen==5):
        author = arr[0]+'/' + (arr[1])
        press = arr[2]
        publishdate = arr[3]
        price = arr[4]
        print(author)
        print(press)
        print(publishdate)
        print(price)




        # author = arr[0]+arr[1],
        # press= arr[2],
        # publishdate=arr[3],
        # unitprice=arr[4]

        # print(author.toString())

    # print(author)
    # print(press)
    # print(publishdate)
    # print(unitprice)

    return

funstr(str1)
funstr(str2)
funstr(str3)






#
# str3 = '阿·柯南道尔 / 丁钟华 等 / 群众出版社 / 1981-8 / 53.00元/68.00元'
# arr=str3.split(' / ')
#
# a = arr[0]
# print(a)
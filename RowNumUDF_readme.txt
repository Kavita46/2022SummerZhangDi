rownum函数的实现在src\main\java\com\udf下的HiveDedupUDF.java

用于对整个结果集进行分组排序，加上限制条件ROWNUM=1，过滤重复的数据。
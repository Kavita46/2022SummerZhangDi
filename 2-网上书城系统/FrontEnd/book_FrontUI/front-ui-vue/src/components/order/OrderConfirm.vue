<!-- 我的页面 -->
<template>
  <body>
    <div class="header-box">
        <div class="header">
            <div class="h-module1">
                <div class="left-logo"></div>
                <div class="right-login">
                    <div class="login-a">
                        <a href="../1-zh-login.html">登录</a>
                        <div class="vline"></div>
                        <a href="../1-zh-register.html">注册</a>
                    </div>
                    <input type="text" placeholder="热门搜索：小王子" maxlength="16">
                    <a href="../4-userCenter-myCenter.html" class="user"></a>
                    <a href="" class="QRcode">
                        <div class="QRcode-img"></div>
                    </a>
                    <a href="3-dy-shoppingCart.html" class="shopping-card"></a>
                </div>
            </div>
            <div class="h-module2">
                <div class="list-nav">
                    <ul>
                        <li>
                            <a href="../2-index.html" class="achange">首页</a>
                            <div class="line"></div>
                        </li>
                        <li>
                            <a href="../2-index.html" class="achange">所有图书</a>
                            <div class="line"></div>

                        </li>
                        <li>
                            <a href="../2-bottles.html" class="achange">教育</a>
                            <div class="line"></div>
                        </li>
                        <li>
                            <a href="" class="achange">小说</a>
                            <div class="line"></div>
                            <div class="sub_nav"></div>
                        </li>
                        <li>
                            <a href="" class="achange">文艺</a>
                            <div class="line"></div>
                            <div class="sub_nav"></div>
                        </li>
                        <li>
                            <a href="" class="achange">童书</a>
                            <div class="line"></div>
                            <div class="sub_nav"></div>
                        </li>
                        <li>
                            <a href="" class="achange">人文社科</a>
                            <div class="line"></div>
                            <div class="sub_nav"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    

    <div class="title">
        <p>订单确认</p>
        <div class="title1">
            <img src="" alt="">
        </div>
    </div>
    <div class="containe">
        <div class="box1">
            <p>收件信息 
                <a href="">新增地址</a>
            </p>
            <div class="box2">
                <div class="item">
                    <div class="item1">
                        <p>张三 【默认地址】</p>
                        <p class="p"><a href="">删除 | 编辑 </a></p>
                    </div>
                    <div class="item2">
                        <p>北京市 海淀区 北京交通大学</p>
                        <p>157xxxxxxxx</p>
                    </div>
                </div>
                <div class="item">
                    <div class="item1">
                        <p>张三　　　 　设为默认</p>
                        <p class="p"><a href="">删除 | 编辑 </a></p>
                    </div>
                    <div class="item2">
                        <p>北京市 海淀区 北京交通大学</p>
                        <p>157xxxxxxxx</p>
                    </div>
                </div>
                <div class="item">
                    <div class="item1">
                        <p>张三1 　　　　设为默认</p>
                        <p class="p"><a href="">删除 | 编辑 </a></p>
                    </div>
                    <div class="item2">
                        <p>北京市 海淀区 北京交通大学</p>
                        <p>157xxxxxxxx</p>
                    </div>
                </div>
            </div>
        </div>
  
        <div class="box2">
            <p>支付方式</p>
            <div class="item">
                <img src="../images/k1.png" alt="">
            </div>
            <div class="item">
                <img src="../images/k2.png" alt="">
            </div>
            <div class="item">
                <img src="../images/k3.png" alt="">
            </div>
            <div class="item">
                <img src="../images/z4.png" alt="">
            </div>
        </div>
    </div>
    <div class="right">
        <p>订单内容
            <a href="">返回购物车</a>
        </p>
        <div class="box1">
            <div class="ph">
                <img src="../imgs/s111.jpg" alt="">
            </div>
            <div class="b1">
                <p class="b11">《少年读史记》</p>
                <p>颜色分类：烟灰色玻璃瓶</p>
                <p>数量：1</p>
            </div>
            <div class="b2">
                ￥69.9
            </div>
        </div>
        <div class="box1">
            <div class="ph">
                <img src="../imgs/s111.jpg" alt="">
            </div>
            <div class="b1">
                <p class="b11">《少年读史记》</p>
                <p>颜色分类：炮灰色玻璃瓶</p>
                <p>数量：1</p>
            </div>
            <div class="b2">
                ￥69.9
            </div>
        </div>
        <div class="box2">
            <div class="left1">
                <ul>
                    <li>商品金额:</li>
                    <li>优惠金额:</li>
                    <li>运费:</li>
                </ul>
            </div>
            <div class="right1">
                <ul>
                    <li>￥139.00</li>
                    <li>0.00</li>
                    <li>免运费</li>
                </ul>
            </div>
        </div>
        <div class="box3">
            <div class="left1">
                <ul>
                    <li>合计:</li>
                    
                </ul>
            </div>
            <div class="right1">
                <ul>
                    <li>￥139.00</li>
                </ul>
            </div>
        </div>
 <router-link
            to="/order/orderFinish"
            tag="button"
            replace
            active-class="laozhang"
            >去支付</router-link
          >


        <form action="3-ls-payFinish.html">
            <button>去支付</button>
        </form>
    </div>
    <div class="sidebar">
        <a href="3-dy-shoppingCart.html">
            <div class="icon_side1"></div>
        </a>
        <a href="">
            <div class="icon_side2">
                <div class="tel-box">400-xxx-xxxx</div>
            </div>
        </a>
        <a href="../4-userCenter-myCenter.html">
            <div class="icon_side3"></div>
        </a>
    </div>
    <div class="footer-box">
        <div class="footer-box1">
            <div class="guid">
                <div class="guid-x">
                    <div class="guid-img1"></div>
                    <div class="guid-text">7天无理由退货</div>
                </div>
                <div class="ver-line"></div>
                <div class="guid-x">
                    <div class="guid-img2"></div>
                    <div class="guid-text">15天免费换货</div>
                </div>
                <div class="ver-line"></div>
                <div class="guid-x">
                    <div class="guid-img3"></div>
                    <div class="guid-text">满599包邮</div>
                </div>
            </div>
        </div>
        <div class="footer-box2">
            <p>BookStore&copy;版权所有</p>
            <p>违法和不良信息举报电话：400-xxx-xxxx</p>
        </div>
    </div>
</body>
</template>

<script>

export default {
  components: {},
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {

  },
}
</script>

<style  scoped>

</style>

<style rel="stylesheet/scss" lang ='scss' scoped src = '../../static/scss/orderConfirm.scss'></style>

<template>
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
          <div class="guid-text">满199包邮</div>
        </div>
      </div>
    </div>
    <div class="footer-box2">
      <p>BookStore&copy;版权所有</p>
      <p>违法和不良信息举报电话：400-xxx-xxxx</p>
    </div>
  </div>
</template>


<script>
export default {

}
</script>


<style scoped>

 .footer-box {
    width: 100%;
    height: 100%;
    border-top: 1px solid gray;
    margin-top: 30px;
  }
  
  .footer-box .footer-box1 {
    width: 80%;
    height: 115px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  
  .footer-box .footer-box1 .guid {
    width: 100%;
    height: 53px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  
  .footer-box .footer-box1 .guid .guid-x {
    width: 175px;
    height: 53px;
    display: flex;
  }
  
  .footer-box .footer-box1 .guid .guid-x [class*=guid-img] {
    width: 53px;
    height: 53px;
  }
  
  .footer-box .footer-box1 .guid .guid-x .guid-img1 {
    background: url(../imgs/foot1.png) no-repeat center/contain;
  }
  
  .footer-box .footer-box1 .guid .guid-x .guid-img2 {
    background: url(../imgs/foot2.png) no-repeat center/contain;
  }
  
  .footer-box .footer-box1 .guid .guid-x .guid-img3 {
    background: url(../imgs/foot3.png) no-repeat center/contain;
  }
  
  .footer-box .footer-box1 .guid .guid-x .guid-img4 {
    background: url(../imgs/foot4.png) no-repeat center/contain;
  }
  
  .footer-box .footer-box1 .guid .guid-x .guid-text {
    width: 122px;
    height: 53px;
    font-size: 16px;
    line-height: 48px;
    text-align: center;
  }
  
  .footer-box .footer-box1 .guid .ver-line {
    width: 1px;
    height: 100%;
    background-color: gray;
  }
  
  .footer-box .footer-box2 {
    width: 100%;
    height: 100px;
    background-color: black;
    margin: 0 auto;
    overflow: hidden;
  }
  
  .footer-box .footer-box2 p {
    height: 22px;
    color: white;
    text-align: center;
  }
  
  .footer-box .footer-box2 p:nth-child(1) {
    margin-top: 30px;
  }

</style>
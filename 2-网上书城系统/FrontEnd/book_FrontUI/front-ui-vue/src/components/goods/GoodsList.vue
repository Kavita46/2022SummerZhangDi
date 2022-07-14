

<template>
  <div class="content">
    <router-link to="/goods/goodsDetail">
      <div class="commodity">
        <div class="comm-img">
          <div></div>
          <div></div>
        </div>
        <p>《少年读史记》</p>
        <p>&yen;&nbsp;58.00</p>
      </div>
    </router-link>

    <a href="./html/2-details-page1.html">
      <div class="commodity">
        <div class="comm-img comm-photo2">
          <div></div>
          <div></div>
        </div>
        <p>《白夜行》</p>
        <p>&yen;&nbsp;48.00</p>
      </div>
    </a>

    <a href="./html/2-details-page1.html">
      <div class="commodity">
        <div class="comm-img comm-photo3">
          <div></div>
          <div></div>
        </div>
        <p>《百年孤独》</p>
        <p>&yen;&nbsp;68.00</p>
      </div>
    </a>
    <a href="./html/2-details-page1.html">
      <div class="commodity">
        <div class="comm-img comm-photo4">
          <div></div>
          <div></div>
        </div>
        <p>《神奇校车》</p>
        <p>&yen;&nbsp;28.00</p>
      </div>
    </a>
    <a href="./html/2-details-page1.html">
      <div class="commodity">
        <div class="comm-img comm-photo5">
          <div></div>
          <div></div>
        </div>
        <p>《云边有个小卖部》</p>
        <p>&yen;&nbsp;48.00</p>
      </div>
    </a>
    <a href="./html/2-details-page1.html">
      <div class="commodity">
        <div class="comm-img">
          <div></div>
          <div></div>
        </div>
        <p>《少年读史记》</p>
        <p>&yen;&nbsp;58.00</p>
      </div>
    </a>
    <a href="./html/2-details-page1.html">
      <div class="commodity">
        <div class="comm-img comm-photo2">
          <div></div>
          <div></div>
        </div>
        <p>《白夜行》</p>
        <p>&yen;&nbsp;48.00</p>
      </div>
    </a>

    <a href="./html/2-details-page1.html">
      <div class="commodity">
        <div class="comm-img comm-photo3">
          <div></div>
          <div></div>
        </div>
        <p>《百年孤独》</p>
        <p>&yen;&nbsp;68.00</p>
      </div>
    </a>
    <a href="./html/2-details-page1.html">
      <div class="commodity">
        <div class="comm-img comm-photo4">
          <div></div>
          <div></div>
        </div>
        <p>《神奇校车》</p>
        <p>&yen;&nbsp;28.00</p>
      </div>
    </a>
    <a href="./html/2-details-page1.html">
      <div class="commodity">
        <div class="comm-img comm-photo5">
          <div></div>
          <div></div>
        </div>
        <p>《云边有个小卖部》</p>
        <p>&yen;&nbsp;48.00</p>
      </div>
    </a>
  </div>
</template>



<style>
.content {
  width: 90%;
  height: auto;
  /* border: 1px solid green; */
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.content > a {
  display: block;
  width: 268px;
  height: 320px;
  margin-left: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  border: 1px solid gray;
}
.commodity {
  width: 268px;
  height: 320px;
  /* border: 1px solid red; */
  text-align: center;
}
.commodity:hover {
  box-shadow: 1px 1px 10px gray, -1px -1px 5px gray;
}
.comm-img {
  width: 100%;
  height: 268px;
  background: url(../../imgs/s111.jpg) no-repeat center;
  position: relative;
}
.comm-img div:nth-child(1) {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  background-color: rgb(130, 177, 238, 0.3);
  transition: all 2s;
}
.comm-img:hover div:nth-child(1) {
  width: 100%;
  height: 100%;
}
.comm-img div:nth-child(2) {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  background-color: rgb(130, 177, 238, 0.3);
  transition: all 2s;
}
.comm-img:hover div:nth-child(2) {
  width: 100%;
  height: 100%;
}
.commodity p:nth-child(2) {
  color: black;
  font-size: 14px;
}
.commodity p:nth-child(3) {
  color: red;
  font-weight: bold;
  font-size: 18px;
}
.comm-photo2 {
  background: url(../../imgs/s222.jpg) no-repeat center;
}
.comm-photo3 {
  background: url(../../imgs/s333.jpg) no-repeat center;
}
.comm-photo4 {
  background: url(../../imgs/s444.jpg) no-repeat center;
}
.comm-photo5 {
  background: url(../../imgs/s555.jpg) no-repeat center;
}
</style>
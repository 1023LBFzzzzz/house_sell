<template>
  <div id="app">
    <div id="wrapper">

      <!-- ***************** - Header Top - ***************** -->

      <div id="header-top" class="clearfix">

        <section class="container clearfix">

          <div class="one-half">

            <ul class="contact-info clearfix">
              <li class="phone">+1 800 559 6580</li>
              <li class="email">
                <a href="mailto:info@companyname.com">info@companyname.com</a>
              </li>
            </ul>
            <!--/ .contact-info-->

          </div>
          <!--/ .one-half-->

          <div v-if="user===''">
            <div  class="one-half last">
              <ul data-description="Please choose your operation:" class="social-links clearfix">
                <li data-tooltip="注册" ><a href="/user/user_login.html">注册</a></li>
                <li data-tooltip="登录"><a href="/user/user_login.html">登录</a></li>
              </ul><!--/ .social-links-->
            </div><!--/ .one-fourth.last-->
          </div>

          <div v-if="user!==''">
            <div  class="one-half last">
              <ul data-description="Please choose your operation:" class="social-links clearfix">
                <li data-tooltip="退出"><a href="#" @click="out()" >退出</a></li>
                <li  ><span>{{user.cus_name}}</span></li>
              </ul><!--/ .social-links-->
            </div><!--/ .one-fourth.last-->
          </div>
          <!--/ .one-fourth.last-->

        </section>
        <!--/ .container-->

        <a href="#" id="more"></a>

      </div>
      <!--/ #header-top-->
      <!-- ***************** - END Header Top - ***************** -->

      <!-- ***************** - Container - ***************** -->

      <section class="container">

        <!-- ***************** - Header - ***************** -->

        <header id="header" class="clearfix">

          <div class="m-head">
            <div class="name f-fl" >
              <h1 class="title" style="margin-top: 50px;">{{premise.premises_name }}</h1>
            </div>
            <div class="enlist f-fr">
              <dl>

                <dd>
                  <p><span>已有<i class="s-fc1">{{premise.attention_number}}</i>人关注</span>
                  </p>

                </dd>
              </dl>
            </div>
          </div>
<!--          <div class="m-nav2">-->
<!--            <ul>-->
<!--              <li  class="this"><a :href="'/premises/premises_info.html?premise_id='+premise_id+''">租房信息主页</a>-->
<!--              </li>-->
<!--              <li ><a :href="'/premises/premises_detail.html?premise_id='+premise_id+''">详细信息</a>-->
<!--              </li>-->
<!--              <li ><a :href="'/premises/premises_dynamics.html?premise_id='+premise_id+''">租房信息动态</a>-->
<!--              </li>-->
<!--              <li><a :href="'/premises/premises_renderings.html?premise_id='+premise_id+''">户型图</a>-->
<!--              </li>-->
<!--              <li><a :href="'/premises/premises_photo.html?premise_id='+premise_id+''">租房信息相册</a>-->
<!--              </li>-->
<!--              <li><a :href="'/premises/premises_remark.html?premise_id='+premise_id+''">租房信息点评</a>-->
<!--              </li>-->
<!--            </ul>-->
<!--            <div class="ck_info f-fr">资料仅供参考</div>-->
<!--          </div>-->

          <div class="header_bg" style="position: fixed; width: 100%; top: 0px; left: 0px; z-index: 999; display: block;" id="scrollHeader">
            <div class="detail_header clearfix">
              <div class="nav_l"> <a class="xz_logo" href="#">小猪</a>

                <ul id="scorllFather">
                  <li class="cur"> <a :href="'/premises/premises_info.html?premise_id='+premise_id+''">实拍照片</a>

                  </li>
                  <li class=""> <a :href="'/premises/premises_detail.html?premise_id='+premise_id+''">详细介绍</a>

                  </li>
                  <li class=""> <a :href="'/premises/premises_photo.html?premise_id='+premise_id+''">租房相册</a>

                  </li>
                  <li class=""> <a :href="'/premises/premises_dynamics.html?premise_id='+premise_id+''">预订须知</a>

                  </li>
                  <li class=""> <a :href="'/premises/premises_remark.html?premise_id='+premise_id+''">入住点评</a>
                  </li>
                </ul>
              </div>
              <div class="nav_r clearfix" id="scrollPrice">
                <div class="fl">¥<span class="detail_avgprice">112</span><em>起</em>
                </div>
                <div class="time_r">每晚</div>
              </div>
            </div>
          </div>

          <div class="dateil">
            <div class="focus" style="display: inline;"><span id="prev" class="btn prev"></span><span id="next" class="btn next"></span><span id="prevTop" class="btn prev"></span><span id="nextTop" class="btn next"></span>
              <div id="picBox" class="tab-bd">
                <ul style="width: 420px;">
                  <li class="mn">
                    <a :href="'/premises/premises_photo.html?premise_id='+premise_id+''">
                      <img :src="'/static/static/image/images/'+photo" width="420" height="262" alt="效果图" data-bd-imgshare-binded="1"  style="margin-top: 50px;">
                    </a>
                  </li>
                </ul>
              </div>
              <div id="listBox" class="tab-hd">
                <ul style="width: 122px;">
                  <li class="on">
                   <a href="/premises/premises_ar.html" target="_blank"><img :src="'/static/static/image/images/'+photo" width="95" height="72" data-bd-imgshare-binded="1"></a>
                    <p>效果图</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="meta" style="float: right;width: 500px;margin-top: 50px;">
              <ul>
                <li class="price"><span class="tit"> 租赁价格： </span>
                  <p class="con"><span class="u-price"><b class="s-fc1" style="font-size: 36px;color: #5bb9f0;"> {{premise.premises_avgprice}} </b> 元/每晚&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b class="s-fc1" style="font-size: 36px;color: #5bb9f0;"> 2400 </b> 元/每月</span></p>
                </li>
                <!-- <li class="tuan"><span class="tit">租房优惠：</span>
                  <div class="con">
                    <p>立即预订，独享租房优惠。</p><span class="num"><i class="tb-icon"></i>已有8人参与</span>
                  </div>
                </li> -->
                <li><span class="tit">租房地址：</span>
                  <div class="con"><span class="adr">{{premise.position}} </span>
                    <a href="#zhoubianpeitao">[地图]</a>
                    <a class="alert-box-btn2" href="javascript:;" id="196shiliucaizhizhongxindz" onclick="a()"></a>
                    <div class="sendAddress alert-box alert-box2 post" style="display:none" data-action="/group_buy/group_buy_sign_in"><b style="left:160px;"></b><em class="send-closeBtn closeBtn" onclick="hidebox()">X</em>
                      <p>以下内容将通过短信的形式，免费发送到指定的手机：</p><strong>{{premise.premises_name}}地址为：{{premise.position}}，电话：{{premise.premises_tel}}</strong>
                      <input type="text" class="user-phone" name="mobile" v-model="premisePhone" maxlength="11" placeholder="请输入手机号码">
                      <input type="checkbox" class="xieyi" checked="" style="display: none">
                      <input type="submit" value="地址发送到手机" class="send" @click="sendMessage();">
                      <div class="z_xieye">
                        <label>
                          <input type="checkbox" class="xieyi" checked="">
                          <p class="tongyi">我已阅读并同意 <a style="margin-left:0; padding-left:0" href="http://user.loupan.com/home/pro" target="_blank">《租房信息网用户服务协议》</a>
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li><span class="tit">租房信息户型：</span>
                  <div class="con">
                    <p>一室一厅一卫</p>
                  </div>
                </li>

                <li><span class="tit">装修情况：</span>
                  <div class="con">精装修</div>
                </li>
                <!-- <li class="more">
                  <a :href="'/premises/premises_ar.html?premise_id='+premise_id+''">更多资料></a>
                </li> -->
              </ul>
              <div class="order_btn_container" >
             <div class="block">
                  <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    @change = "dateChange"
                    :picker-options="pickerOptions1"
                  >

                  </el-date-picker>
              </div>
                <a class="order_btn" href="#ongo" id="day_yuding"  @click="order" style="margin-top: 40px;">立即预订<span class="f14"></span></a>
              </div>

              <div class="new_icon">
                <div class="jiang-box alert-box post alert-box1" style="display: none;" data-action="/group_buy/group_buy_sign_in"><b></b><em class="jia-closeBtn closeBtn">X</em>
                  <p>填写真实手机号码，可第一时间免费获取【石榴财智中心】最新价格变动或租房信息动态</p>
                  <input type="text" class="user-phone" name="mobile" gbstyle="mobile" maxlength="11" placeholder="您的手机号">
                  <input type="hidden" name="house" value="7019553">
                  <input type="hidden" name="site_id" value="196">
                  <input type="hidden" name="group_buy_id" value="20005">
                  <input type="hidden" name="isapp" value="0">
                  <input type="button" value="降价通知我" class="send" onclick="tips_new(this);">
                  <div class="z_xieye">
                    <label>
                      <input type="checkbox" class="xieyi" checked="">
                      <p class="tongyi">我已阅读并同意 <a style="margin-left:0; padding-left:0" href="http://user.loupan.com/home/pro" target="_blank">《租房网用户服务协议》</a>
                      </p>
                    </label>
                  </div><i>请输入11位手机号码，为数字类型！</i>
                </div>
              </div>
            </div>
          </div>

        </header>
        <!--/ #header-->

        <!-- **************** - END Header - **************** -->


        <!--/ .content-wrapper-->


        <div class="loupan-peitao clearfixed mt22" id="zhoubianpeitao" style="margin-top: 30px;height:560px ;">
          <h2>{{premise.premises_name}}周边配套</h2>
          <div class="outer-box">
            <div id="container" class="container" style="height:490px ;"></div>
            <div id="mapList" class="map-list">
              <span class="item w-20 item-acitive">Office</span>
              <span class="item w-20">Gov</span>
              <span class="item w-20">Edu</span>
              <span class="item w-20">Life</span>
              <span class="item w-20">Other</span>
            </div>
            <div id="projectName" class="project-name">
              <span class="item item-acitive">Own</span>
              <span class="item">Conpetitor</span>
            </div>
            <div id="panelBox" class="scrollbar1 panel-box top-64">
              <div id="myList" class="myList"></div>
            </div>
          </div>
        </div>

        <div class="f5" style="margin-top: 30px;">
          <div class="m-mes">
            <div class="hd">
              <h2 class="tit">{{premise.premises_name}}租房信息评论</h2>
              <p>8人评论了该租房信息</p>
              <a href="/comment/7019553.html" class="more">更多 ></a>
            </div>
            <div class="scope">
              <div class="zhpf-left">
                <div class="zhpf-top1">
                  <h3>综合评价</h3>
                  <p>88</p><span>分</span>
                  <ul class="star">
                    <li></li>
                    <li></li>
                    <li class="half"></li>
                  </ul>
                </div>

              </div>
              <div class="zhpf-right">
                <a :href="'/premises/premises_remark.html?premise_id='+premise_id+''" class="yelp f-fr" target="_blank">写评论</a>
              </div>
            </div>
            <dl class="kf"><dt><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605326480098&di=955dcf47c60800d415f09155a6d5615d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D580e773405f431adbcd243317b37ac0f%2F50f2f9dde71190ef9c7f0079c71b9d16fffa60dc.jpg" width="48" height="48" data-bd-imgshare-binded="1"><span>小编点评</span></dt>
              <dd>据我了解，那一块儿的房租都在四五千左右。2500肯定是一间房子的房租。但是如果你对地点没有要求的话。九堡附近2000多也可以租到两居室的房子，有电梯的，车位自己到物业租。</dd>
            </dl>
            <div class="bd" id="UserZan">暂无评论</div>
          </div>
          <div class="m-rank">
            <div class="hd">
              <div class="tit">热评租房信息</div>
            </div>
            <div class="bd">
              <div class="item">
                <a href="#" class="img">
                  <img src="https://pic1.ajkimg.com/display/anjuke/ef5625f48c9816071355f6e4717e2292/600x450c.jpg?t=1&srotate=1" alt="恒大•" data-bd-imgshare-binded="1">
                </a>
                <div class="text">
                  <a href="#" class="t">西溪印象城</a>
                  <div class="p">256元</div>
                  <div class="s">
                    <ul class="star">
                      <li></li>
                      <li class="half"></li>
                    </ul>
                    <p>18.6分</p>
                  </div>
                  <div class="l">4条评论</div>
                </div>
              </div>
              <div class="item">
                <a href="#" class="img">
                  <img src="https://pic1.ajkimg.com/display/anjuke/1fa7722b11ccc3a4968c655f49d0104c/600x450c.jpg?t=1&srotate=1" alt="钱江世纪城" data-bd-imgshare-binded="1">
                </a>
                <div class="text">
                  <a href="#" class="t">钱江世纪城</a>
                  <div class="p">278元</div>
                  <div class="s">
                    <ul class="star">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li class="half"></li>
                    </ul>
                    <p>52.6分</p>
                  </div>
                  <div class="l">100条评论</div>
                </div>
              </div>
              <div class="item">
                <a href="#" class="img">
                  <img src="https://pic1.ajkimg.com/display/anjuke/48cb4fd6a49b01f4a97b4277df758f20/600x450c.jpg?t=1&srotate=1" alt="景瑞天赋" data-bd-imgshare-binded="1">
                </a>
                <div class="text">
                  <a href="#" class="t">景瑞天赋</a>
                  <div class="p">170元</div>
                  <div class="s">
                    <ul class="star">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li class="half"></li>
                    </ul>
                    <p>58.8分</p>
                  </div>
                  <div class="l">90条评论</div>
                </div>
              </div>
              <div class="item">
                <a href="#" class="img">
                  <img src="https://pic1.ajkimg.com/display/anjuke/5a8917cc65825c967d204be1b994ff13/600x450c.jpg?t=1&srotate=1" alt="万和国际龙湖天璞" data-bd-imgshare-binded="1">
                </a>
                <div class="text">
                  <a href="#" class="t">万和国际龙湖天璞</a>
                  <div class="p">280元</div>
                  <div class="s">
                    <ul class="star">
                      <li></li>
                      <li class="half"></li>
                    </ul>
                    <p>35.4分</p>
                  </div>
                  <div class="l">40条评论</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="f6" style="margin-top: 30px;">
          <div class="m-hd"><span href="#" class="f-fr"><a :href="'/premises/premises_photo.html?premise_id='+premise_id+''" class="more" target="_blank">更多></a></span>
            <h2 class="title">{{premise.premises_name}}相册</h2>
          </div>
          <div class="bd">
            <ul>
              <li v-for="(pho,index) in photoList" v-if="index<3">
                <a :href="'/premises/premises_photo.html?premise_id='+premise_id+''" target="_blank">
                  <img :src="'/static/static/image/images/'+pho" alt="测试" data-bd-imgshare-binded="1">
                  <p>效果图</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="f9" style="margin-top: 30px;">
          <div class="m-hd">
            <h2 class="title">你可能感兴趣</h2>
          </div>
          <div class="m-list-img">
            <div class="bd">
              <ul class="f-cb">
                <li v-for="pre in sameAreaList">
                  <a :href="'/premises/premises_info.html?premise_id='+pre.premises_id+''" target="_blank" class="img">
                    <img :src="'/static/static/image/images/'+dealPicture(pre.photo)" width="200" height="136" :alt="pre.premises_name" data-bd-imgshare-binded="1"><span class="tit">[{{sameArea}}] {{pre.premises_name}}</span>
                  </a>
                  <p><span class="f-fr"><i class="s-fc1">{{pre.attention_number}}</i>人关注</span><span>{{pre.premises_avgprice}}元/晚</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- ************* - Main Footer - *************** -->

        <footer id="footer" class="clearfix">

          <div class="one-half">

            <nav id="footer-nav" class="clearfix">
              <ul>
                <li class="current">
                  <a href="/index.html">首页</a>
                </li>
                <li>
                  <a href="/premises/premises_find.html">租房信息</a>
                </li>
                <li>
                  <a href="/news/news_info.html">闲居要闻</a>
                </li>
              </ul>
            </nav>
            <!--/ #footer-nav-->

            <div class="copyright">&copy; 2019 Lucent. All rights reserved.</div>
            <!--/ .copyright-->

          </div>
          <!--/ .one-half-->

          <div class="one-half last">

            <ul data-description="Stay in touch via social networks:" class="social-links">
              <li data-tooltip="LinkedIn" class="linked">
                <a href="#">LinkedIn</a>
              </li>
              <li data-tooltip="Flickr" class="flickr">
                <a href="#">Flickr</a>
              </li>
              <li data-tooltip="Twitter" class="twitter">
                <a href="#">Twitter</a>
              </li>
              <li data-tooltip="Facebook" class="facebook">
                <a href="#">Facebook</a>
              </li>
              <li data-tooltip="Rss" class="rss">
                <a href="#">Rss</a>
              </li>
            </ul>
            <!--/ .social-links-->

          </div>
          <!--/ .one-half.last-->

        </footer>

        <!-- ************ - END Footer - ************ -->

      </section>
      <!--/ .container-->

      <!-- *************** - END Container - *************** -->

      <!-- ************ - Footer Bottom - ************ -->

      <footer id="footer-bottom">

        <a href="#" id="footer-more"></a>

        <section class="container panel clearfix">

          <div class="one-half">
            <div class="widget-text">
              <h1>About Us</h1>
              <p>
                Quisque diam lorem, interdum vitae,dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis.
              </p>
            </div>
            <!--/ .widget-text-->
          </div>
          <!--/ .one-half-->

          <div class="one-fourth">
            <div class="widget-flickr">
              <h1>From Flickr</h1>
              <ul id="flickr-badge" class="clearfix"></ul>
            </div>
            <!--/ .widget-flickr-->
          </div>
          <!--/ .one-fourth-->

          <div class="one-fourth last">
            <div id="signup">
              <h1>Join to Our Newsletter</h1>
              <form method="post" action="/" id="signup_form">
                <fieldset>
                  <label for="s-email">Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet.</label>
                  <input type="text" placeholder="Enter your email address" name="s-email" id="s-email" />
                  <input type="submit" name="signup_submit" id="signup_submit" value="Submit" />
                </fieldset>
              </form>
              <!--/ #signup_form-->
            </div>
            <!--/ #signup -->
          </div>
          <!--/ .one-fourth.last-->

        </section>
        <!--/ .container-->
      </footer>
      <!--/ #footer-bottom-->

      <!-- ************ - END Footer - ************ -->

    </div>
  </div>
</template>

<script>
import {format} from "silly-datetime";
  export default {
    name: 'app',
  //  页面加载之前
    data () {
      return {
        premise_id:'',
        premise: '',
        dynamic: [],
        pageIndex: 1,
        pageSize: 3,
        house: [],
        premisePhone:'',
        bookName:'',
        bookPhone:'',
        photo: '',
        photoList: [],
        sameArea: '',
        list: [],
        cityName: '',
        dateList: [],
        sameAreaList: '',
        phoneReg:/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/,
        user:'',
        value6:'',
        pickerOptions1: {
          disabledDate(time) {
              return time.getTime() < Date.now() - 8.64e7;
            //  return time < Date.now();
        },},
        startTime: '',
        endTime: ''

      }
    },
    methods:{
     order(){
            if(this.user === '') {
              var re = confirm("请先登录后再预订,是否继续?");
              if(re == false){
                  return;
              } else {
                window.location.href="/user/user_login.html";
              }
                return
            }
            if(this.startTime === "" || this.endTime === "") {
                this.$message.error('请选择预定日期  ');
                return
            }
             let params = {
                  startTime: this.startTime,
                  endTime: this.endTime,
                  premiseId: this.premise_id,
                  userId: this.user.cus_id
              }
              this.$http.post('/neusoft/premise/order/appoint', params).then(response => {
                  var res = response.body
                  if (res.isSuccess === 0) {
                     this.$message.success('预定成功');
                  } else if (res.isSuccess === 4) {
                    this.$message.error('预定失败');
                  } else {
                      this.list=null
                  }
              })
          },
     dateChange(e){
      this.startTime = format(e[0], 'YYYY-MM-DD');
      this.endTime =  format(e[1], 'YYYY-MM-DD');
     },
      parseUrl(){
        var url=location.href;
        var i=url.indexOf('?');

        if(i===-1)return;
        var querystr=url.substr(i+1);
        var arr1=querystr.split('&');

        var arr2=new Object();
        for  (i in arr1){
          var ta=arr1[i].split('=');
          arr2[ta[0]]=ta[1];
        }
        var a=arr2['premise_id'].split('#');
       this.premise_id = a[0]
      },
      init () {
        var params={
          premise_id: this.premise_id
        }
        this.$http.post('/neusoft/premise/premise/getById', params).then(response => {
          var res = response.body
          if (res.isSuccess === 0) {
            this.premise = res.result.premises
            let list =  res.result.list
            this.pickerOptions1 = {
                disabledDate(time) {
                  if(list.length !== 0) {
                     return time.getTime()<(new Date(list[0].endTime)).valueOf() && time.getTime() > (new Date(list[0].startTime)).valueOf()- 8.64e7 || time.getTime() < Date.now() - 8.64e7;
                  } else {
                     return time.getTime() < Date.now() - 8.64e7;
                  }
                },
            }
            let str = this.premise.photo.split('|')
            this.photoList = this.premise.photo.split('|')
            this.photo = str[0]
            var area = this.premise.position.split('|')
            this.cityName = area[1]
            this.sameArea = area[2].substring(0,2)
          } else if (res.isSuccess === 4) {
          } else {
            this.premise=null
          }
        })
        params={
          premise_id: this.premise_id,
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        }
        this.$http.post('/neusoft/premise/dynamic/getDynamic.htm', params).then(response => {
          var res = response.body
          if (res.isSuccess === 0) {
            this.dynamic = res.result.content

          } else if (res.isSuccess === 4) {
          } else {
            this.dynamic=null
          }
        })

        params={
          premise_id: this.premise_id,
          pageIndex: this.pageIndex,
          pageSize: 10
        }
        this.$http.post('/neusoft/premise/house/getHouse.htm', params).then(response => {
          var res = response.body
          if (res.isSuccess === 0) {
            this.house = res.result.content

          } else if (res.isSuccess === 4) {
          } else {
            this.house=null
          }
        })
        var params = {
          premise_id: this.premise_id,
          token: this.token,
          pageIndex: 1,
          pageSize: 8,
        }
        this.$http.post('/neusoft/premise/premise/getSamePremise', params).then(response => {
          var res = response.body
          if (res.isSuccess === 0) {
            this.list = res.result.content
          } else if (res.isSuccess === 4) {
          } else {
            this.list=null
          }
        })
       params = {
          premise_id: this.premise_id,
          token: this.token,
          pageIndex: 1,
          pageSize: 8,
        }
        this.$http.post('/neusoft/premise/premise/getDatePremise', params).then(response => {
          var res = response.body
          if (res.isSuccess === 0) {
            this.dateList = res.result.content
          } else if (res.isSuccess === 4) {
          } else {
            this.list=null
          }
        })

        params = {
          premise_id: this.premise_id,
          token: this.token,
          pageIndex: 1,
          pageSize: 5,
        }
        this.$http.post('/neusoft/premise/premise/getInterPremise', params).then(response => {
          var res = response.body
          if (res.isSuccess === 0) {
            this.sameAreaList = res.result.content
          } else if (res.isSuccess === 4) {
          } else {
            this.list=null
          }
        })
      },
      booking(){
        if (this.bookName==='') {
          alert(" 请输入您的姓名");
          return false;
        }
        if (!this.phoneReg.test(this.bookPhone)) {
          alert(" 请输入有效的手机号码");
          return false;
        }
        var params={
          premise_name: this.premise.premises_name,
          premise_id: this.premise_id,
          bookName: this.bookName,
          bookPhone:this.bookPhone
        }
        this.$http.post('/neusoft/premise/premise/sendAppoint', params).then(response => {
          var res = response.body
          if (res.isSuccess === 0) {
            alert("发送成功");
          } else {
            alert("发送失败");
          }
        })
      },
      sendMessage(){
        if (!this.phoneReg.test(this.premisePhone)) {
          alert(" 请输入有效的手机号码");
          return false;
        }
        var params={
          premise_name: this.premise.premises_name,
          address: this.premise.position,
          tel:this.premise.premises_tel,
          phone:this.premisePhone
        }
        this.$http.post('/neusoft/premise/premise/sendAddress', params).then(response => {
          var res = response.body
          if (res.isSuccess === 0) {
              alert("发送成功");
            $('.alert-box').hide();
          } else {
              alert("发送失败");
            $('.alert-box').hide();
          }
        })
      },
      dealAddress(address){
        var area = address.split('|')
       return area[2].substring(0,2)
      },
      dealPicture(pic){
        var picture = pic.split('|')

          return picture[0]


      },
      out(){
        sessionStorage.removeItem('user')
        window.location.href='/index.html'
      },
    },
    created() {

    },
  //  页面加载后
  mounted() {
    this.parseUrl();
    this.init();
    var user = sessionStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      this.user = user.user
      console.log(this.user)
    } else {
      this.$router.push({path: '/user/user_changepwd.html'})
    }
  }
}

</script>

<style scoped>
  .alert-box strong {
    display: block;
    width: 326px;
    height: 60px;
    background: #ffc;
    border: 1px solid #e1bf00;
    font-weight: normal;
    line-height: 20px;
    padding: 5px;
  }

  .sendAddress {
    z-index: 9999;
  }
  .alert-box {
    position: absolute;
    width: 336px;
    border: 1px solid #ccc;
    background: #fff;
    padding: 10px;
  }
  .alert-box .closeBtn {
    float: right;
    display: block;
    color: #666;
    font-size: 14px;
    position: absolute;
    top: 10px;
    right: 10px;
    text-align: center;
    display: block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    background: #f8f8f8;
    cursor: pointer;
    border: 1px solid #ccc;
  }
  .alert-box .send {
    width: 100px;
    height: 30px;
    background: #1b71e0;
    color: #fff;
    cursor: pointer;
    margin-top: 10px;
    border: 0;
  }
  .alert-box .user-phone {
    width: 219px;
    height: 30px;
    border: 1px solid #ccc;
    margin-top: 10px;
    padding-left: 10px;
  }
  .detail_header {
    width: 1240px;
    margin: 0 auto;
    height: 56px;
    filter: Alpha(opacity=90);
    opacity: 0.9;
  }
  .nav_l {
    float: left;
    width: 930px;
     background: #ef7384;
  }
  .nav_r {
    float: left;
    font-size: 14px;
    padding: 0 15px;
    width: 280px;
    background:  #ef7384;
    color: #fff;
  }
  .xz_logo {
    display: block;
    float: left;
    margin: 8px 22px 0 0;
    background: url(//jci.xiaozhustatic3.com/e19092901/images/detail/xz_epad.jpg) no-repeat;
    width: 84px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    text-indent: -9999px;
  }
  .nav_l ul {
    float: left;
    font: normal 16px/56px "Microsoft YaHei";
    color: #99acc0;
  }
  .nav_l li {
    float: left;
    text-align: center;
    width: 120px;
    color: #fff;
    cursor: pointer;
  }
  .nav_l li.cur, .nav_l li:hover {
    background: #f6c4c6;
  }
  .fl {
    float: left !important;
  }
  .time_r {
    line-height: 56px;
    float: right;
    font-family: "Microsoft YaHei"!important;
  }
  .header_bg {
    background: #ef7384;
    width: 100%;
  }
  .nav_l li a {
    color: #fff;
    text-decoration: none;
  }
  .nav_r span {
    font-size: 36px;
    font-family: "Tahoma";
  }
  .order_btn, .order_btn:hover, .order_btn_no {
    display: block;
    width: 280px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background: #5bb9f0;
    color: #fff;
    font-size: 18px;
    text-decoration: none;
  }
  .bd ul{
    display: flex;
    justify-content: space-between;
  }

</style>

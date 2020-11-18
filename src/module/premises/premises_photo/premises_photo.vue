<template>
  <div id="app">
    <div id="wrapper">


      <!-- ***************** - Header Top - ***************** -->
      <div id="header-top" class="clearfix">

        <section class="container clearfix">

          <div class="one-half">

            <ul class="contact-info clearfix">
              <li class="phone">+1 800 559 6580</li>
              <li class="email"><a href="mailto:info@companyname.com">info@companyname.com</a></li>
            </ul><!--/ .contact-info-->

          </div><!--/ .one-half-->

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

        </section><!--/ .container-->

        <a href="#" id="more"></a>

      </div><!--/ #header-top-->

      <!-- ***************** - END Header Top - ***************** -->


      <!-- ***************** - Container - ***************** -->

      <section class="container">


        <!-- ***************** - Header - ***************** -->

        <header id="header" class="clearfix">

          <div class="m-head">
            <div class="name f-fl">
              <h1 class="title" style="margin-top:50px;">{{premise.premises_name}}</h1>
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
          <div class="header_bg" style="position: fixed; width: 100%; top: 0px; left: 0px; z-index: 999; display: block;" id="scrollHeader">
            <div class="detail_header clearfix">
              <div class="nav_l"> <a class="xz_logo" href="#">小猪</a>

                <ul id="scorllFather">
                  <li> <a :href="'/premises/premises_info.html?premise_id='+premise_id+''">实拍照片</a>

                  </li>
                  <li> <a :href="'/premises/premises_detail.html?premise_id='+premise_id+''">详细介绍</a>

                  </li>
                  <li class="cur"> <a :href="'/premises/premises_photo.html?premise_id='+premise_id+''">租房相册</a>

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

        </header><!--/ #header-->

        <!-- **************** - end Header - **************** -->


        <div class="content-wrapper sbr clearfix">

          <div id="content">
            <div class="imglist">
              <div class="hd">
                <h1 class="title">{{premise.premises_name}}效果图</h1>
              </div>
              <ul id="jq22">
                <div class="bigbox">
                  <div class="imgbox"v-for="pho in photoList">
                    <li><i class="tb-icon u-sale z-show"></i><img style="width: 205px;height: 155px;" :src="'/static/static/image/images/'+pho"  alt="D1 4F" title="D1 4F"><p>户型: D1 4F</p></li>
                  </div>
                </div>
              </ul>

            </div>

            <!-- ************* - end Alert Boxes - **************** -->


          </div><!--/ #content-->

        </div>
        <!-- ********** - end Sidebar - ************ -->

        <!-- ************* - Main Footer - *************** -->

        <footer id="footer" class="clearfix">

          <div class="one-half">

            <nav id="footer-nav" class="clearfix">
              <ul>
                <li class="current"><a href="/index.html">首页</a></li>
                <li><a href="/premises/premises_find.html">租房信息</a></li>
                <li><a href="/news/news_info.html">闲居要闻</a></li>
              </ul>
            </nav><!--/ #footer-nav-->

            <div class="copyright">&copy; 2019 Lucent. All rights reserved.</div><!--/ .copyright-->

          </div><!--/ .one-half-->

          <div class="one-half last">

            <ul data-description="Stay in touch via social networks:" class="social-links">
              <li data-tooltip="LinkedIn" class="linked"><a href="#">LinkedIn</a></li>
              <li data-tooltip="Flickr" class="flickr"><a href="#">Flickr</a></li>
              <li data-tooltip="Twitter" class="twitter"><a href="#">Twitter</a></li>
              <li data-tooltip="Facebook" class="facebook"><a href="#">Facebook</a></li>
              <li data-tooltip="Rss" class="rss"><a href="#">Rss</a></li>
            </ul><!--/ .social-links-->

          </div><!--/ .one-half.last-->

        </footer>

        <!-- ************ - end Footer - ************ -->


      </section><!--/ .container-->

      <!-- *************** - end Container - *************** -->


      <!-- ************ - Footer Bottom - ************ -->

      <footer id="footer-bottom">

        <a href="#" id="footer-more"></a>

        <section class="container panel clearfix">

          <div class="one-half">
            <div class="widget-text">
              <h1>About Us</h1>
              <p>
                Quisque diam lorem, interdum vitae,dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia fermentum.
                Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit.
                Fusce euismod consequat ante.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis.
              </p>
            </div><!--/ .widget-text-->
          </div><!--/ .one-half-->

          <div class="one-fourth">
            <div class="widget-flickr">
              <h1>From Flickr</h1>
              <ul id="flickr-badge" class="clearfix"></ul>
            </div><!--/ .widget-flickr-->
          </div><!--/ .one-fourth-->

          <div class="one-fourth last">
            <div id="signup">
              <h1>Join to Our Newsletter</h1>
              <form method="post" action="/" id="signup_form">
                <fieldset>
                  <label for="s-email">Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet.</label>
                  <input type="text" placeholder="Enter your email address" name="s-email" id="s-email"/>
                  <input type="submit" name="signup_submit" id="signup_submit" value="Submit" />
                </fieldset>
              </form><!--/ #signup_form-->
            </div><!--/ #signup -->
          </div><!--/ .one-fourth.last-->

        </section><!--/ .container-->
      </footer><!--/ #footer-bottom-->

      <!-- ************ - end Footer - ************ -->


    </div><!--/ #wrapper-->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      premise_id:'',
      premise: '',
      dynamic: [],
      pageIndex: 1,
      pageSize: 3,
      house: [],
      bookName:'',
      bookPhone:'',
      photoList: [],
      phoneReg:/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/,
      user:''
    }
  },
  methods:{
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
    init (){
      var params={
        premise_id: this.premise_id
      }
      this.$http.post('/neusoft/premise/premise/getById', params).then(response => {
        var res = response.body
        if (res.isSuccess === 0) {
          this.premise = res.result.premises
          this.photoList = this.premise.photo.split('|')
        } else if (res.isSuccess === 4) {
        } else {
          this.premise=null
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
    dealTime(time){
      var date = new Date()
      var time1 = new Date(time).getTime();
      var time2 = new Date(date).getTime();
      var time3 = new Date(time)
      if(time1<time2){
        return "已开盘"
      }else{
        var year = time3.getFullYear();
        var month = time3.getMonth()+1;
        var day = time3.getDate();
        return year+"-"+month+"-"+day
      }
    },
    out(){
      sessionStorage.removeItem('user')
      window.location.href='/index.html'
    },
  },
  //  页面加载之前
  created() {
    this.parseUrl()
    this.init()
  },
  //  页面加载后
  mounted() {
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
    background: #f05b72;
    color: #fff;
    font-size: 18px;
    text-decoration: none;
  }
</style>

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
              <h1 class="title">{{premise.premises_name}}</h1>
              <ul>
                <li><i class="u-sell">在租</i>
                </li>
                <li><i class="u-icon">写字楼 </i>
                </li>
              </ul>
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
          <div class="m-nav2">
            <ul>
              <li ><a :href="'/premises/premises_info.html?premise_id='+premise_id+''">房屋主页</a>
              </li>
              <li ><a :href="'/premises/premises_detail.html?premise_id='+premise_id+''">详细信息</a>
              </li>
              <li ><a :href="'/premises/premises_dynamics.html?premise_id='+premise_id+''">房屋动态</a>
              </li>
              <li class="this"><a :href="'/premises/premises_renderings.html?premise_id='+premise_id+''">户型图</a>
              </li>
              <li><a :href="'/premises/premises_photo.html?premise_id='+premise_id+''">房屋相册</a>
              </li>
              <li><a :href="'/premises/premises_remark.html?premise_id='+premise_id+''">房屋点评</a>
              </li>
            </ul>
            <div class="ck_info f-fr">资料仅供参考</div>
          </div>

        </header><!--/ #header-->

        <!-- **************** - end Header - **************** -->


        <div class="content-wrapper sbr clearfix">
          <div id="content">
            <div class="imglist">
              <div class="hd">
                <h1 class="title">{{premise.premises_name}}户型图</h1>
              </div>
              <div class="bigbox">
                 <div v-for="hou in house"class="imgbox">
                   <li><i class="tb-icon u-sale z-show"></i><img :src="hou.rendings_pic" class="smallimg" alt="D1 4F" title="D1 4F"><p>户型: {{hou.house_number}} {{hou.house_floor}}F</p><p><span>面积: 约{{hou.house_area}}m²</span></p></li>
                 </div>
              </div>
              <img src="" alt="" class="bigimg">
              <div class="mask">
                <img src="../../../../static/assets/img/close.png" alt="">
              </div>
            </div>

            <!-- ************* - end Alert Boxes - **************** -->


          </div><!--/ #content-->


          <!-- ********** - Sidebar - ************ -->

          <aside id="sidebar" style="border: 1px solid #ddd;">
            <div class="bd sdc-imglist">
              <ul class="menu">
                <li><a :href="'/premises/premises_photo.html?premise_id='+premise_id+''"><span class="f-fr">{{photoList.length}}</span>效果图</a>
                </li>
                <li><a href="/photo/list-7019553-3.html"><span class="f-fr">7</span>实景图</a>
                </li>
                <li class="this"><a :href="'/premises/premises_renderings.html?premise_id='+premise_id+''"><span class="f-fr">{{total}}</span>户型图</a>
                </li>
              </ul>
              <ul class="info" style="width: 200px;">
                <li><b class="tit">参考均价: </b><span class="s-fc1">{{premise.premises_avgprice}}元/㎡</span><a class="u-push alert-box-btn1"  :data-house_name="premise.premises_name"><i class="tb-icon"></i>降价通知</a>
                  <div id="jiang-box" class="jiang-box alert-box post alert-box1"
                       style="display: none;">
                    <form id="house_dingyue_form" action="/group_buy/house_dingyue" method="post"><b></b><em class="jia-closeBtn closeBtn">X</em>
                      <p>填写真实手机号码，可第一时间免费获取【<span class="house_name"></span>】最新价格变动或房屋动态</p>
                      <input type="text" class="user-phone required" name="group[mobile]" gbstyle="mobile" maxlength="11" placeholder="请填写您的手机号码">
                      <input type="hidden" name="group[house]" value="">
                      <input type="hidden" name="group[site_id]" value="">
                      <input type="hidden" name="group[group_buy_id]" value="3">
                      <input type="button" value="降价通知我" class="send ajax_tg_submit" name="ajax_tg_submit"><i>请输入11位手机号码，为数字类型！</i>
                    </form>
                  </div>
                </li>
                <li><b class="tit">最新上架：</b>{{dealTime(premise.open_time)}}
                </li>
                <li><b class="tit">房屋地址：</b>{{premise.position}}</li>
              </ul>
            </div>
          </aside>

          <!-- ********** - end Sidebar - ************ -->


        </div><!--/ .content-wrapper-->


        <!-- ************* - Main Footer - *************** -->

        <footer id="footer" class="clearfix">

          <div class="one-half">

            <nav id="footer-nav" class="clearfix">
              <ul>
                <li class="current"><a href="/index.html">首页</a></li>
                <li><a href="/premises/premises_find.html">房屋</a></li>
                <li><a href="/news/news_info.html">房东的故事</a></li>
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
      house: [],
      pageIndex: 1,
      total: '',
      premise: '',
      photoList:'',
      user:''
    }
  },
  //  页面加载之前
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
    initList(){
     var params={
        premise_id: this.premise_id,
        pageIndex: this.pageIndex,
        pageSize: 6
      }
      this.$http.post('/neusoft/premise/house/getHouse.htm', params).then(response => {
        var res = response.body
        if (res.isSuccess === 0) {
          this.house = res.result.content
          this.total = res.result.totalElements
        } else if (res.isSuccess === 4) {
        } else {
          this.house=null
        }
      })
      params={
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
  created() {

  },
  //  页面加载后
  mounted() {
    this.parseUrl()
    this.initList()
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

<style>
</style>

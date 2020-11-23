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
              <div class="nav_l"> <a class="xz_logo" href="#">闲居</a>

                <ul id="scorllFather">
                  <li > <a :href="'/premises/premises_info.html?premise_id='+premise_id+''">实拍照片</a>

                  </li>
                  <li class=""> <a :href="'/premises/premises_detail.html?premise_id='+premise_id+''">详细介绍</a>

                  </li>
                  <li class=""> <a :href="'/premises/premises_photo.html?premise_id='+premise_id+''">租房相册</a>

                  </li>
                  <li class="cur"> <a :href="'/premises/premises_dynamics.html?premise_id='+premise_id+''">预订须知</a>

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


<!--        <div class="content-wrapper sbr clearfix">-->
<!--          <div class="g-mn time-list">-->
<!--            <div class="hd">-->
<!--              <a :href="'/premises/premises_dynamics.html?premise_id='+premise_id+''" class="cur">最新动态</a>-->
<!--              <p>-->
<!--               {{premise.premises_name}}最新动态-->
<!--              </p>-->
<!--            </div>-->
<!--            <div class="bd" id="load-timer">-->
<!--              <dl v-for="dyn in dynamic" >-->
<!--                <dt style="background-color: #1b71e0;color: white;width: 55px;">{{formatDate(dyn.off_createdate)}}</dt>-->
<!--                <dd>-->
<!--                  <div class="tit"><a :href="'/premises/premises_dynamics.html?premise_id='+premise_id+''" target="_blank">{{dyn.off_title}}</a></div>-->
<!--                  <p>-->
<!--                    {{dyn.off_content}}-->
<!--                    <a :href="'/premises/premises_dynamics.html?premise_id='+premise_id+''" target="_blank" rel="nofollow">[查看详细]</a></p>-->
<!--                </dd>-->
<!--              </dl>-->
<!--            </div>-->


<!--            &lt;!&ndash; ************* - end Lists - **************** &ndash;&gt;-->


<!--          </div>&lt;!&ndash;/ #content&ndash;&gt;-->


<!--          &lt;!&ndash; ********** - Sidebar - ************ &ndash;&gt;-->
<!--          &lt;!&ndash; ********** - end Sidebar - ************ &ndash;&gt;-->


<!--        </div>&lt;!&ndash;/ .content-wrapper&ndash;&gt;-->
       <div class="bg_box" id="rulesPart">
                <div class="clause_box">
                                        <h5>押金及其他费用</h5>
                                        <p>押金：

                                                500元

                                                <a href="https://www.xiaozhu.com/yunying/cashPledgeFree"><span class="zhima_deposit_noico">小猪担保免押 &gt;</span></a>

                        <br>
                                                                                            加客：不允许加客<br></p>
                                        <div class="clearfix">
                        其他额外费用：无                    </div>
                </div>

                <div class="clause_box">
                    <h5>预订方式</h5>
                    <p>
                                                下单需房东确认，确认后生成订单。<br>
                                                订单确认后，在线支付总房款的100%。<br>
                        额外的服务费用不包含在总房租内，由房东线下收取。<br>
                                            </p>
                </div>

                <div class="clause_box border_none1 new_order_h old_rule_wrap" style="display: none;">
                    <h5>退订规则
                                            </h5>
                                        <div class="order_h " style="display: block;">
                        <div class="order_bar">
                            <ul class="clearfix">
                                <li></li>
                            </ul>
                            <div class="order_tip1 pos_1">如取消订单，订金全部退还</div>
                            <div class="order_tip2 pos_2">如取消订单，扣除前1天的订金。                            </div>
                            <div class="order_tip2 pos_3">如提前退房，扣除之后 1天的订金。</div>
                            <div class="day_tip">
                                <span class="point1"></span>
                                <p id="pos_n_1">预订成功</p>
                            </div>
                            <div class="day_tip pos_4">
                                <span class="point1"></span>
                                <p id="pos_n_2">入住前1天14：00前</p>
                            </div>
                            <div class="day_tip pos_5">
                                <span class="point2"></span>
                                <p id="pos_n_3">入住当天 14：00前</p>
                            </div>
                            <div class="day_tip pos_6">
                                <span class="point3"></span>
                                <p id="pos_n_4">退房当天 12：00前</p>
                            </div>
                        </div>
                    </div>
                                        <div class="new_pos_notice">
                        根据房东设置的交易规则未早于<span class="new_pos_n2">入住日14：00 1天</span>退订视为有责取消
                        ，应扣除取消订单时间点后<span class="new_pos_n3"> 1</span>天订金作为违约金，剩余钱款将被原路退还
                    </div>
                </div>
                <div class="clause_box border_none1 new_order_h new_rule_wrap">
                    <h5>退订说明
                                            </h5>
                    <div class="rule_wrap" id="newCancelRule">
                        <ul class="rule_detail"><li><h3>入住前3天 14:00前 若取消订单，不扣除房费</h3></li><li><h3>入住前3天 14:00后 若取消订单，将扣除 100% 房费</h3></li></ul>
                        <ul class="rule_tips_wrap"></ul>
                    </div>
                    <ul class="rule_tips"></ul>
                </div>
            </div>

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
    init () {
      var params = {
        premise_id: this.premise_id
      }
      this.$http.post('/neusoft/premise/premise/getById', params).then(response => {
        var res = response.body
        if (res.isSuccess === 0) {
          this.premise = res.result.premises

        } else if (res.isSuccess === 4) {
        } else {
          this.premise = null
        }
      })
      params = {
        premise_id: this.premise_id,
        pageIndex: this.pageIndex,
        pageSize: 8
      }
      this.$http.post('/neusoft/premise/dynamic/getDynamic.htm', params).then(response => {
        var res = response.body
        if (res.isSuccess === 0) {
          this.dynamic = res.result.content

        } else if (res.isSuccess === 4) {
        } else {
          this.dynamic = null
        }
      })
    },
    formatDate (date){
      var value=new Date(date);
      var month=value.getMonth()+1;
      var day=value.getDate();
      return month+"月"+day+"日"
    },
    out(){
      sessionStorage.removeItem('user')
      window.location.href='/index.html'
    }
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

<style>
  .time-list dl {
    border-left: 1px solid #ddd;
    padding-left: 5px;
    padding-top: 15px;
  }
  .tb-icon {
    background-image: url(../../../../static/assets/img/shijian.png);
  }
 /* .time-list dt .tb-icon {
    position: absolute;
    left: -10px;
    background-position: 0 -113px;
    display: block;
    padding-left: 20px;
    width: 80px;
    height: 26px;
    line-height: 26px;
    color: #fff;
    text-align: center;

  }*/

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
  .clause_box h5 {
    font-size: 22px;
    color: #a5b0ba;
    padding: 25px 0 15px;
    font-weight: normal;
  }
  .clause_box {
    border-bottom: 1px solid #eee;
    margin: 0 70px 0 20px;
    padding-bottom: 20px;
  }
  .rule_wrap {
    background-color: #f5f5f5;
    display: block;
    padding: 20px 0;
  }
  .rule_wrap ul.rule_detail li:before {
    display: inline-block;
    content: "";
    background: url(//jci.xiaozhustatic3.com/e19092901/images/clock.png) no-repeat center;
    background-size: 100% 100%;
    width: 10px;
    height: 10px;
    position: absolute;
    left: 0px;
    top: 15px;
  }
  .rule_wrap ul li {
    padding: 10px 20px;
    position: relative;
    font-weight: bold;
  }
  .rule_wrap ul.rule_detail {
    margin: 0px 20px 0px 30px;
  }
  .zhima_deposit_noico {
    display: inline-block;
    height: 14px;
    line-height: 14px;
    color: #30c3a6;
    margin-left: 8px;
    cursor: pointer;
  }

/* body.light a > * {
    color: #50554e;
} */
  .bg_box {
    background: #fff;
}
.rule_wrap ul.rule_detail li:first-child:after {
    display: inline-block;
    content: "";
    width: 1px;
    height: 25px;
    background-color: #212121;
    position: absolute;
    top: 30px;
    left: 5px;
}
</style>

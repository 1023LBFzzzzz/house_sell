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

      <!-- ***************** - END Header Top - ***************** -->

      <!-- ***************** - Container - ***************** -->

      <section class="container">

        <!-- ***************** - Header - ***************** -->

        <header id="header" class="clearfix">

          <div id="logo">
            <h1><a href="index.html">宜家租房</a></h1>
            <!--/ .slogan-->
          </div>
          <!--/ #logo-->

          <nav id="navigation" class="navigation">
            <ul>
              <li><a href="/index.html">首页</a>
              </li>
              <li><a href="/premises/premises_find.html">房屋</a></li>
              <li class="current"><a href="/news/news_info.html">房东的故事</a>
              </li>


            </ul>
          </nav><!--/ #navigation-->
          <!--/ #navigation-->

        </header>

        <!-- **************** - end Header - **************** -->

        <div class="content-wrapper clearfix">
          <div class="article" style="margin-top: 20px;">
            <div class="hd">
              <h1 class="title">{{news.news_title}}</h1>
              <p class="meta"><span>{{createTimeStr(news.news_createdate)}}</span><span>来源：{{news.news_source}}</span><span><a href="#" target="_blank" class="cat"><i class="tb-icon"></i>{{news.news_type}}</a></span><b>责任编辑：暂无</b>
              </p>
            </div>
            <div class="g-wrap">
              <div class="g load-ad" id="A12622" data-adid="12622">
                <ul>
                  <li style="text-align: center; position: relative; display: list-item;" ad-data="广告">
                    <a style="width:840px;height:55px;position:absolute;top:0px;left:0px;display:block;z-index:2;" target="_blank"></a>
                    <img src="http://static.loupan.com/upfile2/media/20180808/20180808171434_28205.jpg" width="840" height="55">
                    <p style="position:absolute;margin:auto;left:0;right:0;bottom:5px;z-index:3;max-width:1180px;"><span style="display:block;line-height:14px;padding:0 1px;background:rgba(0,0,0,0.2);color:#fff;float:left;font-size:10px;">广告</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div id="A713" class="g250 load-ad" data-adid="713"></div>
            <div class="bd" id="ajax_all_page">
              <div v-html="news.news_content"></div>
            </div>
            <div class="copyright_info"><span><strong>免责声明：</strong>凡本站注明 “来自新闻稿件和图片作品，系本站转载自其它媒体，转载目的在于信息传递，并不代表本站赞同其观点和对其真实性负责。如有新闻稿件和图片作品的内容、版权以及其它问题的，请联系本站新闻中心，电话：4008180066 转 254896。</span>
            </div>
          </div>
        </div>
        <!--/ .content-wrapper-->

        <!-- ************* - Main Footer - *************** -->

        <footer id="footer" class="clearfix">

          <div class="one-half">

            <nav id="footer-nav" class="clearfix">
              <ul>
                <li class="current"><a href="/index.html">首页</a></li>
                <li><a href="premises@premises_find">房屋</a></li>
                <li><a href="features-typography.html">房东的故事</a></li>
                <li><a href="pages-about.html">问答</a></li>
              </ul>
            </nav><!--/ #footer-nav-->
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

        <!-- ************ - end Footer - ************ -->

      </section>
      <!--/ .container-->

      <!-- *************** - end Container - *************** -->

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

      <!-- ************ - end Footer - ************ -->

    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      news_id:'',
      news: '',
      user:''
    }
  },
  methods: {
    parseUrl() {
      var url = location.href;
      var i = url.indexOf('?');

      if (i === -1) return;
      var querystr = url.substr(i + 1);
      var arr1 = querystr.split('&');

      var arr2 = new Object();
      for (i in arr1) {
        var ta = arr1[i].split('=');
        arr2[ta[0]] = ta[1];
      }
      var a = arr2['news_id'].split('#');
      this.news_id = a[0]
    },
    init () {
      var params = {
        news_id: this.news_id
      }
      this.$http.post('/neusoft/news/news/getById', params).then(response => {
        var res = response.body
        console.log(res)
        if (res.isSuccess === 0) {
          this.news = res.result.news
        } else if (res.isSuccess === 4) {
        } else {
          this.news = null
        }
      })
    },
    createTimeStr (operationtime) {
      var d = new Date(operationtime)
      var year = d.getFullYear()
      var month = ((d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1))
      var date = (d.getDate() < 10 ? '0' + d.getDate() : d.getDate())
      return year + '年' + month + '月' + date + '日'
    },
  },
  out(){
    sessionStorage.removeItem('user')
    window.location.href='/index.html'
  },
  //  页面加载之前
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
    } else {
      this.$router.push({path: '/user/user_changepwd.html'})
    }
  }
}
</script>

<style>

</style>

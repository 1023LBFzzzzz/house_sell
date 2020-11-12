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
          <!-- <div class="search" style="margin-top: 20px;">
            <input type="text" name="q" maxlength="20"  v-model="news_title" placeholder="输入故事标题/关键词">
            <a href="javascript:;" target="_blank" id="home_so" @click="search()" style="color: #fff;">搜索</a>
          </div> -->
          <div class="m-list-new f-htab" style="float:left; ">
            <div class="tab-hd">
              <h1 class="tit"><span class="s-fc1"><a href="#">房东的故事 > </a><a href="#">故事屋</a></span></h1>
            </div>
            <ul class="bd">
              <li v-for="news in list">
                <a class="img" :href="'/news/news_content.html?news_id='+news.news_id+''">
                  <img v-if="news.news_picpath!=null" alt="" :src="'/static/static/image/'+news.news_picpath" width="156" height="106">
                </a>
                <div class="tit">
                  <a :href="'/news/news_content.html?news_id='+news.news_id+''" target="_blank">{{news.news_title}}</a>
                </div>
                <p>{{news.news_summary}}
                  <a :href="'/news/news_content.html?news_id='+news.news_id+''" target="_blank">[详细]</a>
                </p>
                <p class="time"><span class="f-fl">{{news.news_source}} <a href="#" target="_blank"><i class="tb-icon"></i>{{news.news_type}}</a></span>{{createTimeStr(news.news_createdate)}}</p>
              </li>
            </ul>
            <!-- </div> -->
            <div class="page"  v-show="show">
              <div class="pagelist">
                <span class="jump" :class="{disabled:pstart}" @click="upPage()">上一页</span>
                <span v-show="current_page>5" class="jump" @click="jumpPage(1)">1</span>
                <span class="ellipsis"  v-show="efont">...</span>
                <span class="jump" v-for="num in indexs" :class="{bgprimary:current_page===num}" @click="jumpPage(num)">{{num}}</span>
                <span class="ellipsis"  v-show="ebehind">...</span>

                <span :class="{disabled:pend}" class="jump" @click=" downPage()">下一页</span>
                <span v-show="current_page<pages-4" class="jump" @click="jumpPage(pages)">{{pages}}</span>

                <span class="jumppoint">跳转到：</span>
                <span class="jumpinp"><input type="text" v-model="changePage"></span>
                <span class="jump gobtn" @click="jumpPage(changePage)">GO</span>
              </div>
            </div>
            <!-- </div> -->
          </div>

        </div>
        <!--/ .content-wrapper-->

        <!-- ************* - Main Footer - *************** -->

        <footer id="footer" class="clearfix" style="margin-top: 0px;">

          <div class="one-half">

            <nav id="footer-nav" class="clearfix">
              <ul>
                <li class="current"><a href="/index.html">首页</a></li>
                <li><a href="/premises/premises_find.html">房屋</a></li>
                <li><a href="/news/news_info.html">房东的故事</a></li>
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
  //  页面加载之前
  data () {
    return {
      current_page: 1, //当前页
      pages: 0, //总页数
      changePage:'',//跳转页
      nowIndex:0,
      pageSize: 10,
      list:[],
      total: '',
      news_title: '',
      user:''

    }
  },
  computed:{
    show:function(){
      return this.pages && this.pages !==1
    },
    pstart: function() {
      return this.current_page === 1;
    },
    pend: function() {
      return this.current_page === this.pages;
    },
    efont: function() {
      if (this.pages <= 7) return false;
      return this.current_page > 5
    },
    ebehind: function() {
      if (this.pages <= 7) return false;
      var nowAy = this.indexs;
      return nowAy[nowAy.length - 1] !== this.pages;
    },
    indexs: function() {

      var left = 1,
        right = this.pages,
        ar = [];
      if (this.pages >= 7) {
        if (this.current_page > 5 && this.current_page < this.pages - 4) {
          left = Number(this.current_page) - 3;
          right = Number(this.current_page) + 3;
        } else {
          if (this.current_page <= 5) {
            left = 1;
            right = 7;
          } else {
            right = this.pages;

            left = this.pages - 6;
          }
        }
      }
      while (left <= right) {
        ar.push(left);
        left++;
      }
      return ar;
    }
  },
  methods: {
    initList(){
     var params = {
        news_title: this.news_title,
        token: this.token,
        pageIndex: this.current_page,
        pageSize: 10,
      }
      this.$http.post('/neusoft/news/news/getPage.htm', params).then(response => {
        var res = response.body
        if (res.isSuccess === 0) {
          this.list = res.result.content
          this.pages = res.result.totalPages
        } else if (res.isSuccess === 4) {
        } else {
          this.list=null
        }
      })
    },
    jumpPage: function(id) {
      this.current_page = id;
      this.list = null;
      this.pages = 0;
      this.initList()
    },
    upPage(){
      this.current_page--
      this.list = null;
      this.pages = 0;
      this.initList();
    },
    downPage(){
      this.current_page++
      this.list = null;
      this.pages = 0;
      this.initList();
    },
    createTimeStr (operationtime) {
      var d = new Date(operationtime)
      var year = d.getFullYear()
      var month = ((d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1))
      var date = (d.getDate() < 10 ? '0' + d.getDate() : d.getDate())
      var hour = (d.getHours() < 10 ? '0' + d.getHours() : d.getHours())
      var minute = (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes())
      var second = (d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds())
      return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
    },
    search(){
      this.pages = 0
      this.list = null
      this.initList();
    },
    out(){
      sessionStorage.removeItem('user')
      window.location.href='/index.html'
    }

  },
  created() {
  },
  //  页面加载后
  mounted() {
    this.news_title=null
    this.initList();
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

<style scoped>
  .page {
    font-weight: 900;
    height: 40px;
    text-align: center;
    color: #888;
    margin: 20px auto 0;
    /* background: #f2f2f2;*/
  }

  .pagelist {
    font-size: 0;
    /* background: #fff;*/
    height: 50px;
    /* line-height: 50px;*/
  }

  .pagelist span {
    font-size: 14px;
  }

  .pagelist .jump {
    border: 1px solid #ccc;
    padding: 5px 8px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 5px;
  }

  .pagelist .bgprimary {
    cursor: default;
    color: #fff;
    background: #337ab7;
    border-color: #337ab7;
  }

  .jumpinp input {
    width: 55px;
    height: 26px;
    font-size: 13px;
    border: 1px solid #ccc;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    text-align: center;
  }

  .ellipsis {
    padding: 0px 8px;
  }

  .jumppoint {
    margin-left: 30px;
  }

  .pagelist .gobtn {
    font-size: 12px;
  }

  .pagelist .jump.disabled{
    pointer-events: none;
    background: #ddd;
  }

</style>

<template>
  <div id="app">
    <div id="wrapper">
      <!-- ***************** - Header Top - ***************** -->
      <div id="header-top" class="clearfix">

        <section class="container clearfix">

          <div class="one-half">

            <ul class="contact-info clearfix">
              <li class="phone">+182 6073 2908</li>
              <li class="email"><a href="mailto:info@companyname.com">674721210@qq.com</a></li>
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

          <div id="logo">
            <h1><a href="index.html"><img src="/static/static/image/logo.png"  class="logo"/></a></h1>
            <input v-if="str!=null" class="slogan" type="text" style="background:none; outline:none; border:0px;font-size: 16px; font-weight: bold;"  placeholder="选择城市" id="inputTest" readonly="readonly" v-model='str' v-on:change="changeCity"/>
          </div><!--/ #logo-->

          <nav id="navigation" class="navigation">
            <ul>
              <li ><a href="/index.html">首页</a>
              </li>
              <li class="current"><a href="/premises/premises_find.html">租房信息</a></li>
              <li><a href="/news/news_info.html">闲居要闻</a>
              </li>
            </ul>
          </nav><!--/ #navigation-->

        </header><!--/ #header-->

        <!-- **************** - END Header - **************** -->
        <div style="margin-bottom: 20px;">	<span class="zySearch" id="zySearch">
          <b class="search-img" style="top: 0px; height: 0px;"></b>
          <input id="searchInput" class="search-input" type="text" placeholder="请输入关键字" v-model="searchValue">
          <button class="search-btn btn" @click="search()">搜索</button></span>
        </div>
        <div class="content-wrapper sbr clearfix">
          <div id="show1" style="box-shadow: 0px 0px 4px rgba(0, 0, 0, .2);">租房信息搜索</div>
          <div id="wrap">
            <section id="section">
              <nav id="choose">你的选择:
                <mark v-for="(item, key) in choose" @click="delFn(key)">{{item}} <a href="javascript:;">x</a>
                </mark>
              </nav>
              <ul id="type">
                <li v-for="item,i in dataList">{{item.title}}： <a v-for="value,j in item.list" href="javascript:;" v-bind:class="{active:item.index===j}" @click="showFn(value,i,j)">                    {{value}}                </a>
                </li>
              </ul>
            </section>
          </div>
          <!-- ********** - Sidebar - ************ -->
          <!-- ********** - END Sidebar - ************ -->

          <div style="border: 1px solid #F8F8F8;background-color: #EBEEEB;margin-top: 60px;">
            <div style="height: 60px;background-color: #F8F8F8;line-height: 60px;">
              <ul style="float: left;">
                <li style="text-align: center;font-size: 14px;width: 100%;padding-left:20px;background-color: #EBEEEB;"><a href="">全部租房信息<i> (数量)</i></a></li>
              </ul>
              <div class="sort" style="float: right;height: 60px;line-height: 60px;text-align: center;">
                <ul class="sorts" >
                  <li><a href="">默认排序<i class="tb-icon"></i></a></li>
                  <li><a href=""> 售价<i class="tb-icon"></i></a></li>
                </ul>
              </div>
            </div>
            <ul v-if="list!==null" class="bd" id="house_list">
              <li  v-for="premise in list" class="item f-dh">
                <a :href="'/premises/premises_info.html?premise_id='+premise.premises_id+''" target="_blank">
                <a :href="'/premises/premises_info.html?premise_id='+premise.premises_id+''" class="img" target="_blank">
                  <img :src="'/static/static/image/images/'+dealPicture(premise.photo)" width="200" height="140" :alt="premise.premises_name">
                </a>
                <div class="info">
                  <h3 class="title"><a :href="'/premises/premises_info.html?premise_id='+premise.premises_id+''" class="tit" target="_blank">{{premise.premises_name}}<!-- <span class="cat">[--><!--]</span>--></a><i class="u-state"><i class="tb-icon s5"></i></i></h3>
                  <p class="type"><a :href="'/premises/premises_info.html?premise_id='+premise.premises_id+''" target="_blank">{{premise.house_type}}</a> —— 88-124平米 </p>
                  <p class="add"><a target="_blank" :href="'/premises/premises_info.html?premise_id='+premise.premises_id+''" :title="premise.position">{{premise.position}}</a>
                    <a target="_blank" class="map_icon" :href="'/premises/premises_info.html?premise_id='+premise.premises_id+''" :title="premise.position"></a>
                  </p>
                  <p class="u-attr"></p>
                </div>
                <ul class="guide">
                  <li class="price" id="id-2">均价<i style="font-size: 26px;">{{premise.premises_avgprice}}</i>元/晚</li>
                  <li class="tel"><i class="tb-icon"></i>{{premise.premises_tel}}</li>
                </ul>
                <div class="dt"><span>动态</span><a :href="'/premises/premises_dynamics.html?premise_id='+premise.premise_id+''" target="_blank"></a>
                </div>
              </a>
              </li>
            </ul>
            <div v-if="list===null" class="bd" style="font-size: 20px;line-height: 28px;margin: 30px;">
              抱歉没有找到相关租房信息
            </div>
            <div>
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
            </div>

          </div><!--/ .content-wrapper-->
          <div class="houseFocus">
            <h2>猜你可能喜欢的租房信息</h2>
            <ul style="height: 200px;">
              <li v-for="arr in attentionList">
                <a :href="'/premises/premises_info.html?premise_id='+arr.premises_id+''">
                  <img :src="'/static/static/image/images/'+dealPicture(arr.photo)" alt="">
                </a>
                <p>{{dealString(arr.position)}} · {{arr.premises_name}}</p>
                <p>均价：<b>{{arr.premises_avgprice}}元/晚</b>
                </p>
              </li>
            </ul>
          </div>
          <!-- ************* - Main Footer - *************** -->
          <footer id="footer" class="clearfix">

            <div class="one-half">

              <nav id="footer-nav" class="clearfix">
                <ul>
                  <li><a href="/index.html">首页</a></li>
                  <li  class="current"><a href="/premises/premises_find.html">租房信息</a></li>
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
          <!-- ************ - END Footer - ************ -->
        </div>
      </section><!--/ .container-->
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

      <!-- ************ - END Footer - ************ -->


    </div><!--/ #wrapper-->
  </div>
</template>

<script>
  let data = [{
    title: '单价',
    list: ["100以下", "100-200", "200-300", "300-400", "400以上"]
  }, {
    title: '户型',
    list: ["一室", "两室", "三室", "四室", "五室及以上"]
  }, {
    title: '特色',
    list: ["近地铁", "拎包入住", "精装修", "押一付一", "认证公寓", "随时看房"]
  }, {
    title: '类型',
    list: ["8090", "棉花公寓", "自在寓", "南京美寓", "房港公寓"]
  }]
  data.forEach(item=>item.index = -1);
  export default {
    components: {
    },
    data () {
      return {
        dataList:data,
        choose:[],
        current_page: 1, //当前页
        pages: 0, //总页数
        changePage:'',//跳转页
        nowIndex:0,
        str: '玄武区',
        pageIndex: 1,
        pageSize: 10,
        list:[],
        total: '',
        searchValue: '',
        attentionList: '',
        user:''
      }
    },
  name: 'app',
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
      },
    },
    methods:{

      initList(){
        var params = null;
        if(this.choose.length === 1){
          params = {
            premises_name: this.searchValue,
            token: this.token,
            cityName: this.str,
            pageIndex: this.current_page,
            pageSize: this.pageSize,
            price: this.choose[0]
          }
        }else if(this.choose.length === 2){
          params = {
            premises_name: this.searchValue,
            token: this.token,
            cityName: this.str,
            pageIndex: this.current_page,
            pageSize: this.pageSize,
            price: this.choose[0],
            type: this.choose[1]
          }
        }else if(this.choose.length === 3){
          params = {
            premises_name: this.searchValue,
            token: this.token,
            cityName: this.str,
            pageIndex: this.current_page,
            pageSize: this.pageSize,
            price: this.choose[0],
            type: this.choose[1],
              feature: this.choose[2]
          }
        }else if(this.choose.length === 0){
          params = {
            premises_name: this.searchValue,
            token: this.token,
            cityName: this.str,
            pageIndex: this.current_page,
            pageSize: this.pageSize,
          }
        }else {
          params = {
            premises_name: this.searchValue,
            token: this.token,
            cityName: this.str,
            pageIndex: this.current_page,
            pageSize: this.pageSize,
            price: this.choose[0],
            type: this.choose[1],
            feature: this.choose[2],
            houseType: this.choose[3]
          }
        }
        this.$http.post('/neusoft/premise/premise/getPage.htm', params).then(response => {
          var res = response.body

          if (res.isSuccess === 0) {
            this.list = res.result.content
            this.pages = res.result.totalPages

          } else if (res.isSuccess === 4) {
          } else {
            this.list=null
          }
        })

        params = {
          cityName: this.str,
          token: this.token,
          pageIndex: 1,
          pageSize: 4,
        }
        this.$http.post('/neusoft/premise/premise/attentionPremise', params).then(response => {
          var res = response.body
          if (res.isSuccess === 0) {
            this.attentionList = res.result.content
            console.log(this.attentionList)
          } else if (res.isSuccess === 4) {
          } else {
            this.attentionList=null
          }
        })
      },
      search(){
        this.choose = []
        this.pages = 0
        this.list = null
        this.initList();
      },
      jumpPage: function(id) {
        this.current_page = id;
        this.list = null;
        this.pages = 0;
        this.initList();
      },
      showFn(val, i, j) {
        //下面这种方法给对象添加属性并不会响应 // this.choose[i]=val
        this.$set(this.choose, i, val) //找到操作的一行，把这一行的数据中的index设置为点击的标签的下标
        this.dataList[i].index = j;
        this.pages = 0;
        this.searchValue=null
        this.list = null;
        this.initList();
      },
      delFn(key) {
        this.$delete(this.choose, key);
        this.dataList[key].index = -1;
        this.pages = 0;
        this.list = null;
        this.initList();
      },
      changeCity (){
        var city = $("#inputTest").val();
        this.str = city
        this.pages = 0
        this.searchValue = null
        this.list = null
        this.initList();
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
      dealString(str){
        if(str !=null){
          var s = str.split('|')
          return s[2].substring(0,2)
        }
      },
      dealPicture(str){
        if(str !=null){
          var s = str.split('|')
          return s[0]
        }
      },
      out(){
        sessionStorage.removeItem('user')
        window.location.href='/index.html'
      },
  },
  //  页面加载之前
  created() {
  },
  //  页面加载后
  mounted() {
    this.searchValue=null
    this.initList();
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

  LazyLoad.css(["../../../../static/assets/css/cityStyle.css"], function () {

    LazyLoad.js(["../../../../static/assets/js/cityScript.js"], function () {

      var test = new citySelector.cityInit("inputTest");

    });

  });

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


  body {
    font-size: 14px;
    font-family:"Lantinghei SC Extralight", Arial;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    margin-top: 20px;
  }
  a {
    text-decoration: none;
  }
  img {
    vertical-align: top;
  }
  #wrap {
    width: 950px;
    height: 260px;
    margin: 3px auto;
   /* padding: 145px 120px 95px;*/
  }
  #section {
    width: 940px;
    height: 260px;
    -webkit-box-shadow: 0px 0px 4px rgba(0, 0, 0, .2);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, .2);
  }
  #choose {
   /* width: 760px;*/
    height: 50px;
    margin: 0 auto;
    line-height: 50px;
    text-indent: 21px;
  }
  #type {
    width: 100%;
    height: 210px;
    padding: 0px 0 16px 28px;
  }
  #type li {
    height: 44px;
    color: #8a8a8a;
    line-height: 44px;
  }
  #type a {
    margin: 0 12px 0 11px;
    color: #000;
  }
  #choose mark {
    position: relative;
    display: inline-block;
    height: 24px;
    line-height: 24px;
    border: 1px solid #28a5c4;
    color: #28a5c4;
    margin: 12px 5px 0;
    background: none;
    padding: 0 30px 0 6px;
    text-indent: 0;
  }
  #choose mark a {
    position: absolute;
    top: 3px;
    right: 2px;
    display: inline-block;
    width: 18px;
    height: 18px;
    background: #28a5c4;
    color: #fff;
    line-height: 18px;
    font-size: 16px;
    text-align: center;
  }

  .active {
    background: rgb(40, 165, 196);
  }
  .logo{
    height: 80px;
    width: 160px;
  }
  .bd .item {
    padding: 30px 10px 10px;
  }
</style>

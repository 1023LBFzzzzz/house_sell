<template>
 <div id="app">
   <div id="wrapper">


     <!-- ***************** - Header Top - ***************** -->

     <div id="header-top" class="clearfix">

       <section class="container clearfix">

         <div class="one-half">

           <ul class="contact-info clearfix">
             <li class="phone">+1 820 533 2198</li>
             <li class="email"><a href="mailto:info@companyname.com">674721210@qq.com</a></li>
           </ul><!--/ .contact-info-->

         </div><!--/ .one-half-->

         <div v-if="user===''">
         <div  class="one-half last">
           <ul data-description="请选择你的操作:" class="social-links clearfix">
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
           <input v-if="str!=null" class="slogan" type="text" style="background:none; outline:none; border:0px;font-size: 16px;font-weight: bold;"  placeholder="选择城市" id="inputTest" readonly="readonly" v-model='str' v-on:change="changeCity"/>
         </div><!--/ #logo-->

         <nav id="navigation" class="navigation">
           <ul>
             <li class="current"><a href="/index.html">首页</a>
             </li>
             <li><a href="/premises/premises_find.html">房屋</a></li>
             <li><a href="/news/news_info.html">房东的故事</a>
             </li>

           </ul>
         </nav><!--/ #navigation-->

       </header><!--/ #header-->

       <!-- **************** - end Header - **************** -->


       <!-- ***************** - Slider - ***************** -->

       <div id="ei-slider" class="ei-slider">

         <ul class="ei-slider-large">

           <li>
             <img src="../../../static/assets/images/sliders/img_01.jpg" alt="image01" />
             <div class="ei-title">
               <h2>Hdsd,The sky is blue</h2>
               <h3>Rsdssppy</h3>
             </div>
           </li>
           <li>
             <img src="../../../static/assets/images/sliders/img_02.jpg" alt="image01" />
             <div class="ei-title">
               <h2>The root is black, Ydddd</h2>
               <h3>Rsdssppy</h3>
             </div>
           </li>
           <li>
             <img src="../../../static/assets/images/sliders/img_03.jpg" alt="image01" />
             <div class="ei-title">
               <h2>The blue River is crossing the outSise, Yggg</h2>
               <h3>Rsdssppy</h3>
             </div>
           </li>
           <li>
             <img src="../../../static/assets/images/sliders/img_04.jpg" alt="image01" />
             <div class="ei-title">
               <h2>The RainBow is on the Sky， Kyy</h2>
               <h3>Photography</h3>
             </div>
           </li>
           <li>
             <img src="../../../static/assets/images/sliders/img_05.jpg" alt="image01" />
             <div class="ei-title">
               <h2>Panorama View of Budapest, Hungary</h2>
               <h3>Travelling</h3>
             </div>
           </li>

         </ul><!-- ei-slider-large -->

         <ul class="ei-slider-thumbs">

           <li class="ei-slider-element">Current</li>
           <li><a href="#">Slide 1</a><img src="../../../static/assets/images/thumbs/1.jpg" alt="thumb01" /></li>
           <li><a href="#">Slide 2</a><img src="../../../static/assets/images/thumbs/2.jpg" alt="thumb02" /></li>
           <li><a href="#">Slide 3</a><img src="../../../static/assets/images/thumbs/3.jpg" alt="thumb03" /></li>
           <li><a href="#">Slide 4</a><img src="../../../static/assets/images/thumbs/4.jpg" alt="thumb04" /></li>
           <li><a href="#">Slide 5</a><img src="../../../static/assets/images/thumbs/5.jpg" alt="thumb05" /></li>

         </ul><!-- ei-slider-thumbs -->

       </div><!-- ei-slider -->

       <!-- *************** - end Slider - *************** -->


       <!-- *************** - Projects Carousel - *************** -->

       <div class="plate" style="margin-top: 40px;">
         <div class="publicTitle">
           <h2><a href="/premises/premises_find.html" target="_blank">特色租房</a></h2>
           <div class="desc">全新具有我们特色的租房，推荐给你</div>
           <!-- <div class="search">
               <input type="text" name="q" maxlength="20" v-model="searchValue" placeholder="输入房屋名称">
               <input type="hidden" name="search_type" value="house"><a href="javascript:;" target="_blank" id="home_so">搜索</a>
           </div> -->
         </div>
         <!--缺省选择-->
         <div class="list" style="display: flex;">
           <a class="item long" href="/premises/premises_find.html" target="_blank" >
             <img src="/static/assets/img/house01.jpg" alt="全新租房" style="height:500px;">
           </a>
           <a class="item short" href="/premises/premises_find.html" target="_blank">
             <img src="/static/assets/img/house02.jpg" alt="经济租房" style="padding-left:80px;height:500px;">
           </a>
         </div>
         <div class="list reverse">
           <a class="item short" href="/premises/premises_find.html" target="_blank">
             <img src="/static/assets/img/house03.jpg" alt="人气租房">
           </a>
         </div>
       </div>

       <div class="articleSale" style="margin-top: 40px;">
         <div class="publicTitle">
           <h2><a href="/news/news_info.html" target="_blank">租房故事</a></h2>
           <div class="desc">聆听房东们的故事，享受更优质的服务</div>
         </div>
         <div class="content">
          <div class="article">
             <div class="t"><a href="/news/news_info.html" target="_blank" class="tt">房东故事</a><a href="/news/news_info.html" target="_blank">更多 ></a>
             </div>
             <div class="list">
               <div class="item" v-for="news in newsList">
                 <a :href="'/news/news_content.html?news_id='+news.news_id+''" target="_blank" class="img" :title="news.news_title">
                   <img :src="'/static/static/image/'+news.news_picpath"  :alt="news.news_title">
                 </a>
                 <div class="text">
                   <h3><a :href="'/news/news_content.html?news_id='+news.news_id+''" target="_blank" :title="news.news_title">{{news.news_title}}</a></h3>
                   <div class="desc">{{news.news_summary}}</div>
                   <div class="date">{{createTimeStr(news.news_createdate)}}</div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>

       <div class="clear"></div>

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
    components: {
    },
    data () {
      return {
        str:'玄武区',
        list: [],
        newsList:[],
        newsList2:[],
        searchValue: '',
        user:''
      }
    },
    methods: {
      init(){
        var params = {
          cityName: this.str,
          token: this.token,
          pageIndex: 1,
          pageSize: 20,
        }
        this.$http.post('/neusoft/premise/premise/geHotPremise', params).then(response => {
          var res = response.body
          if (res.isSuccess === 0) {
            this.list = res.result.content
            console.log(this.list)
          } else if (res.isSuccess === 4) {
          } else {
            this.list=null
          }
        })
        params = {
          cityName: this.str,
          token: this.token,
          news_type: '导购文章',
          pageIndex: 1,
          pageSize: 3,
        }
        this.$http.post('/neusoft/news/news/getPage.htm', params).then(response => {
          var res = response.body
          if (res.isSuccess === 0) {
            this.newsList = res.result.content
            console.log(this.newsList)
          } else if (res.isSuccess === 4) {
          } else {
            this.newsList=null
          }
        })

        params = {
          cityName: this.str,
          token: this.token,
          news_type: '房东的故事',
          pageIndex: 1,
          pageSize: 9,
        }
        this.$http.post('/neusoft/news/news/getPage.htm', params).then(response => {
          var res = response.body
          if (res.isSuccess === 0) {
            this.newsList2 = res.result.content
            console.log(this.newsList2)
          } else if (res.isSuccess === 4) {
          } else {
            this.newsList2=null
          }
        })
      },
      formatDate (date){
        var value=new Date(date);
        var month=value.getMonth()+1;
        var day=value.getDate();
        return month+"月"+day+"日"
      },
      // 时间格式化
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
      createDateStr (operationtime) {
        var d = new Date(operationtime)
        var year = d.getFullYear()
        var month = ((d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1))
        var date = (d.getDate() < 10 ? '0' + d.getDate() : d.getDate())
        return year + '-' + month + '-' + date
      },
      changeCity (){
        var city = $("#inputTest").val();
        this.str = city
        this.newsList = null
        this.newsList2 = null
        this.list = null
        this.init()
      },
      out(){
        sessionStorage.removeItem('user')
        window.location.href='/index.html'
      },
      search(){
        var params={
          cityName: this.str,
          searchValue: this.searchValue
        }
        this.$http.post('/neusoft/premise/premise/getPremisePage.htm', params).then(response => {
          var res = response.body
          if (res.isSuccess === 0) {
            this.premises = res.result.premises
          } else if (res.isSuccess === 4) {
          } else {
            this.list=null
          }
        })
        console.log(this.premises.premises_id)
      }
    },
    mounted () {
      this.init()
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
  .bigSwiper .img p {
    position: absolute;
    width: 100%;
    color: #fff;
    font-size: 18px;
    line-height: 50px;
    background: #000;
    left: 0;
    bottom: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    text-indent: 10px;
  }
  .swiper-slide {
    float: left;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  .logo{
    height: 80px;
    width: 160px;
  }
  .item {
    padding: 30px 10px 10px;
  }

</style>

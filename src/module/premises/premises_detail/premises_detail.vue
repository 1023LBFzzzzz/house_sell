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
              <h1 class="title" style="margin-top: 50px;margin-bottom:30px;">{{premise.premises_name}}</h1>
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
                  <li class="cur"> <a :href="'/premises/premises_detail.html?premise_id='+premise_id+''">详细介绍</a>

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

        </header><!--/ #header-->

        <!-- **************** - end Header - **************** -->


        <div class="content-wrapper clearfix">

          <div class="main">
            <dl><dt>基本信息</dt>
              <dd>
                <ul class="f-cb">
                  <li class="line"><span class="tit">租房信息租价</span><i class="s-fc1">{{premise.premises_avgprice}}</i>元/晚</li>
                  <li><span class="tit">单元数量</span>{{premise.floor_count}}</li>
                  <li><span class="tit">车位数量</span>{{premise.parking_space}}</li>
                  <li title="电梯安装入户，中央空调根据需求安装调整"><span class="tit">租房信息特色</span>{{premise.premises_feature}}</li>
                  <li class="f-dh"><span class="tit">容积率</span> {{subString(premise.build_area/premise.all_area)}} <span class="s-fc2">[关于容积率]</span>
                    <div class="d-item f-dn">
                      <h3>什么是容积率?</h3>
                      <p>容积率，是指一个小区的总建筑面积与用地面积的比率。对于开发商来说，容积率决定地价成本在租房信息中占的比例，而对于住户来说，容积率直接涉及到居住的舒适度。一个良好的居住小区，高层住宅容积率应不超过5，多层住宅应不超过2，绿地率应不低于30%。但由于受土地成本的限制，并不是所有项目都能做得到。</p>
                    </div>
                  </li>
                  <li class="f-dh"><span class="tit">绿化率</span> {{subString(premise.green_area/premise.all_area)*100}}%<span class="s-fc2" id="s-fc2">[关于绿化率]</span>
                    <div class="d-item f-dn">
                      <h3>什么是绿化率？</h3>
                      <p>项目规划建设用地范围内的绿化面积与规划建设用地面积之比。但绿化率只是开发商宣传楼盘绿化时用的概念，并没有法律和法规依据。法律法规中明确规定的衡量楼盘绿化状况的国家标准是绿地率，绿地率是指小区用地范围内各类绿地的总和与小区用地的比率,主要包括公共绿地、宅旁绿地、配套公建所属绿地和道路绿地等，其计算要比绿化率严格很多。</p>
                    </div>
                  </li>
                  <li class="line"><span class="tit">售楼地址</span>{{premise.sale_address}}</li>
                  <li class="line"><span class="tit">项目位置</span>{{premise.sale_address}}</li>
                </ul>
              </dd>
            </dl>
<!--            <dl><dt>项目简介</dt>-->
<!--              <dd>-->
<!--               {{premise.descriptions}}-->
<!--              </dd>-->
<!--            </dl>-->
<!--            <dl>-->
<!--              <dt>周边配套</dt>-->
<!--              <dd>餐饮：园区食堂、园区内配有三家高端餐饮会所：济川人家、佑康汇、六号公馆。-->
<!--                <br>金融：中国银行、交通银行、工商银行、建设银行、农业银行、中信银行、浦发银行、江苏银行、平安银行、南京银行。-->
<!--                <br>医院：鼓楼医院、江苏省人民医院、江苏省妇幼。-->
<!--                <br>超市：金润发、苏果。-->
<!--                <br>学校：南京艺术学院、南京师范大学、南京教育学院、河海大学。-->
<!--                <br>休闲：龙江新城市广场、环宇城。-->
<!--                <br>卖场：金润发、龙江新城市广场、环宇城。-->
<!--                <br>公园广场：石头城公园、绿地公园、国防园。-->
<!--                <br>-->
<!--              </dd>-->
<!--              <div class="box_white clearfix detail_intro_item" hideheight="135" showheight="120">-->
<!--                <div class="info_l"> <span class="info_ico1"></span>-->
<!--                  <p>个性描述</p>-->
<!--                </div>-->
<!--                <div class="info_r">-->
<!--                  <div class=" intro_item_content" style="height: 120px; overflow: hidden;">-->
<!--                    <p>人活在世界上，-->
<!--                      <br>总要有一次用尽全力的奔跑，-->
<!--                      <br>有一次切断所有后路的努力，-->
<!--                      <br>也要有一次轰轰烈烈的爱情。-->
<!--                      <br>愿你有深夜的酒，-->
<!--                      <br>也有清晨的粥。-->
<!--                      <br>谢谢你找到我，-->
<!--                      <br>谢谢你留下来。</p>-->
<!--                  </div>-->
<!--                  <div class="open" style="display: block;">查看全部<span></span>-->
<!--                  </div>-->
<!--                  <div class="stop" style="display: none;">收起<span></span>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </dl>-->
<!--            <dl><dt>小区配套</dt>-->
<!--              <dd>园区食堂、24小时保安值班、公共区域的保洁服务；公共景观、绿化维护服务；观光车接驳服务；信函、报刊分拣及送达服务；公共设施、设备保养服务；租房信息维修服务等。</dd>-->
<!--            </dl>-->
<!--            <dl><dt>交通状况</dt>-->
<!--              <dd>公交：42、45、56、65、66、302、11路，草场门大桥东站，20、60、91、133、303、317路，清凉门桥站-->
<!--                <br>地铁：四号线-->
<!--                <br>自驾：从市区方向过来，沿草场门大街，不过草场门桥左转，沿石头城路至石头城公园门口。从河西方向过来，沿草场门大街，过草场门桥右转，沿石头城路至石头城公园门口。-->
<!--                <br>-->
<!--              </dd>-->
<!--            </dl>-->
<!--            <dl><dt>交付标准</dt>-->
<!--              <dd>电梯安装入户，中央空调根据需求安装调整</dd>-->
<!--            </dl>-->
<!--            <dl><dt>车位信息</dt>-->
<!--              <dd>-->
<!--                <p>{{premise.parking_space}}</p>-->
<!--              </dd>-->
<!--            </dl>-->
<!--            <dl><dt>相关信息</dt>-->
<!--              <dd>-->
<!--                <p>开工时间：2010年</p>-->
<!--              </dd>-->
<!--            </dl>-->
          </div>
          <div id="introducePart" class="wrap">
            <ul class="house_info clearfix" id="introduce">
              <li class="border_none">
                <h6 class="h_ico1">整套出租</h6>

                <p>租房信息面积：18平米
                  <br>租房信息户型：1室0厅1卫0厨0阳台</p>
              </li>
              <li>
                <h6 class="h_ico2">宜住2人</h6>

                <p>房客独享整套租房信息</p>
              </li>
              <li>
                <h6 class="h_ico3">共2张</h6>

                <p>双人床：1.2m宽 × 2m长 ×2张
                  <br>
                </p>
              </li>
            </ul>
            <div class="qr-box">
              <img class="qr-back" src="http://sz.xiaozhu.com/images/applet-qrcode/detial-back.png" alt="" style="width: 940px;"> <span class="detail-qrcode-box">
                <img class="inner-qrcode" src="http://image.xiaozhustatic2.com/00,480,480/22,0,11,7302,480,480,675eeb78.jpg" alt="">
              </span>

            </div>
            <div class="box_white clearfix detail_intro_item" hideheight="135" showheight="120">
              <div class="info_l"> <span class="info_ico1"></span>

                <p>个性描述</p>
              </div>
              <div class="info_r">
                <div class=" intro_item_content" style="overflow: hidden;">
                  <p>人活在世界上，
                    <br>总要有一次用尽全力的奔跑，
                    <br>有一次切断所有后路的努力，
                    <br>也要有一次轰轰烈烈的爱情。
                    <br>愿你有深夜的酒，
                    <br>谢谢你留下来。</p>
                </div>
              </div>
            </div>
            <div class="box_gray clearfix detail_intro_item" hideheight="135" showheight="120">
              <div class="info_l"> <span class="info_ico2"></span>

                <p>内部情况</p>
              </div>
              <div class="info_r">
                <div class=" intro_item_content" style="height: 120px; overflow: hidden;">
                  <p>卧室底细：
                    <br>所有房间均配备一客一洗床单被套，衣帽架，木质衣架，吹风筒，闲居漱口杯，多芬洗护，蓝月亮洗衣液，消毒封口毛巾，专属定制旅行牙膏牙刷套装，编织地垫，凉拖鞋以及独立洗手间；
                    <br>活动厅：
                    <br>四楼大厅为亲子家庭配备，是小盆友的玩乐天地； 三楼大厅可下象棋，五子棋，喝茶聊天，扑克麻将等；二楼大厅是健身达人专属，配跑步机，瑜伽垫，呼啦圈，哑铃或适合室外的羽毛球拍等；一楼大厅有两个，分别为娱乐厅和休闲厅，娱乐厅有麻将桌，飞镖等集体娱乐设施，休闲厅有各类书籍，酒柜，自助咖啡机，55寸网络电视，吐槽粘贴区，休闲吊椅和一张3M长的多功能桌等等。
                    <br>庭前院落
                    <br>庭院为独立院落，有专门的围炉烧烤，也有绿藤架下的窃窃私语，更有傍晚时分你那娓娓动听的畅享室外KTV；除此之外，也有蝴蝶精心种植的各类花草，当然如果你喜欢，可以自行种植，达到你喜欢的效果后可带走噢！！！</p>
                </div>
              </div>
            </div>
            <div class="box_white clearfix detail_intro_item" hideheight="135" showheight="120">
              <div class="info_l"> <span class="info_ico3"></span>

                <p>交通情况</p>
              </div>
              <div class="info_r">
                <div class="info_text_mid">
                  <p>由大鹏或南澳皆有专线小巴，院落走到沙滩仅10分钟左右路程，天文台，看日出都是*佳位置</p>
                </div>
                <div class="open" style="display:none;">查看全部<span></span>
                </div>
                <div class="stop" style="display:none;">收起<span></span>
                </div>
              </div>
            </div>
            <div class=" box_gray  clearfix detail_intro_item" hideheight="135" showheight="120">
              <div class="info_l"> <span class="info_ico4"></span>

                <p>周边情况</p>
              </div>
              <div class="info_r">
                <div class="info_text_mid">
                  <p>周边景点：深圳最长的沙滩海景，情人岛，天文台，三门岛等等。</p>
                </div>
                <div class="open" style="display:none;">查看全部<span></span>
                </div>
                <div class="stop" style="display:none;">收起<span></span>
                </div>
              </div>
            </div>
            <div class="box_white clearfix detail_intro_item" hideheight="134" showheight="130">
              <div class="info_l"> <span class="info_ico5"></span>

                <p>配套设施</p>
              </div>
              <div class="info_r">
                <div class="intro_item_content" style=" overflow: hidden;">
                  <ul class="pt_list clearfix">
                    <li class="s_ico_shower">热水淋浴</li>
                    <li class="s_ico_wirelessnetwork">无线网络</li>
                    <li class="s_ico_aircondition">空调</li>
                    <li class="s_ico_washer">洗衣机</li>
                    <li class="s_ico_icebox">冰箱</li>
                    <li class="s_ico_parkingspace">停车位</li>
                    <li class="s_ico_slippers">拖鞋</li>
                    <li class="s_ico_toiletpaper">手纸</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box_gray clearfix detail_intro_item" hideheight="135" showheight="120">
              <div class="info_l"> <span class="info_ico6"></span>

                <p>入住须知</p>
              </div>
              <div class="info_r">
                <div class="info_text_mid">
                  <ul class="check_con clearfix">
                    <li>卫生间：独立卫生间</li>
                    <li>最少入住天数：1天</li>
                    <li>最多入住天数：无限制</li>
                    <li>是否接待境外人士：接待</li>
                    <!--<li>被单更换：每客一换</li>-->
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div><!--/ .content-wrapper-->


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
    subString(str){
      let realVal = Number(str).toFixed(2)
      return Number(realVal)
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

<style>
  .p-info .d-item {
    position: absolute;
    width: 280px;
    line-height: 20px;
    border: 1px solid #ddd;
    background: #fff;
    padding: 10px;
    z-index: 2;
    box-shadow: 2px 2px 5px #eee;
  }
  .f-dn {
    display: none;
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
  }
  .nav_r {
    float: left;
    font-size: 14px;
    padding: 0 15px;
    width: 280px;
    background: #222f3d;
    color: #fff;
  }
  .xz_logo {
    display: block;
    float: left;
    margin: 8px 22px 0 0;
    background: url(//jci.xiaozhustatic3.com/e19092901/images/detail/xz_logo.png) no-repeat;
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
    background: #3e5871;
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
    background: #243545;
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


  .box_white {
    background: #f7f7f7;
  }
  .info_l {
    float: left;
    width: 90px;
    text-align: center;
  }
  .info_ico1, .info_ico2, .info_ico3, .info_ico4, .info_ico5, .info_ico6 {
      background: url(//jci.xiaozhustatic3.com/e19092901/images/detail/sprice.png) no-repeat 0 -1719px;
  }
  .info_ico1 {
    width: 46px;
    height: 60px;
  }
  .info_ico1 {
    width: 46px;
    height: 60px;
  }
  .house_info {
    background: #f8e1cd;
    padding: 19px 0 15px 72px;
    margin-bottom: 10px;
  }
  .house_info li {
    float: left;
    line-height: 26px;
    color: #959ea7;
    background: url(//jci.xiaozhustatic3.com/e19092901/images/detail/x_line.png) no-repeat left top;
    padding-left: 11px;
    width: 260px;
  }
  .qr-box {
    position: relative;
    margin-bottom: 10px;
  }
  .box_white, .box_gray {
    padding: 25px 0 25px 60px;
  }
  .info_l p {
    font-size: 22px;
    color: #a5b0ba;
    padding-top: 15px;
  }
  .info_r p {
    word-wrap: break-word;
    word-break: break-all;
  }
  .open, .stop {
    color: #f05b72;
    cursor: pointer;
    margin-top: 8px;
  }
  .info_ico2 {
    background-position: 0 -1782px;
    width: 54px;
    height: 60px;
  }
  .info_l span {
    display: inline-block;
    margin-top: 10px;
  }
  .pt_list li {
    float: left;
    height: 21px;
    line-height: 21px;
    padding-left: 30px;
    width: 285px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 12px;
  }
  .s_ico_wirelessnetwork {
    background-position: 0 -1056px;
  }
  .info_ico5 {
    background-position: 0 -1974px;
    width: 60px;
    height: 58px;
  }
  .info_ico4 {
    background-position: 0 -1909px;
    width: 52px;
    height: 60px;
  }
  .info_ico6 {
    background-position: 0 -2045px;
    width: 60px;
    height: 55px;
  }
  .s_ico_no, .s_ico_brush, .s_ico_soap, .s_ico_towel, .s_ico_toiletries, .s_ico_toiletpaper, .s_ico_shower, .s_ico_hotbathtub, .s_ico_slippers, .s_ico_tv, .s_ico_aircondition, .s_ico_washer, .s_ico_icebox, .s_ico_drinking, .s_ico_wirelessnetwork, .s_ico_wirednetwork, .s_ico_heater, .s_ico_elevator, .s_ico_accesssys, .s_ico_parkingspace, .s_ico_smoke, .s_ico_iscook, .s_ico_pet, .s_ico_meet, .s_ico_suitableforchildren, .s_ico_suitableforoldpeople, .s_ico_suitablefordisabledpeople {
    background: url(//jci.xiaozhustatic3.com/e19092901/images/detail/sprice.png) no-repeat 0 -682px;
  }
  .house_info li h6 {
    padding-left: 40px;
    height: 34px;
    line-height: 34px;
    font-size: 24px;
    font-weight: normal;
    padding-bottom: 5px;
    color: #2c3e50;
  }
  .h_ico1, .h_ico2, .h_ico3, .h_ico4, .h_ico5, .h_ico6 {
    background: url(//jci.xiaozhustatic3.com/e19092901/images/detail/sprice.png) no-repeat 0 -395px;
  }

  .h_ico2 {
    background-position: 0 -443px;
  }
  .h_ico3 {
    background-position: 0 -496px;
  }
  .wrap {
    font: normal 14px/24px "Microsoft YaHei";
    color: #2c3e50;
  }
  .qr-box .inner-qrcode {
    width: 100%;
  }
  .qr-box .detail-qrcode-box {
    position: absolute;
    right: 10%;
    top: 50%;
    width: 14%;
    transform: translate(-50%, -50%);
    border-radius: 100px;
    overflow: hidden;
    padding: 2px;
    box-sizing: border-box;
    background: #fff;
  }
  img, input, select, textarea, button, i {
    vertical-align: middle;
  }
  .info_r {
    float: left;
    width: 650px;
    padding-left: 45px;
  }
  .wrap {
    font: normal 14px/24px "Microsoft YaHei";
    color: #2c3e50;
  }
  .info_ico3 {
    background-position: 0 -1845px;
    width: 50px;
    height: 60px;
  }
  .info_text_mid {
    display: table-cell;
    vertical-align: middle;
    height: 114px;
  }
  .check_con li {
    float: left;
    height: 28px;
    line-height: 28px;
    width: 315px;
  }
  .s_ico_shower {
    background-position: 0 -850px;
  }
  .s_ico_wirelessnetwork {
    background-position: 0 -1056px;
  }
  .s_ico_aircondition {
    background-position: 0 -934px;
  }
  .s_ico_washer {
    background-position: 0 -964px;
  }
  .s_ico_icebox {
    background-position: 0 -994px;
  }
  .s_ico_parkingspace {
    background-position: 0 -1195px;
  }
  .s_ico_slippers {
    background-position: 0 -822px;
  }
  .s_ico_toiletpaper {
    background-position: 0 -793px;
  }
</style>

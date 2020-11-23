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
         <div id="introducePart">
                <ul class="house_info clearfix" id="introduce">
                    <li class="border_none">
                        <h6 class="h_ico1">整套出租</h6>
                        <p>房屋面积：70平米<br>                            房屋户型：1室2厅2卫1厨0阳台
                        </p>                    </li>
                    <li>
                        <h6 class="h_ico2">宜住3人</h6>
                        <p>
                                                        房客独享整套房屋
                                                    </p>
                    </li>
                    <li>
                        <h6 class="h_ico3">共2张</h6>
                        <p>

                            双人床：1.8m宽 × 2m长
                            ×1张<br>

                            沙发：1.5m宽 × 2m长
                            ×1张<br>
                                                    </p>
                    </li>
                </ul>

                                <div class="box_gray clearfix detail_intro_item" hideheight="135" showheight="120">
                    <div class="info_l">
                        <span class="info_ico2"></span>
                        <p>内部情况</p>
                    </div>
                    <div class="info_r">
                        <div class=" intro_item_content" style="height: 120px; overflow: hidden;">
                                                        <p>客厅、休闲角、起居室、厨房、上下层2个卫生间的每一寸设计，都为外出旅行的你提供尽可能所需。 【成都土著少女房东】将你出行的每个小细节都妥帖响应，呈现在【墨宿 more homie】的角角落落。 4.9米挑高的矩形落地窗漫射着冬季的旭日暖阳，毫无遮拦地洒进窗内。早晨出门前的一杯咖啡配三明治，你只需倚在沙发椅间，手拿【CHENGDU GUIDE】翻阅，便会为你的旅行提供与众不同的城市文化思绪。同时少女房东会为你推荐有趣的、有味的、有料的、有囍的旅行攻略，用魅力的脚步丈量城市。<br>
不可不说， 必不可少的舒适双人床，干净舒软的被窝，精致的梳妆台，造型别致的落地镜，24小时淋浴，无限WIFI，沐浴用品一应俱全，以及厨房里配备的多士炉、电磁炉、烧水壶、微波炉等，为你暂时充饥。当然， 房东自信于成都的美食，以及自己的美食推荐，可能我们精心的厨房用具都只能成为摆设。洗衣机、冰箱、电视等家用电器为你提供【more homie】一般的舒适，以及更舒适。爱看书的少女房东的枕边书籍也一定会是你睡前的舒心读物。每一个出行的少女和少女辣妈们一定会想要精心的打扮，美美的着装，我们希望镜头前的自己，永远是那个*自信*美好的自己。房东**可为你精心准备的便是：让你在成都的街头巷尾都留下*美丽的身影和*愉悦的心情。</p>
                                                    </div>
                        <div class="open" style="">查看全部<span></span></div>
                        <div class="stop" style="display:none;">收起<span></span></div>
                    </div>
                </div>
                                                                                <div class="box_white clearfix detail_intro_item" hideheight="135" showheight="120">
                    <div class="info_l">
                        <span class="info_ico3"></span>
                        <p>交通情况</p>
                    </div>
                    <div class="info_r">
                        <div class=" intro_item_content" style="height: 120px; overflow: hidden;">
                            <p>交通情况：<br>
从双流机场乘坐2号专线转61路至麻石桥路『直线距离28公里 打车预计80左右』<br>
从火车东站乘坐7号线转乘146路至杉板桥路西下车『直线距离11公里 打车预计20-25』<br>
从火车北站乘坐二环K1至建设南路口，公交在SM广场下车。<br>
小区附近就有一大型商场，500米范围内就有四个大型商场。出小区大门就有多条公交系统，可到达新南门车站去成都周边各大景点，也可方便达到春熙路、太古里、熊猫基地，锦里、宽窄巷子、武侯祠、琴台路、九眼桥等市区经典地标，不过建议使用滴滴出行方便快捷</p>
                        </div>
                        <div class="open" style="">查看全部<span></span></div>
                        <div class="stop" style="display:none;">收起<span></span></div>
                    </div>
                </div>

                                <div class=" box_gray  clearfix detail_intro_item" hideheight="135" showheight="120">
                    <div class="info_l">
                        <span class="info_ico4"></span>
                        <p>周边情况</p>
                    </div>
                    <div class="info_r">
                        <div class=" intro_item_content" style="height: 120px; overflow: hidden;">
                                                        <p>小区周边配套成熟，商业非常繁荣，有SM广场、伊藤洋华堂、龙湖三千集店大型综合商场，，红旗超市、舞东风、WOWO和其他小超市十数家，小区商业街有工商银行、建设银行、浙商银行、中国银行等，包括第六人民医院（三甲）、第六省医院及诊所在内医疗机构七八家，出了小区门，周围可选择的餐厅非常多，各类火锅、串串、干锅、烧烤特色美味星罗棋布，各类地方小吃还接受外卖，豆捞、粤菜、湘菜、海鲜也有，可以在美团或糯米团购，经济实惠。如果累了，小区附近有渝富桥浴足按摩，还有盲人按摩，美容院、美发厅等。万达国际影城、影立方7731IMAX影城、UME国际影城三座电影院，东郊记忆音乐公园的IMAX很值得去感受下在这里，这可是西南地区*大的。量贩式KTV、酒吧、咖啡馆、书吧、演艺场，距离成都市东郊记忆景区步行不足10分钟，可以一并在音乐公园里感受不一样的成都味道</p>
                                                    </div>
                        <div class="open" style="">查看全部<span></span></div>
                        <div class="stop" style="display:none;">收起<span></span></div>
                    </div>
                </div>

                                                                <div class="box_white clearfix detail_intro_item" hideheight="134" showheight="130">
                    <div class="info_l">
                        <span class="info_ico5"></span>
                        <p>配套设施</p>
                    </div>
                    <div class="info_r">
                        <div class="intro_item_content" style="height: 130px; overflow: hidden;">
                            <ul class="pt_list clearfix">
                                                                                                                                <li class="s_ico_shower">热水淋浴                                </li>
                                                                                                                                                                                                <li class="s_ico_wirelessnetwork">无线网络                                </li>
                                                                                                                                                                                                <li class="s_ico_aircondition">空调                                </li>
                                                                                                                                                                                                <li class="s_ico_tv">电视                                </li>
                                                                                                                                                                                                <li class="s_ico_elevator">电梯                                </li>
                                                                                                                                                                                                <li class="s_ico_accesssys">门禁系统                                </li>
                                                                                                                                                                                                <li class="s_ico_washer">洗衣机                                </li>
                                                                                                                                                                                                <li class="s_ico_icebox">冰箱                                </li>
                                                                                                                                                                                                <li class="s_ico_parkingspace">停车位                                </li>
                                                                                                                                                                                                <li class="s_ico_drinking">饮水设备                                </li>
                                                                                                                                                                                                <li class="s_ico_slippers">拖鞋                                </li>
                                                                                                                                                                                                <li class="s_ico_toiletpaper">手纸                                </li>
                                                                                                                                                                                                <li class="s_ico_brush">牙具                                </li>
                                                                                                                                                                                                <li class="s_ico_towel">毛巾                                </li>
                                                                                                                                                                                                <li class="s_ico_toiletries">浴液 洗发水                                </li>
                                                                                                                                                                                                <li class="s_ico_soap">香皂                                </li>
                                                                                                                                                                                                <li class="s_ico_iscook">允许做饭                                </li>
                                                                                                                                                                                                <li class="s_ico_smoke">允许吸烟                                </li>
                                                                                                                                                                                                <li class="s_ico_suitableforchildren">适宜儿童<i title="为儿童提供保护安全、便于就寝的设施" style="display: inline-block;width:12px;height:12px;background:url(../images/icon_wenhao.png) no-repeat; background-size: 100% 100%;margin-left: 5px;"></i>
                                </li>
                                                                                                                                                                                                <li class="s_ico_suitableforoldpeople">适宜老人<i title="为老人提供方便进出和日常使用的设施" style="display: inline-block;width:12px;height:12px;background:url(../images/icon_wenhao.png) no-repeat; background-size: 100% 100%;margin-left: 5px;"></i>
                                </li>
                                                                                                                                                                                                <li class="s_ico_no">浴缸</li>
                                                                                                                                                                                                <li class="s_ico_no">暖气</li>
                                                                                                                                                                                                <li class="s_ico_no">有线网络</li>
                                                                                                                                                                                                <li class="s_ico_no">允许聚会</li>
                                                                                                                                                                                                <li class="s_ico_no">允许带宠物</li>
                                                                                                                                                                                                <li class="s_ico_no">适宜婴幼儿</li>
                                                                                                                                                                                                <li class="s_ico_no">适宜残疾人<i title="为残疾人提供无障碍通行和活动的设施" style="display: inline-block;width:12px;height:12px;background:url(../images/icon_wenhaogrey.png) no-repeat; background-size: 100% 100%;margin-left: 5px;"></i>
                                </li>
                                                                                                                            </ul>
                        </div>
                        <div class="open" style="">查看全部<span></span></div>
                        <div class="stop" style="display:none;">收起<span></span></div>
                    </div>
                </div>

                                                                <div class="box_gray clearfix detail_intro_item" hideheight="135" showheight="120">
                    <div class="info_l">
                        <span class="info_ico6"></span>
                        <p>入住须知</p>
                    </div>
                    <div class="info_r">
                        <div class="info_text_mid">

                                                                                    <ul class="check_con clearfix">
                                <li>卫生间：独立卫生间</li>
                                <li>最少入住天数：1天</li>
                                <li>最多入住天数：365天</li>
                                <li>是否接待境外人士：不接待</li>                                <!--<li>被单更换：每日一换</li>-->
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
    background: #fff;
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

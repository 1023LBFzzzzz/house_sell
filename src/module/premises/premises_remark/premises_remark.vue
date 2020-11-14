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
                  <li > <a :href="'/premises/premises_info.html?premise_id='+premise_id+''">实拍照片</a>

                  </li>
                  <li class=""> <a :href="'/premises/premises_detail.html?premise_id='+premise_id+''">详细介绍</a>

                  </li>
                  <li class=""> <a :href="'/premises/premises_photo.html?premise_id='+premise_id+''">租房相册</a>

                  </li>
                  <li class=""> <a :href="'/premises/premises_dynamics.html?premise_id='+premise_id+''">预订须知</a>

                  </li>
                  <li class="cur"> <a :href="'/premises/premises_remark.html?premise_id='+premise_id+''">入住点评</a>
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
            <div class="m-rank f-cb">
              <div class="hd">综合评分<b class="s-fc1 all_avg">75.60</b>分/100分 网友综合租房信息评分（<b class="nums">205</b>人参加）</div>
              <input type="hidden" name="borough_id" id="borough_id" value="7019553">
              <input type="hidden" name="pinyin" id="pinyin" value="shiliucaizhizhongxin">
              <ul class="score">
                <li class="s1"><span class="tit">交 通：</span><span class="bor"><i style="width: 46%;"></i></span><span class="num">46%</span>
                </li>
                <li class="s2"><span class="tit">环 境：</span><span class="bor"><i style="width: 83%;"></i></span><span class="num">83%</span>
                </li>
                <li class="s3"><span class="tit">规 划：</span><span class="bor"><i style="width:79%"></i></span><span class="num">79%</span>
                </li>
                <li class="s4"><span class="tit">配 套：</span><span class="bor"><i style="width:85%"></i></span><span class="num">85%</span>
                </li>
              </ul>
              <div class="BOX">


                <div id="star" class="">
                  <span>交通:</span>
                  <ul class="star_UL" sid="0">
                    <li><a href="javascript:;">1</a></li>
                    <li><a href="javascript:;">2</a></li>
                    <li><a href="javascript:;">3</a></li>
                    <li><a href="javascript:;">4</a></li>
                    <li><a href="javascript:;">5</a></li>
                  </ul>
                  <span  class="star_result_span">
								<strong></strong>&nbsp;&nbsp;<a></a>
							</span>
                </div>

                <div id="star" class="">
                  <span>环境:</span>
                  <ul class="star_UL" sid="0">
                    <li><a href="javascript:;">1</a></li>
                    <li><a href="javascript:;">2</a></li>
                    <li><a href="javascript:;">3</a></li>
                    <li><a href="javascript:;">4</a></li>
                    <li><a href="javascript:;">5</a></li>
                  </ul>
                  <span  class="star_result_span">
								<strong></strong>&nbsp;&nbsp;<a></a>
							</span>
                </div>

                <div id="star" class="">
                  <span>规划:</span>
                  <ul class="star_UL" sid="0">
                    <li><a href="javascript:;">1</a></li>
                    <li><a href="javascript:;">2</a></li>
                    <li><a href="javascript:;">3</a></li>
                    <li><a href="javascript:;">4</a></li>
                    <li><a href="javascript:;">5</a></li>
                  </ul>
                  <span  class="star_result_span">
								<strong></strong>&nbsp;&nbsp;<a></a>
							</span>
                </div>

                <div id="star" class="">
                  <span>配套:</span>
                  <ul class="star_UL" sid="0">
                    <li><a href="javascript:;">1</a></li>
                    <li><a href="javascript:;">2</a></li>
                    <li><a href="javascript:;">3</a></li>
                    <li><a href="javascript:;">4</a></li>
                    <li><a href="javascript:;">5</a></li>
                  </ul>
                  <span  class="star_result_span">
								<strong></strong>&nbsp;&nbsp;<a></a>
							</span>
                </div>
           </div>



            </div>
            <div class="comment_form">
              <form id="house_comment_form">
                <input type="hidden" name="house_id" id="house_id" value="7019553">
                <input type="hidden" name="capacity" id="capacity" value="">
                <input type="hidden" name="validate" id="validate" value="">
                <div class="m-hd">
                  <h2 class="tit">我要点评：</h2>
                </div>
                <div class="m-bd">
                  <ul class="review-bd f-cb" style=" height: 150px; border: 1px solid #dbdbdb;">
                    <li><span class="tit">作者：</span>
                      <input name="editor" id="editor" type="text" value="">
                    </li>
                    <li><span class="tit">优势：</span>
                      <textarea name="content" ></textarea>
                    </li>
                    <li><span class="tit">不足：</span>
                      <textarea name="content1" ></textarea>
                    </li>
                  </ul>

                  <div class="dp_copyinfo">(只有经过实名认证的经纪人用户才能发表信息) 网友评论仅供其表达个人看法，并不代表租房信息网立场。</div>
                  <div class="review-confirm f-cb">

                    <div class="f-fr">
                      <input type="submit" class="review-btn" value="确认发表" name="submit">
                    </div>
                  </div>
                  <div class="escbox" style="display: none;">
                    <div class="bg"></div>
                    <div class="panel">
                      <p>登录后才能点评哦！</p>
                      <div class="esc_btn"><a href="http://user.loupan.com/session/sign_in_new/" target="_blank" class="esc_btn_1">去登录</a><a href="javascript:void(0);" class="esc_btn_2">取消</a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="m-mes" style="margin-top: 50px;">
              <dl class="kf"><dt><img src="http://public.loupan.com/public/assets_v3/images/48-48.png" width="48" height="48"><span>小编点评</span></dt>
                <dd>园区精心打造纯私密办公空间，每栋独享私有入户花园。商务公馆采用独栋形态，高2-4层，单体面积约500-2000㎡。掩映于绿树之间，私享窗外水岸美景，绿地公园尽收眼底。优雅、清静，乐享完全属于自身的办公天地。</dd>
              </dl>
            </div>

          </div><!--/ #content-->


          <div id="load_Ajax_GetDetalCommentAndOtherComment" class="commentlist bg_box mt_10">
            <ul class="dp_tab">
              <li class="cur dp_ico1" id="thisroom">本房源点评(23)</li>
            </ul>
            <div id="comment_box" class="comment_con" style="display: block;">
              <div class="comment_box clearfix">
                <div class="score_l"> <span class="x_textscore">4.9<em class="f_24">/5分</em></span>

                  <ul class="stars_box">
                    <li class="stars_info nomarginL"><i class="yellow_star"></i>
                    </li>
                    <li class="stars_info "><i class="yellow_star"></i>
                    </li>
                    <li class="stars_info "><i class="yellow_star"></i>
                    </li>
                    <li class="stars_info "><i class="yellow_star"></i>
                    </li>
                    <li class="stars_info"><i class="yellow_star" style="width:90%;"></i>
                    </li>
                  </ul>
                </div>
                <ul class="score_r clearfix">
                  <li><span>整洁卫生</span>4.9分</li>
                  <li><span>描述相符</span>5分</li>
                  <li><span>交通位置</span>5分</li>
                  <li><span>安全程度</span>5分</li>
                  <li><span>性价比</span>4.7分</li>
                </ul>
              </div>
              <div class="comment_list" id="selfcomment">
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="o9雨过天晴" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/20,0,78,33450,132,132,3753fad1.jpg">
                  <div class="dp_con">
                    <h6 data-id="114144681700">
                      <span class="col_pink">o9雨过天晴</span>入住时间：
                      <if>2019年07月</if>
                    </h6>
                    老板人非常好👍，很人性化，以后还会再来</div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="风火" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/51,0,12,107683,480,480,6bf167e0.jpg">
                  <div class="dp_con">
                    <h6 data-id="103898162700">
                      <span class="col_pink">风火</span>入住时间：
                      <if>2019年05月</if>
                    </h6>
                    五一普遍价高，总体来说满意</div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="南门路口" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/18,0,46,6807,208,207,1444da93.jpg">
                  <div class="dp_con">
                    <h6 data-id="43044299000">
                      <span class="col_pink">南门路口</span>入住时间：
                      <if>2018年10月</if>
                    </h6>
                    1,入住前就抱着错峰出行的目的，想在国庆最后一天去海边，人少，游玩不会太拥挤。 2,结果去了以后才被当地告知由于前段时候台风问题，海滩还没开放。最后还得开车跑到7公里以外的另一处海滩。 3,从住宿上来讲，体验还行，很幽静。 4,从游玩方面来讲，出行很麻烦。 产品建议： 1，一般住民宿就是为了去当地游玩，希望在产品界面也收集一些游玩信息给用户查阅。譬如：当地旅游局网址，旅游局公告，这些信息做些数据抓取就能办到，也能提高用户体验。 2，外出旅游主要三要素（吃，主，行），现在只是粗暴的解决了住的问题，建议在界面中也植入吃的推荐和行的路径，不仅产品能提高竞争力，也能带来增值服务收入，何乐而不为。
                    <div
                      class="reply_box">
                      <div class="arrow_top"></div>
                      <h5>房东回复:</h5>

                      <p>内心是温暖潮湿的地方，适合任何东西生长 愿您及家人 在时光里享受温暖，在流年里淡笑花开 感谢您的肯定和联系，我们会努力做的更好～ 蝴蝶家客栈，住进时光里～～</p>
                    </div>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="尹尹j2" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/16,0,7,9033,132,132,e668b967.jpg">
                  <div class="dp_con">
                    <h6 data-id="38059077700">
                      <span class="col_pink">尹尹j2</span>入住时间：
                      <if>2018年08月</if>
                    </h6>
                    房间宽敞明亮，非常舒适，下次一定要来这家定房哦
                    <div class="reply_box">
                      <div class="arrow_top"></div>
                      <h5>房东回复:</h5>

                      <p>时光沉淀，如一抹繁华的艳阳，从夏日傍晚清凉的池塘中滑落，悄然走进了秋日的诗行！ 蝴蝶家 住进时光里</p>
                    </div>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="亚亚说要有光" alt="" class="dp_pic72" src="https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eopsSZ2rTiaicErQu8JicBahGVLceX17ehFKEoic3g2icx8W3icpP5Lsxt8eicPCyPHuDdM47XK3hpiadPETA/132">
                  <div class="dp_con">
                    <h6 data-id="37397845600">
                      <span class="col_pink">亚亚说要有光</span>入住时间：
                      <if>2018年08月</if>
                    </h6>
                    很难得的一次体验，超级不错，很满意。下次还会选择这一家。
                    <div class="reply_box">
                      <div class="arrow_top"></div>
                      <h5>房东回复:</h5>

                      <p>爱的时候不辜负人 玩的时候不辜负风景 睡觉时不辜负床 一个人时不辜负自己 蝴蝶家 住进时光里</p>
                    </div>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="临武舒航文体陈亚" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/15,0,87,28485,132,132,f420d1de.jpg">
                  <div class="dp_con">
                    <h6 data-id="36432689500">
                      <span class="col_pink">临武舒航文体陈亚</span>入住时间：
                      <if>2018年07月</if>
                    </h6>
                    满分民宿，小猪推荐得太好了，老板娘热情，一楼很好玩！下次还来
                    <div class="reply_box">
                      <div class="arrow_top"></div>
                      <h5>房东回复:</h5>

                      <p>世界上有一千种等待， 最好的那一种叫做来日可期， 点点星灯与你来日可期！ 蝴蝶家 住进时光里</p>
                    </div>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="饶安防监控系统18" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/15,0,84,31384,132,132,3cc9e05d.jpg">
                  <div class="dp_con">
                    <h6 data-id="36184536800">
                      <span class="col_pink">饶安防监控系统18</span>入住时间：
                      <if>2018年07月</if>
                    </h6>
                    完全没有想象到 比预期的要好很多
                    <div class="reply_box">
                      <div class="arrow_top"></div>
                      <h5>房东回复:</h5>

                      <p>生活最沉重的负担不是工作，而是无聊，若不抽出时间，来创造自己想要的生活，你最终将不得不花费大量的时间，来应付自己不想要的生活！ 蝴蝶家 住进时光里</p>
                    </div>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="情绪病h" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/8,0,23,8567,260,260,18ce09cd.jpg">
                  <div class="dp_con">
                    <h6 data-id="35393017500">
                      <span class="col_pink">情绪病h</span>入住时间：
                      <if>2018年07月</if>
                    </h6>
                    假期愉快结束，老板娘人挺好的，环境也还不错
                    <div class="reply_box">
                      <div class="arrow_top"></div>
                      <h5>房东回复:</h5>

                      <p>我想成為一個溫柔的人，因為會被溫柔的人那樣對待，深深瞭解那種被溫柔對待的感覺！ 蝴蝶家 住进时光里</p>
                    </div>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="freedom_fu" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/8,0,19,8755,260,260,976ffdd9.jpg">
                  <div class="dp_con">
                    <h6 data-id="34561312000">
                      <span class="col_pink">freedom_fu</span>入住时间：
                      <if>2018年07月</if>
                    </h6>
                    房东非常好，有求必应。
                    <div class="reply_box">
                      <div class="arrow_top"></div>
                      <h5>房东回复:</h5>

                      <p>每个人都行走在逐梦的路上，为了自己的梦想而奋发向上，犹如一道曙光，照亮了生活！ 蝴蝶家 住进时光里</p>
                    </div>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="Yokosd" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/14,0,95,23479,363,363,ccb92a65.jpg">
                  <div class="dp_con">
                    <h6 data-id="32594659600">
                      <span class="col_pink">Yokosd</span>入住时间：
                      <if>2018年06月</if>
                    </h6>
                    房东人美又好！干净舒服！！！还会去！！
                    <div class="reply_box">
                      <div class="arrow_top"></div>
                      <h5>房东回复:</h5>

                      <p>世界先爱了我，我不能不爱它，只记花开不记人，你在花里，如花在风中！ 蝴蝶家 住进时光里</p>
                    </div>
                  </div>
                </div>
                <input type="hidden" id="commentIdDialog" value="">
                <div class="pagination_v2 pb0_vou"> <span class="active_link">1</span><a target="_self" href="#ongo" onclick="javascript: jumpToPage(2);return false;">2</a><a target="_self" href="#ongo" onclick="javascript: jumpToPage(3);return false;">3</a><a class="font_st" target="_self" href="#ongo"
                                                                                                                                                                                                                                                                     onclick="javascript: jumpToPage(2);return false;">></a>
                </div>
              </div>
            </div>
            <div id="othercomment_box" class="comment_con" style="display: none;">
              <div class="comment_box clearfix">
                <div class="score_l"> <span class="x_textscore">4.9<em class="f_24">/5分</em></span>

                  <ul class="stars_box">
                    <li class="stars_info nomarginL"><i class="yellow_star"></i>
                    </li>
                    <li class="stars_info "><i class="yellow_star"></i>
                    </li>
                    <li class="stars_info "><i class="yellow_star"></i>
                    </li>
                    <li class="stars_info "><i class="yellow_star"></i>
                    </li>
                    <li class="stars_info"><i class="yellow_star" style="width:90%;"></i>
                    </li>
                  </ul>
                </div>
                <ul class="score_r clearfix">
                  <li><span>整洁卫生</span>5分</li>
                  <li><span>描述相符</span>4.9分</li>
                  <li><span>交通位置</span>4.8分</li>
                  <li><span>安全程度</span>5分</li>
                  <li><span>性价比</span>4.9分</li>
                </ul>
              </div>
              <div class="comment_list" id="othercomment">
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="慕剑楠" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/51,0,72,41898,260,260,e3b3e68b.jpg">
                  <div class="dp_con">
                    <h5 class="dp_tit"><a href="http://sz.xiaozhu.com/fangzi/8847474163.html" target="_blank">西涌（西冲） 舒适宜居宽敞阳光大床房近沙滩 ></a></h5>

                    <h6 data-id="125263201200"><span class="col_pink">慕剑楠</span>入住时间：
                      2019年10月
                    </h6>

                    <div class="lodger-comment">房子很干净，姐姐人也挺好。</div>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="胡佳3026" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/8,0,19,8755,260,260,976ffdd9.jpg">
                  <div class="dp_con">
                    <h5 class="dp_tit"><a href="http://sz.xiaozhu.com/fangzi/8847474163.html" target="_blank">西涌（西冲） 舒适宜居宽敞阳光大床房近沙滩 ></a></h5>

                    <h6 data-id="120041308300"><span class="col_pink">胡佳3026</span>入住时间：
                      2019年08月
                    </h6>

                    <div class="lodger-comment">老板人很好，离海滩近</div>
                    <div class="reply_box">
                      <div class="arrow_top"></div>
                      <h5>房东回复:</h5>
                      谢谢，感谢入住哈
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="代代dg" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/19,0,97,46400,132,132,d990e6a7.jpg">
                  <div class="dp_con">
                    <h5 class="dp_tit"><a href="http://sz.xiaozhu.com/fangzi/9009760463.html" target="_blank">西冲西涌沙滩整独栋四室一厅麻将房可住8人 ></a></h5>

                    <h6 data-id="108929025700"><span class="col_pink">代代dg</span>入住时间：
                      2019年06月
                    </h6>

                    <div class="lodger-comment">环境还不错 老板人也很热情 给人感觉很亲切 入住体验特别好</div>
                    <input type="hidden" id="commentId_108929025700" value="">
                    <input type="hidden" id="imgId_108929025700" value="">
                    <ul class="pic_show clearfix">
                      <li>
                        <a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="1" commentid="108929025700">
                          <img lazy_src="finish" alt="" src="https://image.xiaozhustatic2.com/00,87,65/19,0,66,48945,921,691,f728708b.jpg">
                        </a>
                      </li>
                    </ul>
                    <ul class="thumb-photo-nav" style="display:none;">
                      <li>
                        <div class="cur" style=""></div>
                        <a href="javascript:void(0);">
                          <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic1.com/00,666,500/19,0,66,48945,921,691,f728708b.jpg" data-imgrate="1.33" src="https://image.xiaozhustatic2.com/00,87,65/19,0,66,48945,921,691,f728708b.jpg">
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="皮队长" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/8,0,53,8783,260,260,fdc30499.jpg">
                  <div class="dp_con">
                    <h5 class="dp_tit"><a href="http://sz.xiaozhu.com/fangzi/8847474163.html" target="_blank">西涌（西冲） 舒适宜居宽敞阳光大床房近沙滩 ></a></h5>

                    <h6 data-id="105512827500"><span class="col_pink">皮队长</span>入住时间：
                      2019年05月
                    </h6>

                    <div class="lodger-comment">很好，店主人很好，住得也放心，比较舒服，哪怕晚了些退房也没关系，谢谢店主</div>
                    <div class="reply_box">
                      <div class="arrow_top"></div>
                      <h5>房东回复:</h5>
                      可爱一家人，感谢您选择蝴蝶家客栈，祝您未来的每一天幸福快乐哦～
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="koIris" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/51,0,26,98138,100,100,ac163478.jpg">
                  <div class="dp_con">
                    <h5 class="dp_tit"><a href="http://sz.xiaozhu.com/fangzi/8847474163.html" target="_blank">西涌（西冲） 舒适宜居宽敞阳光大床房近沙滩 ></a></h5>

                    <h6 data-id="102688508300"><span class="col_pink">koIris</span>入住时间：
                      2019年04月
                    </h6>

                    <div class="lodger-comment">还是可以的，店家很热情，人也不错</div>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="卢小文文" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/8,0,23,8567,260,260,18ce09cd.jpg">
                  <div class="dp_con">
                    <h5 class="dp_tit"><a href="http://sz.xiaozhu.com/fangzi/8847474163.html" target="_blank">西涌（西冲） 舒适宜居宽敞阳光大床房近沙滩 ></a></h5>

                    <h6 data-id="44392753500"><span class="col_pink">卢小文文</span>入住时间：
                      2018年10月
                    </h6>

                    <div class="lodger-comment">蝴蝶家很不错，去的时候只有我和我朋友两个人，房东超级满足我们两个，基本都是免费玩，但是西涌在维修所以附近很少人，吃饭什么的都很少，可是房东都帮我们找人煮给我们吃，还找人送我们去看日出，炒鸡好。</div>
                    <div class="reply_box">
                      <div class="arrow_top"></div>
                      <h5>房东回复:</h5>
                      两个可爱美好的小朋友 俏丽丽的站在那 就是最美的风景 愿风起雨落，云卷云舒都有彼此陪伴 愿两个宝宝岁月静好，幸福快乐
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="lyy小可爱" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/8,0,23,8567,260,260,18ce09cd.jpg">
                  <div class="dp_con">
                    <h5 class="dp_tit"><a href="http://sz.xiaozhu.com/fangzi/9009760463.html" target="_blank">西冲西涌沙滩整独栋四室一厅麻将房可住8人 ></a></h5>

                    <h6 data-id="40939445500"><span class="col_pink">lyy小可爱</span>入住时间：
                      2018年09月
                    </h6>

                    <div class="lodger-comment">感觉还不错，店家挺好的，院子里很有文艺气息，虽然因为台风没能去沙滩，不过也没多大影响我们一群人的心情，第一天下午去到打打麻将，傍晚烧烧烤，别是一番乐趣，凌晨的时候开始大风大雨，早上早早的就出发回家了，幸好赶在台风越来越猛前回到了家。这趟旅行还是一次很有意义的，回去的路上大雨大风树枝树叶满天飞。一种别样的体验。</div>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="lisasasasasasa" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/8,0,11,8759,260,260,71798c1d.jpg">
                  <div class="dp_con">
                    <h5 class="dp_tit"><a href="http://sz.xiaozhu.com/fangzi/9009473763.html" target="_blank">西冲西涌沙滩蝴蝶家整层三室一厅套房可入住6人 ></a></h5>

                    <h6 data-id="38905095100"><span class="col_pink">lisasasasasasa</span>入住时间：
                      2018年08月
                    </h6>

                    <div class="lodger-comment">和家人一起去的西冲，斜坡下去就有露天停车场🅿很方便，是家很温馨的名宿。 每个房间都有一个厕所可以洗澡，我觉得水不够大，房间的灯都是黄色灯，比较小清新但是不实用，化妆的妹子来说不太方便，只能到大厅的全身镜化妆，房间里面简洁大方，但是没有凳子配桌子，没办法化妆梳头卸妆什么的，一家人来住还是蛮方便的。三个房间各有一个独立钥匙。 每个房间都有配一个衣帽架，三个一起很方便晾衣服 阳台够大 还要补充的一点是晚上吃完饭回来想休息 附近居然有人在k歌 怕吵的可能就没办法在附近住 隔音不太好 阿姨蛮有礼貌 每次都会跟我们打招呼
                      门口有水可以洗脚 也有拖鞋可以穿出去玩</div>
                    <input type="hidden" id="commentId_38905095100" value="">
                    <input type="hidden" id="imgId_38905095100" value="">
                    <ul class="pic_show clearfix">
                      <li>
                        <a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="1" commentid="38905095100">
                          <img lazy_src="finish" alt="" src="https://image.xiaozhustatic1.com/00,87,65/16,0,21,32741,2666,2000,4a03cd87.jpg">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="2" commentid="38905095100">
                          <img lazy_src="finish" alt="" src="https://image.xiaozhustatic3.com/00,87,65/16,0,70,32539,2666,2000,6bdbd34d.jpg">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="3" commentid="38905095100">
                          <img lazy_src="finish" alt="" src="https://image.xiaozhustatic2.com/00,87,65/16,0,14,32585,2666,2000,e9f53855.jpg">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="4" commentid="38905095100">
                          <img lazy_src="finish" alt="" src="https://image.xiaozhustatic1.com/00,87,65/16,0,52,32654,2666,2000,29af81b8.jpg">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="5" commentid="38905095100">
                          <img lazy_src="finish" alt="" src="https://image.xiaozhustatic3.com/00,65,65/16,0,51,32768,2000,2000,b7378501.jpg">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="6" commentid="38905095100">
                          <img lazy_src="finish" alt="" src="https://image.xiaozhustatic2.com/00,65,116/16,0,29,32350,1080,1920,9b946d9c.jpg">
                        </a>
                      </li>
                    </ul>
                    <ul class="thumb-photo-nav" style="display:none;">
                      <li>
                        <div class="cur" style=""></div>
                        <a href="javascript:void(0);">
                          <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic3.com/00,667,500/16,0,21,32741,2666,2000,4a03cd87.jpg" data-imgrate="1.33" src="https://image.xiaozhustatic1.com/00,87,65/16,0,21,32741,2666,2000,4a03cd87.jpg">
                        </a>
                      </li>
                      <li>
                        <div class="cur" style=""></div>
                        <a href="javascript:void(0);">
                          <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic2.com/00,667,500/16,0,70,32539,2666,2000,6bdbd34d.jpg" data-imgrate="1.33" src="https://image.xiaozhustatic3.com/00,87,65/16,0,70,32539,2666,2000,6bdbd34d.jpg">
                        </a>
                      </li>
                      <li>
                        <div class="cur" style=""></div>
                        <a href="javascript:void(0);">
                          <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic1.com/00,667,500/16,0,14,32585,2666,2000,e9f53855.jpg" data-imgrate="1.33" src="https://image.xiaozhustatic2.com/00,87,65/16,0,14,32585,2666,2000,e9f53855.jpg">
                        </a>
                      </li>
                      <li>
                        <div class="cur" style=""></div>
                        <a href="javascript:void(0);">
                          <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic3.com/00,667,500/16,0,52,32654,2666,2000,29af81b8.jpg" data-imgrate="1.33" src="https://image.xiaozhustatic1.com/00,87,65/16,0,52,32654,2666,2000,29af81b8.jpg">
                        </a>
                      </li>
                      <li>
                        <div class="cur" style=""></div>
                        <a href="javascript:void(0);">
                          <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic2.com/00,500,500/16,0,51,32768,2000,2000,b7378501.jpg" data-imgrate="1.00" src="https://image.xiaozhustatic3.com/00,65,65/16,0,51,32768,2000,2000,b7378501.jpg">
                        </a>
                      </li>
                      <li>
                        <div class="cur" style=""></div>
                        <a href="javascript:void(0);">
                          <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic1.com/00,281,500/16,0,29,32350,1080,1920,9b946d9c.jpg" data-imgrate="0.56" src="https://image.xiaozhustatic2.com/00,65,116/16,0,29,32350,1080,1920,9b946d9c.jpg">
                        </a>
                      </li>
                    </ul>
                    <div class="reply_box">
                      <div class="arrow_top"></div>
                      <h5>房东回复:</h5>
                      房子可以不大 但是一定要有一个院子 可以装进我的诗意生活 能静享心中的那份美好 蝴蝶家 住进时光里
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="Wiezuh" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/8,0,23,8567,260,260,18ce09cd.jpg">
                  <div class="dp_con">
                    <h5 class="dp_tit"><a href="http://sz.xiaozhu.com/fangzi/9009760463.html" target="_blank">西冲西涌沙滩整独栋四室一厅麻将房可住8人 ></a></h5>

                    <h6 data-id="38824737800"><span class="col_pink">Wiezuh</span>入住时间：
                      2018年08月
                    </h6>

                    <div class="lodger-comment">好怕乒乒乓乓</div>
                    <div class="reply_box">
                      <div class="arrow_top"></div>
                      <h5>房东回复:</h5>
                      用你的心 去感知别人的冷暖 给别人多一点尊重 多一些余地 相信你的友善 定能换回一份人心本性的馨香温婉 蝴蝶家 住进时光里
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="dp_box clearfix mt_10">
                  <img lazy_src="finish" title="曾亮f5" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/8,0,11,8759,260,260,71798c1d.jpg">
                  <div class="dp_con">
                    <h5 class="dp_tit"><a href="http://sz.xiaozhu.com/fangzi/9009473763.html" target="_blank">西冲西涌沙滩蝴蝶家整层三室一厅套房可入住6人 ></a></h5>

                    <h6 data-id="38813548400"><span class="col_pink">曾亮f5</span>入住时间：
                      2018年08月
                    </h6>

                    <div class="lodger-comment">很棒的地方。住的很舒服。 要是热水更大些就更好了！</div>
                    <input type="hidden" id="commentId_38813548400" value="">
                    <input type="hidden" id="imgId_38813548400" value="">
                    <ul class="pic_show clearfix">
                      <li>
                        <a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="1" commentid="38813548400">
                          <img lazy_src="finish" alt="" src="https://image.xiaozhustatic1.com/00,65,87/16,0,37,31727,744,992,ebe0dab6.jpg">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="2" commentid="38813548400">
                          <img lazy_src="finish" alt="" src="https://image.xiaozhustatic3.com/00,65,87/16,0,28,32101,744,992,ea0d31cd.jpg">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="3" commentid="38813548400">
                          <img lazy_src="finish" alt="" src="https://image.xiaozhustatic2.com/00,65,87/16,0,11,31994,744,992,979b9fee.jpg">
                        </a>
                      </li>
                    </ul>
                    <ul class="thumb-photo-nav" style="display:none;">
                      <li>
                        <div class="cur" style=""></div>
                        <a href="javascript:void(0);">
                          <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic3.com/00,375,500/16,0,37,31727,744,992,ebe0dab6.jpg" data-imgrate="0.75" src="https://image.xiaozhustatic1.com/00,65,87/16,0,37,31727,744,992,ebe0dab6.jpg">
                        </a>
                      </li>
                      <li>
                        <div class="cur" style=""></div>
                        <a href="javascript:void(0);">
                          <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic2.com/00,375,500/16,0,28,32101,744,992,ea0d31cd.jpg" data-imgrate="0.75" src="https://image.xiaozhustatic3.com/00,65,87/16,0,28,32101,744,992,ea0d31cd.jpg">
                        </a>
                      </li>
                      <li>
                        <div class="cur" style=""></div>
                        <a href="javascript:void(0);">
                          <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic1.com/00,375,500/16,0,11,31994,744,992,979b9fee.jpg" data-imgrate="0.75" src="https://image.xiaozhustatic2.com/00,65,87/16,0,11,31994,744,992,979b9fee.jpg">
                        </a>
                      </li>
                    </ul>
                    <div class="reply_box">
                      <div class="arrow_top"></div>
                      <h5>房东回复:</h5>
                      星星很聪明 它们有理由远远地避开我们人寰 星星挂在天幕上面 像世界之灯 永远安全 蝴蝶家 住进时光里
                      <p></p>
                    </div>
                  </div>
                </div>
                <input type="hidden" id="commentIdDialog" value="">
                <div class="pagination_v2 pb0_vou"> <span class="active_link">1</span><a target="_self" href="#ongo" onclick="javascript: jumpToPage1(2);return false;">2</a><a target="_self" href="#ongo" onclick="javascript: jumpToPage1(3);return false;">3</a><a target="_self" href="#ongo" onclick="javascript: jumpToPage1(4);return false;">4</a>
                  <a
                    class="font_st" target="_self" href="#ongo" onclick="javascript: jumpToPage1(2);return false;">></a>
                </div>
              </div>
            </div>
            <!--照片轮播-->
            <div id="lightBoxDialog" class="user_unselectable" style="display:none;">
              <div class="mask"></div>
              <div class="colsed" id="close_photo_box"></div>
              <a class="detail-photo-prev"></a>
              <a class="detail-photo-next"></a>
              <div class="pic_show_box">
                <a class="rota_l"></a>
                <a class="rota_r" onselectstart="return false;"></a>
                <div class="big_pic user_unselectable">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                    <tr>
                      <td id="bigImage_pic_box">
                        <div class="pr">
                          <img id="curBigPhoto" src="" alt="">
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="small_pic_box clearfix" id="small_pic_box_father"></div>
              </div>
            </div>
            <!--/照片轮播-->
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
  //  页面加载之前
  created() {
  },data () {
    return {
      premise_id:'',
      premise: '',
      dynamic: [],
      pageIndex: 1,
      pageSize: 3,
      house: [],
      list: [],
      sameAreaList: [],
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
        token: this.token,
        pageIndex: 1,
        pageSize: 10,
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
        pageSize: 10
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
    dealAddress(address){
      var area = address.split('|')
      return area[2].substring(0,2)
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

  .dp_tab {
    padding: 10px 0 9px 20px;
    border-bottom: 1px solid #ecf0f1;
  }
  .dp_tab li.cur {
    border-bottom: 2px solid #f05b72;
    cursor: pointer;
  }
  .dp_tab li {
    display: inline-block;
    margin-right: 40px;
    padding-left: 20px;
    color: #f05b72;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
  }
  .stars_info {
    float: left;
    background: url(//jci.xiaozhustatic3.com/e19092901/images/gray_star.png) no-repeat;
    width: 18px;
    height: 18px;
    margin-left: 10px;
  }
  .x_textscore {
    font-size: 42px;
    width: 100%;
    text-align: center;
    height: 38px;
    line-height: 38px;
    display: inline-block;
    margin-bottom: 10px;
  }
  .score_r {
    float: left;
    width: 606px;
    padding: 34px 0 20px;
  }
  .score_r li {
    float: left;
    width: 202px;
    height: 20px;
    margin-bottom: 18px;
  }
  .dp_box {
    padding: 30px 0 25px;
    margin: 0 70px;
    border-top: 1px solid #ecf0f1;
    word-wrap: break-word;
    word-break: break-all;
  }
  .dp_pic72 {
    display: block;
    float: left;
    width: 72px;
    height: 72px;
    border-radius: 36px;
  }
  .dp_con h6 span {
    padding-right: 5px;
    font-weight: bold;
    color: #f05b72;
  }
  .dp_con {
    float: right;
    width: 688px;
  }
  .score_l {
    float: left;
    padding-top: 30px;
    padding: 30px 78px 0 106px;
  }
  .stars_box {
    text-align: left;
  }
  .yellow_star {
    display: inline-block;
    background: url(//jci.xiaozhustatic3.com/e19092901/images/yellow_star.png) no-repeat;
    width: 18px;
    height: 18px;
    vertical-align: top;
  }
  .f_24 {
    font-size: 24px;
  }
  .reply_box {
    position: relative;
    border-top: 1px solid #e4ebed;
    margin-top: 20px;
    padding: 20px 0 0;
    word-break: break-all;
  }
  .reply_box h5 {
    color: #959ea7;
  }
  .arrow_top {
    position: absolute;
    top: -1px;
    left: 23px;
    background: url(//jci.xiaozhustatic3.com/e19092901/images/detail/sprice.png) no-repeat 0 -93px;
    width: 13px;
    height: 7px;
  }
</style>

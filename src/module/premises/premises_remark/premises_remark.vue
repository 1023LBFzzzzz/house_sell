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
                  <!-- <p><span>已有<i class="s-fc1">{{premise.attention_number}}</i>人关注</span> -->
                  <!-- </p> -->

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
                 <div class="data_box mt20" id="identityInfo">
                  <h4 class="data_tit">我要评论<span>仅用于必要的安全环节，其他情况下将为您严格保密</span></h4>
                 </div>
                <div class="m-bd">
                  <ul class="review-bd f-cb" style=" height: 150px;">
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


          </div><!--/ #content-->


         <div id="load_Ajax_GetDetalCommentAndOtherComment" class="commentlist bg_box mt_10">
                                <ul class="dp_tab">
        <li class="dp_ico1 cur" id="thisroom">本房源点评(7)</li>
        </ul>
<div id="comment_box" class="comment_con" style="display:block;">
            <div class="comment_box clearfix">
        <div class="score_l">
            <span class="x_textscore">4.9<em class="f_24">/5分</em></span>
            <ul class="stars_box">
                                    <li class="stars_info nomarginL"><i class="yellow_star"></i></li>
                                    <li class="stars_info "><i class="yellow_star"></i></li>
                                    <li class="stars_info "><i class="yellow_star"></i></li>
                                    <li class="stars_info "><i class="yellow_star"></i></li>
                                                <li class="stars_info"><i class="yellow_star" style="width:90%;"></i></li>
                                            </ul>
        </div>
        <ul class="score_r clearfix">
            <li><span>整洁卫生</span>5分</li>
            <li><span>描述相符</span>5分</li>
            <li><span>交通位置</span>4.7分</li>
            <li><span>安全程度</span>5分</li>
            <li><span>性价比</span>5分</li>
        </ul>
    </div>
            <div class="comment_list" id="selfcomment">

<div class="dp_box clearfix mt_10">
    <img lazy_src="finish" title="夏末茶霏" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/3,21,0,63,8603,132,132,8cec769f.jpg">
    <div class="dp_con">
        <h6 data-id="117634485600">
            <span class="col_pink">夏末茶霏</span>入住时间：
                        <if>2019年08月</if>
                    </h6>
                店主小妹妹态度非常好，也很热情呦，因为订酒店比较仓促，酒店都没有啦，于是乎找到了小猪民宿，当我快要放弃的时候，幸运的找到了墨宿，Loft是我想要的，因为带着孩子和父母一起，想住个温馨舒服的地方，晚上都快一点了，我试探着打开聊天模式，没想到店主美女直接回复我啦，于是我们约好第二天入住。到后，店主美女非常热情的给我介绍家里每一个细节，包括还有免费的茶点，让人瞬间感觉的非常贴心！房间和图片一样，没有任何美化，主要店主美女还把周边的美食推荐，景点路线告诉我们啦，非常方便，墨宿，是不错的选择，家里人都说挺好的，下次有机会来成都的话，我们有缘还会来住的！最后还是要感谢店家美女，人非常好说话，因为怕孩子和父母累，所以晚点退房，店家爽快的答应了，非常感谢！下次有机会还会来墨宿！谢谢！很美好的成都之旅……最重要的是时间这么短还认识了热情友好的店主妹女！
                        <div class="reply_box">
            <div class="arrow_top"></div>
            <h5>房东回复:</h5>
            <p>
                        客人素质很高呢，离开时房间保持的特别干净，全程沟通夜很愉快~谢谢亲亲对我们的认可，期待您下次再来❤
            </p>
        </div>
            </div>
</div>
<div class="dp_box clearfix mt_10">
    <img lazy_src="finish" title="绿袖子x" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/3,8,0,53,8783,260,260,fdc30499.jpg">
    <div class="dp_con">
        <h6 data-id="109307394300">
            <span class="col_pink">绿袖子x</span>入住时间：
                        <if>2019年06月</if>
                    </h6>
                第一次在网上预约民宿，真的！一点都没有让我失望！房间实在是太美啦，很有艺术感！基本上找不出缺点，还很重要的一点是房东真的太热情了，接机服务也很到位！以后还会再来的！❤️
                        <div class="reply_box">
            <div class="arrow_top"></div>
            <h5>房东回复:</h5>
            <p>
                        不错的客人，爱惜房子准时退房，推荐给房东大大们……
            </p>
        </div>
            </div>
</div>
<div class="dp_box clearfix mt_10">
    <img lazy_src="finish" title="Arthit_q" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/3,8,0,11,8759,260,260,71798c1d.jpg">
    <div class="dp_con">
        <h6 data-id="98946219000">
            <span class="col_pink">Arthit_q</span>入住时间：
                        <if>2019年03月</if>
                    </h6>
                小姐姐家是我住过所有民宿里，最舒服，最像家的地方。
位置:成华区保利康桥，具体高铁站很近，打车不到20块钱。预定房间之后，小姐姐很贴心的告诉了门口在修路，避免绕弯。交通的话，门口有公交站，但是地铁在修，出行的话需要提前一点出门做公交，或者打车很方便。
环境:门口的安保措施很好，而且楼下有花园，吃完饭可以出来溜达溜达。安全程度也很好，不用担心。
房间:房间真的太太太太棒了！！！小姐姐还给准备了很多细节的小东西，卫生间里还有皮筋和夹子，卷发棒都给准备好了。进门的柜子里还给摆放了零食和饮料👍房间味道都香香的，特别干净，整洁。
会推介给去成都的朋友这个民宿，下次来成都一定还住这里
                <input type="hidden" id="commentId_98946219000" value="">
        <input type="hidden" id="imgId_98946219000" value="">
        <ul class="pic_show clearfix">
                                                <li><a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="1" commentid="98946219000"><img lazy_src="finish" alt="" src="https://image.xiaozhustatic2.com/00,65,65/51,0,81,68298,1080,1080,249a4c1c.jpg"></a></li>
                                    <li><a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="2" commentid="98946219000"><img lazy_src="finish" alt="" src="https://image.xiaozhustatic1.com/00,65,65/51,0,85,68583,1152,1152,c4993afa.jpg"></a></li>
                                    <li><a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="3" commentid="98946219000"><img lazy_src="finish" alt="" src="https://image.xiaozhustatic3.com/00,65,65/51,0,80,68671,1152,1152,c4392f72.jpg"></a></li>
                                    <li><a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="4" commentid="98946219000"><img lazy_src="finish" alt="" src="https://image.xiaozhustatic2.com/00,65,65/51,0,70,68156,1152,1152,c005a2a8.jpg"></a></li>

        </ul>
        <ul class="thumb-photo-nav" style="display:none;">
                        <li>
                <div class="cur" style=""></div>
                <a href="javascript:void(0);">
                    <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic1.com/00,500,500/51,0,81,68298,1080,1080,249a4c1c.jpg" data-imgrate="1.00" src="https://image.xiaozhustatic2.com/00,65,65/51,0,81,68298,1080,1080,249a4c1c.jpg">
                </a>
            </li>
                        <li>
                <div class="cur" style=""></div>
                <a href="javascript:void(0);">
                    <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic3.com/00,500,500/51,0,85,68583,1152,1152,c4993afa.jpg" data-imgrate="1.00" src="https://image.xiaozhustatic1.com/00,65,65/51,0,85,68583,1152,1152,c4993afa.jpg">
                </a>
            </li>
                        <li>
                <div class="cur" style=""></div>
                <a href="javascript:void(0);">
                    <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic2.com/00,500,500/51,0,80,68671,1152,1152,c4392f72.jpg" data-imgrate="1.00" src="https://image.xiaozhustatic3.com/00,65,65/51,0,80,68671,1152,1152,c4392f72.jpg">
                </a>
            </li>
                        <li>
                <div class="cur" style=""></div>
                <a href="javascript:void(0);">
                    <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic1.com/00,500,500/51,0,70,68156,1152,1152,c005a2a8.jpg" data-imgrate="1.00" src="https://image.xiaozhustatic2.com/00,65,65/51,0,70,68156,1152,1152,c005a2a8.jpg">
                </a>
            </li>
                    </ul>
                        <div class="reply_box">
            <div class="arrow_top"></div>
            <h5>房东回复:</h5>
            <p>
                        超超超级好的住客，进屋就像没住过人一样的干净整洁，连每个垃圾桶的垃圾都帮我们倒掉换了干净的垃圾袋~欢迎您下次光临，推荐给其他房东！！！
            </p>
        </div>
            </div>
</div>
<div class="dp_box clearfix mt_10">
    <img lazy_src="finish" title="童雄林" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/3,8,0,88,8632,260,260,2b8e819c.jpg">
    <div class="dp_con">
        <h6 data-id="98759395500">
            <span class="col_pink">童雄林</span>入住时间：
                        <if>2019年03月</if>
                    </h6>
                下订单后，首先是热情的90后美女房东给你“指点一切”😀，细致热情周到。其次房间设施和装修风格。都非常好，与图片一致，牛奶，饮料饼干，零食。都有提供，而且免费哟非常棒。👍！最后总结是一场非常愉快的民俗体验。下次去成都会再次入住！
最后一点小建议，也和房东沟通过，不知道他解决没有？就是床垫如果换好一点就更完美了。😀
                        <div class="reply_box">
            <div class="arrow_top"></div>
            <h5>房东回复:</h5>
            <p>
                        您提了意见以后立马加了软床垫啦~
现在客人可以睡软软的床垫啦~
谢谢您的宝贵意见~
我们会努力做到更好~
            </p>
        </div>
            </div>
</div>
<div class="dp_box clearfix mt_10">
    <img lazy_src="finish" title="南城__" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/5,51,0,46,53880,260,260,e1e8941c.jpg">
    <div class="dp_con">
        <h6 data-id="97869985200">
            <span class="col_pink">南城__</span>入住时间：
                        <if>2019年03月</if>
                    </h6>
                非常不错的一个新民宿，实物与照片几乎没有差距，祖母绿和金色的设计搭配也是非常经典，房主也特别有爱可爱，墙裂推荐，下次有机会还来！
                <input type="hidden" id="commentId_97869985200" value="">
        <input type="hidden" id="imgId_97869985200" value="">
        <ul class="pic_show clearfix">
                                                <li><a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="1" commentid="97869985200"><img lazy_src="finish" alt="" src="https://image.xiaozhustatic1.com/00,116,65/51,0,58,58792,960,540,a9f560bc.jpg"></a></li>
                                    <li><a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="2" commentid="97869985200"><img lazy_src="finish" alt="" src="https://image.xiaozhustatic3.com/00,116,65/51,0,68,58354,960,540,16c6f2f9.jpg"></a></li>
                                    <li><a href="javascript:void(0);" class="thumbimg detail_comment_thumbimg" imgid="3" commentid="97869985200"><img lazy_src="finish" alt="" src="https://image.xiaozhustatic2.com/00,116,65/51,0,68,58354,960,540,16c6f2f9.jpg"></a></li>

        </ul>
        <ul class="thumb-photo-nav" style="display:none;">
                        <li>
                <div class="cur" style=""></div>
                <a href="javascript:void(0);">
                    <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic3.com/00,800,450/51,0,58,58792,960,540,a9f560bc.jpg" data-imgrate="1.78" src="https://image.xiaozhustatic1.com/00,116,65/51,0,58,58792,960,540,a9f560bc.jpg">
                </a>
            </li>
                        <li>
                <div class="cur" style=""></div>
                <a href="javascript:void(0);">
                    <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic2.com/00,800,450/51,0,68,58354,960,540,16c6f2f9.jpg" data-imgrate="1.78" src="https://image.xiaozhustatic3.com/00,116,65/51,0,68,58354,960,540,16c6f2f9.jpg">
                </a>
            </li>
                        <li>
                <div class="cur" style=""></div>
                <a href="javascript:void(0);">
                    <img lazy_src="finish" data-bigimg="https://image.xiaozhustatic1.com/00,800,450/51,0,68,58354,960,540,16c6f2f9.jpg" data-imgrate="1.78" src="https://image.xiaozhustatic2.com/00,116,65/51,0,68,58354,960,540,16c6f2f9.jpg">
                </a>
            </li>
                    </ul>
                        <div class="reply_box">
            <div class="arrow_top"></div>
            <h5>房东回复:</h5>
            <p>
                        不错的房客，全程沟通很愉快，期待您下次光临
            </p>
        </div>
            </div>
</div>
<div class="dp_box clearfix mt_10">
    <img lazy_src="finish" title="囧囧88" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/3,8,0,92,8867,260,260,a9349e76.jpg">
    <div class="dp_con">
        <h6 data-id="97804144000">
            <span class="col_pink">囧囧88</span>入住时间：
                        <if>2019年03月</if>
                    </h6>
                很喜欢！！！房东姐姐人也巨好！！！
                        <div class="reply_box">
            <div class="arrow_top"></div>
            <h5>房东回复:</h5>
            <p>
                        不错的房客，可爱的小妹妹，欢迎你们下次再来
            </p>
        </div>
            </div>
</div>
<div class="dp_box clearfix mt_10">
    <img lazy_src="finish" title="unreality" alt="" class="dp_pic72" src="https://image.xiaozhustatic2.com/22/5,51,0,90,63482,260,260,205e75a0.jpg">
    <div class="dp_con">
        <h6 data-id="98319354100">
            <span class="col_pink">unreality</span>入住时间：
                        <if>2019年03月</if>
                    </h6>
                很好很cool 很舒适  很值得推荐
                        <div class="reply_box">
            <div class="arrow_top"></div>
            <h5>房东回复:</h5>
            <p>
                        不错的房客，屋子保持的很干净~
            </p>
        </div>
            </div>
</div>
<input type="hidden" id="commentIdDialog" value="">
    </div>
</div>

<div id="othercomment_box" class="comment_con" style="display:none;">
        <div class="comment_box clearfix">
        <div class="score_l">
                        <span class="x_textscore">4.9<em class="f_24">/5分</em></span>
            <ul class="stars_box">
                                    <li class="stars_info nomarginL"><i class="yellow_star"></i></li>
                                    <li class="stars_info "><i class="yellow_star"></i></li>
                                    <li class="stars_info "><i class="yellow_star"></i></li>
                                    <li class="stars_info "><i class="yellow_star"></i></li>
                                                <li class="stars_info"><i class="yellow_star" style="width:90%;"></i></li>
                                            </ul>
        </div>
        <ul class="score_r clearfix">
            <li><span>整洁卫生</span>5分</li>
            <li><span>描述相符</span>5分</li>
            <li><span>交通位置</span>4.7分</li>
            <li><span>安全程度</span>5分</li>
            <li><span>性价比</span>5分</li>
        </ul>
    </div>

        <div class="comment_list" id="othercomment">
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
                <tbody><tr>
                    <td id="bigImage_pic_box">
                        <div class="pr">
                            <img id="curBigPhoto" src="" alt="">
                        </div>
                    </td>
                </tr>
            </tbody></table>
        </div>
        <div class="small_pic_box clearfix" id="small_pic_box_father">
        </div>
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
  #load_Ajax_GetDetalCommentAndOtherComment{
    margin-top: 50px;
  }
  .dp_ico1, .dp_ico2 {
    background: url(//jci.xiaozhustatic2.com/e20201109/images/detail/sprice.png) no-repeat;
}
.data_box {
    font: normal 14px/22px "Microsoft YaHei";
    color: #2c3e50;
    padding: 0 20px;
    position: relative;
    background: transparent;
}
.data_tit {
    border-bottom: 1px solid #eee;
    height: 52px;
    line-height: 52px;
    color: #30c3a6;
}
.data_tit>span {
    font-size: 14px;
    color: #959ea7;
    font-weight: normal;
    margin-left: 20px;
}
.data_norms li {
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
    padding-left: 10px;
}
.data_norms li>label {
    margin-right: 20px;
    color: #959ea7;
}
.data_norms li>.data_notfilled {
    color: #c2cacd;
    font-size: 14px;
}
.dp_copyinfo{
  margin-left: 20px;
}
.f-fr{
  margin-right: 20px;
}
</style>

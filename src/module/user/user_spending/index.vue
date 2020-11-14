<template>
  <div id="app">
    <header class="am-topbar  wos-header" style="margin:0px;padding: 0px" >
      <div class="am-container">
        <h1 class="am-topbar-brand">
          <a href="#"><img src="../../../static/images/epad.jpg" alt=""></a>
        </h1>

        <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-warning am-show-sm-only" data-am-collapse="{target: '#collapse-head'}">
          <span class="am-sr-only">导航切换</span>
          <span class="am-icon-bars"></span>
        </button>

        <div v-if="user===''">
        <div class="am-collapse am-topbar-collapse" id="collapse-head">
          <div class="am-topbar-right">
            <a  href="/news/news_login.html"><span ></span>注册</a>
          </div>

          <div class="am-topbar-right">
            <a   href="/news/news_login.html" ><span ></span> 登录</a>
          </div>
        </div>
        </div>

        <div v-if="user!==''">
          <div class="am-collapse am-topbar-collapse" >
            <div class="am-topbar-right">
              <a href="#" @click="out()"><span >退出</span></a>
            </div>

            <div class="am-topbar-right">
              <a  ><span >{{user.n_uname}}</span> </a>
            </div>
          </div>
        </div>

      </div>
    </header>

    <div id="headerwrapper" >

      <div id="menu" class="mod-navbar " alog-group="home-menu">
        <div id="channel-shanghai" class="channel-shanghai clearfix" style="display: none; z-index: 9;">
          <div class="menu-list">
            <ul class="clearfix lavalamp" style="position: relative;">
              <div class="current active lavalamp-object" style="position: absolute; width: 0px; height: 0px; top: 0px; left: 0px;"></div>
              <li class="navitem-index lavalamp-item" style="z-index: 5; position: relative;">
                <a href="/index.html">首页</a>
              </li>
              <li class="lavalamp-item" style="z-index: 5; position: relative;">
                <a href="/news/news_guonei.html">国内</a>
              </li>
              <li class="lavalamp-item " style="z-index: 5; position: relative;">
                <a href="/news/news_guoji.html">国际</a>
              </li>
              <li class=" lavalamp-item" style="z-index: 5; position: relative;">
                <a href="/news/news_junshi.html">军事</a>
              </li>
              <li class="lavalamp-item" style="z-index: 5; position: relative;">
                <a href="/news/news_yule.html">娱乐</a>
              </li>
              <li class="lavalamp-item" style="z-index: 5; position: relative;">
                <a href="/news/news_tiyu.html">体育</a>
              </li>
              <li class="lavalamp-item" style="z-index: 5; position: relative;">
                <a href="/news/news_recommend.html" target="_blank">个性推荐</a>
              </li>
            </ul>
          </div>
          <i class="slogan"></i>

        </div>
        <div id="channel-all" class="channel-all clearfix" style="z-index: 9;">
          <div class="menu-list">
            <ul class="clearfix lavalamp" style="position: relative;">
              <div class="lavalamp-object" style="position: absolute; width: 68px; height: 40px; top: 0px; left: 0px;"></div>
              <li class="current active navitem-index lavalamp-item" style="z-index: 5; position: relative;">
                <a href="/index.html">首页</a>
              </li>
              <li class="lavalamp-item" style="z-index: 5; position: relative;">
                <a href="/news/news_guonei.html">国内</a>
              </li>
              <li class="lavalamp-item" style="z-index: 5; position: relative;">
                <a href="/news/news_guoji.html">国际</a>
              </li>
              <li class="lavalamp-item" style="z-index: 5; position: relative;">
                <a href="/news/news_junshi.html">军事</a>
              </li>
              <li class="lavalamp-item" style="z-index: 5; position: relative;">
                <a href="/news/news_yule.html">娱乐</a>
              </li>
              <li class="lavalamp-item" style="z-index: 5; position: relative;">
                <a href="/news/news_tiyu.html">体育</a>
              </li>
              <li class="lavalamp-item" style="z-index: 5; position: relative;">
                <a href="/news/news_recommend.html" target="_blank">个性推荐</a>
              </li>
            </ul>
          </div>
          <i class="slogan"></i>

        </div>
      </div>
    </div>


    <div id="body" alog-alias="b">

      <div class="column clearfix" id="col_toparea">
        <div class="toparea-carousel" alog-group="focussports-carousel">
          <div class="imgplayer clearfix" id="imgplayer">
            <div id="imgplayer-control">
              <a href="javascript:void(0);" mon="col=carousel&pos=ctr_l&ct=1&pn=0" id="imgplayer-prev"></a>
              <a href="javascript:void(0);" mon="col=carousel&pos=ctr_r&ct=1&pn=0" id="imgplayer-next"></a>
            </div>
            <div data-am-widget="slider" class="imgview am-slider am-slider-c1" id="imgView" data-am-slider='{"directionNav":false}'>
              <ul class="am-slides">
                <li v-for="(news,index) in first" v-if="index === 9">
                  <a :href="'/news/news_content.html?n_nid='+news.n_nid+''">
                    <img :src="'../../../../static/images/'+news.n_nimage"></a>
                  <div class="am-slider-desc">{{news.n_ntitle}}</div>

                </li>
                <li v-for="(news,index) in first" v-if="index === 1">
                  <a :href="'/news/news_content.html?n_nid='+news.n_nid+''">
                    <img :src="'../../../../static/images/'+news.n_nimage"></a>
                  <div class="am-slider-desc">{{news.n_ntitle}}</div>

                </li>
                <li v-for="(news,index) in first" v-if="index === 2">
                  <a :href="'/news/news_content.html?n_nid='+news.n_nid+''">
                    <img :src="'../../../../static/images/'+news.n_nimage"></a>
                  <div class="am-slider-desc">{{news.n_ntitle}}</div>

                </li>
                <li v-for="(news,index) in first" v-if="index === 3">
                  <a :href="'/news/news_content.html?n_nid='+news.n_nid+''">
                    <img :src="'../../../../static/images/'+news.n_nimage"></a>
                  <div class="am-slider-desc">{{news.n_ntitle}}</div>
                </li>
              </ul>
            </div>
            <div class="imgnav-mask"></div>
            <div class="imgnav" id="imgNav">
              <a class="" index="3" mon="col=carousel&pos=dots&a=9pn=3" href="javascript:void(0);">3</a>

              <a class="" index="2" mon="col=carousel&pos=dots&a=9pn=2" href="javascript:void(0);">2</a>

              <a class="active" index="1" mon="col=carousel&pos=dots&a=9pn=1" href="javascript:void(0);">1</a>

            </div>
            <div class="imgtit" id="imgTitle">
              <a href="http://pic.chinadaily.com.cn/2018-09/23/content_36965611.htm" target="_blank" mon="col=carousel&pos=title&a=9&ct=1&pn=1"><strong>迎丰收 晒丰收 庆丰收</strong></a>
            </div>
          </div>
        </div>
        <div class="l-right-col" alog-group="log-internal-right">
          <div class="mod" id="internal-aside-video">
            <div class="hd">
              <h3>最新热点<span class="dec">INSTANT NEWS</span></h3>
            </div>
            <div class="bd">
              <div id="instant-news">
                <ul class="ulist mix-ulist">
                  <li v-for="(news,index) in first" v-if="index <9 ">
                    <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" class="title" target="_blank" mon="col=18&pn=1">{{news.n_ntitle}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column clearfix" id="col_focus" alog-group="log-focus">
        <div class="l-left-col">
          <div class="column-title">
            <div class="column-title-border">
              <h2><span class="subtitle">国内新闻</span><span class="cname">DOMESTIC NEWS</span></h2>
            </div>
          </div>
          <div class="b-left">
            <ul class="ulist" >
              <li class="bold-item" v-for="(news,index) in jiaodian" v-if="index === 0" >
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=1" target="_blank" style="color: black" >{{subStringstr(news.n_ntitle)}}</a>
              </li>
              <li v-for="(news,index) in jiaodian" v-if="index < 6">
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=8" target="_blank">{{subStringstr(news.n_ntitle)}}</a>
              </li>
            </ul>

            <ul class="ulist ">
              <li class="bold-item"  v-for="(news,index) in jiaodian" v-if="index === 4">
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=7" target="_blank">{{subStringstr(news.n_ntitle)}}</a>
              </li>
              <li v-for="(news,index) in jiaodian" v-if="index <5">
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=12" target="_blank">{{subStringstr(news.n_ntitle)}}</a>
              </li>
            </ul>

          </div>
          <div class="ilist">
            <ul>
              <li v-for="(news,index) in jiaodian" v-if="index === 0" >
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=2&a=12&pn=1" target="_blank">
                  <img :src="'../../../../static/images/'+news.n_nimage"><span class="title">{{subStringstr(news.n_ntitle)}}</span>
                </a>
              </li>
              <li v-for="(news,index) in jiaodian" v-if="index === 1" >
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=2&a=12&pn=2" target="_blank">
                  <img :src="'../../../../static/images/'+news.n_nimage"><span class="title">{{subStringstr(news.n_ntitle)}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="l-right-col">
          <div class="mod" id="focus-aside-news">
            <div class="hd">
              <h3>视频新闻<span class="dec">VIDEO NEWS</span></h3>

            </div>
            <div class="bd">
              <div id="focus-videos">
                <div class="topic">
                  <p class="picture">
                    <a href="http://www.iqiyi.com/v_19rr7omigs.html" target="_blank" mon="">
                      <img src="http://pic.rmb.bdstatic.com/1f541422405ab18797795c0adc3318eb.jpg@h_660,w_370"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title">
                    <a href="http://www.iqiyi.com/v_19rr7omigs.html" target="_blank" mon="">中央措辞严厉批祁连山生态问题 8责任人被问责</a>
                  </p>
                </div>
                <div class="topic">
                  <p class="picture">
                    <a href="http://v.qq.com/x/page/a0024q7bkg0.html" target="_blank" mon="">
                      <img src="http://pic.rmb.bdstatic.com/d46f662c1900de051da6de2eef2c485f.jpg@h_660,w_370"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title">
                    <a href="http://v.qq.com/x/page/a0024q7bkg0.html" target="_blank" mon="">吉林永吉 吉林市多地遭暴雨袭击 县城灾后清理正在进行</a>
                  </p>
                </div>
                <div class="topic">
                  <p class="picture">
                    <a href="http://www.iqiyi.com/v_19rr7oosfs.html" target="_blank" mon="">
                      <img src="http://pic.rmb.bdstatic.com/b9cdfca4adeb36ac1a0730f70b9d63f9.jpg@h_660,w_370"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title">
                    <a href="http://www.iqiyi.com/v_19rr7oosfs.html" target="_blank" mon="">40 高温下一出租车行驶中自燃</a>
                  </p>
                </div>
                <div class="topic">
                  <p class="picture">
                    <a href="http://my.tv.sohu.com/us/311862222/91031803.shtml" target="_blank" mon="">
                      <img src="http://pic.rmb.bdstatic.com/4cf5ae2b9733aac8359723bba6d7ed43.jpg@h_660,w_370"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title">
                    <a href="http://my.tv.sohu.com/us/311862222/91031803.shtml" target="_blank" mon="">地上忽现大坑 瞬间吞掉两幢房子</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mod-localnews column clearfix" id="col_local" style="margin-top: 20px;">
        <div class="l-left-col">
          <div class="column-title-home column-title" alog-group="log-mil-title">
            <div class="column-title-border">

              <h2 style=" float: left;"><span id="city_name"><a href="/n?cmd=6&loc=2494&name=军事&locname=军事&locid=2494" target="_blank" class=""><b>军事</b>新闻</a></span><span class="cname">Military News</span></h2>

              <span id="p-more-link"><a target="_blank" href="/n?cmd=6&loc=2494&name=军事&locname=军事&locid=2494" id="more-link" style="visibility: visible;"></a> </span>

            </div>
          </div>
          <div class="l-left-col col-mod b-left" alog-group="log-local-left">
            <ul class="ulist focuslistnews newclass" id="localnews-focus" style="border-top: hidden;">
              <li class="bold-item" v-for="(news,index) in junshi" v-if="index === 2">
                <span class="dot"></span>
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="c=civilnews&ct=0&a=27&col=8&locname=南京&locid=2494" target="_blank" style="color: black">{{subStringstr(news.n_ntitle)}}</a>
              </li>

              <li v-for="(news,index) in junshi" v-if="index < 6">
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="c=civilnews&ct=0&a=27&col=8&locname=南京&locid=2494" target="_blank">{{subStringstr(news.n_ntitle)}}</a>
              </li>

              <ul class="ulist">
                <li class="bold-item" v-for="(news,index) in junshi" v-if="index === 3">
                  <span class="dot"></span>
                  <a :href="'/news/news_content.html?n_nid='+news.n_nid+''"  mon="c=civilnews&ct=0&a=27&col=8&locname=南京&locid=2494" target="_blank">{{subStringstr(news.n_ntitle)}}</a>
                </li>
                <li v-for="(news,index) in junshi" v-if="index <3">
                  <a :href="'/news/news_content.html?n_nid='+news.n_nid+''"  mon="c=civilnews&ct=0&a=27&col=8&locname=南京&locid=2494" target="_blank">{{subStringstr(news.n_ntitle)}}</a>
                </li>
              </ul>
            </ul>
          </div>
          <div class="ilist l-middle-col" id="local_default" alog-group="log-local-middle" style="display: none;">
            <div class="imagearea" id="local_default1" style="display:block">
              <div class="imagearea-top"></div>
            </div>
          </div>
          <div class="ilist" id="local_current" style="">
            <div class="imagearea-top" id="localnews-pic">
              <li v-for="(news,index) in junshi" v-if="index === 6" >
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=2&a=12&pn=1" target="_blank">
                  <img :src="'../../../../static/images/'+news.n_nimage"><span class="title">{{subStringstr(news.n_ntitle)}}</span>
                </a>
              </li>
              <li v-for="(news,index) in junshi" v-if="index === 7" >
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=2&a=12&pn=1" target="_blank">
                  <img :src="'../../../../static/images/'+news.n_nimage"><span class="title">{{subStringstr(news.n_ntitle)}}</span>
                </a>
              </li>
            </div>
          </div>
        </div>
        <div class="l-right-col" alog-group="log-local-right">
          <div class="mod">
            <div class="hd">
              <h3>视频新闻<span class="dec">VIDEO NEWS</span></h3>
            </div>
            <div class="bd">
              <div >
                <div class="topic">
                  <p class="picture">
                    <a href="http://v.qq.com/x/page/v0527bhjwh3.html" target="_blank" mon="">
                      <img src="http://pic.rmb.bdstatic.com/660e5152b144e48bbdffdad5d9fdc088.jpg@h_660,w_370"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title"><a href="http://v.qq.com/x/page/v0527bhjwh3.html" target="_blank" mon="">徐光裕：印度航母只是二流航母</a>
                  </p>
                </div>
                <div class="topic">
                  <p class="picture">
                    <a href="http://v.qq.com/x/page/p0527ditlqh.html" target="_blank" mon="">
                      <img src="http://pic.rmb.bdstatic.com/da996ed14f330412fccd90ef11117fbb.jpg@h_660,w_370"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title"><a href="http://v.qq.com/x/page/p0527ditlqh.html" target="_blank" mon="">慢动作赏析半自动手枪抛壳，强迫症患者的福利！</a>
                  </p>
                </div>
                <div class="topic">
                  <p class="picture">
                    <a href="http://v.qq.com/x/page/j05277i31uv.html" target="_blank" mon="">
                      <img src="http://pic.rmb.bdstatic.com/9236a7e78f5430ab177a1eb73a3cf75c.jpg@h_660,w_370"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title"><a href="http://v.qq.com/x/page/j05277i31uv.html" target="_blank" mon="">惊人！AK47如此威力强大，在水里却连5米都走不到</a>
                  </p>
                </div>
                <div class="topic">
                  <p class="picture">
                    <a href="http://v.qq.com/x/page/w0527iia25w.html" target="_blank" mon="">
                      <img src="http://pic.rmb.bdstatic.com/vod_a35ec414b976d6c2652c23773d3eff79.jpg@h_660,w_370"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title"><a href="http://v.qq.com/x/page/w0527iia25w.html" target="_blank" mon="">终极反坦克武器！一起来看看大兵们玩耍“标枪导弹”</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column clearfix"  alog-group="log-focus">
        <div class="l-left-col">
          <div class="column-title">
            <div class="column-title-border">
              <h2><span class="subtitle">国际新闻</span><span class="cname">INTERNATIONAL NEWS</span></h2>
            </div>
          </div>
          <div class="b-left">
            <ul class="ulist" >
              <li class="bold-item" v-for="(news,index) in guoji" v-if="index === 0" >
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=1" target="_blank" style="color: black" >{{subStringstr(news.n_ntitle)}}</a>
              </li>
              <li v-for="(news,index) in guoji" v-if="index < 6">
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=8" target="_blank">{{subStringstr(news.n_ntitle)}}</a>
              </li>
            </ul>

            <ul class="ulist ">
              <li class="bold-item"  v-for="(news,index) in guoji" v-if="index === 4">
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=7" target="_blank" style="color: black">{{subStringstr(news.n_ntitle)}}</a>
              </li>
              <li v-for="(news,index) in guoji" v-if="index <5">
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=12" target="_blank">{{subStringstr(news.n_ntitle)}}</a>
              </li>
            </ul>

          </div>
          <div class="ilist">
            <ul>
              <li v-for="(news,index) in guoji" v-if="index === 0" >
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=2&a=12&pn=1" target="_blank">
                  <img :src="'../../../../static/images/'+news.n_nimage"><span class="title">{{subStringstr(news.n_ntitle)}}</span>
                </a>
              </li>
              <li v-for="(news,index) in guoji" v-if="index === 1" >
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=2&a=12&pn=2" target="_blank">
                  <img :src="'../../../../static/images/'+news.n_nimage"><span class="title">{{subStringstr(news.n_ntitle)}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="l-right-col">
          <div class="mod" >
            <div class="hd">
              <h3>视频新闻<span class="dec">VIDEO NEWS</span></h3>

            </div>
            <div class="bd">
              <div >
                <div class="topic">
                  <p class="picture">
                    <a href="http://www.iqiyi.com/v_19rr7omigs.html" target="_blank" mon="">
                      <img src="http://pic.rmb.bdstatic.com/1f541422405ab18797795c0adc3318eb.jpg@h_660,w_370"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title">
                    <a href="http://www.iqiyi.com/v_19rr7omigs.html" target="_blank" mon="">中央措辞严厉批祁连山生态问题 8责任人被问责</a>
                  </p>
                </div>
                <div class="topic">
                  <p class="picture">
                    <a href="http://v.qq.com/x/page/a0024q7bkg0.html" target="_blank" mon="">
                      <img src="http://pic.rmb.bdstatic.com/d46f662c1900de051da6de2eef2c485f.jpg@h_660,w_370"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title">
                    <a href="http://v.qq.com/x/page/a0024q7bkg0.html" target="_blank" mon="">吉林永吉 吉林市多地遭暴雨袭击 县城灾后清理正在进行</a>
                  </p>
                </div>
                <div class="topic">
                  <p class="picture">
                    <a href="http://www.iqiyi.com/v_19rr7oosfs.html" target="_blank" mon="">
                      <img src="http://pic.rmb.bdstatic.com/b9cdfca4adeb36ac1a0730f70b9d63f9.jpg@h_660,w_370"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title">
                    <a href="http://www.iqiyi.com/v_19rr7oosfs.html" target="_blank" mon="">40 高温下一出租车行驶中自燃</a>
                  </p>
                </div>
                <div class="topic">
                  <p class="picture">
                    <a href="http://my.tv.sohu.com/us/311862222/91031803.shtml" target="_blank" mon="">
                      <img src="http://pic.rmb.bdstatic.com/4cf5ae2b9733aac8359723bba6d7ed43.jpg@h_660,w_370"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title">
                    <a href="http://my.tv.sohu.com/us/311862222/91031803.shtml" target="_blank" mon="">地上忽现大坑 瞬间吞掉两幢房子</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="column clearfix"  alog-group="log-focus">
        <div class="l-left-col">
          <div class="column-title">
            <div class="column-title-border">
              <h2><span class="subtitle">娱乐新闻</span><span class="cname">Entertainment News</span></h2>
            </div>
          </div>
          <div class="b-left">
            <ul class="ulist" >
              <li class="bold-item" v-for="(news,index) in yule" v-if="index === 0" >
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=1" target="_blank" style="color: black" >{{subStringstr(news.n_ntitle)}}</a>
              </li>
              <li v-for="(news,index) in yule" v-if="index < 6">
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=8" target="_blank">{{subStringstr(news.n_ntitle)}}</a>
              </li>
            </ul>

            <ul class="ulist ">
              <li class="bold-item"  v-for="(news,index) in yule" v-if="index === 4">
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=7" target="_blank" style="color: black">{{subStringstr(news.n_ntitle)}}</a>
              </li>
              <li v-for="(news,index) in yule" v-if="index <5">
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=12" target="_blank">{{subStringstr(news.n_ntitle)}}</a>
              </li>
            </ul>

          </div>
          <div class="ilist">
            <ul>
              <li v-for="(news,index) in yule" v-if="index === 0" >
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=2&a=12&pn=1" target="_blank">
                  <img :src="'../../../../static/images/'+news.n_nimage"><span class="title">{{subStringstr(news.n_ntitle)}}</span>
                </a>
              </li>
              <li v-for="(news,index) in yule" v-if="index === 1" >
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=2&a=12&pn=2" target="_blank">
                  <img :src="'../../../../static/images/'+news.n_nimage"><span class="title">{{subStringstr(news.n_ntitle)}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="l-right-col">
          <div class="mod" >
            <div class="hd">
              <h3>视频新闻<span class="dec">VIDEO NEWS</span></h3>

            </div>
            <div class="bd">
              <div >
                <div class="topic">
                  <p class="picture">
                    <a href="http://baijiahao.baidu.com/s?id=1611180295821287665" target="_blank" mon="">
                      <img src="../../../static/images/5555555111.jpg"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title">
                    <a href="http://baijiahao.baidu.com/s?id=1611180295821287665" target="_blank" mon="">冯绍峰赵丽颖又双叒叕被偶遇了！女方衣着宽松小腹隆起孕味十足</a>
                  </p>
                </div>
                <div class="topic">
                  <p class="picture">
                    <a href="http://baijiahao.baidu.com/s?id=1612959709695286242" target="_blank" mon="">
                      <img src="../../../static/images/5555555222.jpg"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title">
                    <a href="http://baijiahao.baidu.com/s?id=1612959709695286242" target="_blank" mon="">开心麻花叫板张艺谋，这个国庆档，刺激！</a>
                  </p>
                </div>
                <div class="topic">
                  <p class="picture">
                    <a href="http://baijiahao.baidu.com/s?id=1612906418862215430" target="_blank" mon="">
                      <img src="../../../static/images/5555555333.jpg"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title">
                    <a href="http://baijiahao.baidu.com/s?id=1612906418862215430" target="_blank" mon="">国庆追剧不如追综艺，这12档综艺节目绝对让你爆笑到忘了时间！</a>
                  </p>
                </div>
                <div class="topic">
                  <p class="picture">
                    <a href="http://baijiahao.baidu.com/s?id=1612860322179163214" target="_blank" mon="">
                      <img src="../../../static/images/5555555444.jpg"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title">
                    <a href="http://baijiahao.baidu.com/s?id=1612860322179163214" target="_blank" mon="">今年国庆档有笑点有泪点！收好这份观影指南，绝不让你花冤枉钱</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column clearfix"  alog-group="log-focus">
        <div class="l-left-col">
          <div class="column-title">
            <div class="column-title-border">
              <h2><span class="subtitle">体育新闻</span><span class="cname">sports news</span></h2>
            </div>
          </div>
          <div class="b-left">
            <ul class="ulist" >
              <li class="bold-item" v-for="(news,index) in tiyu" v-if="index === 0" >
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=1" target="_blank" style="color: black" >{{subStringstr(news.n_ntitle)}}</a>
              </li>
              <li v-for="(news,index) in tiyu" v-if="index < 6">
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=8" target="_blank">{{subStringstr(news.n_ntitle)}}</a>
              </li>
            </ul>

            <ul class="ulist ">
              <li class="bold-item"  v-for="(news,index) in tiyu" v-if="index === 4">
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=7" target="_blank" style="color: black">{{subStringstr(news.n_ntitle)}}</a>
              </li>
              <li v-for="(news,index) in tiyu" v-if="index <4">
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=1&a=2&pn=12" target="_blank">{{subStringstr(news.n_ntitle)}}</a>
              </li>
            </ul>

          </div>
          <div class="ilist">
            <ul>
              <li v-for="(news,index) in tiyu" v-if="index === 0" >
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=2&a=12&pn=1" target="_blank">
                  <img :src="'../../../../static/images/'+news.n_nimage"><span class="title">{{subStringstr(news.n_ntitle)}}</span>
                </a>
              </li>
              <li v-for="(news,index) in tiyu" v-if="index === 1" >
                <a :href="'/news/news_content.html?n_nid='+news.n_nid+''" mon="col=2&a=12&pn=2" target="_blank">
                  <img :src="'../../../../static/images/'+news.n_nimage"><span class="title">{{subStringstr(news.n_ntitle)}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="l-right-col">
          <div class="mod" >
            <div class="hd">
              <h3>视频新闻<span class="dec">VIDEO NEWS</span></h3>

            </div>
            <div class="bd">
              <div >
                <div class="topic">
                  <p class="picture">
                    <a href="http://tv.people.com.cn/n1/2017/0706/c79904-29386956.html" target="_blank" mon="">
                      <img src="https://t1.baidu.com/it/u=1365705586,3287771322&fm=20"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title"><a href="http://tv.people.com.cn/n1/2017/0706/c79904-29386956.html" target="_blank" mon="">斯诺克世界杯：中国香港队1比4不敌比利时队 </a>
                  </p>
                </div>
                <div class="topic">
                  <p class="picture">
                    <a href="http://video.sina.com.cn/p/sports/t/v/doc/2017-07-05/195766579195.html" target="_blank" mon="">
                      <img src="https://t3.baidu.com/it/u=3766355512,221529890&fm=20"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title"><a href="http://video.sina.com.cn/p/sports/t/v/doc/2017-07-05/195766579195.html" target="_blank" mon="">视频-决胜盘脆败止步首轮 张帅温网正赛首胜仍需..</a>
                  </p>
                </div>
                <div class="topic">
                  <p class="picture">
                    <a href="http://tv.people.com.cn/n1/2017/0703/c79904-29378674.html" target="_blank" mon="">
                      <img src="https://t3.baidu.com/it/u=1368311164,3352730449&fm=20"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title"><a href="http://tv.people.com.cn/n1/2017/0703/c79904-29378674.html" target="_blank" mon="">青梅竹马 修成正果：归来仍是少年——阿根廷球王..</a>
                  </p>
                </div>
                <div class="topic">
                  <p class="picture">
                    <a href="http://tv.people.com.cn/n1/2017/0703/c79904-29378678.html" target="_blank" mon="">
                      <img src="https://t2.baidu.com/it/u=939844590,3369112098&fm=20"><span class="play"></span>
                    </a>
                  </p>
                  <p class="title"><a href="http://tv.people.com.cn/n1/2017/0703/c79904-29378678.html" target="_blank" mon="">浙江：2017亚洲大洋洲坐式排球锦标赛落幕——中..</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>

    <div data-am-widget="gotop" class="am-gotop am-gotop-fixed">
      <a href="#top" title="回到顶部">
        <span class="am-gotop-title">回到顶部</span>
        <i class="am-gotop-icon am-icon-chevron-up"></i>
      </a>
    </div>

    <footer>
      <div class="content">
        <ul class="am-avg-sm-5 am-avg-md-5 am-avg-lg-5 am-thumbnails">
          <li>
            <a href="#">联系我们</a>
          </li>
          <li>
            <a href="#">加入我们</a>
          </li>
          <li>
            <a href="#">合作伙伴</a>
          </li>
          <li>
            <a href="#">广告及服务</a>
          </li>
          <li>
            <a href="#">友情链接</a>
          </li>
        </ul>
        <div class="btnlogo"><img src="../../../static/images/btnepad.jpg" /></div>
        <p>Amaze UI出品<br>© 2016 AllMobilize, Inc. Licensed under MIT license. Developed with WebStorm.</p>
        <div class="w2div">
          <ul data-am-widget="gallery" class="am-gallery am-avg-sm-2am-avg-md-2 am-avg-lg-2 am-gallery-overlay" data-am-gallery="{ pureview: true }">
            <li class="w2">
              <div class="am-gallery-item">
                <a href="../../../static/Temp-images/dd.jpg">
                  <img src="../../../static/Temp-images/dd.jpg" />
                  <h3 class="am-gallery-title">订阅号：Amaze UI</h3>
                </a>
              </div>
            </li>
            <li class="w2">
              <div class="am-gallery-item">
                <a href="../../../static/Temp-images/dd.jpg">
                  <img src="../../../static/Temp-images/dd.jpg" />
                  <h3 class="am-gallery-title">服务号：Amaze UI</h3>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

  export default {
    name: 'app',
    components: {
    },
    data () {
      return {
        token: '',
        msg: 'Hello World!',
        junshi:[],
        cityNews: [],
        first: [],
        guoji:[],
        yule:[],
        tiyu:[],
        jiaodian:[],
        pageSize: 8,
        pageNum: 0,
        user:'',
        n_type: ['国内','国际','军事','娱乐','体育','个性推荐','首页'],
        n_column: ['即时新闻','焦点新闻','军事视频','中国军情','台湾聚焦','国际军情'],
        str: '南京'
      }
    },
    methods: {
      initList () {

        /*首页新闻*/
        var that = this
        var num = this.pageNum + 1
        var params = {
          pageIndex: num,
          pageSize: this.pageSize,
          tabType: '',
          n_type: this.n_type[6],
          n_column: this.n_column[0],
        }
        this.$http.post('/neosoft/user/news/getPage.htm', params).then(response => {
          var resBody = response.body
          this.first = resBody.result.content
          console.log(this.first)
        })



        /*首页焦点新闻*/
        var that = this
        var num = this.pageNum + 1
        var params = {
          pageIndex: num,
          pageSize: this.pageSize,
          tabType: '',
          n_type: this.n_type[6],
          n_column: this.n_column[1],
        }
        this.$http.post('/neosoft/user/news/getPage.htm', params).then(response => {
          var resBody = response.body
          this.jiaodian  = resBody.result.content
          console.log(this.jiaodian)
        })

        /*军事焦点*/
        var that = this
        var num = this.pageNum + 1
        var params = {
          pageIndex: num,
          pageSize: this.pageSize,
          tabType: '',
          n_type: this.n_type[2],
          n_column: this.n_column[1],
        }
        this.$http.post('/neosoft/user/news/getPage.htm', params).then(response => {
          var resBody = response.body
          this.junshi  = resBody.result.content
          console.log(this.junshi)
        })

        /*国际焦点*/
        var that = this
        var num = this.pageNum + 1
        var params = {
          pageIndex: num,
          pageSize: this.pageSize,
          tabType: '',
          n_type: this.n_type[1],
          n_column: this.n_column[1],
        }
        this.$http.post('/neosoft/user/news/getPage.htm', params).then(response => {
          var resBody = response.body
          this.guoji  = resBody.result.content
          console.log(this.guoji)
        })

        /*娱乐焦点*/
        var that = this
        var num = this.pageNum + 1
        var params = {
          pageIndex: num,
          pageSize: this.pageSize,
          tabType: '',
          n_type: this.n_type[3],
          n_column: this.n_column[1],
        }
        this.$http.post('/neosoft/user/news/getPage.htm', params).then(response => {
          var resBody = response.body
          this.yule  = resBody.result.content
          console.log(this.yule)
        })

        /*体育焦点*/
        var that = this
        var num = this.pageNum + 1
        var params = {
          pageIndex: num,
          pageSize: this.pageSize,
          tabType: '',
          n_type: this.n_type[4],
          n_column: this.n_column[1],
        }
        this.$http.post('/neosoft/user/news/getPage.htm', params).then(response => {
          var resBody = response.body
          this.tiyu  = resBody.result.content
          console.log(this.tiyu)
        })



      },
      /*截取函数*/
      subStringstr(str){
        if (str.length<=15) {
          return str
        }else {
          return str.substr(0,22)+'...'
        }
      },
      out(){
        sessionStorage.removeItem('user')
        window.location.href='/index.html'
      },

    },

    //  页面加载之前
    created() {
      this.initList()

    },
    //  页面加载后
    mounted() {
      var user = sessionStorage.getItem('user')
      if (user) {
        user = JSON.parse(user)
        this.user = user.user
        console.log(this.user)
      } else {
        this.$router.push({path: '/news/user_changepassword.html'})
      }
    }
  }

  $(function() {
    var n = navigator.userAgent,
      e = n.indexOf("MSIE 6.0") > 0,
      i = n.indexOf("MSIE 7.0") > 0,
      o = $(window),
      a = $("#menu"),
      t = (a.offset(), a.offset().top),
      s = $("body"),
      r = parseInt(s.css("margin-top"), 10),
      l = a.height(),
      u = r + l;
    o.scroll(function() {
      if(!window.newsDisableMenuFixed) {
        var n = o.scrollTop();
        n >= t ? (a.addClass("menu-fix-top"), e || i || s.css("margin-top", u + "px")) : (a.removeClass(
          "menu-fix-top"), e || i || s.css("margin-top", r + "px"))
      }
    })

  })



</script>

<style>

</style>

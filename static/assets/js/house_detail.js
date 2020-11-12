require.config({
    urlArgs: ,
    paths: {
        'jquery': '../jquery.min',
        'common': 'commonModule',
        'ajaxform': 'ajaxForm',
        'cookie': '../jquery.cookie',
        'tj_sem': 'tj_sem',
        'friend': 'friendLink',
        'echarts': '../echarts.min',
        'Swiper': '../idangerous.swiper.min',
        'compare': 'compare',
        'photo': 'photo',
        'qrcode': '../jquery.qrcode.min',
        'charts': 'charts',
        'map': 'map'
    },
    shim: {
        'cookie': {
            deps: ['jquery'],
            exports: 'cookie'
        },
        'qrcode': {
            deps: ['jquery'],
            exports: 'qrcode'
        }
    }
})

require(['jquery', 'common', 'ajaxform', 'photo', 'charts', 'qrcode', 'map', 'compare', 'friend', 'tj_sem'], function (
    $, c, a, p, charts, qrcode, map, compare, friend, tj_sem) {
    /* 填充页面部分内容 */
    url_jsdata = "/index.php/jsdata/common";
    if ($(".show_group").length > 0) url_jsdata += "/show_group"; /* 调团购列表 */
    $.getScript(url_jsdata, function () {
        //底部版权信息
        $(".m-footer").append(m_footer);
        if ($(".m-footer-v3").length)
            $(".m-footer-v3").append(m_footer_v3);
        //m-topbar login
        $(".login1").append(m_login);
        if ($(".login2").length)
            $(".login2").append(m_login_v3);
        $(".m-topbar .login").append(m_topbar_login);
        //m-topbar menu
        $(".m-topbar .menu").prepend(m_topbar_menu);
        //header city
        $(".city").append(m_header_city);
        if ($(".city_v3").length)
            $(".city_v3").html(m_header_city_v3);
        $(".m-header .search-box1").append(m_header_search_box1);
        $(".search-box2").append(m_header_search_box2);
        $(".search-box3").append(m_header_search_box3);
        $(".search-box-news").append(m_header_search_box_news);
        if (typeof m_header_search_box_business !== 'undefined') $(".search-box-business").append(
                m_header_search_box_business);
        $(".m-ftool").append(m_nav_g_bd);
        $(".sub-nav").append(sub_nav);
        $(".help-form").append(help_form);


        /* 城市选择切换 */
        if ($(".cityTab").length > 0) {
            common.switchTab('.cityTab', 'mouseover');
        }

        //鼠标经过展示层
        $(".f-dh").hover(function () {
            $(this).find(".d-item").removeClass("f-dn");
        }, function () {
            $(this).find(".d-item").addClass("f-dn");
        });

        // 降价通知
        if ($("#jiang-box").length > 0) {
            $("#jiang-box").append(jiang_box);
        }
        // 开盘通知
        if ($("#kaipantongzhi-box").length > 0) {
            $("#kaipantongzhi-box").append(kaipantongzhi_box);
        }
    });

    /* 详细页浮动头部 */
    c.floatMenu('.m-head');

    /* 底部切换 */
    c.switchTab('.f10', 'mouseover');

    /* 详细页报名 */
    $('.alert-box-btn1').click(function () {
        if ($(this).attr("data-house")) {
            $('.alert-box1').find("input[name='group[house]']").val($(this).attr("data-house"));
            $('.alert-box1').find("input[name='group[site_id]']").val($(this).attr("data-site_id"));
            $('.alert-box1').find(".house_name").text($(this).attr("data-house_name"));
        }
        $('.alert-box1').show();
    });
    $('.alert-box-btn2').click(function () {
        if ($(this).attr("data-house")) {
            $('.alert-box2').find("input[name='group[house]']").val($(this).attr("data-house"));
            $('.alert-box2').find("input[name='group[site_id]']").val($(this).attr("data-site_id"));
            $('.alert-box2').find(".house_name").text($(this).attr("data-house_name"));
        }

        $('.alert-box2').show();
    })
    $('.alert-box-btn3').click(function () {
        $('.alert-box3').show();
    });
    $(document).on("click", ".closeBtn", function () {
        $('.alert-box').hide();
    });

    // 返回顶部
    $(document).on('click', '.gotop', function () {
        $('html,body').animate({
            scrollTop: '0'
        }, 300);
        return false;
    });
    // 固定层滚动出现回顶部
    // 滚动距离超过100px显示返回
    $(window).scroll(function () {
        var fh = $(window).scrollTop();

        if (fh >= 100) {
            $(".gotop").removeClass("f-dn");
        } else {
            $(".gotop").addClass("f-dn");
        }
    });

    /* 通栏 */
    if (0 < $('#A12689').length) {
        var arr = [
   '<div style="display:none" class="ftg">',
   '<div style="position:relative; z-index:3;">',
   '<a style="background:#333;color:#fff;cursor:pointer;position:absolute;right:0;top:0;padding:0 5px;z-index:5;" id="colse">关闭</a>',
         '<div class="AD m-adv load-ad" id="A12643" data-adid="12643" data-relation=".ftg"></div></div>'
        ];
        $("#A12689").after(arr.join("\n"));
        $(".m-footer").css("margin-bottom", "50px");
        $("#colse").click(function () {
            $('.ftg').remove();
            $(".m-footer").css("margin-bottom", "0")
        });
    }
    $('.load-ad').each(function () {
        try {
            AD({
                c: '#' + $(this).attr('id'),
                id: $(this).attr('data-adId'),
                r: $(this).attr('data-relation'),
                t: $(this).attr('data-type'),
                def: $(this).attr('data-def')
            });
        } catch (e) {}

        $('ul>li', this).each(function () {
            $(this).append(decodeURIComponent($(this).attr('ad-data')));
        });
        $(this).removeClass('AD').removeClass('ad');
    });

    /* 显示二维码 */
    var render = 'canvas';
    if (typeof (Worker) === "undefined") {
        var render = 'table';
    }
    $('#qrcode').qrcode({
        render: render,
        width: 120,
        height: 120,
        correctLevel: 0,
        text: $('#qrcode').attr('data-m_url')
    });
    $('#qrcode1').qrcode({
        render: render,
        width: 80,
        height: 80,
        correctLevel: 0,
        text: $('#qrcode1').attr('data-m_url')
    });
    $('.telQrcode').qrcode({
        render: render,
        width: 100,
        height: 100,
        correctLevel: 0,
        text: $('.telQrcode').data('url')
    });

    /* map */
    $(document).ready(function () {
        if ($('#assort_tab_map_id').length > 0) {
            $('#assort_tab_map_id').css('width', '710px');
            var m = map.create('assort_tab_map_id', index_lng, index_lat, index_name, function (m, that) {
                /* 默认切换页 */
                var assort_tab_panel_id = $('#assort_tab_panel_id');
                var pointer = new BMap.Point(index_lng, index_lat);
                var curText = assort_tab_panel_id.find('li.cur').text();
                var assort_list_id = document.querySelector('#assort_list_id');

                map.searchNearby(assort_list_id, m, pointer, curText);

                assort_tab_panel_id.on('click', 'li', function () {
                    var $this = $(this);
                    if (!$this.hasClass('cur')) {
                        assort_tab_panel_id.find('li').removeClass('cur');
                        $this.addClass('cur');
                        map.searchNearby(assort_list_id, m, pointer, $this.text());
                    }
                });
            });
            $('#map_loading').hide();
            $('#list_loading').hide();
            $('#list-shensuo').hide();

            // 工具 全屏
            var fullScreen = (function () {
                var full = $('.loupan-peitao'),
                    h = $(window).height();
                console.log(h);
                full.on('click', '.u-overall', function () {
                    var span = $(this).find('span'),
                        mapbox = full.find('.map'),
                        right = $('#zhoubianpeitao .tab-div');

                    if (full.hasClass('full-screen')) {
                        full.removeClass('full-screen');
                        mapbox.css({
                            'height': 360 + 'px',
                            'width': 710 + 'px'
                        });
                        right.show();
                        span.text('全屏');
                    } else {
                        full.addClass('full-screen');
                        mapbox.css({
                            'height': h - 50 + 'px',
                            'width': '100%'
                        });
                        right.hide();
                        span.text('取消全屏');
                    }
                });
            })();

            // 工具 测距
            var measure = (function () {
                var btn = $('.loupan-peitao .u-range'),
                    gongju = new BMapLib.DistanceTool(m);
                btn.on('click', function () {
                    console.log(1);
                    gongju.open();
                });
            })();

            // 工具 公交查询
            var gongjiao = (function () {

                var start = $('.list-gj-qi'),
                    end = $('.list-gj-zh'),
                    th = $('.list-gj-th'),
                    cx = $('.list-gj-input input[type=button]'),
                    full = $('.loupan-peitao'),
                    gjbox = $('.list-gongjiao');

                // 打开公交查询面板
                full.on('click', '.u-bus', function () {
                    $('.list-gj-input').css({
                        'display': 'block'
                    });
                    $('.list-gj-result').css({
                        'display': 'none'
                    });
                    if (gjbox.is(':hidden')) {
                        gjbox.show();
                    }
                });

                // 交换站点
                th.on('click', function () {
                    var temp;
                    temp = start.val();
                    start.val(end.val());
                    end.val(temp);
                });

                // 查询路线
                cx.on('click', function () {
                    if (start.val() == '' || end.val() == '') {
                        alert('请输入站点');
                        return false;
                    }

                    var transit = new BMap.TransitRoute(m, {
                        renderOptions: {
                            map: m,
                            panel: "list-gj-result"
                        },
                        onSearchComplete: function (result) {
                            if (transit.getStatus() != BMAP_STATUS_SUCCESS) {
                                document.getElementById("list-gj-result").innerHTML = '<div class="notResult">' +
                                    '<p class="p1">请选择准确的起点、途经点或终点</p>' +
                                    '<p class="p2">起点：<b>' + start.val() + '</b></p>' +
                                    '<p class="p2">终点：<b>' + end.val() + '</b></p>' +
                                    '<p class="p1">未找到相关地点。</p>';
                            }
                        }
                    });

                    $('.list-gj-input').css({
                        'display': 'none'
                    });
                    $('.list-gj-result').css({
                        'display': 'block'
                    });

                    transit.search(start.val(), end.val());
                    console.log(transit);
                });

                // 返回
                gjbox.on('click', 'h3 a', function () {
                    $(this).parents('.list-gongjiao').hide();
                });

            })();
            // 工具 驾车
            var jiache = (function () {
                var start = $('.list-jc-qi'),
                    end = $('.list-jc-zh'),
                    th = $('.list-jc-th'),
                    cx = $('.list-jc-input input[type=button]'),
                    full = $('.loupan-peitao'),
                    gjbox = $('.list-jiache');

                // 打开公交查询面板
                full.on('click', '.u-car', function () {
                    $('.list-jc-input').css({
                        'display': 'block'
                    });
                    $('.list-jc-result').css({
                        'display': 'none'
                    });
                    if (gjbox.is(':hidden')) {
                        gjbox.show();
                    }
                });

                // 交换站点
                th.on('click', function () {
                    var temp;
                    temp = start.val();
                    start.val(end.val());
                    end.val(temp);
                });

                // 查询路线
                cx.on('click', function () {
                    if (start.val() == '' || end.val() == '') {
                        alert('请输入站点');
                        return false;
                    }

                    var driving = new BMap.DrivingRoute(m, {
                        renderOptions: {
                            map: m,
                            panel: "list-jc-result"
                        },
                        onSearchComplete: function (result) {
                            if (driving.getStatus() != BMAP_STATUS_SUCCESS) {
                                document.getElementById("list-jc-result").innerHTML = '<div class="notResult">' +
                                    '<p class="p1">请选择准确的起点、途经点或终点</p>' +
                                    '<p class="p2">起点：<b>' + start.val() + '</b></p>' +
                                    '<p class="p2">终点：<b>' + end.val() + '</b></p>' +
                                    '<p class="p1">未找到相关地点。</p>';
                            }
                        }
                    });

                    $('.list-jc-input').css({
                        'display': 'none'
                    });
                    $('.list-jc-result').css({
                        'display': 'block'
                    });

                    driving.search(start.val(), end.val());
                    console.log(driving);
                });

                // 返回
                gjbox.on('click', 'h3 a', function () {
                    $(this).parents('.list-jiache').hide();
                });

            })();
        }
    });

    /* 判断是否默认打开报名窗口 */
    var openBaom = (function () {
        var par = location.search;
        var title = $('.popTwo .tit').html();
        if (par.indexOf('group') != -1) {
            $('.f-mask').show();
            $('.popTwo').show();
            $('.popTwo .bd .meta .tit').html('楼盘网VIP' + title + '专属狂购会 报名可获赠298元萤火虫音乐节入场券一张');
            $('.popTwo .bd .meta .tit').css({
                'width': 'auto',
                'font-size': '18px'
            })
        }
    })();

    /* 沙盘 */
    if ($('.shapan-box').length > 0) {
        var spTabIsShow = (function () {
            var list = $('.shapan-tab'),
                len = list.find('li').length;

            if (len < 2) {
                list.hide();
            }
        })();

        /**
         * 沙盘图打开详细弹出
         * 默认第一个户型展开
         */
        function defualtOpen() {
            var box = $('.shapan-info');

            box.each(function () {
                var dq = $(this),
                    item = dq.find('.shapan-hide').eq(0);

                if (!dq.is(':hidden')) {
                    item.find('i').removeClass('off').addClass('on');
                    item.find('dl').show();
                }
            });
        }
        // 沙盘图期数切换
        $('.shapan-tab li').on('click', function () {
            var dq = $(this),
                n = dq.index(),
                li = $('.shapan-tab > li'),
                item = $('.shapan-text > li');

            if (!dq.hasClass('cur')) {
                li.removeClass('cur');
                dq.addClass('cur');
                item.removeClass('cur');
                item.eq(n).addClass('cur');
                setImgBox();
            }
        });

        /**
         * 沙盘图超过大小可以拖动
         */
        function getImgW(el) {
            var imgW = $(el).find('.shapan-img').width();
            return imgW;
        }

        function getImgH(el) {
            var imgH = $(el).find('.shapan-img').height();
            return imgH;
        }

        function setImgBox() {
            $('.shapan-text li').each(function () {
                if ($(this).is(':hidden'))
                    return true;
                var w,
                    h;
                w = getImgW(this) > 860 ? getImgW(this) : 860;
                h = getImgH(this) > 380 ? getImgH(this) : 380;

                $(this).find('.shapan-drap').css({
                    'width': w + 'px',
                    'height': h + 'px'
                });

                $(this).find('.shapan-list .shapan-item').each(function () {
                    var xrate = $(this).attr('data-xrate');
                    var yrate = $(this).attr('data-yrate');
                    var width = $(this).width() / 2;
                    $(this).css({
                        'left': parseInt(w * xrate > width ? w * xrate - width : width) + 'px',
                        'top': parseInt(h * yrate > 30 ? h * yrate - 30 : 30) + 'px'
                    });
                })
            })

        }
        setImgBox();


        $(document).on('mousedown', '.shapan-drap', function (e) {
            var e = e || window.event,
                that = this,
                dx = e.clientX - that.offsetLeft,
                dy = e.clientY - that.offsetTop;

            document.onmousemove = function (e) {
                var e = e || window.event,
                    mx = e.clientX - dx,
                    my = e.clientY - dy;

                var jx = getImgW(that) - 860,
                    jy = getImgH(that) - 380;

                if (mx > -jx && mx < 0) {
                    $(that).css({
                        'left': mx + 'px'
                    });
                }
                if (my > -jy && my < 0) {
                    $(that).css({
                        'top': my + 'px'
                    });
                }
            }
            document.onmouseup = function () {
                this.onmousemove = null;
                this.onmouseup = null;
            }
        });


        /**
         * 沙盘图标签金黄色高亮
         **/
        var that = $('.m-lp-list li a.draw_list_a'),
            item = $('.shapan-list .shapan-item');

        that.hover(function () {
            var dq = $(this),
                n = String(dq.data('id'));
            n = n.split(',');
            item.each(function () {
                var t = $(this),
                    n2 = t.find('span').data('id');
                for (var x in n) {
                    if (n2 == n[x]) {
                        t.addClass('golden');
                    }
                }

            });
        }, function () {
            item.removeClass('golden');
        });

        // 沙盘图打开/关闭
        $('.shapan-item span').on('click', function () {
            $('.shapan-info').hide();
            var box = $('#shapan_info_' + $(this).attr('data-id'));
            if (box.is(':hidden')) {
                box.show();
                defualtOpen();
            }
        });

        $('.shapan-close').on('click', function () {
            $(this).parents('.shapan-info').hide();
        });
        // 沙盘图 房屋列表
        $('.shapan-hide i').on('click', function () {
            var dq = $(this);
            if (dq.hasClass('off')) {
                dq.parents('h3').siblings('dl').show();
                dq.removeClass('off').addClass('on');
            } else {
                dq.parents('h3').siblings('dl').hide();
                dq.removeClass('on').addClass('off');
            }
        });
    }

    /* im入口滑动 */
    var imInlet = $('.imInlet');
    if (imInlet.length > 0) {
        var imSwiper = new Swiper('.im-swiper', {
            loop: true
        });
        imInlet.on('click', '.im-prev', function () {
            imSwiper.swipePrev();
        });
        imInlet.on('click', '.im-next', function () {
            imSwiper.swipeNext();
        });
    }
})

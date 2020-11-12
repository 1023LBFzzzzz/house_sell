// 单选
;
(function ($, window, document, undefined) {
    var ShaiXuan = function (ele, opt) {
        this.$element = ele;
        // this.default = {}
        // this.option = $.extend({}, this.default, opt)
        this.option = opt;
    }
    ShaiXuan.prototype = {
        // 建立html页面
        setHtml: function () {
            var html = '<div class="filter_item"><span class="filter_title">您已选择：</span><span class="show_choose"></span></div>';
            $.each(this.option, function (index1, item1) {
                var itemHtml = ''
                $.each(item1.items, function (index2, item2) {
                    var num1 = index1.toString()
                    var num2 = index2.toString()
                    itemHtml += ' <li class="title_item" data-num1="' + num1 + '" data-num2="' + num2 + '">' + item2 + '</li>'
                })
                html += '<ul class="filter_item dan_xuan"><li class="filter_title">' + item1.title + '</li>' + itemHtml + '</ul>'
            });
            this.$element.append(html)
        },
        // 建立选择模型
        setChoose: function () {
            // 当前操作的元素
            var This = this.$element;
            
            This.find('.title_item').click(function () {
                // 指向元素 当前点击的 .title_item
                var that = $(this);
                var num1 = $(this).attr('data-num1');
                var num2 = $(this).attr('data-num2');
                $(this).addClass('filter_active').siblings('.title_item').removeClass('filter_active')
                var html = '<span data-val1="' + num1 + '" data-val2="' + num2 + '">' + $(this).text() + '<span class="back">×</span></span>';
                $.each(This.find('.show_choose>span'), function (index, item) {
                    var val1 = $(this).attr('data-val1');
                    var val2 = $(this).attr('data-val2');
                    // 多选请从此开始判断
                    if (num1 == val1) {
                        $(this).remove()
                    }

                })
                This.find('.show_choose').append(html);
                // 删除时和底部样式联动
                This.find('.show_choose .back').click(function () {
                    $(this).parent().remove();
                    var val1 = $(this).parent().attr('data-val1');
                    var val2 = $(this).parent().attr('data-val2');
                    This.find('[data-num1=' + val1 + '][data-num2=' + val2 + ']').removeClass('filter_active')
                })
            })

        }
    }
    $.fn.SetShaiXuan = function (options) {
        var shaixuan = new ShaiXuan(this, options);
        shaixuan.setHtml();
        return shaixuan.setChoose()
    }
})(jQuery, window, document);
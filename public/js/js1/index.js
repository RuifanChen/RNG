$(function(){

    (function (doc, win){
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {

                var clientWidth = docEl.clientWidth;
                if (clientWidth < 783) {  //800
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                } else {
                    docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
                }


            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
        recalc();
        effect();

    })(document, window);



    function hideHead(){

        if($('.head').hasClass('ofv')){

            $('.head').removeClass('ofv')

        }
        $('.head.pc').addClass('scrollHide');
        // $('.floatNav').addClass('leftHide');

    }
    function showHead(){

        if($('.head').hasClass('ofv')){
            $('.head').removeClass('ofv')
        }

        $('.head.pc').removeClass('scrollHide');
        // $('.floatNav').removeClass('leftHide');

    }

    function effect() {
        var clientWidth = document.documentElement.clientWidth;


        if (clientWidth < 1383) {

            var allHeight = $('.publicTitle.add1').outerHeight() + $('.publicTitle.add2').outerHeight() + $('.reallyContain>.typeArea.add3').outerHeight();

            $('.coreBusiness').css('height', allHeight);

        } else {

            $('#coreBusinessBg').css('height', '1000')

        }
    }

    var windowWidth = $(window).width();

    var scrollFunc = function (e) {
        e = e || window.event;

        if(windowWidth>1084){
            if (e.wheelDelta) {
                if (e.wheelDelta > 0) {
                    showHead()
                }
                if (e.wheelDelta < 0) {
                    hideHead()
                }
            } else if (e.detail) {
                if (e.detail> 0) {
                    showHead()
                }
                if (e.detail< 0) {
                    hideHead()
                }
            }
        }

    };
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法  //ie 谷歌
    window.onmousewheel = document.onmousewheel = scrollFunc;



});

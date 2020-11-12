$(function () {
    $.ajax({
        url: 'data.json',
        type: 'get',
        success: function (data) {

            //프로젝트 불러오기           
            var frame = document.querySelector('.frame');
            var list = '';
            var menuList = '';
            var tit, imgSrc, detail, site;

            var indi = document.querySelector('.indi');
            var fig = document.querySelector('.frame figure');


            //project 출력
            data.project.forEach(function (value, key) {
                detail = value.detail;
                imgSrc = value.imgSrc;
                tit = value.tit;
                site = value.site;

                list = "<a href='" + detail + "'>";
                list += "<img src=" + imgSrc + " alt='" + site + "'>";
                list += "<p>" + tit + "</p>";
                list += "<span></span>";
                list += "</a>";

                $('figure').append(list);

                menuList = "<li><a href='" + detail + "'> " + tit + "</a></li>";

                $('.bg ul').append(menuList);
            });


            setTimeout(slide, 100);

            function slide() {
                $('.frame figure a').eq(0).addClass('active');


                var figA = document.querySelectorAll('.frame figure a');
                var idx = 0;

                //프로젝트 클릭
                $('.frame figure a').on('click', function (e) {
                    e.preventDefault();
                    idx = $(this).index();
                    $('.popup').css('display', 'block');

                    prj();
                });

                //버거 메뉴 리스트 클릭
                $('.bg ul li').on('click', function (e) {
                    e.preventDefault();
                    idx = $(this).index();
                    $('.popup').css('display', 'block');

                    prj();
                });

                function prj() {

                    detail = $('.frame figure a').eq(idx).attr('href');
                    $('.pop_bg p img').attr('src', detail);

                    site = $('.frame figure img').eq(idx).attr('alt');
                    $('.site').attr('href', site);
                }

                //닫기버튼
                $('.back').on('click', function () {
                    $('.popup').css('display', 'none');
                });

                //인디게이트 생성
                figA.forEach(function () {
                    var aTag = document.createElement('a');
                    indi.appendChild(aTag);
                });
                $('.indi a').eq(0).addClass('active');


                //                //인디게이트 클릭
                //                $('.indi').on('click',function(){
                //                   idx=$(this).index();
                //                    var ofL = $(this).offset().left;
                //                    
                //                    console.log(ofL);
                //                });


                //이전, 다음버튼 누르기      
                $('.next').on('click', function () {
                    idx++;
                    aa();
                    $('.frame figure').css('left', '-' + (idx * 400) + 'px');
                    indiAct();
                    btnAct();
                });

                $('.prev').on('click', function () {
                    idx--;
                    aa();
                    $('.frame figure').css('left', '-' + (idx * 400) + 'px');

                    indiAct();
                    btnAct();

                    if (idx == 1) {
                        $(this).css('display', 'block');
                    }
                });

                //버튼 비활성화
                function aa() {
                    if (idx == 0) {
                        $('.prev').css('display', 'none');
                    } else {
                        $('.prev').css('display', 'block');
                    }

                    if (idx == figA.length - 1) {
                        $('.next').css('visibility', 'hidden');
                    } else {
                        $('.next').css('visibility', 'visible');
                    }
                }


                //인디게이트 활성화
                function indiAct() {
                    $('.indi a').removeClass('active');
                    $('.indi a').eq(idx).addClass('active');
                }


                //가운데 프로젝트 활성화
                function btnAct() {
                    //이전, 다음버튼 누를때
                    $('.frame figure a').removeClass('active');
                    $('.frame figure a').eq(idx).addClass('active');
                }


                //마우스 이벤트로 활성화
                $('.frame figure').on('mouseover', function () {
                    $('.frame figure a').removeClass('active');
                });

                $('.frame figure a').on('mouseleave', function () {
                    $('.frame figure a').eq(idx).addClass('active')
                });
            }









            var mq = window.matchMedia("screen and (max-width:1024px)");

            mq.addListener(res);

            function res(e) {

                var aT = document.querySelectorAll('.frame figure a');
                var project = document.querySelector('.project').offsetTop;


                if (e.matches) {
                    $(window).on('scroll', function () {


                        aT.forEach(function (el) {

                            var aa = (project + el.offsetTop) - (window.innerHeight / 2);

                            if (window.scrollY > aa) {

                                $('.frame figure a').removeClass('active');
                                el.classList.add('active');

                            } else {
                                el.classList.remove('active');
                            }
                        });

                    });
                }
            }

            res(mq);


        }
    })
});

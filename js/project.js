$(function () {
    $.ajax({
        url: 'data.json',
        type: 'get',
        success: function (data) {

            //프로젝트 불러오기           
            var frame = document.querySelector('.frame');
            var list = '';
            var tit, imgSrc, detail;
            
            var indi = document.querySelector('.indi');
            var fig = document.querySelector('.frame figure');
            
            
            
            data.project.forEach(function(value,key){
                detail = value.detail;
                imgSrc = value.imgSrc;
                tit = value.tit;
                
                list = "<a href="+detail+">";
                list += "<img src="+imgSrc+" alt='img'>";
                list += "<p>"+tit+"</p>";
                list += "<span></span>";
                list += "</a>";
                
                $('figure').append(list);
            });
            
            
            setTimeout(slide,100);
            
            function slide(){
                $('.frame figure a').eq(0).addClass('active');
            
            
            
            var figA = document.querySelectorAll('.frame figure a');
            //인디게이트 생성
            figA.forEach(function () {
                var aTag = document.createElement('a');
                indi.appendChild(aTag);
            });
            $('.indi a').eq(0).addClass('active');


            //이전, 다음버튼 누르기
            var idx = 0;
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
        }
    })
});

window.addEventListener('DOMContentLoaded', function () {


    //인디게이트 생성
    var indi = document.querySelector('.indi');
    var fig = document.querySelector('.frame figure');
    var figA = document.querySelectorAll('.frame figure a');

    figA.forEach(function () {
        var aTag = document.createElement('a');
        indi.appendChild(aTag);
    });
    $('.indi a').eq(0).addClass('active');


    //이전, 다음버튼 누르기
    var idx = 0;
    $('.next').on('click', function () {
        var btn = $(this).attr('class');
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
        
        if(idx == 1){
            $(this).css('display','block');
        }
    });

    //버튼 비활성화
    function aa() {
        if (idx == 0) {
            $('.prev').css('display', 'none');
        } else {
            $('.prev').css('display', 'block');
        }
        
        if(idx == figA.length-1){
            $('.next').css('visibility','hidden');
        }else{
            $('.next').css('visibility','visible');
        }
    }
    
       
    //인디게이트 활성화
    function indiAct(){
        $('.indi a').removeClass('active');
        $('.indi a').eq(idx).addClass('active');
    }
    
    
    //가운데 프로젝트 활성화
    function btnAct(){
        //이전, 다음버튼 누를때
        $('.frame figure a').removeClass('active');
        $('.frame figure a').eq(idx).addClass('active');
    }
    
    
    //마우스 이벤트로 활성화
    $('.frame figure').on('mouseover',function(){
        $('.frame figure a').removeClass('active');
    });

    $('.frame figure a').on('mouseleave',function(){
        $('.frame figure a').eq(idx).addClass('active')
    })
});

$(function(){
    $('header').load('head_foot.html .head',menu);
    $('footer').load('head_foot.html .footer');

    function menu(){
        $('.head nav a').removeClass('active');
        $('.head nav a').eq(localStorage.pageNum).addClass('active');

        $('.head nav a').on('click',function(){
            localStorage.pageNum = $(this).index();
            location.href = $(this).attr('href');
        });

        $('.head h1').on('click',function(){
            localStorage.clear();
            $('.head nav a').removeClass('active');
        });
        
        
        
        setTimeout(function(){
           $('.loader-moving').stop().fadeOut(1000); 
        },1000);
                
        
    }
});
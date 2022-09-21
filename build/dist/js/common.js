function common() {
    $('header').load('head_foot.html .head', menu);
    $('footer').load('head_foot.html .footer');

    function menu() {
        $('.head nav a').removeClass('active');
        $('.head nav a').eq(localStorage.pageNum).addClass('active');

        $('.head nav a').on('click', function (e) {
            localStorage.pageNum = $(this).index();
//            location.href = $(this).attr('href');
            
            e.preventDefault();
            $('body').removeClass('active');
            $('.fl').addClass('active');
            
            var ts = $(this).attr('href');
            setTimeout(function(){
                $('.fl').removeClass('active');
                 setTimeout(function(){
                    location.href = ts;     
                 },50);
            },1000);
        });

        $('.head h1 a').on('click', function (e) {
            localStorage.clear();
            $('.head nav a').removeClass('active');
            e.preventDefault();
            $('body').removeClass('active');
            $('.fl').addClass('active');
            
            var ts = $(this).attr('href');
            setTimeout(function(){
                $('.fl').removeClass('active');
                 setTimeout(function(){
                    location.href = ts;     
                 },50);
            },1000);
        });


        setTimeout(function () {
            $('body').addClass('active');
            $('body').append('<img src="icon/flower.png" class="fl">');
            
        }, 10);

        console.log('export');
    }
}

export default common;
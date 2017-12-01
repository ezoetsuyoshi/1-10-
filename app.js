$(function() {
    $(document).ready(function() {
        $('.btn').click(function(){ //クリックしたら
            $('.drawr').animate({width:'toggle'}); //animateで表示・非表示
            $(this).toggleClass('peke'); //toggleでクラス追加・削除
        });
    });
});
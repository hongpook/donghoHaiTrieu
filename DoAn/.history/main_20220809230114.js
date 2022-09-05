$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();

        }
    });
    $("#topBtn").click(function () {
        $('html,body').animate({ scrollTop: 0 }, 800);
    });
});
let input = document.querySelector('input');
let div = document.querySelector('div');
div.style.display = 'none';
input.onclick = () => {
    div.style.display = 'block';
};
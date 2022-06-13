$(function () {

    $('.visual_slider').slick({
        dots: true,
        autoplay: true,
        pausOnHover: false,

    });
    $('.slider').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000,

        dots: true,
        pauseOnHover: false,

    });
    $('.slider02').slick({
        slidesToShow: 3

    });
});
// boolean : 참거짓, string : 문자열, function : 함수, array : 배열
// arrows : 좌우 방향 없어지게
//  dots: 각 콘텐츠마다 점생김
//  pauseOnHever : 마우스 올라가면 멈춤
//  자바스크립트는 대소문자를 구분한다.

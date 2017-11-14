"use strict";

function mason(){
    $( '.grid' ).masonry({
        itemSelector: '.grid__item',
        columnWidth: '.grid__item',
    })
};

function sliderComments(){
    $( '.reviews' ).slick({
        vertical: true,
        dots: true,
        dotsClass: 'dots-coment',
        prevArrow: false,
        nextArrow: false
    });
};

function sliderLittle(){
    $('.teacher').slick({
        prevArrow: '<a href="" class="mid-slide__prev mid-slide__btn"><</a>',
        nextArrow: '<a href="" class="mid-slide__next mid-slide__btn">></a>'
    
    });
}

function sliderMiddle(){
    $( '.mid-slide' ).slick({
        prevArrow: '<a href="" class="mid-slide__prev mid-slide__btn"><</a>',
        nextArrow: '<a href="" class="mid-slide__next mid-slide__btn">></a>'
    
        /* nextArrow:'<img src="../img/next.png">',
         prevArrow:'<img src="../img/prev.png">'*/
    });

}

function scroll() {
    $("#menu").on("click", "a", function (event) {
        if ($(event.target).hasClass('header-fix__logo-wrapper--img') ||
            $(event.target).hasClass('burger-menu__img')) {
            return
        }

        event.preventDefault();

        var id = $(this).attr('href');

        var top = $(id).offset().top ;

        $('body,html').animate({scrollTop: (top - 70)}, 1500);
    });
}

function pushBurger(){

    $( '#burgerButton' ).on( 'click', function(){
        var target = $(this);
        var span = target[0].querySelector('span');
       
        span.classList.toggle('header__button--active');
    });

}


$( document ).ready( function(){
    mason();
    sliderComments();
    sliderMiddle();
    sliderLittle();
    pushBurger();
    scroll();
});
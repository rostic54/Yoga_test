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


$( document ).ready( function(){
    mason();
    sliderComments();
    sliderMiddle();
    sliderLittle();
})
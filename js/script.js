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
        nextArrow: false,
        asNavFor: '.teacher'
    });
};

function sliderLittle(){
    $('.teacher').slick({
        asNavFor: '.reviews',
        autoplay: false,
        prevArrow: '<a href="" class="mid-slide__prev mid-slide__btn"><</a>',
        nextArrow: '<a href="" class="mid-slide__next mid-slide__btn">></a>'
    
    });
}

function sliderMiddle(){
    $( '.mid-slide' ).slick({
        prevArrow: '<a href="" class="mid-slide__prev mid-slide__btn"><</a>',
        nextArrow: '<a href="" class="mid-slide__next mid-slide__btn">></a>'
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

function popUp(){
    $( '.js-btn' ).magnificPopup({
        type: 'inline',
        //focus: '#name'

    });
}

function popUpGallary(){
    $( '#art' ).magnificPopup({
        delegate: 'a',
        type: 'image'
    });
} 



function hoverHeadPackage(){
    var packages = document.querySelectorAll( '.packages__piec' );

    for( var i = 0; i < packages.length ; i++ ){
       packages[ i ].onmouseover = function( event ){

   
        var targetObj = event.target;
        if( targetObj.tagName ==='A' ){

        var priceBlock = this.querySelector( '.js-purpleHover' );        
        priceBlock.style.backgroundColor = '#5764e5';
    
        }
      } 
       packages[ i ].onmouseout = function( event ){

        var targetObj = event.target;
        if( targetObj.tagName ==='A' ){

        var priceBlock = this.querySelector( '.js-purpleHover' );        
        priceBlock.style.backgroundColor = '';
           
        }
      }                  
    }
   
};

$( document ).ready( function(){
    mason();
    sliderComments();
    sliderMiddle();
    sliderLittle();
    pushBurger();
    scroll();
    popUp();
    popUpGallary();
    hoverHeadPackage();
});
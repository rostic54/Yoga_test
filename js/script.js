"use strict";

function mason(){
    $('.grid').masonry({
        itemSelector: '.grid__item',
        columnWidth: '.grid__item',
    })
};

function slider(){
    $('.reviews').slick({
        vertical: true,
        dots: true
    });
};


$( document ).ready( function(){
    mason();
    slider();
})
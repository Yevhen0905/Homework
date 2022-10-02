"use strict";

$(function () {
  $('.slider_block').slick({
    dots: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false
  });
});
$(function () {
  $('.slider_products').slick({
    slidesToShow: 5,
    nextArrow: '<button type="button" class="slick-prev slick_arrow"><span class="slick_item_prev"></span></button>',
    prevArrow: '<button type="button" class="slick-next slick_arrow"><span class="slick_item_next"></span></button>',
    responsive: [{
      breakpoint: 1024,
      //екран менше 1024
      settings: {
        slidesToShow: 5,
        arrows: true // infinite: true, по замовчуванню
        // dots: true  точки поки не треба

      }
    }, {
      breakpoint: 768,
      //екран менше 768
      settings: {
        slidesToShow: 3,
        arrows: true // infinite: true, по замовчуванню
        // dots: true  точки поки не треба

      }
    }, {
      breakpoint: 568,
      //екран менше 568
      settings: {
        slidesToShow: 1,
        // infinite: true, по замовчуванню
        dots: true,
        arrows: false
      }
    }]
  });
});
$(function () {
  $('.slider_partners').slick({
    slidesToShow: 9,
    nextArrow: '<button type="button" class="slick-prev slick_arrow"><span class="slick_item_prev"></span></button>',
    prevArrow: '<button type="button" class="slick-next slick_arrow"><span class="slick_item_next"></span></button>',
    responsive: [{
      breakpoint: 1024,
      //екран менше 1024
      settings: {
        slidesToShow: 9,
        arrows: true // infinite: true, по замовчуванню
        // dots: true  точки поки не треба

      }
    }, {
      breakpoint: 768,
      //екран менше 768
      settings: {
        slidesToShow: 6,
        arrows: true // infinite: true, по замовчуванню
        // dots: true  точки поки не треба

      }
    }, {
      breakpoint: 568,
      //екран менше 568
      settings: {
        slidesToShow: 2,
        // infinite: true, по замовчуванню
        dots: true,
        arrows: false
      }
    }]
  });
});
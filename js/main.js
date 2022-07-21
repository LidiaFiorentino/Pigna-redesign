
$(function () {
  $('#up').click(() => {
    window.scrollTo(0, 0)
  })

  var scrollo = $(window).scrollTop();
  $(window).on("scroll", function () {
    scrollo = $(window).scrollTop();

    if (scrollo > 150) {

      $('#up').addClass("upShow");

    }

    else {

      $('#up').removeClass("upShow");

    }

  })


  $('#drop').on("click", function () {

    $(this).toggleClass("rotate");

    $('menu').toggleClass("showNav");

  });

  $('#menu-button').on("click", function () {
    $('nav').toggleClass("menu-opened")
  })

  $('nav li').on("click", function () {
    $('nav').toggleClass("menu-opened")
  })

  $('#themuseum').hide();
  $("#themuseum").fadeIn(2000);



})
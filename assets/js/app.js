$(document).ready(function() {
  //execute javascript on DOM load

  //Set variables for different album images on screen1
  var $album1 = $('.album-row > a').eq(0);
  var $album2 = $('.album-row > a').eq(1);
  var $album3 = $('.album-row > a').eq(2);
  var $album4 = $('.album-row > a').eq(3);
  var $album5 = $('.album-row > a').eq(4);
  var $album6 = $('.album-row > a').eq(5);




  $album1.click(function (event) {
    event.preventDefault();
    console.log("album1")

    //Hide Screen 1, Display Screen 2
    $('.albums-container').addClass('hidden');
    $('.album-expanded').addClass('active');
    $('nav').addClass('active');

    //Change album title to reflect Album #1
    $('.album-expanded-name h2').text('Album 1');

    //Change images
    var $images = $('.album-expanded article').eq(0);
    $images.removeClass('hidden');

  });

  $album2.click(function (event) {
    event.preventDefault();
    console.log("album2")

    //Hide Screen 1, Display Screen 2
    $('.albums-container').addClass('hidden');
    $('.album-expanded').addClass('active');
    $('nav').addClass('active');

    //Change album title to reflect Album #1
    $('.album-expanded-name h2').text('Album 2');

    //Change images
    var $images = $('.album-expanded article').eq(1);
    $images.removeClass('hidden');
  });

  $album3.click(function (event) {
    event.preventDefault();
    console.log("album3")

    //Hide Screen 1, Display Screen 2
    $('.albums-container').addClass('hidden');
    $('.album-expanded').addClass('active');
    $('nav').addClass('active');

    //Change album title to reflect Album #1
    $('.album-expanded-name h2').text('Album 3');

    //Change images
    var $images = $('.album-expanded article').eq(2);
    $images.removeClass('hidden');
  });

});

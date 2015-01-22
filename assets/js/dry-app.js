$(document).ready(function() {
  //execute javascript on DOM load

  //set nav menu names//

  // //Set parameters for loop
  // var navLength = $('nav ul').children().length - 1;
  // var numRows = $('.albums-container .album-row').size();
  //
  // //Loop through values to set names
  // for(var i = 0; i < navLength; i++) {
  //   var aName = "";
  //   if (i >= 3) {
  //     aName =  $('.album-row').eq(1).('a').eq(i-3).find('h1').text();
  //   }
  //   else {
  //     aName = $('.album-row a').eq(i).find('h1').text();
  //   }
  //   $('nav ul li a').eq(i).text(aName);
  // };


  //Switch to expanded album view when clicking on home screen images
  $('.album-row a').click(function (event) {
    event.preventDefault();

    var relatedClass = "." + $(this).attr('rel'); //sets the class based on a clicked

    //Hides home screen
    $('.albums-container').addClass('hidden');
    $('.album-expanded').addClass('active');

    //show nav
    $('nav').addClass('active');

    //hide other albums
    $(relatedClass).siblings().addClass('hidden');
    $(relatedClass).removeClass('hidden');

    //change album name
    var aName = $(this).find('h1').text();
    $('.album-expanded-name h2').text(aName);
    //Set album name for nav bar
  });

  //Change album when clicking sidebar nav
  $('nav a').click(function (event) {
    event.preventDefault();

    var relatedClass = "." + $(this).attr('rel'); //sets the class based on a clicked
    console.log(relatedClass)
    //if the home button is clicked, hide nav and album views
    if(relatedClass === ".albums-container") {
      $('nav').addClass('hidden');
      $('nav').removeClass('active');
      $('.album-expanded').removeClass('active');
    };
    $(relatedClass).siblings().addClass('hidden');
    $(relatedClass).removeClass('hidden');

    //change album name
    var aNameSelect = $(this).attr('rel');
    //set the album name to the text found in h1 tag inside the link
    var aName = $('a[rel="'+aNameSelect+'"]').find('h1').text();
    $('.album-expanded-name h2').text(aName);
  });

  //Enlarge Picture on click
  $('.photo-row a').click(function (event) {
    event.preventDefault();

    $('.photo-expanded').removeClass('hidden');
    $('.photo-expanded').addClass('active');
    $('.photo-expanded').css("z-index:1000;"); //put expanded layer on top

    //get image clicked src
    var image = $(this).find('img').attr('src');
    //change image src attribute to the image that was clicked
    $('.photo-large img').attr('src',image);
    //get text for caption
    var caption = $(this).find('p').text();
    //change photo caption
    $('.photo-large h2').text(caption);
  });

  //Set back button to close photo-expanded view;
  $('.back-button a').click(function (event) {
    event.preventDefault();
    $('.photo-expanded').removeClass('active');
    $('.photo-expanded').addClass('hidden');
  });

  //Next photo button
  $('a.next-photo').click(function (event) {
    event.preventDefault();
    //change img src to the next photo in the gallery

  });
  
  //previous photo button
  $('a.last-photo').click(function (event) {
    event.preventDefault();
    //change im src to the last photo in the gallery

  });
});

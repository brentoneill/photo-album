$(document).ready(function() {
  //execute javascript on DOM load



      /////////////////////////////////////////////////
      /////////////////////////////////////////////////
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
      /////////////////////////////////////////////////
      /////////////////////////////////////////////////



/////////////////////////////////////////////////
////    Switch to expanded album view when clicking on home screen images
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

    //change bg to random image from gallery
    var rand = Math.floor((Math.random()*5)+1);
    bgImage = $(relatedClass).find('img').eq(rand).attr('src');
    $('<style>body:before{background-image: url("'+bgImage+'");}</style>').appendTo('head');
  });
/////////////////////////////////////////////////
/////////////////////////////////////////////////




/////////////////////////////////////////////////
////Change album when clicking sidebar nav  /////
  $('nav a').click(function (event) {
    event.preventDefault();

    //remove background-image
    $('head style').first().remove();

    var relatedClass = "." + $(this).attr('rel'); //sets the class based on a clicked
    //if the home button is clicked, hide nav and album views
    if(relatedClass === ".albums-container") {
      $('nav').addClass('hidden');
      $('nav').removeClass('active');
      $('.album-expanded').removeClass('active');
    }
    else {
      //change bg image to random blurred image -- only do so when home link is not clicked
      var rand = Math.floor((Math.random()*5)+1);
      bgImage = $(relatedClass).find('img').eq(rand).attr('src');
      $('<style>body:before{background-image: url("'+bgImage+'");}</style>').appendTo('head');
    };
    $(relatedClass).siblings().addClass('hidden');
    $(relatedClass).removeClass('hidden');

    //change album name
    var aNameSelect = $(this).attr('rel');
    //set the album name to the text found in h1 tag inside the link
    var aName = $('a[rel="'+aNameSelect+'"]').find('h1').text();
    $('.album-expanded-name h2').text(aName);

  });
/////////////////////////////////////////////////
/////////////////////////////////////////////////




/////////////////////////////////////////////////
////    Enlarge Picture on click    /////////////
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
/////////////////////////////////////////////////
/////////////////////////////////////////////////




/////////////////////////////////////////////////
////Set back button to close photo-expanded view/
  $('.back-button a').click(function (event) {
    event.preventDefault();
    $('.photo-expanded').removeClass('active');
    $('.photo-expanded').addClass('hidden');
  });
/////////////////////////////////////////////////
/////////////////////////////////////////////////




/////////////////////////////////////////////////
////    Next photo button    ////////////////////
  $('a.next-photo').click(function (event) {
    event.preventDefault();

    //change img src to the next photo in the gallery//
    var curImageSrc = $('.photo-large img').attr('src');
    //Find the first img w/ same source as clicked and
    //traverse up the DOM to find the highest level
    //parent of the image w/ the same img src
    var curImgParentDiv = $('img[src="'+curImageSrc+'"]').parent().parent().eq(0);
    var curImgParentA = curImgParentDiv.parent();
    //Traverse to the sibling of the next sibling of the parent anchor tag
    var newImgSrc = curImgParentA.next('a').find('img').attr('src');
    //get text for caption
    var caption = curImgParentA.next('a').find('p').text();
    if($(curImgParentA).is(':last-child'))
    {
      curImgParentA = curImgParentA.parent().children().first();
      newImgSrc = curImgParentA.find('img').attr('src');
      caption = curImgParentA.find('p').text();
    }
    $('.photo-large img').attr('src', newImgSrc);
    //change photo caption
    $('.photo-large h2').text(caption);
  });
/////////////////////////////////////////////////
/////////////////////////////////////////////////




/////////////////////////////////////////////////
////    Previous photo button    ////////////////
  $('a.last-photo').click(function (event) {
    event.preventDefault();

    //change im src to the previous photo in the gallery
    var curImageSrc = $('.photo-large img').attr('src');
    //Find the first img w/ same source as clicked and
    //traverse up the DOM to find the highest level
    //parent of the image with that src value
    var curImgParentDiv = $('img[src="'+curImageSrc+'"]').parent().parent().eq(0);
    var curImgParentA = curImgParentDiv.parent();
    //Traverse to the next sibiling of the parent anchor tag
    var newImgSrc = curImgParentA.prev('a').find('img').attr('src');
    //get text for caption
    var caption = curImgParentA.prev('a').find('p').text();
    if($(curImgParentA).is(':first-child'))
    {

      curImgParentA = curImgParentA.parent().children().last();
      newImgSrc = curImgParentA.find('img').attr('src');
      caption = curImgParentA.find('p').text();
    }
    //change photo caption
    $('.photo-large h2').text(caption);
    //chang photo
    $('.photo-large img').attr('src', newImgSrc);
  });
/////////////////////////////////////////////////
/////////////////////////////////////////////////


});

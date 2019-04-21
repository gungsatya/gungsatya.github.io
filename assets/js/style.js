// 
//  Created for gungsatya.github.io
//  September 25th, 2018
// 

window.onload = function () {
  $('.img-pop-up').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title') + '<small>by Satya Wibawa</small>';
      }
    }
  });
  var typed = new Typed('#typed', {
    strings: ["Satya Wibawa", "A Programmer"],
    smartBackspace: true, // Default value
    loop: true,
    typeSpeed: 200
  });
}
/* --------------------------------------*/
/*      Created 24 Januari 2019          */
/*      by Satya Wibawa                  */
/*      (https://gungsatya.github.io)    */
/* ------------------------------------- */

$('.img-pop-up').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery:{
        enabled:true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>Weddingku.id</small>';
      }
    }
});
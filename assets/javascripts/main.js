$('.nav-link').bind('click', function(e) {
  if(!$(e.target).is('.show')) {
    setTimeout(function(){ 
      $('.collapse').removeClass('show'); 
    }, 900);
  }
});

$('section').on('click', function() {
  if($('#navbarToggler').hasClass('show')) {
      $('.collapse').removeClass('show')
  }
})
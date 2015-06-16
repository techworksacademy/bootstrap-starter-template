$('#calltoaction').on('click', function() {
  alert('You clicked the button! Congratulations!');
});

$('#button1').on('click', function() {
  $('nav').fadeToggle();
});

$('#button2').on('click', function() {
  $('header h1, header p').slideToggle();
});
 
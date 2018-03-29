// hide input
$('.fa-plus').click(function(){
  $('#todobox').slideToggle('slow');
  var rotateAngle = $(this).getRotateAngle();
  if(rotateAngle == 45) {
    $(".fa-plus").rotate({animateTo:0});
  } else{
    $(".fa-plus").rotate(45);
  }
});

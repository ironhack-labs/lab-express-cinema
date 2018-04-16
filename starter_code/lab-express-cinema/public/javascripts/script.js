document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


$('.movie-wrapper').hover(function(){
  // console.log($(this));
  $(this).children('img').stop().animate({"margin-top":"0px", "width":"204px", "height":"300px"}, 200);
  $(this).children('section').stop().animate({"top":"140px"}, 400);
  

}, function(){
  $(this).children('img').siblings('section').stop().animate({"top":"340px"}, 200, function(){
    $(this).siblings('img').stop().animate({"margin-top":"25px", "width":"184px", "height":"270px"}, 200);
  });
});

// $('.movie-wrapper').click(function(){
//   $(this).children('.movie-info-pop').children('button').trigger('click');
// });
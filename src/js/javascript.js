$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src ="../img/rewievs/prewievs.png" alt ="left"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src ="../img/rewievs/next.png" alt ="right"></button>'
    });

    function initMap() {
      var coordinates = {lat: 55.748104, lng: 37.627197},
      
          map = new google.maps.Map(document.getElementById('map'), {
              center: coordinates
          }),
          marker = new google.maps.Marker({
            position: coordinates,
            map: map
        });
  }
});
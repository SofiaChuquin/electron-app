const http = require('http');
const https = require('https');
const fs = require('fs');
const remote = require('electron').remote;

const app = remote.app;

$(document).ready(function(){
  $('.photos-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.photos').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3
  });

  $(this).keydown((e) => {
    if (e.which === 123) {
      waitSync();
      setTimeout(() => {
        suscribe();
        sync();
      }, 2000);
    } else if (e.which === 116) location.reload();
    else if (e.which === 120) remote.getCurrentWindow().toggleDevTools();
  });
});

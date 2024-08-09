import './assets/scss/all.scss';

$(document).ready(function () {
  $('.tab-item').on('click', function (){
    let target = $(this).data('target');

    $('.tab-item').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
    $(target).addClass('active');
  })


});

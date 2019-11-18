$(document).ready(function(){

  // grid isotope and filter
  var $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  $('.filter-button-group').on('click','button',function(){
    var filterValue = $(this).attr('data-filter');

    $grid.isotope({ filter: filterValue });
  });


  // event input keywordInput
  $('input[name="keywordInput"]').keyup(function(event) {
    /* Act on the event */
    var content = $(this).val();
    var keycode = event.keyCode;
    if(keycode === 13) // enter key
    {
      $(this).val(content + ', ');
    }
  });
  
});

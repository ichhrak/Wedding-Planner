$(document).ready(function() {
    $('.oval-box').on('click', function() {
      $('.oval-box').not($(this)).removeClass('active');
      $(this).toggleClass('active');
    });
  });
  
  $(document).ready(function() {
    $('.submit-button').on('click', function() {
      alert('Reservation Successful');
      window.location.href = 'index.html'; 
    });
  });
  
  
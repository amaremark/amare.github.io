// $(document).on('click', function() {
//     $("#board").flip();
//   });

$(document).ready(function() {
    $('.theCard').on('click', function() {
     $('.theCard').toggleClass('flipped');
   }),5000);
   });

   $("#card").flip(true);
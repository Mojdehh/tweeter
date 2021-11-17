// Javascript code for character count

//$(document).ready runs a callback when the DOM is ready to be manipulated with jQuery
$(document).ready(function() {
  
  $("textarea").on('input', charCount);

});

const charCount = function() {
  // console.log('this', this);
  const inputChar = $(this).val().length; // calculate number of characters typed
  const charLeft = 140 - inputChar;

  $(this).siblings().children(".counter").text(charLeft); //  Show dynamic counter (starting from 140)
  
  if (charLeft < 0) {
    $(this).siblings().children(".counter").addClass("counterErr");
  } else {
    $(this).siblings().children(".counter").removeClass("counterErr");
  }
  
}
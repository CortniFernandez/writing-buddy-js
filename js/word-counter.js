$(document).ready(function() {


  $(document).on('change', '#goal-input', function () {
    var todayGoal = $("#goal-input").val();
    $("#goal-display").html(todayGoal);
    $("#goal-input").val("");
  });

  $(document).on('change', '#so-far', function() {
    var todayGoal = parseInt($("#goal-display").html());
    var update = $('#so-far').val();
    
    
    $("#so-far-display").html(update);
    $('#so-far').val("");

    function flowerFade() {
      $(".flower").addClass("transparent");
    }

    var percentage = update / todayGoal;
    if (percentage < 0.2) {
      $("#encouragement").html("You got this.");
    } else if (percentage >= 0.2 && percentage <= 0.3) {
      $("#encouragement").html("I believe in you.");
      flowerFade();
      $(".img-two").removeClass("transparent");
    } else if (percentage > 0.3 && percentage <= 0.4) {
      $("#encouragement").html("You're doing it!");
      flowerFade();
      $(".img-three").removeClass("transparent");
    } else if (percentage > 0.4 && percentage <= 0.5) {
      $("#encouragement").html("Look at you go!");
      flowerFade();
      $(".img-four").removeClass("transparent");
    } else if (percentage > 0.5 && percentage <= 0.6) {
      $("#encouragement").html("Over halfway there now.");
      flowerFade();
      $(".img-five").removeClass("transparent");
    } else if (percentage > 0.6 && percentage <= 0.7) {
      $("#encouragement").html("That's it, keep going!");
      flowerFade();
      $(".img-six").removeClass("transparent");
    } else if (percentage > 0.7 && percentage <= 0.8) {
      $("#encouragement").html("You're doing so awesome!");
      flowerFade();
      $(".img-seven").removeClass("transparent");
    } else if (percentage > 0.8 && percentage <= 0.9) {
      $("#encouragement").html("Don't quit now!");
      flowerFade();
      $(".img-eight").removeClass("transparent");
    } else if (percentage > 0.9 && percentage < 1) {
      $("#encouragement").html("Nearly there!");
      flowerFade();
      $(".img-eight").removeClass("transparent");
    } else if (percentage >= 1) {
      $("#encouragement").html("You did it!!! Thank you for helping me grow <3");
      flowerFade();
      $(".img-nine").removeClass("transparent");
    }
  });

})
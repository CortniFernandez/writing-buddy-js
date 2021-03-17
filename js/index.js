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

    var percentage = update / todayGoal;
    if (percentage < 0.1) {
      $("#encouragement").html("You can do this.");
    } else if (percentage >= 0.1 && percentage <= 0.2) {
      $("#encouragement").html("I believe in you.");
      $(".flower").addClass("transparent");
      $(".img-two").removeClass("transparent");
    } else if (percentage > 0.2 && percentage <= 0.3) {
      $("#encouragement").html("You're doing it!");
      $(".flower").addClass("transparent");
      $(".img-three").removeClass("transparent");
    } else if (percentage > 0.3 && percentage <= 0.4) {
      $("#encouragement").html("Look at you go!");
      $(".flower").addClass("transparent");
      $(".img-four").removeClass("transparent");
    } else if (percentage > 0.4 && percentage <= 0.5) {
      $("#encouragement").html("Almost halfway there now.");
      $(".flower").addClass("transparent");
      $(".img-five").removeClass("transparent");
    } else if (percentage > 0.5 && percentage <= 0.6) {
      $("#encouragement").html("That's it, keep going!");
      $(".flower").addClass("transparent");
      $(".img-six").removeClass("transparent");
    } else if (percentage > 0.6 && percentage <= 0.7) {
      $("#encouragement").html("You're doing so awesome!");
      $(".flower").addClass("transparent");
      $(".img-seven").removeClass("transparent");
    } else if (percentage > 0.7 && percentage <= 0.8) {
      $("#encouragement").html("Don't quit now!");
      $(".flower").addClass("transparent");
      $(".img-eight").removeClass("transparent");
    } else if (percentage > 0.8 && percentage <= 0.9) {
      $("#encouragement").html("Nearly there!");
    } else if (percentage >= 1) {
      $("#encouragement").html("You did it!!! Thank you for helping me grow <3");
      $(".flower").addClass("transparent");
      $(".img-nine").removeClass("transparent");
    }
  });

})
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
    if (percentage < 0.2) {
      $("#encouragement").html("You can do this.");
    } else if (percentage >= 0.2 && percentage <= 0.4) {
      $("#encouragement").html("I believe in you.");
    } else if (percentage > 0.4 && percentage <= 0.6) {
      $("#encouragement").html("You're doing it! Keep going!");
    } else if (percentage > 0.6 && percentage <= 0.8) {
      $("#encouragement").html("You're doing so awesome!");
    } else if (percentage > 0.8 && percentage < 1) {
      $("#encouragement").html("Nearly there!");
    } else if (percentage >= 1) {
      $("#encouragement").html("You did it!!!");
    }
  });

})
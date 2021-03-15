$(document).ready(function() {

  $(document).on('click', '#lets-go', function () {
    var todayGoal = $("#goal-input").val();
    $("#goal-display").html(todayGoal);
    $("#goal-input").val("");
  });

  $(document).on('click', '#words-so-far', function() {
    var todayGoal = parseInt($("#goal-display").html());
    var update = $('#so-far').val();
    if (update >= todayGoal) {
      $("#encouragement").html("You did it!!!");
    }
  });

})
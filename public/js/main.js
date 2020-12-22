$(document).ready(function () {

  // Init Scrollspy
  $(".scrollspy").scrollSpy();

  // === Quiz ===

  // Hide quiz feedback
  $(".wrong, .correct").hide();

  $("button[type=submit]").click(e => {
    // Prevent default submit behavior, which is to navigate to another site
    e.preventDefault();

    var answers = [];

    // Traverse DOM tree to find the input elements matching this question
    $(e.target)
      .closest("form")
      .find("input")
      .each(function () {
        // Validate inputs and push result to answers array
        switch ($(this).attr("type")) {
          case "radio":
          case "checkbox":
            answers.push(
              ($(this).attr("data-answer") !== undefined &&
                $(this).is(":checked")) ||
              ($(this).attr("data-answer") === undefined &&
                $(this).is(":not(:checked)"))
            );
            break;
          case "text":
            answers.push($(this).val() === $(this).attr("data-answer"));
        }
      });

    // Check if all entries in array are true and output result
    if (answers.every(answer => answer === true)) {
      $(e.target)
        .closest(".col")
        .find(".correct")
        .show();
      $(e.target)
        .closest(".col")
        .find(".wrong")
        .hide();
    } else {
      $(e.target)
        .closest(".col")
        .find(".correct")
        .hide();
      $(e.target)
        .closest(".col")
        .find(".wrong")
        .show();
    }
  });
});
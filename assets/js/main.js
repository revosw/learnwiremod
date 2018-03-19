"use strict";
// I am not sure if I want to add a service worker. Service worker is to
// make the website a PWA (Progressive web app), in which I can make the
// website app-like, in the form of being able to add the website to your
// home screen really easily on mobile, and even being able to use the
// website without an internet connection.
// https://developers.google.com/web/progressive-web-apps/
/*if ('serviceWorker' in navigator) {

  navigator.serviceWorker
    .register('/serviceworker.js', { scope: '/' })
    .then(function(registration) {
      console.log("Service Worker Registered");
    })
    .catch(function(err) {
      console.log("Service Worker Failed to Register", err);
    })
}*/

// WE JUST GOTTA WAIT SOME MONTHS FOR THE 1.0 RELEASE
// OF MATERIALIZECSS BOYS, HANG IN THERE

// ================================================
// ===   Initialize MaterializeCSS components   ===
// ================================================

// Wait for 1.0 release

// ================================================
// ===              Initialize quiz             ===
// ================================================

// Wait for 1.0 release

$(document).ready(function() {
  // === Init Materialize Components ===
  $(".button-collapse").sidenav();

  // Init Carousel
  $(".carousel.carousel-slider")
    .carousel({
      fullWidth: true,
      indicators: true
    })
    .off("mousedown");

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
      .each(function() {
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

  // === Insert spacer at bottom of content ===
  $("main")
    .find($(".col")[0])
    .append("<div class='spacer hide-on-med-and-down'></div>");
});

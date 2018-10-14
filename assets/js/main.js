$(document).ready(function() {
  // === Import sidenav ===
  // I need to fetch _sidenav.html which resides at /topic/_sidenav.html, or else
  // I'll have to write out the sidenav html on every single page

  fetch("_sidenav.html")
    .then(response => response.text())
    .then(sidenavHTML => document.querySelector("#nav-mobile").innerHTML = sidenavHTML)

    setTimeout(() => {
      $(`a[href="${location.pathname.split("/")[2]}"]`).parent().addClass("active")
    }, 200);

    if (document.querySelector("#nav-mobile").innerHTML === "") {
      setTimeout(() => {
        $(`a[href="${location.pathname.split("/")[2]}"]`).parent().addClass("active")
      }, 2000);
    }
      
    

    // setTimeout(() => $(`a[href="${location.pathname.split("/")[2]}"]`).parent().addClass("active"), 600)
  
  // === Initialize Materialize Components ===
  $(".button-collapse").sideNav();

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
"use strict";
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

// Kebab-case is when variables-are-written-like-this, with lowercase, hyphenated variable names
function kebabCase(text) {
  return text.replace(/\s+/g, "-").toLowerCase();
}

function changePageOrSection(event) {


  // Since the sidenav contains both links that refer to parent pages, and sublinks that refers to headers
  // inside the parent pages, we have to differentiate between the two. Since we cannot select the first sibling
  // element from a sibling selector, we need to traverse up to the parent, then select the parent's first child.
  var parentPageElem = $(event.target).parents("li").children(":first-child")[0];

  var parentPageLink = kebabCase( parentPageElem.innerText );

  var clickedLinkText = kebabCase( event.target.innerText );
  
  
  // We don't want to traverse to another page if we are already on the selected parent page
  if (parentPageLink === location.search.substring(6)) {
    //And we don't want to do anything if we have clicked the same link as we are aleady on
    if (parentPageElem === event.target) return location.hash = "";
    
    // PROBLEM RIGHT HERE - Changing location.hash brings you back to default page
    location.hash = kebabCase(clickedLinkText);
    return;
  }

  // But if the selected parent page is different, we need to know what parent page to fetch.
  // Is the clicked link a part of tutorials or reference? We have two directories, one for each
  var tutOrRef = $(event.target).parents("ul").hasClass("tutlist")
    ? "tutorials"
    : "reference";

  importer.load(
    "main",
    `${tutOrRef}/${parentPageLink}.html`,
    // Initialize highlighting for code blocks after loading page
    function () {
      highlightCode();
      //setTimeout(() => location.hash = subLinkText,10000)
    },
    `${parentPageLink}`
  );
}


function highlightCode() {
  for (var snippet of $("code")) {
    $(snippet).html(hljs.highlightAuto($(snippet).text()).value);
  }
}

//Run  function  when  the page's content has loaded
window.onload = function() {
  importer.load("#sidenav","sidenav.html", () => {

    // Object for use in importer.initialize()
    var pages = {};
    for(var page of $("#sidenav ul a:first-child")) {
      var pageName = kebabCase(page.innerText);

      pages[pageName] = $(page).parents("ul").hasClass("tutlist")
      ? `tutorials/${pageName}.html`
      : `reference/${pageName}.html`;
    }
    
    importer.initialize(
      "main",
      pages,
      function() { highlightCode(); },
      `introduction`,
      function() { highlightCode(); },
    );

    $(".tab").click( e => {
      if ( $(e.target).hasClass("active") ) return;
      $(".tab").toggleClass("active");
      $("#sidenav").toggleClass("tutorials reference");
      $(".tutlist").toggle();
    });
    
    $("#sidenav ul li a").click( e => changePageOrSection(e) );

    // Have to reset the sidenav to show it when expanding the window, and hide at mobile
    $(window).on("resize", () => {

      // If the viewport's (the browser window) width is less than 1200px, hide the sidenav
      $("#sidenav")[0].style.left = window.innerWidth < 1200
        ? "-430px"
        : "0px";
    });

    // Just to toggle the sidenav. Real simple. The button for toggling sidenav is hidden at largest breakpoint
    $(".sidetoggle").click( () => {
      var toggle = $("#sidenav")[0].style.left == "0px"
        ? "-430px"
        : "0px";

      $("#sidenav").animate({ left: toggle });
    });

  });

}
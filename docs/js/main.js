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

// Run function when the page's content has loaded
window.onload = function() {

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

  // It's nice when you can just click anywhere outside of the sidenav to hide it when viewing
  // the page on mobile
  $("main").click( () => {
    if (window.innerWidth <= 1200) $("#sidenav").animate({ left: "-430px" });
  })

  // The quiz module will be present on many of the pages
  var quiz = document.querySelector(`section.quiz`)
  if (quiz) {
    
  }
}
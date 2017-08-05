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

//Run  function  when  the page's content has loaded
window.onload = function() {

  $("#sidenav").load("/assets/includes/sidenav.html", () => {
    $(".tab").on("click", e => {
      if ( $(e.target).hasClass("active") ) return;
      $(".tab").toggleClass("active");
      $("#sidenav").toggleClass("tutorials reference");
      $(".tutlist").toggle();
    });

    $("li > a:first-child").on("click", e => {
      $.ajax({
        url: `/e2/${e.target.innerText.replace(/ /g,"-").toLowerCase()}.html`,
        success: data => {
          $("main").html(data)
          //Initialize highlighting for code blocks when changing page
          $("code").html(hljs.highlightAuto($("code").text()).value)
        }
      })
    })
  })

};
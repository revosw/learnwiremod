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

    // Object for use in importer.initialize()
    var pages = {}
    for(page of $("#sidenav ul a:first-child")) {
      var pageName = page.innerText.replace(/ /g,"-").toLowerCase()
      var topic = location.pathname.replace(".html","")

      pages[pageName] = `${topic}/${pageName}.html`
      
    }
    console.log(pages)

    $(".tab").on("click", e => {
      if ( $(e.target).hasClass("active") ) return;
      $(".tab").toggleClass("active");
      $("#sidenav").toggleClass("tutorials reference");
      $(".tutlist").toggle();
    });

    importer.initialize(
      "main",
      pages,
      function(){$("code").html(hljs.highlightAuto($("code").text()).value);},
      "/e2/introduction.html"
    );

    $("#sidenav ul a:first-child").on("click", e => {
      // Get the name of the current page, either e2, gates, cpu etc...
      var topic = location.pathname.replace(".html","");

      // The page with the html to load inside the e2 directory. All lower-cased, spaces changed to hyphens
      var pageName = e.target.innerText.replace(/ /g,"-").toLowerCase();

      importer.load(
        "main",
        `${topic}/${pageName}.html`,
        // Initialize highlighting for code blocks at initial load and when changing page
        function(){$("code").html(hljs.highlightAuto($("code").text()).value)},
        `${pageName}`
      );

    })

    // Have to reset the sidenav to show it when expanding the window, and hide at mobile
    // setTimeout is for performance purposes. Instead of checking every time event is fired,
    // it checks once every 100ms
    $(window).on("resize", () => {
      setTimeout( () => {
        $("#sidenav")[0].style.left = checkBreakpoint();
      },100)
    })

    function checkBreakpoint() {
      return window.innerWidth < 1200 ? "-430px" : "0px";
    }

    $(".sidetoggle").on("click", () => {
      var toggle = $("#sidenav")[0].style.left == "0px" ? "-430px" : "0px"
      $("#sidenav").animate({ left: toggle })
      $("body::before").animate({ background: "rgba(0,0,0,0.6)" })
    })

  })
};
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
  console.log("Inside IIFE");
  var tabs = document.querySelectorAll(".tab");
  console.log(tabs)
  var sidenav = document.querySelector("#sidenav");
  for(tab of Array.from(tabs)) {
    console.log(tab)
    tab.addEventListener("click", e => {
      if(e.target.classList.toString() === "tab active") return;

      document.querySelector(".active").classList.remove("active")
      e.target.classList.add("active");
      
      if(document.querySelector(".active").innerText === "Tutorials") {
        console.log("Changed 1")
        document.querySelector(".tutlist").style.display = "";
        document.querySelector(".reflist").style.display = "none";
      } else {
        console.log("Changed 2")
        document.querySelector(".tutlist").style.display = "none";
        document.querySelector(".reflist").style.display = "";
      }
      sidenav.classList.remove(sidenav.classList.contains("tutorials") ? "reference" : "tutorials");
      sidenav.classList.add(e.target.innerText.toLowerCase());
    });
  }
}
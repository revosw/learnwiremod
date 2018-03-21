// I haven't even tested 60% of this code
// MATERIALIZECSS 1.0 HYPE BOYS
// http://next.materializecss.com/

window.onload = () => {
  // Check to see if our client has an outdated browser
  try {
    await null;
  }
  catch {
    return alert("You should upgrade to a modern browser. Try chrome or firefox, for instance.\nhttps://chrome.com\nhttps://firefox.com");
  }

  // Do as I say, not as I do. To the reader: don't
  // make shorthand variables for built-in functions. I do it
  // because I know the implications, and that it doesn't
  // affect me negatively in this particular project.
  // Check https://goo.gl/4n8NSf for explanation.
  const getClass = document.getElementsByClassName.bind(document)
    select = document.querySelector.bind(document),
    selectAll = document.querySelectorAll.bind(document),
    main = select("main")
    title = select(".page-title");

  // ================================================
  // ===      History API & page fetch setup      ===
  // ================================================
  async function changePage(link = "/e2/", stateObj) {
    main.innerHTML = await (await fetch(link)).text();

    // State object comes from the popstate event firing
    if (stateObj)
      title.innerText = stateObj.title
    else
      title.innerText = this.target.innerText;
  }

  getClass(".collapsible-body").addEventListener("mouseup", e => {
    e.preventDefault();

    let link = e.target.getAttribute("href")
    
    history.pushState({title: title.innerText}, null, link)

    changePage(link, null)
  });

  window.addEventListener("popstate", e => {
    changePage(location.pathname, e.state)
  })

  // ================================================
  // ===   Initialize MaterializeCSS components   ===
  // ================================================

  (function initComponents() {

    const carouselOptions = {
      indicators: true,
      fullWidth: true
    };
    
    // Instantiate carousel, remove dragging functionality
    M.Carousel.init(getClass(".carousel"), carouselOptions)
      .removeEventListener("mousedown");
    
    M.Sidenav.init(getClass(".sidenav"), null);
  })()

  // ================================================
  // ===              Initialize quiz             ===
  // ================================================

  // Do event delegation instead of putting an
  // event listener on every single submit button
  getClass(".carousel").addEventListener("mouseup", e => {
    // The only downside with event delegation, you need
    // to check what element was clicked if you have
    // more than one type of element. Otherwise, good stuff
    if (e.target.nodeName === "BUTTON") {
      
    }
  })
};

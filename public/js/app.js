import hljs from "highlight.js/lib/core.js"
import e2 from "./lib/e2.js"
import initScrollspy from "./lib/ScrollSpy.js";
import Quizlet from "./components/Quizlet.js";

document.addEventListener("DOMContentLoaded", () => {
    initScrollspy("#navMain", {offset: 4});
    customElements.define("lw-quizlet", Quizlet);
})
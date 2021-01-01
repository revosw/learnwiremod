import initScrollspy from "./lib/ScrollSpy.js";
import Quizlet from "./components/Quizlet.js";

document.addEventListener("DOMContentLoaded", () => {
    initScrollspy("#navMain", {offset: 4});
    customElements.define("lw-quizlet", Quizlet);
})
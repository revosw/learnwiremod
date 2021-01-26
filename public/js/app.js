import hljs from "./lib/highlight.js";
import expression2 from "./lib/expression2.js";
import zasm from "./lib/zasm.js";
import CodeCopy from "./lib/codecopy.js";
import ScrollSpy from "./lib/ScrollSpy.js";
import Quizlet from "./components/Quizlet.js";

document.addEventListener("DOMContentLoaded", () => {
    ScrollSpy("#navMain", {offset: 4});
    customElements.define("lw-quizlet", Quizlet);
    hljs.registerLanguage("expression2", expression2)
    hljs.registerLanguage("zasm", zasm);
    hljs.addPlugin({"before:highlightBlock": CodeCopy});
    hljs.initHighlightingOnLoad();
})
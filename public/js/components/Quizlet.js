import { hashCode } from "../lib/hash.js";

const template = document.createElement("template");
template.innerHTML = `
    <div class="flex flex-col w-full my-4 shadow-md">
        <div class="bg-gray-700 p-4 rounded-t-md"><h2 id="question"></h2></div>
        <div class="bg-darkgray">
            <pre><slot name="code"></slot></pre>
            <form id="form" class="flex flex-col m-5"></form>
        </div>
        <div id="bottom" class="bg-darkgray rounded-b-md flex justify-between items-center p-4">
            <input type="submit" id="submit" value="Submit" class="bg-gray-700 px-4 py-1 my-2 mr-4 self-start shadow-md">
            <p id="message" class=""></p>
        </div>
    </div>
`;

class Quizlet extends HTMLElement {
    constructor() {
        super();
        this.appendChild(template.cloneNode(true));

        console.log(this.querySelector("div"));

        this.querySelector("#question").textContent = this.getAttribute("question");

        const alternatives = this.getAttribute("alternatives").split(";");
        this.correctAnswersAmount = alternatives.filter(s => s.startsWith("O")).length
        if (this.correctAnswersAmount === 0) throw `There are no right answers`;

        if (correctAnswersAmount > 1) {
            this.constructMultipleChoiceQuizlet();
            this.getElementById("submit").onclick = validate;
        }
        else if (correctAnswersAmount === 1) {
            this.constructSingleChoiceQuizlet();
            this.getElementById("submit").onclick = validate;
            this.querySelector("input").checked = true;
        } else {
            throw `the type attribute of the quizlet has to be either code, multiplechoice or singlechoice`;
        }
    }

    validate() {
        const messageElement = this.querySelector("#message");
        const checkedIncorrectAnswers = this.querySelector(":not([data-answer]):checked") !== null
        const notCheckedCorrectAnswers = this.querySelector("[data-answer]:not(:checked)") !== null

        if (checkedIncorrectAnswers || notCheckedCorrectAnswers) {
            messageElement.innerText = this.getAttribute("incorrect");
            messageElement.classList.add("text-red-300");
            messageElement.classList.remove("text-green-300");
        }
        else {
            messageElement.innerText = this.getAttribute("correct");
            messageElement.classList.add("text-green-300");
            messageElement.classList.remove("text-red-300");
        }
    }

    connectedCallback() {
        this.querySelector("#submit").addEventListener("click", validate);
    }

    constructCodeQuizlet() {
        const parent = this.querySelector("form").parentElement;
        const bottom = this.querySelector("#bottom");
        parent.innerHTML = `
            <pre><code>adfdhddgfdgsefsgfd</code></pre>
            <pre><code>htdgsetdfgdfhdrg</code></pre>
        `
        bottom.classList.remove("justify-between")
        bottom.innerHTML = `
        <input type="submit" id="submit" value="Check solution" class="bg-gray-700 px-4 py-1 my-2 mr-4 self-start shadow-md">
            <input type="button" id="copy" value="Copy code" class="bg-green-300 text-black px-4 py-1 my-2 mr-4 self-start shadow-md">
        `
    }

    constructSingleChoiceQuizlet() {

        for (let alt of alternatives) {
            if (alt[0] !== "O" && alt[0] !== "X") {
                throw `${alt} should instead be either O${alt} or X${alt}`;
            }
            const isAnswer = alt[0] == "O";
            const hash = hashCode(alt);

            this.querySelector("form").insertAdjacentHTML("beforeend", `
                <p>
                    <input type="radio" name="radio" id="${hash}" ${isAnswer ? 'data-answer' : ''} />
                    <label for="${hash}">${alt.substring(1)}</label>
                </pre>`);
        }
    }

    constructMultipleChoiceQuizlet() {
        for (let alt of this.getAttribute("alternatives").split(";")) {
            if (alt[0] !== "O" && alt[0] !== "X") {
                throw `${alt} should instead be either O${alt} or X${alt}`;
            }
            const isAnswer = alt[0] == "O";
            const hash = hashCode(alt);

            this.querySelector("form").insertAdjacentHTML("beforeend", `
                <p>
                    <input type="checkbox" id="${hash}" ${isAnswer ? 'data-answer' : ''} />
                    <label for="${hash}">${alt.substring(1)}</label>
                </p>`);
        }
    }
}

export default Quizlet;
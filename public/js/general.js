const header = document.querySelector("header");
const main = document.querySelector("main");

const verifyDiv = document.querySelector("#verify");
const verifyInput = document.querySelector("#verify-input");
const verifyBTN = document.querySelector("#verify-button");

const password = "andblu";

function verifying() {
    const passwordEntered = verifyInput.value;
    if(passwordEntered === password) {
        header.classList.remove("hidden");
        main.classList.remove("hidden");

        verifyDiv.classList.add("hidden");
    };
};

verifyInput.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    if (key === "enter") {
        verifying();
    }
});
verifyBTN.addEventListener("click", verifying);

const btnReset = document.querySelector(".reset");
const btnConvert = document.querySelector(".convert");
const inputText = document.querySelector("#inputText");
const outputText = document.querySelector("#outputText");

const latinToMorse = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
};

function resetInput() {
    inputText.value = "";
    outputText.value = "";
    inputText.focus();
}

function convertLatinToMorse(str, code) {
    const tableauMorse = [];

    str.toUpperCase()
        .trim()
        .replaceAll(" ", "/")
        .split("")
        .map((char) => {
            return char.split(" ").map((lettre) => {
                if (code[lettre]) {
                    return tableauMorse.push(code[lettre]);
                } else {
                    return tableauMorse.push(lettre);
                }
            });
        });

    return tableauMorse.join(" ");
}

function displayResult() {
    outputText.value = convertLatinToMorse(inputText.value, latinToMorse);
    // inputText.value = "";
}

btnReset.addEventListener("click", resetInput);
btnConvert.addEventListener("click", displayResult);

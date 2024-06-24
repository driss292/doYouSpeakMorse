const btnReset = document.querySelector(".reset");
const btnConvert = document.querySelector(".convert");
const inputText = document.querySelector("#inputText");
const outputText = document.querySelector("#outputText");

const dictionnaire = {
    "-": "T",
    "--": "M",
    "---": "O",
    "--.": "G",
    "--.-": "Q",
    "--..": "Z",
    "-.": "N",
    "-.-": "K",
    "-.--": "Y",
    "-.-.": "C",
    "-..": "D",
    "-..-": "X",
    "-...": "B",
    ".": "E",
    ".-": "A",
    ".--": "W",
    ".---": "J",
    ".--.": "P",
    ".-.": "R",
    ".-..": "L",
    "..": "I",
    "..-": "U",
    "..-.": "F",
    "...": "S",
    "...-": "V",
    "....": "H",
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

// const sentence1 = ".... . .-.. .-.. --- / .-- --- .-. .-.. -.. ";
// const sentence2 = "hello world";

function decodeOrEncode(str, code) {
    const tableau = [];

    if (str.includes(".")) {
        // input value === morse code
        str.split(" ").map((char) => {
            return char.split(" ").map((lettre) => {
                if (code[lettre]) {
                    tableau.push(code[lettre]);
                } else {
                    tableau.push(" ");
                }
            });
        });
        return tableau.join("").toLowerCase();
    } else {
        // input value === text
        str.trim()
            .toUpperCase()
            .replaceAll(" ", "/")
            .split("")
            .map((char) => {
                return char.split(" ").map((lettre) => {
                    if (code[lettre]) {
                        tableau.push(code[lettre]);
                    } else {
                        tableau.push(lettre);
                    }
                });
            });
        return tableau.join(" ").toLowerCase();
    }
}

// console.log(decodeOrEncode(sentence1, dictionnaire));
// console.log(decodeOrEncode(sentence2, dictionnaire));

function displayResult() {
    outputText.value = decodeOrEncode(inputText.value, dictionnaire);
    // inputText.value = "";
}

function resetInput() {
    inputText.value = "";
    outputText.value = "";
    inputText.focus();
}

btnReset.addEventListener("click", resetInput);
btnConvert.addEventListener("click", displayResult);

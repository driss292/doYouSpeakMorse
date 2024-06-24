const sentenceToTranslate = ".... . .-.. .-.. --- / .-- --- .-. .-.. -..";
const morseToLatin = {
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
};

//new Map(Object.entries(obj))
const m = new Map(Object.entries(morseToLatin));
console.log("===>", m.get("-"));

function decodeMorse(str, code) {
    const tableauChar = [];

    // console.log(str.replace("/", " "));

    str.split(" ").map((char) => {
        return char.split(" ").map((lettre) => {
            if (code[lettre]) {
                tableauChar.push(code[lettre]);
            } else {
                tableauChar.push(" ");
            }
        });
    });
    return tableauChar.join("").toLowerCase();
}

console.log(decodeMorse(sentenceToTranslate, morseToLatin));
// output: "hello world"

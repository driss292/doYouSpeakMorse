const sentenceToTranslate = "hello world hello ";
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

function encodeMorse(str, code) {
    const tableauMorse = [];

    // console.log(str.split(" "));
    // console.log(str.toUpperCase().replace(" ", "/"));
    console.log(str.trim());

    str.toUpperCase()
        .trim()
        .replaceAll(" ", "/")
        .split("")
        .map((char) => {
            return char.split(" ").map((lettre) => {
                console.log(lettre);

                if (code[lettre]) {
                    return tableauMorse.push(code[lettre]);
                } else {
                    return tableauMorse.push(lettre);
                }
            });
        });

    return tableauMorse.join(" ");
}
console.log(encodeMorse(sentenceToTranslate, latinToMorse));
// output: ".... . .-.. .-.. ---  / .-- --- .-. .-.. -.."

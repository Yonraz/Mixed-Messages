const scaleTones = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
function randomizeNum(array){
    let randNum = Math.floor(Math.random()* array.length);
    return randNum
}
const generateScale = () =>{
    const possibleTonality = ['Major', 'Minor', 'Phrygian', 'Lydian', 'Locrian', 'Mixolydian', 'Dorian'];
    return scaleTones[randomizeNum(scaleTones)] + " " + possibleTonality[randomizeNum(possibleTonality)]
}

const generateChord = () =>{
    const possibleChordType = []
}
console.log(generateScale())
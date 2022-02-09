const scaleTones = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

function randomizeNum(array){
    let randNum = Math.floor(Math.random()* array.length);
    return randNum;
}
const generateScale = () =>{
    const possibleTonality = ['Major', 'Minor', 'Phrygian', 'Lydian', 'Locrian', 'Mixolydian', 'Dorian'];
    return scaleTones[randomizeNum(scaleTones)] + " " + possibleTonality[randomizeNum(possibleTonality)];
}

const generateChord = () =>{
    const possibleChordType = ['', 'maj', 'min', 'dim', 'aug'];
    const possibleTensions = ['7', 'maj7', 'maj9' , 'sus4', 'min9', '#11', 'alt']
    if(possibleChordType[randomizeNum(possibleChordType)] === ''){
    return scaleTones[randomizeNum(scaleTones)] +  possibleTensions[randomizeNum(possibleTensions)]
    }
    return scaleTones[randomizeNum(scaleTones)] +  possibleChordType[randomizeNum(possibleChordType)]
}


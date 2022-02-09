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
    const possibleTensions = ['7', 'maj7', 'maj9' , 'sus4', 'min9', '#11', 'alt7'];
    if(possibleChordType[randomizeNum(possibleChordType)] === ''){
    return scaleTones[randomizeNum(scaleTones)] +  possibleTensions[randomizeNum(possibleTensions)];
    }
    return scaleTones[randomizeNum(scaleTones)] +  possibleChordType[randomizeNum(possibleChordType)];
}

const generateTimeSignature = () =>{
    const signatureArray = ['4/4', '3/4', '5/4', '7/8'];
    return signatureArray[randomizeNum(signatureArray)];
}

let randScale = generateScale();
let randChord = generateChord();
let randTimeSignature = generateTimeSignature();

const generateScaleMessage = (scale) =>{
    const message = [`Your song is in the scale of ${scale}.`, `You better use ${scale} for this one.`, `${scale} is your scale for today.`];
    return message[randomizeNum(message)];
}

const generateChordMessage = (chord) =>{
    const message = [`Play ${chord}.`, `${chord} might be a good choice.`, `Try ${chord}! I swear it sounds good.`];
    return message[randomizeNum(message)];
}

const generateTSMessage = (timeSig) =>{
    const message = [`Your song should be in ${timeSig}... if you can handle it.`, `Maybe try doing it in ${timeSig} time`, `Your chosen time signature is ${timeSig}.`];
    return message[randomizeNum(message)];
}

const getFinalMessage = (scaleFunc, chordFunc, TSFunc) =>{
    const possibleMessageArray = [scaleFunc, chordFunc, TSFunc];
    return possibleMessageArray[randomizeNum(possibleMessageArray)];
}

let scaleMessage = generateScaleMessage(randScale);
let chordMessage = generateChordMessage(randChord);
let timeSigMessage = generateTSMessage(randTimeSignature);


console.log(getFinalMessage(scaleMessage, chordMessage, timeSigMessage))


// const getMessage = (scale, chord, TS) => {
    // const typeOfMessage = [scale, chord, TS];
    // let subject = typeOfMessage[randomizeNum(typeOfMessage)]
    // if (subject === scale) {
        // return 
    // } 
// }
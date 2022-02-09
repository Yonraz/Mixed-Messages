const scaleTones = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const possibleTonality = ['Major', 'Minor', 'Phrygian', 'Lydian', 'Locrian', 'Mixolydian', 'Dorian'];
const possibleChordType = ['', 'maj', 'min', 'dim', 'aug'];
const possibleTensions = ['7', 'maj7', 'maj9' , 'sus4', 'min9', '#11', 'alt7'];
const possibleTimeSignature = ['4/4', '3/4', '5/4', '7/8'];

function getRandomNumber(array){
    let randNum = Math.floor(Math.random()* array.length);
    return randNum;
}

let chosenScale = scaleTones[getRandomNumber(scaleTones)];
let chosenTonality = possibleTonality[getRandomNumber(possibleTonality)];
let chosenChordType = possibleChordType[getRandomNumber(possibleChordType)];
let chosenTension = possibleTensions[getRandomNumber(possibleTensions)];
let chosenTimeSign = possibleTimeSignature[getRandomNumber(possibleTimeSignature)];

function generateScale() {
    return chosenScale + " " + chosenTonality;
}

function generateChord() { 
    if(chosenChordType === ''){
        return chosenScale +  chosenTension;
    }
    return chosenScale +  chosenChordType;
}

function generateTimeSignature() {
    return chosenTimeSign;
}

let randScale = generateScale();
let randChord = generateChord();
let randTimeSignature = generateTimeSignature();

function generateScaleMessage(scale) {
    const message = [`Your song is in the scale of ${scale}.`, `You better use ${scale} for this one.`, `${scale} is your scale for today.`];
    return message[getRandomNumber(message)];
}

function generateChordMessage(chord) {
    const message = [`Play ${chord}.`, `${chord} might be a good choice.`, `Try ${chord}! I swear it sounds good.`];
    return message[getRandomNumber(message)];
}

function generateTSMessage(timeSig) {
    const message = [`Your song should be in ${timeSig}... if you can handle it.`, `Maybe try doing it in ${timeSig} time`, `Your chosen time signature is ${timeSig}.`];
    return message[getRandomNumber(message)];
}

function getFinalMessage(scaleFunc, chordFunc, TSFunc) {
    const possibleMessageArray = [scaleFunc, chordFunc, TSFunc];
    return possibleMessageArray[getRandomNumber(possibleMessageArray)];
}

let scaleMessage = generateScaleMessage(randScale);
let chordMessage = generateChordMessage(randChord);
let timeSigMessage = generateTSMessage(randTimeSignature);


console.log(getFinalMessage(scaleMessage, chordMessage, timeSigMessage))


// const getMessage = (scale, chord, TS) => {
    // const typeOfMessage = [scale, chord, TS];
    // let subject = typeOfMessage[getRandomNumber(typeOfMessage)]
    // if (subject === scale) {
        // return 
    // } 
// }
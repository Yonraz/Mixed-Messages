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

let randScale = generateScale();
let randChord = generateChord();

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

function modulate(randScale){
    const message = [`Now go to the key of ${randScale}`, `Try moving up to ${randScale}`, `Mix it up with ${randScale}`]
    return message[getRandomNumber(message)];
}

function getFinalMessage(scaleFunc, chordFunc, TSFunc) {
    let possibleMessageArray = [scaleFunc, chordFunc, TSFunc];
    let finalMessage = possibleMessageArray[getRandomNumber(possibleMessageArray)];
    return finalMessage;
}

let scaleMessage = generateScaleMessage(randScale);
let chordMessage = generateChordMessage(randChord);
let timeSigMessage = generateTSMessage(chosenTimeSign);

let endResult = getFinalMessage(scaleMessage, chordMessage, timeSigMessage)

console.log(endResult)
const SCALE_TONES = [
  'C',
  'D',
  'E',
  'F',
  'G',
  'A',
  'B'];
const POSSIBLE_TONALITY = [ 
  'Major', 
  'Minor', 
  'Phrygian', 
  'Lydian', 
  'Locrian', 
  'Mixolydian', 
  'Dorian'];
const POSSIBLE_CHORD_TYPE = [ 
  '', 
  'maj', 
  'min', 
  'dim', 
  'aug'];
const POSSIBLE_TENSIONS = [
  '7', 
  'maj7', 
  'maj9' ,
  'sus4', 
  'min9', 
  '#11', 
  'alt7'];
const POSSIBLE_TIME_SIGNATURE = [
  '4/4',
  '3/4',
  '5/4',
  '7/8'];

function getRandomNumber(array){
    let randNum = Math.floor(Math.random()* array.length);
    return randNum;
}

let chosenScale = SCALE_TONES[getRandomNumber(SCALE_TONES)];
let chosenTonality = POSSIBLE_TONALITY[getRandomNumber(POSSIBLE_TONALITY)];
let chosenChordType = POSSIBLE_CHORD_TYPE[getRandomNumber(POSSIBLE_CHORD_TYPE)];
let chosenTension = POSSIBLE_TENSIONS[getRandomNumber(POSSIBLE_TENSIONS)];
let chosenTimeSign = POSSIBLE_TIME_SIGNATURE[getRandomNumber(POSSIBLE_TIME_SIGNATURE)];

function generateScale() {
    return chosenScale + " " + chosenTonality;
}

function generateChord() { 
    if(chosenChordType === '') {
        return chosenScale +  chosenTension;
    }
    return chosenScale +  chosenChordType;
}

let randScale = generateScale();
let randChord = generateChord();

function generateScaleMessage(scale) {
    const message = [ 
        `Your song is in the scale of ${scale}.`,
        `You better use ${scale} for this one.`,
        `${scale} is your scale for today.`];
    return message[getRandomNumber(message)];
}

function generateChordMessage(chord) {
    const message = [
        `Play ${chord}.`,
        `${chord} might be a good choice.`,
        `Try ${chord}! I swear it sounds good.`];
    return message[getRandomNumber(message)];
}

function generateTSMessage(timeSig) {
    const message = [
        `Your song should be in ${timeSig}... if you can handle it.`,
        `Maybe try doing it in ${timeSig} time`,
        `Your chosen time signature is ${timeSig}.`];
    return message[getRandomNumber(message)];
}

function modulate(randScale){
    const message = [
        `Now go to the key of ${randScale}`,
        `Try moving up to ${randScale}`,
        `Mix it up with ${randScale}`]
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
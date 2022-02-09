const scaleTones = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const generateScale = () =>{
    const possibleTonality = ['Major', 'Minor', 'Phrygian', 'Lydian', 'Locrian', 'Mixolydian', 'Dorian'];
    function randomizeNum(){
        let randNum = Math.floor(Math.random()* 7);
        return randNum
    }
    return scaleTones[randomizeNum()] + " " + possibleTonality[randomizeNum()]
}


const generateScale = () =>{
    const possibleScales = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const possibleTonality = ['Major', 'Minor', 'Phrygian', 'Lydian', 'Locrian', 'Mixolydian', 'Dorian'];
    function randomizeNum(){
        let randNum = Math.floor(Math.random()* 7);
        return randNum
    }
    return possibleScales[randomizeNum()] + " " + possibleTonality[randomizeNum()]
}

const referenceNoteFrequency = 440; // A4
const A = Math.pow(2, 1 / 12);

function calcFreq(refFreq, steps) {
  let result = refFreq * Math.pow(A, steps);
  return +result.toFixed(4);
}

const noteNameArray = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
let startNote = 'C#2';
let endNote = 'D6';

function createArrayOfNoteFrequencies(startNote, endNote) {
  let startOctave = parseInt(startNote.slice(-1));
  let endOctave = parseInt(endNote.slice(-1));
// If start octave is greater than end octave get lost of notes
  if(startOctave > endOctave) {
       return; 
    }

    let startNoteName = startNote.slice(0, -1);
    let endNoteName = endNote.slice(0, -1);

  console.log(startOctave, endOctave, startNoteName, endNoteName);
}

createArrayOfNoteFrequencies(startNote, endNote,);
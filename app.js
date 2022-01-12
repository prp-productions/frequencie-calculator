const referenceNoteFrequency = 440; // A4
const referenceNoteName = 'A4';
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
let startNote = "D2";
let endNote = "A6";

function createArrayOfNoteFrequencies(startNote, endNote) {
  let result 
  let noteArray = [];
  let startOctave = parseInt(startNote.slice(-1));
  let endOctave = parseInt(endNote.slice(-1));
  // If start octave is greater than end octave get lost of notes
  if (startOctave > endOctave) {
    return;
  }

  let startNoteName = startNote.slice(0, -1);
  let endNoteName = endNote.slice(0, -1);
  let noteNameArrayStartIndex = noteNameArray.indexOf(startNoteName);
  let noteNameArrayEndIndex = noteNameArray.indexOf(endNoteName);

  for (let octave = startOctave; octave <= endOctave; octave++) {
    // If this is the first octave then we want to start from note index
    if (octave === startOctave) {
      for (let i = noteNameArrayStartIndex; i <= noteNameArray.length; i++) {
        noteArray.push(noteNameArray[i] + octave);
      }
    } //  if end octave add until last note name
    else if (octave === endOctave) {
      for (let i = 0; i <= noteNameArrayEndIndex; i++) {
        noteArray.push(noteNameArray[i] + octave);
      }
    }else{
        // if somewhere in between 
        noteNameArray.forEach((noteName) => {
            noteArray.push(noteName + octave);
    });
  }

  }

  console.log(noteArray);


// find frequencies for every note and array
let referenceNotePosition = noteArray.indexOf(referenceNoteName);
let firstValue = Math.abs(referenceNotePosition);
console.log(referenceNotePosition, noteArray[referenceNotePosition]);
let noteNameIndex =0;

for(let i = firstValue; i < noteArray.length-referenceNotePosition; i++){
  result.push(
    {
      'noteName': noteArray[noteNameIndex],
      'frequency': calcFreq(referenceNoteFrequency, i)
    }
  );
  noteNameIndex++;
}
return result;
}
createArrayOfNoteFrequencies (startNote, endNote);
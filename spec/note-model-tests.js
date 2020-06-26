
function printNoteText() {
  var note = new Note();
  assert.isTrue(note.print() === note.text);
};

function takesTextAsArgument() {
  var note = new Note("text")
  assert.isTrue(note.text === "text")
};

printNoteText();
takesTextAsArgument();

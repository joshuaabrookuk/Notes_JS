function defualtNoteText() {
  var note = new Note();
  assert.isTrue(note.text === "My favourite language is JavaScript");
};


function printNoteText() {
  var note = new Note();
  assert.isTrue(note.print() === note.text);
};

defualtNoteText();
printNoteText();

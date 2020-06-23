function defualtNoteText() {
  var note = new Note();
  assert.isTrue(note.text === "My favourite language is JavaScript");
};


function printNoteText() {
  var note = new Note();
  assert.isTrue(note.print() === note.text);
};


function showAllNotes() {
  var notelist = new NoteList();
  assert.isTrue(notelist.list.lenght === 0)
};


//Fisrt text
defualtNoteText();
//Second test
printNoteText();
//Thirt test
showAllNotes();

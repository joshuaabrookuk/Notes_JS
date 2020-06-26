function showAllNotes() {
    var notelist = new NoteList();
    assert.isTrue(notelist.getList().length == 0)
};

function createsAndStoresNote() {
    var notelist = new NoteList();
    notelist.createNote("test")
    assert.isTrue(notelist.createNote())
};

showAllNotes();
createsAndStoresNote();

function showAllNotes() {
    var notelist = new NoteList();
    assert.isTrue(notelist.getList().length == 0)
};

showAllNotes();

(function (exports) {
  function NoteList() {
    this.list = [];
  };


  NoteList.prototype.getList = function() {
    return this.list;
  };

  NoteList.prototype.createNote = function (string) {
    // var note = new Note(string)
    // this.list.push(note)
  };

  exports.NoteList = NoteList;
})(this);

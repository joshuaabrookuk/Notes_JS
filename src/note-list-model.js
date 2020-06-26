(function (exports) {
  function NoteList() {
    this.list = [];
  };


  NoteList.prototype.getList = function() {
    return this.list;
  };

  exports.NoteList = NoteList;
})(this);

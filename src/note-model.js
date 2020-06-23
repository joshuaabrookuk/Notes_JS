(function(exports) {
  function Note() {
    this.defualext = "Cool";
  };

  Note.prototype.text = "My favourite language is JavaScript";

  Note.prototype.printtext = function(){
    console.log(Note.addtext)
  }

  exports.Note = Note;
})(this);

(function (exports) {
  function List() {
    this.list = [];
  };

  List.prototype.showAll = function () {
    return this.list;
  }

  exports.List = List;

})(this);

// var notelist = new this.noteList();
// console.log(notelist.list.length == 1);


var TaskModel = function () {
  this.model = [];
  this.addTaskEvent = new Event(this);
  this.selectTaskEvent = new Event(this);
  this.unselectTaskEvent = new Event(this);
  this.CompleteTaskEvent = new Event(this);
  this.deleteTasksEvent = new Event(this);

  this.init();
};

TaskView.prototype = {
  init: function () {
    this.createChildren,
        .setupHandlers(),
        .enable();
  },
}

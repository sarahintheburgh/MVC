var TaskModel = function () {
  this.tasks = [];
  this.selectedTasks = [];
  this.addTaskEvent = new Event(this);
  this.removeTaskEvent = new Event(this);
  this.setTasksAsCompletedEvent = new Event(this);
  this.deleteTaskEvent = new Event(this);
};

TaskModel.prototype = {
  addTask: function (task){
    this.tasks.push({
      taskName: task,
      taskStatus: 'uncompleted'
    });
    this.addTaskEvent.notify();
  },
  getTasks: function() {
    return this.tasks;
  },

  setSelectedTask: function (taskIndex) {
    this.selectedTasks.push(taskIndex);
  },
}

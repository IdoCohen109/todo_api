const Task = require("./TaskClass");

const _tasks = [{
        title: "wash dishes",
        isComplete: false,
        dueTo: "today"
    },
    {
        title: "cook lunch",
        isComplete: true,
        dueTo: "May 20, 2020"
    },
    {
        title: "2+1 solution",
        isComplete: false,
        dueTo: "May 25, 2020"
    },
    {
        title: "ramp up new guy",
        isComplete: true,
        dueTo: "June 1, 2020"
    },
]


function addTask(task) {
    if (task instanceof Task) {
        _tasks.push(task);
        return true;
    }
    return false;
}

function complete(title) {
    _tasks.find(val => val.title == task).complete();
}

function getDone() {
    return _tasks.filter(val => val.isComplete);
}

function todoTasks() {
    return _tasks.filter(val => val.isComplete === false);
}

module.exports = {
    _tasks,
    addTask,
    getDone,
    todoTasks,
    complete
}
const http = require('http');

const task = require('./modules/TaskClass');
const task_manager = require('./modules/taskManager');

const url = require('url');

const PORT = 3002;
const server = http.createServer((req, res) => {
    const urlParsed = url.parse(req.url, true);
    console.log(urlParsed);
    req.url = urlParsed.pathname;
    req.query = urlParsed.query;
    console.log(req.query);
    if (req.url === "/" && req.method === "GET") {
        return res.end("Welcome to Todo App API");
    };

    if (req.url === "/tasks" && req.method === "GET") {
        return res.end(JSON.stringify(task_manager._tasks));
    };

    if (req.url === "/tasks/complete" && req.method === "GET") {
        return res.end(JSON.stringify(task_manager.getDone()));
    };

    if (req.url === "/tasks/todo" && req.method === "GET") {
        return res.end(JSON.stringify(task_manager.todoTasks()));
    };

    if (req.url === "/tasks/new" && req.method === "GET") {
        if (req.query.title) {
            const newTask = new Task(req.query.title);
            task_manager.addTask(newTask);
            return res.end(JSON.stringify(newTask));
        }
        res.end("Add Task Failed");
    };

    return res.end("404");
});


server.listen(PORT, console.log(`server started on PORT: ${PORT}`))
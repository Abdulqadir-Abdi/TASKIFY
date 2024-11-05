const { getTasks, createTask, updateTask } = require("../controllers/taskControllers");

const taskRoutes = (req, res) => {
    if (req.method === 'GET') {
        getTasks(req, res);
    } else if (req.method === 'POST') {
        createTaskeTask(req, res);
    } else if (req.method === 'PATCH') {
        updateTaskdateTask(req, res);
    } else if (req.method === 'DELETE') {
        deleteTaskeTask(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'PAGE not found'
        }));
    }
};

module.exports = taskRoutes;
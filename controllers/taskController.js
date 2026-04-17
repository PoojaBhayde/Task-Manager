const db2 = require("../config/db");

exports.createTask = (req, res) => {
  const { title, description, due_date } = req.body;
  const userId = req.userId;

  db2.query(
    "INSERT INTO tasks (title, description, due_date, user_id) VALUES (?, ?, ?, ?)",
    [title, description, due_date, userId],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Task created");
    }
  );
};

exports.getTasks = (req, res) => {
  const userId = req.userId;

  db2.query(
    "SELECT * FROM tasks WHERE user_id = ?",
    [userId],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    }
  );
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  db2.query(
    "UPDATE tasks SET title=?, description=?, status=? WHERE id=?",
    [title, description, status, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Task updated");
    }
  );
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;

  db2.query("DELETE FROM tasks WHERE id=?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Task deleted");
  });
};

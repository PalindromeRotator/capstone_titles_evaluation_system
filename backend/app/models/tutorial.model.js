const sql = require("./db.js");

// constructor
const User = function (user) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.user = user.user;
    this.fullname = user.fullname
};
User.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created User: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

User.findById = (data, result) => {
    sql.query(`SELECT * FROM users WHERE username = 'admin' AND password = 'admin`,
        [data.username, data.password],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found User: ", res[0]);
                result(null, res[0]);
                return;
            }

            // not found User with the id
            result({ kind: "not_found" }, null);
        });
};

User.getAll = (title, result) => {
    let query = "SELECT * FROM users";

    if (title) {
        query += ` WHERE title LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("users: ", res);
        result(null, res);
    });
};

User.getAllPublished = result => {
    sql.query("SELECT * FROM users WHERE published=true", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("users: ", res);
        result(null, res);
    });
};

User.update = (id, User, result) => {
    sql.query(
        "UPDATE users SET username = ?, email = ?, fullname = ? WHERE id = ?",
        [User.username, User.email, User.fullname, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found User with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated User: ", { id: id, ...User });
            result(null, { id: id, ...User });
        }
    );
};

User.remove = (id, result) => {
    sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found User with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted User with id: ", id);
        result(null, res);
    });
};

User.removeAll = result => {
    sql.query("DELETE FROM users", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} users`);
        result(null, res);
    });
};

module.exports = User;
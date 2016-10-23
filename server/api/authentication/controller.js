import {User} from '../users/model';

export function login(req, res) {
    User.findOne({
        login: req.body.login
    }).exec(function(err, user) {
        if (err) {
            res.json("error");
        } else if (user) {
            if (user.password === req.body.password) {
                res.json("success");
            } else {
                res.json("incorrect password");
            }
        } else {
            res.json("no such a user");
        }
    });
}
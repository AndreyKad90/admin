import {User} from './model';

export function create(req, res) {
    if (!req.body.login || !req.body.password) {
        res.json("bad request");
    } else {
        User.create({
            login: req.body.login,
            password: req.body.password
        }, function (err, user) {
            if (!err) {
                res.json(user);
            }
        });
    }
}
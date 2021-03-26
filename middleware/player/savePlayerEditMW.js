/**
 * Using POST params update or save a player to the database
 * If res.locals.player is there, it's an update otherwise
 * this middleware creates an entity
 * Redirects to /players after success
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        res.locals.player.name = req.body.name;
        res.locals.player.position = req.body.position;
        res.locals.player.point = req.body.point;
        res.locals.player.assist = req.body.assist;
        res.locals.player.rebound = req.body.rebound;
        res.locals.player.age = req.body.age;
        var teamId = "";
        for (team of res.locals.teams) {
            if (team.abbreviation == req.body._team) {
                teamId = team._id;
            }
        }
        res.locals.player._team = teamId;


        res.locals.player.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/players');
        });
    };
};

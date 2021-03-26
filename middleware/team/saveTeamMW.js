/**
 * Using POST params update or save a player to the database
 * If res.locals.player is there, it's an update otherwise
 * this middleware creates an entity
 * Redirects to /players after success
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const TeamModel = requireOption(objectrepository, 'TeamModel');

    return function(req, res, next) {
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.abbreviation === 'undefined' ||
            typeof req.body.founded === 'undefined' ||
            typeof req.body.champ === 'undefined'
        ) {
            return next();
        }
        if (typeof res.locals.team === 'undefined') {
            res.locals.team = new TeamModel();
        }

        res.locals.team.name = req.body.name;
        res.locals.team.abbreviation = req.body.abbreviation;
        res.locals.team.founded = req.body.founded;
        res.locals.team.champ = req.body.champ;

        res.locals.team.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/teams');
        });
    };
};

/**
 * Load all teams from the database
 * The result is saved to res.locals.teams
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const TeamModel = requireOption(objectrepository, 'TeamModel');

    return function(req, res, next) {
        TeamModel.find({}, (err, teams) => {
            if (err) {
                return next(err);
            }
            res.locals.teams = teams;
            return next();
        });
    };
};

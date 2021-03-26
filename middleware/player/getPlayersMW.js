/**
 * Load all players from the database
 * The result is saved to res.locals.players
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const PlayerModel = requireOption(objectrepository, 'PlayerModel');

    return function(req, res, next) {
        PlayerModel.find({}, (err, players) => {
            if (err) {
                return next(err);
            }

            res.locals.players = players;
            return next();
        });
    };
};
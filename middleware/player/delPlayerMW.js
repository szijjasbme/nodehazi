/**
 * Removes a player from the database, the entity used here is: res.locals.player
 * Redirects to /players after delete
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.player === 'undefined') {
            return next();
        }

        res.locals.player.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/players');
        });
    };
};
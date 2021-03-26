var expect = require('chai').expect;
var getPlayersMW = require('../../../middleware/player/getPlayersMW.js');

describe('getPlayers middleware ', function () {

    it('should return players', function (done) {
        var req = {};
        var res = {
            locals: {}
        };
        var fakePlayerModel = {
            find: function (some, cb) {
                cb(undefined, ['player1', 'player2'])
            }
        };

        getPlayersMW({
            PlayerModel: fakePlayerModel
        })(req, res, function (err) {
            expect(res.locals.players).to.eql(['player1', 'player2']);
            expect(err).to.eql(undefined);
            done();
        });
    });

    it('should return error when db returns error', function (done) {
        var fakePlayerModel = {
            find: function (some, cb) {
                cb('Kobe', undefined)
            }
        };

        getPlayersMW({
            PlayerModel: fakePlayerModel
        })({}, {}, function (err) {
            expect(err).to.eql('Kobe');
            done();
        });
    });
});

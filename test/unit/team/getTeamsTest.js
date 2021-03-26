var expect = require('chai').expect;
var getTeamsMW = require('../../../middleware/team/getTeamsMW');

describe('getTeams middleware ', function () {

    it('should return teams', function (done) {
        var req = {};
        var res = {
            locals: {}
        };
        var fakeTeamModel = {
            find: function (some, cb) {
                cb(undefined, ['team1', 'team2'])
            }
        };

        getTeamsMW({
            TeamModel: fakeTeamModel
        })(req, res, function (err) {
            expect(res.locals.teams).to.eql(['team1', 'team2']);
            expect(err).to.eql(undefined);
            done();
        });
    });

    it('should return error when db returns error', function (done) {
        var fakeTeamModel = {
            find: function (some, cb) {
                cb('Kobe', undefined)
            }
        };

        getTeamsMW({
            TeamModel: fakeTeamModel
        })({}, {}, function (err) {
            expect(err).to.eql('Kobe');
            done();
        });
    });
});

const flow = require('./flow');
const chai = require('chai');
const expect = chai.expect;

const firstObj = {id: 1, name: 'First'};
const secondObj = {id: 2, name: 'Second'};
const rules = [firstObj, secondObj];


describe('Flow engine', function() {
  describe('#getRuleById()', function() {
    it('returns an object', function() {
      expect(flow.getRuleById(1,rules)).to.be.an('object');
    });

    it('returns the right object', function() {
      expect(flow.getRuleById(1,rules)).to.deep.equal(firstObj);
      expect(flow.getRuleById(2,rules)).to.deep.equal(secondObj);
    });
  });
});

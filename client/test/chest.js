var requirejs = require('requirejs');
var should = require('should');
var globals;

requirejs.config({nodeRequire: require, baseUrl: 'js/'});

requirejs(['lib/class', '../../shared/js/gametypes'], function(_Class, _Types, _Chest) {
  globals.Class = _Class;
  globals.Types = _Types;
  global.window = globals
});

describe('Chest', function() {
  var Chest;
  var self = this;

  before(function(done) {

    requirejs(['chest'], function(_Module) {
      Chest = _Module;
      self.chest = new Chest(1);
      done();
    });
  });


  describe('#getSpriteName', function() {
    it('should return "chest"', function() {
      self.chest.getSpriteName().should.equal("chest");
    });
  });
});


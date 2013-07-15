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
  beforeEach(function(done) {

    requirejs(['chest'], function(_Module) {
      Chest = _Module;
      this.chest = new Chest(1);
      done();
    });
  });


  describe('#getSpriteName', function() {
    it('should return "chest"', function() {
      this.chest = new Chest(5);
      this.chest.getSpriteName().should.equal("chest");
    });
  });
});


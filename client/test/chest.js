var requirejs = require('requirejs');
var should = require('should');
var globals = new Object();

requirejs.config({nodeRequire: require, baseUrl: 'js/'});

requirejs(['lib/class', '../../shared/js/gametypes'], function(_Class, _Types) {
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

  describe('#isMoving', function() {
    it('should return false', function() {
      self.chest.isMoving().should.be.false
    });
  });

  describe('#onOpen', function() {
    it('sets open_callback to the passed function', function() {
      var func = function() {};
      self.chest.onOpen(func);
      self.chest.open_callback.toString().should.equal(func.toString());
    });
  });
});


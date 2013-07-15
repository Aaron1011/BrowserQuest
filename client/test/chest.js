var requirejs = require('requirejs');
var should = require('should');
var globals;

//var Chest = require('../js/chest.js');


requirejs.config({nodeRequire: require, baseUrl: 'js/'});
//requirejs.config({baseUrl: 'js/'});

requirejs(['lib/class', '../../shared/js/gametypes', 'chest'], function(_Class, _Types, _Chest) {
  globals.Class = _Class;
  globals.Types = _Types;
  globals.Chest = _Chest;
  global.window = globals
});

//requirejs(['client/js/chest'], function(chest) {
//



describe('Chest', function() {
  var Chest;
  beforeEach(function(done) {

    this.chest = 1;
    requirejs(['chest'], function(_Module) {
      Chest = _Module;
      this.chest = new Chest(1);
      done();
    });
    //this.chest = new Chest(1);
  });


  describe('#getSpriteName', function() {
    it('should return "chest"', function() {
      //(2).should.equal(Chest)
      this.chest = new Chest(5);
      this.chest.getSpriteName().should.equal("chest");
    });
  });
});


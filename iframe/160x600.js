(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/blitz.png", id:"blitz"},
		{src:"images/cam.png", id:"cam"},
		{src:"images/ctapngcopy.png", id:"ctapngcopy"},
		{src:"images/hp1.png", id:"hp1"},
		{src:"images/hp2.png", id:"hp2"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/logo_1.png", id:"logo_1"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.blitz = function() {
	this.initialize(img.blitz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,126);


(lib.cam = function() {
	this.initialize(img.cam);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,70);


(lib.ctapngcopy = function() {
	this.initialize(img.ctapngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,52);


(lib.hp1 = function() {
	this.initialize(img.hp1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,501,504);


(lib.hp2 = function() {
	this.initialize(img.hp2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,501,504);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,146);


(lib.logo_1 = function() {
	this.initialize(img.logo_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cam();
	this.instance.setTransform(-16.6,-15.5,0.445,0.445);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.6,-15.5,33.3,31.1);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cam();
	this.instance.setTransform(-16.6,-15.5,0.445,0.445);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.6,-15.5,33.3,31.1);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ctapngcopy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,52);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hp1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,501,504);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hp2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,501,504);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.68,0.68);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,204.1,99.4);


(lib.Symbol1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.blitz();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,165,126);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(80,307.5,1,1.025,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(239).to({scaleY:1,y:300},0).wait(1));

	// Layer 7
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(80,359.5,0.686,0.686,0,0,0,80,26.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({y:389.2,alpha:0.898},5).to({y:392.5,alpha:1},5).wait(40).to({regY:26.2,scaleX:0.75,scaleY:0.75},6).to({scaleX:0.59,scaleY:0.59},2).to({regY:26.1,scaleX:0.69,scaleY:0.69},2).to({scaleX:0.62,scaleY:0.62},2).to({regY:26,scaleX:0.64,scaleY:0.64,y:392.4},7).wait(32).to({regY:26.1,scaleX:0.69,scaleY:0.69,y:392.5},0).to({regY:26.2,scaleX:0.75,scaleY:0.75},6).to({scaleX:0.59,scaleY:0.59},2).to({regY:26.1,scaleX:0.69,scaleY:0.69},2).to({scaleX:0.62,scaleY:0.62},2).to({regY:26,scaleX:0.64,scaleY:0.64,y:392.4},7).wait(30).to({regY:26.1,scaleX:0.69,scaleY:0.69,y:392.5},0).to({regY:26.2,scaleX:0.75,scaleY:0.75},6).to({scaleX:0.59,scaleY:0.59},2).to({regY:26.1,scaleX:0.69,scaleY:0.69},2).to({scaleX:0.62,scaleY:0.62},2).to({regY:26,scaleX:0.64,scaleY:0.64,y:392.4},7).wait(41).to({scaleX:0.53,scaleY:0.53,alpha:0.102},5).to({regY:26.1,scaleX:0.51,scaleY:0.51,y:392.5,alpha:0},5).wait(1));

	// Layer 6
	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(80,343.8,0.519,0.519,0,0,0,102,49.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:0.7,scaleY:0.7,alpha:0.898},5).to({scaleX:0.72,scaleY:0.72,alpha:1},5).wait(210).to({scaleX:0.6,scaleY:0.6,x:80.1,alpha:0.102},5).to({scaleX:0.59,scaleY:0.59,x:80,alpha:0},5).wait(1));

	// Layer 9
	this.instance_3 = new lib.Symbol1_1();
	this.instance_3.setTransform(60,476.8,1.087,1.087,0,0,0,82.5,62.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.BlurFilter(34, 34, 1)];
	this.instance_3.cache(-2,-2,169,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({alpha:1},4).to({alpha:0},4).wait(203));

	// Layer 4
	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(-51.7,88,0.511,0.511,0,0,0,250.5,252);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:26.2,y:164.4,alpha:0.891},4).to({x:36,y:173.9,alpha:1},5).to({x:46.6,y:183.4},220).to({x:247.2,y:374.1,alpha:0.102},5).to({x:269.5,y:395.3,alpha:0},5).wait(1));

	// Layer 3
	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(228.8,646.6,0.511,0.511,0,0,0,250.6,252);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:139.3,y:557,alpha:0.891},4).to({x:128.1,y:545.8,alpha:1},5).to({x:115.6,y:533.3},220).to({x:-76.1,y:340.7,alpha:0.102},5).to({x:-97.4,y:319.3,alpha:0},5).wait(1));

	// Layer 8
	this.instance_6 = new lib.Tween1("synched",0);
	this.instance_6.setTransform(114.1,248.2);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween2("synched",0);
	this.instance_7.setTransform(122.8,255.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true,x:122.8,y:255.9},10).wait(211));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},10).to({x:132.1,y:265.1},200).to({x:336.7,y:453.9,alpha:0.102},5).to({x:359.4,y:474.9,alpha:0},5).wait(1));

	// Layer 2
	this.instance_8 = new lib.bg();
	this.instance_8.setTransform(0,109.5,0.533,0.818);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.8,259.1,536.7,816.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
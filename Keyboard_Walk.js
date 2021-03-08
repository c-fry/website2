(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Keyboard_Walk_atlas_1", frames: [[0,402,1100,400],[0,804,1400,278],[0,0,1354,400],[1102,402,155,255],[1259,402,155,255],[1356,0,155,255],[1513,0,155,255],[1670,0,155,255],[1827,0,155,255],[1416,257,155,255],[1573,257,155,255],[1730,257,155,255],[1887,257,155,255],[1416,514,155,255],[1573,514,155,255],[1730,514,155,255],[1887,514,155,255],[1402,771,155,255]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.background = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.middleground = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.trees = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.walkcycle_walk1 = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.walkcycle_walk10 = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.walkcycle_walk11 = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.walkcycle_walk12 = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.walkcycle_walk13 = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.walkcycle_walk14 = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.walkcycle_walk15 = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.walkcycle_walk2 = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.walkcycle_walk3 = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.walkcycle_walk4 = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.walkcycle_walk5 = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.walkcycle_walk6 = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.walkcycle_walk7 = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.walkcycle_walk8 = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.walkcycle_walk9 = function() {
	this.initialize(ss["Keyboard_Walk_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.MC_walkCycle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.walkcycle_walk1();
	this.instance.setTransform(-79,-127.5);

	this.instance_1 = new lib.walkcycle_walk2();
	this.instance_1.setTransform(-79,-127.5);

	this.instance_2 = new lib.walkcycle_walk3();
	this.instance_2.setTransform(-79,-127.5);

	this.instance_3 = new lib.walkcycle_walk4();
	this.instance_3.setTransform(-79,-127.5);

	this.instance_4 = new lib.walkcycle_walk5();
	this.instance_4.setTransform(-79,-127.5);

	this.instance_5 = new lib.walkcycle_walk6();
	this.instance_5.setTransform(-79,-127.5);

	this.instance_6 = new lib.walkcycle_walk7();
	this.instance_6.setTransform(-79,-127.5);

	this.instance_7 = new lib.walkcycle_walk8();
	this.instance_7.setTransform(-79,-127.5);

	this.instance_8 = new lib.walkcycle_walk9();
	this.instance_8.setTransform(-79,-127.5);

	this.instance_9 = new lib.walkcycle_walk10();
	this.instance_9.setTransform(-79,-127.5);

	this.instance_10 = new lib.walkcycle_walk11();
	this.instance_10.setTransform(-79,-127.5);

	this.instance_11 = new lib.walkcycle_walk12();
	this.instance_11.setTransform(-79,-127.5);

	this.instance_12 = new lib.walkcycle_walk13();
	this.instance_12.setTransform(-79,-127.5);

	this.instance_13 = new lib.walkcycle_walk14();
	this.instance_13.setTransform(-79,-127.5);

	this.instance_14 = new lib.walkcycle_walk15();
	this.instance_14.setTransform(-79,-127.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-127.5,155,255);


(lib.MC_middleground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.middleground();
	this.instance.setTransform(-700,-127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MC_middleground, new cjs.Rectangle(-700,-127.5,1400,278), null);


(lib.MC_foreground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.trees();
	this.instance.setTransform(-677,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MC_foreground, new cjs.Rectangle(-677,-200,1354,400), null);


(lib.MC_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.background();
	this.instance.setTransform(-550,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MC_background, new cjs.Rectangle(-550,-200,1100,400), null);


// stage content:
(lib.Keyboard_Walk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.boy_mc.stop();
		this.boy_mc.x += 100;
		
		
		
		document.onkeydown = f.bind(this);
		
		function f(e) {
			//alert(e.keyCode);
		
			if (e.keyCode == 87) {
				this.boy_mc.scaleX= 1;
				this.boy_mc.play();
				this.boy_mc.x += 5;
				this.trees_mc.x -= 2;
				this.houses_mc.x -= 1;
			}
		
			if (e.keyCode == 83) {
				this.boy_mc.scaleX= -1;
				this.boy_mc.play();
				this.boy_mc.x -= 5;
				this.trees_mc.x += 2;
				this.houses_mc.x += 1;
				
			}
		
		}
		
		document.onkeyup = u.bind(this);
		
		function u(e) {
			this.boy_mc.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// foreground
	this.trees_mc = new lib.MC_foreground();
	this.trees_mc.name = "trees_mc";
	this.trees_mc.setTransform(373,232,1,1.21);

	this.timeline.addTween(cjs.Tween.get(this.trees_mc).wait(1));

	// figure
	this.boy_mc = new lib.MC_walkCycle();
	this.boy_mc.name = "boy_mc";
	this.boy_mc.setTransform(415,318.05,1,1,0,0,0,-1.5,0);

	this.timeline.addTween(cjs.Tween.get(this.boy_mc).wait(1));

	// midground
	this.houses_mc = new lib.MC_middleground();
	this.houses_mc.name = "houses_mc";
	this.houses_mc.setTransform(364,320.05,1,1,0,0,0,0,11.5);

	this.timeline.addTween(cjs.Tween.get(this.houses_mc).wait(1));

	// background
	this.instance = new lib.MC_background();
	this.instance.setTransform(340,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(64,215,1000,259);
// library properties:
lib.properties = {
	id: 'DF8C3A444781449C838F81529CFD623D',
	width: 800,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Keyboard_Walk_atlas_1.png?1615199397013", id:"Keyboard_Walk_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DF8C3A444781449C838F81529CFD623D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
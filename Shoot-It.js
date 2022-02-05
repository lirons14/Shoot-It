(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Shoot_It_atlas_1", frames: [[0,0,1859,1357]]},
		{name:"Shoot_It_atlas_2", frames: [[0,0,725,1023],[0,1439,1882,300],[0,1025,1682,412],[727,0,625,893]]},
		{name:"Shoot_It_atlas_3", frames: [[543,718,520,632],[1436,0,538,757],[1065,759,431,751],[0,718,541,659],[0,0,716,716],[718,0,716,716],[1498,759,356,899]]},
		{name:"Shoot_It_atlas_4", frames: [[358,0,454,556],[1205,1773,165,183],[1219,889,362,309],[814,0,806,251],[1013,1450,257,168],[1272,1439,257,168],[717,1775,257,168],[1880,0,135,308],[1754,827,135,308],[1875,310,135,308],[856,1502,73,249],[1372,1773,73,249],[1447,1773,73,249],[358,1116,429,429],[803,889,414,320],[358,1547,256,237],[1622,0,256,237],[1013,1211,256,237],[1271,1200,256,237],[0,901,356,898],[0,0,356,899],[616,1547,238,226],[1891,620,56,710],[1949,620,56,710],[1531,1200,56,710],[1589,1169,56,710],[1647,1169,56,710],[1705,1169,56,710],[1763,1137,56,710],[1821,1137,56,710],[1879,1332,56,710],[1937,1332,56,710],[0,1801,715,245],[1704,239,169,278],[1693,571,169,254],[1583,889,169,278],[358,558,443,556],[789,1211,222,289],[814,253,443,316],[1272,1609,227,162],[803,571,443,316],[1589,1881,227,162],[1259,253,443,316],[976,1620,227,162],[1248,571,443,316],[976,1784,227,162]]},
		{name:"Shoot_It_atlas_5", frames: [[144,0,83,154],[144,156,83,154],[144,312,83,154],[75,0,67,241],[75,243,67,241],[229,0,73,170],[229,172,73,115],[0,0,73,249],[0,251,73,249],[144,468,32,32]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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



(lib.CachedBmp_164 = function() {
	this.initialize(ss["Shoot_It_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_163 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_162 = function() {
	this.initialize(ss["Shoot_It_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_161 = function() {
	this.initialize(ss["Shoot_It_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_160 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_159 = function() {
	this.initialize(ss["Shoot_It_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_158 = function() {
	this.initialize(img.CachedBmp_158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2560,1443);


(lib.CachedBmp_157 = function() {
	this.initialize(img.CachedBmp_157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2560,1441);


(lib.CachedBmp_156 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_155 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_154 = function() {
	this.initialize(ss["Shoot_It_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_153 = function() {
	this.initialize(ss["Shoot_It_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_142 = function() {
	this.initialize(ss["Shoot_It_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_140 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_139 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_138 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_137 = function() {
	this.initialize(img.CachedBmp_137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2560,1052);


(lib.CachedBmp_136 = function() {
	this.initialize(ss["Shoot_It_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_135 = function() {
	this.initialize(img.CachedBmp_135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2564,1440);


(lib.CachedBmp_134 = function() {
	this.initialize(ss["Shoot_It_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_133 = function() {
	this.initialize(ss["Shoot_It_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_132 = function() {
	this.initialize(ss["Shoot_It_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_131 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_130 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_129 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_128 = function() {
	this.initialize(ss["Shoot_It_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_127 = function() {
	this.initialize(ss["Shoot_It_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_126 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_125 = function() {
	this.initialize(ss["Shoot_It_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_124 = function() {
	this.initialize(ss["Shoot_It_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_123 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_122 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_121 = function() {
	this.initialize(ss["Shoot_It_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_120 = function() {
	this.initialize(ss["Shoot_It_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_119 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_118 = function() {
	this.initialize(ss["Shoot_It_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_117 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_116 = function() {
	this.initialize(ss["Shoot_It_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_115 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_114 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_113 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_112 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_111 = function() {
	this.initialize(ss["Shoot_It_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(ss["Shoot_It_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_109 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_167 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_166 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_165 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_96 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_92 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["Shoot_It_atlas_4"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.ComboBox = function() {
	this.initialize(ss["Shoot_It_atlas_5"]);
	this.gotoAndStop(9);
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


(lib.X_incorrect = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_119();
	this.instance.setTransform(-107.2,-107.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_118();
	this.instance_1.setTransform(-179,-179,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.X_incorrect, new cjs.Rectangle(-179,-179,358,358), null);


(lib.water_glass = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_160();
	this.instance.setTransform(-42.85,-47,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.water_glass, new cjs.Rectangle(-42.8,-47,82.5,91.5), null);


(lib.wanted = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_159();
	this.instance.setTransform(-58.5,-81.15,0.1594,0.1594);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wanted, new cjs.Rectangle(-58.5,-81.1,115.6,163.1), null);


(lib.V_correct = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_117();
	this.instance.setTransform(-103.6,-79.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_116();
	this.instance_1.setTransform(-179,-179,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.V_correct, new cjs.Rectangle(-179,-179,358,358), null);


(lib.Swinging_sign = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.CachedBmp_142();
	this.instance.setTransform(-110.95,-96.95,0.1193,0.1193);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.9,-96.9,221.7,161.9);


(lib.sun_change = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF7A").s().p("AqzK0QkekegBmWQABmVEekeQEfkeGUAAQGVAAEfEeQEfEeAAGVQAAGWkfEeQkfEemVAAQmUAAkfkeg");
	this.shape.setTransform(244.95,110.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFD64").s().p("AqzK0QkfkfAAmVQAAmUEfkfQEfkfGUAAQGVAAEfEfQEeEfAAGUQAAGVkeEfQkfEemVAAQmUAAkfkeg");
	this.shape_1.setTransform(38.9,65.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF32").s().p("AqzK0QkfkfAAmVQAAmUEfkfQEekfGVAAQGVAAEfEfQEfEfAAGUQAAGVkfEfQkfEemVAAQmVAAkekeg");
	this.shape_2.setTransform(-194,26.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE434").s().p("AqzK0QkekeAAmWQAAmVEekeQEekeGVAAQGWAAEeEeQEeEeAAGVQAAGWkeEeQkeEemWAAQmVAAkekeg");
	this.shape_3.setTransform(-419.75,24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD02A").s().p("AqzK0QkfkfAAmVQAAmUEfkfQEekfGVAAQGWAAEeEfQEfEfAAGUQAAGVkfEfQkeEemWABQmVgBkekeg");
	this.shape_4.setTransform(-645.35,34.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBB21").s().p("AqzK0QkekfAAmVQAAmUEekfQEekeGVgBQGWABEeEeQEeEfAAGUQAAGVkeEfQkeEfmWAAQmVAAkekfg");
	this.shape_5.setTransform(-873.45,53.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFAC1F").s().p("AqzK0QkfkfAAmVQAAmUEfkfQEekfGVAAQGVAAEfEfQEfEfAAGUQAAGVkfEfQkfEemVAAQmVAAkekeg");
	this.shape_6.setTransform(-1086.8,124.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9717").s().p("AqzK0QkekfAAmVQAAmUEekfQEekeGVAAQGWAAEeEeQEeEfAAGUQAAGVkeEfQkeEemWAAQmVAAkekeg");
	this.shape_7.setTransform(-1283.05,240.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF8617").s().p("AqzK0QkfkfAAmVQAAmVEfkeQEekfGVAAQGVAAEfEfQEfEegBGVQABGVkfEfQkfEfmVAAQmVAAkekfg");
	this.shape_8.setTransform(-1432.65,399.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6F0B").s().p("AqzK0QkekegBmWQAAmVEfkeQEfkeGUAAQGWAAEeEeQEfEeAAGVQAAGWkfEeQkeEemWAAQmUAAkfkeg");
	this.shape_9.setTransform(-1489,527.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9,p:{x:-1489,y:527.05}}]},1).to({state:[{t:this.shape_9,p:{x:-1589.9,y:622.15}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1687.7,-73.5,2030.5,793.5);


(lib.star_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCE00").s().p("AoIFjIuxo+IRIiSIEAw1IHcPmIRPhaIshL6IGqP9IvNoPItGLRg");
	this.shape.setTransform(146.625,144.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star_4, new cjs.Rectangle(0,0,293.3,288.6), null);


(lib.star_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2FF00").s().p("AoIFjIuxo+IRIiSIEAw1IHcPmIRPhaIshL6IGqP9IvNoPItGLRg");
	this.shape.setTransform(146.625,144.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star_3, new cjs.Rectangle(0,0,293.3,288.6), null);


(lib.star_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AoIFjIuxo+IRIiSIEAw1IHcPmIRPhaIshL6IGqP9IvNoPItGLRg");
	this.shape.setTransform(146.625,144.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star_2, new cjs.Rectangle(0,0,293.3,288.6), null);


(lib.star_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB74B").s().p("ArHWJIC/wNIuxo+IRIiSIEAw0IHcPmIRPhaIshL5IGqP9IvNoOIsLKdg");
	this.shape.setTransform(146.625,141.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star_1, new cjs.Rectangle(0,0,293.3,283.5), null);


(lib.sky_change = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#71E3F9").s().p("Ehj/ApRIAAyAIAAgKIAAgKIAAjwIAAgKIAAkEIAAgKIAAl8IAAgKIAAhMIAAj0IAAgKIAAgrIAAkLIAAr3IAAhSIAAgyIAA57IAAgKIb+AAIb+AAIb+AAIb9AAIb+AAIEvAAIAAAKIXPAAIb+AAIEOAAIAACjIAAXYIAAAyIAAKtIAACnIAAEAIAABIIAAAKMAAAAlFg");
	this.shape.setTransform(640,264.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#74F7E0").s().p("Ehj/ApkIAAymIAAgKIAAgKIAAjwIAAgKIAAkEIAAgKIAAl8IAAgKIAAhLIAAj1IAAgKIAAgrIAAkKIAAr4IAAp5IAAyFIAAgKIb+AAIb+AAIb+AAIb9AAIb+AAIEvAAIAAAKIXPAAIb+AAIEOAAIAACjIAAPiIAAH2IAACDIAAJcIAACmIAAEAIAABJIAAAKMAAAAlqg");
	this.shape_1.setTransform(640,266.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#74F7B9").s().p("Ehj/AqWIAA0KIAAgKIAAgKIAAjwIAAgKIAAkFIAAgJIAAl8IAAgKIAAhMIAAj1IAAgJIAAgrIAAkLIAAr4IAAn7IAA0DIAAgKIb+AAIb+AAIb+AAIb9AAIb+AAIEvAAIAAAKIXPAAIb+AAIEOAAIAACjIAARgIAAF4IAACDIAAJcIAACnIAAEAIAABIIAAAKMAAAAnPg");
	this.shape_2.setTransform(640,271.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#74F78C").s().p("Ehj/Ap3IAAzgIAAjwIAAjOIAAhAIAAgKIAAl8IAAgKIAAhLIAAj1IAAgKIAAgrIAAkKIAAr4IAAiDIAA57IAAgKIb+AAIb+AAIb+AAIb9AAIb+AAIEvAAIAAAKIXPAAIb+AAIEOAAIAACjIAAXYIAAAZIAALGIAACmIAAEAIAABJIAAAKMAAAAmQg");
	this.shape_3.setTransform(640,267.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C1F774").s().p("Ehj/AprIAAy0IAAgKIAAgKIAAjwIAAgKIAAkEIAAgKIAAl8IAAgKIAAhLIAAj1IAAgKIAAgqIAAkLIAAr4IAAoVIAAzpIAAgKIb+AAIb+AAIb+AAIb9AAIb+AAIEvAAIAAAKIXPAAIb+AAIEOAAIAACjIAARGIAAGSIAACDIAAJcIAACmIAAEBIAABIIAAAKMAAAAl4g");
	this.shape_4.setTransform(640,266.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7ED74").s().p("Ehj/ApLIAAx0IAAgKIAAgKIAAjwIAAgKIAAkEIAAgKIAAl8IAAgKIAAhLIAAj1IAAgKIAAgrIAAkKIAAr4IAArrIAAwTIAAgKIb+AAIb+AAIb+AAIb9AAIb+AAIEvAAIAAAKIXPAAIb+AAIEOAAIAACjIAANwIAAJoIAACDIAAJcIAACmIAAEAIAABJIAAAKMAAAAk4g");
	this.shape_5.setTransform(640,263.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7D174").s().p("Ehj/ArVIAA2IIAAgKIAAgKIAAjwIAAgKIAAkEIAAgKIAAl8IAAgKIAAhLIAAj1IAAgKIAAgrIAAkKIAAr4IAAmkIAA1aIAAgKIb+AAIb+AAIb+AAIb9AAIb+AAIEvAAIAAAKIXPAAIb+AAIEOAAIAACjIAAS3IAAEhIAACDIAAJcIAACmIAAEAIAABJIAAAKMAAAApMg");
	this.shape_6.setTransform(640,277.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7B774").s().p("Ehj/AqjIAA0kIAAgKIAAgKIAAjwIAAgKIAAkEIAAgKIAAl8IAAgKIAAhLIAAj1IAAgKIAAgqIAAkLIAAr4IAAohIAAzdIAAgKIb+AAIb+AAIb+AAIb9AAIb+AAIEvAAIAAAKIXPAAIb+AAIEOAAIAACjIAAQ6IAAGeIAACDIAAJcIAACmIAAEBIAABIIAAAKMAAAAnog");
	this.shape_7.setTransform(640,272.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D18568").s().p("EhjyAsaIAA4RQgGABgHgCIAAgKIAAgKIAAjwIAAgKIAAkEIAAgKIAAl8IAAgKIAAhLIAAj1IAAgKIAAgqIAAkLIAAr4IAAiDIAA57IAAgKIb+AAIb+AAIb+AAIb9AAIb+AAIEvAAIAAAKIXPAAIb+AAIEOAAIAACjIAAVBIAACXIAACDIAAJcIAACmIAAEBIAABIIAAAKMAAAArWg");
	this.shape_8.setTransform(640,284.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D18568").s().p("EhjyArVIAA2HQgGABgHgCIAAgKIAAgKIAAjwIAAgKIAAkEIAAgKIAAl8IAAgKIAAhLIAAj1IAAgKIAAgrIAAkKIAAr4IAAiDIAA57IAAgKIb+AAIb+AAIb+AAIb9AAIb+AAIEvAAIAAAKIXPAAIb+AAIEOAAIAACjIAATcIAAD8IAACDIAAJcIAACmIAAEAIAABJIAAAKMAAAApMg");
	this.shape_9.setTransform(640,277.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B6745A").s().p("EhjyArVIAA2HQgGABgHgCIAAgKIAAgKIAAjwIAAgKIAAkEIAAgKIAAl8IAAgKIAAhLIAAj1IAAgKIAAgrIAAkKIAAr4IAAiDIAA57IAAgKIb+AAIb+AAIb+AAIb9AAIb+AAIEvAAIAAAKIXPAAIb+AAIEOAAIAACjIAATcIAAD8IAACDIAAJcIAACmIAAEAIAABJIAAAKMAAAApMg");
	this.shape_10.setTransform(640,277.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,568.5);


(lib.shooting_hole = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(184,184,184,0.906)").s().p("AgSgFQAEgEAHAAIAFAAQAGAGAPADIAAABIgDABQgKAIgHAAQgLAAgGgPg");
	this.shape.setTransform(-44.5,15.1003);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(159,159,159,0.788)").s().p("AgGgEQAXADgRAGIgBAAQgEAAgBgJg");
	this.shape_1.setTransform(-32.7724,13.784);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(68,68,68,0.333)").s().p("AgDAHQgDgHgCgHIARAIIABADIgBACQgFABgFABIgCgBg");
	this.shape_2.setTransform(-36.7,9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AAACAE").s().p("AAqACIhXAAIAAgDQAtAAAtABIABACIgEAAg");
	this.shape_3.setTransform(-13.275,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#252327").s().p("AgIAQIgDgCQAPgJAEgVIACAAIADAAQgCAWgPALIgEgBg");
	this.shape_4.setTransform(-7.85,-5.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(136,136,136,0.647)").s().p("AAAAPQgBgPAAgOIADAAIAAAZIAAAEIgCAAg");
	this.shape_5.setTransform(-26.8,-2.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(160,160,160,0.753)").s().p("AALACIgZAAIAAgDQAOAAAPABIAAACIgEAAg");
	this.shape_6.setTransform(8.025,24.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#676E75").s().p("ABfBlQi/gGgVjDIBYAAIADAAIAEAAQARA9A3AWIADABQAPAkAyADIAAACQgGAAAAABQgJAlgEAmIgEAAg");
	this.shape_7.setTransform(-6.05,10.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(54,54,54,0.251)").s().p("AALACIgZAAIAAgDQAOAAAPABIAAACIgEAAg");
	this.shape_8.setTransform(22.125,22.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#232126").s().p("AATCHIAAgCQgxgDgPglIgDgBQg4gVgRg+IAAgDIAAgeQAQgLACgXIgCAAIAAgDQAMgQgUgPIAiAAIAEAAQAfgKAKgdIABgDQAmAdAwgMIAAACQADAQAZAPQAdARAJAoQAKAsgaAbQAEASgEAQIAAAEQgTAwg9AFIgEAAg");
	this.shape_9.setTransform(3.824,-0.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(100,100,100,0.463)").s().p("AAMACIgaAAIAAgDQAOAAAPABIAAACIgDAAg");
	this.shape_10.setTransform(4.6,-28.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(197,197,197,0.992)").s().p("AhBFuQgShFgZg7Qg9gVghgxQgigzg+gEIgIACQhHAMhJAbIAAgCQgPgDgIgGIAAgEQAogPAngRIABgCQAGgBAFgBIAAgCQBSgZAKhNIAAgDIAAgFIAAgaIAAgDQAPgpATgkIAAgEIAAgmIgDgBQgagdgUgiQAXgRAtAFIAEAAQAqAbAjgeIADAAQgEhNglg9IgBgEQA0AxAyAzIABADQA0ABAqgIIAEAAIAaAAIAEAAQAYAFARAOIABADQBTAEA9gjQAOgIAJAFQADAVgRAlIgBADQAgA9BYAJQgdAEgaAHIAAADQgMAuAeAXIABADQBDAWBRAJQAIACAEAFQgfAVgzAQQg0ARgPA0QATARACANIgCAAQhnAXgLBwIgFgEQgEgEgKACIAAgCQgPgCgPAAIAAAEIgEABQgyAQg5AKIAAgCQgPgBgPAAIAAADQg0AQgKA1QgHAngWARQgLgDgDgJgAjLACQAWDDC+AHIAEAAQAEgmAJglQAAgCAGAAIAEAAQA9gFATgvIAAgFQAEgQgEgSQAagagKgtQgJgngdgSQgZgOgDgQIAAgDQgwAMgmgdIgBAEQgKAdgfAJIgEAAIgiAAQAUAPgMARIAAADIgCAAQgEAWgRAIIAEADIADABIAAAeIAAADIgDAAIgBgCQgtgBguAAIAAADg");
	this.shape_11.setTransform(2.525,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shooting_hole, new cjs.Rectangle(-46.4,-38,96.3,75.7), null);


(lib.sheriffs_eyes = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFDFD").s().p("AACAJIgCAAIAAAAIAAgBIgCAAIgBAAIAAgBIgCAAIgBAAIgBAAIAAgBIABAAIAAgBIgBAAIAAgCIAAgCIgBABIAAgCIAAAAIAAgBIABAAIAAgBIAAgCIABAAIAAgBIABgBIAAgBIABAAIAAgCIACAAIACAAIAAAAIABAAIACAAIABAAIABAAIAAABIABABIABABIABAAIABABIABABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIgBABIAAABIgBAAIgBAAIgBABIgBABIgBAAIgBAAIAAABIgBAAg");
	this.shape.setTransform(5.15,2.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010100").s().p("AgCAlIgBAAIgBAAIgCAAIAAgBIgBAAIgBAAIgCAAIAAgBIgBAAIgCAAIgBAAIAAgBIgBAAIgCAAIAAgBIgBAAIAAgCIgBAAIgCAAIAAgCIgBABIAAgCIgCAAIAAgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAgCIAAgBIgBAAIAAgCIgCAAIAAgBIAAgBIgBAAIAAgBIAAgCIgCAAIAAgBIAAgCIAAgBIgBAAIAAgBIAAgBIAAgCIAAgBIAAgCIgCAAIAAgBIAAgCIAAAAIAAgBIABAAIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIABAAIABgBIAAgCIABAAIAAgCIAAgBIAAgBIABgBIAAAAIABgBIAAgBIAAgBIABAAIABgBIABgBIAAgBIABgBIAAgBIABAAIABgBIABgBIAAAAIABAAIAAgBIABgBIABgBIABAAIABAAIAAgCIACAAIABAAIAAgBIABAAIABgBIABgBIABAAIABAAIACAAIAAgBIABAAIACAAIABAAIABAAIACAAIABAAIAAgBIABAAIAAABIABAAIABAAIABAAIACAAIABAAIACAAIABAAIAAAAIABABIACAAIABgBIAAABIACABIABAAIAAABIABAAIACAAIAAABIABAAIAAACIABAAIABABIABAAIAAgBIABAAIAAABIABABIABABIAAAAIABABIAAABIABAAIAAABIABABIABABIAAABIABAAIAAACIABABIABAAIAAABIAAABIABAAIAAACIABABIABAAIAAACIAAABIAAABIAAABIABAAIAAACIAAABIAAACIAAABIAAABIAAABIAAABIABABIAAACIgBAAIgBABIAAACIAAABIAAABIgBAAIAAABIAAACIAAACIgBAAIAAABIAAABIgBABIgBAAIgBABIAAABIAAABIgBAAIAAABIgBABIAAABIgBABIgBABIgBAAIAAABIgBAAIAAABIgBAAIgBABIgBABIgBAAIAAABIgBAAIgBACIgBAAIgBAAIAAABIgCAAIgBAAIgBABIgBABIgBAAIgBAAIgBAAIgBABIgBAAIgBAAIgCAAIgBAAIgBAAIgCAAIAAAAIgCAAgAAMgEIABABIABAAIABAAIACAAIABgBIAAgBIABAAIABAAIABgBIABgBIAAgBIABAAIAAAAIABgBIABgBIAAgBIAAgCIAAgBIABgBIAAgBIgBAAIAAgBIAAgBIgBgBIAAgCIgBAAIAAgCIgBAAIAAgBIgCAAIAAgBIgBAAIgCAAIgBAAIgBAAIgCAAIgBAAIgBAAIgCAAIgBAAIAAACIgBAAIAAABIgBAAIgBACIgBAAIAAABIAAACIgBAAIAAABIAAABIAAABIAAACIAAABIABAAIAAACIABABIABAAIAAABIAAABIABAAIABAAIABABIABABIABgBIABABg");
	this.shape_1.setTransform(3.775,4.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFCFC").s().p("AAAAKIAAgCIgCAAIgBAAIgBAAIAAgBIgBAAIAAgBIgCAAIAAgCIAAgBIgCAAIAAgBIAAgCIAAAAIAAgBIABgBIAAgBIAAgBIACgBIAAgBIABAAIAAgBIACAAIAAgBIABAAIABAAIABgBIABAAIACAAIABAAIABAAIAAABIABABIABABIABAAIAAABIABAAIAAACIAAABIAAABIAAABIAAABIAAABIAAACIgBAAIAAABIgBABIAAABIgBAAIgBABIAAAAIgBAAIgBABIgBAAIgCABIAAAAg");
	this.shape_2.setTransform(28.25,2.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#030202").s().p("AAAAlIgCAAIgCAAIgBAAIAAgBIgBAAIgBAAIgCAAIgCAAIAAgBIgBAAIgBAAIAAgBIgCAAIgBAAIAAgBIgBAAIgBAAIAAgCIgCAAIAAgCIgCABIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgCAAIAAgCIAAgBIgBAAIAAgCIgCAAIAAgBIAAgBIAAAAIgBgBIAAgCIgBAAIAAgBIAAgBIAAgCIgBAAIAAgBIAAgCIgBgBIAAgBIAAgBIAAgCIAAgCIAAgBIAAAAIAAgBIAAgCIAAgBIAAgCIAAgBIABgBIAAgBIAAAAIAAgCIABAAIABgBIAAgCIABAAIAAgBIgBAAIgBgCIACAAIAAAAIABgBIAAgBIABAAIAAgBIABgBIAAgBIACAAIAAgCIABAAIAAgBIABgBIABgBIABAAIAAgBIABAAIAAgBIABAAIABAAIABgBIABAAIABgBIABgBIABAAIABgBIAAgBIABAAIACAAIABAAIABgBIABAAIABAAIABAAIACAAIABAAIABgBIAAgBIACAAIAAABIAAABIACAAIABgBIABAAIABAAIACAAIACAAIAAABIABABIABAAIABAAIABABIABAAIABAAIAAABIACABIABAAIABABIABAAIAAABIABAAIABAAIAAABIABAAIABABIABAAIABABIABABIAAABIABAAIAAACIABABIAAAAIABABIABAAIAAABIAAABIABABIAAABIAAABIABAAIAAACIABABIABAAIAAACIAAABIABABIAAABIABAAIAAACIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIgBABIAAABIAAABIAAABIgBAAIAAACIAAABIAAACIgCAAIAAABIAAABIgBAAIAAABIAAACIgBAAIgBACIgBAAIAAABIAAAAIgBABIgBABIAAAAIgBABIAAABIgCAAIAAABIgBABIgBABIgBAAIAAABIgBAAIgBABIAAABIgBAAIgBAAIgBABIgCAAIgBAAIgBAAIAAABIgBAAIgCAAIgBABIAAABIgCAAIgBAAIgBAAIgCAAIgBAAIgBAAIAAAAgAACgUIgBAAIAAABIAAABIgBABIAAABIAAABIAAACIAAABIAAABIABABIAAABIABAAIAAABIAAABIABABIABAAIABAAIAAACIABAAIACAAIABABIABAAIABAAIABAAIABAAIABAAIABgBIABAAIABgBIABgBIABAAIAAgBIABgBIAAgBIABAAIAAgBIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgBIgBAAIAAgCIAAgBIgBAAIAAgCIgCAAIgCAAIAAgBIgBAAIgBAAIgBAAIgCAAIgBAAIgBAAIgCAAIgBABIgBABIgBABIAAABIgBAAIAAABg");
	this.shape_3.setTransform(27.2,3.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggAKQgHAAAAgHIAAgFQAAgHAHAAIBBAAQAHAAAAAHIAAAFQAAAHgHAAg");
	this.shape_4.setTransform(27.225,4.2537,1,1.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggAKQgHAAAAgHIAAgFQAAgHAHAAIBBAAQAHAAAAAHIAAAFQAAAHgHAAg");
	this.shape_5.setTransform(3.825,4.2538,1,1.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},27).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},48).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,31.3,8.2);


(lib.rolling_bush = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_156();
	this.instance.setTransform(-88.6,-95.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rolling_bush, new cjs.Rectangle(-88.6,-95.6,181,154.5), null);


(lib.rock = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_155();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rock, new cjs.Rectangle(0,0,403,125.5), null);


(lib.Qpic_box = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.008)").ss(1,1,1).p("AtGrhIaMAAIAAXDI6MAAg");
	this.shape.setTransform(0.0043,0.0129,1.0681,0.9725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Qpic_box, new cjs.Rectangle(-90.5,-72.7,181.1,145.5), null);


(lib.Instructions_sign = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_138();
	this.instance.setTransform(-64.45,-43.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_139();
	this.instance_1.setTransform(-64.45,-43.05,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_140();
	this.instance_2.setTransform(-64.45,-43.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.4,-43,128.5,84);


(lib.house = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_154();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.house, new cjs.Rectangle(0,0,270.5,329.5), null);


(lib.clouds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_153();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-142.5},0).wait(1).to({x:-351.3},0).wait(1).to({x:-567.5},0).wait(1).to({x:-788.55},0).wait(1).to({x:-1009.6},0).wait(1).to({x:-1176.6},0).wait(1).to({x:-1321.55},0).wait(1).to({x:-1495.95},0).wait(1).to({x:-1717.05},0).wait(1).to({x:-1982.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1982.7,0,2923.7,150);


(lib.Apic_box = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.008)").ss(1,1,1).p("AoMl2IQZAAIAALtIwZAAg");
	this.shape.setTransform(0.023,0.01,1.0797,1.0197);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Apic_box, new cjs.Rectangle(-57.6,-39.2,115.30000000000001,78.5), null);


(lib.wooden_fence = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(55,21,0,0.443)").s().p("AAVAEQgZgDgXgFQAbAAAcACIAAACIAAAFIgHgBg");
	this.shape.setTransform(128.525,39.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(34,13,0,0.271)").s().p("AgiAFIgIAAIAAgDQgWACgFgIQBFAABGADIAAABQgjAFgqAAIgbAAg");
	this.shape_1.setTransform(158.175,58.5985);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(12,4,0,0.102)").s().p("Aj3gFIAAgEQD1AIDygIIAHAAIAAAEIgHAAQh5APh5AAQh6AAh7gPg");
	this.shape_2.setTransform(156.1,40.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(54,21,0,0.435)").s().p("AgWAAIAAgEQBXgBhRAJIgGABIAAgFg");
	this.shape_3.setTransform(183.1152,39.3705);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(22,8,0,0.188)").s().p("AAfAEQgzAAgngIQA7ABA8ACIAAABIgHABIgOADIgIAAg");
	this.shape_4.setTransform(444.6,66.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(52,50,50,0.996)").s().p("Ag3AEIAAgEIAAgKQAIgIALgHQAAAAAAAAQABgBAAAAQAAAAAAgBQABgBAAAAIAPgEIAGgBIAiAAIAHAAQAHAIAJAFQACABAEAAQANARgMALIgBAEQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABQgcARgWAAQgfAAgWgeg");
	this.shape_5.setTransform(451.988,69.4852);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(8,3,0,0.071)").s().p("ABOASQhAgOhNgEQgDAAgCgBQgKgFgGgHQBjAIA/gMIAHgBIAAAgIAAAFIgHgBg");
	this.shape_6.setTransform(463.3,67.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(26,10,0,0.208)").s().p("AAKALIgbgMQAcAEADgNIADgBIAAATIAAADIgHAAg");
	this.shape_7.setTransform(470.05,33.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(13,5,0,0.106)").s().p("ACpAUQikgZi1gPQCsAGCtgBIADgDQABgCAEAAIAAAlIAAAEIgIgBg");
	this.shape_8.setTransform(454.125,16.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(49,19,0,0.392)").s().p("AghAFIAAgFQAOAAAOgBIABgDQATAAARAFQAKAEgxAAIgaAAg");
	this.shape_9.setTransform(-465.62,58.5841);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(13,5,0,0.11)").s().p("AgfAJIAAgWQARAMAngDIAHAAIgBADQgOABgOAAIAAAEIgGABQgSABgKAIIAAgFg");
	this.shape_10.setTransform(-469.325,58.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(53,20,0,0.424)").s().p("AgWAAIAAgEQBXgBhQAJIgHABIAAgFg");
	this.shape_11.setTransform(-443.3656,39.3705);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(21,8,0,0.173)").s().p("AgzAKIAAgXQAnAPBAAAQg0ADgsAIIgHABIAAgEg");
	this.shape_12.setTransform(-467.325,7.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(37,14,0,0.302)").s().p("AAWAEQglgDghgFQAxAAAwADIAAABIgGAAIgPAAIAAAFIgGgBg");
	this.shape_13.setTransform(-185.1,14.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(39,15,0,0.314)").s().p("AgFADQgRgCgRAAIAAgEQBFgEAKAIIgKAAQgVABgNADIgBgCg");
	this.shape_14.setTransform(-130.125,14.474);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(53,20,0,0.427)").s().p("AXdF0IAjAAIAHAAQAFAJAXgCIAAADIgHAAIgHAAQgjAAgVgKgA4il9QByAChyAAg");
	this.shape_15.setTransform(-3.2,20.8543);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(54,21,0,0.427)").s().p("AgWABIAAgFQBXAAhQAJIgHAAIAAgEg");
	this.shape_16.setTransform(-126.2964,-37.0512);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(12,4,0,0.098)").s().p("ARjH4IAAgDQEsAMEsgMIAHAAQiYAYicAAQiUAAiXgVgA7BEPIAAglQBUASBqgKQAogDAmAAIAAAEIgHAAQiRAHh0AaIAAgFgAR/oIIAAgEQEUAKETgKIAHAAIAAAEIgHAAQiKAUiJAAQiKAAiKgUg");
	this.shape_17.setTransform(-299.475,15.5071);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(50,19,0,0.396)").s().p("AAdAFQgigDgdgGQAmgCAZAGIAHABIAAAEIgHAAg");
	this.shape_18.setTransform(-187.9,-37.0829);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(13,5,0,0.102)").s().p("AiXAOIAAggQCCALClgLIAIAAQicAOiMAWIgHABIAAgFg");
	this.shape_19.setTransform(-457.325,-10.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(26,10,0,0.212)").s().p("Ag3AJIAAgWQAsANBDgCQg5ADgwAMIgGABIAAgFg");
	this.shape_20.setTransform(-466.875,-44.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(47,18,0,0.373)").s().p("AgWABIgGgBIAAgEQBrgChdAKIgHABQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_21.setTransform(-444.2433,-63.291);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333332").s().p("AgygLIgBgFQBEgpAgA5QAGAKgIAGQgfASgUAAQgjAAgLgtg");
	this.shape_22.setTransform(-458.1714,-71.4689);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(11,4,0,0.09)").s().p("AiCAOIAAggQBrAPCMgKIAGAAIAGABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgHAAQiFAIh4ATIAAgFg");
	this.shape_23.setTransform(-459.45,-61.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(31,12,0,0.251)").s().p("AAUALQgSgLgdgBQAhABAQgKIAFgBIAAARIAAAGIgHgBg");
	this.shape_24.setTransform(469.05,-17.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(54,21,0,0.431)").s().p("AAWAEQgZgDgYgFQAbAAAcADIAAACIAAAEIgGgBg");
	this.shape_25.setTransform(437.8,-37.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(11,4,0,0.086)").s().p("EgzGAD7IAAgFIAPAAIAHAAQDjAIDhgIIAIAAQASAAARACIAAADIgIAAQh+ASh+AAQiAAAiBgSgEAy/gDoQiMgXikgJIAAgEQCjAECGgCQAHAAAHgCIAAAgIAAAFIgHgBg");
	this.shape_26.setTransform(144.75,-10.0687);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(24,9,0,0.196)").s().p("A5iGAIAAgCQBxgDBxADIAGAAQg9AFhCAAQgzAAg2gDgAZelrQgPgJgWgEQAdAEAIgNQABgBAEAAIAAATIAAAFIgFgBg");
	this.shape_27.setTransform(308.275,-31.1592);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#343332").s().p("EhH6AK2IgBgEQBVgxARBMIgDAAQgfAXgWAAQgfAAgOgugEBGTgKwIAAgEIAAgdQBDgqAmA5IABAEIgBAFQgXAcgeAAQgYAAgcgTg");
	this.shape_28.setTransform(-2.9,-0.9701);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(36,13,0,0.29)").s().p("AgOAFIAAgDQgVgCgUAAIAAgEIBoAAIAHAAQgeAGghADIgHAAg");
	this.shape_29.setTransform(178.7,-11.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(50,19,0,0.4)").s().p("AgXACIAAgDQBbABhTACIgIAAg");
	this.shape_30.setTransform(164.7477,-44.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(48,18,0,0.388)").s().p("AgYAFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAgEQB3gBhpAKIgHAAg");
	this.shape_31.setTransform(181.8664,-63.2793);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(24,9,0,0.192)").s().p("AgigCIA/AAIAGAAIgBACQgGACgGAAIgIAAIgQABQgVAAgLgFg");
	this.shape_32.setTransform(131.3,-11.9091);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(46,18,0,0.365)").s().p("AgbAAQAHAAAGgBIAAgDQAVAAAUADQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgHAAIgbAAIAAAEIgGABIgHAAQgJAAABgFg");
	this.shape_33.setTransform(136.2721,-11.6687);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(19,7,0,0.157)").s().p("AhXgCICpAAIAGAAIAAAEIgGAAIgPAAIgHAAIhMAAIgHAAIgWABQgaAAgQgFg");
	this.shape_34.setTransform(153.55,-44.2321);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(58,23,0,0.467)").s().p("AgpgBIBMAAIAHAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQgUACgSAAQgZAAgTgDg");
	this.shape_35.setTransform(156.05,-43.813);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(12,4,0,0.094)").s().p("AjPD9IAAgFIAbAAIAIAAQCmAEClgEIAIAAQAUAAAVACIAAADIgGAAQhmAPhkAAQhoAAhngPgAjkkGIAAgFQDeAHDdgGIAIgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABABAAAAIgHABQhwAQhvAAQhyAAhygRg");
	this.shape_36.setTransform(156.4,-36.5187);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(46,17,0,0.365)").s().p("AAgAFQglgEghgFQAmAAAnADIAAABIAAAFIgHAAg");
	this.shape_37.setTransform(129.575,-63.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A94300").s().p("A6ML4QifgIifAAIz3AAIz4AAIiGAAIAAh/IAAgFQF6gIFsgYQADAAAEgFQg8gch1ABQiNACiUgEQiPgDiMgGIAAhYIAAgFIOXheQAMgCACgIQgdgWhOAEQmZAVmhAMIAAhZIAAgFIT4AAQJ8AAJ7gCQEZgBEGANQAAAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgUAmhWACQiVAEiOANQiPAMh6AYQgCABAAAFQAgAXBRgGQEXgUEJgCQAMB2gJCCIgDAAQlkgFlzgTQh7gGhuALQgEAAgEAGQAlAYBLAFQDhAODeATQDYASDFAiQADAAAAAHQgMAbg/AAIgRAAgEhIUAKlIABAEQAYBOBKg2IAEAAQgLgvgkAAQgXAAghATgA4GLmIAAgEQATglBPgDQDjgLDbgSQDlgSDCglQAEAAAEgCQhEgbhoAKQhlAJhmAFQkxAOkgACQgMh2AJiCIADAAQFCALFPAAIAAgCQgaghhXgCQhGgDhOgEQjWgOi5gnQgEgBAAgHIAAgJQJvgIKBABQJ7ACJ8gCQEYgBEHAIQANAigGAuIAAAEQnRgHnFgPQgLAAgDAIQA2AgBlAHQDFAMDHATQC6ASDDAPIAABZIAAAFQi1AOjBAAQjRgBimAYQAPAbA5AAQFaACFLANIAAB6IAAAFQpuAIqCgCQp7gBp7ADIgVAAQkRAAkBgNgEBAhALzQp8gDp8AAIz3AAIAAgFQgGhFANg6QFJgNFWgCQA4AAAOgbIAAgCQltgWl/gJIAAgEQgGgyANgnQGTgvGpgbQBGgFAbgdQgCgIgMAAQm8ALnaAQIAAgFIAAhUQJvgIKCABQJ7ACJ7gCQEdgBEJAPQABAAAAAHQgZAghQADQiSAEiKAKQibALh4AdQAyAhBlgLQBGgHA+gCQDEgHC5gKIAAD8IAAAFQnmgYnhgBIAAABQAiAjBdAAQA4ABA5AFQEJAXECAaQAnA1BBgoQAAgBABAAQAAAAAAgBQAAAAABgBQAAgBAAAAIAGAAQBJgDATAfQAAAIgBAAQj+AOkNAAIgTAAgEBHjAD0QiegHifAAIz2AAIz4AAIh/AAQgNg6AKhFIADAAQFsgQFzgLQALgBgFgKQgcgfhcAEIhOAAIofgKQgNgrAKg3IADAAQHQgrHGgxQAMgBgFgKQghgahEAJQg2AIg5ACQltAQlcAFQgNgkAGgwIAAgFIT3AAQJ8AAJ8gDQEYAAEHANIAAAEQgGAgg5ABQihAGiYAMQidANiBAdQgCABAAAFQAyASBqgHQD5gOEDgHIAAD4IAAAEQnqgTnXgJQgLAAAFAKQAuAeBeAFQDZAMDRASQDQASC/AfQACABAAAHQgNAbg+AAIgSgBgA6MD0QifgHifAAIz3AAIz4AAIiGAAIAAh/IAAgFQF4gIFugUQADAAAEgFQgmgahTgBQk7gDk5gHIAAhdIAAgFQHUgrHIg2QAFgBAEgFQg+gYhnAHQjCAOjAAGQjDAGi7AKIAAhZIAAgFIT4AAQJ8AAJ7gDQEZAAEGANQAAAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgIAeg3ADQjwANjlASQhPAHgyAVQgDACAAAFQAuASBngGQD5gPEDgHQAMB2gFCCIAAAEQnugTnagEQgDAAgEAFQBBAdBoAHQE9AWEyAZQBoAJBMAYQADABAAAFQgMAbg/AAIgRgBgA4GDjIAAgFQASglBYAAQAyAAA4gFQGGgdFsgyQAFAAAEgFQg9gXhuAHQmOAWmWAMIAAj3IAAgFQFSAME4AFQAHAAAHgDQgagihPgDQiegGiUgNQiKgLhvgcQgEgBAAgHIAAgOIT4AAIT1AAIIgAAIAABVIAAAEQlWgElkgSQh/gHhqALQAAAAAAAAQgBAAAAABQAAAAAAABQAAABAAABQA3AdBkAHQDDALDCARQDFARC4AWQANAqgJAzIgEAAQlwANltATQgFABgEAFQAhAeBggDQBGgCBUABQDrACDgAOQANA3gGBCIAAAGIz2AAQp7AAp8ACIgVAAQkNAAj+gMgA64kKQidgIigAAIz2AAIz4AAIhcAAIAAh+IAAgFQF4gMFugVQADAAAEgEQg4geh5ACQhCAChSgDImogJIAAhZIAAgFQFZgoFqgcQB4gJBkgSQAKgDgEgKQg3gShtAFQl8AVmFALIAAhZIAAgFIT4AAQJ8AAJ7gCQEZgBEGANQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQgWAlhUACQiXAFiMALQiPALh2AVQgLACAFAKQAkAaBIgKQA2gHA4gDQDigLDVAAQAMB3gJCCIgDAAQjngEkAgLQjygKjagEQgSAAgDAKQA8AhBtAGQDPANDTASQDIASC5AfQADABAAAHQgeAahRAAIgZAAgEhIUgLdIABAFQARBLBRgvQAIgGgGgMQgTghgfAAQgWAAgdASgA4GkbIAAgFQAOgnBUAAQA3AAA7gEQF9gjF1gsIAEgDIAFgBQghgYhRAFQm1AXmhAKQgMh2AJiDIADAAQFCAJFIAGQALAAgEgKQg6gghugGQiFgGiJgJQiAgIhcgfQgGgCAAgJIAAgKIT4AAIT1AAIIgAAIAABaIAAAEQnWgSm/gHQgHAAgIACQArAoBxACQAqABA3AEIKnA9IAABZIAAAEQkVAPkfADQhsAAhKATQgDABAAAFQAqAWBPAAQE+ABEvAOQANA5gJBGIgEAAQpvAIqAgCQp7gCp8ADIgoAAQkDAAj1gMgEBAhgEPQp8gDp8ACQqBACpvgIIgDAAQgKhGANg5QEwgOE9ABQBXAAAhgdQhDgXh0AAQkfAAkWgPIAAgEIAAhZQGdgpGmgeQBEgFAdgcQgCgIgMABQm/AInXASIAAgEIAAhaIT3AAQJ8AAJ8gCQEYgBEHANIAAAEQgHAmhNgJIgIAAIgBgEQgmg5hDAqIAAAcIAAAFIkwATQhqAGg4AfQAEAFAEAAQFCADFOgRIAAAEIAAD9QmpgRmsgVQhSgEggAYQAAABAAABQAAABAAAAQAAABABAAQAAAAAAAAQE3ApFKAdQBsAJBwADQBUABAVAjQAAAHgBAAQj2AOkFAAIgjAAg");
	this.shape_38.setTransform(-0.425,0.2723);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(127,50,0,0.996)").s().p("EBBSAMUIz4AAIz4AAIz3AAIz2AAIz3AAIz5AAIz2AAIAAgFIAAi3QALgIARgBIAIgBQBOACgNgFQgRgGgUAAIgHAAQgoAEgRgNIAAgFIAAiIQB1gaCQgGIAIAAIAHgBQBRgKhYABIAAAFQgnAAgnAEQhrAJhUgSIAAgFIAAkrIAHgBQAsgJA1gDQhBAAgngQIAAgFIAAiHIAHAAQCNgXCcgOIgHAAQinAKiCgKIAAgFIAAksIAHgBQAwgLA6gFQhEADgtgOIAAgFIAAiMQB4gTCGgJIAHAAIAIgBQBegKhtACIAAAEIgGAAQiNAKhrgOIAAgFIAAiSIT2AAIT5AAIT3AAIT2AAIT3AAIT4AAIT4AAIIfAAIAABVIAAAFQgDAAgBAAQgJANgdgEQAXAEAOAJIAFABIAAEsIAAAFQgHACgHAAQiGACijgEIAAgDQgcgDgdABQAYAFAbAEIAGABQCkAICMAXIAHABIAACSIAAAEIgFABQgQALgigCQAeACASALIAHABIAAEmIAAAEQgDABgBABIgDAEQivAAirgGQC2APCkAbIAHABIAACMIAAAFIgDAAQgDAPgdgFIAcAMIAHABIAAEtIAAAEIgHACQg+ALhlgIIgGAAIgjAAIAAgCQg9gCg8gBQAnAJA1AAIAHAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgLAHgIAIIAAAKIAAAEQkCgZkIgXQg5gFg5gBQhdgBgigiIAAgBQHhABHnAYIAAgFIAAj9Qi6ALjEAHQg+AChGAHQhlAKgxggQB3gdCbgLQCKgKCSgEQBRgDAZggQAAgIgCABQkIgQkeABQp7ADp7gCQqBgBpvAHIAABVIAAAEQHZgQG9gKQAMAAABAIQgbAdhGAFQmpAbmTAvQgNAnAHAyIAAAEQF+AJFuAWIAAACQgOAbg5AAQlWABlJAOQgNA6AHBFIAAAFIT2AAQJ9AAJ7ADQEYAAEGgPQACAAAAgHQgUgghJADIgGAAIABgDQAMgNgNgQQBNAEBAAOIAHABIAAAEIAABaIofAAgEg9TAJKQgDAEgEAAQlsAZl6AIIAAAFIAAB/ICGAAIT5AAIT3AAQCfAACeAHQBOAFAOgfQAAgHgDgBQjFghjYgSQjegTjhgPQhLgEglgYQAEgGAEAAQBugLB7AGQF0ASFjAGIADAAQAKiCgNh2QkJACkXATQhRAHgfgYQAAgEACgBQB6gZCOgLQCPgNCVgEQBVgCAUgmQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQkGgOkZABQp7ADp7AAIz5AAIAAAEIAABZQGigLGYgVQBOgFAdAXQgCAIgMACIuXBeIAAAFIAABYQCMAGCQADQCTADCNgBIAIAAQBvAAA6AbgAo4JnQgDACgEAAQjDAkjkASQjcATjjAKQhPAEgTAlIAAAEQELANEcAAQJ7gDJ8ABQKBACJugIIAAgFIAAh6QlLgOlagBQg4AAgPgbQClgYDRAAQDCAAC0gNIAAgFIAAhZQjDgPi6gSQjHgUjEgMQhmgGg2ggQADgIALAAQHGAPHQAHIAAgFQAGgtgNgjQkHgHkYAAQp8ADp6gCQqCgBpvAHIAAAKQABAHADAAQC5AoDWANQBPAFBFADQBXACAbAhIAAACQlQAAlBgLIgEAAQgJCCANB2QEfgCEygPQBlgEBlgJQAcgDAaAAQBEAAAyAUgA9LKTQE3ArEoguIgHAAQksAMktgMIABADgAYGJOIAIAAQA8ADAugHIAAgCQhHgDhGAAIgIAAIgjAAQAYAKAngBIAHAAgAUeGOIAHABQD2AfDxgfIAIAAIAGgBQBSgKhYABIAAAFIgIAAQjzAIj0gIIAAgDQgdgCgbAAQAXAGAaADgAY4DvICAAAIT3AAIT2AAQCgABCdAHQBPAEAPgfQAAgHgDgBQi+gejRgSQjRgTjYgMQhfgEgugfQgFgJAMgBQHWAKHrATIAAgEIAAj4QkEAGj5APQhqAHgxgTQgBgFACAAQCBgeCegNQCXgMCigFQA4gCAHgfIAAgFQkIgNkYABQp7ACp9ABIz2AAIAAAFQgHAwANAkQFdgFFtgQQA4gDA2gHQBEgKAhAaQAFALgLAAQnHAynQArIgDAAQgKA2ANAsIIgAKIBNAAQBdgEAcAfQAFAKgMABQlzALlsAQIgDAAQgKBFANA5gEg6bgCkQgEAGgFABQnHA2nVArIAAAFIAABdQE6AHE6ADQBTABAmAaQgDAFgEAAQluAUl4AHIAAAGIAAB+ICGAAIT5AAIT3AAQCfABCeAHQBOAEAOgfQAAgEgDgCQhMgXhogJQkygZk8gWQhpgHhBgeQAEgEAEAAQHZAEHuATIAAgEQAFiCgMh2QkDAGj5AQQhnAGgtgTQAAgFACgBQAygVBPgHQDlgSDwgNQA3gDAIgeQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQkGgNkZABQp7ACp7ABIz5AAIAAAFIAABYQC7gJDEgGQC/gGDDgOQAYgCAWAAQBHAAAvASgAo4BiQgDAGgGAAQlsAymGAdQg3AFgygBQhZAAgSAmIAAAEQEIAOEYgBQJ8gCJ7gBIT2AAIAAgFQAGhDgNg2QjggOjrgCQhUgBhGABQhgAEgggfQADgFAFAAQFtgTFwgOIAEAAQAJgzgNgpQi4gWjEgSQjCgQjDgMQhlgGg3geQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQBpgLB/AHQFkARFWAFIAAgFIAAhUIofAAIz2AAIz4AAIAAAOQABAHADAAQBvAdCKALQCUAMCeAHQBQADAaAiQgIADgHAAQk3gFlTgMIAAAFIAAD3QGWgMGOgWIAvgCQBNAAAvARgA8gCVIAFABQD/AlD+glIAIAAQAPgEAUAAIALAAQgKgJhHADIAAAGIgIAAQjhAHjjgHIAAgDQgxgCgxgBQAhAHAmACgAWrBGIAAADQB9AGBsgJIgHAAQg4gBg5AAQg4AAg5ABgAbphvIAHgBIAHAAQAigCAegHIgIAAIhpAAIAAAFIgIAAQilADimgDQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQgUgDgVAAIgHAAIg/AAQAPAIAigDIAHAAQgBAIAQgDIAHgBQDNAeDMgdgA4+iqQByAAhygDgEg9TgG3QgDAEgEAAQluAVl4AMIAAAEIAAB/IBcAAIT4AAIT2AAQChAACcAHQBmAFAigfQAAgGgDgBQi5gfjIgSQjTgSjPgNQhtgGg8giQADgKASABQDaAEDyAKQEAALDnADIADAAQAKiBgNh3QjVgBjhAMQg4ADg3AHQhIAKgjgaQgGgKALgCQB2gVCPgMQCMgLCYgEQBTgCAWglQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQkGgNkZAAQp7ADp7AAIz5AAIAAAFIAABZQGGgLF8gVQBsgFA3ASQAEAKgKACQhkATh4AJQlqAclZAoIAAAFIAABYIGoAKQBSADBCgDIAPAAQBtAAA1AdgA4HkdIAAAEQEIAOEYgBQJ8gDJ7ACQKAABJvgHIAEAAQAJhGgNg5QkvgPk+gBQhPAAgpgVQAAgFACgBQBLgTBrAAQEggDEUgPIAAgEIAAhaIqng8Qg3gEgqgBQhxgDgrgnQAIgCAHgBQG/AHHWATIAAgEIAAhaIofAAIz2AAIz4AAIAAAKQAAAJAHACQBbAfCAAIQCJAJCFAGQBuAGA7AgQADAJgLAAQlIgFlBgJIgEAAQgJCCANB2QGggJG1gXQBRgFAhAYIgEABIgFADQl1Asl9AjQg6AEg4AAIgCAAQhSAAgOAngEBAggEMQEYABEGgQQACABAAgIQgWgihUgCQhwgChrgJQlLgdk3gpQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBQAggYBSAEQGsAVGqARIAAj9IAAgFQlPASlCgDQgEAAgDgFQA3gfBqgHIExgSQA+ApAqgzIABgFIAIABQBNAJAIgmIAAgEQkIgNkYAAQp7ADp9AAIz2AAIAABaIAAAEQHWgSHAgIQAMgBABAIQgcAchFAFQmmAemcAoIAABaIAAAEQEVAOEfAAQB0AABEAYQgiAdhWgBQk+gBkwAPQgNA5AKBGIADAAQJvAHKBgBII2gBILCACgA92l2QAdAGAjADIAHABQETAnEUgnIAGAAIAIgBQBRgKhZABIAAAFIgGAAQkUAKkTgKIgHgBQgSgFgaAAIgUABgAXym3QAhAIAygGQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAPAAIAGAAIAHAAQBVgEhcgBIgGAAIiqAAQAXAHApgCIAHAAgAUzpzIAHAAQDjAhDiggIAGgBIAHAAQBqgLh3ACIAAAEIgIAAQjfAHjegHIAAgCQgngCgmAAQAgAFAmAEg");
	this.shape_39.setTransform(-0.35,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wooden_fence, new cjs.Rectangle(-472.5,-78.7,944.3,157.5), null);


(lib.targrt_3_brokenDown = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A9D481").s().p("AgCAAQgFABgDgBIATAAIACAAIAAAAQgGABgHAAg");
	this.shape.setTransform(21.975,76.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(117,133,103,0.616)").s().p("AAJABIgRAAIAAgBIARAAIABAAIAAABIgBAAg");
	this.shape_1.setTransform(26.4,76.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D9587").s().p("AgFAAIAKAAIABAAIAAAAIgLABIAAgBg");
	this.shape_2.setTransform(27.75,75.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(57,65,50,0.302)").s().p("AAEABIgIAAIAAgBIAIAAIABAAIAAABg");
	this.shape_3.setTransform(27.85,76.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1F9E5").s().p("AgRAAIAPAAIACAAIALAAIAAAAIAEAAIACAAIACAAQgKABgJAAQgIAAgJgBg");
	this.shape_4.setTransform(27.3,75.9889);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(230,244,219,0.996)").s().p("AAQABIgFAAIgBAAIgJAAIgBAAIgRAAIgBAAIAAgBQAVgBAQABIgBAAIgBABIgBAAg");
	this.shape_5.setTransform(27.225,76.3625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(196,220,175,0.988)").s().p("Ag5AJIAEAAIABAAQAIAAAFgCIAAgBIAHgBIAAAAIAQAAIACAAQATAEARgFIgCAAIAAgBQAMgCAKgDIABgBQAHgCAGgDIABgBIABAAQgDAFgEADIAAABIABAAIgBAAQgNAHgSADIABgBIABAAQgRgCgVACIAAABIgBAAIgKAAIgegBg");
	this.shape_6.setTransform(27,75.4813);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(37,59,16,0.357)").s().p("AAHABIgPAAIAAgBIAIAAIAAAAIAHAAIACAAIAAABIgCAAg");
	this.shape_7.setTransform(9.15,76.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(84,127,44,0.725)").s().p("AAHABIgOAAIAAgBIAPAAIAAABg");
	this.shape_8.setTransform(10.875,76.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0E1508").s().p("ABgAIIgPAAIgCAAIgQAAIgCAAIhQAAIgCAAIgZAAIgBAAIgnAAIAAgBQgggBgVgMIAAgBQAVAHAagBIACAAQgEgDANAAQBnAGBpgCIAMAAIgBAAQgKAEgMACIAAABIgCAAIgEAAIgBAAIgLAAIAAABIgCAAg");
	this.shape_9.setTransform(17.4,75.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(172,203,144,0.961)").s().p("AAiABIhEAAIAAgBQAOAAANAAIABAAQASAAAVAAIABAAIACAAIAAABIgCAAg");
	this.shape_10.setTransform(21.9,76.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#578F22").s().p("AgMAAIAYAAIABAAIAAAAIgMABIgNgBg");
	this.shape_11.setTransform(14.025,76.0071);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(129,181,80,0.996)").s().p("AAXADIhBAAIAAAAIgQgBIgCAAIgHAAIAAAAQALAAAJgCIgCAAQgOAAgNgCIAEAAIABAAIAmAAIABAAQAMACAPgCIAAAAIBQAAIACAAIAAAAIgGACIgCAAIgUAAQADAAAFAAIAAABIAAAAIgEAAIgCAAQgNABgOAAIAAABIgBAAg");
	this.shape_12.setTransform(15.95,76.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(93,158,32,0.965)").s().p("AAdASIgIAAIgCAAQgtgGgXgdIADAAIAAAAQAHAKAMAHIABAAQAUAMAgABIAAAAIgBAAIgEAAQANACAOABIACAAQgJACgLAAIAAAAIgBAAg");
	this.shape_13.setTransform(6.15,74.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(50,76,25,0.996)").s().p("AhZAKQgNgBADAEIgBAAQgbAAgUgGIAAABIgBAAQgLgHgIgJQAqgKA1AJQArAIAtABIAqAAQBAALAugXIAAABIAAAAQgJALgPAHIAAABIgBAAQgFAEgHACIgMgBIhCABQhHAAhHgEg");
	this.shape_14.setTransform(18.225,73.7217);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5B7246").s().p("Ag4AFIANAAIACAAQA7AIAngVIAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIAAgBQgeAPglAAQgUAAgWgEg");
	this.shape_15.setTransform(29.7,73.114);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ECEDEA").s().p("AgGgBIABgBQAIgLADAOQABAEgDADIgBAAQgJAAAAgJg");
	this.shape_16.setTransform(22.6003,61.7337);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DAE4D0").s().p("AgHANIgBgBQgFgEgBgJIAAgBQADgIAHgEIABAAQAOgBADAKIAAACQACAMgKAGIgCAAIgEAAQgDAAgEgCgAgGgCIgBABQgBAKALgBQADgDgBgEQgBgIgEAAQgCAAgEAFg");
	this.shape_17.setTransform(22.716,61.7403);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(72,123,24,0.671)").s().p("AAAC1IAAjYIAAjXIABgBIAADYIAADYIAABHQgBgiAAglg");
	this.shape_18.setTransform(0.075,45.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(102,167,40,0.996)").s().p("ABGFFQguAAgqgIQg1gKgqALIAAgBIgDABIAAgBQgHgIgDgMIAAhHIAAjYIAAjXIAIgEIAHgKIA0gUIAEgXIAKgDIADgQIADgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAIACgDIACgBIABgCIACgHIACgDIABgBIAIgMIAHgKIAACtIAADYQAAA/gCA8IAAABQAWgMAggEIAAgBQANAAANACQgGAEABAMQABA5AAA4QATAGAWADIAAABQALAHANAFIgBAAIgBAAIgNAAIgXAAIgTAAg");
	this.shape_19.setTransform(12.825,41.0875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#93C169").s().p("AgbEBQACg7AAhAIAAjXIAAitIADgEIAEAKIABADIADAHQADAIAHAIQAEAFAHgCIAUgRIAACmIAADYQAAAxgCAtIgBABQgBAAAAABQAAAAAAAAQABAAABAAQABAAABAAIAAAAQgfAFgXAMIAAgCg");
	this.shape_20.setTransform(14.1,34.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(41,82,2,0.482)").s().p("AAADVIAAjXIAAjZIAAg3IAAACIAAA0IAADYIABDYQAAAhgBAeIAAg+g");
	this.shape_21.setTransform(36.75,43.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(88,160,20,0.996)").s().p("AgEDVIAAjXIAAjZIAAhLIADAGIAGANIAAA3IAADZIAADXIAAA+IAAACQgDALgGAIIAAhSg");
	this.shape_22.setTransform(36.175,43.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(214,231,201,0.996)").s().p("AARFmQgIgGABgRQACgqAAgkIgBAAQgUgRgbgLIABAAIgBhoIABjYIAAi+IAGgIIAEgGQADgDAEgCIAFgBIAEgEIAAgDIABgCIACgCIADgCIAEgFQACgEAAgFIADAAQADAAADgBIABgCIAAgDQABgJAEgHQACgEADgDQAIAFAAAIIABADIAFAIIABCyIAADYIAADYIAAABQgFAAgEgHQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQgBAmAAApIAAABQgBAFgGAAIgBAAg");
	this.shape_23.setTransform(26.3,35.8271);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(115,173,61,0.996)").s().p("AAbFDIAAgBQADgDADgFIgBAAIAAgBQAPgHAJgLIAAgBQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIABgBQgnAXg8gJIABAAQgNgFgLgHQA8APAtgXIACAAIAAjZIAAjYIAAivIADACIAHAMIAEAIIAEAJIAABLIAADYIAADYIAABRIgBACQgNARgVAJIgBgBg");
	this.shape_24.setTransform(29.425,43.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(173,208,142,0.996)").s().p("AgTFaIAAAAQgWgDgTgGQAAg5gBg4QgBgMAGgFQgNgBgNAAQgCAAgBAAQgBAAAAAAQgBAAAAAAQAAgBABAAIABgBQADgtAAgyIAAjXIAAimIAGgGIAGgNIAOAUIAQgKIACgHIABgDIABgCIADgBIADAAIADAAIACgEIACgCIAAC+IgBDYIABBoIgCAAQAbALAVARIABAAQAAAkgCAqQgBARAIAGQAHABABgGIAAgBQgBgpACgmQAAgBAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQAFAHAEAAIAAgBIAAjYIAAjYIAAiyIACAFIAEAGIAFAMIAEAKQAEAUANAMIAAANIAHAEIAACwIAADXIAADZIgCAAQgcAPggAAQgWAAgXgHgAgmDtIAAABQABAKAFAEIABABQAFAEAHgCIACAAQAKgGgCgNIAAgCQgDgKgPABIgBAAQgHAEgDAIg");
	this.shape_25.setTransform(25.1382,37.708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.targrt_3_brokenDown, new cjs.Rectangle(0,0,36.9,76.6), null);


(lib.target_6_fly = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(41,40,40,0.741)").s().p("AAAACIAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAAAIABAAIAAABIgBACg");
	this.shape.setTransform(41.45,78.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(75,76,76,0.384)").s().p("AgBAAIAAAAIADAAIAAAAIAAAAIgDAAg");
	this.shape_1.setTransform(25.95,85.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,104,0.573)").s().p("AgDAAIAEAAIABAAIABAAIABAAIAAAAIgHAAIAAAAg");
	this.shape_2.setTransform(26.65,85.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(117,117,118,0.82)").s().p("AgBAAIAAAAIADABIgDgBg");
	this.shape_3.setTransform(27.5625,82.4071);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(106,106,107,0.718)").s().p("AgBAAQAIAAgIAAg");
	this.shape_4.setTransform(26.925,82.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(123,124,126,0.992)").s().p("AgDAQIAAgBIACgUQABgIgEgCQABAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAIgBAAIAAAAIABAAIABAAQAHACgCANIAAAOQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAAAIAAABIgDAAIgDgBg");
	this.shape_5.setTransform(29.195,83.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(106,106,108,0.808)").s().p("AgEAAQAEAAAEAAIABAAIAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgBAAIgDABIgDgBg");
	this.shape_6.setTransform(28.425,82.3667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(159,159,161,0.741)").s().p("AgDAAIAHAAIAAAAIAAAAIgHABIAAgBg");
	this.shape_7.setTransform(24.2,86.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(73,73,73,0.337)").s().p("AAEAAIgHAAIAAAAIAEAAIADAAIAAAAIAAAAg");
	this.shape_8.setTransform(23.225,86.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ECECED").s().p("AAAgOQABAOgBAOIAAABQAAgOAAgPg");
	this.shape_9.setTransform(22.225,84.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F3").s().p("AAEABIgBAAIgLAAIgBgBIAAAAIASAAIAAABIgFAAg");
	this.shape_10.setTransform(22.4,86.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(148,148,149,0.647)").s().p("AAFAAIgKAAIAAAAIAKAAIABAAIAAAAIgBAAg");
	this.shape_11.setTransform(22.15,86.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(139,139,140,0.745)").s().p("AgFAAIAAAAIALAAIgGAAIgFAAg");
	this.shape_12.setTransform(24.075,82.595);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F3F4").s().p("AgIAAIARAAIAAAAIAAAAIgIAAIgJAAg");
	this.shape_13.setTransform(21.975,82.745);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(53,52,52,0.792)").s().p("AgDABIAFgBIABAAIABAAIgFABIgCAAg");
	this.shape_14.setTransform(38.925,80.48);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(52,50,50,0.843)").s().p("AgKAHIAAgBQAJgDAHgEIAAAAIAEgEIAAgBIABABIAAAAIAAABIgGAEIAAAAIgJAGIAAgBIgFACIgBAAg");
	this.shape_15.setTransform(40.275,79.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(160,161,162,0.824)").s().p("AgBAAQAGAAgGAAg");
	this.shape_16.setTransform(5.8125,81.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(129,131,132,0.824)").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_17.setTransform(9.9375,82.0333);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(129,131,133,0.831)").s().p("AADABQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAIAAAAIgBAAQAFAAACABg");
	this.shape_18.setTransform(9.25,81.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(187,188,189,0.82)").s().p("AABABQgCgBgBgBIAFABIAAAAIAAABIgBAAg");
	this.shape_19.setTransform(2.475,80.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(188,188,189,0.796)").s().p("AADABQgEAAgBgBIAFABg");
	this.shape_20.setTransform(1.8,80.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(191,191,191,0.796)").s().p("AACABQgBAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIADABIAAAAg");
	this.shape_21.setTransform(1.275,79.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(208,208,209,0.835)").s().p("AACAEQgCgDgCgEIAEAFIABAAIAAABIAAABg");
	this.shape_22.setTransform(0.425,79.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(225,225,226,0.973)").s().p("AAOAMQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAAAAIgLgLIAAAAIgPgKIAAgBIABACIABAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAIABAAQABADAEAAIAAAAIABAAQACACACABIAAAAQAHACACABIAAAAIAGABIgBAAQABAFgCAGg");
	this.shape_23.setTransform(2.45,80.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(198,198,198,0.812)").s().p("AABACIgBgCIAAAAIgBAAIAAAAIAAAAIAAgBIACACIABABg");
	this.shape_24.setTransform(0.875,79.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(157,157,158,0.741)").s().p("AADAAIgGAAIAAAAIAHAAIAAAAIgBAAg");
	this.shape_25.setTransform(19.9,86.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(108,109,110,0.533)").s().p("AADAAIgGAAIAAAAIAGAAIABAAIAAAAIgBAAg");
	this.shape_26.setTransform(19.1,86.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(57,57,57,0.29)").s().p("AADAAIgGAAIAAAAIACAAIABAAIADAAIABAAIAAAAIgBAAg");
	this.shape_27.setTransform(18.3,86.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(148,148,150,0.714)").s().p("AgCAAIAFAAIAAAAIAAAAIAAAAIgCABIgDgBg");
	this.shape_28.setTransform(17.35,86.0563);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CDCED0").s().p("AACAAIAAAAIgFAAIAAAAIAAAAQAGAAABAAg");
	this.shape_29.setTransform(17.4,85.9667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(94,94,96,0.478)").s().p("AgCAAIAFAAIgBAAIgCAAIgCAAg");
	this.shape_30.setTransform(15.8,85.9833);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(139,140,141,0.682)").s().p("AgDAAIAGAAIABAAIAAAAIgEAAIgDAAg");
	this.shape_31.setTransform(17.5,82.595);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(149,150,150,0.69)").s().p("AAVAAIAAAAIgSAAIgBAAIgYAAIAAAAQAYAAAUAAg");
	this.shape_32.setTransform(20.8,82.6667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(126,128,130,0.827)").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAIAAAAIAAAAIAAAAIgCABIgBgBg");
	this.shape_33.setTransform(12.35,82.3083);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(127,128,130,0.8)").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_34.setTransform(11.0625,82.145);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(143,145,148,0.965)").s().p("AgGAQQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAAAAAIACgTQABgIgFgCIADAAIAAgBIAAgBIAAAAIAKACIgBAAIgJAAQACAJgCAKQAAAIADADQACAAgCAAQgFAAgBAAg");
	this.shape_35.setTransform(12.975,83.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(132,133,135,0.804)").s().p("AgBAAQAGAAgGAAg");
	this.shape_36.setTransform(14.0125,82.4667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(152,153,155,0.827)").s().p("AAEABQgEAAgEgBQAEAAAEAAIABAAIAAABg");
	this.shape_37.setTransform(6.625,7.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(126,128,130,0.824)").s().p("AACABQgDAAgBgBQACAAAEABg");
	this.shape_38.setTransform(9.6,8.17);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(170,170,170,0.675)").s().p("AAAD3IAAh4IAAh5IAAh3IAAh5IAAh4IAAAAIAAB4IAAB5IAAB3IAAB5IAAB4IAABsIAAhsg");
	this.shape_39.setTransform(0.05,42.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(158,159,160,0.784)").s().p("AgBAAIAAAAIADABIgDgBg");
	this.shape_40.setTransform(5.1625,7.3071);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(165,165,166,0.792)").s().p("AAAAAIAAAAIABABIgBgBg");
	this.shape_41.setTransform(4.45,7.1571);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(180,181,181,0.808)").s().p("AAGABQgGAAgGgBIAMAAIABAAIAAABIgBAAg");
	this.shape_42.setTransform(2.825,6.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(105,106,108,0.894)").s().p("AgBABIACgBIABAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAgBABg");
	this.shape_43.setTransform(4.825,2.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F7F7F7").s().p("AgEACIAAAAIAAgCQAEgCAFgBIAAAAQgEABADAGIAAAAIgBAAQgDAAgEgCg");
	this.shape_44.setTransform(6.325,2.5875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(172,173,174,0.839)").s().p("AgCAAIAFAAIgBAAIgCAAIgCAAg");
	this.shape_45.setTransform(4.925,2.7833);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(111,112,114,0.961)").s().p("AAAAEIgEgBIgBAAIAAgBIAAAAIABAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAIACgCIAAgBIACAAIABAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAIAAABIAAABIgGAAg");
	this.shape_46.setTransform(5.2,2.4159);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(153,154,154,0.729)").s().p("AgFAAIAAAAIALAAIAAAAIgHAAIgEAAg");
	this.shape_47.setTransform(19.5,9.2333);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(127,128,130,0.808)").s().p("AgCAAIAAAAIAEAAIgEAAg");
	this.shape_48.setTransform(13.2125,8.6833);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(144,146,149,0.976)").s().p("AgEASQAIAAgCgKQgBgHAAgHIAAgMIAAgBIAAAAIABABQACABgBAGQgBAOABAOIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAABAAQAAAAAAAAQABABAAAAIAAAAIgBABIgHgCg");
	this.shape_49.setTransform(12.45,6.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999B9E").s().p("AgBABIgBgBIAFAAIgEABg");
	this.shape_50.setTransform(13.5,2.875);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#96989B").s().p("AgDACIAAgBIAGgCIAAAAIAAAAIgGADg");
	this.shape_51.setTransform(12.8,3.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(86,86,88,0.514)").s().p("AgCAAIAAAAIAEAAIABAAIAAAAIgFAAg");
	this.shape_52.setTransform(13.85,0.275);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D6D7D8").s().p("AgFACIAAgBIADgCIABAAIAHgBIAAABIAAABIAAAAQgEADgDAAIgEgBg");
	this.shape_53.setTransform(19.5,4.5558);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#ADADAF").s().p("AAEABIgIAAIAAAAIABgBIAAAAIAIAAIAAAAIgBABg");
	this.shape_54.setTransform(19.725,4.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A2A5A9").s().p("AgCAAIAFAAIgBAAIgCAAIgBAAIgBAAg");
	this.shape_55.setTransform(15.9,2.4333);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9EA1A5").s().p("AACAAIgBAAIgBAAIAAAAIgCAAIAFAAIAAAAg");
	this.shape_56.setTransform(15.175,2.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(124,126,127,0.745)").s().p("AgCAAIAEAAIABAAIAAAAIgFABIAAgBg");
	this.shape_57.setTransform(14.9,0.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(57,57,59,0.314)").s().p("AACABIgEAAIAAgBIAEAAIABAAIAAABg");
	this.shape_58.setTransform(16.575,0.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(129,130,133,0.729)").s().p("AgDAAIAHAAIAAAAIAAAAIgHABIAAgBg");
	this.shape_59.setTransform(17.25,0.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(60,61,62,0.365)").s().p("AgGAAIAAAAIANAAIAAAAIgNAAg");
	this.shape_60.setTransform(18.35,0.025);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(126,127,129,0.733)").s().p("AgEAAIAKAAIgKAAg");
	this.shape_61.setTransform(19.6,0.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A2A5A8").s().p("AABAAIgBAAIgBAAIAAAAQABAAAAAAQABAAABAAQAAAAAAAAQAAAAAAAAg");
	this.shape_62.setTransform(17.875,2.4167);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(124,124,125,0.8)").s().p("AAAAAIABAAIAAAAIAAAAIgBABIAAgBg");
	this.shape_63.setTransform(26.775,8.9281);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(138,139,140,0.808)").s().p("AgBAAIABAAIABAAIABAAIgCABIgBgBg");
	this.shape_64.setTransform(25.325,9.075);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(152,153,154,0.863)").s().p("AABABIgDAAIAAgBQAFgBgBACg");
	this.shape_65.setTransform(24.6521,9.1219);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(122,122,124,0.655)").s().p("AgCAAIAFAAIAAAAIAAAAIAAAAIgCABIgDgBg");
	this.shape_66.setTransform(24.1,9.1563);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(160,160,161,0.808)").s().p("AgBAAQAIAAgIAAg");
	this.shape_67.setTransform(23.35,9.2167);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(157,157,158,0.706)").s().p("AgEAAIAIAAIABAAIAAAAIgEAAIgFAAg");
	this.shape_68.setTransform(22.275,9.2333);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F3F3F4").s().p("AgFAAIALAAIAAAAIgBAAIgIAAIgBAAIAAABIgBgBg");
	this.shape_69.setTransform(22.175,9.1563);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#AEAFB2").s().p("AgCgBIAAAAIAHABIABAAIAAAAQgGACgFAAIADgDg");
	this.shape_70.setTransform(23.475,4.275);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D7D7D8").s().p("AACACIgHAAIAAgBIAAgBQAFgBAGAAIAAAAIgEADg");
	this.shape_71.setTransform(23.825,3.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#AEAEB0").s().p("AgFABIgBgBIANAAIgBAAIAAAAQgGAAgFACIAAgBg");
	this.shape_72.setTransform(23.825,3.7417);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9C9EA1").s().p("AgCAAIAAAAIAEAAIABAAIgFAAg");
	this.shape_73.setTransform(22.5,4.675);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(242,242,244,0.996)").s().p("AgNAAIAIAAIAAAAIATAAIgOABIgNgBg");
	this.shape_74.setTransform(21.25,5.85);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A4A6A9").s().p("AgKADQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIABAAQAGABAFgDIAAgBQgBAEAFgBIABAAIAAABIgUADIAAgBg");
	this.shape_75.setTransform(19.6,4.85);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(56,54,54,0.996)").s().p("AAEACIgHAAIgBAAIgBAAIgBAAIgEgBIAUgCIABAAIgHADg");
	this.shape_76.setTransform(20.275,5.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#868789").s().p("AgEABIABgBIAAAAQADABAFgBIAAAAIgCABIgHAAg");
	this.shape_77.setTransform(19.875,4.075);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#363434").s().p("AgKABIAAgBIABAAIAAgBIACgBIAAgBIAOgCIAAAAQAEACAAAFIAAABIgBAAIAAABIgBAAIgNACIgBAAIgBAAQgEAAAAgFg");
	this.shape_78.setTransform(21.1727,4.3273);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(138,140,142,0.769)").s().p("AgCAAIAFAAIABAAIAAAAIgBAAIgDAAIgCAAg");
	this.shape_79.setTransform(21.85,0.0333);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(106,107,108,0.584)").s().p("AADAAIgFAAIAAAAIAFAAIAAAAIAAAAg");
	this.shape_80.setTransform(22.55,0.025);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(59,59,60,0.322)").s().p("AAFAAIgKAAIAAAAIAKAAIABAAIAAAAIgBAAg");
	this.shape_81.setTransform(23.45,0.025);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(146,148,149,0.706)").s().p("AACABIgEAAIAAgBIAFAAIAAABIgBAAg");
	this.shape_82.setTransform(24.475,0.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CFD1D3").s().p("AgDAAIAFAAIABAAIAAAAIgDAAIgDAAg");
	this.shape_83.setTransform(24.5,0.1625);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(127,128,130,0.996)").s().p("AgCATIAAAAQACgFAAgIQgBgMABgMIgBAAIAAAAIABAAIABAAQACAFAAAIQgBAGABAHQACALgGAAIgBAAg");
	this.shape_84.setTransform(29.0382,6.675);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8B8C8F").s().p("AgaAKIgEAAIAAgBQAAgGgEgCIAAgBIAIAAIAAAAQAWgDAWgEIAQgCQgBADAAAHIgBAAIACAAIAAABIg7AIIgBAAgAgYAIQAHAAAFgCIAAgBIAEgFIABAAIgOAAIABABIAAABIAAABIAAACIgBAAIgDADg");
	this.shape_85.setTransform(25.35,3.65);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F1F1F1").s().p("Ag9AIQA2gHAzgHQAKgCAIAAQgNAEgPABIgBAAIgNACIgBAAIg0AGIAAABIgBAAIgVADIgBAAIgCAAIgDgBg");
	this.shape_86.setTransform(24.8,4.8417);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7E7F81").s().p("AAAABIAAgBIgIAAIALgCIABAAQAHAAgDACQgBAAAAAAQAAAAAAAAQAAAAABAAQAAABABAAIgEACIgDAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_87.setTransform(27.75,4.7475);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(81,82,83,0.373)").s().p("AACAAIAAAAIgBAAIgDAAIAFAAIgBAAg");
	this.shape_88.setTransform(26.175,0.1375);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D5D7DA").s().p("AgCAAIABAAIADAAIABAAIAAAAIgDAAIgCAAg");
	this.shape_89.setTransform(26.05,0.195);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(117,118,120,0.565)").s().p("AgCAAIAFAAIAAAAIgBAAIgCABIgCgBg");
	this.shape_90.setTransform(27,0.2063);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(107,107,108,0.592)").s().p("AgCAAIAFAAIAAAAIgBAAIgCABIgCgBg");
	this.shape_91.setTransform(28.525,0.3563);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(84,84,85,0.435)").s().p("AgCAAIAFAAIgBAAIgCAAIgCAAg");
	this.shape_92.setTransform(27.925,0.2833);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(177,179,181,0.996)").s().p("AAyAGQg5gDg8ACIgBAAQgBgFACgBIACAAIABAAIgOgBIAFAAIAAAAIAEAAIABAAIAGgBIAAAAIAIAAIACAAIABAAIAFAAIAAAAIAIgBIAAAAIAOAAIALgBIABAAIAMAAIAAAAQACABAEAAIABAAIAGAAIABAAIAKAAIABAAIAAAAIABAAIAAABQADABAEgBIAJAAQADABADgBIAAAAIABAAIABAAIABAAIABAAQABABAEAAIABAAIACAAIABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIABAAIAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAABAAIABAAIAFABIABAAIAAAAIgBAAQgFgBADAFIAAACIgMAAIgOAAg");
	this.shape_93.setTransform(21.525,0.5875);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(140,141,142,0.867)").s().p("AgBAAIAAAAIADAAIAAAAIgCABIgBgBg");
	this.shape_94.setTransform(29.65,0.52);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#A4A5A8").s().p("AgFACIAAgBIADgBIAAAAQAEgCAEABIAAAAIAAABIgDABIgBAAIgEABIgDAAg");
	this.shape_95.setTransform(31.55,3.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#AEAFB0").s().p("AADABIgHAAIAAgBIAIAAIABAAIgBAAIgBABg");
	this.shape_96.setTransform(32.15,2.425);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#898A8C").s().p("AgEABIAAgBQAGgBADABIgBAAIgIABg");
	this.shape_97.setTransform(32.15,2.3375);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CDCECF").s().p("AgEABIACgBIAAAAQACgBAEABIABAAIAAAAIgBAAIAAABIgBAAQgDgBgEACIAAgBg");
	this.shape_98.setTransform(31.775,2.925);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#DCDCDD").s().p("AACABQgEgBgCABIAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAHAAIAAAAIAAAAIgCABIgBAAg");
	this.shape_99.setTransform(32,2.65);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(85,83,84,0.976)").s().p("AgGACIABAAQADgCgEgDIABAAIAAAAIAMADIAAAAQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABIAAACIgLgDg");
	this.shape_100.setTransform(34.725,1.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(141,142,145,0.996)").s().p("AhLAOQgCgJACgJIgQABIAAABIgBAAQgUABgSAEIAAABQgGABgEADQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgBAAAAQAAgBAAAAQgBAAAAABQAigOAtgDIABAAIAOABIgBAAIgBAAQgCACABAFIAAAAQA7gCA7ADIAaAAIAAgCQgDgGAFABIABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAABgBIAAAAQAWACATAGIABAAIAAAAIgBAAQAEADgDACIgBAAQgIgBgFgCIgLABIhpAPIAAAAQgNgGgRgCIABAAQAAAAAAAAQAAAAAAAAQgBAAgBAAQgBAAgBAAIAAAAIgBAAIgOAAIgGAAQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABgBIAAABIgDAAIAAAAIgGgBIACABIgMADIgBAAIgFABIAAABIABAAIgCAAIAAAAIgHACIAAABg");
	this.shape_101.setTransform(19.8893,1.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(58,56,57,0.996)").s().p("AhFAUIgZgEIgWgDIgBgBIAAAAIAAABIgBgBQgHgBgCgFIACgCIAAgBIAGgEIABAAIAHgEIAAAAIACAAIAEgCIABAAIANgCIABAAIAAAAIABAAIABAAIADgBIAAAAIAEAAIAAAAIAPAAIAAAAIADAAIAAAAQARACAOAFIAAAAIBogPIALgCQAFADAJABIAMADIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAHACAFAEIABAAIAEAFIAAAAIgBAAQgVACgRAFIAAAAIAAgRQgPABgMACIhpAPIgEADIAAAAIgBABIgBABIAAAAIgBABIAAAAIAAABIgBAAIgDADIAAABIAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABIAAABIAAAAIgCACQgCACgDAAIgFgBg");
	this.shape_102.setTransform(24.35,3.59);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(50,49,49,0.886)").s().p("AAEFoIgBhmIAAh5IAAh4IAAh4IAAh4IAAh5IAAgLIAAAAIgJgDIAHgBIABAAQAFAKgBARQgBAeAAAeIAAB5IAAB5IAAB3IAAB4IAAB5QABAQgBAOIgBAAg");
	this.shape_103.setTransform(41.1023,42.725);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#AAACAE","#858585","#CFD0D1","#555556"],[0,0.451,0.698,1],-20.7,0,20.7,0).s().p("AAGGoIgKAAIAAAAIgIAAIgBAAIgHAAIgBAAIgEAAIgBAAIgCAAIgBAAIgCAAIAAgBIACAAQgBgBgHAAIAAABIgBAAIgIAAIgGgBIAAAAQgjgCgggHIAAAAQgWgEgSgJIAAgBIgEgEIAAAAQgDgIgFgGQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIABABQABgGgBgFIABAAIgFgBIgBAAQgCgCgHgCIACgBIAAAAIAAAAIgGgCIgBAAIgGgDIAAAAIgEgCIgBgBIgDgCIgBAAIgEgGIgBgDIAAhsIAAh5IAAh3IAAh5IAAh4IAAh5IAAAAIAAgDIADgFQAJgIALgGIAAAAQAGgEAEgGIABAAIAAgBIALgNIAAgBIABAAQABABADAAIABAAIAGAAQAHADACgBIAAAAQgDgHAEgCIAAAAIAAgBQASgEAUgBIAAAAIAAgBIAQgBQgBAKABAJIACABIAAAAIgBAAIgFAGIAAAAIgDADQACAFAHABIABAAIABAMQgBAIACAIQABAKgIgBIAIACIABAAIAAgBQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgBgBQgCgNACgPQAAgGgBgCIAVAEIAaAEQAHACADgDIABgCIAAgBIAVgDIAAAAIAOgCIABAAIAGgBIA8gIIAAAAIgDAAIABgBQABgIABgDIgQACQgYAFgVACIAAABIgIAAIAAABIAAAAIgOACQgFACgEgBIAAgBIAFgDIBogQQANgCAOAAIAAAQIAAABQARgGAWgBIABAAQAIAOANAKIAAABQAJAEAIAGIAAABIAAAAIAAAAIABACIABAAIAAAAIABABIgBAAIgIABIAKADIABAAIAAALIAAB5IAAB4IAAB4IAAB4IgBB5IABBmIAAAAQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIgBABIgDAEIAAAAQgIAFgJADIAAABIgBAAIgGABQAEABAEgCIAFgCIAAABIAAAAIgFADIAAABQgKAHgHAJIAAABIgEAJIAAAAIgCADIgCAAQgeAQgrAEQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAgBIAAgPQADgMgIgDIgBAAIgBAAIAAABIAAAAQgGgBgEABQADACAEgCIABAAQADACAAAIIgCAWIAAAAIADACIgBAAIgMABIgBAAIgEAAIgBAAIgCAAIgBAAIgBAAIgBAAIgEAAIAAABIgBAAIAAAAIgFAAIAAABIgBAAIgKAAIAAAAIgIAAIAAABIgBAAIAAAAIgBAAIgDAAIAAgBIgTAAIAAAAIABABIAAAAgAAOGmIAAgBQABgPgBgOQAAAQAAAOgAhSGCIAAABIgDAAQAFACAAAIIgCAUQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAQACABAFAAQADgBgDAAQgDgDAAgIQABgLgBgJIAKAAIABAAIgLgBIgBAAIAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAgAgWGFIAAABIAYAAIABAAQAIABAKgBIAAAAIABAAIgcgBIgQAAgAAbGFQAHABAFgCIgMAAgAgcGFIAAgBIgBAAIgHAAQADACAFgBgAA7GEQAJAAgJgBgAhEGDIAAABIACgBIgCAAgABCGDQAIABgIgCgAhhGAQAEABgEgBgAhtF/QAFABgFgBgAhwF/IABAAQgBgCgHAAIABABIAAABIACAAIACAAIACAAgAiWF4QAGAAgGAAgAAKlYQAEABAGgBIAAAAIAAgBIgNAAQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAAAgAgSlYQAGABAGgBIAAAAIgMAAgAAXlYIAAAAIAEAAIgEAAgAAklYIAAAAIAEAAIABAAQABgDgGACIAAAAIgGAAQACABAEAAgAArlZQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIgBgBIAAAAIgDABgAA8lbIABgBIgBAAIgCAAQABABAAAAQAAABAAAAQAAAAABAAQAAAAAAgBgAhNldQAKAAgKgBgABRmEIAAAAQgBALACANQAAAJgDAEIAAABIABAAQAHAAgCgLQAAgHAAgIQABgIgDgFIAAAAIgCAAgAhyljQABABAEAAIACAAQgDgBgDAAIgBAAgAiJlnIABAAIAAgBIgBAAQgDgBgGAAQAEACAFAAgAidlrQAGABgGgCgAikltQAGACgGgCgAitluIABAAIAAgBIgBAAIgMgBQAFACAHAAgAgPl7IAEABIABAAIAAAAIACAAQANACAOgCIgTAAIAGgEIAAgBIA1gHIABAAIAIAAIAAACQAAADAHgBIADgCQAAAAgBAAQAAAAgBgBQAAAAAAAAQABAAAAgBQAEgCgHAAQAPgBANgEQgIAAgKACQg0AIg1AHQABAAAAABQABAAAAAAQABAAAAAAQABAAABAAIABAAgABmmTIAAABQAEABAEgCIABAAIACgDIAAAAIAAgBIABgBIABAAIACgCIAAgBIABgBIABgBQgDgCgHACIAAABIAAAAIAAABQAAABgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAIAAABIgBAAIgCACIAAABIAAAAIgCACg");
	this.shape_104.setTransform(20.8,43.725);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(50,48,48,0.831)").s().p("AAAAAIAAAAIAAAAIABAAIAAABIgBAAIAAAAIAAgBg");
	this.shape_105.setTransform(41.1,6.505);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_6_fly, new cjs.Rectangle(0,0,41.8,86.2), null);


(lib.target_5_fly = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_134();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_5_fly, new cjs.Rectangle(0,0,41.5,77), null);


(lib.target_4_fly = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#808080","#CCCCCC","#9B9B9B","#808080"],[0,0.349,0.635,1],-26.3,0.1,26.4,0.1).s().p("ADYExIgdAAIgCAAIjBAAIgCAAIhVAAIgDAAIhyAAIAAgCIgUgDIAAgDQgPgJgKgOIAAgDQgBgKgFgHIAAgDIAAmVQAKgYAVgOIAAgBQA7gKBIAEIADAAQAkACAcgJQABAAAAgEQACgNgTgEIgDAAQgEgsAKgeIAAgDIBJAAIADAAIAQAAIADAAQAEAbAUAGQA3AVAmAiQACADAAAFQgBANAQgEIAiAAIADAAQAgAMALAhIACAAIAAGbIAAACIgCABQgJAigiAIIAAADIgDAAgAA4j4QAEAZgaACQgDAgApgFQAdgFAdACQAOACABgKQgIgRgXgEIgBgBIgCgBQgJgDgIgFIgDgBQgPgFgNgIg");
	this.shape.setTransform(26.375,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_4_fly, new cjs.Rectangle(0,0,52.8,61), null);


(lib.target_3_brokenUp = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(41,82,2,0.482)").s().p("AAAC8IAAihIAAjYQABBqAABsIgBClIAAgCg");
	this.shape.setTransform(36.68,74.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(72,123,24,0.671)").s().p("AAADYIAAjYIAAjYIAAAAIAADYIAADYIAAAAIAAABIAAgBg");
	this.shape_1.setTransform(0.05,76.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(88,160,20,0.996)").s().p("AgBC7IgDgGIAAiNIAAjYQADgGABgHIABAAIAAgJIAAgBQAEAIAAANIAAABIAADYIAAChIgGgNg");
	this.shape_2.setTransform(36.125,73.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(115,173,61,0.996)").s().p("AACC+IgDgIIgHgMIgDgCIAAgpIAAjYIAAg5QAKgYAIgbIAAgBIACAAIABAJIAAAAQACACAAAFIAAABIAAABIAAAIIgBAAQgCAIgDAFIAADZIAACNIgEgJg");
	this.shape_3.setTransform(35.05,71.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(48,51,44,0.235)").s().p("AAAACIAAABIAAABIgBAAIgBgHIAAgBIACAEIABAAIABAAQACAFgBAAIgDgDg");
	this.shape_4.setTransform(36.2224,51.7901);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(74,75,72,0.329)").s().p("AAHAOIgEgFIAAACIgBAAIgBgCQgCgKgGgLIAAgBIAFADIAAAAQAGAKAEANIAAACIgBgBg");
	this.shape_5.setTransform(35.575,50.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(108,111,105,0.482)").s().p("AAQAWIAAABIgBAAQgPgbgUgVQAZAUAQAeIAAABIAAAAIgFgEg");
	this.shape_6.setTransform(33.2,46.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(105,116,94,0.553)").s().p("AACADIgDgDIAAAAIgBgCQADACABACIABABIgBAAg");
	this.shape_7.setTransform(30.75,43.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EBEDE7").s().p("AACAHIgBAAQgBgFgEAAIgBAAIgQAAIAAgBQAGgEgCgDIAAgCIAFgEQAQgDAOgHIAAABQAGAIgEANIgGAVIgBABIAAAAQgEgOgHgBg");
	this.shape_8.setTransform(26.5262,51.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(188,211,166,0.953)").s().p("AgDgCIAAgBIAGAEIAAAAIABACIAAABIAAABQgEgDgDgEg");
	this.shape_9.setTransform(30.15,43.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(52,67,38,0.353)").s().p("AADAEIgBAAQgFgBAAgGQAHACAAAFg");
	this.shape_10.setTransform(27.0014,40.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(71,135,13,0.886)").s().p("AAAAIIAAgBIAAgOQABAGgBAJg");
	this.shape_11.setTransform(10.6571,39.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(33,56,11,0.349)").s().p("AgHAWQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAGgVAIgSIABgBIACgBIAAABIAAABQgJAUgHAXg");
	this.shape_12.setTransform(1.1333,50.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(42,72,14,0.443)").s().p("AgoApIgDABIAAgBIAAgCQAdgzAxgZIADgCIAGgCIgBAAQg0AggfAzg");
	this.shape_13.setTransform(6.2,44.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(17,36,0,0.212)").s().p("AAAAKIAAgTIABAAIAAARIAAACg");
	this.shape_14.setTransform(9.45,7.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(40,78,5,0.451)").s().p("AAAAHIAAgNIABAAIAAAMIAAABg");
	this.shape_15.setTransform(10.55,3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(23,37,10,0.227)").s().p("AAiAAIhEAAIAAAAIBEAAIABAAIAAAAIgBAAg");
	this.shape_16.setTransform(16.2,0.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#93C169").s().p("AgVFYQgFgIgEgIIgCgGIgCgEIgEgKIgDAEIAAgrIAAjYIgBgBQgOgVgCgeQAHg0AcglQAJgOACgUQAIgLACgRIAAgBQAMgeAOgdIALgTIAVgiQABAGAAAJQACgxAAgyIAAAAIAAABIAAC/IgBABQgPAHgHAQIAAABQgBAPAFAHIgBAAQgvAlgSBDQAEAqAfAZIACAAIAADZIAAAyIgUASIgDAAQgFAAgEgEg");
	this.shape_17.setTransform(15.65,54.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(182,187,180,0.769)").s().p("AAABpIAAjYIABAAIAADYIAAAHQgBgCAAgFg");
	this.shape_18.setTransform(26.5,28.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(185,190,183,0.78)").s().p("AAAAKIAAgTIABAAIAAASIAAABg");
	this.shape_19.setTransform(26.55,14.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(185,189,181,0.784)").s().p("AAAAJIAAgRIABAAIAAAPIAAACg");
	this.shape_20.setTransform(26.55,13);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(47,47,47,0.192)").s().p("AAAAKIAAgBIAAgSQACAJgCAKg");
	this.shape_21.setTransform(27.7281,7.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(173,208,142,0.996)").s().p("ABYF+IAAgNQgNgMgEgUIgEgKIgFgLIgEgGIgCgFIgBgnQAAhcAEhZIACgMQAMglAIgmQAFgYgNgNQgMgLgJgNIACAAQADAFAFACIAAAAIAEACIABAAIABAAIAAACQAVAVAOAcIABAAQAGAKADAMIABABIgBABQgIAagKAZIAAA5IAADZIAAApgAg/FuIgGANIgGAFIAAgyIAAjZIgCAAQghgZgDgrQAShCAwglIAAAAQgEgHABgPIAAgBQAHgQAPgHIABgBIAAi/IAAgBIAAgBIAAhTQAFgJAJAAIABAAQAHACgBANQgCAiADAgQACAfADAeQAJgGAGgJIAAACQgBANACgCIAAgBIABgQIABAAIAAABIAACqIgCAAQgHgFgMAAIAAgBIgLgHIgBAAQgOABAHAIIABABQgTAKABAXIAAABQADAFAAAFIABAAQAMAJAHAJQgFAIgMAIQgcAUgLAnIAAANIAAABQAaAeAdAbIABABIAADYIAAAaIgCADIgCADIgDAAIgDAAIgDABIgBADIgBADIgCAHIgQAJg");
	this.shape_22.setTransform(24.375,49.3737);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(73,129,20,0.718)").s().p("AAGABIgMAAIAAgBIAMAAIABAAIAAABIgBAAg");
	this.shape_23.setTransform(22.425,0.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(146,192,104,0.996)").s().p("AgfAXIABgCQACgRgBgTQgBgEACgBIACgBQgBgBgIgBIApAAIABAAIAMAAIABAAIALAAIACAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABIABAAIAAAVQABAOgCAGIgCABQgTAEgUAAIgZgBg");
	this.shape_24.setTransform(21.0893,2.6561);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(51,92,12,0.514)").s().p("AAFABIgKAAIAAgBIALAAIAAABIgBAAg");
	this.shape_25.setTransform(23.725,0.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(228,230,227,0.925)").s().p("AAAAQIAAgEQABgLgBgPIAAgBIAAgBQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABIAAABIAAASIAAABIAAABQABAGgCACIAAgBg");
	this.shape_26.setTransform(27.5893,7.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(214,231,201,0.996)").s().p("AgVFzIAAjZIgBAAQgdgbgZgfIAAgBIAAgNQALgmAcgWQALgIAFgIQgHgHgLgKIgBAAQAAgFgEgFIAAgBQAAgXASgKIgBAAQgHgIAOgCIABAAIALAIIAAAAQAMAAAIAFIABAAIAAipIAAgBIAAgCIAAiDQAQgJgFgfIAAgBQACABABAEIAAAAIABABQAAAPgCAMIAAADIAAACIAAABQgCAFgGABIAAATIAAABIgBAAIAAARIABAAIAAABIgBAAIAAAVIABAAIAAAOIAAABIgBAAIgBDZQAAAFACACIAAABIAAACQAAAHAGABIABAAQALAJANAIIAAABIAAABIgBAAQAJANALAKQANAOgFAXQgIAogLAkIgDAMQgEBaABBcIAAAmIgEgIIgCgDQAAgIgIgFQgDADgCAEQgDAHgBAJIgBADIgBACQgCABgDAAIgEAAQAAAFgCAEIgEAFIgEACIgCACIgBACIAAADIgDAEIgFABQgEACgDADIgEAGIgGAIIAAgagAAEAwIgEAEIAAACQABACgFAFIAAABIAPABIABAAQAFAAABAFIABAAQAHAAAEAPIAAAAIABgBIAGgVQAEgOgGgIIAAgBQgOAGgRAEg");
	this.shape_27.setTransform(24.8444,45.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(226,228,224,0.918)").s().p("AACAEQgBgEgBAAIAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQACABABAEIAAABIAAABg");
	this.shape_28.setTransform(27.3083,5.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(162,193,134,0.933)").s().p("AACAGQgFgBACgIIABgCIAAAAQACADAAAFIABAAIAAACIAAABIgBAAg");
	this.shape_29.setTransform(26.3483,4.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(88,88,88,0.353)").s().p("AAAAHIAAgBIAAgMQABAGgBAHIAAAAg");
	this.shape_30.setTransform(26.6667,3.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(213,221,208,0.914)").s().p("AADAPQAAgGgDgDIAAgCQAAgJgCgJQAEAEACAJIAAABIAAANIAAABIAAABg");
	this.shape_31.setTransform(26.25,2.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(102,167,40,0.996)").s().p("AiHHoIAAjYIAAjZIAAgBIAAgEQACgDAAgFIAAgBQAHgYAKgTIAAgBQAgg0A1gfIABgBIAAgBIAAAAQACgKgCgHIAAhCIAAjZIgBgBQgKgDAAgOIAAgBIAAgSIAAgBIAAgGQAHgHADgJIABgBIAAgBIAAgMIAAgCIAAgDQAEgQAQgEIAAgBIBFAAIABAAIATAAIABAAIAAACIgBAAIgqAAQAIABABABIgBABQgDABACAEQAAAUgCARIAAACQAjAEAdgHIACgBQADgGgBgPIAAgVIABAAIAIAHIABAAIABABIABACQACAIABALIAAABIAAABIgBABQgCAJAGACIABAAQABAEADABIABABQAAABgBAAQAAABABAAQAAABAAAAQAAAAABAAIAAABIAAABQAFAfgQAJIAACDIAAABIgBAAIAAAQIAAABQgCACABgNIAAgCQgGAJgKAGQgDgegCgfQgDggACgiQAAgNgGgCIgBAAQgJAAgGAJIAABTIAAABIAAAAQAAAygCAxQAAgJgBgGIgUAiIgLATQgPAdgNAeIAAABQgCARgIALQgBAUgJAOQgcAkgHA1QACAeAOAVIABABIAADYIAAArIgHAKIgHAMIgCABIgBADIgCAHIgBACIgDABIgBADQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAIgDABIgDAQIgKADIgDAXIg1AUIgGAKIgIAEg");
	this.shape_32.setTransform(13.7203,48.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(58,77,40,0.408)").s().p("AAEADIgIgGQAHAAACAGIAAABIgBgBg");
	this.shape_33.setTransform(25.275,0.7233);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_3_brokenUp, new cjs.Rectangle(0,0,36.8,97.9), null);


(lib.target_3_broken = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_131();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_3_broken, new cjs.Rectangle(0,0,67.5,154), null);


(lib.target_2_brokenUp = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#292C00").s().p("AgBA2IgBhrIABAAIAAgBQAEAKAAASIgBBQIgDAAg");
	this.shape.setTransform(17.5273,71.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414500").s().p("AgJBIIgFgRQgFgPgHgMQAEgDAAgNIgDhQQAAgHACgCQAeASAUAdIAAABIAAAAIgBAAIABBrIgkgGg");
	this.shape_1.setTransform(14.625,69.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E7B00").s().p("AAFABIgKAAIAAgBIAKAAIABABg");
	this.shape_2.setTransform(2.525,67.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D3D00").s().p("AAGAAIgLAAIAAAAIALAAIAAAAg");
	this.shape_3.setTransform(2.5,67.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#949400").s().p("AgHAAIABAAIABAAIALAAIAAAAIACAAIABAAIgJAAIgHAAg");
	this.shape_4.setTransform(2.45,68);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7F7F00").s().p("AAvApIgTg1QAMAMAJAOQAGANAEAQIgMgCgAgHAoQgHgKgFgMQgMghgZgXIgBgDIAAABIAAABIgBgBIAAgCIACAAIABAAQAHACAKgCQARAAAMAFQAVAJAPAPIgFAEQgPAYgMAaIgCgBg");
	this.shape_5.setTransform(7.2,72.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373D00").s().p("AAAAMIAAgXIAAAAIAAAWIAAABg");
	this.shape_6.setTransform(1.85,63.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#93A300").s().p("AAQAqIgBAAQgLgDgNAAIAAgBIgLAAIAAABIgBAAIAAgXIAAgBIAAgWIAAAAIAAghQAKgBALAAIABAAQACACAEgBIABAAQAHAAAGABIABABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgCAAQgCAmAAAnIADADg");
	this.shape_7.setTransform(4.05,63.4438);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#748000").s().p("AgDAAIAHAAIgBAAIgDABQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_8.setTransform(4.525,59.3167);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.588)").s().p("AAAgQIAAAAIAAAgIAAggg");
	this.shape_9.setTransform(0.025,61);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#626D00").s().p("AAAAQIAAAAIAAggIAAAAIAAAgIAAAAIAAAAg");
	this.shape_10.setTransform(1.85,61);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D7700").s().p("AAfA/QgWgfgngOIAAAAIgEgEQABgmACgmIACAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQAiAFAYAQIABAAQgBACAAAIIACBQQAAANgEADIAAgBg");
	this.shape_11.setTransform(8.8,65.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(37,37,37,0.525)").s().p("AAAAGIAAAAIAAgKQABADAAAHg");
	this.shape_12.setTransform(32.975,58.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(32,32,32,0.467)").s().p("AAAAIIAAgQIAAAAIAAABQABAJgBAGg");
	this.shape_13.setTransform(32.9563,60.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(32,32,32,0.463)").s().p("AAAAFIAAgJIAAAAIAAABQABAEgBAEg");
	this.shape_14.setTransform(8.9333,12.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#787878").s().p("AgCAAIAGAAIgGAAg");
	this.shape_15.setTransform(12.4,1.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7E7E7").s().p("AgDAAIAFAAIABAAIABAAIAAAAIgEABIgDgBg");
	this.shape_16.setTransform(16.55,1.5071);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#919191").s().p("AADAAIgEAAIgCAAIAAAAIAGAAIABAAIAAAAIgBAAg");
	this.shape_17.setTransform(16.375,1.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.541)").s().p("AgEAAIAIAAIAAAAIAAAAIAAAAIgEAAIgEAAg");
	this.shape_18.setTransform(16.95,0.045);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#575757").s().p("AAFAAIgIAAIgBAAIAAAAIAKAAIAAAAg");
	this.shape_19.setTransform(17.35,1.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(47,47,47,0.29)").s().p("AAEAAIgIAAIAAAAIAIAAIABAAIAAAAg");
	this.shape_20.setTransform(17.925,0.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#616161").s().p("AgDAAIAHAAIAAABIgBAAIgCAAQgCAAgCgBg");
	this.shape_21.setTransform(19.475,1.53);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,78,0,0.996)").s().p("AB0FVIgSAAIgaAAIgCAAQgBgTgDgSQgPhGgrgqQgggegzgNQgcgHggAFIAAgNIAAgBQALg1AeghQAXgZAEgsQAHhMAGhPQAFhLAAhLIAAgGQgCgUAEgSIAQgEIAAAAIAWAJIABAAIARgIIABAAIATAKIABAAQAMgEAKgGIABAAIAXAFIAAAAQAEAZgGAWQgCAIABALIAKCgIAJCPQAUAoAYAmIAAAAQgDAmgBAnQgBAngEAlIgBAAIgBABQgQABARAAIABAAQACAGAAANIgGB8g");
	this.shape_22.setTransform(15.125,43.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CBCBCB").s().p("AAQAVIgSgKIgBAAIgSAIIgBAAQgMgEgJgFIgBAAQgNAJgKgIQADgPAGgLIAAgCIAPgDIABAAIAHAAIABAAIAeAAIABAAIABAAIABAAQACACAFgBIAAgBIAJAAIABAAIAKAAIABAAQADACAEAAIABAAIABAAQAMAAAKADIAAABQAIAJADAQIgBAAQgDAEgGABIgBAAQgKgDgMgBIAAABQgJAEgLAEIAAAAg");
	this.shape_23.setTransform(16.35,3.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(2,15,0,0.996)").s().p("ACXGqIgagXIgHgHIgIgLIgBgGIAGh9QAAgMgCgHIgBAAQgRAAAQgBIABgBIABAAQAEglABgmQABgoADglIAAgBQgYgmgUgoIgJiPIgKifQgBgLACgJQAGgWgEgYIAAgBIgXgFIgBAAQgKAGgMAFIgBAAIgSgLIgBAAIgSAIIgBAAIgWgJIAAAAIgQAFQgEASACAUIAAAFQAABLgFBLQgGBPgHBNQgEAsgXAZQgeAhgLA0IAAABIAAANQAggEAcAHQAzAMAhAfQAqApAPBHQADASABATIgNAAIgfgFIABhSQAAgSgFgJIAAgBQgTgdgfgSIgBgBQgYgQgjgFIgBAAQgFgCgHABIgIgBIgBAAQgMgBgJACIgBAAIAAAgIAAABIAAAXIABAAIAAAXIAAAAIALAAIABAAQANABALADIABAAQAoAOAWAfIABABQAHAMAFAPIAFARIgFgBQgEgQgHgNQgIgQgMgMIgBgBIAAABQgQgPgVgJQgMgFgRAAIgBAAIgBAAIgBgBIgLAAIAAABIgBAAIgCAAIgBAAIgCAAIAAABIgNgKIAAgsIAAghIAAgBIAAgWQANg+AkgmQAPgQADgcQAIhMAGhQQAFhDADhGQABgEgBgGIAAAAIAAgCQgGgeAHgfIgBAAQgGgCgEgEQAEgdAPgSQADgEAHgBIAOgCIAqAAIAAAAQADACAFgBIABAAIAJAAIABAAQAfgBASALQAEACADAFQAGAPAEATIgJAGIgBABQAGAdgHAaQgCAHABAKIAKCfIAJCQQAdA2AhA1QAJAOABAXIAAALIABAAIAAACIAAABIgBAAIAAAQIAAABIAACqIAABaIgNgJgAgEmEIASAKIABAAQAKgDAJgFIAAgBQANABAJAEIABAAQAGgCADgEIABAAQgDgQgIgKIAAgBQgJgDgNAAIAAAAIAAgBIgJAAIAAAAIgLAAIAAgBIgLAAIgBAAIgHAAIgBAAIgeAAIgBAAIgHAAIAAABIgBAAIgPADIAAABQgGALgDAQQAKAIAOgJIAAAAQAKAGALADIABAAIASgIg");
	this.shape_24.setTransform(16.525,43.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_2_brokenUp, new cjs.Rectangle(0,0,33.1,87), null);


(lib.target_2_brokenDown = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(32,32,32,0.467)").s().p("AgGAAIANAAIAAAAIgBAAIgDABIgJgBg");
	this.shape.setTransform(8.75,53.2563);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.537)").s().p("AgDAAIAHAAIAAAAIgBAAIgGAAg");
	this.shape_1.setTransform(12.4,53.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(1,1,1,0.427)").s().p("AAEABIgIAAIAAgBIAIAAIABAAIAAABg");
	this.shape_2.setTransform(18.725,53.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.6)").s().p("AADABIgGAAIAAgBIAHAAIAAABIgBAAg");
	this.shape_3.setTransform(19.625,53.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(33,33,33,0.463)").s().p("AgGAAIANAAIAAAAIgCAAIgEABIgHgBg");
	this.shape_4.setTransform(15.425,53.4167);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(37,37,37,0.227)").s().p("AAEABIgIAAIAAgBIAIAAIABAAIAAABg");
	this.shape_5.setTransform(17.725,53.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.565)").s().p("AADABIgGAAIAAgBIAGAAIABAAIAAABIgBAAg");
	this.shape_6.setTransform(23.6,53.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(22,22,22,0.361)").s().p("AAAAFIAAAAIAAgJQABADAAAGIAAAAIgBAAg");
	this.shape_7.setTransform(33.08,43.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(38,38,38,0.584)").s().p("AAAAEIAAgHIABAAIAAAGIAAABg");
	this.shape_8.setTransform(33.075,44.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(35,35,35,0.204)").s().p("AAAALIAAgBIAAgUQABAKgBALg");
	this.shape_9.setTransform(32.995,35.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(48,48,48,0.694)").s().p("AAAAFIAAgJIAAAAIAAAJg");
	this.shape_10.setTransform(32.9,27.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(17,17,17,0.286)").s().p("AAAgGIAAAAIAAANIAAgNg");
	this.shape_11.setTransform(0.175,41.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(29,29,29,0.459)").s().p("AAAAOIAAAAIAAgbIAAAAIAAAbIAAAAg");
	this.shape_12.setTransform(0.175,39.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(42,42,42,0.651)").s().p("AAAAJIAAAAIAAgRQABAIgBAJIAAAAg");
	this.shape_13.setTransform(0.195,37.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6F7B00").s().p("AAAAHIAAgNIAAAAIAAABQABAHgBAFg");
	this.shape_14.setTransform(1.595,34.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3D4400").s().p("AAAAHIAAgBIAAgMIAAAAIAAAHIAAABIAAAEIAAABg");
	this.shape_15.setTransform(1.575,32.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BCD100").s().p("AAAAFIAAgBIAAgGIAAgBIAAgBQACAEgCAFg");
	this.shape_16.setTransform(1.6781,32.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(29,29,29,0.141)").s().p("AAAAGIAAgLIABAAIAAAKIAAABg");
	this.shape_17.setTransform(0.075,28.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(47,47,47,0.224)").s().p("AAAALIAAgBIAAgTIABAAIAAATIAAABIgBAAg");
	this.shape_18.setTransform(0.075,27.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(6,6,6,0.471)").s().p("AAAAPIAAgdQABANAAAPIAAABg");
	this.shape_19.setTransform(0.08,23.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#414100").s().p("AAAAIIAAgQIAAAAIAAAMIAAACIAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIAAgBg");
	this.shape_20.setTransform(1.25,25.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7D8800").s().p("AgxA8QACgGgBgHIAAgBIAAgBIAAgFIABAAQABgGgCgEIAAgBIAAgeQBBgRAfgyIAAAAIABAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIACBXIABABIAAAAQgaAWglAOIgZAIIgEABQgIAAABgJg");
	this.shape_21.setTransform(6.542,29.056);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#949400").s().p("AAAAKIAAgMIAAgCIAAgGQABAJgBALIAAABIAAgBg");
	this.shape_22.setTransform(1.295,25.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#909000").s().p("AAABjIAAgJQABAGgBAEgAAAAbIAAgCQABAHAAAIIAAACQgBgHAAgIgAAAhhIAAAAIAAgCIAAADQABAFgBAGIAAACQgBgGABgIg");
	this.shape_23.setTransform(1.4688,10.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7F7F00").s().p("Ag8CHIAAgPQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIAAAAIAAgBQABgMgBgJQgBggABgfQABhUgBhTIABABQgBAIACAHIAAgCQABgGgBgGQAZAYAMAjQAEALAHAKIADABQAMgaAPgZIAFgEIABAAIASA3IANACQADASgBAXQgCAugSAfQggA2hEAPIAAgBgAg6A9IAAABQACgEgCgGIAAAJgAg5gKQgBAJACAGIAAgCQAAgIgBgGg");
	this.shape_24.setTransform(7.2611,14.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#414500").s().p("AgbBtIAAAAIgChYQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAAAIAAgBQAdgngFhGIgCgPIAkAHIAAA9IAABUIAAABQgXAnghAag");
	this.shape_25.setTransform(14.275,20.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#292C00").s().p("AgBgLIAAg9IADABIgBBXIgBA1QAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAhUg");
	this.shape_26.setTransform(17.475,17.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(37,37,37,0.545)").s().p("AAAARIAAgBIAAggIAAAAIAAAgIAAABIAAAAg");
	this.shape_27.setTransform(32.9,25.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(21,21,21,0.318)").s().p("AAAASIAAgBIAAgiQABAQgBASIAAABIAAAAg");
	this.shape_28.setTransform(32.9063,21.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(2,15,0,0.996)").s().p("ABBEMIgfAAIAAgBIgJAAIgBAAIgIAAIgBAAIgKAAIAAAAIgJAAIAAgBIgOAAIgBAAIgTAAIAAgBIgIAAIgBAAIgYAAIAAgBIgOAAIgBAAQgwgDgWgdIAAgBQgIghAAgqIAAAAIAAgOIAAAAIAAgcIAAgBQABgKgBgIIAAgBIAAhCIAAgBIAAgLIAAgBIAAgTIAAgCIAAgHIAAgBQABgQgDgOIAAgBIAAinIAAgCIAAg1IANAKQACBTgCBUQgBAfABAgIAAAHIAAABIgBAAIAAARIAAABIAAAPIAAABQBGgPAfg2QASgfADguQAAgXgDgTIAFABIACAPQAGBGgeAoIAAABIAAABQgfAxhCARIAAAfIAAAAIAAABIAAABIgBAAIAAAOIAAABIAAANIAAAAQgBAMAMgDIAZgJQAlgNAbgXQAjgaAVgmIAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIACg1IAAhYIAfAEIANAAQAAAUgDAVQgKBKgkAxQgQAYgXAVQgsAohIANIABBCQAAAiAIAaQAKAKAQAGQAFADAFAAQA3AFA4ABQAqACAmgEIAJgBIgCgBQgCgCAAgJIAHiiIAHijIACgmIABAGIAIALIAHAIIAaAXIANAJIAAACIAAAjIAAABIAAAfIAAACIABAKIAAAAIAAA6IAAABIAAAWIAAABIAAAKIAAAAIABARIAAAAIAAAiIAAACIAAAKIAAAAIAAAIIABAAIABAOQACALgDAKQgRA5hKgBIgBAAIgHAAIAAABg");
	this.shape_29.setTransform(16.65,26.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,78,0,0.996)").s().p("AAcDPQg4gCg3gFQgFAAgFgCQgQgHgKgKQgIgaAAghIgBhDQBIgNAsgoQAWgUARgYQAkgyAKhJQADgVAAgUIACAAIAaAAIATAAIAGAjIgCAlIgHCjIgHCiQAAAJACACIACABIgJABQgdADggAAIgTAAg");
	this.shape_30.setTransform(14.45,31.4611);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_2_brokenDown, new cjs.Rectangle(0,0,33.3,53.6), null);


(lib.target_2_broken = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_128();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_2_broken, new cjs.Rectangle(0,0,33.5,120.5), null);


(lib.target_1_brokenUp = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_125();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_1_brokenUp, new cjs.Rectangle(0,0,36.5,85), null);


(lib.target_1_brokenDown = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_124();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_1_brokenDown, new cjs.Rectangle(0,0,36.5,57.5), null);


(lib.target_1_broken = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_126();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_1_broken, new cjs.Rectangle(0,0,36.5,124.5), null);


(lib.sheriff_star = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_107();
	this.instance.setTransform(-59,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sheriff_star, new cjs.Rectangle(-59,-57,119,113), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_96();
	this.instance.setTransform(-63.75,-25.4,0.1808,0.1808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-63.7,-25.4,129.2,44.3), null);


(lib.hand_gun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_93();
	this.instance.setTransform(-42.4,-65.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_94();
	this.instance_1.setTransform(-42.4,-53,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_95();
	this.instance_2.setTransform(-42.4,-65.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB508").s().p("AAuD5IgBAHIgPgQIgjgTIADgaIgNAIIgQArIg+mjIBFD+IADleIAaFzIAclPIgCFKIAZjQIgFCwIArj7IgkHIg");
	this.shape.setTransform(-10.175,-68.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-95.5,84.5,169.5);


(lib.clock = function(mode,startPosition,loop,reversed) {
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
	this.timer = new cjs.Text("", "normal 500 30px 'Rubik'");
	this.timer.name = "timer";
	this.timer.textAlign = "center";
	this.timer.lineHeight = 38;
	this.timer.lineWidth = 6;
	this.timer.parent = this;
	this.timer.setTransform(0.1567,-3.373,0.7384,0.7384);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.timer);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(123,61,20,0.49)").s().p("AAAAHIAAgCIAAgLQACAEgBAHIAAACIgBAAg");
	this.shape.setTransform(-24.8875,9.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEA26F").s().p("AAAAPIAAgdIABAAIAAAcIAAABg");
	this.shape_1.setTransform(-21.675,7.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(118,59,19,0.471)").s().p("AAFABIgLAAIAAgBIALAAIACAAIAAABIgCAAg");
	this.shape_2.setTransform(2.4,32.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8E8E8").s().p("AhgDIQhogxgSiIIAAgBIAAgcIAAgCIAAgIQAXiDBrgvQAhgPAwgBIAOAAIACAAQATAAAPADQB7AeAqBvQAQArgHA3QgNBjhAAzQgqAihDAJQgUACgSAAQgxAAgogTg");
	this.shape_3.setTransform(0.3315,7.237);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F49251").s().p("AAHABIgPAAIAAgBIAQAAIAAABIgBAAg");
	this.shape_4.setTransform(0.35,-14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(179,90,30,0.71)").s().p("AAWAQIgBgfIABAAIAAAdIAAACgAgVAQIAAgCIAAgdQADAOgCARg");
	this.shape_5.setTransform(0.35,-19.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(109,54,18,0.435)").s().p("AAHABIgPAAIAAgBIAQAAIAAABIgBAAg");
	this.shape_6.setTransform(0.35,-31.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(252,126,42,0.988)").s().p("AAMFFIglAAQg+gKgugcQhgg5gWiDIAAgCQABgIgDgEIAAgBIAAgcQAQh+BUg7IABgBQgFgQgSgEIgBgBQgEgGAEgFIAAgCQAPgTAbAAIACAAQAEAJgFAIIgBACQAGAFAEAIIABAAQAogTA8gJIACAAIABAAQACgTgDgOIgBgBQgbgMgLgdIAAgCIAAgYQALghAkgKIAAgBIAZAAIABAAQAwALAAA5IAAACQgLAdgcAMIAAABIgBAAIAAAhIABAAQA7AHArAVIAAgBQAKgNgDgQIAAgCQAkgDAKAgIAAACQgIACgHAEIgCABIgHANIgBAAQBSA7AQB5QABAHADADIAAAlIAAACQgLA/gbAuQg5BgiEAWIgCAAIgMAAIAAABIgBAAgAjcBXIABAAQATCHBnAyQA3AaBIgKQBDgIArgiQBAgzANhkQAHg3gQgqQgqhwh8gdQgPgEgTAAIAAgBIgQgBIAAACQgwACghAOQhrAwgXCBIAAAJIAAABIgBAAIAAAfgAAejpIAAgBQAMgGAFgOIAAAAIAAgXIAAgBQgIgagdgGIgCAAIAAgBIgQgBIAAACIgBAAQgcAGgKAYIAAAWIAAACQAGANAKAJIABAAQANgFAPAAQAPAAARAGg");
	this.shape_7.setTransform(0.375,0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.timer}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock, new cjs.Rectangle(-25,-32.4,50.8,65), null);


(lib.aim = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("AAEgHIAAghIAxAAIAiAAQgCAWgJAQQgJAOgNAMQgOALgUAFIgQACIAAgxgAgqAfQgPgKgLgOQgLgMgFgUIgCgPIAxAAIAhAAIAAAvIAAAjQgWgDgQgIg");
	this.shape.setTransform(-2.575,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.502)").s().p("AAAgDIAAAAIAAAHIAAgHg");
	this.shape_1.setTransform(-28.775,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.988)").s().p("AgDEFIAAgxIAAghQgYgBgTgFQgTgGgQgIQgQgJgOgKQgNgMgMgNQgLgNgJgQQgIgQgGgTQgGgTgBgYIAAgDIgxAAIgiAAIAAgBIAAgHIAxAAIAiAAQABgYAFgTQAGgTAIgQQAJgQALgNQALgOAOgLQANgLAQgJQAQgJATgGQASgFAYgBIADgBIAAgwIAAgjIAHAAIABAAIAAAxIAAAiQAXACAUAEQATAGAQAJQAQAIAOALQANALALANQAMANAIARQAJAPAGATQAGATABAXIAAAEIAxAAIAhAAIAAAHIgxABIghAAQgBAXgFATQgFAUgJAQQgIAQgLAOQgLANgNALQgOALgQAJQgQAJgSAFQgTAHgXABIgFAAIAAAxIAAAhIgIAAgAgDBYIAIAAIAAAhIAAAxQARAAAPgDQAUgFARgIQAQgIAOgLQAOgKALgOQAMgNAIgQQAJgPAGgUQAGgTAAgXIghAAIgxAAIAAgBIAAgHIAhAAIAxAAQAAgRgDgPQgFgUgIgRQgIgQgLgOQgLgOgNgLQgNgMgQgIQgQgJgTgGQgTgFgXgBIAAAiIAAAwIAPADQAUAFAOAKQAOAMAIAPQAKAPACAXIgiAAIgxAAIAAghIAAgxIgBAAIgHAAIAAAgIAAAyIghAAIgyAAIAAAIIghAAIgxAAQAAARAEAOQAEAUAIARQAIARALAOQAKAOAOALQANALAQAJQAPAJATAFQATAHAYAAIAAghIAAgxgAgfilQgUAEgRAIQgRAHgOALQgOALgMANQgLANgJAPQgKAQgFASQgGATgCAXIAAAEIAiAAIAwAAIADgPQAFgTAKgOQALgOAQgJQAPgJAXgDIAAghIAAgxQgPABgNACg");
	this.shape_2.setTransform(-2.6125,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aim, new cjs.Rectangle(-28.8,-27.4,52.3,52.2), null);


(lib.zoom_pic = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12,1,1).p("AhKsBICUAAQBHAAAyAyQAyAyAABGIAASvQAABGgyAyQgyAyhHAAIiUAAQhGAAgygyQgygyAAhGIAAyvQAAhGAygyQAygyBGAAg");
	this.shape.setTransform(72.2828,71.6408,0.743,0.8957,-43.4815);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhJMCQhHAAgygyQgygyAAhGIAAyuQAAhHAygyQAygyBHAAICTAAQBHAAAyAyQAyAyAABHIAASuQAABGgyAyQgyAyhHAAg");
	this.shape_1.setTransform(72.2828,71.6408,0.743,0.8957,-43.4815);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5.2,1,1).p("Aj4jOIAlglIHMHBIgkAmg");
	this.shape_2.setTransform(13.85,10.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(12,1,1).p("AKlg6QAZEXi2DYQi0DYkZAYQg8AGg7gFQitgNiRhkQgdgUgdgYQjYi1gYkZQgZkXC1jZQC1jXEZgYQEXgZDYC1QDYC1AYEZg");
	this.shape_3.setTransform(-59.1204,-60.4751);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Aj4jOIAlglIHMHBIgkAmg");
	this.shape_4.setTransform(13.85,10.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.zoom_pic, new cjs.Rectangle(-133.1,-134.5,266.29999999999995,269.1), null);


(lib.sound = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(19,17,18,0.533)").s().p("AAABaIAAhBIAAhAIAAhBQABAggBAhIAABAIAABBQABAIgBAHIAAgPg");
	this.shape.setTransform(-17.1167,-0.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(21,19,19,0.561)").s().p("AAAC7IAAhBIAAhBIAAhBIAAhBIAAhBIAAhAIAAAAIAABAIAABBIAABBIAABBIAABBIAABBIAAARIAAgRg");
	this.shape_1.setTransform(-1,-0.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(34,30,31,0.996)").s().p("AAtC8IglgcIglgcIgmgbIAAgPIAAhBIAAhAIAAhBIAmgbIAlgdIAlgbIAXgQIAAABIgBAAIAABAIAABBIAABBIAABBIAABBIAABBIABARIAAAAIgXgQg");
	this.shape_2.setTransform(-7.725,-0.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(35,31,32,0.996)").s().p("AgfBpIAAgPIAAhBIAAhAIAAhBIA/AAIAABBIAABAIAABBIAAAPIg/AAg");
	this.shape_3.setTransform(-20.325,-0.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(20,17,18,0.545)").s().p("AAAACIAAgDIAAAAIAAADg");
	this.shape_4.setTransform(13.725,16.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(18,16,16,0.494)").s().p("AAAADIAAgFIAAAFg");
	this.shape_5.setTransform(3.7125,-0.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(16,14,15,0.443)").s().p("AAAABIAAgCIAAAAIAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_6.setTransform(20.7333,0.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(14,12,13,0.455)").s().p("AAAACIAAgBIAAgCIAAAAIAAACIAAABg");
	this.shape_7.setTransform(22.975,0.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(15,12,13,0.455)").s().p("AAAABIAAgCIAAAAIAAACIAAAAg");
	this.shape_8.setTransform(22.975,-1.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(18,16,17,0.498)").s().p("AAABsIAAAAIAAADIAAABIAAgEgAAAhuIAAAAIAAACIAAgCg");
	this.shape_9.setTransform(7.675,-0.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(20,17,18,0.537)").s().p("AAAACIAAgDIAAAAIAAACIAAABg");
	this.shape_10.setTransform(13.725,-17.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(34,30,31,0.992)").s().p("AASCzIAAgBIgCgCIgCgFIAAgDIAAgBIAAgBIACgDIAAAAQARgQANgUQANgTAJgXQAKgXAEgdQACgLAAgMQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgBIAAAAIAAgMIAAAAIAAgDQAAgNgCgLQgEgcgKgXQgJgYgNgTQgNgTgRgQIAAgBIgCgEIAAgBIAAgDIAAAAIAAgBIACgEIAAAAIACgCIAAAAQAIgFAHAGQARAQANATQANAUAKAWQAKAXAFAaQAEATABAVIAAADIABAAIAAAQIgBAAIAAADIAAAAQgBAXgEAUQgGAagKAWQgKAXgOATQgNATgQAQIgBAAQgDACgDAAQgEAAgDgCgAgoB3IgBgBIgCgCIgCgFIAAAAIAAgDIAAgBIACgFQAJgIAHgKQANgSAIgZQAEgNABgOQACgggHgYQgJgZgOgTQgGgIgIgIIgCgGIAAgDIAAgBIAEgGQAGgEAGAEIAHAFQAQARAKAVQALAWAEAcQAEAWgDAXQgDAcgLAWQgJAWgPASIgKAIQgDADgDAAQgDAAgDgCgAhlA6IgBAAIgCgCIgCgFIAAgBIAAgDIAAgBIADgEIAAAAIAGgIQAKgMACgTIAAgFQgDgagPgNIAAgBIgDgFIAAAAIAAgDIAAgBIAAgBIACgDIACgCIABgBQAHgEAGAEIABAAQAQAQAGAaIACANIAAAHIAAAAQgDAbgMARQgFAGgFADQgDADgEAAQgDAAgDgCg");
	this.shape_11.setTransform(12.325,-0.6398);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4,1,1).p("AA2hNIg2BNIA2BOAg0hNIA0BNIg0BO");
	this.shape_12.setTransform(10.8,-0.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_1},{t:this.shape_2},{t:this.shape},{t:this.shape_12}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-21,46.5,40.8);


(lib.pause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnaylIO1AAQB8AABYBYQBYBYAAB8IAAbzQAAB8hYBYQhYBYh8AAIu1AAQh8AAhYhYQhYhYAAh8IAA7zQAAh8BYhYQBYhYB8AAg");
	this.shape.setTransform(6.7675,0.7043,0.0577,0.1007);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnaSmQh8AAhYhYQhYhYAAh8IAA7zQAAh8BYhYQBYhYB8AAIO1AAQB8AABYBYQBYBYAAB8IAAbzQAAB8hYBYQhYBYh8AAg");
	this.shape_1.setTransform(6.7675,0.7043,0.0577,0.1007);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AnaylIO1AAQB8AABYBYQBYBYAAB8IAAbzQAAB8hYBYQhYBYh8AAIu1AAQh8AAhYhYQhYhYAAh8IAA7zQAAh8BYhYQBYhYB8AAg");
	this.shape_2.setTransform(-6.3825,0.7043,0.0577,0.1007);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AnaSmQh8AAhYhYQhYhYAAh8IAA7zQAAh8BYhYQBYhYB8AAIO1AAQB8AABYBYQBYBYAAB8IAAbzQAAB8hYBYQhYBYh8AAg");
	this.shape_3.setTransform(-6.3825,0.7043,0.0577,0.1007);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AnaSmQh8AAhYhYQhYhYAAh8IAA7zQAAh8BYhYQBYhYB8AAIO1AAQB8AABYBYQBYBYAAB8IAAbzQAAB8hYBYQhYBYh8AAg");
	this.shape_4.setTransform(6.5237,-0.0957,0.0577,0.1008);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AnaSmQh8AAhYhYQhYhYAAh8IAA7zQAAh8BYhYQBYhYB8AAIO1AAQB8AABYBYQBYBYAAB8IAAbzQAAB8hYBYQhYBYh8AAg");
	this.shape_5.setTransform(-6.6263,-0.0957,0.0577,0.1008);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-12.3,24.1,26);


(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.btns = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// Layer_1
	this.text = new cjs.Text("כניסה", "normal 500 65px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 80;
	this.text.lineWidth = 333;
	this.text.parent = this;
	this.text.setTransform(0.2321,-40.1862,1.0841,1.0841);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AyHp1MAkPAAAQDPAACSCTQCTCSAADPIAAEDQAADPiTCTQiSCSjPAAMgkPAAAQjPAAiSiSQiTiTAAjPIAAkDQAAjPCTiSQCSiTDPAAg");
	this.shape.setTransform(0.1771,-0.2076,1.0841,1.0841);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB7D31").s().p("AyHJ2QjPAAiSiTQiTiSAAjPIAAkDQAAjPCTiSQCSiTDPAAMAkPAAAQDPAACSCTQCTCSAADPIAAEDQAADPiTCSQiSCTjPAAg");
	this.shape_1.setTransform(0.1771,-0.2076,1.0841,1.0841);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("Ay5p1MAlzAAAQC6AACECEQCECDAAC7IAAFnQAAC7iECDQiECEi6AAMglzAAAQi6AAiEiEQiEiDAAi7IAAlnQAAi7CEiDQCEiEC6AAg");
	this.shape_2.setTransform(0.5279,-14.5082,1.1146,0.7832);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB7D31").s().p("Ay5J2Qi6AAiEiEQiEiEAAi6IAAlnQAAi6CEiFQCEiDC6AAMAlzAAAQC6AACECDQCECFAAC6IAAFnQAAC6iECEQiECEi6AAg");
	this.shape_3.setTransform(0.5279,-14.5082,1.1146,0.7832);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("AyHp1MAkPAAAQDPAACSCTQCTCSAADPIAAEDQAADPiTCTQiSCSjPAAMgkPAAAQjPAAiSiSQiTiTAAjPIAAkDQAAjPCTiSQCSiTDPAAg");
	this.shape_4.setTransform(0.5099,-14.4825,0.3968,0.3968);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A94400").s().p("AyHJ2QjPAAiSiTQiTiSAAjPIAAkDQAAjPCTiSQCSiTDPAAMAkPAAAQDPAACSCTQCTCSAADPIAAEDQAADPiTCSQiSCTjPAAg");
	this.shape_5.setTransform(0.4761,-14.5125,1.0443,1.0443);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1.0841,scaleY:1.0841,x:0.1771,y:-0.2076}},{t:this.shape,p:{scaleX:1.0841,scaleY:1.0841,x:0.1771,y:-0.2076}},{t:this.text,p:{scaleX:1.0841,scaleY:1.0841,x:0.2321,y:-40.1862,text:"כניסה",lineWidth:333}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{scaleX:0.6913,scaleY:0.6913,x:0.4961,y:-38.5222,text:"!אני רוצה לעזור",lineWidth:423}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.3968,scaleY:0.3968,x:0.5099,y:-14.4825}},{t:this.shape,p:{scaleX:0.3968,scaleY:0.3968,x:0.5099,y:-14.4825}},{t:this.text,p:{scaleX:0.3968,scaleY:0.3968,x:0.5485,y:-27.2723,text:"דלג",lineWidth:333}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.3968,scaleY:0.3968,x:0.5099,y:-14.4825}},{t:this.shape_4,p:{scaleX:0.3968,scaleY:0.3968,x:0.5099,y:-14.4825}},{t:this.text,p:{scaleX:0.3968,scaleY:0.3968,x:0.5485,y:-27.2723,text:"התחל",lineWidth:333}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.3642,scaleY:0.3642,x:0.6091,y:-14.4441}},{t:this.shape_4,p:{scaleX:0.3642,scaleY:0.3642,x:0.6091,y:-14.4441}},{t:this.text,p:{scaleX:0.3642,scaleY:0.3642,x:0.7438,y:-26.2156,text:"המשך",lineWidth:333}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1.0443,scaleY:1.0443,x:0.4761,y:-14.5125}},{t:this.shape_4,p:{scaleX:1.0443,scaleY:1.0443,x:0.4761,y:-14.5125}},{t:this.text,p:{scaleX:1.0443,scaleY:1.0443,x:0.6638,y:-48.0919,text:"שחק שוב",lineWidth:333}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4,p:{scaleX:1.0443,scaleY:1.0443,x:0.4761,y:-14.5125}},{t:this.text,p:{scaleX:1.0443,scaleY:1.0443,x:0.6638,y:-48.0919,text:"סיום",lineWidth:333}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.9,-81.8,374.9,152.39999999999998);


(lib.arrow_right = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AhDhdICHBdIiHBe");
	this.shape.setTransform(1.55,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(172,75,40,0.988)").s().p("AiCCDQg2g2AAhNQAAhMA2g2QA2g2BMAAQBNAAA2A2QA2A2AABMQAABNg2A2Qg2A2hNAAQhMAAg2g2gAgzBeICHheIiHhdICHBdg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(216,216,216,0.988)").s().p("AiCCDQg2g2AAhNQAAhMA2g2QA2g2BMAAQBNAAA2A2QA2A2AABMQAABNg2A2Qg2A2hNAAQhMAAg2g2gAgzBeICHheIiHhdICHBdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-18.5,37,37);


(lib.arrow_left = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABEhdIiHBdICHBe");
	this.shape.setTransform(-1.55,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(172,75,40,0.988)").s().p("AiCCDQg2g2AAhNQAAhMA2g2QA2g2BMAAQBNAAA2A2QA2A2AABMQAABNg2A2Qg2A2hNAAQhMAAg2g2gAhTAAICHBeIiHheICHhdIiHBdg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(216,216,216,0.988)").s().p("AiCCDQg2g2AAhNQAAhMA2g2QA2g2BMAAQBNAAA2A2QA2A2AABMQAABNg2A2Qg2A2hNAAQhMAAg2g2gAhTAAICHBeIiHheICHhdIiHBdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-18.5,37,37);


(lib.mission_screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.toHelp_btn = new lib.btns();
	this.toHelp_btn.name = "toHelp_btn";
	this.toHelp_btn.setTransform(828.95,624,0.7198,0.7198,0,0,0,0.1,0.1);

	this.text = new cjs.Text("!יש מבוקש שמאיים להגיע ולתקוף את הכפר השריף לא יוכל להתמודד איתו לבד והוא זקוק ...לעזרה\n\nלשם כך השריף פתח אזור ייעודי לאימונים ליד הצריף הישן. הוא חושב שאתם הכי מתאימים ,למשימה הזאת\n?האם אתם מוכנים להצטרף אליו", "normal 500 40px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 50;
	this.text.lineWidth = 737;
	this.text.parent = this;
	this.text.setTransform(1190.2,92.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance = new lib.wanted();
	this.instance.setTransform(225.6,364.95,3.1362,3.1362,-8.7391,0,0,-0.9,0.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(30,17,7,0.271)").s().p("AgFAMIABgXIAKAAIAAAXIgLAAg");
	this.shape.setTransform(1279.375,717.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AF4F30").s().p("AkZgPIFRAAIAmAAICXAAIAlAAQAAANgCAAQg2ALg5AAQgTAAgSACQhEAFg/AAQidAAh9gfg");
	this.shape_1.setTransform(931.775,492.324);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A14A28").s().p("ACWANIlRAAIAAgZQC7AAC7AMQABAAAAANIgmAAg");
	this.shape_2.setTransform(922.375,489.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A74D2B").s().p("ACEAZIhxAAQAAgMgCgBQhbgMheAAIAAgYIEsAAIAlAAIAAAYIAAAZIglAAg");
	this.shape_3.setTransform(728.475,370.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A94E2D").s().p("AAmAZIhwAAIAAgZIAAgYIBwAAIAlAAIAAAYIAAAZIglAAg");
	this.shape_4.setTransform(673.875,372.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AE4E2F").s().p("Aj0gYQDpAFDaASQATABATAAQAAANgEABQgiALgmAAIglAAIgXAAQjJAAiYgxg");
	this.shape_5.setTransform(845.175,139.533);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AB4D2E").s().p("ABxAkQifgOiNghQASAAANgJQAGgEAAgNQCeARCPAdQASAEATAAQAAAMgGAEQgNAJgTAAIglgCg");
	this.shape_6.setTransform(1103.075,168.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A84D2C").s().p("AiVgCQA4AAA2gMQACAAAAgNQBdgGA8AZQAQAGASAAQABAMgDAAQg2AMg4AAQgTAAgSADQgcAEgYAAQhDAAgfgfg");
	this.shape_7.setTransform(1039.05,159.8963);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AB4E2E").s().p("As7C8QDxAQD4AIIAmABQAZAsBYgHIAAANIgmAAIgdABQlEAAj5hMgAHEjuIAAgZIBLAAIAmAAQBxANBxAKQASACATAAQAAANgCAAQg2AMg5AAIglAAIgKAAQh4AAhggZg");
	this.shape_8.setTransform(952.475,180.9574);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7D441E").s().p("EgASA2GIAAgZIAAxpMAAAhZwIAAgOIAFAAIAAgEIAAgHIAfAAMAAABZwIABMWQgEADgFABIAAF2IABALIgdAAg");
	this.shape_9.setTransform(1232.95,372.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(28,15,6,0.247)").s().p("AgBAMIAAgXIADAAIAAAXIgDAAg");
	this.shape_10.setTransform(0.175,717.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(97,54,23,0.816)").s().p("EBV7AAMMhZaAAAMhZaAAAIAEAAIAAgYIAiAAMBZaAAAMBZaAAAIF4AAIAeAAQABAPABAJIm+AAg");
	this.shape_11.setTransform(639.75,720.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8D4620").s().p("EBWeAAMMhZZAAAMhZaAAAIAAgXMBZaAAAMBZZAAAIF4AAIAAAXIl4AAg");
	this.shape_12.setTransform(640,717.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(104,56,24,0.878)").s().p("EgASA33IAA19MAAAhZwIAlAAIAAAZMAAABZwIAANwIgOAAIAAABIAAABIAAACIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAACIgUAAIABFhIgEAAg");
	this.shape_13.setTransform(1.875,359.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7E451E").s().p("EBcCAANIAAgIIAAgGIAUAAIAAAOIgUAAgEhcVAANIAAgZIAKAAIAAAEIAAAKIAAALIgKAAg");
	this.shape_14.setTransform(640,27.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7F3B1C").s().p("EBfzAoeMAAAhZwUABCAr9gAYAtaQgCEjgBEiIgYAAIAAABIAAABIAAADIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIgJAAQgDAJADAUQAAAIgDAHIgDADIAAsWgEhgjAysIAAtwMAAAhZwIAmAAMAAABZwIAANwIgmAAgEBfSgxSIAAgHIAhAHIghAAgEhZfgxSIglAAIAAgZIAvAAIAAAHIAAALIAAAHIgKAAg");
	this.shape_15.setTransform(621.7085,342.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#76421D").s().p("EBjiA3/QAChPAAhhQACiSgBi2IgcAAIAAgCIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIgBAAMAAAgqCMAAAg7kQjbgQjkgKIAAgIIjvAAQkQgIkdACQiPABiPACItaACQ/TAE/SAAUgt0gAGgtzgABIAAAEIAAAHIAAACImvAAIgmAAIAAgZMBZaAAAUAssAAAAsugAPQKygEJzAsMAAAA7kMAAAAzwIgLAAg");
	this.shape_16.setTransform(641.875,358.2833);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#82381B").s().p("EBc8A4OIgCgGQgCgKgBgPIAAgMIAAl1QAFgBADgDIADgEQADgGAAgJQgDgTADgKIAJAAIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgCIAAgBIAAgCIAYAAQABkiACkjUAAYgtagBCgr8IghgHIAAgEIAAgLIAAgKIAAgLIAAgLIAAgKIAAgLIAAgLIAAgKIAAgLIAAgLIAAgLIAAgKIAAgLIAAgLIAAgKIAAgLIAAgLIAAgKIAAgLIAAgLIAAgCQDkAKDbAQMAAAA7kMAAAAqCIABAAIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAACIAcAAQABC2gBCSQAABhgDBPIgBAZIgBASIgXAAIAAABIAAAEIAAADIAAAEIgSAAIgBABgEheBA4MIgHAAIgXAAIgPAAIgFAAIkxgBIgVAAIAAgcIAAgZIAAliIAVAAIAAgBIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgCIAAgBIAAgBIANAAIAmAAIAAtwMAAAhZwIGvAAIAAAIIAAALIAAALIAAAKIAAALIAAALIAAALIAAAKIAAALIAAALIAAAKIAAALIAAALIAAAHIgHAAIAAADIAAAHIAAALIAAALIAAALIAAAKIAAAEIgvAAIAAAZIAlAAIAAAZMAAABZwIAARpIAAAZIgiAAIAAAYIgDABIgcACIAAABIAAABIgtAAgEhhpg2SIAAAEIAAAKIAAALIAAALIAVADIAAgHIAAgKIAAgLIAAgLIgVgDIAAADgEBLlg4KQCPgCCPgBQEcgCERAIQmmAAmlgDg");
	this.shape_17.setTransform(639.745,362.3625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A64C2B").s().p("EA8qADVQhYAHgZgsQHvABlYAuQgTADgTAAgEg9rgCuQAAgNgDgBQg2gMg4AAIAAgZICWAAIAmAAQA4AAA2AMQADABAAAMQgTAAgMAJQghAXg4AAQgfAAglgGg");
	this.shape_18.setTransform(545.4185,184.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AE4E30").s().p("Eg+WABHQCKANBaggQARgGATAAQA4AAA2AMQADABgBAMQgSAAgTACQhxALhxAMQgTAAgRAEQgTAEgOAAQgnAAgFghgEA9xgAEIl5gYIAAgZIByAAIAlAAIDiAXQATACASAAIAAAZIglgBgEA1igA3Qi0gTjEgEIAAgZIBwAAIAmAAQCWAMCXALIAlACQAAAMgDACQgiALglAAQgUAAgSgCg");
	this.shape_19.setTransform(572.25,152.4752);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A24B29").s().p("AjkAlQg2gMg4AAIAAgZIBxAAIAmAAQAGAtBGgQQASgEASAAQAAANgCAAQhIAMhMAAQAAgNgDAAgAC5gMQg2gMg4AAIAAgZIBxAAIAmAAQAGAsBGgPQASgEATAAQAAAMgCABQhKALhLAAQAAgMgDAAg");
	this.shape_20.setTransform(192,159.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9F4A26").s().p("ABxAMIkHAAIAAgXIEHAAIAlAAIAAAXIglAAg");
	this.shape_21.setTransform(169.4,133.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AC4E2F").s().p("Ah9gIQGagnkFA7QgSAEgSAAQgTAAgSAEQgSAEgNAAQgoAAgFggg");
	this.shape_22.setTransform(219.6092,132.8701);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A44C2A").s().p("EAymAAiQAmAAAhgLQAEgBAAgNQBxAABvAMQACABAAAMIgmAAIhwAAIAAAZQgUAAgSADQgYAEgTAAQg0AAgSgggEg09gAcQhJgMhMAAIAAgZIC9AAIAlAAQAGAsBGgPQASgEATAAQAAAMgCABQhcAMheAAQAAgNgCAAg");
	this.shape_23.setTransform(538.35,138.6383);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A34B29").s().p("EA4LAfgQA5AAA2gMQACgBAAgMQBMAABJAMQACAAAAANIgmAAIhLAAIAAAZQgTAAgSADQgYAEgTAAQg0AAgTgggEA9egVaQA5AAA1gMQADAAAAgNQBLAABKAMQACABAAAMIgmAAIhLAAIAAAZQgTAAgSADQgYAEgTAAQg1AAgSgggEAzegWlQAmAAAigLQADgCAAgMQBfAABcAMQACAAAAANIgmAAIhxAAIAAAZQgTAAgSAEQgSAEgOAAQgoAAgEghgEg/2gfaQg2gMg5AAIAAgZIBxAAIAmAAQAZAsBYgQQATgDATAAQAAAMgCABQhdAMheAAQAAgNgCAAg");
	this.shape_24.setTransform(589.175,291.6866);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AC4E2E").s().p("ACXFoQEDgeEMgTIAlgBQATAAANAJQAGADAAANQgTAAgSADQjWAijuANQgTAAgSAEQgSAEgOAAQgoAAgEghgAsWkKQDqgFDagTIAmgBQA4AAA2AMQADAAAAANQgTAAgSADQiMAZiJAAQiSAAiPgcgACXlVQElgiE1gQIAmgBIAAAaQgTAAgTACQjqAhj/APQgTAAgSAEQgSAEgOAAQgoAAgEghg");
	this.shape_25.setTransform(199.525,118.5907);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A24B28").s().p("AiDgbIAmAAQA+ArB9gQQATgCATAAQAAAMgDABQhEARg1AAQheAAgtg3g");
	this.shape_26.setTransform(589.175,378.143);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B04F31").s().p("EAw1AVxIl5AAIAAgaQDPAADPANIAAANIglAAgEgxZgPFIEHAAIAmAAQBLAABKAMQACAAAAANQgTAAgTACQhEAEg/AAQieAAh9gfgAks1XIi8AAIAAgYIBxAAIAlAAIC9AAIAlAAQAAAMgCABQhJALhLAAIgmAAg");
	this.shape_27.setTransform(470.575,231.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AA4D2D").s().p("EA1iAljQC8g/C+g5QARgFATAAIAAgZQLTjnLGjwQARgGASAAQqlEarNDvQgRAGgTAAQgTAAgOAIQi5BniRAAQguAAgrgLgEA08AeGIAAgZIBMAAIAlAAQATAAAPAIQBJAmg7AAQgsAAh1gVgEhS7gU2IBxAAIAmAAQASAAANAJQAGAEAAAMQgTAAgOAIQguAZghAAQg0AAgYg6gEA2IgXmIAAgZQB0gKBKAdQARAGATAAQAAANgDABQg2AMg4AAQgTAAgSADQgSAEgOAAQgoAAgEghgEgp2gkZQgNgIgSAAIAAgZQDvgMDVgkQASgDATAAQAmAAAiAMQADABAAAMQgTAAgRAEQjkA0kHAUQAAgNgGgEg");
	this.shape_28.setTransform(624.925,303.1179);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A94D2D").s().p("EA+qAImQjDgRi2ggQA5ABA1gMQADgBAAgNQCfARCPAeQASADATABQAAAMgGAEQgNAJgTAAQgTAAgSgCgEg/UAGBQgNgJgTAAIAAgZQFQgcFWgVIAmgBQkpBKlXAZIgmABQAAgMgGgEgEg+ogFGIAAgZILLhJQATgBATgBQASABANAIQAGAEAAANQgTgBgSAEQliBFmPAcIAAgagEgqGgHpQgigMgmAAIAAgZQCrAICDgdQASgEATAAQAlAAAiALQAEABAAANQgTAAgRAEQiJAkimAKQAAgNgDAAg");
	this.shape_29.setTransform(679.525,111.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A74C2B").s().p("AkPCTQC8AAC6ANQABAAAAAMIglAAIhwAAIAAAZQgTAAgTADQgfAFgaAAQhfAAgkg6gACwinQgigLgmAAIAAgZQEKgGibAzQgRAFgSAAQAAgMgEgCg");
	this.shape_30.setTransform(426.2667,74.6368);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9F4A27").s().p("ACWVLIEIAAIAmAAQAAAMgBAAQiWANiXAAIAAgZgAMWUyIF5AAIAlAAIAAAMQjPANjPAAIAAgZgAyz1jIEtAAIAlAAIAAAZIglACQg0AFgvAAQh1AAhVggg");
	this.shape_31.setTransform(666.35,237.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A54C2A").s().p("ALvWJQhJgMhMAAIAAgZIC9AAIAlAAQAZAsBZgQQASgDATAAQAAAMgCAAQhvANhxAAQAAgNgCAAgAnD1iQBeAABdgNQABAAAAgNQCXAACVAMQABABAAANIgmAAIiWAAIAAAYQgSABgTACQguAEgoAAQhqAAhIgfgAvS18QBLAABKgMQACgBAAgMQCDAACDAMQABAAAAANIglAAIhxAAIAAAaQgTAAgTACQgoAEgjAAQhcAAg7ggg");
	this.shape_32.setTransform(542.125,234.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AF4E30").s().p("AjOVtIC8AAIAlAAQBLAABJAMQACAAAAANIglAAIhxAAQgTAAgSACQgiAFgeAAQhPAAgtgggAD1VUIF4AAIAmAAIAAAZIgmAAIjiAAQgTAAgSADQgXAFgTAAQg1AAgSghgATtVUIiWAAIgmAAIkIAAIAAgZIEIAAIAmAAQBeAABcAMQACAAAAANIgmAAgAj01aIktAAIgmAAIiWAAIAAgYICWAAIAmAAIFTAAIAmAAQAAAMgGADQgNAJgTAAIgmAAgAww1yIjiAAIAAgaIBxAAIAmAAIEHAAIAmAAQAAANgCAAQhcANheAAIgmAAg");
	this.shape_33.setTransform(600.475,236.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#954721").s().p("EBZHA3xMhZZAAAMhZbAAAIAAxpMAAAhZwIAKAAIAAgLIAAgLIAAgDIAAgHIAAgLIAAgHIAAgEIAAgKIAAgLIAAgKIAAgLIAAgHIAAgEIAHAAIAAgHIAAgLIAAgLIAAgKIAAgLIAAgKIAAgLIAAgLIAAgLIAAgLIAAgKIAAgKIAAgMIAAgIIAAgCIAAgHIAAgEUAt0AABAtzAAHQfSAAfTgFINbgCQGlADGmAAIDuAAIAAAIIAAADIAAAKIAAALIAAAKIAAALIAAALIAAALIAAAKIAAALIAAAKIAAAMIAAAKIAAALIAAAKIAAALIAAALIAAALIAAAKIAAALIAAAKIAAALIAAAEIAAAHIAAAHIAAAEIgFAAIgUAAIAAAHIAAAHIAUAAMAAABZwIAARpIl4AAgEBSrATBQrGDwrTDmIAAAaQgTAAgRAEQi+A6i8A/QCwArDziHQAOgIATAAQATAAARgGQLNjvKlkbQgSAAgRAHgEA3hAVAQgPgIgTAAQAAgMgCgBQhJgMhLAAIgmAAIiWAAQAAgMgBAAQi8gNi8AAIAAAZQCwAsDugSQATgBATAAQAZAsBYgQQATgDASAAQETAxiAhCgAjSDDQADgBAAgMIBxAAIAmAAQBwAABvgNQACAAAAgMIDiAAIAlAAIBxAAIAmAAQCWAACWgMQABAAAAgNICXAAIAlAAIBxAAIAmAAQDPAADOgMIABgNIgBgNQjOgMjPAAIgmAAIktAAIAAAZIgmAAIkHAAIgmAAIhxAAIAAAZIglAAIl5AAIgkAAIi9AAIAAAZIglAAIi9AAIglAAQBGBXC+gxgEAv8gXzIAlAAQATAAATgCQFYgunvgCIglAAQj4gJjygQQEEBPFXgEgEBHegeGQASACATAAQCNAjCgANIAmACQCYA9DfgYQABAAAAgMQiWgZiXgWQgTgDgSAAQgTAAgSgEQiPgeifgQQgTgBgSgDQiPgeifgRQgTABgQgHQg7gZheAHQgTgBgTgCQhxgKhxgMQAAgNgCgBQhJgMhLAAQgTAAgRgGQhKgdh0AKQgTAAgTgCIjigXQAAgNgBABQhdgNheAAIgmgCQiWgKiXgNQAAgNgBAAQhwgMhxAAQgTAAgSgCQjbgSjpgGQCgA2DYgDIAmAAQAZAsBYgQQATgDATAAQDEAEC0ATQATACATAAQAFAsBHgPQASgEATAAIF4AYIAmABQAFAtBHgQQASgEATABQAYArBZgPQASgDATAAQBkAZB+gBIAmAAQArAtBsgRQASgDATAAQC2AgDDARgEhQOgdKQAOgIATAAQC2gMCegjQASgDATAAQBrATAygjQAMgKATABQBLgBBJgLQACgBAAgNQBxgMBygKQASgDATAAQBLAABKgMQACAAAAgMQDugODWgiQASgDATAAIAmgBQFXgZEphKIgmABQlWAVlQAcIAAAZIglABQkMAUkDAeIgmAAIhxAAIAAAZQgTAAgRAFQhaAgiJgNIgmAAIhxAAIAAAZIgmAAIiWAAIAAAaIgmAAQiKAGh9ATIAAAZIgmAAIhxAAQAoBeBzg9gEhJPgjLQCwAtDvgSQASgBATgBQBeABBdgMQABgBAAgNQATAAASgEQEFg8mbAoIglAAIi9AAIglAAIkIAAIAAAYgEgMpgoqIAmAAQB3AtC2gSIAlgCQHjgNmXgjIgmgBIgmAAIlSAAQAAgNgBgBQiWgMiXAAIglAAIkIAAQAAgNgBAAQiDgMiDAAIgmAAIi8AAQAAgMgBAAQi7gNi9AAQAuBJCPgUQASgDATAAIC8AAIAmAAQBSAtCQgRQATgCATAAIDiAAIAlAAQBkArCkgQQATgCASgBICXAAgEhG4gqOIgmABQjaATjqAFQEUA4Eig1QASgDATAAQBeAABcgMQACAAAAgNQCEAACCgMQACAAAAgNQD/gODqgiQATgCATAAQGPgcFihFQASgEATABQEHgVDkgzQARgEATAAQCmgKCJgkQARgEATAAQATAAARgGQCagzkJAHIAAAZQgTAAgSAEQiDAdirgIIAAAZQgTAAgSADQjVAkjvALIAAAZQgTABgTABIrLBJIAAAZIgmABQk1AQklAiQgTAAgTACQh+ARiKAGIglAAIhxAAIAAAZgEhfDg1TIAAgLIAAgLIAAgKIAAgDIAAgEIAVAEIAAAKIAAALIAAAKIAAAIIgVgEg");
	this.shape_34.setTransform(623.125,359.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A94D2C").s().p("EBL4AGhQATAAANgJQAGgEAAgMQATAAASACQCXAXCXAZQAAAMgBAAQg/AHg5AAQiSAAhugsgEhRQAGQQgNgIgTAAIAAgZQB+gTCKgGIAlgBQA5AAA1AMQADABAAANQgTAAgSADQidAii2ANQAAgNgGgEgAoOk2QATAAANgJQAGgDAAgNIAlACQGYAjnjANIAAgZgEhF/gGzQCKgHB+gQQASgCATAAQAGAsBGgPQASgEATAAQAAAMgBAAQiDANiDAAQgTAAgTADQgXAEgTAAQg1AAgSggg");
	this.shape_35.setTransform(632.475,130.4618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.text},{t:this.toHelp_btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mission_screen, new cjs.Rectangle(0,0,1280,722.2), null);


(lib.entrace_screen = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.logo();
	this.instance.setTransform(667.05,143.75,2.7654,2.7654,0,0,0,0.7,-0.2);

	this.text = new cjs.Text(":בחר משחק", "normal 500 50px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 62;
	this.text.lineWidth = 321;
	this.text.parent = this;
	this.text.setTransform(633.7886,348.5814,1,1,-1.9762);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_1 = new lib.CachedBmp_135();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.entrace_screen, new cjs.Rectangle(0,0,1282,720), null);


(lib.bgGame_screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// clouds
	this.clouds = new lib.clouds();
	this.clouds.name = "clouds";
	this.clouds.setTransform(1710.5,113.65,1,1,0,0,0,470.5,75);

	this.timeline.addTween(cjs.Tween.get(this.clouds).wait(1));

	// land
	this.instance = new lib.CachedBmp_137();
	this.instance.setTransform(0,194.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sun
	this.sun_change = new lib.sun_change();
	this.sun_change.name = "sun_change";
	this.sun_change.setTransform(1144.5,152.95,0.7251,0.7251,0,0,0,97.9,97.9);

	this.timeline.addTween(cjs.Tween.get(this.sun_change).wait(1));

	// sky
	this.sky_change = new lib.sky_change();
	this.sky_change.name = "sky_change";
	this.sky_change.setTransform(640,233.85,1,1,0,0,0,640,233.2);

	this.timeline.addTween(cjs.Tween.get(this.sky_change).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgGame_screen, new cjs.Rectangle(0,0.7,2181,720), null);


(lib.talk_bubble = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.Qpic_box = new lib.Qpic_box();
	this.Qpic_box.name = "Qpic_box";
	this.Qpic_box.setTransform(-191.25,74,1,1,0,0,0,89.5,71.8);

	this.question_txt = new cjs.Text("", "normal 500 27px 'Rubik'");
	this.question_txt.name = "question_txt";
	this.question_txt.textAlign = "right";
	this.question_txt.lineHeight = 34;
	this.question_txt.lineWidth = 408;
	this.question_txt.alpha = 0.99607843;
	this.question_txt.parent = this;
	this.question_txt.setTransform(224.45,-67.5);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.question_txt);
	}

	this.instance = new lib.CachedBmp_136();
	this.instance.setTransform(-413,-102,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.question_txt},{t:this.Qpic_box}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.talk_bubble, new cjs.Rectangle(-413,-102,841,206), null);


(lib.start_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// clouds
	this.instance = new lib.clouds();
	this.instance.setTransform(718,123,1,1,0,0,0,470.5,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-520.9,x:-274.3},0).wait(1).to({x:-275.2},0).wait(1).to({x:-276.1},0).wait(1).to({x:-277},0).wait(1).to({x:-277.9},0).wait(1).to({x:-278.8},0).wait(1).to({x:-279.7},0).wait(1).to({x:-280.6},0).wait(1).to({x:-281.5},0).wait(1).to({x:-282.4},0).wait(1).to({x:-283.3},0).wait(1).to({x:-284.15},0).wait(1).to({x:-285.05},0).wait(1).to({x:-285.95},0).wait(1).to({x:-286.85},0).wait(1).to({x:-287.75},0).wait(1).to({x:-288.65},0).wait(1).to({x:-289.55},0).wait(1).to({x:-290.45},0).wait(1).to({x:-291.35},0).wait(1).to({x:-292.25},0).wait(1).to({x:-293.15},0).wait(1).to({x:-294},0).wait(1).to({x:-294.9},0).wait(1).to({x:-295.8},0).wait(1).to({x:-296.7},0).wait(1).to({x:-297.6},0).wait(1).to({x:-298.5},0).wait(1).to({x:-299.4},0).wait(1).to({x:-300.3},0).wait(1).to({x:-301.2},0).wait(1).to({x:-302.1},0).wait(1).to({x:-303},0).wait(1).to({x:-303.9},0).wait(1).to({x:-304.75},0).wait(1).to({x:-305.65},0).wait(1).to({x:-306.55},0).wait(1).to({x:-307.45},0).wait(1).to({x:-308.35},0).wait(1).to({x:-309.25},0).wait(1).to({x:-310.15},0).wait(1).to({x:-311.05},0).wait(1).to({x:-311.95},0).wait(1).to({x:-312.85},0).wait(1).to({x:-313.75},0).wait(1).to({x:-314.6},0).wait(1).to({x:-315.5},0).wait(1).to({x:-316.4},0).wait(1).to({x:-317.3},0).wait(1).to({x:-318.2},0).wait(1).to({x:-319.1},0).wait(1).to({x:-320},0).wait(1).to({x:-320.9},0).wait(1).to({x:-321.8},0).wait(1).to({x:-322.7},0).wait(1).to({x:-323.6},0).wait(1).to({x:-324.45},0).wait(1).to({x:-325.35},0).wait(1).to({x:-326.25},0).wait(1).to({x:-327.15},0).wait(1).to({x:-328.05},0).wait(1).to({x:-328.95},0).wait(1).to({x:-329.85},0).wait(1).to({x:-330.75},0).wait(1).to({x:-331.65},0).wait(1).to({x:-332.55},0).wait(1).to({x:-333.45},0).wait(1).to({x:-334.35},0).wait(1).to({x:-335.2},0).wait(1).to({x:-336.1},0).wait(1).to({x:-337},0).wait(1).to({x:-337.9},0).wait(1).to({x:-338.8},0).wait(1).to({x:-339.7},0).wait(1).to({x:-340.6},0).wait(1).to({x:-341.5},0).wait(1).to({x:-342.4},0).wait(1).to({x:-343.3},0).wait(1).to({x:-344.2},0).wait(1).to({x:-345.05},0).wait(1).to({x:-345.95},0).wait(1).to({x:-346.85},0).wait(1).to({x:-347.75},0).wait(1).to({x:-348.65},0).wait(1).to({x:-349.55},0).wait(1).to({x:-350.45},0).wait(1).to({x:-351.35},0).wait(1).to({x:-352.25},0).wait(1).to({x:-353.15},0).wait(1).to({x:-354.05},0).wait(1).to({x:-354.95},0).wait(1).to({x:-355.8},0).wait(1).to({x:-356.7},0).wait(1).to({x:-357.6},0).wait(1).to({x:-358.5},0).wait(1).to({x:-359.4},0).wait(1).to({x:-360.3},0).wait(1).to({x:-361.2},0).wait(1).to({x:-362.1},0).wait(1).to({x:-363},0).wait(1).to({x:-363.9},0).wait(1).to({x:-364.8},0).wait(1).to({x:-365.65},0).wait(1).to({x:-366.55},0).wait(1).to({x:-367.45},0).wait(1).to({x:-368.35},0).wait(1).to({x:-369.25},0).wait(1).to({x:-370.15},0).wait(1).to({x:-371.05},0).wait(1).to({x:-371.95},0).wait(1).to({x:-372.85},0).wait(1).to({x:-373.75},0).wait(1).to({x:-374.65},0).wait(1).to({x:-375.5},0).wait(1).to({x:-376.4},0).wait(1).to({x:-377.3},0).wait(1).to({x:-378.2},0).wait(1).to({x:-379.1},0).wait(1).to({x:-380},0).wait(1).to({x:-380.9},0).wait(1).to({x:-381.8},0).wait(1).to({x:-382.7},0).wait(1).to({x:-383.6},0).wait(1).to({x:-384.5},0).wait(1).to({x:-385.4},0).wait(1).to({x:-386.25},0).wait(1).to({x:-387.15},0).wait(1).to({x:-388.05},0).wait(1).to({x:-388.95},0).wait(1).to({x:-389.85},0).wait(1).to({x:-390.75},0).wait(1).to({x:-391.65},0).wait(1).to({x:-392.55},0).wait(1).to({x:-393.45},0).wait(1).to({x:-394.35},0).wait(1).to({x:-395.25},0).wait(1).to({x:-396.1},0).wait(1).to({x:-397},0).wait(1).to({x:-397.9},0).wait(1).to({x:-398.8},0).wait(1).to({x:-399.7},0).wait(1).to({x:-400.6},0).wait(1).to({x:-401.5},0).wait(1).to({x:-402.4},0).wait(1).to({x:-403.3},0).wait(1).to({x:-404.2},0).wait(1).to({x:-405.1},0).wait(1).to({x:-405.95},0).wait(1).to({x:-406.85},0).wait(1).to({x:-407.75},0).wait(1).to({x:-408.65},0).wait(1).to({x:-409.55},0).wait(1).to({x:-410.45},0).wait(1).to({x:-411.35},0).wait(1).to({x:-412.25},0).wait(1).to({x:-413.15},0).wait(1).to({x:-414.05},0).wait(1).to({x:-414.95},0).wait(1).to({x:-415.85},0).wait(1).to({x:-416.7},0).wait(1).to({x:-417.6},0).wait(1).to({x:-418.5},0).wait(1).to({x:-419.4},0).wait(1).to({x:-420.3},0).wait(1).to({x:-421.2},0).wait(1).to({x:-422.1},0).wait(1).to({x:-423},0).wait(1).to({x:-423.9},0).wait(1).to({x:-424.8},0).wait(1).to({x:-425.7},0).wait(1).to({x:-426.55},0).wait(1).to({x:-427.45},0).wait(1).to({x:-428.35},0).wait(1).to({x:-429.25},0).wait(1).to({x:-430.15},0).wait(1).to({x:-431.05},0).wait(1).to({x:-431.95},0).wait(1).to({x:-432.85},0).wait(1).to({x:-433.75},0).wait(1).to({x:-434.65},0).wait(1).to({x:-435.55},0).wait(1).to({x:-436.45},0).wait(1).to({x:-437.3},0).wait(1).to({x:-438.2},0).wait(1).to({x:-439.1},0).wait(1).to({x:-440},0).wait(1).to({x:-440.9},0).wait(1).to({x:-441.8},0).wait(1).to({x:-442.7},0).wait(1).to({x:-443.6},0).wait(1).to({x:-444.5},0).wait(1).to({x:-445.4},0).wait(1).to({x:-446.3},0).wait(1).to({x:-447.15},0).wait(1).to({x:-448.05},0).wait(1).to({x:-448.95},0).wait(1).to({x:-449.85},0).wait(1).to({x:-450.75},0).wait(1).to({x:-451.65},0).wait(1).to({x:-452.55},0).wait(1).to({x:-453.45},0).wait(1).to({x:-454.35},0).wait(1).to({x:-455.25},0).wait(1).to({x:-456.15},0).wait(1).to({x:-457},0).wait(1).to({x:-457.9},0).wait(1).to({x:-458.8},0).wait(1).to({x:-459.7},0).wait(1).to({x:-460.6},0).wait(1).to({x:-461.5},0).wait(1).to({x:-462.4},0).wait(1).to({x:-463.3},0).wait(1).to({x:-464.2},0).wait(1).to({x:-465.1},0).wait(1).to({x:-466},0).wait(1).to({x:-466.9},0).wait(1).to({x:-467.75},0).wait(1).to({x:-468.65},0).wait(1).to({x:-469.55},0).wait(1).to({x:-470.45},0).wait(1).to({x:-471.35},0).wait(1).to({x:-472.25},0).wait(1).to({x:-473.15},0).wait(1).to({x:-474.05},0).wait(1).to({x:-474.95},0).wait(1).to({x:-475.85},0).wait(1).to({x:-476.75},0).wait(1).to({x:-477.6},0).wait(1).to({x:-478.5},0).wait(1).to({x:-479.4},0).wait(1).to({x:-480.3},0).wait(1).to({x:-481.2},0).wait(1).to({x:-482.1},0).wait(1).to({x:-483},0).wait(1).to({x:-483.9},0).wait(1).to({x:-484.8},0).wait(1).to({x:-485.7},0).wait(1).to({x:-486.6},0).wait(1).to({x:-487.45},0).wait(1));

	// house
	this.instance_1 = new lib.house();
	this.instance_1.setTransform(135.3,556.95,1,1,0,0,0,135.3,164.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240));

	// rolling_bush
	this.instance_2 = new lib.rolling_bush();
	this.instance_2.setTransform(-86.25,600.45,0.5117,0.5117,0,0,0,0.8,-17.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(1).to({regX:1.9,regY:-18.4,rotation:4.557,x:-67.4,y:599.85},0).wait(1).to({rotation:9.1139,x:-49.1,y:599.9},0).wait(1).to({rotation:13.6709,x:-30.8,y:600},0).wait(1).to({rotation:18.2278,x:-12.6},0).wait(1).to({rotation:22.7848,x:5.65,y:600.1},0).wait(1).to({rotation:27.3418,x:23.85,y:600.15},0).wait(1).to({rotation:31.8987,x:42.15,y:600.2},0).wait(1).to({rotation:36.4557,x:60.4,y:600.3},0).wait(1).to({rotation:41.0127,x:78.65,y:600.35},0).wait(1).to({rotation:45.5696,x:96.85,y:600.4},0).wait(1).to({rotation:50.1266,x:115.1,y:600.45},0).wait(1).to({rotation:54.6835,x:133.3,y:600.55},0).wait(1).to({rotation:59.2405,x:151.55,y:600.6},0).wait(1).to({rotation:63.7975,x:169.75,y:600.65},0).wait(1).to({rotation:68.3544,x:187.95,y:600.75},0).wait(1).to({rotation:72.9114,x:206.15,y:600.8},0).wait(1).to({rotation:77.4684,x:224.35,y:600.85},0).wait(1).to({rotation:82.0253,x:242.5,y:600.9},0).wait(1).to({rotation:86.5823,x:260.7,y:600.95},0).wait(1).to({rotation:91.1392,x:278.9,y:601},0).wait(1).to({rotation:95.6962,x:297.05,y:601.05},0).wait(1).to({rotation:100.2532,x:315.25,y:601.1},0).wait(1).to({rotation:104.8101,x:333.45,y:601.15},0).wait(1).to({rotation:109.3671,x:351.65,y:601.1},0).wait(1).to({rotation:113.9241,x:369.75,y:601.2},0).wait(1).to({rotation:118.481,x:388},0).wait(1).to({rotation:123.038,x:406.1,y:601.25},0).wait(1).to({rotation:127.5949,x:424.25},0).wait(1).to({rotation:132.1519,x:442.45,y:601.2},0).wait(1).to({rotation:136.7089,x:460.6,y:601.25},0).wait(1).to({rotation:141.2658,x:478.8},0).wait(1).to({rotation:145.8228,x:496.95},0).wait(1).to({rotation:150.3797,x:515.1},0).wait(1).to({rotation:154.9367,x:533.25},0).wait(1).to({rotation:159.4937,x:551.45,y:601.2},0).wait(1).to({rotation:164.0506,x:569.6,y:601.15},0).wait(1).to({rotation:168.6076,x:587.75},0).wait(1).to({rotation:173.1646,x:605.95,y:601.1},0).wait(1).to({rotation:177.7215,x:624.1,y:601.05},0).wait(1).to({rotation:182.2785,x:642.35,y:601},0).wait(1).to({rotation:186.8354,x:660.5},0).wait(1).to({rotation:191.3924,x:678.65,y:600.95},0).wait(1).to({rotation:195.9494,x:696.8,y:600.85},0).wait(1).to({rotation:200.5063,x:715.05,y:600.75},0).wait(1).to({rotation:205.0633,x:733.2,y:600.8},0).wait(1).to({rotation:209.6203,x:751.45,y:600.7},0).wait(1).to({rotation:214.1772,x:769.65,y:600.6},0).wait(1).to({rotation:218.7342,x:787.9,y:600.55},0).wait(1).to({rotation:223.2911,x:806.1,y:600.5},0).wait(1).to({rotation:227.8481,x:824.3,y:600.4},0).wait(1).to({rotation:232.4051,x:842.55},0).wait(1).to({rotation:236.962,x:860.75,y:600.3},0).wait(1).to({rotation:241.519,x:879,y:600.25},0).wait(1).to({rotation:246.0759,x:897.3,y:600.15},0).wait(1).to({rotation:250.6329,x:915.55,y:600.1},0).wait(1).to({rotation:255.1899,x:933.8,y:600},0).wait(1).to({rotation:259.7468,x:952.1},0).wait(1).to({rotation:264.3038,x:970.35,y:599.95},0).wait(1).to({rotation:268.8608,x:988.6,y:599.9},0).wait(1).to({rotation:273.4177,x:1006.85,y:599.85},0).wait(1).to({rotation:277.9747,x:1025.2,y:599.8},0).wait(1).to({rotation:282.5316,x:1043.4,y:599.75},0).wait(1).to({rotation:287.0886,x:1061.7,y:599.7},0).wait(1).to({rotation:291.6456,x:1080},0).wait(1).to({rotation:296.2025,x:1098.3},0).wait(1).to({rotation:300.7595,x:1116.55,y:599.65},0).wait(1).to({rotation:305.3165,x:1134.85,y:599.6},0).wait(1).to({rotation:309.8734,x:1153.1},0).wait(1).to({rotation:314.4304,x:1171.5},0).wait(1).to({rotation:318.9873,x:1189.75},0).wait(1).to({rotation:323.5443,x:1208.05},0).wait(1).to({rotation:328.1013,x:1226.4},0).wait(1).to({rotation:332.6582,x:1244.65,y:599.65},0).wait(1).to({rotation:337.2152,x:1262.9,y:599.6},0).wait(1).to({rotation:341.7722,x:1281.2,y:599.65},0).wait(1).to({rotation:346.3291,x:1299.5},0).wait(1).to({rotation:350.8861,x:1317.75,y:599.75},0).wait(1).to({rotation:355.443,x:1336.05},0).wait(1).to({rotation:360,x:1354.3,y:599.85},0).wait(122));

	// rock
	this.instance_3 = new lib.rock();
	this.instance_3.setTransform(448.4,546.6,1,1,0,0,0,201.4,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(240));

	// Layer_1
	this.instance_4 = new lib.house();
	this.instance_4.setTransform(135.3,556.95,1,1,0,0,0,135.3,164.7);

	this.instance_5 = new lib.rock();
	this.instance_5.setTransform(448.4,546.6,1,1,0,0,0,201.4,62.6);

	this.instance_6 = new lib.wanted();
	this.instance_6.setTransform(574.95,386.55,0.1651,0.1651,-14.9969,0,0,-0.8,0.7);

	this.instance_7 = new lib.CachedBmp_157();
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_158();
	this.instance_8.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.instance_8},{t:this.instance_6}]},118).wait(122));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,0,1532.6,721.8);


(lib.stars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(33).call(this.frame_33).wait(1));

	// Layer_13
	this.instance = new lib.star_1();
	this.instance.setTransform(-11.15,26.35,0.1353,0.1353,0,0,0,0,140.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:146.6,regY:141.7,scaleX:0.1348,scaleY:0.1348,rotation:-10.2194,x:7.05,y:1.25},0).wait(1).to({scaleX:0.1342,scaleY:0.1342,rotation:-20.4387,x:5.05,y:-22.8},0).wait(1).to({scaleX:0.1337,scaleY:0.1337,rotation:-30.6581,x:2.8,y:-45.35},0).wait(1).to({scaleX:0.1332,scaleY:0.1332,rotation:-40.8774,x:0.45,y:-66.5},0).wait(1).to({scaleX:0.1327,scaleY:0.1327,rotation:-51.0968,x:-2,y:-85.95},0).wait(1).to({scaleX:0.1322,scaleY:0.1322,rotation:-61.3161,x:-4.5,y:-103.7},0).wait(1).to({scaleX:0.1317,scaleY:0.1317,rotation:-71.5355,x:-6.95,y:-119.8},0).wait(1).to({scaleX:0.1312,scaleY:0.1312,rotation:-81.7548,x:-9.2,y:-134.15},0).wait(1).to({scaleX:0.1307,scaleY:0.1307,rotation:-91.9742,x:-11.15,y:-146.65},0).wait(1).to({scaleX:0.1302,scaleY:0.1302,rotation:-102.1935,x:-12.75,y:-157.4},0).wait(1).to({scaleX:0.1297,scaleY:0.1297,rotation:-112.4129,x:-13.85,y:-166.45},0).wait(1).to({scaleX:0.1292,scaleY:0.1292,rotation:-122.6323,x:-14.35,y:-173.65},0).wait(1).to({scaleX:0.1287,scaleY:0.1287,rotation:-132.8516,x:-14.2,y:-179.3},0).wait(1).to({scaleX:0.1282,scaleY:0.1282,rotation:-143.071,x:-13.2,y:-183.3},0).wait(1).to({scaleX:0.1277,scaleY:0.1277,rotation:-153.2903,x:-11.35,y:-185.8},0).wait(1).to({scaleX:0.1272,scaleY:0.1272,rotation:-163.5097,x:-8.75,y:-186.9},0).wait(1).to({scaleX:0.1267,scaleY:0.1267,rotation:-173.729,x:-5.15,y:-186.65},0).wait(1).to({scaleX:0.1261,scaleY:0.1261,rotation:-183.9484,x:-0.65,y:-185.2},0).wait(1).to({scaleX:0.1256,scaleY:0.1256,rotation:-194.1677,x:4.85,y:-182.6},0).wait(1).to({scaleX:0.1251,scaleY:0.1251,rotation:-204.3871,x:11.25,y:-179.05},0).wait(1).to({scaleX:0.1246,scaleY:0.1246,rotation:-214.6065,x:18.45,y:-174.6},0).wait(1).to({scaleX:0.1241,scaleY:0.1241,rotation:-224.8258,x:26.55,y:-169.2},0).wait(1).to({scaleX:0.1236,scaleY:0.1236,rotation:-235.0452,x:35.3,y:-163.15},0).wait(1).to({scaleX:0.1231,scaleY:0.1231,rotation:-245.2645,x:44.8,y:-156.4},0).wait(1).to({scaleX:0.1226,scaleY:0.1226,rotation:-255.4839,x:54.85,y:-149},0).wait(1).to({scaleX:0.1221,scaleY:0.1221,rotation:-265.7032,x:65.3,y:-141},0).wait(1).to({scaleX:0.1216,scaleY:0.1216,rotation:-275.9226,x:76.2,y:-132.3},0).wait(1).to({scaleX:0.1211,scaleY:0.1211,rotation:-286.1419,x:87.3,y:-123.15},0).wait(1).to({scaleX:0.1206,scaleY:0.1206,rotation:-296.3613,x:98.65,y:-113.2},0).wait(1).to({scaleX:0.1201,scaleY:0.1201,rotation:-306.5806,x:110.05,y:-102.65},0).wait(1).to({scaleX:0.1196,scaleY:0.1196,rotation:-316.8,x:121.4,y:-91.35},0).to({_off:true},1).wait(1));

	// Layer_12
	this.instance_1 = new lib.star_3();
	this.instance_1.setTransform(-7.8,18.75,0.1353,0.1353,0,0,0,144.6,142.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:146.6,regY:144.3,scaleX:0.1285,scaleY:0.1285,rotation:10.2194,x:-4.1,y:-5.55},0).wait(1).to({scaleX:0.1217,scaleY:0.1217,rotation:20.4387,x:-1.25,y:-28.7},0).wait(1).to({scaleX:0.1148,scaleY:0.1148,rotation:30.6581,x:1.3,y:-50.5},0).wait(1).to({scaleX:0.108,scaleY:0.108,rotation:40.8774,x:3.35,y:-70.95},0).wait(1).to({scaleX:0.1012,scaleY:0.1012,rotation:51.0968,x:5,y:-89.95},0).wait(1).to({scaleX:0.0944,scaleY:0.0944,rotation:61.3161,x:6.2,y:-107.65},0).wait(1).to({scaleX:0.0876,scaleY:0.0876,rotation:71.5355,x:7,y:-123.95},0).wait(1).to({scaleX:0.0808,scaleY:0.0808,rotation:81.7548,x:7.4,y:-138.85},0).wait(1).to({scaleX:0.074,scaleY:0.074,rotation:91.9742,x:7.35,y:-152.35},0).wait(1).to({scaleX:0.0672,scaleY:0.0672,rotation:102.1935,x:6.85,y:-164.5},0).wait(1).to({scaleX:0.0604,scaleY:0.0604,rotation:112.4129,x:6,y:-175.25},0).wait(1).to({scaleX:0.0536,scaleY:0.0536,rotation:122.6323,x:4.7,y:-184.7},0).wait(1).to({scaleX:0.0468,scaleY:0.0468,rotation:132.8516,x:3,y:-192.7},0).wait(1).to({scaleX:0.04,scaleY:0.04,rotation:143.071,x:0.85,y:-199.25},0).wait(1).to({scaleX:0.0332,scaleY:0.0332,rotation:153.2903,x:-1.75,y:-204.55},0).wait(1).to({scaleX:0.0264,scaleY:0.0264,rotation:163.5097,x:-4.75,y:-208.35},0).wait(1).to({scaleX:0.0196,scaleY:0.0196,rotation:173.729,x:-8.15,y:-210.8},0).wait(1).to({scaleX:0.0128,scaleY:0.0128,rotation:183.9484,x:-11.95,y:-211.9},0).wait(1).to({scaleX:0.006,scaleY:0.006,rotation:194.1677,x:-16.35,y:-211.55},0).wait(1).to({scaleX:0.0008,scaleY:0.0008,rotation:24.3871,x:-21.05,y:-209.85},0).wait(1).to({scaleX:0.0076,scaleY:0.0076,rotation:34.6065,x:-26.2,y:-206.75},0).wait(1).to({scaleX:0.0144,scaleY:0.0144,rotation:44.8258,x:-31.8,y:-202.35},0).wait(1).to({scaleX:0.0212,scaleY:0.0212,rotation:55.0452,x:-37.85,y:-196.45},0).wait(1).to({scaleX:0.028,scaleY:0.028,rotation:65.2645,x:-44.35,y:-189.25},0).wait(1).to({scaleX:0.0348,scaleY:0.0348,rotation:75.4839,x:-51.25,y:-180.65},0).wait(1).to({scaleX:0.0416,scaleY:0.0416,rotation:85.7032,x:-58.65,y:-170.65},0).wait(1).to({scaleX:0.0484,scaleY:0.0484,rotation:95.9226,x:-66.45,y:-159.25},0).wait(1).to({scaleX:0.0552,scaleY:0.0552,rotation:106.1419,x:-74.65,y:-146.55},0).wait(1).to({scaleX:0.062,scaleY:0.062,rotation:116.3613,x:-83.3,y:-132.4},0).wait(1).to({scaleX:0.0688,scaleY:0.0688,rotation:126.5806,x:-92.35,y:-116.9},0).wait(1).to({scaleX:0.0756,scaleY:0.0756,rotation:136.8,x:-101.85,y:-100.05},0).to({_off:true},1).wait(1));

	// Layer_11
	this.instance_2 = new lib.star_1();
	this.instance_2.setTransform(1.7,7.15,0.1353,0.1353,0,0,0,12.2,52.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:146.6,regY:141.7,scaleX:0.1343,scaleY:0.1343,rotation:10.2194,x:14.6,y:-20.05},0).wait(1).to({scaleX:0.1333,scaleY:0.1333,rotation:20.4387,x:9.15,y:-57.65},0).wait(1).to({scaleX:0.1323,scaleY:0.1323,rotation:30.6581,x:3.6,y:-93.5},0).wait(1).to({scaleX:0.1313,scaleY:0.1313,rotation:40.8774,x:-2.05,y:-127.85},0).wait(1).to({scaleX:0.1303,scaleY:0.1303,rotation:51.0968,x:-7.45,y:-160.55},0).wait(1).to({scaleX:0.1294,scaleY:0.1294,rotation:61.3161,x:-12.7,y:-191.7},0).wait(1).to({scaleX:0.1284,scaleY:0.1284,rotation:71.5355,x:-17.55,y:-221.3},0).wait(1).to({scaleX:0.1274,scaleY:0.1274,rotation:81.7548,x:-21.9,y:-249.25},0).wait(1).to({scaleX:0.1264,scaleY:0.1264,rotation:91.9742,x:-25.75,y:-275.55},0).wait(1).to({scaleX:0.1254,scaleY:0.1254,rotation:102.1935,x:-28.85,y:-300.1},0).wait(1).to({scaleX:0.1244,scaleY:0.1244,rotation:112.4129,x:-31.25,y:-322.8},0).wait(1).to({scaleX:0.1235,scaleY:0.1235,rotation:122.6323,x:-32.85,y:-343.65},0).wait(1).to({scaleX:0.1225,scaleY:0.1225,rotation:132.8516,x:-33.55,y:-362.45},0).wait(1).to({scaleX:0.1215,scaleY:0.1215,rotation:143.071,x:-33.5,y:-379.05},0).wait(1).to({scaleX:0.1205,scaleY:0.1205,rotation:153.2903,x:-32.45,y:-393.45},0).wait(1).to({scaleX:0.1195,scaleY:0.1195,rotation:163.5097,x:-30.6,y:-405.5},0).wait(1).to({scaleX:0.1185,scaleY:0.1185,rotation:173.729,x:-27.95,y:-415.05},0).wait(1).to({scaleX:0.1176,scaleY:0.1176,rotation:183.9484,x:-24.55,y:-422.05},0).wait(1).to({scaleX:0.1166,scaleY:0.1166,rotation:194.1677,x:-20.4,y:-426.45},0).wait(1).to({scaleX:0.1156,scaleY:0.1156,rotation:204.3871,x:-15.7,y:-428.05},0).wait(1).to({scaleX:0.1146,scaleY:0.1146,rotation:214.6065,x:-10.5,y:-426.95},0).wait(1).to({scaleX:0.1136,scaleY:0.1136,rotation:224.8258,x:-4.8,y:-423.05},0).wait(1).to({scaleX:0.1126,scaleY:0.1126,rotation:235.0452,x:1.2,y:-416.4},0).wait(1).to({scaleX:0.1117,scaleY:0.1117,rotation:245.2645,x:7.3,y:-406.8},0).wait(1).to({scaleX:0.1107,scaleY:0.1107,rotation:255.4839,x:13.55,y:-394.55},0).wait(1).to({scaleX:0.1097,scaleY:0.1097,rotation:265.7032,x:19.8,y:-379.45},0).wait(1).to({scaleX:0.1087,scaleY:0.1087,rotation:275.9226,x:26,y:-361.7},0).wait(1).to({scaleX:0.1077,scaleY:0.1077,rotation:286.1419,x:32.05,y:-341.25},0).wait(1).to({scaleX:0.1067,scaleY:0.1067,rotation:296.3613,x:37.9,y:-318.35},0).wait(1).to({scaleX:0.1058,scaleY:0.1058,rotation:306.5806,x:43.5,y:-292.9},0).wait(1).to({scaleX:0.1048,scaleY:0.1048,rotation:316.8,x:48.8,y:-265.15},0).to({_off:true},1).wait(1));

	// Layer_10
	this.instance_3 = new lib.star_1();
	this.instance_3.setTransform(2.2,7.75,0.1353,0.1353,0,0,0,47.3,102.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:146.6,regY:141.7,scaleX:0.1363,scaleY:0.1255,rotation:10.2194,x:24.8,y:-23.35},0).wait(1).to({scaleX:0.1373,scaleY:0.1158,rotation:20.4387,x:32.8,y:-57.9},0).wait(1).to({scaleX:0.1383,scaleY:0.1061,rotation:30.6581,x:39.8,y:-90.6},0).wait(1).to({scaleX:0.1393,scaleY:0.0963,rotation:40.8774,x:45.6,y:-121.6},0).wait(1).to({scaleX:0.1403,scaleY:0.0866,rotation:51.0968,x:50.4,y:-150.75},0).wait(1).to({scaleX:0.1413,scaleY:0.0769,rotation:61.3161,x:54.25,y:-178.15},0).wait(1).to({scaleX:0.1423,scaleY:0.0671,rotation:71.5355,x:57.05,y:-203.9},0).wait(1).to({scaleX:0.1433,scaleY:0.0574,rotation:81.7548,x:58.95,y:-227.85},0).wait(1).to({scaleX:0.1443,scaleY:0.0477,rotation:91.9742,x:59.95,y:-250.15},0).wait(1).to({scaleX:0.1453,scaleY:0.0379,rotation:102.1935,x:60.2,y:-270.75},0).wait(1).to({scaleX:0.1463,scaleY:0.0282,rotation:112.4129,x:59.55,y:-289.55},0).wait(1).to({scaleX:0.1473,scaleY:0.0185,rotation:122.6323,x:58.2,y:-306.7},0).wait(1).to({scaleX:0.1483,scaleY:0.0087,rotation:132.8516,x:56.15,y:-322.15},0).wait(1).to({scaleX:0.1494,scaleY:0.001,rotation:0,skewX:-36.929,skewY:143.071,x:53.45,y:-335.8},0).wait(1).to({scaleX:0.1504,scaleY:0.0107,skewX:-26.7097,skewY:153.2903,x:50.1,y:-347.65},0).wait(1).to({scaleX:0.1514,scaleY:0.0205,skewX:-16.4903,skewY:163.5097,x:46.15,y:-357.6},0).wait(1).to({scaleX:0.1524,scaleY:0.0302,skewX:-6.271,skewY:173.729,x:41.65,y:-365.8},0).wait(1).to({scaleX:0.1534,scaleY:0.0399,skewX:3.9484,skewY:183.9484,x:36.65,y:-372.05},0).wait(1).to({scaleX:0.1544,scaleY:0.0497,skewX:14.1677,skewY:194.1677,x:31.15,y:-376.35},0).wait(1).to({scaleX:0.1554,scaleY:0.0594,skewX:24.3871,skewY:204.3871,x:25.1,y:-378.6},0).wait(1).to({scaleX:0.1564,scaleY:0.0691,skewX:34.6065,skewY:214.6065,x:18.55,y:-378.8},0).wait(1).to({scaleX:0.1574,scaleY:0.0789,skewX:44.8258,skewY:224.8258,x:11.45,y:-376.85},0).wait(1).to({scaleX:0.1584,scaleY:0.0886,skewX:55.0452,skewY:235.0452,x:3.85,y:-372.8},0).wait(1).to({scaleX:0.1594,scaleY:0.0983,skewX:65.2645,skewY:245.2645,x:-4.3,y:-366.45},0).wait(1).to({scaleX:0.1604,scaleY:0.1081,skewX:75.4839,skewY:255.4839,x:-12.95,y:-357.8},0).wait(1).to({scaleX:0.1614,scaleY:0.1178,skewX:85.7032,skewY:265.7032,x:-22.25,y:-346.85},0).wait(1).to({scaleX:0.1624,scaleY:0.1275,skewX:95.9226,skewY:275.9226,x:-32.2,y:-333.5},0).wait(1).to({scaleX:0.1635,scaleY:0.1373,skewX:106.1419,skewY:286.1419,x:-42.95,y:-317.7},0).wait(1).to({scaleX:0.1645,scaleY:0.147,skewX:116.3613,skewY:296.3613,x:-54.4,y:-299.5},0).wait(1).to({scaleX:0.1655,scaleY:0.1567,skewX:126.5806,skewY:306.5806,x:-66.75,y:-278.8},0).wait(1).to({scaleX:0.1665,scaleY:0.1665,skewX:136.8,skewY:316.8,x:-80,y:-255.6},0).to({_off:true},1).wait(1));

	// Layer_9
	this.instance_4 = new lib.star_3();
	this.instance_4.setTransform(1.7,7.4,0.1353,0.1353,0,0,0,49.1,54.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1).to({regX:146.6,regY:144.3,scaleX:0.1325,scaleY:0.1325,x:10.3,y:-30.2},0).wait(1).to({scaleX:0.1297,scaleY:0.1297,x:6.35,y:-77.4},0).wait(1).to({scaleX:0.1269,scaleY:0.1269,x:3.1,y:-122},0).wait(1).to({scaleX:0.1241,scaleY:0.1241,x:0.5,y:-164},0).wait(1).to({scaleX:0.1213,scaleY:0.1213,x:-1.45,y:-203.45},0).wait(1).to({scaleX:0.1185,scaleY:0.1185,x:-2.75,y:-240.3},0).wait(1).to({scaleX:0.1157,scaleY:0.1157,x:-3.4,y:-274.6},0).wait(1).to({scaleX:0.113,scaleY:0.113,y:-306.3},0).wait(1).to({scaleX:0.1102,scaleY:0.1102,x:-2.7,y:-335.45},0).wait(1).to({scaleX:0.1074,scaleY:0.1074,x:-1.35,y:-362.05},0).wait(1).to({scaleX:0.1046,scaleY:0.1046,x:0.65,y:-386.05},0).wait(1).to({scaleX:0.1018,scaleY:0.1018,x:3.25,y:-407.45},0).wait(1).to({scaleX:0.099,scaleY:0.099,x:6.55,y:-426.3},0).wait(1).to({scaleX:0.0962,scaleY:0.0962,x:10.55,y:-442.6},0).wait(1).to({scaleX:0.0934,scaleY:0.0934,x:15.15,y:-456.35},0).wait(1).to({scaleX:0.0907,scaleY:0.0907,x:20.4,y:-467.5},0).wait(1).to({scaleX:0.0879,scaleY:0.0879,x:26.35,y:-476.05},0).wait(1).to({scaleX:0.0851,scaleY:0.0851,x:32.9,y:-482.1},0).wait(1).to({scaleX:0.0823,scaleY:0.0823,x:40.15,y:-485.6},0).wait(1).to({scaleX:0.0795,scaleY:0.0795,x:48.1,y:-486.45},0).wait(1).to({scaleX:0.0767,scaleY:0.0767,x:56.65,y:-484.75},0).wait(1).to({scaleX:0.0739,scaleY:0.0739,x:65.9,y:-480.5},0).wait(1).to({scaleX:0.0712,scaleY:0.0712,x:75.8,y:-473.7},0).wait(1).to({scaleX:0.0684,scaleY:0.0684,x:86.3,y:-464.25},0).wait(1).to({scaleX:0.0656,scaleY:0.0656,x:97.5,y:-452.3},0).wait(1).to({scaleX:0.0628,scaleY:0.0628,x:109.35,y:-437.75},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:121.9,y:-420.6},0).wait(1).to({scaleX:0.0572,scaleY:0.0572,x:135.1,y:-400.9},0).wait(1).to({scaleX:0.0544,scaleY:0.0544,x:148.95,y:-378.65},0).wait(1).to({scaleX:0.0516,scaleY:0.0516,x:163.4,y:-353.75},0).wait(1).to({scaleX:0.0489,scaleY:0.0489,x:178.55,y:-326.35},0).to({_off:true},1).wait(1));

	// Layer_8
	this.instance_5 = new lib.star_1();
	this.instance_5.setTransform(1.7,7.1,0.1353,0.1353,0,0,0,52.9,140.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(1).to({regX:146.6,regY:141.7,scaleX:0.1292,scaleY:0.1326,rotation:10.2194,x:23.1,y:-42.7},0).wait(1).to({scaleX:0.1232,scaleY:0.1299,rotation:20.4387,x:30.75,y:-90.15},0).wait(1).to({scaleX:0.1171,scaleY:0.1272,rotation:30.6581,x:37.4,y:-135.25},0).wait(1).to({scaleX:0.1111,scaleY:0.1245,rotation:40.8774,x:43.1,y:-177.95},0).wait(1).to({scaleX:0.105,scaleY:0.1219,rotation:51.0968,x:47.85,y:-218.25},0).wait(1).to({scaleX:0.099,scaleY:0.1192,rotation:61.3161,x:51.9,y:-256.3},0).wait(1).to({scaleX:0.0929,scaleY:0.1165,rotation:71.5355,x:55.2,y:-292},0).wait(1).to({scaleX:0.0869,scaleY:0.1138,rotation:81.7548,x:57.9,y:-325.25},0).wait(1).to({scaleX:0.0808,scaleY:0.1111,rotation:91.9742,x:59.9,y:-356.1},0).wait(1).to({scaleX:0.0748,scaleY:0.1085,rotation:102.1935,x:61.45,y:-384.5},0).wait(1).to({scaleX:0.0687,scaleY:0.1058,rotation:112.4129,x:62.4,y:-410.3},0).wait(1).to({scaleX:0.0627,scaleY:0.1031,rotation:122.6323,x:62.9,y:-433.55},0).wait(1).to({scaleX:0.0567,scaleY:0.1004,rotation:132.8516,y:-454.15},0).wait(1).to({scaleX:0.0506,scaleY:0.0977,rotation:143.071,x:62.45,y:-471.95},0).wait(1).to({scaleX:0.0446,scaleY:0.0951,rotation:153.2903,x:61.45,y:-487.05},0).wait(1).to({scaleX:0.0385,scaleY:0.0924,rotation:163.5097,x:59.95,y:-499.3},0).wait(1).to({scaleX:0.0325,scaleY:0.0897,rotation:173.729,x:57.75,y:-508.7},0).wait(1).to({scaleX:0.0264,scaleY:0.087,rotation:183.9484,x:55.05,y:-515.15},0).wait(1).to({scaleX:0.0204,scaleY:0.0843,rotation:194.1677,x:51.55,y:-518.75},0).wait(1).to({scaleX:0.0143,scaleY:0.0817,rotation:204.3871,x:47.4,y:-519.35},0).wait(1).to({scaleX:0.0083,scaleY:0.079,rotation:214.6065,x:42.35,y:-517.1},0).wait(1).to({scaleX:0.0022,scaleY:0.0763,rotation:224.8258,x:36.45,y:-511.95},0).wait(1).to({scaleX:0.0038,scaleY:0.0736,rotation:360,skewX:-124.9548,skewY:55.0452,x:29.75,y:-504},0).wait(1).to({scaleX:0.0099,scaleY:0.0709,skewX:-114.7355,skewY:65.2645,x:22.1,y:-493.15},0).wait(1).to({scaleX:0.0159,scaleY:0.0683,skewX:-104.5161,skewY:75.4839,x:13.45,y:-479.55},0).wait(1).to({scaleX:0.022,scaleY:0.0656,skewX:-94.2968,skewY:85.7032,x:3.85,y:-463.25},0).wait(1).to({scaleX:0.028,scaleY:0.0629,skewX:-84.0774,skewY:95.9226,x:-6.7,y:-444.3},0).wait(1).to({scaleX:0.034,scaleY:0.0602,skewX:-73.8581,skewY:106.1419,x:-18.25,y:-422.75},0).wait(1).to({scaleX:0.0401,scaleY:0.0575,skewX:-63.6387,skewY:116.3613,x:-30.7,y:-398.6},0).wait(1).to({scaleX:0.0461,scaleY:0.0549,skewX:-53.4194,skewY:126.5806,x:-44.05,y:-371.9},0).wait(1).to({scaleX:0.0522,scaleY:0.0522,skewX:-43.2,skewY:136.8,x:-58.25,y:-342.75},0).to({_off:true},1).wait(1));

	// Layer_7
	this.instance_6 = new lib.star_2();
	this.instance_6.setTransform(1.7,7.4,0.1353,0.1353,0,0,0,63.2,60.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(1).to({regX:146.6,regY:144.3,scaleX:0.1318,scaleY:0.1318,x:8.5,y:-41.85},0).wait(1).to({scaleX:0.1284,scaleY:0.1284,x:4.65,y:-99.05},0).wait(1).to({scaleX:0.125,scaleY:0.125,x:1.45,y:-153},0).wait(1).to({scaleX:0.1216,scaleY:0.1216,x:-1.1,y:-203.7},0).wait(1).to({scaleX:0.1182,scaleY:0.1182,x:-3,y:-251.05},0).wait(1).to({scaleX:0.1148,scaleY:0.1148,x:-4.25,y:-295.15},0).wait(1).to({scaleX:0.1114,scaleY:0.1114,x:-4.85,y:-335.9},0).wait(1).to({scaleX:0.108,scaleY:0.108,y:-373.35},0).wait(1).to({scaleX:0.1045,scaleY:0.1045,x:-4.1,y:-407.55},0).wait(1).to({scaleX:0.1011,scaleY:0.1011,x:-2.8,y:-438.45},0).wait(1).to({scaleX:0.0977,scaleY:0.0977,x:-0.8,y:-466.1},0).wait(1).to({scaleX:0.0943,scaleY:0.0943,x:1.85,y:-490.45},0).wait(1).to({scaleX:0.0909,scaleY:0.0909,x:5.15,y:-511.5},0).wait(1).to({scaleX:0.0875,scaleY:0.0875,x:9.15,y:-529.25},0).wait(1).to({scaleX:0.0841,scaleY:0.0841,x:13.7,y:-543.7},0).wait(1).to({scaleX:0.0807,scaleY:0.0807,x:18.95,y:-554.9},0).wait(1).to({scaleX:0.0772,scaleY:0.0772,x:24.85,y:-562.8},0).wait(1).to({scaleX:0.0738,scaleY:0.0738,x:31.45,y:-567.45},0).wait(1).to({scaleX:0.0704,scaleY:0.0704,x:38.65,y:-568.8},0).wait(1).to({scaleX:0.067,scaleY:0.067,x:46.5,y:-566.85},0).wait(1).to({scaleX:0.0636,scaleY:0.0636,x:55.05,y:-561.6},0).wait(1).to({scaleX:0.0602,scaleY:0.0602,x:64.2,y:-553.1},0).wait(1).to({scaleX:0.0568,scaleY:0.0568,x:74.05,y:-541.3},0).wait(1).to({scaleX:0.0534,scaleY:0.0534,x:84.5,y:-526.2},0).wait(1).to({scaleX:0.0499,scaleY:0.0499,x:95.65,y:-507.85},0).wait(1).to({scaleX:0.0465,scaleY:0.0465,x:107.4,y:-486.2},0).wait(1).to({scaleX:0.0431,scaleY:0.0431,x:119.85,y:-461.25},0).wait(1).to({scaleX:0.0397,scaleY:0.0397,x:132.95,y:-432.95},0).wait(1).to({scaleX:0.0363,scaleY:0.0363,x:146.7,y:-401.4},0).wait(1).to({scaleX:0.0329,scaleY:0.0329,x:161.1,y:-366.55},0).wait(1).to({scaleX:0.0295,scaleY:0.0295,x:176.15,y:-328.4},0).to({_off:true},1).wait(1));

	// Layer_6
	this.instance_7 = new lib.star_1();
	this.instance_7.setTransform(1.7,7.1,0.1353,0.1353,0,0,0,45.1,140.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(1).to({regX:146.6,regY:141.7,scaleX:0.1316,scaleY:0.1302,x:23.2,y:-45.85},0).wait(1).to({scaleX:0.128,scaleY:0.1251,x:30,y:-96.1},0).wait(1).to({scaleX:0.1244,scaleY:0.12,x:36,y:-143.45},0).wait(1).to({scaleX:0.1207,scaleY:0.1149,x:41,y:-187.95},0).wait(1).to({scaleX:0.1171,scaleY:0.1098,x:45.1,y:-229.65},0).wait(1).to({scaleX:0.1134,scaleY:0.1047,x:48.35,y:-268.45},0).wait(1).to({scaleX:0.1098,scaleY:0.0996,x:50.6,y:-304.5},0).wait(1).to({scaleX:0.1062,scaleY:0.0945,x:51.95,y:-337.6},0).wait(1).to({scaleX:0.1025,scaleY:0.0894,x:52.45,y:-367.95},0).wait(1).to({scaleX:0.0989,scaleY:0.0843,x:52,y:-395.35},0).wait(1).to({scaleX:0.0953,scaleY:0.0792,x:50.6,y:-419.95},0).wait(1).to({scaleX:0.0916,scaleY:0.0742,x:48.35,y:-441.75},0).wait(1).to({scaleX:0.088,scaleY:0.0691,x:45.15,y:-460.7},0).wait(1).to({scaleX:0.0844,scaleY:0.064,x:41.05,y:-476.8},0).wait(1).to({scaleX:0.0807,scaleY:0.0589,x:36.05,y:-490.05},0).wait(1).to({scaleX:0.0771,scaleY:0.0538,x:30.1,y:-500.5},0).wait(1).to({scaleX:0.0735,scaleY:0.0487,x:23.25,y:-508.05},0).wait(1).to({scaleX:0.0698,scaleY:0.0436,x:15.55,y:-512.8},0).wait(1).to({scaleX:0.0662,scaleY:0.0385,x:6.9,y:-514.7},0).wait(1).to({scaleX:0.0626,scaleY:0.0334,x:-2.7,y:-513.75},0).wait(1).to({scaleX:0.0589,scaleY:0.0283,x:-13.15,y:-510},0).wait(1).to({scaleX:0.0553,scaleY:0.0232,x:-24.55,y:-503.4},0).wait(1).to({scaleX:0.0517,scaleY:0.0181,x:-36.9,y:-493.95},0).wait(1).to({scaleX:0.048,scaleY:0.0131,x:-50.1,y:-481.65},0).wait(1).to({scaleX:0.0444,scaleY:0.008,x:-64.25,y:-466.5},0).wait(1).to({scaleX:0.0408,scaleY:0.0029,x:-79.35,y:-448.55},0).wait(1).to({scaleX:0.0371,scaleY:0.0022,skewX:180,x:-95.3,y:-427.7},0).wait(1).to({scaleX:0.0335,scaleY:0.0073,x:-112.2,y:-404.05},0).wait(1).to({scaleX:0.0299,scaleY:0.0124,x:-130,y:-377.55},0).wait(1).to({scaleX:0.0262,scaleY:0.0175,x:-148.75,y:-348.2},0).wait(1).to({scaleX:0.0226,scaleY:0.0226,x:-168.4,y:-315.95},0).to({_off:true},1).wait(1));

	// Layer_5
	this.instance_8 = new lib.star_2();
	this.instance_8.setTransform(2.2,7.5,0.1353,0.1353,0,0,0,62.9,60.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(1).to({regX:146.6,regY:144.3,scaleX:0.1343,scaleY:0.1275,x:6.05,y:-35.4},0).wait(1).to({scaleX:0.1333,scaleY:0.1198,x:-0.7,y:-86.95},0).wait(1).to({scaleX:0.1323,scaleY:0.112,x:-6.75,y:-135.95},0).wait(1).to({scaleX:0.1314,scaleY:0.1043,x:-12.1,y:-182.25},0).wait(1).to({scaleX:0.1304,scaleY:0.0965,x:-16.75,y:-225.95},0).wait(1).to({scaleX:0.1294,scaleY:0.0888,x:-20.65,y:-267},0).wait(1).to({scaleX:0.1284,scaleY:0.081,x:-23.75,y:-305.4},0).wait(1).to({scaleX:0.1274,scaleY:0.0733,x:-26.2,y:-341.25},0).wait(1).to({scaleX:0.1265,scaleY:0.0655,x:-27.95,y:-374.4},0).wait(1).to({scaleX:0.1255,scaleY:0.0577,x:-28.95,y:-404.9},0).wait(1).to({scaleX:0.1245,scaleY:0.05,x:-29.25,y:-432.85},0).wait(1).to({scaleX:0.1235,scaleY:0.0422,x:-28.85,y:-458.15},0).wait(1).to({scaleX:0.1226,scaleY:0.0345,x:-27.7,y:-480.8},0).wait(1).to({scaleX:0.1216,scaleY:0.0267,x:-25.85,y:-500.85},0).wait(1).to({scaleX:0.1206,scaleY:0.019,x:-23.2,y:-518.3},0).wait(1).to({scaleX:0.1196,scaleY:0.0112,x:-19.9,y:-533.1},0).wait(1).to({scaleX:0.1187,scaleY:0.0035,x:-15.9,y:-545.3},0).wait(1).to({scaleX:0.1177,scaleY:0.0043,skewX:180,x:-11.15,y:-554.8},0).wait(1).to({scaleX:0.1167,scaleY:0.012,x:-5.7,y:-561.8},0).wait(1).to({scaleX:0.1157,scaleY:0.0198,x:0.5,y:-566.1},0).wait(1).to({scaleX:0.1148,scaleY:0.0275,x:7.4,y:-567.75},0).wait(1).to({scaleX:0.1138,scaleY:0.0353,x:15.05,y:-566.85},0).wait(1).to({scaleX:0.1128,scaleY:0.043,x:23.35,y:-563.3},0).wait(1).to({scaleX:0.1118,scaleY:0.0508,x:32.4,y:-557.1},0).wait(1).to({scaleX:0.1109,scaleY:0.0585,x:42.2,y:-548.3},0).wait(1).to({scaleX:0.1099,scaleY:0.0663,x:52.7,y:-536.85},0).wait(1).to({scaleX:0.1089,scaleY:0.074,x:63.95,y:-522.85},0).wait(1).to({scaleX:0.1079,scaleY:0.0818,x:75.9,y:-506.1},0).wait(1).to({scaleX:0.107,scaleY:0.0895,x:88.6,y:-486.8},0).wait(1).to({scaleX:0.106,scaleY:0.0973,x:102,y:-464.85},0).wait(1).to({scaleX:0.105,scaleY:0.105,x:116.15,y:-440.25},0).to({_off:true},1).wait(1));

	// Layer_4
	this.instance_9 = new lib.star_4();
	this.instance_9.setTransform(2.2,7.5,0.1353,0.1353,0,0,0,60.6,58.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(1).to({regX:146.6,regY:144.3,scaleX:0.1338,scaleY:0.1338,rotation:-10.2194,x:23.65,y:-30.4},0).wait(1).to({scaleX:0.1322,scaleY:0.1322,rotation:-20.4387,x:32.25,y:-77.65},0).wait(1).to({scaleX:0.1307,scaleY:0.1307,rotation:-30.6581,x:39.65,y:-122.6},0).wait(1).to({scaleX:0.1292,scaleY:0.1292,rotation:-40.8774,x:45.75,y:-165.2},0).wait(1).to({scaleX:0.1277,scaleY:0.1277,rotation:-51.0968,x:50.6,y:-205.15},0).wait(1).to({scaleX:0.1262,scaleY:0.1262,rotation:-61.3161,x:54.25,y:-242.65},0).wait(1).to({scaleX:0.1247,scaleY:0.1247,rotation:-71.5355,x:56.55,y:-277.4},0).wait(1).to({scaleX:0.1232,scaleY:0.1232,rotation:-81.7548,x:57.85,y:-309.4},0).wait(1).to({scaleX:0.1217,scaleY:0.1217,rotation:-91.9742,x:57.95,y:-338.55},0).wait(1).to({scaleX:0.1202,scaleY:0.1202,rotation:-102.1935,x:57.05,y:-364.9},0).wait(1).to({scaleX:0.1187,scaleY:0.1187,rotation:-112.4129,x:55.2,y:-388.35},0).wait(1).to({scaleX:0.1172,scaleY:0.1172,rotation:-122.6323,x:52.5,y:-408.75},0).wait(1).to({scaleX:0.1157,scaleY:0.1157,rotation:-132.8516,x:48.95,y:-426.4},0).wait(1).to({scaleX:0.1142,scaleY:0.1142,rotation:-143.071,x:44.7,y:-441},0).wait(1).to({scaleX:0.1127,scaleY:0.1127,rotation:-153.2903,x:39.85,y:-452.75},0).wait(1).to({scaleX:0.1112,scaleY:0.1112,rotation:-163.5097,x:34.4,y:-461.7},0).wait(1).to({scaleX:0.1097,scaleY:0.1097,rotation:-173.729,x:28.5,y:-467.75},0).wait(1).to({scaleX:0.1082,scaleY:0.1082,rotation:-183.9484,x:22.15,y:-471},0).wait(1).to({scaleX:0.1067,scaleY:0.1067,rotation:-194.1677,x:15.4,y:-471.65},0).wait(1).to({scaleX:0.1052,scaleY:0.1052,rotation:-204.3871,x:8.2,y:-469.6},0).wait(1).to({scaleX:0.1037,scaleY:0.1037,rotation:-214.6065,x:0.7,y:-465},0).wait(1).to({scaleX:0.1022,scaleY:0.1022,rotation:-224.8258,x:-7.15,y:-458},0).wait(1).to({scaleX:0.1007,scaleY:0.1007,rotation:-235.0452,x:-15.35,y:-448.5},0).wait(1).to({scaleX:0.0992,scaleY:0.0992,rotation:-245.2645,x:-23.95,y:-436.75},0).wait(1).to({scaleX:0.0977,scaleY:0.0977,rotation:-255.4839,x:-33,y:-422.65},0).wait(1).to({scaleX:0.0962,scaleY:0.0962,rotation:-265.7032,x:-42.5,y:-406.3},0).wait(1).to({scaleX:0.0947,scaleY:0.0947,rotation:-275.9226,x:-52.5,y:-387.8},0).wait(1).to({scaleX:0.0932,scaleY:0.0932,rotation:-286.1419,x:-63.1,y:-367.1},0).wait(1).to({scaleX:0.0917,scaleY:0.0917,rotation:-296.3613,x:-74.4,y:-344.3},0).wait(1).to({scaleX:0.0902,scaleY:0.0902,rotation:-306.5806,x:-86.3,y:-319.4},0).wait(1).to({scaleX:0.0887,scaleY:0.0887,rotation:-316.8,x:-99.1,y:-292.35},0).to({_off:true},1).wait(1));

	// Layer_3
	this.instance_10 = new lib.star_3();
	this.instance_10.setTransform(2.2,7.5,0.1353,0.1353,0,0,0,94.2,92);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).wait(1).to({regX:146.6,regY:144.3,scaleX:0.1345,scaleY:0.1273,x:5.85,y:-46.15},0).wait(1).to({scaleX:0.1338,scaleY:0.1193,x:2.95,y:-103.45},0).wait(1).to({scaleX:0.1331,scaleY:0.1113,x:0.6,y:-157.4},0).wait(1).to({scaleX:0.1323,scaleY:0.1033,x:-1.15,y:-207.95},0).wait(1).to({scaleX:0.1316,scaleY:0.0953,x:-2.4,y:-255.1},0).wait(1).to({scaleX:0.1309,scaleY:0.0873,x:-3.1,y:-298.9},0).wait(1).to({scaleX:0.1301,scaleY:0.0793,x:-3.3,y:-339.3},0).wait(1).to({scaleX:0.1294,scaleY:0.0713,x:-2.9,y:-376.3},0).wait(1).to({scaleX:0.1287,scaleY:0.0633,x:-1.95,y:-409.95},0).wait(1).to({scaleX:0.1279,scaleY:0.0553,x:-0.45,y:-440.25},0).wait(1).to({scaleX:0.1272,scaleY:0.0473,x:1.6,y:-467.15},0).wait(1).to({scaleX:0.1265,scaleY:0.0393,x:4.15,y:-490.65},0).wait(1).to({scaleX:0.1257,scaleY:0.0313,x:7.3,y:-510.85},0).wait(1).to({scaleX:0.125,scaleY:0.0234,x:10.9,y:-527.6},0).wait(1).to({scaleX:0.1243,scaleY:0.0154,x:15.15,y:-541},0).wait(1).to({scaleX:0.1235,scaleY:0.0074,x:19.85,y:-551.05},0).wait(1).to({scaleX:0.1228,scaleY:0.0006,skewX:180,x:25.2,y:-557.7},0).wait(1).to({scaleX:0.1221,scaleY:0.0086,x:31.05,y:-561},0).wait(1).to({scaleX:0.1213,scaleY:0.0166,x:37.45,y:-560.9},0).wait(1).to({scaleX:0.1206,scaleY:0.0246,x:44.4,y:-557.45},0).wait(1).to({scaleX:0.1199,scaleY:0.0326,x:51.85,y:-550.65},0).wait(1).to({scaleX:0.1191,scaleY:0.0406,x:59.9,y:-540.4},0).wait(1).to({scaleX:0.1184,scaleY:0.0486,x:68.5,y:-526.85},0).wait(1).to({scaleX:0.1177,scaleY:0.0566,x:77.65,y:-509.9},0).wait(1).to({scaleX:0.1169,scaleY:0.0646,x:87.35,y:-489.55},0).wait(1).to({scaleX:0.1162,scaleY:0.0726,x:97.6,y:-465.85},0).wait(1).to({scaleX:0.1155,scaleY:0.0805,x:108.3,y:-438.75},0).wait(1).to({scaleX:0.1147,scaleY:0.0885,x:119.65,y:-408.3},0).wait(1).to({scaleX:0.114,scaleY:0.0965,x:131.55,y:-374.45},0).wait(1).to({scaleX:0.1133,scaleY:0.1045,x:144,y:-337.2},0).wait(1).to({scaleX:0.1125,scaleY:0.1125,x:156.95,y:-296.55},0).to({_off:true},1).wait(1));

	// Layer_2
	this.instance_11 = new lib.star_4();
	this.instance_11.setTransform(2.2,7.5,0.1353,0.1353,0,0,0,62.9,60.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).wait(1).to({regX:146.6,regY:144.3,scaleX:0.1331,scaleY:0.1287,rotation:10.2141,x:22.55,y:-28.65},0).wait(1).to({scaleX:0.131,scaleY:0.1221,rotation:20.4282,x:30.85,y:-73.95},0).wait(1).to({scaleX:0.1289,scaleY:0.1155,rotation:30.6422,x:38.3,y:-117.05},0).wait(1).to({scaleX:0.1267,scaleY:0.1089,rotation:40.8563,x:45.2,y:-157.95},0).wait(1).to({scaleX:0.1246,scaleY:0.1023,rotation:51.0704,x:51.4,y:-196.7},0).wait(1).to({scaleX:0.1225,scaleY:0.0957,rotation:61.2845,x:57.1,y:-233.05},0).wait(1).to({scaleX:0.1204,scaleY:0.0891,rotation:71.4986,x:62.25,y:-267.15},0).wait(1).to({scaleX:0.1182,scaleY:0.0825,rotation:81.7126,x:66.95,y:-298.9},0).wait(1).to({scaleX:0.1161,scaleY:0.0759,rotation:91.9267,x:71.1,y:-328.15},0).wait(1).to({scaleX:0.114,scaleY:0.0693,rotation:102.1408,x:74.9,y:-354.95},0).wait(1).to({scaleX:0.1119,scaleY:0.0627,rotation:112.3549,x:78.1,y:-379.25},0).wait(1).to({scaleX:0.1097,scaleY:0.0561,rotation:122.569,x:80.95,y:-400.9},0).wait(1).to({scaleX:0.1076,scaleY:0.0495,rotation:132.7831,x:83.2,y:-419.95},0).wait(1).to({scaleX:0.1055,scaleY:0.0429,rotation:142.9971,x:84.95,y:-436.4},0).wait(1).to({scaleX:0.1034,scaleY:0.0363,rotation:153.2112,x:86.15,y:-450.05},0).wait(1).to({scaleX:0.1012,scaleY:0.0297,rotation:163.4253,x:86.8,y:-461.15},0).wait(1).to({scaleX:0.0991,scaleY:0.0231,rotation:173.6394,x:86.75,y:-469.5},0).wait(1).to({scaleX:0.097,scaleY:0.0165,rotation:183.8535,x:86.1,y:-475.15},0).wait(1).to({scaleX:0.0949,scaleY:0.0099,rotation:194.0675,x:84.75,y:-478.15},0).wait(1).to({scaleX:0.0927,scaleY:0.0033,rotation:204.2816,x:82.75,y:-478.45},0).wait(1).to({scaleX:0.0906,rotation:360,skewX:34.4957,skewY:-145.5043,x:80,y:-476},0).wait(1).to({scaleX:0.0885,scaleY:0.0099,skewX:44.7098,skewY:-135.2902,x:76.55,y:-470.95},0).wait(1).to({scaleX:0.0864,scaleY:0.0165,skewX:54.9239,skewY:-125.0761,x:72.35,y:-463.3},0).wait(1).to({scaleX:0.0842,scaleY:0.0232,skewX:65.1379,skewY:-114.8621,x:67.35,y:-452.95},0).wait(1).to({scaleX:0.0821,scaleY:0.0298,skewX:75.352,skewY:-104.648,x:61.75,y:-440},0).wait(1).to({scaleX:0.08,scaleY:0.0363,skewX:85.5661,skewY:-94.4339,x:55.35,y:-424.5},0).wait(1).to({scaleX:0.0779,scaleY:0.043,skewX:95.7802,skewY:-84.2198,x:48.35,y:-406.35},0).wait(1).to({scaleX:0.0757,scaleY:0.0496,skewX:105.9943,skewY:-74.0057,x:40.6,y:-385.6},0).wait(1).to({scaleX:0.0736,scaleY:0.0562,skewX:116.2084,skewY:-63.7916,x:32.15,y:-362.3},0).wait(1).to({scaleX:0.0715,scaleY:0.0628,skewX:126.4224,skewY:-53.5776,x:23.05,y:-336.25},0).wait(1).to({scaleX:0.0694,scaleY:0.0694,skewX:136.6365,skewY:-43.3635,x:13.4,y:-307.6},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_12 = new lib.star_1();
	this.instance_12.setTransform(2.2,7.75,0.1353,0.1353,0,0,0,75.8,102.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).wait(1).to({regX:146.6,regY:141.7,scaleX:0.1339,scaleY:0.1339,rotation:-10.2194,x:17.65,y:-41.2},0).wait(1).to({scaleX:0.1325,scaleY:0.1325,rotation:-20.4387,x:22.8,y:-92.65},0).wait(1).to({scaleX:0.1312,scaleY:0.1312,rotation:-30.6581,x:27.1,y:-141.2},0).wait(1).to({scaleX:0.1298,scaleY:0.1298,rotation:-40.8774,x:30.6,y:-186.85},0).wait(1).to({scaleX:0.1285,scaleY:0.1285,rotation:-51.0968,x:33.25,y:-229.5},0).wait(1).to({scaleX:0.1271,scaleY:0.1271,rotation:-61.3161,x:35.25,y:-269.1},0).wait(1).to({scaleX:0.1257,scaleY:0.1257,rotation:-71.5355,x:36.5,y:-305.65},0).wait(1).to({scaleX:0.1244,scaleY:0.1244,rotation:-81.7548,x:37.1,y:-339.05},0).wait(1).to({scaleX:0.123,scaleY:0.123,rotation:-91.9742,x:37.05,y:-369.25},0).wait(1).to({scaleX:0.1217,scaleY:0.1217,rotation:-102.1935,x:36.5,y:-396.4},0).wait(1).to({scaleX:0.1203,scaleY:0.1203,rotation:-112.4129,x:35.35,y:-420.2},0).wait(1).to({scaleX:0.1189,scaleY:0.1189,rotation:-122.6323,x:33.8,y:-440.95},0).wait(1).to({scaleX:0.1176,scaleY:0.1176,rotation:-132.8516,x:31.8,y:-458.45},0).wait(1).to({scaleX:0.1162,scaleY:0.1162,rotation:-143.071,x:29.5,y:-472.8},0).wait(1).to({scaleX:0.1149,scaleY:0.1149,rotation:-153.2903,x:26.85,y:-484},0).wait(1).to({scaleX:0.1135,scaleY:0.1135,rotation:-163.5097,x:24,y:-492.1},0).wait(1).to({scaleX:0.1121,scaleY:0.1121,rotation:-173.729,x:20.9,y:-497.25},0).wait(1).to({scaleX:0.1108,scaleY:0.1108,rotation:-183.9484,x:17.55,y:-499.3},0).wait(1).to({scaleX:0.1094,scaleY:0.1094,rotation:-194.1677,x:14.1,y:-498.4},0).wait(1).to({scaleX:0.1081,scaleY:0.1081,rotation:-204.3871,x:10.4,y:-494.6},0).wait(1).to({scaleX:0.1067,scaleY:0.1067,rotation:-214.6065,x:6.55,y:-487.9},0).wait(1).to({scaleX:0.1054,scaleY:0.1054,rotation:-224.8258,x:2.55,y:-478.45},0).wait(1).to({scaleX:0.104,scaleY:0.104,rotation:-235.0452,x:-1.75,y:-466.25},0).wait(1).to({scaleX:0.1026,scaleY:0.1026,rotation:-245.2645,x:-6.2,y:-451.3},0).wait(1).to({scaleX:0.1013,scaleY:0.1013,rotation:-255.4839,x:-10.95,y:-433.65},0).wait(1).to({scaleX:0.0999,scaleY:0.0999,rotation:-265.7032,x:-15.95,y:-413.3},0).wait(1).to({scaleX:0.0986,scaleY:0.0986,rotation:-275.9226,x:-21.4,y:-390.35},0).wait(1).to({scaleX:0.0972,scaleY:0.0972,rotation:-286.1419,x:-27.25,y:-364.7},0).wait(1).to({scaleX:0.0958,scaleY:0.0958,rotation:-296.3613,x:-33.4,y:-336.5},0).wait(1).to({scaleX:0.0945,scaleY:0.0945,rotation:-306.5806,x:-40.2,y:-305.65},0).wait(1).to({scaleX:0.0931,scaleY:0.0931,rotation:-316.8,x:-47.5,y:-272.15},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.6,-578.9,357.4,624.6);


(lib.target_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1).call(this.frame_24).wait(1));

	// Layer_2
	this.instance = new lib.target_6_fly();
	this.instance.setTransform(0.15,33.85,1,1,0,0,0,20.9,43.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:0.9535,scaleY:0.9529,rotation:-34.2857,x:0,y:1.85},0).wait(1).to({scaleX:0.907,scaleY:0.9059,rotation:-68.5714,x:-0.7,y:-28.15},0).wait(1).to({scaleX:0.8606,scaleY:0.8588,rotation:-102.8571,x:-2,y:-56.05},0).wait(1).to({scaleX:0.8141,scaleY:0.8117,rotation:-137.1429,x:-3.85,y:-81.75},0).wait(1).to({scaleX:0.7676,scaleY:0.7647,rotation:-171.4286,x:-6.2,y:-105.3},0).wait(1).to({scaleX:0.7211,scaleY:0.7176,rotation:-205.7143,x:-8.95,y:-126.55},0).wait(1).to({scaleX:0.6746,scaleY:0.6705,rotation:-240,x:-12.1,y:-145.55},0).wait(1).to({scaleX:0.6282,scaleY:0.6235,rotation:-274.2857,x:-15.65,y:-162.15},0).wait(1).to({scaleX:0.5817,scaleY:0.5764,rotation:-308.5714,x:-19.45,y:-176.4},0).wait(1).to({scaleX:0.5352,scaleY:0.5293,rotation:-342.8571,x:-23.75,y:-188.2},0).wait(1).to({scaleX:0.4887,scaleY:0.4823,rotation:-377.1429,x:-28.35,y:-197.5},0).wait(1).to({scaleX:0.4423,scaleY:0.4352,rotation:-411.4286,x:-33.35,y:-204.25},0).wait(1).to({scaleX:0.3958,scaleY:0.3881,rotation:-445.7143,x:-38.5,y:-208.3},0).wait(1).to({scaleX:0.3493,scaleY:0.3411,rotation:-480,x:-43.95,y:-209.7},0).wait(1).to({scaleX:0.3028,scaleY:0.294,rotation:-514.2857,x:-49.6,y:-208.4},0).wait(1).to({scaleX:0.2564,scaleY:0.2469,rotation:-548.5714,x:-55.5,y:-204.25},0).wait(1).to({scaleX:0.2099,scaleY:0.1999,rotation:-582.8571,x:-61.45,y:-197.25},0).wait(1).to({scaleX:0.1634,scaleY:0.1528,rotation:-617.1429,x:-67.6,y:-187.4},0).wait(1).to({scaleX:0.1169,scaleY:0.1057,rotation:-651.4286,x:-73.9,y:-174.65},0).wait(1).to({scaleX:0.0704,scaleY:0.0587,rotation:-685.7143,x:-80.3,y:-158.7},0).wait(1).to({scaleX:0.024,scaleY:0.0116,rotation:-720,x:-86.7,y:-139.8},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AAACAE","#858585","#CFD0D1","#555556"],[0,0.451,0.698,1],-20.7,0,20.7,0).s().p("AAHGoIgLAAIAAAAIgIAAIgBAAIgHAAIgBAAIgFAAIgBAAIgBAAIgBAAIgBAAIAAgBIABAAQAAgBgIAAIAAABIgBAAIgIAAIgGgBIgBAAQgigCgfgHIgBAAQgWgEgSgJIAAgBIgEgEIAAAAQgDgIgFgGQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAAABQADgGgCgFIABAAIgFgBIAAAAQgDgCgGgCIABgBIAAAAIgBAAIgGgCIAAAAIgGgDIAAAAIgFgCIAAgBIgDgCIAAAAIgGgGIAAgDIAAhsIAAh5IAAh3IAAh5IAAh4IAAh5IAAAAIAAgDIACgFQAKgIALgGIABAAQAFgEAEgGIABAAIAAgBIALgNIAAgBIAAAAQACABAEAAIAAAAIAGAAQAGADADgBIAAAAQgDgHAFgCIgBAAIAAgBQASgEAUgBIABAAIAAgBIAQgBQgCAKACAJIACABIAAAAIgBAAIgHAGIAAAAIgBADQACAFAGABIACAAIAAAMQgBAIABAIQACAKgIgBIAIACIAAAAIABgBQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAIAAgBQgCgNABgPQABgGgCgCIAWAEIAaAEQAGACAEgDIABgCIABgBIAUgDIABAAIANgCIABAAIAGgBIA8gIIAAAAIgDAAIABgBQAAgIACgDIgQACQgXAFgXACIAAABIgHAAIAAABIgBAAIgNACQgFACgEgBIAAgBIAEgDIBpgQQAMgCAPAAIAAAQIAAABQASgGAUgBIABAAQAKAOAMAKIAAABQAJAEAHAGIACABIgBAAIgBAAIADACIABAAIAAAAIAAABIAAAAIgIABIAJADIAAAAIAAALIAAB5IAAB4IAAB4IAAB4IAAB5IABBmIgBAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIAAABIgEAEIgBAAQgHAFgJADIAAABIgBAAIgFABQADABAEgCIAFgCIAAABIAAAAIgFADIAAABQgKAHgHAJIAAABIgEAJIgBAAIgCADIAAAAQgfAQgrAEQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAgBIAAgPQACgMgJgDIAAAAIgBAAIAAABIgBAAQgFgBgEABQADACAFgCIAAAAQAEACgBAIIgCAWIAAAAIACACIAAAAIgLABIgBAAIgFAAIgBAAIgCAAIAAAAIgBAAIgBAAIgFAAIAAABIgBAAIAAAAIgFAAIAAABIgBAAIgKAAIgBAAIgHAAIAAABIgBAAIgBAAIAAAAIgCAAIAAgBIgTAAIAAAAIAAABIAAAAgAAPGmIAAgBQAAgPgBgOQAAAQABAOgAhRGCIAAABIgDAAQAEACgBAIIgBAUQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQABABAFAAQACgBgCAAQgDgDAAgIQACgLgCgJIAKAAIABAAIgLgBIAAAAIgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAABgBAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAgAgVGFIAAABIAWAAIABAAQAJABAKgBIAAAAIACAAIgdgBIgPAAgAAbGFQAHABAFgCIgMAAgAgcGFIAAgBIgBAAIgHAAQADACAFgBgAA7GEQAJAAgJgBgAhFGDIAAABIADgBIgDAAgABBGDQAJABgJgCgAhiGAQAFABgFgBgAhtF/QAGABgGgBgAhvF/IABAAQgCgCgGAAIAAABIABABIABAAIACAAIADAAgAiXF4QAHAAgHAAgAAJlYQAFABAGgBIAAAAIAAgBIgMAAQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAgAgSlYQAGABAGgBIgBAAIgLAAgAAXlYIAAAAIAEAAIgEAAgAAjlYIABAAIAEAAIABAAQAAgDgFACIgBAAIgFAAQACABADAAgAAslZQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIgBgBIgBAAIgBABgAA9lbIAAgBIAAAAIgCAAQAAABAAAAQAAABAAAAQABAAAAAAQAAAAABgBgAhOldQALAAgLgBgABQmEIABAAQAAALABANQABAJgEAEIAAABIABAAQAHAAgBgLQgCgHABgIQAAgIgCgFIgBAAIgCAAgAhzljQADABAEAAIAAAAQgCgBgDAAIgCAAgAiIlnIAAAAIAAgBIAAAAQgFgBgEAAQADACAGAAgAidlrQAGABgGgCgAikltQAGACgGgCgAitluIABAAIAAgBIgBAAIgNgBQAGACAHAAgAgQl7IAFABIABAAIABAAIAAAAQANACAOgCIgSAAIAGgEIAAgBIA2gHIABAAIAHAAIABACQAAADAFgBIAFgCQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAAAABgBQADgCgGAAQAPgBANgEQgIAAgLACQgzAIg1AHQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAIABAAgABlmTIAAABQAGABADgCIAAAAIAEgDIAAAAIAAgBIABgBIAAAAIACgCIAAgBIABgBIAAgBQgCgCgIACIAAABIAAAAIAAABQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIAAABIAAAAIgCACIAAABIgBAAIgDACg");
	this.shape.setTransform(0.05,34.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(160,161,162,0.824)").s().p("AgBAAQAGAAgGAAg");
	this.shape_1.setTransform(-14.9375,72.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(129,131,133,0.831)").s().p("AADABQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIgCAAIgBAAIAAAAQAFAAACABg");
	this.shape_2.setTransform(-11.5,72.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(129,131,132,0.824)").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_3.setTransform(-10.8125,72.7833);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(127,128,130,0.8)").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_4.setTransform(-9.6875,72.895);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(126,128,130,0.827)").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABAAIAAAAIgBAAIgBABIgBgBg");
	this.shape_5.setTransform(-8.4,73.0583);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CDCED0").s().p("AADAAIgBAAIgEAAIgBAAIAAAAQAHAAAAAAg");
	this.shape_6.setTransform(-3.35,76.7167);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(148,148,150,0.714)").s().p("AgCAAIAEAAIABAAIAAAAIgBAAIgBABIgDgBg");
	this.shape_7.setTransform(-3.4,76.8063);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(57,57,57,0.29)").s().p("AADAAIgGAAIAAAAIABAAIABAAIAEAAIABAAIAAAAIgBAAg");
	this.shape_8.setTransform(-2.45,76.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(108,109,110,0.533)").s().p("AADAAIgGAAIAAAAIAGAAIABAAIAAAAIgBAAg");
	this.shape_9.setTransform(-1.65,76.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(157,157,158,0.741)").s().p("AADAAIgGAAIAAAAIAHAAIAAAAIgBAAg");
	this.shape_10.setTransform(-0.85,76.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(94,94,96,0.478)").s().p("AgCAAIAFAAIAAAAIgDAAIgCAAg");
	this.shape_11.setTransform(-4.95,76.7333);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(143,145,148,0.965)").s().p("AgGAPQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAgBIACgSQABgJgFgBIADAAIAAgBIAAAAIAAAAIAKABIgBAAIgJAAQACAJgCAKQAAAIADADQACAAgCAAQgFAAgBgBg");
	this.shape_12.setTransform(-7.775,74.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(132,133,135,0.804)").s().p("AgBAAQAGAAgGAAg");
	this.shape_13.setTransform(-6.7375,73.2167);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(139,140,141,0.682)").s().p("AgDAAIAGAAIABAAIAAAAIgEAAIgDAAg");
	this.shape_14.setTransform(-3.25,73.345);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(187,188,189,0.82)").s().p("AABACQgCgCgBgBIAFACIAAAAIAAAAIgBABg");
	this.shape_15.setTransform(-18.275,71.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(188,188,189,0.796)").s().p("AACABQgDAAgBgBIAFABg");
	this.shape_16.setTransform(-18.95,70.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(191,191,191,0.796)").s().p("AACABQgBAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIADABIAAAAg");
	this.shape_17.setTransform(-19.475,70.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(225,225,226,0.973)").s().p("AAPAMQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAAAAIgLgLIgBAAIgPgKIAAgBIADACIAAAAQAAAAABABQAAAAAAAAQABABABAAQAAAAABAAIAAAAQACADAEAAIABAAIAAAAQABACACABIABAAQAGACADABIAAAAIAFABIAAAAQABAFgCAGg");
	this.shape_18.setTransform(-18.3,71.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(208,208,209,0.835)").s().p("AACAEQgCgDgCgEIAEAFIABAAIAAABIAAABg");
	this.shape_19.setTransform(-20.325,69.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(198,198,198,0.812)").s().p("AABACIgBgCIAAABIgBAAIAAgBIAAAAIAAgBIACACIABABg");
	this.shape_20.setTransform(-19.875,70.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(170,170,170,0.675)").s().p("AAAD3IAAh4IAAh5IAAh3IAAh5IAAh4IABAAIAAB4IAAB5IAAB3IAAB5IAAB4IAABsIgBhsg");
	this.shape_21.setTransform(-20.7,33.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(158,159,160,0.784)").s().p("AgBAAIAAAAIADABIgDgBg");
	this.shape_22.setTransform(-15.5875,-1.9429);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(165,165,166,0.792)").s().p("AgBAAIAAAAIACABIgCgBg");
	this.shape_23.setTransform(-16.3,-2.0929);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(180,181,181,0.808)").s().p("AAGABQgGAAgGgBIAMAAIABAAIAAABIgBAAg");
	this.shape_24.setTransform(-17.925,-2.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(152,153,155,0.827)").s().p("AAEABQgEAAgEgBQAEAAAEAAIABAAIAAABg");
	this.shape_25.setTransform(-14.125,-1.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(127,128,130,0.808)").s().p("AgCAAIAAAAIAEAAIgEAAg");
	this.shape_26.setTransform(-7.5375,-0.5667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(126,128,130,0.824)").s().p("AADABQgDAAgDgBQADAAADABg");
	this.shape_27.setTransform(-11.15,-1.08);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(153,154,154,0.729)").s().p("AgFAAIAAAAIAKAAIABAAIgHAAIgEAAg");
	this.shape_28.setTransform(-1.25,-0.0167);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A4A6A9").s().p("AgJADQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAIAAAAQAGABAEgEIABAAQgBAEAGAAIABAAIgBAAIgTADIAAgBg");
	this.shape_29.setTransform(-1.15,-4.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ADADAF").s().p("AAEAAIgIABIAAgBIABAAIAAAAIAIAAIAAAAIgBABg");
	this.shape_30.setTransform(-1.025,-5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D6D7D8").s().p("AgFACIAAgBIADgCIAAAAIAIgBIAAABIAAABIgBAAQgDADgDAAIgEgBg");
	this.shape_31.setTransform(-1.25,-4.6942);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#868789").s().p("AgEABIABgBIAAAAQADABAFgBIAAAAIgCABIgHAAg");
	this.shape_32.setTransform(-0.875,-5.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A2A5A8").s().p("AABAAIgBAAIgBAAIAAAAQABAAAAAAQABAAABAAQAAAAAAAAQAAAAAAAAg");
	this.shape_33.setTransform(-2.875,-6.8333);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999B9E").s().p("AgBABIAAgBIADAAIgCABg");
	this.shape_34.setTransform(-7.25,-6.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(86,86,88,0.514)").s().p("AgBAAIAAAAIADAAIAAAAIAAAAIgDAAg");
	this.shape_35.setTransform(-6.9,-8.975);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A2A5A9").s().p("AgCAAIAFAAIgBAAIgDAAIAAAAIgBAAg");
	this.shape_36.setTransform(-4.85,-6.8167);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9EA1A5").s().p("AACABIgBAAIgBAAIAAAAIgCgBIAFAAIAAABg");
	this.shape_37.setTransform(-5.575,-6.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(57,57,59,0.314)").s().p("AACABIgEAAIAAgBIAEAAIABAAIAAABg");
	this.shape_38.setTransform(-4.175,-9.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(124,126,127,0.745)").s().p("AgCAAIAEAAIABAAIAAAAIgFAAIAAAAg");
	this.shape_39.setTransform(-5.85,-9.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(126,127,129,0.733)").s().p("AgFAAIAKAAIgKAAg");
	this.shape_40.setTransform(-1.15,-9.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(129,130,133,0.729)").s().p("AgDAAIAGAAIABAAIAAAAIgHABIAAgBg");
	this.shape_41.setTransform(-3.5,-9.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(60,61,62,0.365)").s().p("AgGAAIAAAAIANAAIAAAAIgNAAg");
	this.shape_42.setTransform(-2.4,-9.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(144,146,149,0.976)").s().p("AgDASQAGAAgBgKQgBgHAAgHIAAgMIAAgBIAAAAIABABQABABAAAGQgBAOACAOIAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAABAAQAAAAAAAAQABABABAAIgBAAIAAABIgHgCg");
	this.shape_43.setTransform(-8.3,-2.475);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#96989B").s().p("AgCACIAAgBIAGgCIAAABIgBAAIgFACg");
	this.shape_44.setTransform(-7.95,-6.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F7F7F7").s().p("AgEACIAAAAIAAgCQAEgCAFgBIAAAAQgEABADAGIAAAAIgBAAQgDAAgEgCg");
	this.shape_45.setTransform(-14.425,-6.6625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(172,173,174,0.839)").s().p("AgCAAIAFAAIgBAAIgCAAIgCAAg");
	this.shape_46.setTransform(-15.825,-6.4667);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(105,106,108,0.894)").s().p("AgBABIACgBIABAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_47.setTransform(-15.925,-6.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(111,112,114,0.961)").s().p("AAAAEIgFgBIAAAAIAAgBIAAAAIAAAAQABAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAIACgCIABgBIAAAAIABAAIAAAAQABAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIAAABIAAABIgGAAg");
	this.shape_48.setTransform(-15.55,-6.8433);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(75,76,76,0.384)").s().p("AgCAAIAAAAIAEAAIABAAIAAAAIgFAAg");
	this.shape_49.setTransform(5.2,76.725);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(102,102,104,0.573)").s().p("AgCAAIADAAIABAAIABAAIAAAAIAAAAIgFAAIAAAAg");
	this.shape_50.setTransform(5.9,76.65);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(148,148,149,0.647)").s().p("AAGAAIgMAAIAAAAIAMAAIABAAIAAAAIgBAAg");
	this.shape_51.setTransform(1.4,76.875);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F2F2F3").s().p("AAEABIgBAAIgLAAIAAgBIAAAAIASAAIAAABIgGAAg");
	this.shape_52.setTransform(1.65,76.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(73,73,73,0.337)").s().p("AAEAAIgHAAIAAAAIAEAAIADAAIAAAAIAAAAg");
	this.shape_53.setTransform(2.475,76.875);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(159,159,161,0.741)").s().p("AgDAAIAGAAIABAAIAAAAIgHABIAAgBg");
	this.shape_54.setTransform(3.45,76.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(139,139,140,0.745)").s().p("AgFAAIAAAAIALAAIgGAAIgFAAg");
	this.shape_55.setTransform(3.325,73.345);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(149,150,150,0.69)").s().p("AAVAAIgBAAIgSAAIgBAAIgWAAIAAAAQAWAAAWAAg");
	this.shape_56.setTransform(0.05,73.4167);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F2F3F4").s().p("AgIAAIARAAIAAAAIAAAAIgHAAIgKAAg");
	this.shape_57.setTransform(1.225,73.495);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(117,117,118,0.82)").s().p("AgBAAIAAAAIADABIgDgBg");
	this.shape_58.setTransform(6.8125,73.1571);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(106,106,107,0.718)").s().p("AgBAAQAIAAgIAAg");
	this.shape_59.setTransform(6.175,73.225);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(106,106,108,0.808)").s().p("AgEAAQAEAAAEAAIABAAIAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgBAAIgDABIgDgBg");
	this.shape_60.setTransform(7.675,73.1167);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(123,124,126,0.992)").s().p("AgDAQIAAgBIACgUQABgIgEgCQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAgBIgBAAIAAAAIABAAIABAAQAHACgCANIAAAOQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAAAIAAABIgDAAIgDgBg");
	this.shape_61.setTransform(8.445,74.725);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(41,40,40,0.741)").s().p("AAAABIgBAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIABAAIABAAIgBABIgBACg");
	this.shape_62.setTransform(20.7,69.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(52,50,50,0.843)").s().p("AgKAHIAAgBQAJgDAHgEIAAAAIAEgEIAAgBIABABIAAAAIAAABIgGAEIAAAAIgJAGIAAgBIgFACIgBAAg");
	this.shape_63.setTransform(19.525,70.475);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(53,52,52,0.792)").s().p("AgDABIAFgBIABAAIABAAIgFABIgCAAg");
	this.shape_64.setTransform(18.175,71.23);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(122,122,124,0.655)").s().p("AgCAAIAEAAIABAAIAAAAIgBAAIgBABIgDgBg");
	this.shape_65.setTransform(3.35,-0.0937);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(160,160,161,0.808)").s().p("AgCAAQAKAAgKAAg");
	this.shape_66.setTransform(2.6,-0.0333);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(157,157,158,0.706)").s().p("AgEAAIAIAAIABAAIAAAAIgEAAIgFAAg");
	this.shape_67.setTransform(1.525,-0.0167);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F3F3F4").s().p("AgFAAIALAAIAAAAIgBAAIgIAAIgBAAIAAABIgBgBg");
	this.shape_68.setTransform(1.425,-0.0937);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(56,54,54,0.996)").s().p("AAEACIgHAAIgBAAIgBAAIgBAAIgEgBIAUgCIABAAIgHADg");
	this.shape_69.setTransform(-0.475,-3.625);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(242,242,244,0.996)").s().p("AgNAAIAIAAIAAAAIATAAIgOABIgNgBg");
	this.shape_70.setTransform(0.5,-3.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#ECECED").s().p("AAAgOQABAOgBAOIAAABQAAgOAAgPg");
	this.shape_71.setTransform(1.475,75.175);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(124,124,125,0.8)").s().p("AAAAAIABAAIAAAAIAAAAIgBABIAAgBg");
	this.shape_72.setTransform(6.025,-0.3219);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(152,153,154,0.863)").s().p("AABABIgDAAIAAgBQAFgBgBACg");
	this.shape_73.setTransform(3.9021,-0.1281);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(138,139,140,0.808)").s().p("AgBAAIABAAIABAAIABAAIgCABIgBgBg");
	this.shape_74.setTransform(4.575,-0.175);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(50,49,49,0.886)").s().p("AAEFoIgBhmIAAh5IAAh4IAAh4IAAh4IAAh5IAAgLIAAAAIgJgDIAHgBIABAAQAFAKgBARQgBAeAAAeIAAB5IAAB5IAAB3IAAB4IAAB5QABAQgBAOIgBAAg");
	this.shape_75.setTransform(20.3523,33.475);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(50,48,48,0.831)").s().p("AgBAAIABAAIAAAAIABAAIABABIgBAAIgBAAIgBgBg");
	this.shape_76.setTransform(20.35,-2.745);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(85,83,84,0.976)").s().p("AgGACIABAAQADgCgEgDIABAAIAAgBIAMAEIAAAAQAAAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABIAAABIgLgCg");
	this.shape_77.setTransform(13.975,-7.55);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A4A5A8").s().p("AgFACIAAgBIACgBIABAAQAEgCADABIABAAIAAAAIgDACIAAAAIgFABIgDAAg");
	this.shape_78.setTransform(10.8,-6.05);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CDCECF").s().p("AgEABIACgBIAAAAQACgBAEABIABAAIAAAAIgBAAIAAABIgBAAQgDgBgEACIAAgBg");
	this.shape_79.setTransform(11.025,-6.325);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(127,128,130,0.996)").s().p("AgCATIAAAAQACgFAAgIQgBgMABgMIgBAAIAAAAIABAAIABAAQACAFAAAIQgBAGABAHQACALgGAAIgBAAg");
	this.shape_80.setTransform(8.2882,-2.575);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(107,107,108,0.592)").s().p("AgCAAIAFAAIAAAAIgBAAIgCABIgCgBg");
	this.shape_81.setTransform(7.775,-8.8937);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(140,141,142,0.867)").s().p("AgBAAIAAAAIADAAIAAAAIgCABIgBgBg");
	this.shape_82.setTransform(8.9,-8.73);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#AEAFB0").s().p("AAEABIgIAAIAAgBIAIAAIABAAIAAAAIgBABg");
	this.shape_83.setTransform(11.4,-6.825);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#898A8C").s().p("AgEABIAAgBQAHgBACABIgBAAIgIABg");
	this.shape_84.setTransform(11.4,-6.9125);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#DCDCDD").s().p("AACABQgDgBgDABIAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAIgBIAAABIAAAAIgCABIgBAAg");
	this.shape_85.setTransform(11.25,-6.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F1F1F1").s().p("Ag9AIQA2gHAygHQALgCAIAAQgNAEgPABIgBAAIgMACIgBAAIg1AGIAAABIgBAAIgWADIgBAAIgBAAIgDgBg");
	this.shape_86.setTransform(4.05,-4.4083);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7E7F81").s().p("AAAABIgBgBIgHAAIAMgCIABAAQAGAAgEACQAAAAAAAAQAAAAAAAAQAAAAABAAQAAABABAAIgEACIgDAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_87.setTransform(7,-4.5025);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(84,84,85,0.435)").s().p("AgCAAIAFAAIgBAAIgCAAIgCAAg");
	this.shape_88.setTransform(7.175,-8.9667);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#AEAFB2").s().p("AgCgBIAAAAIAHABIABAAIAAAAQgGACgFAAIADgDg");
	this.shape_89.setTransform(2.725,-4.975);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#AEAEB0").s().p("AgFABIgBgBIANAAIgBAAIAAAAQgGAAgFACIAAgBg");
	this.shape_90.setTransform(3.075,-5.5083);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D7D7D8").s().p("AACACIgHAAIAAgBIAAgBQAFgBAGAAIAAAAIgEADg");
	this.shape_91.setTransform(3.075,-5.35);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#9C9EA1").s().p("AgCAAIABAAIADAAIABAAIgFAAg");
	this.shape_92.setTransform(1.75,-4.575);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(58,56,57,0.996)").s().p("AhEAUIgagEIgWgDIgBgBIAAAAIAAABIgCgBQgGgBgCgFIACgCIAAgBIAGgEIABAAIAGgEIABAAIACAAIAEgCIABAAIAMgCIABAAIABAAIACAAIAAAAIADgBIAAAAIADAAIABAAIAOAAIABAAIACAAIABAAQASACANAFIABAAIBogPIAKgCQAGADAHABIANADIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAHACAFAEIAAAAIAFAFIAAAAIgBAAQgVACgSAFIAAAAIAAgRQgOABgNACIhoAPIgFADIAAAAIAAABIgBABIAAAAIAAABIgBAAIAAABIAAAAIgEADIAAABIAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABIAAABIgBAAIAAACQgDACgDAAIgEgBg");
	this.shape_93.setTransform(3.6,-5.66);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(141,142,145,0.996)").s().p("AhLAOQgCgJACgJIgQABIAAABIgBAAQgUACgSACIAAABQgGACgEADQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQAhgNAugDIABAAIAOABIgBAAIgBAAQgCACABAFIAAAAQA7gCA7ACIAaAAIAAgBQgDgGAFABIABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAABgBIAAAAQAWACATAFIABAAIAAABIgBAAQAEADgDACIgBAAQgIgBgFgCIgLACIhpAOIAAAAQgNgFgRgDIABAAQAAAAAAAAQAAAAAAAAQgBAAgBAAQgBAAgBAAIAAAAIgBAAIgOAAIgGAAQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABgBIAAABIgDABIAAgBIgGgBIACACIgMACIgBAAIgFABIAAAAIABAAIgCABIAAgBIgHADIAAABg");
	this.shape_94.setTransform(-0.8607,-7.45);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#8B8C8F").s().p("AgZAKIgFAAIAAgBQAAgGgDgCIAAgBIAHAAIAAAAQAWgDAXgEIAPgCQgBADgBAHIgBAAIADAAIAAABIg6AIIgBAAgAgXAIQAFAAAGgCIAAgBIAEgFIABAAIgPAAIABABIAAACIAAABIAAABIAAAAIgCADg");
	this.shape_95.setTransform(4.6,-5.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#363434").s().p("AgKABIAAgBIABAAIAAgBIACgBIAAgBIAOgCIAAAAQAEACAAAFIAAABIgBAAIAAABIgBAAIgNACIgBAAIgBAAQgEAAAAgFg");
	this.shape_96.setTransform(0.4227,-4.9227);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(59,59,60,0.322)").s().p("AAEAAIgIAAIAAAAIAIAAIABAAIAAAAIgBAAg");
	this.shape_97.setTransform(2.7,-9.225);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(106,107,108,0.584)").s().p("AADAAIgGAAIAAAAIAGAAIABAAIAAAAg");
	this.shape_98.setTransform(1.8,-9.225);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(138,140,142,0.769)").s().p("AgDAAIAGAAIAAAAIAAAAIAAAAIgDAAIgDAAg");
	this.shape_99.setTransform(1.1,-9.2167);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(117,118,120,0.565)").s().p("AgCAAIAFAAIAAAAIgBAAIgCABIgCgBg");
	this.shape_100.setTransform(6.25,-9.0437);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D5D7DA").s().p("AgCAAIABAAIAEAAIAAAAIAAAAIgDAAIgCAAg");
	this.shape_101.setTransform(5.3,-9.055);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(177,179,181,0.996)").s().p("AAyAGQg5gDg8ACIgBAAQgBgFACgBIACAAIABAAIgOgBIAFAAIAAAAIAEAAIABAAIAGgBIAAAAIAIAAIACAAIABAAIAFAAIAAAAIAIgBIAAAAIAOAAIALgBIABAAIAMAAIAAAAQACABAEAAIABAAIAGAAIABAAIAKAAIABAAIAAAAIABAAIAAABQADABAEgBIAJAAQADABADgBIAAAAIABAAIABAAIABAAIABAAQABABAEAAIABAAIACAAIABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIABAAIAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAABAAIABAAIAFABIABAAIAAAAIgBAAQgFgBADAFIAAACIgMAAIgOAAg");
	this.shape_102.setTransform(0.775,-8.6625);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(81,82,83,0.373)").s().p("AACAAIAAAAIgBAAIgDAAIAFAAIgBAAg");
	this.shape_103.setTransform(5.425,-9.1125);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(146,148,149,0.706)").s().p("AACABIgEAAIAAgBIAFAAIAAABIgBAAg");
	this.shape_104.setTransform(3.725,-9.15);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#CFD1D3").s().p("AgCAAIAEAAIABAAIABAAIgEAAIgCAAg");
	this.shape_105.setTransform(3.75,-9.0875);

	this.instance_1 = new lib.shooting_hole();
	this.instance_1.setTransform(-3,23.3,0.3315,0.3315,0,0,0,1.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},23).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-222.1,126.1,299);


(lib.target_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1).call(this.frame_24).wait(1));

	// Layer_2
	this.instance = new lib.target_5_fly();
	this.instance.setTransform(-0.15,37.7,1,1,0,0,0,20.7,38.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:20.8,regY:38.5,scaleX:0.9535,scaleY:0.953,rotation:-34.2857,x:-1.05,y:-3.1},0).wait(1).to({scaleX:0.9071,scaleY:0.906,rotation:-68.5714,x:-1.7,y:-40.55},0).wait(1).to({scaleX:0.8606,scaleY:0.859,rotation:-102.8571,x:-2,y:-74.85},0).wait(1).to({scaleX:0.8141,scaleY:0.812,rotation:-137.1429,x:-1.9,y:-105.9},0).wait(1).to({scaleX:0.7677,scaleY:0.765,rotation:-171.4286,x:-1.45,y:-133.85},0).wait(1).to({scaleX:0.7212,scaleY:0.718,rotation:-205.7143,x:-0.6,y:-158.6},0).wait(1).to({scaleX:0.6747,scaleY:0.671,rotation:-240,x:0.7,y:-180.2},0).wait(1).to({scaleX:0.6283,scaleY:0.624,rotation:-274.2857,x:2.25,y:-198.65},0).wait(1).to({scaleX:0.5818,scaleY:0.577,rotation:-308.5714,x:4.15,y:-214},0).wait(1).to({scaleX:0.5353,scaleY:0.53,rotation:-342.8571,x:6.4,y:-226.1},0).wait(1).to({scaleX:0.4889,scaleY:0.483,rotation:-377.1429,x:9.05,y:-235.15},0).wait(1).to({scaleX:0.4424,scaleY:0.436,rotation:-411.4286,x:11.95,y:-240.95},0).wait(1).to({scaleX:0.3959,scaleY:0.389,rotation:-445.7143,x:15.25,y:-243.55},0).wait(1).to({scaleX:0.3494,scaleY:0.342,rotation:-480,x:18.85,y:-243},0).wait(1).to({scaleX:0.303,scaleY:0.295,rotation:-514.2857,x:22.9,y:-239.25},0).wait(1).to({scaleX:0.2565,scaleY:0.248,rotation:-548.5714,x:27.3,y:-232.35},0).wait(1).to({scaleX:0.21,scaleY:0.201,rotation:-582.8571,x:32.05,y:-222.3},0).wait(1).to({scaleX:0.1636,scaleY:0.154,rotation:-617.1429,x:37.15,y:-209.05},0).wait(1).to({scaleX:0.1171,scaleY:0.107,rotation:-651.4286,x:42.65,y:-192.7},0).wait(1).to({scaleX:0.0706,scaleY:0.06,rotation:-685.7143,x:48.45,y:-173.1},0).wait(1).to({scaleX:0.0242,scaleY:0.013,rotation:-720,x:54.6,y:-150.35},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance_1 = new lib.CachedBmp_132();
	this.instance_1.setTransform(-20.85,-0.9,0.5,0.5);

	this.instance_2 = new lib.shooting_hole();
	this.instance_2.setTransform(-2.2,44.65,0.3094,0.3094,0,0,0,1.2,-0.1);

	this.instance_3 = new lib.CachedBmp_133();
	this.instance_3.setTransform(-20.85,-0.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},23).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-258.4,96.1,334.5);


(lib.target_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1).call(this.frame_24).wait(1));

	// Layer_2
	this.instance = new lib.target_4_fly();
	this.instance.setTransform(-0.45,46.4,1,1,0,0,0,26.4,30.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:0.9533,scaleY:0.9532,rotation:-34.2857,x:-1.55,y:15.7},0).wait(1).to({scaleX:0.9066,scaleY:0.9063,rotation:-68.5714,x:-2.45,y:-12.45},0).wait(1).to({scaleX:0.8599,scaleY:0.8595,rotation:-102.8571,x:-3.15,y:-38.15},0).wait(1).to({scaleX:0.8131,scaleY:0.8126,rotation:-137.1429,x:-3.6,y:-61.35},0).wait(1).to({scaleX:0.7664,scaleY:0.7658,rotation:-171.4286,x:-3.8,y:-82.15},0).wait(1).to({scaleX:0.7197,scaleY:0.719,rotation:-205.7143,x:-3.75,y:-100.5},0).wait(1).to({scaleX:0.673,scaleY:0.6721,rotation:-240,x:-3.5,y:-116.45},0).wait(1).to({scaleX:0.6263,scaleY:0.6253,rotation:-274.2857,x:-2.9,y:-129.9},0).wait(1).to({scaleX:0.5795,scaleY:0.5784,rotation:-308.5714,x:-2.15,y:-141},0).wait(1).to({scaleX:0.5328,scaleY:0.5316,rotation:-342.8571,x:-1.15,y:-149.6},0).wait(1).to({scaleX:0.4861,scaleY:0.4848,rotation:-377.1429,x:0.1,y:-155.8},0).wait(1).to({scaleX:0.4394,scaleY:0.4379,rotation:-411.4286,x:1.6,y:-159.5},0).wait(1).to({scaleX:0.3927,scaleY:0.3911,rotation:-445.7143,x:3.2,y:-160.85},0).wait(1).to({scaleX:0.346,scaleY:0.3443,rotation:-480,x:5.15,y:-159.65},0).wait(1).to({scaleX:0.2993,scaleY:0.2974,rotation:-514.2857,x:7.3,y:-156.1},0).wait(1).to({scaleX:0.2525,scaleY:0.2506,rotation:-548.5714,x:9.65,y:-150.05},0).wait(1).to({scaleX:0.2058,scaleY:0.2037,rotation:-582.8571,x:12.3,y:-141.55},0).wait(1).to({scaleX:0.1591,scaleY:0.1569,rotation:-617.1429,x:15.2,y:-130.65},0).wait(1).to({scaleX:0.1124,scaleY:0.1101,rotation:-651.4286,x:18.35,y:-117.3},0).wait(1).to({scaleX:0.0657,scaleY:0.0632,rotation:-685.7143,x:21.65,y:-101.45},0).wait(1).to({scaleX:0.019,scaleY:0.0164,rotation:-720,x:25.25,y:-83.2},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#808080","#CCCCCC","#9B9B9B","#808080"],[0,0.349,0.635,1],-26.3,0.1,26.4,0.1).s().p("ADYExIgdAAIgCAAIjBAAIgCAAIhVAAIgDAAIhyAAIAAgBIgUgFIAAgCQgPgJgKgOIAAgDQgBgKgFgHIAAgDIAAmUQAKgZAVgNIAAgCQA7gKBIAEIADAAQAkACAcgJQABAAAAgEQACgMgTgFIgDAAQgEgsAKgfIAAgCIBJAAIADAAIAQAAIADAAQAEAaAUAIQA3ATAmAjQACADAAAGQgBAMAQgEIAiAAIADAAQAgAMALAhIACABIAAGaIAAADIgCAAQgJAigiAIIAAADIgDAAgAA4j5QAEAagaABQgDAiApgHQAdgEAdACQAOABABgJQgIgRgXgEIgBgBIgCgBQgJgDgIgFIgDAAQgPgHgNgHg");
	this.shape.setTransform(-0.475,46.4);

	this.instance_1 = new lib.shooting_hole();
	this.instance_1.setTransform(4.3,53.7,0.4019,0.4019,0,0,0,1.8,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape},{t:this.instance_1}]},23).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.8,-172.8,64.3,249.70000000000002);


(lib.target_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(11).call(this.frame_34).wait(1));

	// Layer_2
	this.instance = new lib.target_3_brokenUp();
	this.instance.setTransform(-0.4,-27.7,1,1,0,0,0,18.4,49);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({rotation:-22.3182,x:-5.25,y:-35.25},0).wait(1).to({rotation:-44.6364,x:-9.7,y:-41.85},0).wait(1).to({rotation:-66.9545,x:-13.95,y:-47.35},0).wait(1).to({rotation:-89.2727,x:-17.85,y:-51.85},0).wait(1).to({rotation:-111.5909,x:-21.5,y:-55.25},0).wait(1).to({rotation:-133.9091,x:-24.85,y:-57.65},0).wait(1).to({rotation:-156.2273,x:-27.95,y:-59},0).wait(1).to({rotation:-178.5455,x:-30.7,y:-59.3},0).wait(1).to({rotation:-200.8636,x:-33.25,y:-58.6},0).wait(1).to({rotation:-223.1818,x:-35.45,y:-56.8},0).wait(1).to({rotation:-245.5,x:-37.4,y:-53.9},0).wait(1).to({rotation:-267.8182,x:-38.95,y:-50},0).wait(1).to({rotation:-290.1364,x:-40.2,y:-45.05},0).wait(1).to({rotation:-312.4545,x:-41.25,y:-39},0).wait(1).to({rotation:-334.7727,x:-41.95,y:-32},0).wait(1).to({rotation:-357.0909,x:-42.3,y:-23.9},0).wait(1).to({rotation:-379.4091,x:-42.4,y:-14.8},0).wait(1).to({rotation:-401.7273,x:-42.15,y:-4.65},0).wait(1).to({rotation:-424.0455,x:-41.65,y:6.55},0).wait(1).to({rotation:-446.3636,x:-40.85,y:18.75},0).wait(1).to({rotation:-468.6818,x:-39.75,y:32.05},0).wait(1).to({rotation:-491,x:-38.3,y:46.35},0).to({_off:true},1).wait(11));

	// Layer_3
	this.instance_1 = new lib.targrt_3_brokenDown();
	this.instance_1.setTransform(-0.3,38.55,1,1,0,0,0,18.4,38.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regY:38.3,rotation:4.9996,x:-0.25,y:38.65},0).wait(1).to({rotation:9.9993,x:-0.3},0).wait(1).to({rotation:14.9989},0).wait(1).to({rotation:11.9991,x:-0.25,y:38.7},0).wait(1).to({rotation:8.9993,x:-0.3},0).wait(1).to({rotation:5.9996,y:38.65},0).wait(1).to({rotation:2.9998},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-2.4998,y:38.6},0).wait(1).to({rotation:-4.9996,x:-0.25},0).wait(1).to({rotation:-7.4994},0).wait(1).to({rotation:-9.9993,x:-0.3},0).wait(1).to({rotation:-12.4991,x:-0.25},0).wait(1).to({rotation:-14.9989,x:-0.3,y:38.65},0).wait(1).to({rotation:-13.9369,y:38.6},0).wait(1).to({rotation:-12.8748,x:-0.25,y:38.65},0).wait(1).to({rotation:-11.8128},0).wait(1).to({rotation:-10.7508},0).wait(1).to({rotation:-9.6888,y:38.6},0).wait(1).to({rotation:-8.6267},0).wait(1).to({rotation:-7.5647,y:38.65},0).wait(1).to({rotation:-6.5027,y:38.6},0).to({_off:true},1).wait(11));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#578F22").s().p("AgMAAIAYAAIABAAIAAAAIgMABIgNgBg");
	this.shape.setTransform(-4.675,76.3571);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(84,127,44,0.725)").s().p("AAHAAIgOAAIAAAAIAPAAIAAAAg");
	this.shape_1.setTransform(-7.825,76.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(37,59,16,0.357)").s().p("AAHAAIgPAAIAAAAIAIAAIAAAAIAHAAIACAAIAAAAIgCAAg");
	this.shape_2.setTransform(-9.55,76.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(93,158,32,0.965)").s().p("AAdASIgIAAIgCAAQgtgGgXgdIADAAIAAAAQAHAKAMAHIABAAQAUAMAgABIAAAAIgBAAIgEAAQANACAOABIACAAQgJACgLAAIAAAAIgBAAg");
	this.shape_3.setTransform(-12.55,74.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(72,123,24,0.671)").s().p("AAAGOIAAjZIAAjXIAAjZIAAjZIABAAIAADZIAADZIAADXIAADZIAABHQgBgjAAgkg");
	this.shape_4.setTransform(-18.625,24.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(33,56,11,0.349)").s().p("AgHAWQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAGgVAIgSIABgBIACgBIAAABIAAABQgJAUgHAXg");
	this.shape_5.setTransform(-17.5167,-26.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(42,72,14,0.443)").s().p("AgoApIgDABIAAgBIAAgCQAdgzAxgaIACgBIAHgCIgBAAQg0AfgfA0g");
	this.shape_6.setTransform(-12.45,-32.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(71,135,13,0.886)").s().p("AAAAIIAAgBIAAgOQABAGgBAJg");
	this.shape_7.setTransform(-7.9929,-37.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(17,36,0,0.212)").s().p("AAAAKIAAgTIAAAAIAAARIAAACg");
	this.shape_8.setTransform(-9.2,-69.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(40,78,5,0.451)").s().p("AAAAHIAAgNIABAAIAAAMIAAABg");
	this.shape_9.setTransform(-8.1,-73.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(57,65,50,0.302)").s().p("AAEAAIgIAAIAAAAIAIAAIABAAIAAAAg");
	this.shape_10.setTransform(9.15,76.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1F9E5").s().p("AgRAAIAPAAIACAAIAKAAIAAAAIAFAAIACAAIABAAQgJABgJAAQgIAAgJgBg");
	this.shape_11.setTransform(8.6,76.3389);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8D9587").s().p("AgFAAIAKAAIABAAIAAAAIgLABIAAgBg");
	this.shape_12.setTransform(9.05,76.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(50,76,25,0.996)").s().p("AhZAKQgNgBADAEIgBAAQgbAAgUgGIAAABIgBAAQgLgHgIgJQAqgKA1AJQArAIAtABIAqAAQBAALAugXIAAABIAAAAQgJALgPAHIAAABIgBAAQgFAEgHACIgMgBIhCABQhHAAhHgEg");
	this.shape_13.setTransform(-0.475,74.0717);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(117,133,103,0.616)").s().p("AAJAAIgSAAIAAAAIASAAIAAAAIAAAAIAAAAg");
	this.shape_14.setTransform(7.7,76.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(230,244,219,0.996)").s().p("AAQABIgFAAIgBAAIgJAAIgBAAIgRAAIgBAAIAAgBQAVgBAQABIgBAAIgBABIgBAAg");
	this.shape_15.setTransform(8.525,76.7125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0E1508").s().p("ABgAIIgPAAIgCAAIgRAAIgBAAIhQAAIgCAAIgZAAIgBAAIgnAAIAAgBQghgBgTgMIAAgBQATAHAbgBIACAAQgDgDAMAAQBnAGBpgCIANAAIgCAAQgJAEgNACIAAABIgCAAIgFAAIgBAAIgKAAIAAABIgCAAg");
	this.shape_16.setTransform(-1.3,75.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5B7246").s().p("Ag4AFIANAAIABAAQA9AIAmgVIgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAIAAgBQgfAPglAAQgUAAgWgEg");
	this.shape_17.setTransform(11,73.464);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(172,203,144,0.961)").s().p("AAiABIhFAAIAAgBQAPAAANAAIABAAQASAAAVAAIABAAIACAAIAAABIgCAAg");
	this.shape_18.setTransform(3.2,76.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A9D481").s().p("AgCAAQgFABgDgBIATAAIACAAIAAAAQgGABgHAAg");
	this.shape_19.setTransform(3.275,76.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(196,220,175,0.988)").s().p("Ag5AJIAEAAIABAAQAIAAAFgCIAAgBIAGgBIAAAAIARAAIABAAQAUAEAQgFIgBAAIAAgBQANgCAJgDIACgBQAHgCAFgDIAAgBIABAAQgDAFgDADIAAABIABAAIgBAAQgOAHgRADIAAgBIABAAQgQgCgVACIAAABIgBAAIgKAAIgegBg");
	this.shape_20.setTransform(8.3,75.8313);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(129,181,80,0.996)").s().p("AAXADIhBAAIAAAAIgQgBIgCAAIgHAAIAAAAQALAAAJgCIgCAAQgOAAgNgCIAEAAIABAAIAmAAIABAAQANACAOgCIAAAAIBQAAIACAAIAAAAIgGABIgBAAIgVAAQADACAFgBIAAABIgBAAIgDAAIgBAAQgNABgPAAIAAABIgBAAg");
	this.shape_21.setTransform(-2.75,76.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#ECEDEA").s().p("AgGgBIABgBQAIgLAEAOQAAAEgDADIgBAAQgJAAAAgJg");
	this.shape_22.setTransform(3.9003,62.0837);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DAE4D0").s().p("AgHANIgBgBQgFgEgBgJIAAgBQADgIAHgEIABAAQAOgBADAKIAAACQACAMgKAGIgCAAIgEAAQgDAAgEgCgAgGgCIgBABQgBAKALgBQADgDgBgEQgBgIgEAAQgCAAgEAFg");
	this.shape_23.setTransform(4.016,62.0903);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(41,82,2,0.482)").s().p("AAAGSIAAjYIAAjYIAAjYIAAjZQABBqgBBtIAADZIAADXIABDZQAAAhgBAeIAAg+g");
	this.shape_24.setTransform(18.05,24.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EBEDE7").s().p("AACAHIgBAAQgBgFgEAAIgBAAIgQAAIAAgBQAGgFgCgCIAAgCIAFgEQAQgEAOgGIAAABQAGAIgEANIgGAVIgBABIAAAAQgEgOgHgBg");
	this.shape_25.setTransform(7.8762,-25.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(105,116,94,0.553)").s().p("AACADIgDgDIAAAAIgBgCQACACACACIABABIgBAAg");
	this.shape_26.setTransform(12.1,-33.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(188,211,166,0.953)").s().p("AgDgCIAAgCIAGAFIAAAAIABACIAAABIAAAAQgEgCgDgEg");
	this.shape_27.setTransform(11.5,-33.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(52,67,38,0.353)").s().p("AADAEIgBAAQgFgBAAgGQAHADAAAEg");
	this.shape_28.setTransform(8.3514,-36.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(88,160,20,0.996)").s().p("AgEGUIAAjZIAAjXIAAjZIAAjZQADgFABgIIABAAIAAgIIAAgBQAEAIAAAMIAAABIAADZIAADZIAADXIAADYIAAA/IAAABQgDAMgGAHIAAhRg");
	this.shape_29.setTransform(17.475,24.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(48,51,44,0.235)").s().p("AAAACIAAABIAAABIgBAAIgBgHIAAgBIACAEIABAAIABAAQACAFgBAAIgDgDg");
	this.shape_30.setTransform(17.5724,-25.2599);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(115,173,61,0.996)").s().p("AAYH7IAAgCQADgCADgFIgBAAIAAgBQAPgHAJgMIAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAIABgBQgnAWg8gIIABAAQgNgFgLgIQA8AQAtgYIACAAIAAjZIAAjYIAAjYIAAjYIAAg6QAKgYAIgbIABgBIABAAIACAJIAAAAQACADAAAEIAAABIAAABIAAAJIgBAAQgCAHgDAGIAADZIAADYIAADYIAADYIAABSIgBABQgNASgVAJIgBgBg");
	this.shape_31.setTransform(11.025,25.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(108,111,105,0.482)").s().p("AAQAWIAAABIgBAAQgPgbgTgVQAYAVAPAcIAAACIAAAAIgEgEg");
	this.shape_32.setTransform(14.55,-30.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(74,75,72,0.329)").s().p("AAHAOIgEgFIAAABIgBAAIgBgBQgCgLgGgKIAAgBIAFADIAAAAQAGAKAEANIAAACIgBgBg");
	this.shape_33.setTransform(16.925,-26.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#93C169").s().p("AgrJKQACg8ABg/IgBjZIAAjYIAAjXIgBgBQgOgVgCgeQAHg1AbglQAKgOACgUQAIgLACgRIAAgBQAMgeAPgdIAKgTIAUgiQACAGAAAJQACgxAAgyIAAAAIAAABIAAC/IgBABQgPAHgHAQIAAABQgBAPAFAHIgBAAQgvAlgSBDQADArAgAZIACAAIAADYIAADYIAADZQAAAxgDAuIgBAAQAAABAAAAQAAAAAAAAQABAAABAAQAAAAACAAIAAABQgeAEgYAMIAAgBgAA4nhIAAABIABgDIgBACg");
	this.shape_34.setTransform(-3,1.625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(182,187,180,0.769)").s().p("AAABoIAAjXIABAAIAADXIAAAIQgBgCAAgGg");
	this.shape_35.setTransform(7.85,-48.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(185,190,183,0.78)").s().p("AAAAKIAAgTIAAAAIAAASIAAABg");
	this.shape_36.setTransform(7.9,-62.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(185,189,181,0.784)").s().p("AAAAJIAAgQIAAAAIAAAOIAAACg");
	this.shape_37.setTransform(7.9,-64.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(173,208,142,0.996)").s().p("AgMK0IAAAAQgWgDgTgGQAAg5gBg4QgBgMAGgFQgNgBgNAAQgCAAgBAAQgBAAAAAAQgBAAABgBQAAAAAAAAIABgBQADgtAAgyIAAjYIAAjYIAAjYIgCAAQghgagDgrQAShDAwgkIAAAAQgEgIABgOIAAgBQAHgQAPgIIABAAIAAjAIAAgBIAAgBIAAhTQAFgJAJABIABAAQAHACgBANQgCAhADAhIAFA9QAJgHAGgIIAAABQgBANACgCIAAgBIABgPIABAAIAAABIAACpIgCAAQgHgFgMAAIAAAAIgLgIIgBAAQgOACAHAIIABAAQgTAKABAXIAAABQADAFAAAFIABAAQAMAKAHAIQgFAIgMAIQgcAWgLAmIAAANIAAABQAaAfAdAbIABAAIAADYIAADYIgBDZIABBoIgCAAQAbALAVARIABAAQAAAkgCAqQgBARAIAGQAHABABgGIAAgBQgBgpACgmQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAFAHAEAAIAAgBIAAjYIAAjZIgBjXQAAhcAEhaIACgMQAMgkAIgoQAFgXgNgOQgMgLgJgNIACAAQADAFAFADIAAgBIAEADIABAAIABAAIAAABQAVAVAOAcIABAAQAGALADAMIABABIgBABQgIAbgKAYIAAA6IAADXIAADZIAADYIAADZIgCAAQgbAOghAAQgWAAgXgGgAgfJHIAAABQABAKAFAEIABABQAFAEAHgCIACAAQAKgGgCgNIAAgCQgDgKgPABIgBAAQgHAEgDAIg");
	this.shape_38.setTransform(5.725,3.4817);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(23,37,10,0.227)").s().p("AAiAAIhFAAIAAAAIBFAAIABAAIAAAAIgBAAg");
	this.shape_39.setTransform(-2.45,-77);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(73,129,20,0.718)").s().p("AAGABIgMAAIAAgBIAMAAIABAAIAAABIgBAAg");
	this.shape_40.setTransform(3.775,-76.875);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(51,92,12,0.514)").s().p("AAFABIgKAAIAAgBIALAAIAAABIgBAAg");
	this.shape_41.setTransform(5.075,-76.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(58,77,40,0.408)").s().p("AAEADIgIgGQAHAAACAGIAAABIgBgBg");
	this.shape_42.setTransform(6.625,-76.3267);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(146,192,104,0.996)").s().p("AgfAXIABgCQACgRgBgTQgBgEACgBIACgBQgBgBgIgBIApAAIABAAIAMAAIABAAIALAAIACAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABIABAAIAAAVQABAOgCAGIgCABQgTAEgUAAIgZgBg");
	this.shape_43.setTransform(2.4393,-74.3939);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(47,47,47,0.192)").s().p("AAAAKIAAgBIAAgSQACAJgCAKg");
	this.shape_44.setTransform(9.0781,-69.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(228,230,227,0.925)").s().p("AAAAQIAAgEQABgMgBgOIAAgBIAAgBQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAACIAAASIAAABIAAABQABAGgCACIAAgBg");
	this.shape_45.setTransform(8.9393,-69.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(226,228,224,0.918)").s().p("AACAEQgBgEgBAAIAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQACABABAEIAAABIAAABg");
	this.shape_46.setTransform(8.6583,-71.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(214,231,201,0.996)").s().p("AAfLNQgIgHABgQQACgqAAglIgBAAQgVgQgagLIABAAIgBhpIABjYIAAjZIAAjXIgBgBQgdgbgZgeIAAgBIAAgNQALgnAcgVQALgIAFgIQgHgJgLgJIgBAAQAAgFgEgFIAAgBQAAgXASgKIgBgBQgHgIAOgBIABAAIALAHIAAABQAMAAAIAFIABAAIAAiqIAAgBIAAgBIAAiDQAQgJgFgfIAAgBQACABABAEIAAAAIABABQAAAPgCALIAAAEIAAABIAAABQgCAFgGABIAAATIAAACIgBAAIAAARIABAAIAAABIgBAAIAAAUIABAAIAAAPIAAABIgBAAIgBDYQAAAFACADIAAABIAAABQAAAHAGABIABAAQALAKANAIIAAAAIAAACIgBAAQAJANALALQANANgFAYQgIAngLAlIgDAMQgEBZABBcIABDYIAADYIAADZIAAABQgFAAgEgHQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAmAAApIAAACQgBAFgGAAIgBAAgAAEkPIgEADIAAACQABADgFAFIAAABIAPAAIABAAQAFAAABAFIABAAQAHABAEAPIAAgBIABgBIAGgVQAEgNgGgJIAAAAQgOAGgRAEg");
	this.shape_47.setTransform(6.1944,0.3021);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(88,88,88,0.353)").s().p("AAAAHIAAgBIAAgMQABAGgBAHIAAAAg");
	this.shape_48.setTransform(8.0167,-73.575);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(162,193,134,0.933)").s().p("AACAGQgFgBACgIIABgCIAAAAQACADAAAFIABAAIAAACIAAABIgBAAg");
	this.shape_49.setTransform(7.6983,-73.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(102,167,40,0.996)").s().p("AA8LyQguAAgqgIQg0gKgrALIAAgBIgCABIgBgBQgHgIgCgMIAAhHIAAjYIAAjZIAAjYIAAjYIAAgBIAAgEQACgDAAgFIAAgBQAHgYAKgUIAAgBQAgg0A1gfIABgBIAAgBIAAAAQACgKgCgHIAAhCIAAjZIgBgBQgKgDAAgOIAAgBIAAgSIAAgBIAAgGQAHgHADgJIABgBIAAgBIAAgMIAAgCIAAgDQAEgQAQgEIAAgBIBFAAIABAAIATAAIABAAIAAACIgBAAIgqAAQAIABABABIgBABQgDABACAEQAAAUgCARIAAACQAjAEAdgHIACgBQADgGgBgPIAAgVIABAAIAIAHIABAAIABABIABACQACAIABALIAAABIAAABIgBABQgCAJAGACIABAAQABAEADABIABABQAAABgBABQAAAAABAAQAAABAAAAQAAAAABAAIAAABIAAABQAFAfgQAJIAACDIAAABIgBAAIAAAQIAAABQgCACABgNIAAgCQgGAJgKAGIgFg9QgDggACgiQAAgNgGgCIgBAAQgJAAgGAJIAABTIAAABIAAAAQAAAzgCAwQAAgIgBgHIgUAiIgLATQgPAdgNAeIAAABQgCARgIALQgBAUgJAOQgcAlgHA1QACAeAOAVIABABIAADXIAADYIABDZQAAA/gCA8IAAABQAXgMAegEIAAgBQANAAANACQgFAEAAAMQACA5AAA4QASAGAXADIAAABQAKAHANAFIAAAAIgCAAIgNAAIgXABIgTgBgABMnCIAAgCIAAADIAAgBg");
	this.shape_50.setTransform(-4.9297,-1.4875);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(213,221,208,0.914)").s().p("AADAPQAAgGgDgDIAAgCQAAgJgCgJQAEAEABAJIAAABIAAANIAAABIAAABg");
	this.shape_51.setTransform(7.6,-74.225);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgYAWIgHgBIAAgCIABgCIABgCIAAgCIABgCIABgCIAAgCIAAgCIABgBIACgCIAAgBIACgBIACgCIACgBIACgCIACgDIADgBIABgBIAFgBIADgBIACgCIABgDIADgCIADgBIABAAIAAgBIADAAIAJABIAAACIAAADIgBACIAGABIACACIAAAAIACgCIAAAAIAAAAIADAAIAAACIgBACIgCADIAAACIgBABIgCACIgBACIgCACIgDABIgCACIgDACIgFACIgDACIAAAAIgDACIgCABIgBABIgFAAIgCAAIgBABIgCABIgEABIgDABIgDAAIgDABIgCAAgAANgBIAAABIACAAIAAgBIgCgBg");
	this.shape_52.setTransform(6.45,-3.25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(173,208,142,0.996)").s().p("AgMK0IAAAAQgWgDgTgGQAAg5gBg4QgBgMAGgFQgNgBgNAAQgCAAgBAAQgBAAAAAAQgBAAABgBQAAAAAAAAIABgBQADgtAAgyIAAjYIAAjYIAAjYIgCAAQghgagDgrQAShDAwgkIAAAAQgEgIABgOIAAgBQAHgQAPgIIABAAIAAjAIAAgBIAAgBIAAhTQAFgJAJABIABAAQAHACgBANQgCAhADAhIAFA9QAJgHAGgIIAAABQgBANACgCIAAgBIABgPIABAAIAAABIAACpIgCAAQgHgFgMAAIAAAAIgLgIIgBAAQgOACAHAIIABAAQgTAKABAXIAAABQADAFAAAFIABAAQAMAKAHAIQgFAIgMAIQgcAWgLAmIAAANIAAABQAaAfAdAbIABAAIAACEIgBAAIgCACIAAACIAAACIgBACIgBACIgBACIAAACIgBACIgBACIAAACIAIAAIAABAIAADYIgBDZIABBoIgCAAQAbALAVARIABAAQAAAkgCAqQgBARAIAGQAHABABgGIAAgBQgBgpACgmQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAFAHAEAAIAAgBIAAjYIAAjZIgBjXQAAhcAEhaIACgMQAMgkAIgoQAFgXgNgOQgMgLgJgNIACAAQADAFAFADIAAgBIAEADIABAAIABAAIAAABQAVAVAOAcIABAAQAGALADAMIABABIgBABQgIAbgKAYIAAA6IAADXIAADZIAADYIAADZIgCAAQgbAOghAAQgWAAgXgGgAgfJHIAAABQABAKAFAEIABABQAFAEAHgCIACAAQAKgGgCgNIAAgCQgDgKgPABIgBAAQgHAEgDAIg");
	this.shape_53.setTransform(5.725,3.4817);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(214,231,201,0.996)").s().p("AAfLNQgIgHABgQQACgqAAglIgBAAQgVgQgagLIABAAIgBhpIABjYIAAjZIAAg/IABAAIAEgBIADAAIACgBIAEgBIADAAIABgBIABgBIAGAAIABAAIACgCIACgCIAAAAIAEgCIAFgCIADgBIACgCIACgCIACgCIACgCIACgCIABgCIAAgCIABgCIABgCIABgCIgDgBIAAABIAAAAIgCABIAAABIgDgCIgFgCIABgCIAAgCIAAgCIgJgBIgDAAIAAAAIgCAAIgDACIgCACIgCACIgCACIgCACIgFABIgCAAIgCACIgCACIgCACIgCACIgCACIgCABIAAiDIgBgBQgdgbgZgeIAAgBIAAgNQALgnAcgVQALgIAFgIQgHgJgLgJIgBAAQAAgFgEgFIAAgBQAAgXASgKIgBgBQgHgIAOgBIABAAIALAHIAAABQAMAAAIAFIABAAIAAiqIAAgBIAAgBIAAiDQAQgJgFgfIAAgBQACABABAEIAAAAIABABQAAAPgCALIAAAEIAAABIAAABQgCAFgGABIAAATIAAACIgBAAIAAARIABAAIAAABIgBAAIAAAUIABAAIAAAPIAAABIgBAAIgBDYQAAAFACADIAAABIAAABQAAAHAGABIABAAQALAKANAIIAAAAIAAACIgBAAQAJANALALQANANgFAYQgIAngLAlIgDAMQgEBZABBcIABDYIAADYIAADZIAAABQgFAAgEgHQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAmAAApIAAACQgBAFgGAAIgBAAgAAEkPIgEADIAAACQABADgFAFIAAABIAPAAIABAAQAFAAABAFIABAAQAHABAEAPIAAgBIABgBIAGgVQAEgNgGgJIAAAAQgOAGgRAEgAAQglIAAAAIABAAIABABIgCABIAAgCg");
	this.shape_54.setTransform(6.1944,0.3021);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AEAB7IgCgCIgCgCIgCgCIgEgCIgCgCIAAgCIACgCIACgCIACgCIACgCIACgBIACAAIABACIADACIADACIACACIACACIAAABIAEAAIACgCIAEgCIACgCIABgCIACgCIACgCIACgCIABgCIABgCIABgCIgCgCIgDgCIgBgCIgBgCIgCgCIgCgCIgCgCIgCgCIgCgCIgCgCIgCgBIgDgCIgCgCIgCgCIgBgCIgCgCIgFAAIgBABIgBABIgDAAIgEABIgCABIgDAAIgEABIgBAAIgHgBIAAgCIAAgCIABgCIABgCIAAgCIABAAIgDAAIgEABIgDABIgEAAIgEABIgDABIgEAAIgEABIgGABIAAACIABACIABACIAAACIAAACIABACIAAACIABACIAAACIAAACIgBACIgBACIgCACIgCACIgCACIgCABIgCgBIAAgBIAAgCIAAgCIgBgCIgBgCIAAgCIAAgCIgBgCIAAgCIgBgCIAAgCIAAgCIAAgCIAAgCIACgCIACgCIACgCIACgCIACgCIAFgBIADgBIACAAIAFgBIAEgBIAEAAIADgBIAEgBIAEAAIADgBIADAAIABgBIAAgBIACgBIACgCIACgCIACgCIACgCIACgCIACAAIAFgBIADgCIABgBIABgBIABgBIABgBIABgBIAAAAIABgBIADgCIACAAIAAAAIADAAIABgBIgDgCIgFgCIgDgCIgFgCIgDgBIgBgBIgDAAIgHgBIgCgBIgEgBIgBgBIAAgBIAAgBIABgBIAAgCIACgCIABgCIABgBIACgCIABgCIACgCIABgCIACgCIACgCIABgCIACgCIACgCIABgCIABgCIABgBIACgCIACgCIACgCIACgCIACgCIACgCIACgCIACgCIABgCIABAAIAAAAIACAAIgCACIgBACIgBACIgCACIgCACIgCACIgCACIgCACIgBACIgBACIgCACIgCACIgBACIgCACIgCACIgBACIgBACIgCACIgBACIgBACIAAACIAAABIAEABIAJABIABAAIAEACIAEACIAFACIAEACIAEACIADACIAAABIgCACIgCACIgCACIgDACIAEABIAAACIAAACIgBACIAFACIADABIAAAAIACgBIAAAAIAAgBIADABIgBACIgBACIgBACIAAACIgBACIgCACIgCACIgCACIgCACIgCACIgDABIgCABIABABIACACIACACIACACIACACIACACIACACIACACIACACIADABIABACIABACIACACIAAACIADABIACACIgCACIAAACIgBACIgCACIgCACIgCACIgCACIgCACIgBACIgBACIgCACIgCACIgCACIgCABIgCACIgCACIgDACIgDACIgDACIgCACIgBAAIgGAAgAEQArIAAACIACgBIgBgBIgBAAgAkshyIACgCIACgCIACgCIABgBIABAAIABAAIAAgBIACABIgCABIgCACIgCACIgCACIgDAAg");
	this.shape_55.setTransform(-19.425,-7.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(173,208,142,0.996)").s().p("AgMK0IAAAAQgWgDgTgGQAAg5gBg4QgBgMAGgFQgNgBgNAAQgCAAgBAAQgBAAAAAAQgBAAABgBQAAAAAAAAIABgBQADgtAAgyIAAjYIAAjYIAAjYIgCAAQghgagDgrQAShDAwgkIAAAAQgEgIABgOIAAgBQAHgQAPgIIABAAIAAjAIAAgBIAAgBIAAhTQAFgJAJABIABAAQAHACgBANQgCAhADAhIAFA9QAJgHAGgIIAAABQgBANACgCIAAgBIABgPIABAAIAAABIAACpIgCAAQgHgFgMAAIAAAAIgLgIIgBAAQgOACAHAIIABAAQgTAKABAXIAAABQADAFAAAFIABAAQAMAKAHAIQgFAIgMAIQgcAWgLAmIAAANIAAABQAaAfAdAbIABAAIAABcIgBABIABABIAAAmIgBAAIAAABIgDAAIgEABIgEABIgEAAIgDABIgEABIgEAAIgEABIgDABIgDAAIgEACIgCACIgCACIgCACIgCABIgCACIAAACIAAACIAAACIAAACIABACIAAACIAAACIABACIAAACIABACIAAACIAAACIAAACIAAACIADABIABgCIACgCIACgCIACgCIABgCIABgBIAAgCIAAgCIgBgCIAAgCIAAgCIgBgCIAAgCIgBgCIAAgCIAAgCIAGgBIAEgBIAEgBIADAAIAEgBIAEgBIADAAIAEgBIACgBIAAABIgBACIAAACIgBACIgBACIAAACIAIAAIAABAIAADYIgBDZIABBoIgCAAQAbALAVARIABAAQAAAkgCAqQgBARAIAGQAHABABgGIAAgBQgBgpACgmQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAFAHAEAAIAAgBIAAjYIAAjZIgBjXQAAhcAEhaIACgMQAMgkAIgoQAFgXgNgOQgMgLgJgNIACAAQADAFAFADIAAgBIAEADIABAAIABAAIAAABQAVAVAOAcIABAAQAGALADAMIABABIgBABQgIAbgKAYIAAA6IAADXIAADZIAADYIAADZIgCAAQgbAOghAAQgWAAgXgGgAgfJHIAAABQABAKAFAEIABABQAFAEAHgCIACAAQAKgGgCgNIAAgCQgDgKgPABIgBAAQgHAEgDAIg");
	this.shape_56.setTransform(5.725,3.4817);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(214,231,201,0.996)").s().p("AAfLNQgIgHABgQQACgqAAglIgBAAQgVgQgagLIABAAIgBhpIABjYIAAjZIAAg/IABAAIAEgBIADAAIACgBIAEgBIADAAIABgBIABgBIAEAAIACACIABACIACACIACACIADACIACABIACACIACACIACACIACABIACACIACACIABACIABACIADACIACACIgBACIgBACIgBACIgCACIgCACIgCACIgBACIgCACIgEACIgCACIgEAAIAAgBIgCgCIgCgCIgDgCIgDgCIgBgCIgBAAIgCABIgCACIgCACIgCACIgCACIAAACIACACIAEACIACACIACACIABACIAGAAIABAAIACgCIADgCIADgCIADgCIACgCIACgCIACgBIACgCIACgCIACgCIABgCIABgCIACgCIACgCIACgCIACgCIACgCIABgCIAAgCIACgCIgCgCIgDgBIAAgBIgCgCIgBgCIgBgCIgDgBIgCgCIgCgCIgCgCIgCgCIgCgCIgCgCIgCgCIgCgCIgBgBIACgBIADgBIACgCIACgCIACgCIACgCIACgCIABgCIAAgCIABgCIABgCIABgCIgDgBIAAABIAAAAIgCABIAAABIgDgCIgFgCIABgCIAAgCIAAgCIgEgBIADgCIACgCIACgCIACgCIAAgBIgDgCIgEgCIgEgCIgFgCIgEgCIgEgCIgBAAIgIgBIgEgBIAAgCIAAgCIABgCIABgCIACgCIABgCIABgCIACgCIABgCIABgCIACgCIACgCIABgCIABgCIACgCIACgCIACgCIACgCIACgCIABgCIABgCIACgCIgCAAIAAAAIgBAAIgBACIgCACIgCACIgCACIgCACIgCACIgCACIgCACIgCACIgBABIAAACIgBACIgCACIgCACIgBACIgCACIgCACIgBACIgCACIgBACIgCACIgBACIgBACIgCACIAAACIgBABIAAhcIgBgBQgdgbgZgeIAAgBIAAgNQALgnAcgVQALgIAFgIQgHgJgLgJIgBAAQAAgFgEgFIAAgBQAAgXASgKIgBgBQgHgIAOgBIABAAIALAHIAAABQAMAAAIAFIABAAIAAiqIAAgBIAAgBIAAiDQAQgJgFgfIAAgBQACABABAEIAAAAIABABQAAAPgCALIAAAEIAAABIAAABQgCAFgGABIAAATIAAACIgBAAIAAARIABAAIAAABIgBAAIAAAUIABAAIAAAPIAAABIgBAAIgBDYQAAAFACADIAAABIAAABQAAAHAGABIABAAQALAKANAIIAAAAIAAACIgBAAQAJANALALQANANgFAYQgIAngLAlIgDAMQgEBZABBcIABDYIAADYIAADZIAAABQgFAAgEgHQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAmAAApIAAACQgBAFgGAAIgBAAgAAEkPIgEADIAAACQABADgFAFIAAABIAPAAIABAAQAFAAABAFIABAAQAHABAEAPIAAgBIABgBIAGgVQAEgNgGgJIAAAAQgOAGgRAEgAgVhHIABABIAEABIACABIAHABIADAAIABABIADABIAEACIADACIAFACIADACIgBABIgDAAIAAAAIgCAAIgDACIgBABIAAAAIgBABIgBABIgBABIgBABIgBABIgCACIgFABIgCAAIgCACIgCACIgCACIgCACIgCACIgCABIAAglgAAQglIAAAAIABAAIABABIgCABIAAgCg");
	this.shape_57.setTransform(6.1944,0.3021);

	this.instance_2 = new lib.CachedBmp_129();
	this.instance_2.setTransform(-49.5,-77.05,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_130();
	this.instance_3.setTransform(-49.5,-77.05,0.5,0.5);

	this.instance_4 = new lib.target_3_broken();
	this.instance_4.setTransform(1.2,-0.05,1,1,0,0,0,50.7,77);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_54},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_53},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_52}]},23).to({state:[{t:this.shape_39},{t:this.shape_50},{t:this.shape_40},{t:this.shape_43},{t:this.shape_41},{t:this.shape_42},{t:this.shape_51},{t:this.shape_48},{t:this.shape_49},{t:this.shape_57},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_56},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_28},{t:this.shape_25},{t:this.shape_27},{t:this.shape_26},{t:this.shape_32},{t:this.shape_33},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_55},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_17},{t:this.shape_13},{t:this.shape_20},{t:this.shape_16},{t:this.shape_11},{t:this.shape_15},{t:this.shape_12},{t:this.shape_14},{t:this.shape_10},{t:this.shape_18},{t:this.shape_21},{t:this.shape_19},{t:this.shape_9},{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_7},{t:this.shape_4},{t:this.shape_3},{t:this.shape},{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).wait(1).to({regX:33.8,rotation:-4.9855,x:-15.6,y:1.4},0).wait(1).to({rotation:-0.6188,x:-15.65,y:0.2},0).wait(1).to({rotation:3.7479,y:-1.1},0).wait(1).to({rotation:1.2703,y:-0.4},0).wait(1).to({rotation:-1.2072,x:-15.7,y:0.35},0).wait(1).to({rotation:0,y:-0.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.4,-110.8,126.80000000000001,194.2);


(lib.target_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(12).call(this.frame_35).wait(1));

	// Layer_2
	this.instance = new lib.target_2_brokenDown();
	this.instance.setTransform(0,49.65,1,1,0,0,0,16.6,26.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({rotation:-8.7108},0).wait(1).to({rotation:-3.711,x:0.05},0).wait(1).to({rotation:1.2888,y:49.6},0).wait(1).to({rotation:6.2886,x:0},0).wait(1).to({rotation:5.0068,x:0.05},0).wait(1).to({rotation:3.725,x:0,y:49.65},0).wait(1).to({rotation:2.4433,x:0.05},0).wait(1).to({rotation:1.1615,x:0},0).wait(1).to({rotation:-0.1203,y:49.6},0).wait(1).to({rotation:-1.402,y:49.65},0).wait(1).to({rotation:-2.6838,x:0.05,y:49.6},0).wait(1).to({rotation:-4.3502},0).wait(1).to({rotation:-6.0166,x:0},0).wait(1).to({rotation:-7.6831,x:0.05,y:49.65},0).wait(1).to({rotation:-9.3495},0).wait(1).to({rotation:-11.0159,x:0},0).wait(1).to({rotation:-12.6823,x:0.05},0).wait(1).to({rotation:-14.3488},0).wait(1).to({rotation:-16.0152,y:49.6},0).wait(1).to({rotation:-17.6816,x:0,y:49.65},0).wait(1).to({rotation:-10.1818,x:0.05},0).wait(1).to({rotation:-2.682,y:49.6},0).to({_off:true},1).wait(12));

	// Layer_1
	this.instance_1 = new lib.target_2_brokenUp();
	this.instance_1.setTransform(0,-2.1,1,1,0,0,0,16.5,43.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({rotation:22.7727,x:2.15,y:-6.7},0).wait(1).to({rotation:45.5455,x:4.3,y:-10.7},0).wait(1).to({rotation:68.3182,x:6.4,y:-14.05},0).wait(1).to({rotation:91.0909,x:8.35,y:-16.75},0).wait(1).to({rotation:113.8636,x:10.2,y:-18.8},0).wait(1).to({rotation:136.6364,x:12.05,y:-20.25},0).wait(1).to({rotation:159.4091,x:13.75,y:-21.05},0).wait(1).to({rotation:182.1818,x:15.35,y:-21.25},0).wait(1).to({rotation:204.9545,x:16.9,y:-20.75},0).wait(1).to({rotation:227.7273,x:18.4,y:-19.65},0).wait(1).to({rotation:250.5,x:19.7,y:-17.95},0).wait(1).to({rotation:273.2727,x:20.9,y:-15.6},0).wait(1).to({rotation:296.0455,x:21.95,y:-12.75},0).wait(1).to({rotation:318.8182,x:22.9,y:-9.25},0).wait(1).to({rotation:341.5909,x:23.75,y:-5.25},0).wait(1).to({rotation:364.3636,x:24.4,y:-0.65},0).wait(1).to({rotation:387.1364,x:24.95,y:4.55},0).wait(1).to({rotation:409.9091,x:25.4,y:10.25},0).wait(1).to({rotation:432.6818,x:25.75,y:16.55},0).wait(1).to({rotation:455.4545,x:26,y:23.35},0).wait(1).to({rotation:478.2273,x:26.05,y:30.8},0).wait(1).to({rotation:501,y:38.7},0).to({_off:true},1).wait(12));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(33,33,33,0.463)").s().p("AgGAAIANAAIAAAAIgCAAIgEABIgHgBg");
	this.shape.setTransform(-1.175,76.2667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.537)").s().p("AgDAAIAGAAIABAAIgBAAIgGAAg");
	this.shape_1.setTransform(-4.2,76.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(17,17,17,0.286)").s().p("AAAgGIAAAAIAAANIAAgNg");
	this.shape_2.setTransform(-16.425,64.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(29,29,29,0.459)").s().p("AAAAOIAAAAIAAgbIAAAAIAAAbIAAAAg");
	this.shape_3.setTransform(-16.425,62.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(42,42,42,0.651)").s().p("AAAAJIAAAAIAAgRQABAIgBAJIAAAAg");
	this.shape_4.setTransform(-16.405,60.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6F7B00").s().p("AAAAHIAAgNIAAAAIAAABQABAGgBAGg");
	this.shape_5.setTransform(-15.005,57.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3D4400").s().p("AAAAHIAAgBIAAgMIAAAAIAAAHIAAABIAAAEIAAABg");
	this.shape_6.setTransform(-15.025,55.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BCD100").s().p("AAAAFIAAgBIAAgGIAAgBIAAgBQACAEgCAFg");
	this.shape_7.setTransform(-14.9219,55.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(29,29,29,0.141)").s().p("AAAAGIAAgLIABAAIAAAKIAAABg");
	this.shape_8.setTransform(-16.525,51.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7D8800").s().p("AgxA8QACgGgBgHIAAgBIAAgBIAAgFIABAAQABgGgCgEIAAgBIAAgeQBBgRAfgyIAAAAIABAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIACBXIABABIAAAAQgaAWglAOIgZAIIgEABQgIAAABgJg");
	this.shape_9.setTransform(-10.058,51.906);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(47,47,47,0.224)").s().p("AAAALIAAgBIAAgTIABAAIAAATIAAABIgBAAg");
	this.shape_10.setTransform(-16.525,50.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(6,6,6,0.471)").s().p("AAAAPIAAgdQABANAAAPIAAABg");
	this.shape_11.setTransform(-16.52,46.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#414100").s().p("AAAAIIAAgQIAAAAIAAAMIAAACIAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIAAgBg");
	this.shape_12.setTransform(-15.35,48.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#909000").s().p("AAABiIAAgIQABAFgBAFgAAAAaIAAgBQABAHAAAIIAAACQgBgHAAgJgAAAhhIAAAAIAAgCIAAADQABAFgBAGIAAACQgBgGABgIg");
	this.shape_13.setTransform(-15.1306,33.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373D00").s().p("AAAAMIAAgXIAAAAIAAAWIAAABg");
	this.shape_14.setTransform(-14.8,19.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7F7F00").s().p("Ag8CIIAAgQQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIAAgBQABgMgBgJQgBghABgfQABhTgBhTIAAgBIACAAIABAAQAHACAKgCQARAAAMAFQAUAJAQAPIABAAQAMAMAIAQQAHANAEAQQADASgBAXQgCAtgSAgQggA2hEAPIAAgBgAg6A+IAAABQACgEgCgGIAAAJgAg5gJQgBAJACAFIAAgBQAAgIgBgGgAg6iGIAAAAQgBAIACAGIAAgBQABgHgBgFIgBgDIAAACg");
	this.shape_15.setTransform(-9.3384,37.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3D3D00").s().p("AAGAAIgLAAIAAAAIALAAIAAAAg");
	this.shape_16.setTransform(-14.15,23.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6E7B00").s().p("AAFAAIgKAAIAAAAIAKAAIABAAg");
	this.shape_17.setTransform(-14.125,23);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#949400").s().p("AgJB+IAAgOIAAgBIAAgGQACAKgCALIAAABIAAgBgAgGh+IACAAIABAAIALAAIAAAAIABAAIABAAIgJABIgHgBg");
	this.shape_18.setTransform(-14.35,36.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6D7700").s().p("AAfA/QgWgggngOIAAAAIgEgCQABgmACgnIACAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQAiAFAYAQIABAAQgBACAAAIIACBQQAAANgEADIAAgBg");
	this.shape_19.setTransform(-7.85,21.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#748000").s().p("AgDAAIAHAAIgBAAIgDABQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAg");
	this.shape_20.setTransform(-12.125,15.0667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#93A300").s().p("AAQAqIgBAAQgLgDgNAAIAAgBIgLAAIAAABIgBAAIAAgXIAAgBIAAgWIAAAAIAAghQAKgBALAAIABAAQACACAEgBIABAAQAHAAAGABIABABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgCAAQgCAmAAAnIADADg");
	this.shape_21.setTransform(-12.6,19.1938);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.588)").s().p("AAAgPIAAAAIAAAfIAAgfg");
	this.shape_22.setTransform(-16.625,16.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#626D00").s().p("AAAAQIAAAAIAAgfIAAAAIAAAfIAAAAIAAAAg");
	this.shape_23.setTransform(-14.8,16.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(32,32,32,0.463)").s().p("AAAAEIAAgIIAAAAIAAAAQABAFgBAEg");
	this.shape_24.setTransform(-7.7167,-31.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#787878").s().p("AgCAAIAGAAIgGAAg");
	this.shape_25.setTransform(-4.25,-42.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.6)").s().p("AADABIgGAAIAAgBIAHAAIAAABIgBAAg");
	this.shape_26.setTransform(3.025,76.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(1,1,1,0.427)").s().p("AAEABIgIAAIAAgBIAIAAIABAAIAAABg");
	this.shape_27.setTransform(2.125,76.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(37,37,37,0.227)").s().p("AAEABIgIAAIAAgBIAIAAIABAAIAAABg");
	this.shape_28.setTransform(1.125,76.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.565)").s().p("AADABIgGAAIAAgBIAGAAIABAAIAAABIgBAAg");
	this.shape_29.setTransform(7,76.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(38,38,38,0.584)").s().p("AAAAEIAAgHIABAAIAAAGIAAABg");
	this.shape_30.setTransform(16.475,66.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(22,22,22,0.361)").s().p("AAAAGIAAgBIAAgJQABADAAAGIAAABIgBAAg");
	this.shape_31.setTransform(16.48,65.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(35,35,35,0.204)").s().p("AAAALIAAgBIAAgUQABAKgBALg");
	this.shape_32.setTransform(16.395,58.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(48,48,48,0.694)").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_33.setTransform(16.3,50.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(21,21,21,0.318)").s().p("AAAASIAAgBIAAgiQABAQgBASIAAABIAAAAg");
	this.shape_34.setTransform(16.3063,44.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(37,37,37,0.545)").s().p("AAAARIAAgBIAAggIABAAIAAAgIAAABIgBAAg");
	this.shape_35.setTransform(16.3,48.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#292C00").s().p("AgBAqIAAg8IgBhsIABAAIAAAAQAEAJAAASIgBBSIgBBXIgBA1QAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAhVg");
	this.shape_36.setTransform(0.8773,34.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#414500").s().p("AgbC4IAAAAIgChZQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAIAAgBQAdgpgFhFIgCgPQgCgIgDgJQgFgOgHgMQAEgDAAgNIgDhRQAAgIACgCQAeATAUAdIAAABIAAAAIgBAAIABBsIAAA8IAABVIAAABQgXAmghAbg");
	this.shape_37.setTransform(-2.3205,35.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(32,32,32,0.467)").s().p("Ah8ExIAOAAIAAABIAAAAIgEAAIgKgBgAB7kgIAAgRIABAAIAAABQABAKgCAGg");
	this.shape_38.setTransform(3.9063,45.5813);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(37,37,37,0.525)").s().p("AAAAFIAAAAIAAgKQABAEAAAGg");
	this.shape_39.setTransform(16.325,14.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,78,0,0.996)").s().p("AAWI2Qg4gCg3gFQgGAAgFgCQgPgHgKgKQgJgaAAghIAAhDQBIgNAsgoQAVgVASgYQAkgyAKhJQADgVAAgUQgBgTgDgSQgPhHgrgpQgggegzgMQgcgHggAEIAAgNIAAgBQALg0AeghQAXgZAEgtQAHhNAGhPQAFhLAAhLIAAgFQgCgUAEgSIAQgFIAAAAIAWAJIABAAIARgIIABAAIATALIABAAQAMgFAKgGIABAAIAXAFIAAABQAEAYgGAWQgCAJABALIAKCfIAJCQQAUAoAYAmIAAABQgDAlgBAoQgBAlgEAlIgBAAIgBABQgQABARAAIABAAQACAHAAAMIgGB8IgCAmIgHCkIgICiQAAAJADACIACABIgJABQgdADggAAIgTAAg");
	this.shape_40.setTransform(-1.525,18.4361);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#919191").s().p("AADAAIgEAAIgCAAIAAAAIAGAAIABAAIAAAAIgBAAg");
	this.shape_41.setTransform(-0.275,-42.825);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E7E7E7").s().p("AgDAAIAFAAIABAAIABAAIAAAAIgEABIgDgBg");
	this.shape_42.setTransform(-0.1,-42.7429);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#575757").s().p("AAFAAIgIAAIgBAAIAAAAIAKAAIAAAAg");
	this.shape_43.setTransform(0.7,-42.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.541)").s().p("AgEAAIAIAAIAAAAIAAAAIAAAAIgEAAIgEAAg");
	this.shape_44.setTransform(0.3,-44.205);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#616161").s().p("AgDAAIAHAAIAAABIgBAAIgCAAQgCAAgCgBg");
	this.shape_45.setTransform(2.825,-42.72);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(47,47,47,0.29)").s().p("AAEAAIgIAAIAAAAIAIAAIABAAIAAAAg");
	this.shape_46.setTransform(1.275,-44.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(2,15,0,0.996)").s().p("ABBJbIgfAAIAAgBIgIAAIgBAAIgJAAIgBAAIgJAAIgBAAIgKAAIAAgBIgNAAIgBAAIgSAAIgBgBIgHAAIgBAAIgZAAIAAgBIgOAAIgBAAQgxgCgUgeIAAgBQgJggABgqIAAgBIAAgOIAAAAIAAgcIAAgBQAAgKgBgIIAAgBIAAhBIAAgBIAAgMIAAgBIAAgUIAAgBIAAgIIAAgBQAAgQgBgNIAAgBIAAinIAAgCIAAhiIAAggIAAgBIAAgVQANg/AjglQAPgRADgcQAJhNAFhQQAFhDADhGQABgEgBgGIAAAAIAAgBQgGgfAIgfIgCAAQgGgBgEgFQAEgdAPgSQADgEAIAAIANgDIAqAAIABAAQACACAGgBIAAAAIAKAAIAAAAQAfgBASALQAEACADAFQAHAPADATIgJAHIgBAAQAHAdgIAaQgCAIABAJIAKCgIAJCPQAdA3AhA1QAJAOABAXIAAALIABAAIAAACIAAABIgBAAIAAAPIAAABIAACqIAABaIAAACIAAAjIAAABIAAAhIAAABIAAAKIABAAIAAA7IAAABIAAAVIAAABIAAAKIAAAAIAAARIAAAAIAAAjIAAABIAAAKIAAABIABAHIABAAIABAPQACAKgEAKQgQA5hLgBIgBAAIgHAAIAAABgAhbgQQAzANAhAdQAqAqAPBGQAEASAAATQABAUgDAVQgLBJgjAyQgSAYgWAVQgsAohIANIAABDQAAAhAJAaQALALAOAGQAFACAGAAQA4AFA4ACQAqABAmgDIAIgCIgCgBQgCgBgBgKIAIiiIAHijIACgmIAGh8QAAgNgCgGIgBAAQgQAAAPgBIABgBIABAAQAEglABgmQABgnADgmIAAAAQgYgngTgoIgJiPIgLigQgBgLADgJQAFgWgEgYIAAAAIgXgGIgBAAQgKAHgMAEIgBAAIgSgLIgBAAIgSAIIgBAAIgVgJIgBAAIgQAFQgEASACAUIAAAFQAABMgFBKQgGBPgGBNQgFAtgWAZQgeAhgMA1IAAABIAAAMQANgBALAAQATAAARAEgAiWGTIAAABIAAAOIAAAAQgBALAMgCIAZgJQAmgOAagWQAigbAXgmIAAgCQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIABg2IABhYIABhSQAAgSgEgJIAAgBQgUgcgfgTIgBAAQgYgPgjgGIgBAAQgFgBgHAAIgIgBIgBAAQgLAAgKABIgBAAIAAAgIAAAAIABAYIAAAAIAAAWIABAAIALAAIAAAAQANABAMADIABAAQAoAOAWAgIAAABQAIAMAEAOQAEAIACAJIACAOQAFBGgeApIAAABIAAABQggAxhCARIAAAfIAAABIAAABIAAABIAAAAIAAANgAiZFMIAAABIAAAQIAAABQBEgPAgg2QASgfACgvQACgXgEgSQgDgQgHgNQgJgQgMgMIgBAAQgPgPgWgJQgMgFgRAAIgBAAIgBAAIAAAAIgMgBIAAABIgBAAIgCAAIgBAAIgCAAIAAACQABBSgBBVQgBAfABAgIAAAGIAAABIAAAAIAAARgAgGotIASALIABAAQAKgEAKgFIAAAAQAMAAAJAEIABAAQAGgCADgEIABAAQgCgQgJgKIAAgBQgJgCgMgBIgBAAIAAgBIgIAAIgBAAIgLAAIAAAAIgLAAIgBAAIgHAAIgBAAIgdAAIgBAAIgHAAIAAAAIgBAAIgQADIAAABQgGAMgDAPQAKAIAOgJIABAAQAJAGALADIABAAIASgIg");
	this.shape_47.setTransform(0.05,16.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CBCBCB").s().p("AAQAVIgSgKIgBAAIgSAIIgBAAQgMgDgJgGIgBAAQgNAJgKgIQADgPAGgLIAAgBIAPgEIABAAIAHAAIABAAIAeAAIABAAIABAAIABAAQACADAFgCIAAgBIAJAAIABAAIAKAAIABAAQADADAEgBIABAAIABAAQAMAAAKADIAAAAQAIALADAPIgBAAQgDAEgGACIgBAAQgKgEgMgBIAAAAQgJAFgKAEIgBAAg");
	this.shape_48.setTransform(-0.3,-40.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgRASIAAgDIgKgCIgDgCIAAgDIABgEIABgCIACgCIADgEIAEgDIADgDIADgDIAEgCIABgBIAFgBIADAAIAAgBIAOABIAIADIAGADIACADIABADIAAADIgCADIgCACIgDADIgDAEIgDACIgEADIgDADIgCABIgagBgAgOACIACAAIgBAAIgBAAg");
	this.shape_49.setTransform(1.525,12.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#414500").s().p("AgbC4IAAAAIgChZQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAIAAgBQAdgpgFhFIgCgPIgFgRQgFgOgHgMQAEgDAAgNIgDhRQAAgIACgCQAeATAUAdIAAABIAAAAIgBAAIABBsIAAA8IAABVIAAABQgXAmghAbg");
	this.shape_50.setTransform(-2.325,35.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,78,0,0.996)").s().p("AAWI2Qg4gCg3gFQgGAAgFgCQgPgHgKgKQgJgaAAghIAAhDQBIgNAsgoQAVgVASgYQAkgyAKhJQADgVAAgUQgBgTgDgSQgPhHgrgpQgggegzgMQgcgHggAEIAAgNIAAgBQALg0AeghQAXgZAEgtQAHhNAGhPQAFhLAAhLIAAgFQgCgUAEgSIAQgFIAAAAIAWAJIABAAIARgIIABAAIATALIABAAQAMgFAKgGIABAAIAXAFIAAABQAEAYgGAWQgCAJABALIAKCfIAJCQQAUAoAYAmIAAABQgDAlgBAoQgBAlgEAlIgBAAIgBABQgQABARAAIABAAQACAHAAAMIgGB9IgCAlIgHCkIgICiQAAAJADACIACABIgJABQgdADggAAIgTAAgAAVhNIgBABIgEACIgDADIgDADIgDADIgDAEIgCADIgBADIgBADIAAADIADADIAJACIAAACIAcABIACgBIADgCIAEgDIACgDIADgDIADgDIACgDIACgDIAAgEIgBgDIgCgDIgGgDIgHgDIgOgBIAAABIgFAAIgFABgAARg6IAAAAIgBAAIABAAg");
	this.shape_51.setTransform(-1.525,18.4361);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(2,15,0,0.996)").s().p("ABBJbIgfAAIAAgBIgIAAIgBAAIgJAAIgBAAIgJAAIgBAAIgKAAIAAgBIgNAAIgBAAIgSAAIgBgBIgHAAIgBAAIgZAAIAAgBIgOAAIgBAAQgxgCgUgeIAAgBQgJggABgqIAAgBIAAgOIAAAAIAAgcIAAgBQAAgKgBgIIAAgBIAAhBIAAgBIAAgMIAAgBIAAgUIAAgBIAAgIIAAgBQAAgQgBgNIAAgBIAAinIAAgCIAAhiIAAggIAAgBIAAgVQANg/AjglQAPgRADgcQAJhNAFhQQAFhDADhGQABgEgBgGIAAAAIAAgBQgGgfAIgfIgCAAQgGgBgEgFQAEgdAPgSQADgEAIAAIANgDIAqAAIABAAQACACAGgBIAAAAIAKAAIAAAAQAfgBASALQAEACADAFQAHAPADATIgJAHIgBAAQAHAdgIAaQgCAIABAJIAKCgIAJCPQAdA3AhA1QAJAOABAXIAAALIABAAIAAACIAAABIgBAAIAAAPIAAABIAACqIAABaIAAACIAAAjIAAABIAAAhIAAABIAAAKIABAAIAAA7IAAABIAAAVIAAABIAAAKIAAAAIAAARIAAAAIAAAjIAAABIAAAKIAAABIABAHIABAAIABAPQACAKgEAKQgQA5hLgBIgBAAIgHAAIAAABgAhbgQQAzANAhAdQAqAqAPBGQADASABATQABAUgDAVQgLBJgjAyQgSAYgWAVQgsAohIANIAABDQAAAhAJAaQALALAOAGQAFACAGAAQA4AFA4ACQAqABAmgDIAIgCIgCgBQgCgBgBgKIAIiiIAHijIACgmIAGh8QAAgNgCgGIgBAAQgQAAAPgBIABgBIABAAQAEglABgmQABgnADgmIAAAAQgYgngTgoIgJiPIgLigQgBgLADgJQAFgWgEgYIAAAAIgXgGIgBAAQgKAHgMAEIgBAAIgSgLIgBAAIgSAIIgBAAIgVgJIgBAAIgQAFQgEASACAUIAAAFQAABMgFBKQgGBPgGBNQgFAtgWAZQgeAhgMA1IAAABIAAAMQANgBALAAQATAAARAEgAiWGTIAAABIAAAOIAAAAQgBALAMgCIAZgJQAmgOAagWQAigbAXgmIAAgCQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIABg2IABhYIABhSQAAgSgEgJIAAgBQgUgcgfgTIgBAAQgYgPgjgGIgBAAQgFgBgHAAIgIgBIgBAAQgLAAgKABIgBAAIAAAgIAAAAIABAYIAAAAIAAAWIABAAIALAAIAAAAQANABAMADIABAAQAoAOAWAgIAAABQAIAMAEAOIAGARIACAOQAFBGgeApIAAABIAAABQggAxhCARIAAAfIAAABIAAABIAAABIAAAAIAAANgAiZFMIAAABIAAAQIAAABQBEgPAgg2QASgfACgvQABgWgDgTQgEgQgGgNQgJgPgMgNIgBAAQgPgPgWgJQgMgFgRAAIgBAAIgBAAIAAAAIgMgBIAAABIgBAAIgCAAIgBAAIgCAAIAAACQACBSgCBVQgBAfABAgIAAAGIAAABIAAAAIAAARgAgGotIASALIABAAQAKgEAKgFIAAAAQAMAAAJAEIABAAQAGgCADgEIABAAQgCgQgJgKIAAgBQgJgCgMgBIgBAAIAAgBIgIAAIgBAAIgLAAIAAAAIgLAAIgBAAIgHAAIgBAAIgdAAIgBAAIgHAAIAAAAIgBAAIgQADIAAABQgGAMgDAPQAKAIAOgJIABAAQAJAGALADIABAAIASgIg");
	this.shape_52.setTransform(0.05,16.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAvA6IAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIgBgCIAAgBIgBgCIAAgCIAAgBIgBgCIAAgBIgBgCIAAgBIgBgCIgBgBIgBgBIgCAAIgDgBIgBAAIgCgBIgCAAIgDgBIgEACIgDADIgCABIgagBIAAgDIgKgCIgDgDIAAgDIABgDIABgDIACgDIADgDIABgBIgdAAIgDgBIgEAAIgEAAIgDgCIgBgBIAAgCIABgCIABgBIABgCIABgBIACgCIABgBIABgCIABgCIAAgBIABgCIAAgBIAAgCIgDgBIgDgBIAAgCIABgBIACgCIABgBIACgCIABgBIABAAIAAAAIAAgBIADABIAFABIADACIgBABIgBACIgBABIgBACIAAACIgCABIgBACIgBABIgBACIgBABIgBACIAAACIAAABIACACIADABIADAAIADABIAhAAIABAAIAAgBIAFgBIAEAAIAAgBIACAAIABgBIABgBIACgCIABgCIACgBIACgCIACgBIACgBIABgBIACAAIADgBIADAAIACgBIABAAIACgBIACAAIADgBIADgBIgBgCIAAgBIgBgCIgBgBIgBgCIgBgBIgCgCIgBgCIgDgBIgCgCIgBgBIAAgCIAAgBIABgCIACgCIABgBIACgCIACgBIABgBIAAAAIAAgBIACABIAAABIABACIABABIADACIACABIABACIABACIACABIABACIABABIAAACIABABIABACIAAACIAAABIAAACIgCABIgBACIgCABIgBACIgCACIgCABIgBACIgEABIgDABIgDABIgCAAIgCABIgCAAIgCABIgCABIgCAAIgDABIgCAAIgEABIgCACIAAAAIAJABIAIADIAGADIACADIABACIAAADIgCADIgCADIABAAIAEABIACABIACAAIACABIACAAIAEABIABACIAAACIABABIAAACIABABIAAACIABABIAAACIAAACIABABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAACIAAABIgBACIgCABIgBACIgCABIgBACIgCABIAAABIgCgBgAgFAJIACgBIgBAAIgBABg");
	this.shape_53.setTransform(0.625,11.675);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,78,0,0.996)").s().p("AAWI2Qg4gCg3gFQgGAAgFgCQgPgHgKgKQgJgaAAghIAAhDQBIgNAsgoQAVgVASgYQAkgyAKhJQADgVAAgUQgBgTgDgSQgPhHgrgpQgggegzgMQgcgHggAEIAAgNIAAgBQALg0AeghQAXgZAEgtQAHhNAGhPQAFhLAAhLIAAgFQgCgUAEgSIAQgFIAAAAIAWAJIABAAIARgIIABAAIATALIABAAQAMgFAKgGIABAAIAXAFIAAABQAEAYgGAWQgCAJABALIAKCfIAJCQQAUAoAYAmIAAABQgDAlgBAoQgBAlgEAlIgBAAIgBABQgQABARAAIABAAQACAHAAAMIgGB9IgCAlIgHCkIgICiQAAAJADACIACABIgJABQgdADggAAIgTAAgAAzguIACABIACAAIACABIACAAIADABIABAAIAAABIABACIABACIAAABIABACIAAABIABACIAAABIAAACIABACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIACABIABgBIABgBIACgBIABgCIACgBIABgCIABgBIABgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIgBgBIAAgCIAAgBIgBgCIAAgCIgBgBIAAgCIgBgBIAAgCIgBgBIgBgCIgDgBIgDgBIgBAAIgCgBIgCAAIgEgBIgBgBIABgCIACgDIAAgEIgBgDIgCgDIgGgDIgHgDIgJAAIAAgBIACgBIADgBIADgBIADAAIACgBIACAAIACgBIABgBIADAAIACgBIADAAIADgBIADgCIACgBIACgCIABgBIACgCIABgCIACgBIABgCIABgBIAAgCIgBgBIAAgCIgBgCIgBgBIgBgCIgBgBIgBgCIgBgBIgBgCIgDgCIgCgBIgCgCIAAgBIAAgCIgCAAIAAAAIgBAAIgBABIgCACIgBABIgCACIgBABIgCACIAAACIAAABIACACIACABIACACIABABIACACIABACIABABIABACIABABIABACIAAABIgDACIgCAAIgCABIgCAAIgCABIgCAAIgDABIgDAAIgCABIAAAAIgCABIgDACIgBABIgCACIgCACIgBABIgCACIAAAAIgCAAIAAABIgFAAIgFABIgBABIgBABIgfgBIgEAAIgDgBIgCgBIgCgBIgBgCIAAgBIABgCIABgCIACgBIABgCIABgBIABgCIABgBIABgCIABgCIABgBIAAgCIgCgBIgFgCIgDAAIAAAAIgBAAIAAABIgCABIgBABIgCACIgBABIgCACIAAACIAEABIACABIABABIgBACIAAABIgBACIgBACIgBABIgBACIgBABIgBACIgCABIgBACIgBACIAAABIACACIACABIAFABIADABIAEAAIAcABIgBAAIgDAEIgCADIgBADIgBADIAAADIADADIAJACIAAACIAcABIACgBIADgCIADgCIADAAgAARg6IAAAAIgBAAIABAAg");
	this.shape_54.setTransform(-1.525,18.4361);

	this.instance_2 = new lib.CachedBmp_127();
	this.instance_2.setTransform(-16.65,-44.25,0.5,0.5);

	this.instance_3 = new lib.target_2_broken();
	this.instance_3.setTransform(-0.05,16.15,1,1,0,0,0,16.6,60.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:-9.3384}},{t:this.shape_14},{t:this.shape_13,p:{x:-15.1306}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_48},{t:this.shape_52},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_51},{t:this.shape_39},{t:this.shape_38},{t:this.shape_50},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:-9.3389}},{t:this.shape_14},{t:this.shape_13,p:{x:-15.1312}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_36},{t:this.shape_49}]},23).to({state:[{t:this.shape_52},{t:this.shape_48},{t:this.shape_25},{t:this.shape_44},{t:this.shape_46},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_45},{t:this.shape_54},{t:this.shape_24},{t:this.shape_38},{t:this.shape_39},{t:this.shape_53},{t:this.shape_19},{t:this.shape_50},{t:this.shape_21},{t:this.shape_20},{t:this.shape_23},{t:this.shape_14},{t:this.shape_15,p:{x:-9.3389}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_18},{t:this.shape_13,p:{x:-15.1312}},{t:this.shape_36},{t:this.shape_9},{t:this.shape_12},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_34},{t:this.shape_35},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_1},{t:this.shape_26},{t:this.shape_27},{t:this.shape_28},{t:this.shape},{t:this.shape_22},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).wait(1).to({regX:16.7,regY:60.2,rotation:-7.2292,x:0,y:15.95},0).wait(1).to({rotation:-4.3996,x:0.05},0).wait(1).to({rotation:-1.57,x:0.1,y:16},0).wait(1).to({rotation:1.2596,y:15.95},0).wait(1).to({rotation:0.7648},0).wait(1).to({rotation:0.2701,x:0.05,y:16},0).wait(1).to({rotation:-0.2247,x:0.1},0).wait(1).to({regX:16.6,regY:60.3,rotation:-0.2238,x:0,y:16.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-67,105.9,144.9);


(lib.target_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(10).call(this.frame_33).wait(1));

	// Layer_3
	this.instance = new lib.target_1_brokenDown();
	this.instance.setTransform(1.2,48.05,1,1,0,0,0,18.2,28.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({rotation:7.6942,x:1.15},0).wait(1).to({rotation:3.9444,x:1.05},0).wait(1).to({rotation:0.1946,x:1,y:48},0).wait(1).to({rotation:-3.5551,x:0.95},0).wait(1).to({rotation:-7.3049,x:0.85},0).wait(1).to({rotation:-6.0568,x:0.9,y:48.05},0).wait(1).to({rotation:-4.8087,x:0.85,y:48},0).wait(1).to({rotation:-3.5606},0).wait(1).to({rotation:-2.3126,x:0.9,y:48.05},0).wait(1).to({rotation:-1.0645,y:48},0).wait(1).to({rotation:0.1836,x:0.85},0).wait(1).to({rotation:1.9323,x:0.9,y:48.05},0).wait(1).to({rotation:3.681,x:0.85,y:48},0).wait(1).to({rotation:5.4297},0).wait(1).to({rotation:7.1784},0).wait(1).to({rotation:5.3097,y:48.05},0).wait(1).to({rotation:3.441},0).wait(1).to({rotation:1.5723},0).wait(1).to({rotation:-0.2964,x:0.9,y:48},0).wait(3).to({_off:true},1).wait(10));

	// Layer_2
	this.instance_1 = new lib.target_1_brokenUp();
	this.instance_1.setTransform(1.15,-4,1,1,0,0,0,18.2,42.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({rotation:-23.4091,x:-0.5,y:-6.35},0).wait(1).to({rotation:-46.8182,x:-2.25,y:-8.55},0).wait(1).to({rotation:-70.2273,x:-4.15,y:-10.85},0).wait(1).to({rotation:-93.6364,x:-6.1,y:-13},0).wait(1).to({rotation:-117.0455,x:-8.2,y:-14.95},0).wait(1).to({rotation:-140.4545,x:-10.45,y:-16.7},0).wait(1).to({rotation:-163.8636,x:-12.8,y:-18.15},0).wait(1).to({rotation:-187.2727,x:-15.4,y:-19},0).wait(1).to({rotation:-210.6818,x:-18.1,y:-19.1},0).wait(1).to({rotation:-234.0909,x:-20.8,y:-18.15},0).wait(1).to({rotation:-257.5,x:-23.6,y:-16.05},0).wait(1).to({rotation:-280.9091,x:-26.05,y:-12.7},0).wait(1).to({rotation:-304.3182,x:-28.15,y:-8.4},0).wait(1).to({rotation:-327.7273,x:-29.95,y:-3.55},0).wait(1).to({rotation:-351.1364,x:-31.4,y:1.6},0).wait(1).to({rotation:-374.5455,x:-32.65,y:6.8},0).wait(1).to({rotation:-397.9545,x:-33.55,y:11.95},0).wait(1).to({rotation:-421.3636,x:-34.4,y:17},0).wait(1).to({rotation:-444.7727,x:-35.05,y:21.95},0).wait(1).to({rotation:-468.1818,x:-35.55,y:26.75},0).wait(1).to({rotation:-491.5909,x:-36.05,y:31.5},0).wait(1).to({rotation:-515,x:-36.45,y:36.05},0).to({_off:true},1).wait(10));

	// Layer_1
	this.instance_2 = new lib.CachedBmp_120();
	this.instance_2.setTransform(-17.2,-47.75,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_121();
	this.instance_3.setTransform(-17.2,-47.75,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_122();
	this.instance_4.setTransform(-17.2,-47.75,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_123();
	this.instance_5.setTransform(-17.2,-47.75,0.5,0.5);

	this.instance_6 = new lib.target_1_broken();
	this.instance_6.setTransform(1.1,14.55,1,1,0,0,0,18.3,62.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[]},1).to({state:[{t:this.instance_3}]},23).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off:false},0).wait(1).to({regX:18.2,regY:62.2,rotation:4.2351,x:1.05,y:14.5},0).wait(1).to({rotation:1.6389,x:1,y:14.45},0).wait(1).to({rotation:-0.9572,x:1.05,y:14.5},0).wait(1).to({rotation:-0.9572},0).wait(2).to({regX:18.3,regY:62.3,rotation:0,x:1.1,y:14.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-64.9,123.80000000000001,147.2);


(lib.target_paper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.answer_txt.font = "20px Rubik Regular";
	}
	this.frame_1 = function() {
		this.answer_txt.font = "20px Rubik Regular";
	}
	this.frame_2 = function() {
		this.answer_txt.font = "20px Rubik Regular";
	}
	this.frame_3 = function() {
		this.answer_txt.font = "20px Rubik Regular";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.Apic_box = new lib.Apic_box();
	this.Apic_box.name = "Apic_box";
	this.Apic_box.setTransform(56.35,43.35,1,1.0562,0,0,0,56.6,38.3);

	this.answer_txt = new cjs.Text("", "normal 500 20px 'Rubik'");
	this.answer_txt.name = "answer_txt";
	this.answer_txt.textAlign = "right";
	this.answer_txt.lineHeight = 19;
	this.answer_txt.lineWidth = 115;
	this.answer_txt.parent = this;
	this.answer_txt.setTransform(48.4299,-35.7711,0.8558,0.8558);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.answer_txt);
	}

	this.instance = new lib.CachedBmp_112();
	this.instance.setTransform(-65.1,-51.2,0.5,0.5);

	this.instance_1 = new lib.V_correct();
	this.instance_1.setTransform(56.9,55.25,0.0976,0.0976);

	this.instance_2 = new lib.CachedBmp_113();
	this.instance_2.setTransform(-65.15,-51.2,0.5,0.5);

	this.instance_3 = new lib.X_incorrect();
	this.instance_3.setTransform(56.95,55.25,0.0975,0.0975,0,0,0,0.5,0);

	this.instance_4 = new lib.CachedBmp_114();
	this.instance_4.setTransform(-65.15,-51.2,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_115();
	this.instance_5.setTransform(-65.15,-51.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.answer_txt},{t:this.Apic_box,p:{scaleY:1.0562}}]}).to({state:[{t:this.instance_2},{t:this.answer_txt},{t:this.Apic_box,p:{scaleY:1.0562}},{t:this.instance_1}]},1).to({state:[{t:this.instance_4},{t:this.answer_txt},{t:this.Apic_box,p:{scaleY:1.0562}},{t:this.instance_3}]},1).to({state:[{t:this.instance_5},{t:this.answer_txt},{t:this.Apic_box,p:{scaleY:1.0563}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.1,-51.2,139.5,123.9);


(lib.sheriff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// שריף_צלליות_HD_01_svg
	this.instance = new lib.sheriffs_eyes();
	this.instance.setTransform(-17.2,-151.1,1,1,0,0,0,15.5,4.1);

	this.instance_1 = new lib.CachedBmp_108();
	this.instance_1.setTransform(-78.25,-208.35,0.4746,0.4746);

	this.instance_2 = new lib.CachedBmp_109();
	this.instance_2.setTransform(-77.7,-208.2,0.4746,0.4746);

	this.instance_3 = new lib.CachedBmp_110();
	this.instance_3.setTransform(-78.25,-208.2,0.4746,0.4746);

	this.text = new cjs.Text("0", "normal 500 30px 'Rubik'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 100;
	this.text.alpha = 0.99607843;
	this.text.parent = this;
	this.text.setTransform(-195.8,-48.8,0.5944,0.5944,-1.7595);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_4 = new lib.clock();
	this.instance_4.setTransform(-195.85,-49.4,1,1,-1.7602,0,0,0.1,-0.1);

	this.instance_5 = new lib.CachedBmp_111();
	this.instance_5.setTransform(-203.35,-208.2,0.4746,0.4746);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.7,-208.3,320,426.8);


(lib.progress = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(5).call(this.frame_29).wait(5).call(this.frame_34).wait(5).call(this.frame_39).wait(5).call(this.frame_44).wait(5).call(this.frame_49).wait(2));

	// star2
	this.instance = new lib.sheriff_star();
	this.instance.setTransform(-1.45,181.1,0.5915,0.5915,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-0.5,scaleX:0.5832,scaleY:0.5832,x:-0.85,y:170.25},0).wait(1).to({scaleX:0.5749,scaleY:0.5749,x:-0.6,y:159.8},0).wait(1).to({scaleX:0.5666,scaleY:0.5666,x:-0.35,y:149.3},0).wait(1).to({scaleX:0.5583,scaleY:0.5583,x:-0.1,y:138.85},0).wait(1).to({y:132.4},0).wait(1).to({y:126},0).wait(1).to({y:119.55},0).wait(1).to({y:113.15},0).wait(1).to({y:106.75},0).wait(1).to({y:100.2},0).wait(1).to({y:93.65},0).wait(1).to({y:87.1},0).wait(1).to({y:80.55},0).wait(1).to({y:74},0).wait(1).to({y:66.8},0).wait(1).to({y:59.65},0).wait(1).to({y:52.45},0).wait(1).to({y:45.3},0).wait(1).to({y:38.15},0).wait(1).to({y:32.3},0).wait(1).to({y:26.45},0).wait(1).to({y:20.6},0).wait(1).to({y:14.75},0).wait(1).to({y:8.9},0).wait(1).to({y:2.4},0).wait(1).to({y:-4.05},0).wait(1).to({y:-10.55},0).wait(1).to({y:-17.05},0).wait(1).to({y:-23.5},0).wait(1).to({y:-30.15},0).wait(1).to({y:-36.75},0).wait(1).to({y:-43.4},0).wait(1).to({y:-50},0).wait(1).to({y:-56.6},0).wait(1).to({y:-63.1},0).wait(1).to({y:-69.6},0).wait(1).to({y:-76.05},0).wait(1).to({y:-82.55},0).wait(1).to({y:-89},0).wait(1).to({y:-95.55},0).wait(1).to({y:-102.1},0).wait(1).to({y:-108.65},0).wait(1).to({y:-115.2},0).wait(1).to({y:-121.75},0).wait(1).to({x:0,y:-130.3},0).wait(1).to({x:0.1,y:-138.85},0).wait(1).to({x:0.15,y:-147.35},0).wait(1).to({x:0.25,y:-155.9},0).wait(1).to({x:0.3,y:-164.4},0).wait(2));

	// yellow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7ED69").s().p("AhcDyQgmgmAAg3IAAkqQAAg2AmgmQAngmA1AAQA3AAAlAmQAnAmAAA2IAAEqQAAA3gnAmQglAng3AAQg1AAgngng");
	this.shape.setTransform(0.0301,172.8378,0.8256,0.0231);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AF4B28").s().p("EgB3Ag0QgygyAAhGMAAAg93QAAhGAygyQAxgyBGAAQBGAAAyAyQAyAyAABGMAAAA93QAABGgyAyQgyAyhGAAQhGAAgxgyg");
	this.shape_1.setTransform(0.0048,3.6249,0.8256,0.8256);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7ED69").s().p("AgEDRQgVgBgSgHQgYgKgPgSIgBgCQgYgeAAgmIAAjWQAAgoAegcQAegbAigCQArABAUAMQASAKANAPQAOAPAGARQAHASAAAUIAADWQAAATgGARQgGASgSAOIgHAGQgUAOgYAFIgKABIgLABIgFAAIgFAAg");
	this.shape_2.setTransform(0.025,155.1125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMU3QgfAcAAAoIAADXQAAAmAYAeIABACQAPASAZAKQASAHAUABIAKAAIALgBIAKgBQAYgFAUgOIAHgGQASgOAHgSQAFgRABgTIAAjXQgBgUgGgSQgHgRgNgPQgOgPgSgKQgUgMgrgBQgiACgdAbg");
	this.shape_3.setTransform(0,3.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7ED69").s().p("AABDtIgKgBQgXgBgTgKQgagOgLgVIgBgCQgSgkAAgrIAAjqQAAgtAeggQAfggAlgCQAtAEAVARQARANAMATQAMARAFAUQAFAVAAAWIAADrQAAAUgEAUQgFAVgTAQIgIAHQgVAPgbAFIgLABIgMAAg");
	this.shape_4.setTransform(0.025,152.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhNUEQgeAgAAAsIAADsQAAArATAkIAAABQALAWAaAOQATAJAXACIALABIALAAIALgCQAcgEAVgQIAHgGQATgQAFgWQAFgTAAgUIAAjsQAAgWgGgVQgEgUgNgRQgLgTgSgNQgVgRgtgEQglACgfAgg");
	this.shape_5.setTransform(0,3.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7ED69").s().p("AgDEJIgMgBQgYgEgUgMQgcgQgIgbIAAgBQgMgqAAgvIAAj/QAAgxAdgkQAhglAngCQAwAHAVAWQASAQAKAWQAKAUAEAXQADAXAAAZIAAEAQAAAWgDAVQgDAYgUASIgJAHQgWASgeAEIgNABIgGAAIgFAAg");
	this.shape_6.setTransform(0.025,149.5375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhOTRQgdAkAAAxIAAEAQAAAvAMAqIABABQAHAbAcAQQAUAMAZAEIALABIALAAIANgBQAegEAXgSIAJgHQATgSADgYQADgVABgWIAAkBQAAgZgEgXQgEgXgJgUQgLgWgRgQQgWgWgvgHQgoACghAlg");
	this.shape_7.setTransform(0,3.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7ED69").s().p("AgIElIgMgCQgbgEgVgPQgcgVgFgdIAAgCQgGgwAAgzIAAkUQAAg2AcgnQAigrArgBQAyAKAWAaQARAUAJAaQAJAWABAaQACAaAAAbIAAEUQAAAYgBAYQgCAagVAUIgJAIQgYATghAEIgOABIgMAAg");
	this.shape_8.setTransform(0.025,146.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhOSfQgdAmAAA2IAAEVQAAAzAGAwIAAACQAFAeAdAUQAUAPAbAEIANACIALAAIAOgBQAhgEAYgTIAKgIQAUgUACgaQACgYAAgYIAAkVQgBgbgCgaQgBgagJgWQgJgagRgUQgWgagygKQgqABgiAsg");
	this.shape_9.setTransform(0,3.625);

	this.instance_1 = new lib.CachedBmp_97();
	this.instance_1.setTransform(-14,-173.85,0.5,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7ED69").s().p("AgCFjQgIAAgIgCQgQgCgPgGQgTgJgOgPIgGgIQgTgbAAgiIAAm5QAAhEAfgwQAeguAmgDQAsACAYAcQALALAIAPQAXAlAFAxQABAPAAAQIAAG5QAAASgFARQgHASgRAPIgKAHQgUAOgZAEIgHABIgJABIgHAAIgDAAg");
	this.shape_10.setTransform(0.025,140.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMQnQgfAwAABFIAAG6QAAAhATAbIAGAIQAOAPATAJQAPAGAQADQAIABAIAAIADABIAHgBIAJAAIAHgBQAagFATgOIAKgHQASgPAGgSQAGgQAAgSIAAm6QAAgQgCgQQgEgwgYgmQgIgPgLgLQgYgcgsgCQglAEgfAtg");
	this.shape_11.setTransform(0,3.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7ED69").s().p("AgCGGIgEAAQgJgBgIgCQgRgDgQgIQgUgMgMgRIgFgKQgOgfAAgkIAAndQAAhKAeg0QAgg1AngDQAuAFAYAjQAKANAJARQAVApADA2IABAhIAAHdQAAATgEASQgFAVgSARIgKAIQgVAPgdAEIgHABIgJABIgEAAIgDAAg");
	this.shape_12.setTransform(0.025,137.0875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMPoQgfA0AABLIAAHdQAAAkAOAfIAGAKQALASAUALQAQAIASAEQAHACAKAAIADAAIAHAAIAJAAIAIgBQAcgEAVgQIALgIQASgQAEgVQAEgSABgUIAAndIgCgiQgDg1gVgqQgJgRgJgNQgZgigtgFQgoADgfA0g");
	this.shape_13.setTransform(0,3.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7ED69").s().p("AgFGoIgFAAIgRgEQgTgEgQgJQgWgPgKgTIgEgMQgJgjAAgnIAAoBQAAhQAdg5QAhg7ApgCQAvAIAZApQAKAQAIARQATAuACA6IABAlIAAIAQAAAUgDAVQgDAWgSASIgLAJQgXASgfAEIgIABIgJABIgHgBg");
	this.shape_14.setTransform(0.025,133.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhNOpQgeA5AABPIAAICQAAAnAKAjIADAMQAKAUAWAOQAQAKATAEIARADIAFAAIAHABIAKgBIAIgBQAegEAXgRIALgJQATgSACgXQADgUABgVIAAoBIgCgkQgCg7gTgtQgHgSgLgQQgYgpgwgHQgpABggA8g");
	this.shape_15.setTransform(0,3.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7ED69").s().p("AgJHKIgEAAIgTgEQgUgFgRgMQgXgQgIgXQgCgGAAgIQgFgnAAgpIAAokQAAhWAdg9QAihCArgBQAwAKAZAvQAKASAHAUQASAyABA/IAAAnIAAIjQAAAWgBAWQgCAagTATIgLAKQgZATghAEIgJABIgIAAIgJgBg");
	this.shape_16.setTransform(0.025,130.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhONqQgdA9AABVIAAImQAAApAFAnQABAHABAHQAIAWAXARQARAMAUAFIATAEIAEAAIAJABIAIgBIAJgBQAigDAYgTIALgKQAUgUABgaQACgVAAgWIAAolIgBgmQgBhAgSgxQgHgUgJgSQgagvgwgLQgrABgiBDg");
	this.shape_17.setTransform(0,3.625);

	this.instance_2 = new lib.CachedBmp_98();
	this.instance_2.setTransform(-14,-173.85,0.5,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7ED69").s().p("AAEIRIgJAAIgCgBIgIgBQgYgDgTgKQgMgHgKgJQgMgLgGgMQgJgUAAgXIAArJQAAhmAfhJQAehCAogGQAuACAdA3QAFAKAEALQAcBBACBaIAAASIAALIQAAARgEANQgHAUgSAQQgfAWgbADIgIACIgHABIgCAAg");
	this.shape_18.setTransform(0.025,123.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMLkQgfBIAABmIAALKQAAAXAKAUQAFANAMAKQAKAJAMAHQAUALAYACIAHABIADABIAIAAIACAAIAIgBIAIgBQAbgEAegWQASgQAHgUQAFgNAAgQIAArKIgBgRQgChbgchBQgEgLgFgKQgcg2gugCQgpAFgeBDg");
	this.shape_19.setTransform(0,3.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7ED69").s().p("AADIzIgKAAIgCAAIgIgCQgZgDgVgMQgMgIgKgKQgLgMgEgOQgHgWAAgZIAAryQAAhtAfhNQAfhJApgEQAvAFAcA8IAJAWQAaBGACBgIAAASIAALyQAAAQgDAPQgFAWgTASQggAYgdADIgHABIgJABIgBAAg");
	this.shape_20.setTransform(0.025,119.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMKjQgfBNAABtIAALzQAAAZAHAWQAEAOALAMQAKALAMAHQAVANAZADIAIABIADAAIAJABIABAAIAJgBIAIgBQAcgEAhgYQASgRAFgWQAEgPAAgRIAArzIgBgSQgBhggbhGIgJgWQgcg8gvgFQgpAEgfBJg");
	this.shape_21.setTransform(0,3.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7ED69").s().p("AABJWIgJgBIgDAAIgJgBQgagEgVgOQgNgJgJgLQgKgOgDgQQgFgYAAgaIAAscQAAhzAfhSQAfhQArgCQAvAHAbBDIAJAXQAaBLABBkIAAAUIAAMbQAAARgCAQQgDAYgTATQgiAagfAEIgHABIgJABIgCAAg");
	this.shape_22.setTransform(0.025,116.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMJjQgfBSAABzIAAMdQAAAaAFAYQADAQAKAOQAJALANAJQAVAOAaAEIAJABIADAAIAKABIACAAIAIgBIAHgBQAfgEAigaQATgTADgYQACgQABgRIAAscIAAgUQgChkgZhLIgJgXQgchDgvgHQgqACggBQg");
	this.shape_23.setTransform(0,3.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7ED69").s().p("AAAJ5IgKgBIgDAAIgJgCQgcgEgVgRQgOgJgJgMQgJgPgCgSQgCgaAAgcIAAtFQAAh6AehWQAhhXArgBQAwALAbBHIAJAZQAZBQAABqIAAAUIAANFIgBAjQgBAZgUAVQgkAdggADIgHABIgJABIgCAAg");
	this.shape_24.setTransform(0.025,112.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMIjQgfBWAAB6IAANHQAAAbADAaQABASAJAPQAJAMAOAKQAWAQAbAEIAJACIADAAIALABIABAAIAKgBIAGgBQAggDAkgdQAUgUABgaIACgjIAAtGIAAgUQgBhqgYhPIgJgZQgbhIgxgKQgrABggBWg");
	this.shape_25.setTransform(0,3.625);

	this.instance_3 = new lib.CachedBmp_99();
	this.instance_3.setTransform(-14,-173.85,0.5,0.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7ED69").s().p("AgRK9QgYgDgUgMQgKgFgJgIQgOgNgGgPQgHgSAAgTIAAh9IAAgSIAAgaIAAstQAAiHAfhhQAghdAqgCQAtAAAeBVQAiBpABB/IAAANIAAMhIAAAcIAAARIAACIQAAAOgDANQgGAUgUARQgFAEgFAEQgXAPgeADIgMACQgNgBgIgBg");
	this.shape_26.setTransform(0.025,106.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMGiQgfBgAACHIAAMuIABAaIgBASIAAB9QAAAUAHARQAGAQAPAMQAIAIALAGQATALAZADQAHACANAAIAMgCQAegDAXgPQAFgDAFgFQAUgQAGgVQAEgNAAgOIAAiIIgBgRIABgcIAAsiIAAgMQgCiAghhpQgfhVgtAAQgpACghBeg");
	this.shape_27.setTransform(0,3.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7ED69").s().p("AgTLgQgZgEgUgMQgLgHgJgJQgNgOgFgRQgFgSAAgVIAAiDIABgSIgBgcIAAtSQAAiOAehkQAhhkArgCQAtABAeBcQAhBuABCGIAAANIAANFIgBAdIABASIAACPQAAAOgCAOQgFAXgUARIgKAJQgYAQgfAEIgNABQgNAAgJgCg");
	this.shape_28.setTransform(0.025,102.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMFjQgfBkAACOIAANTIABAcIgBASIAACDQAAAVAFASQAFARANAOQAJAJALAHQAUAMAZAEQAJACAOAAIAMgBQAfgEAYgQIALgJQATgRAFgXQADgOAAgOIAAiPIgCgSIACgdIAAtGIAAgNQgCiGghhuQgehcgtgBQgrACggBkg");
	this.shape_29.setTransform(0,3.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7ED69").s().p("AgVMDQgagEgVgOQgLgIgIgJQgNgPgEgTQgDgUAAgWIAAiIQAAgKACgJQgCgPAAgOIAAt4QAAiTAehpQAhhrAsgBQAtACAeBhQAhB0AACMIAAAOIAANqQAAAPgCAPQACAJAAAKIAACVQAAAPgCAOQgDAZgTATQgFAFgHAEQgYASggADIgOABIgXgCg");
	this.shape_30.setTransform(0.025,99.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMEkQgfBpAACTIAAN5QAAAPACAOQgCAKAAAKIAACIQAAAVAEAVQADASANAQQAIAJALAHQAVAPAaAEIAYACIANgBQAggDAZgTQAGgEAFgFQAUgTACgYQACgPABgPIAAiVQgBgKgCgJQACgOABgQIAAtrIAAgOQgBiMghhzQgehigtgCQgsACggBqg");
	this.shape_31.setTransform(0,3.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7ED69").s().p("AgXMmQgbgFgWgPQgMgIgHgKQgNgSgBgTQgCgWAAgXIAAiOQAAgKACgJQgCgQAAgPIAAudQAAiaAehsQAhhyAsAAQAtACAeBoQAhB5AACSIAAAOIAAOPQAAARgCAOQACAKAAAKIAACcIgBAfQgBAagUAUIgMAKQgZAUgiADIgOABQgOgBgKgCg");
	this.shape_32.setTransform(0.025,96.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhNDmQgeBtAACZIAAOeQAAAQADAPQgDAJAAALIAACOQAAAWACAWQABAUANARQAIAKALAIQAWAQAcAEQAJACAPABIANgBQAjgDAZgUIALgKQAUgUABgaIACgfIAAicQAAgKgDgKQADgOAAgQIAAuQIAAgPQgBiSggh5QgfhogtgCQgrABgiBxg");
	this.shape_33.setTransform(0,3.625);

	this.instance_4 = new lib.CachedBmp_100();
	this.instance_4.setTransform(-14,-173.85,0.5,0.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7ED69").s().p("AhMNcQgfgYAAgkIAAjBQAAgLADgKQgDgPAAgRIAAwDQAAirAfh6QAgh3AsAAQAtAAAfB3QAgB6AACrIAAQDQAAARgDAOIADDXQAAAkggAYQgfAagtAAQgsAAgggag");
	this.shape_34.setTransform(0.025,88.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMBTQgfB5AACrIAAQEQAAARADAPQgDAKAAALIAADCQAAAjAfAZQAgAZAtAAQAtAAAfgZQAfgZABgjIgEjXQADgPABgRIAAwEQgBirgfh5Qgfh2gtAAQgtAAggB2g");
	this.shape_35.setTransform(0,3.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7ED69").s().p("AhMOGQgfgYAAgkIAAjCQAAgLADgJQgDgQAAgQIAAxDQAAi0Afh+QAgh9AsAAQAtAAAfB9QAgB+AAC0IAARDQAAAQgDAPIADDXQAAAkggAYQgfAZgtAAQgsAAgggZg");
	this.shape_36.setTransform(0.025,84.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMAFQgfB/AACzIAAREQAAARADAPQgDAKAAALIAADCQAAAjAfAZQAgAZAtAAQAtAAAfgZQAfgZABgjIgEjXQADgPABgRIAAxEQgBizgfh/Qgfh8gtAAQgtAAggB8g");
	this.shape_37.setTransform(0,3.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7ED69").s().p("AhMOwQgfgZAAgjIAAjCQAAgLADgKQgDgPAAgRIAAyDQAAi7AfiFQAgiCAsAAQAtAAAfCCQAgCFAAC7IAASDQAAARgDAPIADDXQAAAjggAZQgfAZgtAAQgsAAgggZg");
	this.shape_38.setTransform(0.025,80.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMhIQgfCEAAC7IAASEQAAARADAPQgDAKAAALIAADCQAAAjAfAZQAgAZAtAAQAtAAAfgZQAfgZABgjIgEjXQADgPABgRIAAyEQgBi7gfiEQgfiCgtAAQgtAAggCCg");
	this.shape_39.setTransform(0,3.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7ED69").s().p("AhMPZQgfgYAAgkIAAjBQAAgLADgKQgDgPAAgRIAAzDQAAjDAfiLQAgiIAsAAQAtAAAfCIQAgCLAADDIAATDQAAARgDAPIADDWQAAAkggAYQgfAagtAAQgsAAgggag");
	this.shape_40.setTransform(0.025,76.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMiVQgfCKAADCIAATEQAAARADAPQgDAKAAALIAADCQAAAjAfAZQAgAZAtAAQAtAAAfgZQAfgZABgjIgEjXQADgPABgRIAAzEQgBjCgfiKQgfiIgtAAQgtAAggCIg");
	this.shape_41.setTransform(0,3.625);

	this.instance_5 = new lib.CachedBmp_101();
	this.instance_5.setTransform(-14,-173.85,0.5,0.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7ED69").s().p("AhMQkQgfgYAAgkIAAjBQAAgLADgKQgDgPAAgRIAA02QAAjSAfiUQAgiSAsAAQAtAAAfCSQAgCUAADSIAAU2QAAARgDAPIADDWQAAAkggAYQgfAagtAAQgsAAgggag");
	this.shape_42.setTransform(0.025,68.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMkhQgfCUAADRIAAU3QAAARADAPQgDAKAAALIAADCQAAAjAfAZQAgAZAtAAQAtAAAfgZQAfgZABgjIgEjXQADgPABgRIAA03QgBjRgfiUQgfiSgtAAQgtAAggCSg");
	this.shape_43.setTransform(0,3.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F7ED69").s().p("AhMRGQgfgZAAgjIAAjCQAAgLADgKQgDgPAAgRIAA1pQAAjYAfiZQAgiXAsAAQAtAAAfCXQAgCZAADYIAAVpQAAARgDAPIADDXQAAAjggAZQgfAZgtAAQgsAAgggZg");
	this.shape_44.setTransform(0.025,65.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMlfQgfCZAADXIAAVqQAAARADAPQgDAKAAALIAADCQAAAjAfAZQAgAZAtAAQAtAAAfgZQAfgZABgjIgEjXQADgPABgRIAA1qQgBjXgfiZQgfiXgtAAQgtAAggCXg");
	this.shape_45.setTransform(0,3.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F7ED69").s().p("AhMRnQgfgYAAgkIAAjCQAAgLADgJQgDgQAAgQIAA2dQAAjfAfidQAgibAsAAQAtAAAfCbQAgCdAADfIAAWdQAAAQgDAQIADDWQAAAkggAYQgfAZgtAAQgsAAgggZg");
	this.shape_46.setTransform(0.025,61.875);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMmeQgfCeAADfIAAWcQAAARADAPQgDAKAAALIAADCQAAAjAfAZQAgAZAtAAQAtAAAfgZQAfgZABgjIgEjXQADgPABgRIAA2cQgBjfgfieQgfibgtAAQgtAAggCbg");
	this.shape_47.setTransform(0,3.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F7ED69").s().p("AhMSJQgfgZAAgjIAAjCQAAgLADgKQgDgPAAgRIAA3PQAAjmAfiiQAgigAsAAQAtAAAfCgQAgCiAADmIAAXPQAAARgDAPIADDXQAAAjggAZQgfAZgtAAQgsAAgggZg");
	this.shape_48.setTransform(0.025,58.525);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMncQgfCiAADmIAAXPQAAARADAPQgDAKAAALIAADCQAAAjAfAZQAgAZAtAAQAtAAAfgZQAfgZABgjIgEjXQADgPABgRIAA3PQgBjmgfiiQgfiggtAAQgtAAggCgg");
	this.shape_49.setTransform(0,3.625);

	this.instance_6 = new lib.CachedBmp_102();
	this.instance_6.setTransform(-14,-173.85,0.5,0.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F7ED69").s().p("AhETVIgKgHQgWgSgFgYQgCgKAAgLIAAiZIAAgUIAAgbQAAgLACgKQgCgQAAgRIAAjTIAAghIAA08QAAjzAfisQAfimAsgEQAuACAeCjQAhCxAADwIAAU9IAAAdIAADaQAAARgCAQQACAJAAAKIAAAeIAAARIAACbQAAAJgCAKQgFAYgXATIgIAGQgcAUgmABQgrAAgdgUg");
	this.shape_50.setTransform(0.025,51.425);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMpgQgfCsAADzIAAU8IAAAhIAADTQAAARADAQQgDAKAAALIABAbIgBAUIAACZQAAALACAKQAFAYAXASIAJAHQAeAUAqAAQAngBAbgUIAIgGQAYgTAEgYQACgKABgJIAAibIgBgRIABgeQAAgKgDgJQADgQAAgRIAAjaIAAgdIAA09QgBjwggixQgfijgugCQgrAEggCmg");
	this.shape_51.setTransform(0,3.625);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F7ED69").s().p("AhGT6IgJgHQgXgUgEgZIgBgVIAAieIABgUIgBgcQAAgMACgKQgCgRAAgRIAAjZIAAgiIAA1jQAAj7AfiwQAgitArgDQAuADAfCpQAgC1AAD4IAAVkIAAAdIAADgQAAASgCAQQACAKAAAKIgBAeIABASIAACfQAAAKgBAKQgEAagXAUIgIAGQgdAVgoABQgrAAgegVg");
	this.shape_52.setTransform(0.025,47.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMqmQgfCwAAD7IAAVjIAAAiIAADZQAAARACARQgCAKAAAMIABAcIgBAUIAACeIACAVQADAZAXAUIAJAHQAeAVAsAAQAogBAcgVIAIgGQAYgUADgaQACgKAAgKIAAifIgCgSIACgeQgBgKgCgKQACgQABgSIAAjgIAAgdIAA1kQAAj4ghi1QgeipgvgDQgrADggCtg");
	this.shape_53.setTransform(0,3.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F7ED69").s().p("AhIUeIgJgHQgXgVgCgbIgBgVIAAiiQAAgLACgJQgCgPAAgPIABgWIgBgjIAAjfIAAgkIAA2JQAAkCAfi2QAgizAsgBQAtAEAfCtQAgC7AAD+IAAWKIAAAfIAADmIgBAkIABATQAAARgCAPQACAJAAAJIAACkIgBAUQgCAbgXAVIgJAGQgdAXgqABQgrgBgfgWg");
	this.shape_54.setTransform(0.025,43.85);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMrtQgfC2AAECIAAWKIAAAjIAADfIABAjIgBAXQAAAPACAOQgCAJAAALIAACiIABAWQACAbAXAUIAJAHQAfAXAsAAQApgBAegWIAIgHQAXgUACgcIACgUIAAikQgBgJgCgJQACgPABgQIgCgUIACgkIAAjmIAAgeIAA2KQAAj/ghi7QgeitgugEQgsABggCzg");
	this.shape_55.setTransform(0,3.625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F7ED69").s().p("AhKVDIgJgIQgWgVgCgcIAAgXIAAimQAAgLACgJQgCgQAAgPIAAgYIAAgjIAAjlIAAglIAA2wQAAkKAfi6QAgi5AsgCQAuAHAeCyQAgC/AAEGIAAWxIAAAfIAADtIAAAlIAAATQAAARgCAPQACAJAAALIAACnIAAAVQgBAdgYAVQgDAFgFACQgeAZgsAAQgrgBgggXg");
	this.shape_56.setTransform(0.025,40.05);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMszQgfC7AAEJIAAWxIAAAkIAADlIABAjIgBAZQAAAPADAPQgDAJAAALIAACmIABAXQABAcAWAWIAJAHQAgAYAsAAQArAAAegYQAFgDAEgEQAXgWABgdIABgUIAAioQAAgLgDgJQADgPAAgQIgBgUIABglIAAjtIAAgfIAA2wQgBkGgfjAQgfiygugGQgsABggC5g");
	this.shape_57.setTransform(0,3.625);

	this.instance_7 = new lib.CachedBmp_165();
	this.instance_7.setTransform(-14,-173.85,0.5,0.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F7ED69").s().p("AhMWBQgfgZAAgjIAAjCQAAgLADgKQgDgPAAgRIAAnJIABgfIgBgxIAA1tQAAj9AfizQAgixAsAAQAtAAAfCxQAgCzAAD9IAAVtIgBAxIABAfIAAHJQAAARgDAPIADDXQAAAjggAZQgfAZgtAAQgsAAgggZg");
	this.shape_58.setTransform(0.025,33.725);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMu7QgfCzAAD9IAAVtIABAxIgBAfIAAHJQAAARADAPQgDAKAAALIAADCQAAAjAfAZQAgAZAtAAQAtAAAfgZQAfgZABgjIgEjXQADgPABgRIAAnJIgCgfIACgxIAA1tQgBj9gfizQgfixgtAAQgtAAggCxg");
	this.shape_59.setTransform(0,3.625);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F7ED69").s().p("AhMWaQgfgYAAgkIAAjCQAAgLADgJQgDgQAAgQIAApsQAAgdACgaQgCggAAgkIAA0BQAAjqAfilQAgijAsAAQAtAAAfCjQAgClAADqIAAUBQAAAkgCAgQACAaAAAdIAAJsQAAAQgDAQIADDWQAAAkggAYQgfAZgtAAQgsAAgggZg");
	this.shape_60.setTransform(0.025,31.175);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMv8QgfClAADqIAAUBQAAAkACAhQgCAZAAAdIAAJsQAAARADAPQgDAKAAALIAADCQAAAjAfAZQAgAZAtAAQAtAAAfgZQAfgZABgjIgEjXQADgPABgRIAApsQgBgdgCgZQACghABgkIAA0BQgBjqgfilQgfijgtAAQgtAAggCjg");
	this.shape_61.setTransform(0,3.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F7ED69").s().p("AhMW0QgfgZAAgjIAAjCQAAgLADgKQgDgPAAgRIAAsOQAAgqACglQgCgpAAguIAAyWQAAjWAfiXQAgiWAsAAQAtAAAfCWQAgCXAADWIAASWQAAAugCApQACAlAAAqIAAMOQAAARgDAPIADDXQAAAjggAZQgfAZgtAAQgsAAgggZg");
	this.shape_62.setTransform(0.025,28.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMw8QgfCXAADWIAASWQAAAuADApQgDAlAAAqIAAMOQAAARADAPQgDAKAAALIAADCQAAAjAfAZQAgAZAtAAQAtAAAfgZQAfgZABgjIgEjXQADgPABgRIAAsOQAAgqgDglQADgpAAguIAAyWQgBjWgfiXQgfiWgtAAQgtAAggCWg");
	this.shape_63.setTransform(0,3.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F7ED69").s().p("AhMXNQgfgYAAgkIAAjCQAAgLADgJQgDgQAAgQIAAuxQAAg3ADgwQgDgyAAg4IAAwqQAAjDAfiKQAgiHAsAAQAtAAAfCHQAgCKAADDIAAQqQAAA4gDAyQADAwAAA3IAAOxQAAAQgDAQIADDWQAAAkggAYQgfAZgtAAQgsAAgggZg");
	this.shape_64.setTransform(0.025,26.075);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAhMx9QgfCJAADDIAAQrQAAA4AEAxQgEAxAAA3IAAOwQAAARADAPQgDAKAAALIAADCQAAAjAfAZQAgAZAtAAQAtAAAfgZQAfgZABgjIgEjXQADgPABgRIAAuwQAAg3gEgxQAEgxAAg4IAAwrQgBjDgfiJQgfiIgtAAQgtAAggCIg");
	this.shape_65.setTransform(0,3.625);

	this.instance_8 = new lib.CachedBmp_166();
	this.instance_8.setTransform(-14,-173.85,0.5,0.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F7ED69").s().p("AgNYgQgjgDgagUIgIgGQgZgXAAgfIAAi4IAAgOIABgFQAAgJABgHIgBgNIgBgUIAAj9IAAgaIAAhQIAAsDQAAg9ADg3IAAgOIgBgWIgBgpIgBg/IAAvVQAAiyAeh/QAih7AogFQAKgCAKAFQAhASAZBiIAFAWQAcB4AACkIAAAoIAAOsQAAA2gCAyIgBAXIAAASIACAiIABBNIAAMqIAABSIAAAYIAADXQAAAQgCAQQACAKAAALIAAAjIAAASIAACSQAAARgGAPQgGARgQANQgKAKgMAGQgXANgeAAIgGABIgMgBg");
	this.shape_66.setTransform(0.025,20.2067);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAgD15QgoAFghB7QgfB/AACyIAAPUIABA/IACApIABAWIgBAOQgDA4AAA9IAAMDIABBQIgBAaIAAD9IABAUIACANQgCAHAAAJIAAAFIgBAOIAAC4QAAAfAZAXIAIAGQAbAUAiADQAJABAJgBQAeAAAXgNQANgGAJgKQAQgNAHgRQAFgPABgRIAAiSIgBgSIABgjQAAgLgDgKQADgQAAgQIAAjXIgBgYIABhSIAAsqIgChNIgCgjIAAgSIABgXQADgyAAg2IAAurIAAgoQgBikgch4IgEgWQgZhigigSQgHgEgIAAIgFABg");
	this.shape_67.setTransform(0,3.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F7ED69").s().p("AgKZCQgjgDgbgTIgIgHQgagWgBggIAAi7IAAgPIABgFQAAgJABgHIgBgNIgBgVIAAkCIABgaIgBhSIAAsTQAAg+ACg4IAAgOIAAgXIgCgpIAAhBIAAvpQAAi2AeiCQAgh8AlgLQAKgDALAEQAjANAaBoIAFAWQAcB6ABCoIAAApIAAPAQAAA2gCAzIgBAXIABATIABAjIABBPIAAM6IgBBUIABAZIAADbQAAARgCAQQACAKAAALIgBAjIABATIAACVQAAARgEAQQgFASgPAPQgJAJgMAIQgYAOgeACIgJAAIgKAAg");
	this.shape_68.setTransform(0.025,16.8558);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAgH27QgmALggB7QgeCCAAC3IAAPoIABBAIABAqIABAWIgBAOQgCA6AAA+IAAMSIABBTIgBAZIAAEDIABAUIABANQgBAIABAJIgBAFIgBAOIAAC7QABAgAaAXIAIAHQAcATAiACIAUAAQAdgCAYgOQAMgHAKgKQAOgOAFgSQAFgQAAgSIAAiVIgCgSIACgkQgBgKgCgKQACgRABgRIAAjbIgCgZIAChTIAAs7IgChOIgBgkIgBgTIABgXQACg0ABg1IAAvAIAAgpQgCingch6IgEgXQgahogkgNQgGgCgFAAQgEAAgFACg");
	this.shape_69.setTransform(0,3.625);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F7ED69").s().p("AgGZkQgkgCgbgSIgKgHQgbgXgBggIAAi/IABgPIABgFIgBgRIgBgNIAAgVIAAkHQAAgOABgNQgBgpAAgrIAAsiQAAg+ABg7IABgOIgBgXIgBgrIAAhCIAAv9QAAi5AdiFQAfh9AjgQQALgGAKADQAlAJAbBsIAFAXQAcB9ACCrIAAAqIAAPTIgBBsIgBAYIABATIABAjIAABRIAANLIgBBVIABAaIAADfIgBAiIABAVQAAAVgCAQQACAJAAAKIAACYQAAARgDARQgDATgNAPQgJALgNAIQgXAQgfACIgNABIgGAAg");
	this.shape_70.setTransform(0.025,13.4583);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAgM39QgjAQgfB9QgdCFAAC6IAAP9IABBBIABArIAAAWIAAAPQgCA7AAA+IAAMiQAAAsACApQgCANAAANIAAEIIABAUIABANIAAARIgBAGIgBAOIAAC/QABAgAcAXIAJAHQAbATAlABQAJABAKgBQAegDAYgQQAMgIAJgKQAOgQACgSQADgRABgSIAAiYQgBgKgCgJQACgPABgVIgCgVIACgjIAAjfIgCgaIAChUIAAtMIgBhQIgBgkIgBgUIABgXIAChrIAAvTIgBgrQgCirgch8IgFgXQgbhtglgJIgHgBQgGAAgIAEg");
	this.shape_71.setTransform(0,3.625);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F7ED69").s().p("AhDZzIgKgHQgdgXgBghIAAjCIABgPIABgFIgBgSIgBgNIAAgVIAAkNQAAgOACgMQgCgqAAgtIAAsxIAAh8IABgOIAAgXIgBgsIAAhEIAAwQQAAi+AciIQAdh9AigWQAKgIAKACQAoAEAcByIAFAYQAcB/ADCuIAAArIAAPnIAABuIgBAYIAAAUIABAkIAABSIAANcQAAAtgBApQABANAAAOIAADjIAAAkIAAAUQAAAWgCAQQACAJAAAKIAACbQAAASgBASQgCAUgMAQQgIALgNAJQgXARgfAEIgUABQglgBgcgSg");
	this.shape_72.setTransform(0.025,10.0625);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#AF4B28").s().p("AhjbGQgpgpABg6MAAAgzFQgBg6ApgpQAqgpA5AAQA6AAApApQApApAAA6MAAAAzFQAAA6gpApQgpApg6AAQg5AAgqgpgAgQ4/QghAWgdB+QgdCIAAC9IAAQRIAABEIABAqIAAAXIAAAPIgBB8IAAMyQAAAtACApQgCANAAAOIAAEMIABAVIAAAOIACARIgCAGIgBAPIAADCQABAhAdAWIAKAIQAcASAlABIAUgBQAfgEAXgRQANgKAIgKQANgRABgUQACgRAAgSIAAibQAAgLgDgJQADgPAAgWIgBgVIABgjIAAjkQAAgNgCgNQACgqAAgtIAAtcIgBhSIgBglIAAgUIABgXIABhtIAAvnIgBgrQgCivgdh/IgFgXQgchygogFIgDAAQgIAAgJAGg");
	this.shape_73.setTransform(0,3.625);

	this.instance_9 = new lib.CachedBmp_167();
	this.instance_9.setTransform(-14,-173.85,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_106();
	this.instance_10.setTransform(-14,-173.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{scaleY:0.0231,y:172.8378}}]}).to({state:[{t:this.shape_1},{t:this.shape,p:{scaleY:0.0231,y:172.8378}}]},1).to({state:[{t:this.shape_1},{t:this.shape,p:{scaleY:0.0231,y:172.8378}}]},1).to({state:[{t:this.shape_1},{t:this.shape,p:{scaleY:0.0231,y:172.8378}}]},1).to({state:[{t:this.shape_1},{t:this.shape,p:{scaleY:0.649,y:157.8663}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.3,-195.9,70.4,410.1);


(lib.kakapo_Q_img = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer_1
	this.instance = new lib.zoom_pic();
	this.instance.setTransform(-39,30.45,0.0519,0.0517);

	this.instance_1 = new lib.CachedBmp_91();
	this.instance_1.setTransform(-55.95,-72.45,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_92();
	this.instance_2.setTransform(-110.95,-124.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.9,-124.1,221.5,278);


(lib.india_Q_img = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.zoom_pic();
	this.instance.setTransform(46,30.45,0.0519,0.0517);

	this.instance_1 = new lib.CachedBmp_89();
	this.instance_1.setTransform(-57.05,-40,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_90();
	this.instance_2.setTransform(-110.95,-79.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ao0CEIAAkHIRpAAIAAEHg");
	this.shape.setTransform(-0.15,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxUECIAAoDMAioAAAIAAIDg");
	this.shape_1.setTransform(-0.2,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-79.1,221.7,158);


(lib.greece_A_img = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer_1
	this.instance = new lib.zoom_pic();
	this.instance.setTransform(46,30.5,0.0519,0.0517,0,0,0,0,1);

	this.instance_1 = new lib.CachedBmp_87();
	this.instance_1.setTransform(-57,-40,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_88();
	this.instance_2.setTransform(-110.95,-79.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.9,-79.1,221.5,158);


(lib.elephant_A_img = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer_1
	this.instance = new lib.zoom_pic();
	this.instance.setTransform(46,30.45,0.0518,0.0518);

	this.instance_1 = new lib.CachedBmp_85();
	this.instance_1.setTransform(-56.65,-40.4,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_86();
	this.instance_2.setTransform(-110.95,-79.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.9,-79.1,221.5,158);


(lib.bear_A_img = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer_1
	this.instance = new lib.zoom_pic();
	this.instance.setTransform(46,30.45,0.0519,0.0517);

	this.instance_1 = new lib.CachedBmp_83();
	this.instance_1.setTransform(-57,-40,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_84();
	this.instance_2.setTransform(-110.95,-79.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.9,-79.1,221.5,158);


(lib.comBox = function(mode,startPosition,loop,reversed) {
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
	this.startbtn = new lib.btns();
	this.startbtn.name = "startbtn";
	this.startbtn.setTransform(-0.9,64.45,0.3804,0.3804,-1.7584,0,0,0.2,0.1);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר משחק, 0, 100, 1, 101, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.name = "mycb";
	this.mycb.setTransform(-1.9,-11.7,2.206,2.206,-1.7607,0,0,49.6,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.comBox, new cjs.Rectangle(-113.1,-40,224.3,133.4), null);


(lib.pause_screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// water
	this.instance = new lib.water_glass();
	this.instance.setTransform(569.85,545.3,1,1,0,0,0,-1.5,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sheriff
	this.instance_1 = new lib.CachedBmp_164();
	this.instance_1.setTransform(314.7,275,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.continue_btn = new lib.btns();
	this.continue_btn.name = "continue_btn";
	this.continue_btn.setTransform(766.4,566.55,1.4668,1.4668,0,0,0,0.1,0.1);

	this.text = new cjs.Text(",באמת מאוד חם היום זה בסדר לקחת רגע הפסקה, הנה כוס מים ...להתרעננות קלה", "normal 400 35px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 43;
	this.text.lineWidth = 309;
	this.text.alpha = 0.98823529;
	this.text.parent = this;
	this.text.setTransform(766.35,304.85);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_2 = new lib.Swinging_sign();
	this.instance_2.setTransform(640.9,408.1,3.8703,3.8703,0,0,0,0.1,-15.8);

	this.bg_game = new lib.bgGame_screen();
	this.bg_game.name = "bg_game";
	this.bg_game.setTransform(1090.5,360.05,1,1,0,0,0,1090.5,360.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg_game},{t:this.instance_2},{t:this.text},{t:this.continue_btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pause_screen, new cjs.Rectangle(0,0,2181,720.7), null);


(lib.end_screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// star
	this.instance = new lib.sheriff_star();
	this.instance.setTransform(508.3,503.9,0.64,0.64,0,0,0,0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sheriff
	this.instance_1 = new lib.CachedBmp_163();
	this.instance_1.setTransform(294.2,269.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.finished_btn = new lib.btns();
	this.finished_btn.name = "finished_btn";
	this.finished_btn.setTransform(550.2,594.05,0.3274,0.3274);

	this.playAgain_btn = new lib.btns();
	this.playAgain_btn.name = "playAgain_btn";
	this.playAgain_btn.setTransform(696.55,593.9,0.3241,0.3241,0,0,0,0,0.1);

	this.mistakes_txt = new cjs.Text("", "normal 700 25px 'Rubik'", "#FCFBFB");
	this.mistakes_txt.name = "mistakes_txt";
	this.mistakes_txt.textAlign = "center";
	this.mistakes_txt.lineHeight = 33;
	this.mistakes_txt.lineWidth = 101;
	this.mistakes_txt.alpha = 0.98823529;
	this.mistakes_txt.parent = this;
	this.mistakes_txt.setTransform(658.4,490.75);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.mistakes_txt);
	}

	this.grade_txt = new cjs.Text("", "normal 700 25px 'Rubik'", "#FCFBFB");
	this.grade_txt.name = "grade_txt";
	this.grade_txt.textAlign = "center";
	this.grade_txt.lineHeight = 33;
	this.grade_txt.lineWidth = 80;
	this.grade_txt.alpha = 0.98823529;
	this.grade_txt.parent = this;
	this.grade_txt.setTransform(775.9,490.75);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.grade_txt);
	}

	this.allTime_txt = new cjs.Text("", "normal 700 25px 'Rubik'", "#FCFBFB");
	this.allTime_txt.name = "allTime_txt";
	this.allTime_txt.textAlign = "center";
	this.allTime_txt.lineHeight = 33;
	this.allTime_txt.lineWidth = 78;
	this.allTime_txt.alpha = 0.98823529;
	this.allTime_txt.parent = this;
	this.allTime_txt.setTransform(880.9,490.75);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.allTime_txt);
	}

	this.text = new cjs.Text(":שגיאות", "normal 700 25px 'Rubik'", "#FCFBFB");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 91;
	this.text.alpha = 0.98823529;
	this.text.parent = this;
	this.text.setTransform(658.4,443.25);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.text_1 = new cjs.Text(":ציון", "normal 700 25px 'Rubik'", "#FCFBFB");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 48;
	this.text_1.alpha = 0.98823529;
	this.text_1.parent = this;
	this.text_1.setTransform(775.9,443.25);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.text_2 = new cjs.Text(":זמן", "normal 700 25px 'Rubik'", "#FCFBFB");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 33;
	this.text_2.lineWidth = 48;
	this.text_2.alpha = 0.98823529;
	this.text_2.parent = this;
	this.text_2.setTransform(880.9,443.25);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("!כל הכבוד", "normal 700 50px 'Rubik'", "#FCFBFB");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 63;
	this.text_3.lineWidth = 216;
	this.text_3.alpha = 0.98823529;
	this.text_3.parent = this;
	this.text_3.setTransform(732.3,258.45);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("סיימתם לענות על כל השאלות,הוכחתם !שאתם ראויים לקבל את התג שלכם\n.נתראה בפעם הבאה שתחזרו להתאמן", "normal 400 25px 'Rubik'", "#FFFFFF");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 32;
	this.text_4.lineWidth = 401;
	this.text_4.alpha = 0.98823529;
	this.text_4.parent = this;
	this.text_4.setTransform(932.8,332.75);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_4);
	}

	this.instance_2 = new lib.Swinging_sign();
	this.instance_2.setTransform(640.9,408.1,3.8703,3.8703,0,0,0,0.1,-15.8);

	this.bg_game = new lib.bgGame_screen();
	this.bg_game.name = "bg_game";
	this.bg_game.setTransform(1090.5,360.05,1,1,0,0,0,1090.5,360.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg_game},{t:this.instance_2},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.allTime_txt},{t:this.grade_txt},{t:this.mistakes_txt},{t:this.playAgain_btn},{t:this.finished_btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.end_screen, new cjs.Rectangle(0,0,2181,720.7), null);


(lib.animationEnd_screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_36 = function() {
		this.stars_right.gotoAndPlay(1);
		this.stars_left.gotoAndPlay(1);
		createjs.Sound.play("successEnd");
	}
	this.frame_49 = function() {
		this.stars_middle.gotoAndPlay(1);
	}
	this.frame_119 = function() {
		this.stop;
		stage.removeChild(stage.getChildByName("endAnimation"));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(13).call(this.frame_49).wait(70).call(this.frame_119).wait(1));

	// stars
	this.stars_right = new lib.stars();
	this.stars_right.name = "stars_right";
	this.stars_right.setTransform(909.3,492.45,1,1,44.9994);

	this.stars_left = new lib.stars();
	this.stars_left.name = "stars_left";
	this.stars_left.setTransform(347.7,565.8,1,1,-150.0008);

	this.stars_middle = new lib.stars();
	this.stars_middle.name = "stars_middle";
	this.stars_middle.setTransform(447.25,457.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.stars_left,p:{rotation:-150.0008}},{t:this.stars_right}]},36).to({state:[{t:this.stars_left,p:{rotation:-150.0008}},{t:this.stars_right},{t:this.stars_middle}]},13).to({state:[{t:this.stars_left,p:{rotation:-135.0006}},{t:this.stars_right}]},60).to({state:[]},10).wait(1));

	// star
	this.instance = new lib.sheriff_star();
	this.instance.setTransform(694.15,586.55,0.6224,0.6224,0,0,0,0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({scaleX:0.626,scaleY:0.626,x:745.45,y:526.4},0).to({_off:true},83).wait(1));

	// sherif_eyes
	this.instance_1 = new lib.sheriffs_eyes();
	this.instance_1.setTransform(627.7,319.85,1.2985,1.2985,0,-2.9692,177.0308,15.6,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},119).wait(1));

	// sheriff
	this.instance_2 = new lib.CachedBmp_161();
	this.instance_2.setTransform(499.85,244,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_162();
	this.instance_3.setTransform(499.75,243.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},36).to({state:[]},83).wait(1));

	// Layer_1
	this.instance_4 = new lib.Swinging_sign();
	this.instance_4.setTransform(640.9,408.1,3.8703,3.8703,0,0,0,0.1,-15.8);

	this.bg_game = new lib.bgGame_screen();
	this.bg_game.name = "bg_game";
	this.bg_game.setTransform(1090.5,360.7,1,1,0,0,0,1090.5,360.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg_game},{t:this.instance_4}]}).to({state:[{t:this.bg_game},{t:this.instance_4}]},36).to({state:[]},83).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2181,720.7);


(lib.animation_screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_259 = function() {
		this.stop;
		stage.removeChild(stage.getChildByName("animation_screen"));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(259).call(this.frame_259).wait(1));

	// Layer_1
	this.instance = new lib.start_animation();
	this.instance.setTransform(640,360.8,1,1,0,0,0,640,360.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({regX:-274.3,regY:360.9,scaleX:1.0153,scaleY:1.0153,x:-295.3,y:360.9},0).wait(1).to({scaleX:1.0306,scaleY:1.0306,x:-316.3,y:360.95},0).wait(1).to({scaleX:1.0459,scaleY:1.0459,x:-337.3},0).wait(1).to({scaleX:1.0611,scaleY:1.0611,x:-358.25,y:360.9},0).wait(1).to({scaleX:1.0764,scaleY:1.0764,x:-379.25,y:360.95},0).wait(1).to({scaleX:1.0917,scaleY:1.0917,x:-400.25},0).wait(1).to({scaleX:1.107,scaleY:1.107,x:-421.25},0).wait(1).to({scaleX:1.1223,scaleY:1.1223,x:-442.25},0).wait(1).to({scaleX:1.1376,scaleY:1.1376,x:-463.25},0).wait(1).to({scaleX:1.1529,scaleY:1.1529,x:-484.25},0).wait(1).to({scaleX:1.1681,scaleY:1.1681,x:-505.2},0).wait(1).to({scaleX:1.1834,scaleY:1.1834,x:-526.2},0).wait(1).to({scaleX:1.1987,scaleY:1.1987,x:-547.2},0).wait(1).to({scaleX:1.214,scaleY:1.214,x:-568.2,y:361},0).wait(1).to({scaleX:1.2293,scaleY:1.2293,x:-589.2,y:360.95},0).wait(1).to({scaleX:1.2446,scaleY:1.2446,x:-610.2},0).wait(1).to({scaleX:1.2599,scaleY:1.2599,x:-631.15,y:361},0).wait(1).to({scaleX:1.2751,scaleY:1.2751,x:-652.15,y:360.95},0).wait(1).to({scaleX:1.2904,scaleY:1.2904,x:-673.15},0).wait(1).to({scaleX:1.3057,scaleY:1.3057,x:-694.15,y:361},0).wait(1).to({scaleX:1.3266,scaleY:1.3266,x:-710.6,y:360.95},0).wait(1).to({scaleX:1.3474,scaleY:1.3474,x:-727.15,y:361},0).wait(1).to({scaleX:1.3683,scaleY:1.3683,x:-743.65,y:360.95},0).wait(1).to({scaleX:1.3891,scaleY:1.3891,x:-760.2,y:361},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:-776.7},0).wait(1).to({scaleX:1.4308,scaleY:1.4308,x:-793.2},0).wait(1).to({scaleX:1.4517,scaleY:1.4517,x:-809.75},0).wait(1).to({scaleX:1.4725,scaleY:1.4725,x:-826.25},0).wait(1).to({scaleX:1.4934,scaleY:1.4934,x:-842.8},0).wait(1).to({scaleX:1.5142,scaleY:1.5142,x:-859.25},0).wait(1).to({scaleX:1.5351,scaleY:1.5351,x:-875.75},0).wait(1).to({scaleX:1.5559,scaleY:1.5559,x:-892.3,y:361.05},0).wait(1).to({scaleX:1.5768,scaleY:1.5768,x:-908.8,y:361},0).wait(1).to({scaleX:1.5976,scaleY:1.5976,x:-925.3,y:361.05},0).wait(1).to({scaleX:1.6185,scaleY:1.6185,x:-941.85,y:361},0).wait(1).to({scaleX:1.6393,scaleY:1.6393,x:-958.35,y:361.05},0).wait(1).to({scaleX:1.6602,scaleY:1.6602,x:-974.9,y:361},0).wait(1).to({scaleX:1.681,scaleY:1.681,x:-991.4,y:361.05},0).wait(1).to({scaleX:1.7019,scaleY:1.7019,x:-1007.85},0).wait(1).to({scaleX:1.7227,scaleY:1.7227,x:-1024.4},0).wait(1).to({scaleX:1.7458,scaleY:1.7458,x:-1043,y:361},0).wait(1).to({scaleX:1.769,scaleY:1.769,x:-1061.55},0).wait(1).to({scaleX:1.7921,scaleY:1.7921,x:-1080.15,y:361.05},0).wait(1).to({scaleX:1.8152,scaleY:1.8152,x:-1098.75},0).wait(1).to({scaleX:1.8383,scaleY:1.8383,x:-1117.35},0).wait(1).to({scaleX:1.8614,scaleY:1.8614,x:-1135.95},0).wait(1).to({scaleX:1.8845,scaleY:1.8845,x:-1154.55,y:361.1},0).wait(1).to({scaleX:1.9077,scaleY:1.9077,x:-1173.05,y:361.05},0).wait(1).to({scaleX:1.9308,scaleY:1.9308,x:-1191.65},0).wait(1).to({scaleX:1.9539,scaleY:1.9539,x:-1210.25},0).wait(1).to({scaleX:1.977,scaleY:1.977,x:-1228.85},0).wait(1).to({scaleX:2.0001,scaleY:2.0001,x:-1247.45,y:361.1},0).wait(1).to({scaleX:2.0232,scaleY:2.0232,x:-1266},0).wait(1).to({scaleX:2.0464,scaleY:2.0464,x:-1284.6},0).wait(1).to({scaleX:2.0695,scaleY:2.0695,x:-1303.2,y:361.05},0).wait(1).to({scaleX:2.0926,scaleY:2.0926,x:-1321.8},0).wait(1).to({scaleX:2.1157,scaleY:2.1157,x:-1340.4,y:361.1},0).wait(1).to({scaleX:2.1388,scaleY:2.1388,x:-1358.95},0).wait(1).to({scaleX:2.1619,scaleY:2.1619,x:-1377.5},0).wait(1).to({scaleX:2.1851,scaleY:2.1851,x:-1396.1},0).wait(1).to({scaleX:2.2113,scaleY:2.2113,x:-1416.05},0).wait(1).to({scaleX:2.2375,scaleY:2.2375,x:-1436,y:361.15},0).wait(1).to({scaleX:2.2638,scaleY:2.2638,x:-1455.9,y:361.1},0).wait(1).to({scaleX:2.29,scaleY:2.29,x:-1475.85},0).wait(1).to({scaleX:2.3162,scaleY:2.3162,x:-1495.8,y:361.15},0).wait(1).to({scaleX:2.3425,scaleY:2.3425,x:-1515.75,y:361.1},0).wait(1).to({scaleX:2.3687,scaleY:2.3687,x:-1535.65},0).wait(1).to({scaleX:2.395,scaleY:2.395,x:-1555.6,y:361.15},0).wait(1).to({scaleX:2.4212,scaleY:2.4212,x:-1575.55},0).wait(1).to({scaleX:2.4474,scaleY:2.4474,x:-1595.5},0).wait(1).to({scaleX:2.4737,scaleY:2.4737,x:-1615.4},0).wait(1).to({scaleX:2.4999,scaleY:2.4999,x:-1635.3},0).wait(1).to({scaleX:2.5261,scaleY:2.5261,x:-1655.25},0).wait(1).to({scaleX:2.5524,scaleY:2.5524,x:-1675.2},0).wait(1).to({scaleX:2.5786,scaleY:2.5786,x:-1695.1},0).wait(1).to({scaleX:2.6049,scaleY:2.6049,x:-1715.05},0).wait(1).to({scaleX:2.6311,scaleY:2.6311,x:-1735},0).wait(1).to({scaleX:2.6573,scaleY:2.6573,x:-1754.95,y:361.2},0).wait(1).to({scaleX:2.6836,scaleY:2.6836,x:-1774.85},0).wait(1).to({scaleX:2.7098,scaleY:2.7098,x:-1794.8,y:361.15},0).wait(1).to({scaleX:2.8909,scaleY:2.8909,x:-1954.75,y:346.9},0).wait(1).to({scaleX:3.072,scaleY:3.072,x:-2114.6,y:332.6},0).wait(1).to({scaleX:3.2531,scaleY:3.2531,x:-2274.55,y:318.3},0).wait(1).to({scaleX:3.4343,scaleY:3.4343,x:-2434.4,y:304},0).wait(1).to({scaleX:3.6154,scaleY:3.6154,x:-2594.35,y:289.7},0).wait(1).to({scaleX:3.7965,scaleY:3.7965,x:-2754.2,y:275.4},0).wait(1).to({scaleX:3.9776,scaleY:3.9776,x:-2914.15,y:261.1},0).wait(1).to({scaleX:4.1587,scaleY:4.1587,x:-3074.1,y:246.8},0).wait(1).to({scaleX:4.3398,scaleY:4.3398,x:-3233.95,y:232.55},0).wait(1).to({scaleX:4.5209,scaleY:4.5209,x:-3393.9,y:218.25},0).wait(1).to({scaleX:4.702,scaleY:4.702,x:-3553.75,y:203.9},0).wait(1).to({scaleX:4.8831,scaleY:4.8831,x:-3713.7,y:189.6},0).wait(1).to({scaleX:5.0642,scaleY:5.0642,x:-3873.55,y:175.35},0).wait(1).to({scaleX:5.2454,scaleY:5.2454,x:-4033.5,y:161.05},0).wait(1).to({scaleX:5.4265,scaleY:5.4265,x:-4193.45,y:146.75},0).wait(1).to({scaleX:5.6076,scaleY:5.6076,x:-4353.3,y:132.45},0).wait(1).to({scaleX:5.7887,scaleY:5.7887,x:-4513.25,y:118.15},0).wait(1).to({scaleX:5.9698,scaleY:5.9698,x:-4673.1,y:103.85},0).wait(1).to({scaleX:6.1509,scaleY:6.1509,x:-4833.05,y:89.55},0).wait(1).to({scaleX:6.332,scaleY:6.332,x:-4992.9,y:75.25},0).wait(1).to({scaleX:6.9007,scaleY:6.9007,x:-5485.05,y:66.4},0).wait(1).to({scaleX:7.4694,scaleY:7.4694,x:-5977.2,y:57.6},0).wait(1).to({scaleX:8.0381,scaleY:8.0381,x:-6469.3,y:48.75},0).wait(1).to({scaleX:8.6068,scaleY:8.6068,x:-6961.45,y:39.9},0).wait(1).to({scaleX:9.1755,scaleY:9.1755,x:-7453.55,y:31.1},0).wait(1).to({scaleX:9.7442,scaleY:9.7442,x:-7945.7,y:22.25},0).wait(1).to({scaleX:10.3129,scaleY:10.3129,x:-8437.85,y:13.4},0).wait(1).to({scaleX:10.8817,scaleY:10.8817,x:-8929.95,y:4.6},0).wait(1).to({scaleX:11.4504,scaleY:11.4504,x:-9422.1,y:-4.25},0).wait(1).to({scaleX:12.0191,scaleY:12.0191,x:-9914.2,y:-13.1},0).wait(1).to({scaleX:12.5878,scaleY:12.5878,x:-10406.3,y:-21.95},0).wait(1).to({scaleX:13.1565,scaleY:13.1565,x:-10898.45,y:-30.8},0).wait(1).to({scaleX:13.7252,scaleY:13.7252,x:-11390.55,y:-39.6},0).wait(1).to({scaleX:14.2939,scaleY:14.2939,x:-11882.7,y:-48.45},0).wait(1).to({scaleX:14.8626,scaleY:14.8626,x:-12374.85,y:-57.3},0).wait(1).to({scaleX:15.4313,scaleY:15.4313,x:-12866.95,y:-66.1},0).wait(1).to({scaleX:16,scaleY:16,x:-13359.1,y:-74.95},0).wait(1).to({scaleX:16.5687,scaleY:16.5687,x:-13851.2,y:-83.8},0).wait(1).to({scaleX:17.1374,scaleY:17.1374,x:-14343.35,y:-92.6},0).wait(1).to({scaleX:17.7061,scaleY:17.7061,x:-14835.5,y:-101.45},0).wait(19).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9978.6,-6491.6,22663.800000000003,12779.400000000001);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1));

	// Layer_1
	this.instance = new lib.entrace_screen();
	this.instance.setTransform(0.9,0,1,1,0,0,0,640.9,360);

	this.instance_1 = new lib.animation_screen();
	this.instance_1.setTransform(0,0.8,1,1,0,0,0,640,360.8);

	this.instance_2 = new lib.mission_screen();
	this.instance_2.setTransform(0,-0.45,1,1,0,0,0,640,361.1);

	this.instance_3 = new lib.bgGame_screen();
	this.instance_3.setTransform(0,-0.35,1,1,0,0,0,640,360.3);

	this.instance_4 = new lib.btns();
	this.instance_4.setTransform(0,-0.35,0.4286,0.4286);

	this.instance_5 = new lib.talk_bubble();
	this.instance_5.setTransform(19.6,-182.15,0.714,0.714,0,0,0,0,48);

	this.instance_6 = new lib.progress();
	this.instance_6.setTransform(556.05,-27.7,0.8835,0.8835);

	this.instance_7 = new lib.wooden_fence();
	this.instance_7.setTransform(57.45,181.85,1.5588,1.3685,0,0,0,-0.2,0.1);

	this.instance_8 = new lib.clock();
	this.instance_8.setTransform(556.05,-303.8,0.7718,0.7718,0,0,0,0.3,0.1);

	this.instance_9 = new lib.pause();
	this.instance_9.setTransform(-591.8,-313.85,0.1214,0.1214);

	this.instance_10 = new lib.sound();
	this.instance_10.setTransform(-529.1,-313.9,0.0487,0.0487,0,0,0,0,-1.1);

	this.instance_11 = new lib.sheriff();
	this.instance_11.setTransform(-480.5,54.05,1.0536,1.0536);

	this.instance_12 = new lib.aim();
	this.instance_12.setTransform(-43.5,14.65,0.0366,0.0366,0,0,0,-2.8,-1.4);

	this.instance_13 = new lib.hand_gun();
	this.instance_13.setTransform(-37.75,293.1,0.5759,0.5759,0,0,0,-0.1,4.2);

	this.instance_14 = new lib.Instructions_sign();
	this.instance_14.setTransform(520.5,257.2,0.9794,0.9794,3.7168,0,0,-0.1,-0.9);

	this.instance_15 = new lib.Swinging_sign();
	this.instance_15.setTransform(0.1,91,4.1909,4.1909,0,0,0,-0.1,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4,p:{scaleX:0.4286,scaleY:0.4286,y:-0.35}},{t:this.instance_3}]},1).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4,p:{scaleX:0.4286,scaleY:0.4286,y:-0.35}}]},1).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4,p:{scaleX:0.4286,scaleY:0.4286,y:-0.35}}]},1).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4,p:{scaleX:0.4286,scaleY:0.4286,y:-0.35}}]},1).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]},1).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4,p:{scaleX:0.4497,scaleY:0.4497,y:0}}]},1).to({state:[{t:this.instance_15}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-678.8,-361.5,2219.8,723.3);


// stage content:
(lib.ShootIt = function(mode,startPosition,loop,reversed) {
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
		init_sound();
		
		// אתחול סאונד
		function init_sound() {
			createjs.Sound.registerSound("sounds/soundMissionmp3.mp3", "soundMission");
			createjs.Sound.registerSound("sounds/soundGamemp3.mp3", "soundGame");
			createjs.Sound.registerSound("sounds/trueAnswermp3.mp3", "‏‏trueAnswer");
			createjs.Sound.registerSound("sounds/falseAnswermp3.mp3", "falseAnswer");
			createjs.Sound.registerSound("sounds/reloadGunmp3.mp3", "reloadGun");
			createjs.Sound.registerSound("sounds/soundGunshotmp3.mp3", "soundGunshot");
			createjs.Sound.registerSound("sounds/successEndmp3.mp3", "successEnd");
		}
		
		var self = this;
		stage.enableMouseOver(24);
		self.mouseEnabled = true;
		//---------
		
		//================= משתנים ==================
		var mychoice = 0;
		var myGame = [];
		var targetNum;
		var soundOn = true;
		var saveSoundFrame = 0;
		var frameCounter = 0;
		
		var qTime;
		var countingBack = 0;
		var saveAllGameTime = 0;
		var pauseTime = false;
		var seconds = 0;
		var minutes = 0;
		
		var randQ;
		var randA;
		var randT;
		
		var countMistakes = 0;
		var countCorrects = 0;
		var finalGrade = 0;
		
		// מערך המטרות (בקבוקים ופחיות)
		var myTargets = [
			lib.target_1,
			lib.target_2,
			lib.target_3,
			lib.target_4,
			lib.target_5,
			lib.target_6
		];
		
		var myTargetsTemp = [];
		//===========================================
		
		
		//========================== התחלה ============================
		
		// ---------- מסך כניסה ------------
		choose_object(lib.entrace_screen, 0, 0, "entrace_screen", "stop", 0, false);
		combox();
		
		//----------------- משחק ראשון ----------------
		function firstGameFunc() {
			clear();
			//מסך אנימציה
			choose_object(lib.animation_screen, 0, 0, "animation_screen", "play", 0, true, "start");
			choose_object(lib.sound, 110, 45, "sound", "stop", saveSoundFrame, false);
			stage.getChildByName("sound").addEventListener("click", checkSoundStatus);
			choose_object(lib.btns, 1190, 60, "skip", "stop", 2, false);
			stage.getChildByName("skip").addEventListener("click", skipAnimation_click);
		
			// משחק בעלי חיים
			myGame = [
				[
					["איזה בעל חיים הוא הגדול ביותר ?בעולם", "show", 1],
					[
						["lib.elephant_A_img", "false", "not chosen", lib.elephant_A_img],
						["הלוויתן הכחול", "true", "not chosen"],
						["שור", "false", "not chosen"],
						["lib.bear_A_img", "false", "not chosen", lib.bear_A_img],
						["לוויתן גדול סנפיר", "false", "not chosen"]
					]
				],
				[
					["?במשך כמה זמן פיל ישן ביום", "show", 1],
					[
						["שעתיים", "true", "not chosen"],
						["ארבע שעות", "false", "not chosen"],
						["שש שעות", "false", "not chosen"],
						["שמונה שעות", "false", "not chosen"],
						["עשר שעות", "false", "not chosen"]
					]
				],
				[
					["?כמה עיניים יש לעכביש", "show", 1],
					[
						["שתי עיניים", "false", "not chosen"],
						["שלוש עיניים", "false", "not chosen"],
						["שש עיניים", "false", "not chosen"],
						["ארבע עיניים", "true", "not chosen"]
					]
				],
				[
					["?איזו ציפור יכולה לעוף לאחור", "show", 1],
					[
						["נחליאלי", "false", "not chosen"],
						["דרורית", "false", "not chosen"],
						["זהבן מחלל", "false", "not chosen"],
						["יונק הדבש", "true", "not chosen"],
						["דוכיפת", "false", "not chosen"],
						["נקר סורי", "false", "not chosen"]
					]
				],
				[
					["איזו חיה אינה מסוגלת לזוז קדימה ?או אחורה", "show", 1],
					[
						["צב אנגונוקה מדגסקר", "false", "not chosen"],
						["סרטן", "true", "not chosen"],
						["ניבתן", "false", "not chosen"],
						["עצלן", "false", "not chosen"],
						["עזניית הנגב", "false", "not chosen"]
					]
				],
				[
					["?כמה זמן חי הפרפר", "show", 1],
					[
						["מספר ימים אחידים בודדים, עשוי להימשך עד שבוע ימים", "false", "not chosen"],
						["בין חודש לחודשיים", "false", "not chosen"],
						["חצי שנה", "false", "not chosen"],
						["כשבועיים וחצי עד כשלושה ,שבועות לעיתים מגיע לחודש", "true", "not chosen"],
						["שלושה ימים בלבד", "false", "not chosen"],
						["בין שמונה חודשים לשנה", "false", "not chosen"]
					]
				],
				[
					["אצל משפחות הפינגווינים החיות בקוטב הדרומי, הזכר הוא האחראי מבין ההורים לדגור על הביצים עד שהן יבקעו", "show", 1],
					[
						["נכון", "true", "not chosen"],
						["לא נכון", "false", "not chosen"]
					]
				],
				[
					["למשך כמה זמן נמשך היריון של ?עכברים", "show", 1],
					[
						["חודש", "false", "not chosen"],
						["תשעה חודשים", "false", "not chosen"],
						["שנה", "false", "not chosen"],
						["ארבעים ושלושה ימים", "false", "not chosen"],
						["עשרים ושניים ימים", "true", "not chosen"],
						["ארבעה עשר ימים", "false", "not chosen"]
					]
				],
				[
					["איזו מבין הציפורים הבאות נודדת לקנים אחרים ועוזבת את הגוזלים ?שלה", "show", 1],
					[
						["שחור זנב", "false", "not chosen"],
						["צוקית בודדת", "false", "not chosen"],
						["קוקייה", "true", "not chosen"],
						["דרור הרים", "false", "not chosen"],
						["חוחית", "false", "not chosen"],
						["בז נודד", "false", "not chosen"]
					]
				],
				[
					["?איזה סוג תוכי מופיע בתמונה", "show", 1, lib.kakapo_Q_img],
					[
						["קג'אקו", "false", "not chosen"],
						["אקלקטוס", "false", "not chosen"],
						["קוניור", "false", "not chosen"],
						["קאקאפו", "true", "not chosen"],
						["קוקטייל אלבינו", "false", "not chosen"],
						["קקדו אמברלה", "false", "not chosen"]
					]
				]
			];
		}
		//-------------------------------------
		
		//------------- משחק שני --------------
		function secondGameFunc() {
			clear();
			//מסך אנימציה
			choose_object(lib.animation_screen, 0, 0, "animation_screen", "play", 0, true, "start");
			choose_object(lib.sound, 110, 45, "sound", "stop", saveSoundFrame, false);
			stage.getChildByName("sound").addEventListener("click", checkSoundStatus);
			choose_object(lib.btns, 1190, 60, "skip", "stop", 2, false);
			stage.getChildByName("skip").addEventListener("click", skipAnimation_click);
		
		
			// משחק מדינות
			myGame = [
				[
					["?איזו מדינה לא גובלת עם סרביה", "show", 1],
					[
						["רומניה", "false", "not chosen"],
						["lib.greece_A_img", "true", "not chosen", lib.greece_A_img],
						["בולגריה", "false", "not chosen"],
						["בוסניה והרצגובינה", "false", "not chosen"],
						["הונגריה", "false", "not chosen"]
					]
				],
				[
					["?מהו המקום הגבוה ביותר בעולם", "show", 1],
					[
						["הר קיי שתיים הוא חלק מרכס ,ההימלאיה נמצא ברכס קארקוראם", "false", "not chosen"],
						["הר האוורסט שנמצא בגבול בין נפאל לסין", "true", "not chosen"],
						["הר קאנצ'נג'ונגה הנמצא במדינת סיקים שבהודו", "false", "not chosen"],
						["הר המקלו אשר פסגתו היא בצורת פירמידה", "false", "not chosen"]
					]
				],
				[
					["?מהו הגובה של מגדל אייפל במטרים", "show", 1],
					[
						["390", "false", "not chosen"],
						["415", "false", "not chosen"],
						["510", "false", "not chosen"],
						["284", "false", "not chosen"],
						["324", "true", "not chosen"]
					]
				],
				[
					["?כל כמה זמן מצלצל שעון הביג בן", "show", 1],
					[
						["שעה", "false", "not chosen"],
						["חצי שעה", "false", "not chosen"],
						["שלוש שעות", "false", "not chosen"],
						["רבע שעה", "true", "not chosen"],
						["שלושת רבע שעה", "false", "not chosen"]
					]
				],
				[
					["יש כאלה הטוענים כי אפשר לראות את החומה הסינית מהירח גם בלי להשתמש בציוד מיוחד כלשהוא בכל שעות היממה", "show", 1],
					[
						["זאת אמת", "false", "not chosen"],
						["זאת המצאה", "true", "not chosen"]
					]
				],
				[
					["?מה מסמל העיגול האדום בדגל יפן", "show", 1],
					[
						["ירח", "false", "not chosen"],
						["שלום", "false", "not chosen"],
						["שלווה", "false", "not chosen"],
						["איזון", "false", "not chosen"],
						["הצלחה", "false", "not chosen"],
						["שמש", "true", "not chosen"]
					]
				],
				[
					["עיר הבירה של אוסטרליה היא", "show", 1],
					[
						["קנברה", "true", "not chosen"],
						["סידני", "false", "not chosen"],
						["ויקטוריה", "false", "not chosen"],
						["קווינסלנד", "false", "not chosen"],
						["מלבורן", "false", "not chosen"]
					]
				],
				[
					["לאיזו מדינה שייך הדגל המופיע ?בתמונה", "show", 1, lib.india_Q_img],
					[
						["סלובקיה", "false", "not chosen"],
						["סלובניה", "false", "not chosen"],
						["סרביה", "false", "not chosen"],
						["צ'כיה", "false", "not chosen"],
						["הודו", "true", "not chosen"],
						["יוון", "false", "not chosen"]
					]
				],
				[
					["?מהו הנמל הגדול ביותר בעולם", "show", 1],
					[
						["נמל סין", "false", "not chosen"],
						["נמל ולנסיה", "false", "not chosen"],
						["נמל שנגחאי", "true", "not chosen"],
						["נמל בנקוק", "false", "not chosen"],
						["נמל הונג קונג", "false", "not chosen"],
						["נמל טוקיו", "false", "not chosen"]
					]
				],
				[
					["?CH לאיזו מדינה שייך הקיצור", "show", 1],
					[
						["סין", "false", "not chosen"],
						["שוויץ", "true", "not chosen"],
						["שוודיה", "false", "not chosen"],
						["סאן מרטן", "false", "not chosen"],
						["איי סיישל", "false", "not chosen"],
						["צ'כיה", "false", "not chosen"]
					]
				]
			];
		}
		//-------------------------------------
		
		
		//--------------------- קומבובוקס -------------------
		function combox() {
			//הוספת הקומבו לבמה
			var comBox = new lib.comBox();
			comBox.x = 650;
			comBox.y = 460;
			stage.addChild(comBox);
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			comBox.startbtn.alpha = 0.3;
		
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
			//בעת שינוי ערך בקומבו
			function mycb_change(evt) {
				//שמירת הערך שנבחר בקומבו
				mychoice = evt.currentTarget.value;
				//אם נבחר הערך הראשון - "בחר נושא
				if (mychoice == 0) {
					//ניטרול כפתור "בחר
					comBox.startbtn.alpha = 0.3;
					comBox.startbtn.removeEventListener("click", fl_ClickToPosition);
				} else {
					//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
					comBox.startbtn.alpha = 1;
					comBox.startbtn.addEventListener("click", fl_ClickToPosition);
				}
			}
		}
		
		//לחיצה על בחירת משחק ברשימה
		function fl_ClickToPosition() {
			play_soundMission();
			if (mychoice == 1) {
				firstGameFunc();
			} else if (mychoice == 2) {
				secondGameFunc();
			}
		}
		//--------------------------------------------
		
		// לחיצה על כפתור דלג באנימציה
		function skipAnimation_click() {
			afterRemove_start();
		}
		
		// לאחר אנימציית ההתחלה עובר למסך המשימה
		function afterRemove_start() {
			clear();
			var object2 = new lib.mission_screen();
			stage.addChild(object2);
			object2.name = "mission_screen";
		
			// ייבוא כפתור סאונד
			choose_object(lib.sound, 110, 45, "sound", "stop", saveSoundFrame, false);
			stage.getChildByName("sound").addEventListener("click", checkSoundStatus);
		
			// אירוע קליק לכפתור "רוצה לעזור" במשימה
			stage.getChildByName("mission_screen").toHelp_btn.gotoAndStop(1);
			stage.getChildByName("mission_screen").toHelp_btn.addEventListener("click", toHelp_click);
		
			// לחיצה על כפתור רוצה לעזור כדי להגיע למשחק
			function toHelp_click() {
				play_soundGame();
				game_instructions();
				allGameTimeCounting(saveAllGameTime);
			}
		}
		//--------------------------------------------
		//==============================================================
		
		
		//====================== פונקציות מובנות =======================
		
		//---------------- עכבר -----------------
		
		// שינוי עכבר למטרה
		function mouseAim() {
			var aim = new lib.aim();
			stage.addChild(aim);
		
			stage.on("stagemousemove", function (evt) {
				var p = stage.globalToLocal(stage.mouseX, stage.mouseY);
				aim.x = (p.x);
				aim.y = (p.y);
			})
		}
		
		
		// מעקב אקדח אחרי העכבר
		function mouseGun() {
			var hand_gun = new lib.hand_gun();
			hand_gun.name = "hand_gun";
			stage.addChild(hand_gun);
		
			stage.on("stagemousemove", function (evt) {
				var p = stage.globalToLocal(stage.mouseX, stage.mouseY);
				hand_gun.x = (p.x);
				hand_gun.y = 650;
			})
		}
		//--------------------------------------------
		
		
		//------------------ זמן ---------------------
		
		// ספירת זמן לכל המשחק
		function allGameTimeCounting(allTime) {
			seconds = allTime;
			var countingUp = setInterval(allGameTimer_fn, 1000);
		
			function allGameTimer_fn() {
				seconds++;
				if (pauseTime == true) {
					saveAllGameTime = seconds;
					clearInterval(countingUp);
				}
				if (seconds == 60) {
					minutes++;
					seconds = 0;
				}
			}
		}
		
		
		// ספירה לאחור בשאלה
		function qTimeCounting(time) {
			var qTime = time;
			countingBack = setInterval(timer_fn, 1000);
		
			function timer_fn() {
				//בדיקה לעצירת המשחק
				if (pauseTime == true) {
					clearInterval(countingBack);
				}
		
				if (qTime == 0) {
					clearInterval(countingBack);
					endQTime();
				} else {
					stage.getChildByName("clock").timer.text = qTime;
					qTime--;
				}
			}
		}
		
		
		// כשנגמר הזמן
		function endQTime() {
			for (i = 0; i < myGame[randQ][1].length; i++) {
				stage.removeChild(stage.getChildByName("target" + [i + 1]));
				stage.removeChild(stage.getChildByName("answer" + [i]));
				myGame[randQ][1][i][2] = "not chosen";
			}
		
			stage.removeChild(stage.getChildByName("Instructions_sign"));
			stage.getChildByName("question").Qpic_box.alpha = 0;
			stage.getChildByName("clock").timer.text = "0";
			stage.getChildByName("clock").timer.color = "Red";
			stage.getChildByName("question").question_txt.text = "נגמר הזמן! לא נורא נסו שוב בפעם הבאה";
			stage.getChildByName("sheriff").gotoAndPlay(3);
			stage.getChildByName("pause").gotoAndStop(1);
			stage.getChildByName("pause").mouseEnabled = false;
			choose_object(lib.btns, 600, 285, "continue_btn", "stop", 4, false);
			stage.getChildByName("continue_btn").addEventListener('click', continue_btn_click);
			mouseAim();
		}
		
		//----------------------------------------------
		
		
		//------------------- כפתורי השהייה וסאונד --------------------
		
		// לחיצה על כפתור השהייה
		function pause_click() {
			pauseTime = true;
			choose_object(lib.pause_screen, 0, 0, "pause_screen", "stop", 0, false);
			stage.getChildByName("pause_screen").bg_game.sky_change.gotoAndStop(countCorrects);
			stage.getChildByName("pause_screen").bg_game.sun_change.gotoAndStop(countCorrects);
			stage.getChildByName("pause_screen").bg_game.clouds.gotoAndStop(countCorrects);
			stage.getChildByName("pause_screen").continue_btn.gotoAndStop(4);
			stage.getChildByName("pause_screen").continue_btn.addEventListener("click", continueGame_click_btn);
			stage.removeChild(stage.getChildByName("sound"));
			choose_object(lib.sound, 110, 45, "sound", "stop", saveSoundFrame, false);
			stage.getChildByName("sound").addEventListener("click", checkSoundStatus);
		}
		
		
		// לחיצה על כפתור המשך משחק במסך השהייה
		function continueGame_click_btn() {
			pauseTime = false;
			stage.removeChild(stage.getChildByName("pause_screen"));
			allGameTimeCounting(saveAllGameTime);
			myGame[randQ][0][1] = "show";
			for (i = 0; i < myGame[randQ][1].length; i++) {
				myGame[randQ][1][i][2] = "not chosen";
			}
			play_round();
		}
		
		//-------- סאונד ---------
		
		// פונקציה להשתקת הסאונד
		function checkSoundStatus(event) {
			// אם הסאונד מופעל
			if (soundOn == true) {
				createjs.Sound.muted = true;
				event.currentTarget.gotoAndStop(1);
				saveSoundFrame = 1;
				soundOn = false;
		
			} else { //אם הסאונד לא מופעל
				createjs.Sound.muted = false;
				event.currentTarget.gotoAndStop(0);
				saveSoundFrame = 0;
				soundOn = true;
			}
		}
		
		// ניגון מוזיקת משימה
		function play_soundMission() {
			var soundMission = createjs.Sound.play("soundMission");
		}
		
		// ניגון מוזיקת רקע של המשחק
		function play_soundGame() {
			var soundMission = createjs.Sound.stop("soundMission");
			var soundGame = createjs.Sound.play("soundGame", {
				interrupt: createjs.Sound.INTERRUPT_ANY,
				loop: -1
			});
		}
		
		// ניגון סאונד לתשובה נכונה
		function play_trueAnswer() {
			var trueAnswer = createjs.Sound.play("‏‏trueAnswer");
		}
		
		// ניגון סאונד לתשובה שגויה
		function play_falseAnswer() {
			var falseAnswer = createjs.Sound.play("falseAnswer");
		}
		
		// ניגון סאונד טעינת אקדח
		function play_reloadGun() {
			var reloadGun = createjs.Sound.play("reloadGun");
		}
		
		// ניגון סאונד של ירייה באקדח
		function play_soundGunshot() {
			var soundGunshot = createjs.Sound.play("soundGunshot");
		}
		
		// ניגון סאונד באנימציית הסיום
		function play_successEnd() {
			var soundGame = createjs.Sound.stop("soundGame");
		}
		//--------------------------------------------------------------
		
		
		// ---------------------- פונקציות כלליות ----------------------
		//ניקוי אובייקטים מהמסך
		function clear() {
			stage.removeAllChildren();
		}
		
		
		// הגרלת תשובות רנדומליות
		function randomQ(rand, array) {
			rand = Math.floor((Math.random() * array.length));
			return rand;
		}
		
		
		// הגדלת תמונה במעבר עכבר
		function zoom_pic_fn(event) {
			event.currentTarget.gotoAndStop(1);
		}
		
		// החזרת תמונה לגודל המקורי ביציאה ממעבר עכבר
		function unzoom_pic_fn(event) {
			event.currentTarget.gotoAndStop(0);
		}
		//===============================================================
		
		
		//========================= התחלת משחק ==========================
		
		//------------------------- הוראות התחלה ------------------------
		function game_instructions() {
			clear();
		
			// ייבוא פריטים למסך
			choose_object(lib.bgGame_screen, 0, 0, "bgGame_screen", "stop", 0, false);
			choose_object(lib.talk_bubble, 700, 130, "talk_bubble", "stop", 0, false);
			choose_object(lib.pause, 50, 45, "pause", "stop", 1, false);
			stage.getChildByName("pause").gotoAndStop(1);
			stage.getChildByName("pause").mouseEnabled = false;
			stage.getChildByName("pause").addEventListener("click", pause_click);
			choose_object(lib.sound, 110, 45, "sound", "stop", saveSoundFrame, false);
			stage.getChildByName("sound").addEventListener("click", checkSoundStatus);
			choose_object(lib.clock, 1190, 55, "clock", "stop", 0, false);
			choose_object(lib.arrow_right, 420, 170, "arrow_right", "stop", 1, false);
			stage.getChildByName("arrow_right").addEventListener("click", arrow_right_click);
			choose_object(lib.arrow_left, 370, 170, "arrow_left", "stop", 0, false);
			stage.getChildByName("arrow_left").addEventListener("click", arrow_left_click);
			choose_object(lib.sheriff, 1180, 445, "sheriff", "stop", 0, false);
			choose_object(lib.wooden_fence, 620, 530, "wooden_fence", "stop", 0, false);
			choose_object(lib.progress, 80, 350, "progress", "stop", frameCounter - 1, false);
			choose_object(lib.btns, 600, 285, "skip", "stop", 2, false);
			stage.getChildByName("skip").addEventListener("click", skip_click);
		
			//--------- תפעול הוראות המשחק -----------
		
			// מערך הוראות
			var instructions = [
				"!אני שמח שהצטרפתם אליי למשימה בואו נבין איך האימון הולך להתבצע",
				",האימון יתבצע על ידי מענה לשאלות מיד יופיעו מטרות רנדומליות ותצטרכו לכוון אל התשובה הנכונה בעזרת העכבר, לחצו כדי לירות",
				"מצד שמאל תוכלו לראות את התג שתקבלו בסוף האימון, הוא יתקדם למעלה עם כל תשובה נכונה",
				"שימו לב לשעון כדי שתספיקו לענות לפני שייגמר הזמן, לכל שאלה מוקצבות 30 שניות"
			];
		
			var instructionsCount = 0;
			check_instructionsCount();
			stage.getChildByName("talk_bubble").question_txt.text = instructions[instructionsCount];
		
			// בדיקת שלבי ההוראות לפי הספירה
			function check_instructionsCount() {
				if (instructionsCount == 0) {
					stage.getChildByName("clock").alpha = 0.5;
					stage.getChildByName("progress").alpha = 0.5;
					stage.getChildByName("wooden_fence").alpha = 0.5;
					stage.getChildByName("arrow_right").gotoAndStop(1);
					stage.getChildByName("arrow_right").mouseEnabled = false;
				} else {
					stage.getChildByName("arrow_right").gotoAndStop(0);
					stage.getChildByName("arrow_right").mouseEnabled = true;
				}
		
				if (instructionsCount == 1) {
					stage.getChildByName("wooden_fence").alpha = 1;
					stage.getChildByName("clock").alpha = 0.5;
					stage.getChildByName("progress").alpha = 0.5;
				}
		
				if (instructionsCount == 2) {
					stage.getChildByName("progress").alpha = 1;
					stage.getChildByName("wooden_fence").alpha = 0.5;
					stage.getChildByName("clock").alpha = 0.5;
				}
		
				if (instructionsCount == 3) {
					stage.getChildByName("clock").alpha = 1;
					stage.getChildByName("wooden_fence").alpha = 0.5;
					stage.getChildByName("progress").alpha = 0.5;
					stage.getChildByName("arrow_left").gotoAndStop(1);
					stage.getChildByName("arrow_left").mouseEnabled = false;
					stage.getChildByName("skip").gotoAndStop(3);
				} else {
					stage.getChildByName("arrow_left").gotoAndStop(0);
					stage.getChildByName("arrow_left").mouseEnabled = true;
				}
			}
		
			// לחיצה על כפתורי הניווט בהוראות
			function arrow_right_click() {
				instructionsCount--;
				check_instructionsCount();
				stage.getChildByName("talk_bubble").question_txt.text = instructions[instructionsCount];
			}
		
			function arrow_left_click() {
				instructionsCount++;
				check_instructionsCount();
				stage.getChildByName("talk_bubble").question_txt.text = instructions[instructionsCount];
			}
		
			// לחיצה על כפתור דלג
			function skip_click() {
				play_reloadGun();
				play_round();
			}
		}
		//---------------------------------------------------------------
		
		
		//------------------ התחלת סיבוב חדש במשחק -----------------
		function play_round() {
			clear();
		
			// ייבוא פריטים לבמה
			choose_object(lib.bgGame_screen, 0, 0, "bgGame_screen", "stop", 0, false);
			stage.getChildByName("bgGame_screen").sky_change.gotoAndStop(countCorrects);
			stage.getChildByName("bgGame_screen").sun_change.gotoAndStop(countCorrects);
			stage.getChildByName("bgGame_screen").clouds.gotoAndStop(countCorrects);
			choose_object(lib.pause, 50, 45, "pause", "stop", 0, false);
			stage.getChildByName("pause").addEventListener("click", pause_click);
			choose_object(lib.sound, 110, 45, "sound", "stop", saveSoundFrame, false);
			stage.getChildByName("sound").addEventListener("click", checkSoundStatus);
			choose_object(lib.clock, 1190, 55, "clock", "stop", 0, false);
			choose_object(lib.sheriff, 1180, 445, "sheriff", "stop", 0, false);
			choose_object(lib.wooden_fence, 620, 530, "wooden_fence", "stop", 0, false);
			choose_object(lib.progress, 80, 350, "progress", "stop", frameCounter - 1, false);
			choose_object(lib.stars, 100, 600, "stars", "stop", 0, false);
			choose_object(lib.Instructions_sign, 125, 640, "Instructions_sign", "stop", 0, false);
		
			import_objects();
			qTimeCounting(30);
			mouseGun();
			mouseAim();
		}
		//------------------------------------------------------------
		
		
		//------------------- קריאה לאובייקטים -----------------------
		function choose_object(linkage, x, y, name, animation, frame, boolian, screen) {
			var object = new linkage();
			stage.addChild(object);
			object.name = name;
			object.x = x;
			object.y = y;
		
			// בדיקה האם להפעיל אנימציה
			if (animation == "play") {
				object.gotoAndPlay(frame);
			} else if (animation == "stop") {
				object.gotoAndStop(frame);
			}
		
			// בדיקה האם מדובר באנימציה
			if (boolian == true) {
				if (screen == "start") {
					// לאחר סיום אנימציית ההתחלה
					object.addEventListener("removed", afterRemove_start);
				}
		
				if (screen == "end") {
					// לאחר סיום אנימציית הסיום
					object.addEventListener("removed", afterRemove_end);
				}
			}
		}
		//----------------------------------------------------------------
		//==================================================================
		
		
		//========================== מהלך המשחק ============================
		
		//---------------- ייבוא שאלות, תשובות ומטרות לבמה ---------------
		function import_objects() {
		
			//---------- ייבוא שאלה ------------
			randQ = randomQ(randQ, myGame);
			check_Q_status();
		
			var question = new lib.talk_bubble;
			stage.addChild(question);
			question.x = 700;
			question.y = 130;
			question.name = "question";
			stage.getChildByName("question").question_txt.text = myGame[randQ][0][0];
		
			// בדיקה האם השאלה שהוגרלה היא תמונה וייבוא בהתאם
			if (myGame[randQ][0].length == 4) {
				var QcurrentImg = new myGame[randQ][0][3];
				QcurrentImg.name = "QcurrentImg";
				stage.getChildByName("question").Qpic_box.addChild(QcurrentImg).addEventListener("mouseover", zoom_pic_fn);
				stage.getChildByName("question").Qpic_box.addChild(QcurrentImg).addEventListener("mouseout", unzoom_pic_fn);
			}
		
		
			for (var i = 0; i < myGame[randQ][1].length; i++) {
		
				//------------ ייבוא מטרות (בקבוקים) ---------------
				while (myTargetsTemp == null) {
					var myTargetsTemp = myTargets.slice();
				}
		
				randT = randomQ(randT, myTargetsTemp);
				var target = new myTargetsTemp[randT]();
				stage.addChild(target);
				target.name = "target" + (i + 1);
				target.y = 378;
		
				// ריווח בהתאם לכמות המטרות
				if (myGame[randQ][1].length == 6) {
					target.x = (i + 1.62) * 150;
				}
				if (myGame[randQ][1].length == 5) {
					target.x = (i + 1.52) * 175;
				}
				if (myGame[randQ][1].length == 4) {
					target.x = (i + 1.62) * 200;
				}
				if (myGame[randQ][1].length == 3) {
					target.x = (i + 1.72) * 225;
				}
				if (myGame[randQ][1].length == 2) {
					target.x = (i + 1.96) * 250;
				}
		
				target.addEventListener('click', target_click);
				myTargetsTemp.splice(randT, 1);
		
		
				//---------- ייבוא תשובות -----------
				randA = randomQ(randA, myGame[randQ][1]);
				check_A_status();
				var answer = new lib.target_paper;
				stage.addChild(answer);
				answer.name = "answer" + i;
				answer.y = 520;
		
				// ריווח בהתאם לכמות התשובות
				if (myGame[randQ][1].length == 6) {
					answer.x = (i + 1.6) * 150 + 5;
				}
				if (myGame[randQ][1].length == 5) {
					answer.x = (i + 1.5) * 175 + 5;
				}
				if (myGame[randQ][1].length == 4) {
					answer.x = (i + 1.6) * 200 + 5;
				}
				if (myGame[randQ][1].length == 3) {
					answer.x = (i + 1.7) * 225 + 5;
				}
				if (myGame[randQ][1].length == 2) {
					answer.x = (i + 1.95) * 250 + 5;
				}
		
		
				// בדיקה האם התשובה שהוגרלה היא תמונה או טקסט וייבוא בהתאם
				if (myGame[randQ][1][randA].length == 4) {
					var currentImg = new myGame[randQ][1][randA][3];
					stage.getChildByName("answer" + [i]).Apic_box.addChild(currentImg).addEventListener("mouseover", zoom_pic_fn);
					stage.getChildByName("answer" + [i]).Apic_box.addChild(currentImg).addEventListener("mouseout", unzoom_pic_fn);
					stage.getChildByName("answer" + [i]).answer_txt.text = myGame[randQ][1][randA][0];
					stage.getChildByName("answer" + [i]).answer_txt.alpha = 0;
				} else {
					stage.getChildByName("answer" + [i]).answer_txt.text = myGame[randQ][1][randA][0];
				}
		
				myGame[randQ][1][randA][2] = "chosen";
			}
		}
		
		//-------- בדיקות האם הוצג או לא ---------
		
		// בדיקה האם השאלה הוצגה בעבר או לא
		function check_Q_status() {
			if (myGame[randQ][0][1] == "don`t show") {
				randQ = randomQ(randQ, myGame);
				check_Q_status();
			}
		}
		
		// בדיקה האם התשובה הוצגה בעבר או לא
		function check_A_status() {
			if (myGame[randQ][1][randA][2] == "chosen") {
				randA = randomQ(randA, myGame[randQ][1]);
				check_A_status();
			}
		}
		//-----------------------------------------------------------
		
		//---------------- לחיצה על מטרה והשוואת התוכן ---------------
		function target_click(event) {
			clearInterval(countingBack);
			targetNum = event.currentTarget.name.substr(-1) - 1;
			var strAnswer = stage.getChildByName("answer" + [targetNum]).answer_txt.text;
			stage.getChildByName("hand_gun").gotoAndPlay(1);
		
			for (i = 0; i < myGame[randQ][1].length; i++) {
				if (strAnswer == myGame[randQ][1][i][0]) {
					checkTrueOrFalse(i, event);
				}
			}
		}
		
		
		//-------------- בדיקה האם נכון או לא נכון ---------------
		function checkTrueOrFalse(place, event) {
			//----- תשובה נכונה ------
			if (myGame[randQ][1][place][1] == "true") {
				for (i = 0; i < myGame[randQ][1].length; i++) {
					stage.getChildByName("answer" + i).gotoAndStop(3);
					stage.getChildByName("target" + (i + 1)).mouseEnabled = false;
				}
				countCorrects++;
				myGame[randQ][0][1] = "don`t show";
				event.currentTarget.gotoAndPlay(1);
				play_soundGunshot();
				play_trueAnswer();
				stage.getChildByName("answer" + [targetNum]).gotoAndStop(1);
				stage.getChildByName("sheriff").gotoAndPlay(1);
				stage.getChildByName("Instructions_sign").gotoAndStop(1);
				stage.getChildByName("bgGame_screen").sky_change.gotoAndStop(countCorrects);
				stage.getChildByName("bgGame_screen").sun_change.gotoAndStop(countCorrects);
				stage.getChildByName("bgGame_screen").clouds.gotoAndStop(countCorrects);
				stage.getChildByName("stars").gotoAndPlay(0);
				stage.getChildByName("progress").gotoAndPlay(frameCounter);
				frameCounter += 5;
			}
		
			//----- תשובה שגויה ------		
			else {
				for (i = 0; i < myGame[randQ][1].length; i++) {
					myGame[randQ][1][i][2] = "not chosen";
					stage.getChildByName("answer" + i).gotoAndStop(3);
					stage.getChildByName("target" + (i + 1)).mouseEnabled = false;
				}
				event.currentTarget.gotoAndPlay(24);
				play_soundGunshot();
				play_falseAnswer();
				stage.getChildByName("answer" + [targetNum]).gotoAndStop(2);
				stage.getChildByName("sheriff").gotoAndPlay(2);
				stage.getChildByName("Instructions_sign").gotoAndStop(2);
				myGame[randQ][0][2] += 1;
				countMistakes++;
			}
		
			choose_object(lib.btns, 600, 285, "continue_btn", "stop", 4, false);
			stage.getChildByName("continue_btn").addEventListener('click', continue_btn_click);
			mouseAim();
		}
		//------------------------------------------------------
		
		//כפתור המשך לשאלה הבאה
		function continue_btn_click() {
			if (countCorrects == 10) {
				endAnimation_screen();
			} else {
				stage.getChildByName("question").Qpic_box.alpha = 1;
				play_round();
			}
		}
		
		
		//========================== סיום משחק =======================
		
		// מעבר למסך אנימציית סיום
		function endAnimation_screen() {
			if (seconds < 10) {
				saveAllGameTime = minutes + ":0" + seconds;
			} else {
				saveAllGameTime = minutes + ":" + seconds;
			}
		
			clearInterval(countingBack);
			clear();
			choose_object(lib.animationEnd_screen, 0, 0, "endAnimation", "play", 0, true, "end");
			stage.getChildByName("endAnimation").bg_game.sky_change.gotoAndStop(countCorrects);
			stage.getChildByName("endAnimation").bg_game.sun_change.gotoAndStop(countCorrects);
			stage.getChildByName("endAnimation").bg_game.clouds.gotoAndStop(countCorrects);
			play_successEnd();
		}
		
		// לאחר אנימציית סיום עובר למסך סיכום
		function afterRemove_end() {
			clear();
			var end_screen = new lib.end_screen();
			stage.addChild(end_screen);
			end_screen.name = "end_screen";
			stage.getChildByName("end_screen").bg_game.sky_change.gotoAndStop(countCorrects);
			stage.getChildByName("end_screen").bg_game.sun_change.gotoAndStop(countCorrects);
			stage.getChildByName("end_screen").bg_game.clouds.gotoAndStop(countCorrects);
			grades();
		
			//תוצאות המשחק
			stage.getChildByName("end_screen").allTime_txt.text = saveAllGameTime;
			stage.getChildByName("end_screen").grade_txt.text = Math.round(finalGrade);
			stage.getChildByName("end_screen").mistakes_txt.text = countMistakes;
		
		
			//אירועי קליק לכפתורים שחק שוב + סיום
			stage.getChildByName("end_screen").playAgain_btn.gotoAndStop(5);
			stage.getChildByName("end_screen").finished_btn.gotoAndStop(6);
			stage.getChildByName("end_screen").playAgain_btn.addEventListener("click", playAgain_click);
			stage.getChildByName("end_screen").finished_btn.addEventListener("click", finished_click);
		}
		
		
		// חישוב ציון
		function grades() {
			for (i = 0; i < myGame.length; i++) {
				(finalGrade += 100 / (10 * myGame[i][0][2]));
			}
		}
		
		
		// לחיצה על כפתור שחק שוב
		function playAgain_click() {
			reset_variables();
			fl_ClickToPosition();
		}
		
		
		// לחיצה על כפתור סיום
		function finished_click() {
			clear();
			mychoice = 0;
			reset_variables();
			choose_object(lib.entrace_screen, 0, 0, "entrace_screen", "stop", 0, false);
			combox();
		}
		
		
		// איפוס משתנים
		function reset_variables() {
			myGame = [];
			saveAllGameTime = 0;
			countingBack = 0;
			pauseTime = false;
			seconds = 0;
			minutes = 0;
			frameCounter = 0;
			finalGrade = 0;
			countCorrects = 0;
			countMistakes = 0;
			soundOn = true;
		}
		//=====================================================
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '47BC8791D2959A45B7F64F42F1DE289D',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_158.png?1644089307077", id:"CachedBmp_158"},
		{src:"images/CachedBmp_157.png?1644089307077", id:"CachedBmp_157"},
		{src:"images/CachedBmp_137.png?1644089307077", id:"CachedBmp_137"},
		{src:"images/CachedBmp_135.png?1644089307077", id:"CachedBmp_135"},
		{src:"images/Shoot_It_atlas_1.png?1644089306736", id:"Shoot_It_atlas_1"},
		{src:"images/Shoot_It_atlas_2.png?1644089306736", id:"Shoot_It_atlas_2"},
		{src:"images/Shoot_It_atlas_3.png?1644089306737", id:"Shoot_It_atlas_3"},
		{src:"images/Shoot_It_atlas_4.png?1644089306737", id:"Shoot_It_atlas_4"},
		{src:"images/Shoot_It_atlas_5.png?1644089306737", id:"Shoot_It_atlas_5"},
		{src:"sounds/soundGamemp3.mp3?1644089307077", id:"soundGamemp3"},
		{src:"sounds/falseAnswermp3.mp3?1644089307077", id:"falseAnswermp3"},
		{src:"sounds/soundMissionmp3.mp3?1644089307077", id:"soundMissionmp3"},
		{src:"sounds/trueAnswermp3.mp3?1644089307077", id:"trueAnswermp3"},
		{src:"sounds/reloadGunmp3.mp3?1644089307077", id:"reloadGunmp3"},
		{src:"sounds/soundGunshotmp3.mp3?1644089307077", id:"soundGunshotmp3"},
		{src:"sounds/successEndmp3.mp3?1644089307077", id:"successEndmp3"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1644089307077", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1644089307077", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1644089307077", id:"an.ComboBox"}
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
an.compositions['47BC8791D2959A45B7F64F42F1DE289D'] = {
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20140901
 */
(function(g,h){function G(F,G){function W(b){return c.preferFlash&&v&&!c.ignoreFlash&&c.flash[b]!==h&&c.flash[b]}function r(b){return function(c){var d=this._s;return!d||!d._a?null:b.call(this,c)}}this.setupOptions={url:F||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1E3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,
html5Test:/^(probably|maybe)$/i,preferFlash:!1,noSWFCache:!1,idPrefix:"sound"};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,
ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.audioFormats={mp3:{type:['audio/mpeg; codecs\x3d"mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs\x3d"mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs\x3dvorbis"],required:!1},opus:{type:["audio/ogg; codecs\x3dopus","audio/opus"],required:!1},
wav:{type:['audio/wav; codecs\x3d"1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.movieID="sm2-container";this.id=G||"sm2movie";this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20140901";this.altURL=this.movieURL=this.version=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.features=
{buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};this.sandbox={};this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var Ja,c=this,Ka=null,k=null,X,t=navigator.adminAgent,La=g.location.href.toString(),p=document,la,Ma,ma,n,x=[],M=!1,N=!1,m=!1,y=!1,na=!1,O,w,oa,Y,pa,D,H,I,Na,qa,ra,Z,sa,$,ta,E,ua,P,va,aa,J,Oa,wa,Pa,xa,Qa,Q=null,ya=null,R,za,K,ba,ca,q,S=!1,Aa=!1,Ra,Sa,Ta,da=0,T=null,ea,Ua=[],U,u=null,Va,fa,V,z,ga,Ba,Wa,s,fb=Array.prototype.slice,A=!1,Ca,v,Da,
Xa,B,ha,Ya=0,ia=t.match(/(ipad|iphone|ipod)/i),Za=t.match(/android/i),C=t.match(/msie/i),gb=t.match(/webkit/i),ja=t.match(/safari/i)&&!t.match(/chrome/i),Ea=t.match(/opera/i),Fa=t.match(/(mobile|pre\/|xoom)/i)||ia||Za,$a=!La.match(/usehtml5audio/i)&&!La.match(/sm2\-ignorebadua/i)&&ja&&!t.match(/silk/i)&&t.match(/OS X 10_6_([3-7])/i),Ga=p.hasFocus!==h?p.hasFocus():null,ka=ja&&(p.hasFocus===h||!p.hasFocus()),ab=!ka,bb=/(mp3|mp4|mpa|m4a|m4b)/i,Ha=p.location?p.location.protocol.match(/http/i):null,cb=
!Ha?"http://":"",db=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,eb="mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),hb=RegExp("\\.("+eb.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!Ha;var Ia;try{Ia=Audio!==h&&(Ea&&opera!==h&&10>opera.version()?new Audio(null):new Audio).canPlayType!==h}catch(ib){Ia=!1}this.hasHTML5=Ia;this.setup=function(b){var e=!c.url;b!==h&&m&&u&&c.ok();oa(b);b&&
(e&&(P&&b.url!==h)&&c.beginDelayedInit(),!P&&(b.url!==h&&"complete"===p.readyState)&&setTimeout(E,1));return c};this.supported=this.ok=function(){return u?m&&!y:c.useHTML5Audio&&c.hasHTML5};this.getMovie=function(b){return X(b)||p[b]||g[b]};this.createSound=function(b,e){function d(){a=ba(a);c.sounds[a.id]=new Ja(a);c.soundIDs.push(a.id);return c.sounds[a.id]}var a,f=null;if(!m||!c.ok())return!1;e!==h&&(b={id:b,url:e});a=w(b);a.url=ea(a.url);void 0===a.id&&(a.id=c.setupOptions.idPrefix+Ya++);if(q(a.id,
!0))return c.sounds[a.id];if(fa(a))f=d(),f._setup_html5(a);else{if(c.html5Only||c.html5.usingFlash&&a.url&&a.url.match(/data\:/i))return d();8<n&&null===a.isMovieStar&&(a.isMovieStar=!(!a.serverURL&&!(a.type&&a.type.match(db)||a.url&&a.url.match(hb))));a=ca(a,void 0);f=d();8===n?k._createSound(a.id,a.loops||1,a.usePolicyFile):(k._createSound(a.id,a.url,a.usePeakData,a.useWaveformData,a.useEQData,a.isMovieStar,a.isMovieStar?a.bufferTime:!1,a.loops||1,a.serverURL,a.duration||null,a.autoPlay,!0,a.autoLoad,
a.usePolicyFile),a.serverURL||(f.connected=!0,a.onconnect&&a.onconnect.apply(f)));!a.serverURL&&(a.autoLoad||a.autoPlay)&&f.load(a)}!a.serverURL&&a.autoPlay&&f.play();return f};this.destroySound=function(b,e){if(!q(b))return!1;var d=c.sounds[b],a;d._iO={};d.stop();d.unload();for(a=0;a<c.soundIDs.length;a++)if(c.soundIDs[a]===b){c.soundIDs.splice(a,1);break}e||d.destruct(!0);delete c.sounds[b];return!0};this.load=function(b,e){return!q(b)?!1:c.sounds[b].load(e)};this.unload=function(b){return!q(b)?
!1:c.sounds[b].unload()};this.onposition=this.onPosition=function(b,e,d,a){return!q(b)?!1:c.sounds[b].onposition(e,d,a)};this.clearOnPosition=function(b,e,d){return!q(b)?!1:c.sounds[b].clearOnPosition(e,d)};this.start=this.play=function(b,e){var d=null,a=e&&!(e instanceof Object);if(!m||!c.ok())return!1;if(q(b,a))a&&(e={url:e});else{if(!a)return!1;a&&(e={url:e});e&&e.url&&(e.id=b,d=c.createSound(e).play())}null===d&&(d=c.sounds[b].play(e));return d};this.setPosition=function(b,e){return!q(b)?!1:c.sounds[b].setPosition(e)};
this.stop=function(b){return!q(b)?!1:c.sounds[b].stop()};this.stopAll=function(){for(var b in c.sounds)c.sounds.hasOwnProperty(b)&&c.sounds[b].stop()};this.pause=function(b){return!q(b)?!1:c.sounds[b].pause()};this.pauseAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].pause()};this.resume=function(b){return!q(b)?!1:c.sounds[b].resume()};this.resumeAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].resume()};this.togglePause=function(b){return!q(b)?
!1:c.sounds[b].togglePause()};this.setPan=function(b,e){return!q(b)?!1:c.sounds[b].setPan(e)};this.setVolume=function(b,e){return!q(b)?!1:c.sounds[b].setVolume(e)};this.mute=function(b){var e=0;b instanceof String&&(b=null);if(b)return!q(b)?!1:c.sounds[b].mute();for(e=c.soundIDs.length-1;0<=e;e--)c.sounds[c.soundIDs[e]].mute();return c.muted=!0};this.muteAll=function(){c.mute()};this.unmute=function(b){b instanceof String&&(b=null);if(b)return!q(b)?!1:c.sounds[b].unmute();for(b=c.soundIDs.length-
1;0<=b;b--)c.sounds[c.soundIDs[b]].unmute();c.muted=!1;return!0};this.unmuteAll=function(){c.unmute()};this.toggleMute=function(b){return!q(b)?!1:c.sounds[b].toggleMute()};this.getMemoryUse=function(){var b=0;k&&8!==n&&(b=parseInt(k._getMemoryUse(),10));return b};this.disable=function(b){var e;b===h&&(b=!1);if(y)return!1;y=!0;for(e=c.soundIDs.length-1;0<=e;e--)Pa(c.sounds[c.soundIDs[e]]);O(b);s.remove(g,"load",H);return!0};this.canPlayMIME=function(b){var e;c.hasHTML5&&(e=V({type:b}));!e&&u&&(e=b&&
c.ok()?!!(8<n&&b.match(db)||b.match(c.mimePattern)):null);return e};this.canPlayURL=function(b){var e;c.hasHTML5&&(e=V({url:b}));!e&&u&&(e=b&&c.ok()?!!b.match(c.filePattern):null);return e};this.canPlayLink=function(b){return b.type!==h&&b.type&&c.canPlayMIME(b.type)?!0:c.canPlayURL(b.href)};this.getSoundById=function(b,e){return!b?null:c.sounds[b]};this.onready=function(b,c){if("function"===typeof b)c||(c=g),pa("onready",b,c),D();else throw R("needFunction","onready");return!0};this.ontimeout=function(b,
c){if("function"===typeof b)c||(c=g),pa("ontimeout",b,c),D({type:"ontimeout"});else throw R("needFunction","ontimeout");return!0};this._wD=this._writeDebug=function(b,c){return!0};this._debug=function(){};this.reboot=function(b,e){var d,a,f;for(d=c.soundIDs.length-1;0<=d;d--)c.sounds[c.soundIDs[d]].destruct();if(k)try{C&&(ya=k.innerHTML),Q=k.parentNode.removeChild(k)}catch(h){}ya=Q=u=k=null;c.enabled=P=m=S=Aa=M=N=y=A=c.swfLoaded=!1;c.soundIDs=[];c.sounds={};Ya=0;if(b)x=[];else for(d in x)if(x.hasOwnProperty(d)){a=
0;for(f=x[d].length;a<f;a++)x[d][a].fired=!1}c.html5={usingFlash:null};c.flash={};c.html5Only=!1;c.ignoreFlash=!1;g.setTimeout(function(){ta();e||c.beginDelayedInit()},20);return c};this.reset=function(){return c.reboot(!0,!0)};this.getMoviePercent=function(){return k&&"PercentLoaded"in k?k.PercentLoaded():null};this.beginDelayedInit=function(){na=!0;E();setTimeout(function(){if(Aa)return!1;aa();$();return Aa=!0},20);I()};this.destruct=function(){c.disable(!0)};Ja=function(b){var e,d,a=this,f,l,L,
g,p,r,t=!1,m=[],u=0,x,y,v=null,z;d=e=null;this.sID=this.id=b.id;this.url=b.url;this._iO=this.instanceOptions=this.options=w(b);this.pan=this.options.pan;this.volume=this.options.volume;this.isHTML5=!1;this._a=null;z=this.url?!1:!0;this.id3={};this._debug=function(){};this.load=function(b){var e=null,d;b!==h?a._iO=w(b,a.options):(b=a.options,a._iO=b,v&&v!==a.url&&(a._iO.url=a.url,a.url=null));a._iO.url||(a._iO.url=a.url);a._iO.url=ea(a._iO.url);d=a.instanceOptions=a._iO;if(!d.url&&!a.url)return a;
if(d.url===a.url&&0!==a.readyState&&2!==a.readyState)return 3===a.readyState&&d.onload&&ha(a,function(){d.onload.apply(a,[!!a.duration])}),a;a.loaded=!1;a.readyState=1;a.playState=0;a.id3={};if(fa(d))e=a._setup_html5(d),e._called_load||(a._html5_canplay=!1,a.url!==d.url&&(a._a.src=d.url,a.setPosition(0)),a._a.autobuffer="auto",a._a.preload="auto",a._a._called_load=!0);else{if(c.html5Only||a._iO.url&&a._iO.url.match(/data\:/i))return a;try{a.isHTML5=!1;a._iO=ca(ba(d));if(a._iO.autoPlay&&(a._iO.position||
a._iO.from))a._iO.autoPlay=!1;d=a._iO;8===n?k._load(a.id,d.url,d.stream,d.autoPlay,d.usePolicyFile):k._load(a.id,d.url,!!d.stream,!!d.autoPlay,d.loops||1,!!d.autoLoad,d.usePolicyFile)}catch(f){J({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}}a.url=d.url;return a};this.unload=function(){0!==a.readyState&&(a.isHTML5?(g(),a._a&&(a._a.pause(),v=ga(a._a))):8===n?k._unload(a.id,"about:blank"):k._unload(a.id),f());return a};this.destruct=function(b){a.isHTML5?(g(),a._a&&(a._a.pause(),ga(a._a),A||L(),a._a._s=
null,a._a=null)):(a._iO.onfailure=null,k._destroySound(a.id));b||c.destroySound(a.id,!0)};this.start=this.play=function(b,e){var d,f,l,g,L;f=!0;f=null;e=e===h?!0:e;b||(b={});a.url&&(a._iO.url=a.url);a._iO=w(a._iO,a.options);a._iO=w(b,a._iO);a._iO.url=ea(a._iO.url);a.instanceOptions=a._iO;if(!a.isHTML5&&a._iO.serverURL&&!a.connected)return a.getAutoPlay()||a.setAutoPlay(!0),a;fa(a._iO)&&(a._setup_html5(a._iO),p());1===a.playState&&!a.paused&&(d=a._iO.multiShot,d||(a.isHTML5&&a.setPosition(a._iO.position),
f=a));if(null!==f)return f;b.url&&b.url!==a.url&&(!a.readyState&&!a.isHTML5&&8===n&&z?z=!1:a.load(a._iO));a.loaded||(0===a.readyState?(!a.isHTML5&&!c.html5Only?(a._iO.autoPlay=!0,a.load(a._iO)):a.isHTML5?a.load(a._iO):f=a,a.instanceOptions=a._iO):2===a.readyState&&(f=a));if(null!==f)return f;!a.isHTML5&&(9===n&&0<a.position&&a.position===a.duration)&&(b.position=0);if(a.paused&&0<=a.position&&(!a._iO.serverURL||0<a.position))a.resume();else{a._iO=w(b,a._iO);if((!a.isHTML5&&null!==a._iO.position&&
0<a._iO.position||null!==a._iO.from&&0<a._iO.from||null!==a._iO.to)&&0===a.instanceCount&&0===a.playState&&!a._iO.serverURL){d=function(){a._iO=w(b,a._iO);a.play(a._iO)};if(a.isHTML5&&!a._html5_canplay)a.load({_oncanplay:d}),f=!1;else if(!a.isHTML5&&!a.loaded&&(!a.readyState||2!==a.readyState))a.load({onload:d}),f=!1;if(null!==f)return f;a._iO=y()}(!a.instanceCount||a._iO.multiShotEvents||a.isHTML5&&a._iO.multiShot&&!A||!a.isHTML5&&8<n&&!a.getAutoPlay())&&a.instanceCount++;a._iO.onposition&&0===a.playState&&
r(a);a.playState=1;a.paused=!1;a.position=a._iO.position!==h&&!isNaN(a._iO.position)?a._iO.position:0;a.isHTML5||(a._iO=ca(ba(a._iO)));a._iO.onplay&&e&&(a._iO.onplay.apply(a),t=!0);a.setVolume(a._iO.volume,!0);a.setPan(a._iO.pan,!0);a.isHTML5?2>a.instanceCount?(p(),f=a._setup_html5(),a.setPosition(a._iO.position),f.play()):(l=new Audio(a._iO.url),g=function(){s.remove(l,"ended",g);a._onfinish(a);ga(l);l=null},L=function(){s.remove(l,"canplay",L);try{l.currentTime=a._iO.position/1E3}catch(b){}l.play()},
s.add(l,"ended",g),void 0!==a._iO.volume&&(l.volume=Math.max(0,Math.min(1,a._iO.volume/100))),a.muted&&(l.muted=!0),a._iO.position?s.add(l,"canplay",L):l.play()):(f=k._start(a.id,a._iO.loops||1,9===n?a.position:a.position/1E3,a._iO.multiShot||!1),9===n&&!f&&a._iO.onplayerror&&a._iO.onplayerror.apply(a))}return a};this.stop=function(b){var c=a._iO;1===a.playState&&(a._onbufferchange(0),a._resetOnPosition(0),a.paused=!1,a.isHTML5||(a.playState=0),x(),c.to&&a.clearOnPosition(c.to),a.isHTML5?a._a&&(b=
a.position,a.setPosition(0),a.position=b,a._a.pause(),a.playState=0,a._onTimer(),g()):(k._stop(a.id,b),c.serverURL&&a.unload()),a.instanceCount=0,a._iO={},c.onstop&&c.onstop.apply(a));return a};this.setAutoPlay=function(b){a._iO.autoPlay=b;a.isHTML5||(k._setAutoPlay(a.id,b),b&&!a.instanceCount&&1===a.readyState&&a.instanceCount++)};this.getAutoPlay=function(){return a._iO.autoPlay};this.setPosition=function(b){b===h&&(b=0);var c=a.isHTML5?Math.max(b,0):Math.min(a.duration||a._iO.duration,Math.max(b,
0));a.position=c;b=a.position/1E3;a._resetOnPosition(a.position);a._iO.position=c;if(a.isHTML5){if(a._a){if(a._html5_canplay){if(a._a.currentTime!==b)try{a._a.currentTime=b,(0===a.playState||a.paused)&&a._a.pause()}catch(e){}}else if(b)return a;a.paused&&a._onTimer(!0)}}else b=9===n?a.position:b,a.readyState&&2!==a.readyState&&k._setPosition(a.id,b,a.paused||!a.playState,a._iO.multiShot);return a};this.pause=function(b){if(a.paused||0===a.playState&&1!==a.readyState)return a;a.paused=!0;a.isHTML5?
(a._setup_html5().pause(),g()):(b||b===h)&&k._pause(a.id,a._iO.multiShot);a._iO.onpause&&a._iO.onpause.apply(a);return a};this.resume=function(){var b=a._iO;if(!a.paused)return a;a.paused=!1;a.playState=1;a.isHTML5?(a._setup_html5().play(),p()):(b.isMovieStar&&!b.serverURL&&a.setPosition(a.position),k._pause(a.id,b.multiShot));!t&&b.onplay?(b.onplay.apply(a),t=!0):b.onresume&&b.onresume.apply(a);return a};this.togglePause=function(){if(0===a.playState)return a.play({position:9===n&&!a.isHTML5?a.position:
a.position/1E3}),a;a.paused?a.resume():a.pause();return a};this.setPan=function(b,c){b===h&&(b=0);c===h&&(c=!1);a.isHTML5||k._setPan(a.id,b);a._iO.pan=b;c||(a.pan=b,a.options.pan=b);return a};this.setVolume=function(b,e){b===h&&(b=100);e===h&&(e=!1);a.isHTML5?a._a&&(c.muted&&!a.muted&&(a.muted=!0,a._a.muted=!0),a._a.volume=Math.max(0,Math.min(1,b/100))):k._setVolume(a.id,c.muted&&!a.muted||a.muted?0:b);a._iO.volume=b;e||(a.volume=b,a.options.volume=b);return a};this.mute=function(){a.muted=!0;a.isHTML5?
a._a&&(a._a.muted=!0):k._setVolume(a.id,0);return a};this.unmute=function(){a.muted=!1;var b=a._iO.volume!==h;a.isHTML5?a._a&&(a._a.muted=!1):k._setVolume(a.id,b?a._iO.volume:a.options.volume);return a};this.toggleMute=function(){return a.muted?a.unmute():a.mute()};this.onposition=this.onPosition=function(b,c,e){m.push({position:parseInt(b,10),method:c,scope:e!==h?e:a,fired:!1});return a};this.clearOnPosition=function(a,b){var c;a=parseInt(a,10);if(isNaN(a))return!1;for(c=0;c<m.length;c++)if(a===
m[c].position&&(!b||b===m[c].method))m[c].fired&&u--,m.splice(c,1)};this._processOnPosition=function(){var b,c;b=m.length;if(!b||!a.playState||u>=b)return!1;for(b-=1;0<=b;b--)c=m[b],!c.fired&&a.position>=c.position&&(c.fired=!0,u++,c.method.apply(c.scope,[c.position]));return!0};this._resetOnPosition=function(a){var b,c;b=m.length;if(!b)return!1;for(b-=1;0<=b;b--)c=m[b],c.fired&&a<=c.position&&(c.fired=!1,u--);return!0};y=function(){var b=a._iO,c=b.from,e=b.to,d,f;f=function(){a.clearOnPosition(e,
f);a.stop()};d=function(){if(null!==e&&!isNaN(e))a.onPosition(e,f)};null!==c&&!isNaN(c)&&(b.position=c,b.multiShot=!1,d());return b};r=function(){var b,c=a._iO.onposition;if(c)for(b in c)if(c.hasOwnProperty(b))a.onPosition(parseInt(b,10),c[b])};x=function(){var b,c=a._iO.onposition;if(c)for(b in c)c.hasOwnProperty(b)&&a.clearOnPosition(parseInt(b,10))};p=function(){a.isHTML5&&Ra(a)};g=function(){a.isHTML5&&Sa(a)};f=function(b){b||(m=[],u=0);t=!1;a._hasTimer=null;a._a=null;a._html5_canplay=!1;a.bytesLoaded=
null;a.bytesTotal=null;a.duration=a._iO&&a._iO.duration?a._iO.duration:null;a.durationEstimate=null;a.buffered=[];a.eqData=[];a.eqData.left=[];a.eqData.right=[];a.failures=0;a.isBuffering=!1;a.instanceOptions={};a.instanceCount=0;a.loaded=!1;a.metadata={};a.readyState=0;a.muted=!1;a.paused=!1;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.playState=0;a.position=null;a.id3={}};f();this._onTimer=function(b){var c,f=!1,l={};if(a._hasTimer||b){if(a._a&&(b||(0<a.playState||1===a.readyState)&&
!a.paused))c=a._get_html5_duration(),c!==e&&(e=c,a.duration=c,f=!0),a.durationEstimate=a.duration,c=1E3*a._a.currentTime||0,c!==d&&(d=c,f=!0),(f||b)&&a._whileplaying(c,l,l,l,l);return f}};this._get_html5_duration=function(){var b=a._iO;return(b=a._a&&a._a.duration?1E3*a._a.duration:b&&b.duration?b.duration:null)&&!isNaN(b)&&Infinity!==b?b:null};this._apply_loop=function(a,b){a.loop=1<b?"loop":""};this._setup_html5=function(b){b=w(a._iO,b);var c=A?Ka:a._a,e=decodeURI(b.url),d;A?e===decodeURI(Ca)&&
(d=!0):e===decodeURI(v)&&(d=!0);if(c){if(c._s)if(A)c._s&&(c._s.playState&&!d)&&c._s.stop();else if(!A&&e===decodeURI(v))return a._apply_loop(c,b.loops),c;d||(v&&f(!1),c.src=b.url,Ca=v=a.url=b.url,c._called_load=!1)}else b.autoLoad||b.autoPlay?(a._a=new Audio(b.url),a._a.load()):a._a=Ea&&10>opera.version()?new Audio(null):new Audio,c=a._a,c._called_load=!1,A&&(Ka=c);a.isHTML5=!0;a._a=c;c._s=a;l();a._apply_loop(c,b.loops);b.autoLoad||b.autoPlay?a.load():(c.autobuffer=!1,c.preload="auto");return c};
l=function(){if(a._a._added_events)return!1;var b;a._a._added_events=!0;for(b in B)B.hasOwnProperty(b)&&a._a&&a._a.addEventListener(b,B[b],!1);return!0};L=function(){var b;a._a._added_events=!1;for(b in B)B.hasOwnProperty(b)&&a._a&&a._a.removeEventListener(b,B[b],!1)};this._onload=function(b){var c=!!b||!a.isHTML5&&8===n&&a.duration;a.loaded=c;a.readyState=c?3:2;a._onbufferchange(0);a._iO.onload&&ha(a,function(){a._iO.onload.apply(a,[c])});return!0};this._onbufferchange=function(b){if(0===a.playState||
b&&a.isBuffering||!b&&!a.isBuffering)return!1;a.isBuffering=1===b;a._iO.onbufferchange&&a._iO.onbufferchange.apply(a,[b]);return!0};this._onsuspend=function(){a._iO.onsuspend&&a._iO.onsuspend.apply(a);return!0};this._onfailure=function(b,c,e){a.failures++;if(a._iO.onfailure&&1===a.failures)a._iO.onfailure(b,c,e)};this._onwarning=function(b,c,e){if(a._iO.onwarning)a._iO.onwarning(b,c,e)};this._onfinish=function(){var b=a._iO.onfinish;a._onbufferchange(0);a._resetOnPosition(0);a.instanceCount&&(a.instanceCount--,
a.instanceCount||(x(),a.playState=0,a.paused=!1,a.instanceCount=0,a.instanceOptions={},a._iO={},g(),a.isHTML5&&(a.position=0)),(!a.instanceCount||a._iO.multiShotEvents)&&b&&ha(a,function(){b.apply(a)}))};this._whileloading=function(b,c,e,d){var f=a._iO;a.bytesLoaded=b;a.bytesTotal=c;a.duration=Math.floor(e);a.bufferLength=d;a.durationEstimate=!a.isHTML5&&!f.isMovieStar?f.duration?a.duration>f.duration?a.duration:f.duration:parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10):a.duration;a.isHTML5||(a.buffered=
[{start:0,end:a.duration}]);(3!==a.readyState||a.isHTML5)&&f.whileloading&&f.whileloading.apply(a)};this._whileplaying=function(b,c,e,d,f){var l=a._iO;if(isNaN(b)||null===b)return!1;a.position=Math.max(0,b);a._processOnPosition();!a.isHTML5&&8<n&&(l.usePeakData&&(c!==h&&c)&&(a.peakData={left:c.leftPeak,right:c.rightPeak}),l.useWaveformData&&(e!==h&&e)&&(a.waveformData={left:e.split(","),right:d.split(",")}),l.useEQData&&(f!==h&&f&&f.leftEQ)&&(b=f.leftEQ.split(","),a.eqData=b,a.eqData.left=b,f.rightEQ!==
h&&f.rightEQ&&(a.eqData.right=f.rightEQ.split(","))));1===a.playState&&(!a.isHTML5&&(8===n&&!a.position&&a.isBuffering)&&a._onbufferchange(0),l.whileplaying&&l.whileplaying.apply(a));return!0};this._oncaptiondata=function(b){a.captiondata=b;a._iO.oncaptiondata&&a._iO.oncaptiondata.apply(a,[b])};this._onmetadata=function(b,c){var e={},d,f;d=0;for(f=b.length;d<f;d++)e[b[d]]=c[d];a.metadata=e;console.log("updated metadata",a.metadata);a._iO.onmetadata&&a._iO.onmetadata.call(a,a.metadata)};this._onid3=
function(b,c){var e=[],d,f;d=0;for(f=b.length;d<f;d++)e[b[d]]=c[d];a.id3=w(a.id3,e);a._iO.onid3&&a._iO.onid3.apply(a)};this._onconnect=function(b){b=1===b;if(a.connected=b)a.failures=0,q(a.id)&&(a.getAutoPlay()?a.play(h,a.getAutoPlay()):a._iO.autoLoad&&a.load()),a._iO.onconnect&&a._iO.onconnect.apply(a,[b])};this._ondataerror=function(b){0<a.playState&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};va=function(){return p.body||p.getElementsByTagName("div")[0]};X=function(b){return p.getElementById(b)};
w=function(b,e){var d=b||{},a,f;a=e===h?c.defaultOptions:e;for(f in a)a.hasOwnProperty(f)&&d[f]===h&&(d[f]="object"!==typeof a[f]||null===a[f]?a[f]:w(d[f],a[f]));return d};ha=function(b,c){!b.isHTML5&&8===n?g.setTimeout(c,0):c()};Y={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};oa=function(b,e){var d,a=!0,f=e!==h,l=c.setupOptions;for(d in b)if(b.hasOwnProperty(d))if("object"!==typeof b[d]||null===b[d]||b[d]instanceof Array||b[d]instanceof RegExp)f&&Y[e]!==h?c[e][d]=b[d]:
l[d]!==h?(c.setupOptions[d]=b[d],c[d]=b[d]):Y[d]===h?a=!1:c[d]instanceof Function?c[d].apply(c,b[d]instanceof Array?b[d]:[b[d]]):c[d]=b[d];else if(Y[d]===h)a=!1;else return oa(b[d],d);return a};s=function(){function b(a){a=fb.call(a);var b=a.length;d?(a[1]="on"+a[1],3<b&&a.pop()):3===b&&a.push(!1);return a}function c(b,e){var h=b.shift(),g=[a[e]];if(d)h[g](b[0],b[1]);else h[g].apply(h,b)}var d=g.attachEvent,a={add:d?"attachEvent":"addEventListener",remove:d?"detachEvent":"removeEventListener"};return{add:function(){c(b(arguments),
"add")},remove:function(){c(b(arguments),"remove")}}}();B={abort:r(function(){}),canplay:r(function(){var b=this._s,c;if(b._html5_canplay)return!0;b._html5_canplay=!0;b._onbufferchange(0);c=b._iO.position!==h&&!isNaN(b._iO.position)?b._iO.position/1E3:null;if(this.currentTime!==c)try{this.currentTime=c}catch(d){}b._iO._oncanplay&&b._iO._oncanplay()}),canplaythrough:r(function(){var b=this._s;b.loaded||(b._onbufferchange(0),b._whileloading(b.bytesLoaded,b.bytesTotal,b._get_html5_duration()),b._onload(!0))}),
durationchange:r(function(){var b=this._s,c;c=b._get_html5_duration();!isNaN(c)&&c!==b.duration&&(b.durationEstimate=b.duration=c)}),ended:r(function(){this._s._onfinish()}),error:r(function(){this._s._onload(!1)}),loadeddata:r(function(){var b=this._s;!b._loaded&&!ja&&(b.duration=b._get_html5_duration())}),loadedmetadata:r(function(){}),loadstart:r(function(){this._s._onbufferchange(1)}),play:r(function(){this._s._onbufferchange(0)}),playing:r(function(){this._s._onbufferchange(0)}),progress:r(function(b){var c=
this._s,d,a,f=0,f=b.target.buffered;d=b.loaded||0;var l=b.total||1;c.buffered=[];if(f&&f.length){d=0;for(a=f.length;d<a;d++)c.buffered.push({start:1E3*f.start(d),end:1E3*f.end(d)});f=1E3*(f.end(0)-f.start(0));d=Math.min(1,f/(1E3*b.target.duration))}isNaN(d)||(c._whileloading(d,l,c._get_html5_duration()),d&&(l&&d===l)&&B.canplaythrough.call(this,b))}),ratechange:r(function(){}),suspend:r(function(b){var c=this._s;B.progress.call(this,b);c._onsuspend()}),stalled:r(function(){}),timeupdate:r(function(){this._s._onTimer()}),
waiting:r(function(){this._s._onbufferchange(1)})};fa=function(b){return!b||!b.type&&!b.url&&!b.serverURL?!1:b.serverURL||b.type&&W(b.type)?!1:b.type?V({type:b.type}):V({url:b.url})||c.html5Only||b.url.match(/data\:/i)};ga=function(b){var e;b&&(e=ja?"about:blank":c.html5.canPlayType("audio/wav")?"data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w\x3d\x3d":"about:blank",b.src=e,void 0!==b._called_unload&&(b._called_load=!1));A&&(Ca=null);return e};V=function(b){if(!c.useHTML5Audio||
!c.hasHTML5)return!1;var e=b.url||null;b=b.type||null;var d=c.audioFormats,a;if(b&&c.html5[b]!==h)return c.html5[b]&&!W(b);if(!z){z=[];for(a in d)d.hasOwnProperty(a)&&(z.push(a),d[a].related&&(z=z.concat(d[a].related)));z=RegExp("\\.("+z.join("|")+")(\\?.*)?$","i")}a=e?e.toLowerCase().match(z):null;!a||!a.length?b&&(e=b.indexOf(";"),a=(-1!==e?b.substr(0,e):b).substr(6)):a=a[1];a&&c.html5[a]!==h?e=c.html5[a]&&!W(a):(b="audio/"+a,e=c.html5.canPlayType({type:b}),e=(c.html5[a]=e)&&c.html5[b]&&!W(b));
return e};Wa=function(){function b(a){var b,d=b=!1;if(!e||"function"!==typeof e.canPlayType)return b;if(a instanceof Array){g=0;for(b=a.length;g<b;g++)if(c.html5[a[g]]||e.canPlayType(a[g]).match(c.html5Test))d=!0,c.html5[a[g]]=!0,c.flash[a[g]]=!!a[g].match(bb);b=d}else a=e&&"function"===typeof e.canPlayType?e.canPlayType(a):!1,b=!(!a||!a.match(c.html5Test));return b}if(!c.useHTML5Audio||!c.hasHTML5)return u=c.html5.usingFlash=!0,!1;var e=Audio!==h?Ea&&10>opera.version()?new Audio(null):new Audio:
null,d,a,f={},l,g;l=c.audioFormats;for(d in l)if(l.hasOwnProperty(d)&&(a="audio/"+d,f[d]=b(l[d].type),f[a]=f[d],d.match(bb)?(c.flash[d]=!0,c.flash[a]=!0):(c.flash[d]=!1,c.flash[a]=!1),l[d]&&l[d].related))for(g=l[d].related.length-1;0<=g;g--)f["audio/"+l[d].related[g]]=f[d],c.html5[l[d].related[g]]=f[d],c.flash[l[d].related[g]]=f[d];f.canPlayType=e?b:null;c.html5=w(c.html5,f);c.html5.usingFlash=Va();u=c.html5.usingFlash;return!0};sa={};R=function(){};ba=function(b){8===n&&(1<b.loops&&b.stream)&&(b.stream=
!1);return b};ca=function(b,c){if(b&&!b.usePolicyFile&&(b.onid3||b.usePeakData||b.useWaveformData||b.useEQData))b.usePolicyFile=!0;return b};la=function(){return!1};Pa=function(b){for(var c in b)b.hasOwnProperty(c)&&"function"===typeof b[c]&&(b[c]=la)};xa=function(b){b===h&&(b=!1);(y||b)&&c.disable(b)};Qa=function(b){var e=null;if(b)if(b.match(/\.swf(\?.*)?$/i)){if(e=b.substr(b.toLowerCase().lastIndexOf(".swf?")+4))return b}else b.lastIndexOf("/")!==b.length-1&&(b+="/");b=(b&&-1!==b.lastIndexOf("/")?
b.substr(0,b.lastIndexOf("/")+1):"./")+c.movieURL;c.noSWFCache&&(b+="?ts\x3d"+(new Date).getTime());return b};ra=function(){n=parseInt(c.flashVersion,10);8!==n&&9!==n&&(c.flashVersion=n=8);var b=c.debugMode||c.debugFlash?"_debug.swf":".swf";c.useHTML5Audio&&(!c.html5Only&&c.audioFormats.mp4.required&&9>n)&&(c.flashVersion=n=9);c.version=c.versionNumber+(c.html5Only?" (HTML5-only mode)":9===n?" (AS3/Flash 9)":" (AS2/Flash 8)");8<n?(c.defaultOptions=w(c.defaultOptions,c.flash9Options),c.features.buffering=
!0,c.defaultOptions=w(c.defaultOptions,c.movieStarOptions),c.filePatterns.flash9=RegExp("\\.(mp3|"+eb.join("|")+")(\\?.*)?$","i"),c.features.movieStar=!0):c.features.movieStar=!1;c.filePattern=c.filePatterns[8!==n?"flash9":"flash8"];c.movieURL=(8===n?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",b);c.features.peakData=c.features.waveformData=c.features.eqData=8<n};Oa=function(b,c){if(!k)return!1;k._setPolling(b,c)};wa=function(){};q=this.getSoundById;K=function(){var b=[];c.debugMode&&
b.push("sm2_debug");c.debugFlash&&b.push("flash_debug");c.useHighPerformance&&b.push("high_performance");return b.join(" ")};za=function(){R("fbHandler");var b=c.getMoviePercent(),e={type:"FLASHBLOCK"};if(c.html5Only)return!1;c.ok()?c.oMC&&(c.oMC.className=[K(),"movieContainer","swf_loaded"+(c.didFlashBlock?" swf_unblocked":"")].join(" ")):(u&&(c.oMC.className=K()+" movieContainer "+(null===b?"swf_timedout":"swf_error")),c.didFlashBlock=!0,D({type:"ontimeout",ignoreInit:!0,error:e}),J(e))};pa=function(b,
c,d){x[b]===h&&(x[b]=[]);x[b].push({method:c,scope:d||null,fired:!1})};D=function(b){b||(b={type:c.ok()?"onready":"ontimeout"});if(!m&&b&&!b.ignoreInit||"ontimeout"===b.type&&(c.ok()||y&&!b.ignoreInit))return!1;var e={success:b&&b.ignoreInit?c.ok():!y},d=b&&b.type?x[b.type]||[]:[],a=[],f,e=[e],g=u&&!c.ok();b.error&&(e[0].error=b.error);b=0;for(f=d.length;b<f;b++)!0!==d[b].fired&&a.push(d[b]);if(a.length){b=0;for(f=a.length;b<f;b++)a[b].scope?a[b].method.apply(a[b].scope,e):a[b].method.apply(this,
e),g||(a[b].fired=!0)}return!0};H=function(){g.setTimeout(function(){c.useFlashBlock&&za();D();"function"===typeof c.onload&&c.onload.apply(g);c.waitForWindowLoad&&s.add(g,"load",H)},1)};Da=function(){if(v!==h)return v;var b=!1,c=navigator,d=c.plugins,a,f=g.ActiveXObject;if(d&&d.length)(c=c.mimeTypes)&&(c["application/x-shockwave-flash"]&&c["application/x-shockwave-flash"].enabledPlugin&&c["application/x-shockwave-flash"].enabledPlugin.description)&&(b=!0);else if(f!==h&&!t.match(/MSAppHost/i)){try{a=
new f("ShockwaveFlash.ShockwaveFlash")}catch(l){a=null}b=!!a}return v=b};Va=function(){var b,e,d=c.audioFormats;if(ia&&t.match(/os (1|2|3_0|3_1)\s/i))c.hasHTML5=!1,c.html5Only=!0,c.oMC&&(c.oMC.style.display="none");else if(c.useHTML5Audio&&(!c.html5||!c.html5.canPlayType))c.hasHTML5=!1;if(c.useHTML5Audio&&c.hasHTML5)for(e in U=!0,d)if(d.hasOwnProperty(e)&&d[e].required)if(c.html5.canPlayType(d[e].type)){if(c.preferFlash&&(c.flash[e]||c.flash[d[e].type]))b=!0}else U=!1,b=!0;c.ignoreFlash&&(b=!1,U=
!0);c.html5Only=c.hasHTML5&&c.useHTML5Audio&&!b;return!c.html5Only};ea=function(b){var e,d,a=0;if(b instanceof Array){e=0;for(d=b.length;e<d;e++)if(b[e]instanceof Object){if(c.canPlayMIME(b[e].type)){a=e;break}}else if(c.canPlayURL(b[e])){a=e;break}b[a].url&&(b[a]=b[a].url);b=b[a]}return b};Ra=function(b){b._hasTimer||(b._hasTimer=!0,!Fa&&c.html5PollingInterval&&(null===T&&0===da&&(T=setInterval(Ta,c.html5PollingInterval)),da++))};Sa=function(b){b._hasTimer&&(b._hasTimer=!1,!Fa&&c.html5PollingInterval&&
da--)};Ta=function(){var b;if(null!==T&&!da)return clearInterval(T),T=null,!1;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].isHTML5&&c.sounds[c.soundIDs[b]]._hasTimer&&c.sounds[c.soundIDs[b]]._onTimer()};J=function(b){b=b!==h?b:{};"function"===typeof c.onerror&&c.onerror.apply(g,[{type:b.type!==h?b.type:null}]);b.fatal!==h&&b.fatal&&c.disable()};Xa=function(){if(!$a||!Da())return!1;var b=c.audioFormats,e,d;for(d in b)if(b.hasOwnProperty(d)&&("mp3"===d||"mp4"===d))if(c.html5[d]=!1,b[d]&&
b[d].related)for(e=b[d].related.length-1;0<=e;e--)c.html5[b[d].related[e]]=!1};this._setSandboxType=function(b){};this._externalInterfaceOK=function(b){if(c.swfLoaded)return!1;c.swfLoaded=!0;ka=!1;$a&&Xa();setTimeout(ma,C?100:1)};aa=function(b,e){function d(a,b){return'\x3cparam name\x3d"'+a+'" value\x3d"'+b+'" /\x3e'}if(M&&N)return!1;if(c.html5Only)return ra(),c.oMC=X(c.movieID),ma(),N=M=!0,!1;var a=e||c.url,f=c.altURL||a,g=va(),k=K(),n=null,n=p.getElementsByTagName("html")[0],m,r,q,n=n&&n.dir&&
n.dir.match(/rtl/i);b=b===h?c.id:b;ra();c.url=Qa(Ha?a:f);e=c.url;c.wmode=!c.wmode&&c.useHighPerformance?"transparent":c.wmode;if(null!==c.wmode&&(t.match(/msie 8/i)||!C&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i))Ua.push(sa.spcWmode),c.wmode=null;g={name:b,id:b,src:e,quality:"high",allowScriptAccess:c.allowScriptAccess,bgcolor:c.bgColor,pluginspage:cb+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",
wmode:c.wmode,hasPriority:"true"};c.debugFlash&&(g.FlashVars="debug\x3d1");c.wmode||delete g.wmode;if(C)a=p.createElement("div"),r=['\x3cobject id\x3d"'+b+'" data\x3d"'+e+'" type\x3d"'+g.type+'" title\x3d"'+g.title+'" classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase\x3d"'+cb+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version\x3d6,0,40,0"\x3e',d("movie",e),d("AllowScriptAccess",c.allowScriptAccess),d("quality",g.quality),c.wmode?d("wmode",c.wmode):"",d("bgcolor",
c.bgColor),d("hasPriority","true"),c.debugFlash?d("FlashVars",g.FlashVars):"","\x3c/object\x3e"].join("");else for(m in a=p.createElement("embed"),g)g.hasOwnProperty(m)&&a.setAttribute(m,g[m]);wa();k=K();if(g=va())if(c.oMC=X(c.movieID)||p.createElement("div"),c.oMC.id)q=c.oMC.className,c.oMC.className=(q?q+" ":"movieContainer")+(k?" "+k:""),c.oMC.appendChild(a),C&&(m=c.oMC.appendChild(p.createElement("div")),m.className="sm2-object-box",m.innerHTML=r),N=!0;else{c.oMC.id=c.movieID;c.oMC.className=
"movieContainer "+k;m=k=null;c.useFlashBlock||(c.useHighPerformance?k={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:(k={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},n&&(k.left=Math.abs(parseInt(k.left,10))+"px")));gb&&(c.oMC.style.zIndex=1E4);if(!c.debugFlash)for(q in k)k.hasOwnProperty(q)&&(c.oMC.style[q]=k[q]);try{C||c.oMC.appendChild(a),g.appendChild(c.oMC),C&&(m=c.oMC.appendChild(p.createElement("div")),m.className="sm2-object-box",
m.innerHTML=r),N=!0}catch(s){throw Error(R("domError")+" \n"+s.toString());}}return M=!0};$=function(){if(c.html5Only)return aa(),!1;if(k||!c.url)return!1;k=c.getMovie(c.id);k||(Q?(C?c.oMC.innerHTML=ya:c.oMC.appendChild(Q),Q=null,M=!0):aa(c.id,c.url),k=c.getMovie(c.id));"function"===typeof c.oninitmovie&&setTimeout(c.oninitmovie,1);return!0};I=function(){setTimeout(Na,1E3)};qa=function(){g.setTimeout(function(){c.setup({preferFlash:!1}).reboot();c.didFlashBlock=!0;c.beginDelayedInit()},1)};Na=function(){var b,
e=!1;if(!c.url||S)return!1;S=!0;s.remove(g,"load",I);if(v&&ka&&!Ga)return!1;m||(b=c.getMoviePercent(),0<b&&100>b&&(e=!0));setTimeout(function(){b=c.getMoviePercent();if(e)return S=!1,g.setTimeout(I,1),!1;!m&&ab&&(null===b?c.useFlashBlock||0===c.flashLoadTimeout?c.useFlashBlock&&za():!c.useFlashBlock&&U?qa():D({type:"ontimeout",ignoreInit:!0,error:{type:"INIT_FLASHBLOCK"}}):0!==c.flashLoadTimeout&&(!c.useFlashBlock&&U?qa():xa(!0)))},c.flashLoadTimeout)};Z=function(){if(Ga||!ka)return s.remove(g,"focus",
Z),!0;Ga=ab=!0;S=!1;I();s.remove(g,"focus",Z);return!0};O=function(b){if(m)return!1;if(c.html5Only)return m=!0,H(),!0;var e=!0,d;if(!c.useFlashBlock||!c.flashLoadTimeout||c.getMoviePercent())m=!0;d={type:!v&&u?"NO_FLASH":"INIT_TIMEOUT"};if(y||b)c.useFlashBlock&&c.oMC&&(c.oMC.className=K()+" "+(null===c.getMoviePercent()?"swf_timedout":"swf_error")),D({type:"ontimeout",error:d,ignoreInit:!0}),J(d),e=!1;y||(c.waitForWindowLoad&&!na?s.add(g,"load",H):H());return e};Ma=function(){var b,e=c.setupOptions;
for(b in e)e.hasOwnProperty(b)&&(c[b]===h?c[b]=e[b]:c[b]!==e[b]&&(c.setupOptions[b]=c[b]))};ma=function(){if(m)return!1;if(c.html5Only)return m||(s.remove(g,"load",c.beginDelayedInit),c.enabled=!0,O()),!0;$();try{k._externalInterfaceTest(!1),Oa(!0,c.flashPollingInterval||(c.useHighPerformance?10:50)),c.debugMode||k._disableDebug(),c.enabled=!0,c.html5Only||s.add(g,"unload",la)}catch(b){return J({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),xa(!0),O(),!1}O();s.remove(g,"load",c.beginDelayedInit);return!0};
E=function(){if(P)return!1;P=!0;Ma();wa();!v&&c.hasHTML5&&c.setup({useHTML5Audio:!0,preferFlash:!1});Wa();!v&&u&&(Ua.push(sa.needFlash),c.setup({flashLoadTimeout:1}));p.removeEventListener&&p.removeEventListener("DOMContentLoaded",E,!1);$();return!0};Ba=function(){"complete"===p.readyState&&(E(),p.detachEvent("onreadystatechange",Ba));return!0};ua=function(){na=!0;E();s.remove(g,"load",ua)};ta=function(){if(Fa&&(c.setupOptions.useHTML5Audio=!0,c.setupOptions.preferFlash=!1,ia||Za&&!t.match(/android\s2\.3/i)))ia&&
(c.ignoreFlash=!0),A=!0};ta();Da();s.add(g,"focus",Z);s.add(g,"load",I);s.add(g,"load",ua);p.addEventListener?p.addEventListener("DOMContentLoaded",E,!1):p.attachEvent?p.attachEvent("onreadystatechange",Ba):J({type:"NO_DOM2_EVENTS",fatal:!0})}if(!g||!g.document)throw Error("SoundManager requires a browser with window and document objects.");var F=null;if(void 0===g.SM2_DEFER||!SM2_DEFER)F=new G;"object"===typeof module&&module&&"object"===typeof module.exports?(g.soundManager=F,module.exports.SoundManager=
G,module.exports.soundManager=F):"function"===typeof define&&define.amd?define("SoundManager",[],function(){return{SoundManager:G,soundManager:F}}):(g.SoundManager=G,g.soundManager=F)})(window);
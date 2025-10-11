"use strict";var indexText="";let sysmap=[];var addons={};var mapAttrs={};var generics={};var sysres={};sysres.GMToffset=0;var hidePasswords=true;var skin={};var pool=[];var prevURLs=[];var currentURL;var currentCont=null;var current=null;var ticker;var session;var seconds=[24,60,60];var fullday=24*60*60;var UndefinedLimit={};var trace=null;var currentTitle;var subscribers={};var prefTimer;var safeModeID=null;const safeModeConfirm="You are in Safe Mode. Logging out will undo changes. Quit?";var lastItem;var lastMenuBarItem;let keepAliveHandle=null;let pwdAuth=false;var BADID=0xffffffff;var SYS_TO="Uff0001";var SYS_CMD="uff0007";var STD_ID="ufe0001";var STD_NAME="sfe0010";var STD_DEAD="ufe0013";var MASK_FTYPE=0xf8000000;var FT_BOOL=(0<<27);var FT_U32=(1<<27);var FT_U64=(2<<27);var FT_ADDR6=(3<<27);var FT_STRING=(4<<27);var FT_MESSAGE=(5<<27);var FT_RAW=(6<<27);var FT_BOOL_ARRAY=(16<<27);var FT_U32_ARRAY=(17<<27);var FT_U64_ARRAY=(18<<27);var FT_ADDR6_ARRAY=(19<<27);var FT_STRING_ARRAY=(20<<27);var FT_MESSAGE_ARRAY=(21<<27);var FT_RAW_ARRAY=(22<<27);var FS_SHORT=(1<<24);var FS_LONG=(1<<25);var id2int={b:0<<27,u:1<<27,q:2<<27,a:3<<27,s:4<<27,m:5<<27,r:6<<27,B:16<<27,U:17<<27,Q:18<<27,A:19<<27,S:20<<27,M:21<<27,R:22<<27};var timerId2Nums={};var timerNum2Ids={};var timerNumLast=0;var requests={};var requestLast=0;class prefernceManager{constructor(){this.prefs={};this.readStore();window.onstorage=(event)=>{if(event.key==="preferences")this.readStore();};}
get(namespace){return this.prefs[namespace||""]||{};}
set(key,value,namespace){this.prefs[namespace||""]??={};this.prefs[namespace||""][key]=value;try{window.localStorage["preferences"]=JSON.stringify(this.prefs);}catch{window.localStorage.removeItem("preferences");}}
readStore(){try{this.prefs=JSON.parse(window.localStorage["preferences"]||"{}");}catch{window.localStorage.removeItem("preferences");}}}
const preferences=new prefernceManager;class NotificationCard{constructor(parent,text,timeout){this.ctrl=getTemplate("notification-card");this.title=dom.getByClass(this.ctrl,"message-header");this.updateHeading(text);this.close=dom.getByTag(this.ctrl,"button");this.timeout=timeout;this.updateTimeout(this.timeout);this.close.onclick=e=>{e.stopPropagation();this.remove();}
this.ctrl.onclick=()=>{navigator.clipboard?.writeText(this.ctrl.innerText.trim());}
this.ctrl.onmouseenter=()=>{this.updateTimeout(0,this.timeout);}
this.ctrl.onmouseleave=()=>{this.updateTimeout(this.timeout);}
parent.appendChild(this.ctrl);}
addError(){this.ctrl.classList.add("error");}
updateHeading(text){this.title.textContent=text;}
getBody(){return dom.getByClass(this.ctrl,"message-body");}
remove(){this.ctrl.remove();clearTimeout(this.handler);}
updateTimeout(time,later){this.timeout=later??time;clearTimeout(this.handler);if(time)this.handler=setTimeout(()=>this.remove(),time);}}
class NotificationManager{constructor(){this.holder=get("notification-area");}
info(text,timeout=2000){return new NotificationCard(this.holder,text,timeout);}
error(text,timeout=5000){const card=this.info(text,timeout);card.addError();return card;}}
const notifications=new NotificationManager;function debug(str){const tzoffset=getTZOffset()*1000;const time=(new Date(Date.now()-tzoffset)).toISOString().slice(0,-1).replace("T"," ");if(typeof str==="string"){console?.debug(`${time}: ${str}`);}else{console?.debug(str);}}
function backtrace(){return Error().stack?.split("\n").slice(2);}
function timer(func,timeout){var num=timerNumLast;var x=function(){var id=timerNum2Ids[num];delete timerNum2Ids[num];delete timerId2Nums[id];func();};var id=setTimeout(x,timeout);timerId2Nums[id]=num;timerNum2Ids[num]=id;timerNumLast+=1;return id;}
function cancelTimer(id){var num=timerId2Nums[id];delete timerNum2Ids[num];delete timerId2Nums[id];clearTimeout(id);}
function cancelAllTimers(){for(var id in timerId2Nums){clearTimeout(Number(id));}
timerNum2Ids={};timerId2Nums={};}
function lexicographicalLess(a,b){const flags={numeric:true,ignorePunctuation:true,sensitivity:"base"}
return a.localeCompare(b,navigator.language,flags)<0;}
function inherit(t){function C(){}
C.prototype=t;return new C();}
function getfirst(l){for(var i in l){return i;}
return null;}
function isempty(l){return getfirst(l)==null;}
function hasall(a,v){for(const i in a){if(a[i]!=v)return false;}
return true;}
function reduceIfNullish(val){if(val==null)return null;if(Array.isArray(val)&&!val.some(e=>reduceIfNullish(e)!=null))return null;return val;}
function get(id){return document.getElementById(id);}
function getTemplate(id){return get(id).content.firstElementChild.cloneNode(true);}
const cellWidthMultiplier=1.1;function setCellWidth(cell,width){cell.style.width=`${Math.floor(width * cellWidthMultiplier)}px`;}
function getCellWidth(cell){return Math.floor(Number(cell.style.width.slice(0,-2))/cellWidthMultiplier);}
function encodeURLComponent(str){return encodeURIComponent(str).replace(/[!'()*]/g,(c)=>`%${c.charCodeAt(0).toString(16).toUpperCase()}`);}
function verifyJSON(text){var rx_good=/^[\],:{}\s]*$/;var rx_two=/\\(?:["'\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rx_unquoted=/\w+(?=:\s*)/g;var rx_three=/"[^"\\\n\r]*"|'[^'\\\n\r]*'|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g;var rx_four=/(?:^|:|,)(?:\s*\[)+/g;var rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;text=String(text);rx_dangerous.lastIndex=0;if(rx_dangerous.test(text)){text=text.replace(rx_dangerous,function(a){return("\\u"
+("0000"+a.charCodeAt(0).toString(16)).slice(-4));});}
return rx_good.test(text.replace(rx_two,"@").replace(rx_unquoted,"]").replace(rx_three,"]").replace(rx_four,""));}
class RC4{constructor(){this.S=[];}
setKey(key){var S=this.S;for(let i=0;i<256;++i)
S[i]=i;var j=0;for(let i=0;i<256;++i){j=(j+key[i%key.length]+S[i])&255;var t=S[i];S[i]=S[j];S[j]=t;}
this.i=0;this.j=0;for(let i=0;i<768;++i)
this.gen();}
gen(){var S=this.S;var i=this.i=(this.i+1)&255;var j=this.j=(this.j+S[i])&255;var t=S[i];S[i]=S[j];S[j]=t;return S[(S[i]+S[j])&255];}
encrypt(str){var a=new Array(str.length);for(var i=0;i<str.length;++i){var c=str.charCodeAt(i)^this.gen();if(c==0)
c=256;a[i]=String.fromCharCode(c);}
return a.join('');}
cryptUint8Array(dst,src){for(var i=0;i<src.length;++i){dst[i]=src[i]^this.gen();}}}
class Session{constructor(){this.txseq=1;this.txEnc=new RC4();this.rxseq=1;this.rxEnc=new RC4();this.queue={};this.id=0;this.padding='        ';let b=new Uint8Array(32);this.privKey=Array.from(window.crypto.getRandomValues(b));}
encryptURI(uri){function decodeZeros(str){var r='';for(var i=0;i<str.length;++i){r+=String.fromCharCode(str.charCodeAt(i)&0xff);}
return r;}
let encrypt=str=>{var seq=this.txseq;this.txseq+=str.length+8;return(Session.word2str(this.id)+Session.word2str(seq))+
this.txEnc.encrypt(str)+this.txEnc.encrypt(this.padding);}
return encodeURLComponent(decodeZeros(encrypt(uri)));}
encryptUint8Array(arr){var narr=new Uint8Array(arr.length+16);narr[0]=this.id>>24;narr[1]=this.id>>16;narr[2]=this.id>>8;narr[3]=this.id;narr[4]=this.txseq>>24;narr[5]=this.txseq>>16;narr[6]=this.txseq>>8;narr[7]=this.txseq;this.txEnc.cryptUint8Array(new Uint8Array(narr.buffer,8,arr.length),arr);for(var i=arr.length+8;i<narr.length;++i){narr[i]=32;}
var xarr=new Uint8Array(narr.buffer,8+arr.length,8);this.txEnc.cryptUint8Array(xarr,xarr);this.txseq+=arr.length+8;return narr;}
decryptUint8Array(arr,cb){if(arr.length<20){return false;}
var id=(arr[0]<<24)|(arr[1]<<16)|(arr[2]<<8)|arr[3];var seq=(arr[4]<<24)|(arr[5]<<16)|(arr[6]<<8)|arr[7];var len=(arr[8]<<24)|(arr[9]<<16)|(arr[10]<<8)|arr[11];if(id!=this.id){return false;}
if(seq!=this.rxseq){this.queue[seq]={arr:arr,cb:cb};return true;}
this.rxseq+=arr.length-8;var carr=new Uint8Array(arr.buffer,8,arr.length-8);this.rxEnc.cryptUint8Array(carr,carr);for(let i=arr.length-8;i<arr.length;++i){if(arr[i]!=32){return false;}}
if(cb){let msgs=buffer2msgs(new Uint8Array(arr.buffer,8,arr.length-16));for(let i=0;i<msgs.length;++i){cb(msgs[i]);}}
return true;}
dequeue(){while(1){var i=this.queue[this.rxseq];if(!i)
break;delete this.queue[this.rxseq];this.decryptUint8Array(i.arr,i.cb);}}
makeInitialRequest(){let a2str=a=>a.map(b=>Session.byte2str(b)).join('');var pubKey=Session.curve_u2a(curve25519(Session.curve_a2u(this.privKey)));var str=Session.word2str(0)+Session.word2str(0)+a2str(pubKey);var arr=new Uint8Array(str.length);for(var i=0;i<str.length;++i){arr[i]=Session.str2byte(str,i);}
return arr;}
keyExchange(arr){var r="";for(var i=0;i<arr.length;++i){r+=Session.byte2str(arr[i]);}
this.id=Session.str2word(r,0);var rpubkey=Session.str2a(r.substr(8));var masterKey=Session.curve_u2a(curve25519(Session.curve_a2u(this.privKey),Session.curve_a2u(rpubkey)));this.rxEnc.setKey(this.makeKey(masterKey,false,false));this.txEnc.setKey(this.makeKey(masterKey,true,false));}
makeKey(masterKey,isSend,isServer){var magic2="On the client side, this is the send key; on the server side, it is the receive key.";var magic3="On the client side, this is the receive key; on the server side, it is the send key.";var v=masterKey.concat([]);for(let i=0;i<40;++i)
v.push(0);if(isSend==isServer){v=v.concat(Session.str2a(magic3));}else{v=v.concat(Session.str2a(magic2));}
for(let i=0;i<40;++i)
v.push(0xf2);return Session.sha1(v).slice(0,16);}
static sha1(msg){function unpackbe(a,off){var v=0;for(var i=0;i<4;++i){v|=a[off+i]<<(24-(i*8));}
return v;}
function packbe(a,off,v){for(var i=0;i<4;++i){a[off+i]=(v>>(24-i*8))&0xff;}}
var len=msg.length;var totalLen=len+9;totalLen=(totalLen+63)&-64;var padding=[0x80];for(let i=len+1;i<totalLen;++i)padding.push(0);msg=msg.concat(padding);packbe(msg,totalLen-4,len*8);var h0=0x67452301;var h1=0xEFCDAB89;var h2=0x98BADCFE;var h3=0x10325476;var h4=0xC3D2E1F0;var w=[];let rrotate=(v,r)=>(v>>>r)|(v<<(32-r));for(var j=0;j<msg.length;j+=64){for(let i=0;i<16;++i)w[i]=unpackbe(msg,j+i*4);for(let i=16;i<80;++i){w[i]=rrotate(w[i-3]^w[i-8]^w[i-14]^w[i-16],31);}
var a=h0;var b=h1;var c=h2;var d=h3;var e=h4;var f;var k;for(let i=0;i<80;++i){if(i<20){f=(b&c)|(~b&d);k=0x5A827999;}else if(i<40){f=b^c^d;k=0x6ED9EBA1;}else if(i<60){f=(b&c)|(b&d)|(c&d);k=0x8F1BBCDC;}else{f=b^c^d;k=0xCA62C1D6;}
var t=rrotate(a,27)+f+e+k+w[i];e=d;d=c;c=rrotate(b,2);b=a;a=t<<0;}
h0=(h0+a)<<0;h1=(h1+b)<<0;h2=(h2+c)<<0;h3=(h3+d)<<0;h4=(h4+e)<<0;}
var res=[];packbe(res,0,h0);packbe(res,4,h1);packbe(res,8,h2);packbe(res,12,h3);packbe(res,16,h4);return res;}
static curve_a2u(a){var r=[];for(var i=0;i<32;++i){r[i>>1]|=a[31-i]<<(i&1)*8;}
return r;}
static curve_u2a(a){var r=[];for(var i=0;i<32;++i){r[31-i]=(a[i>>1]>>((i&1)*8))&0xff;}
return r;}
static byte2str(b){b&=0xff;return String.fromCharCode(b?b:256);}
static word2str(w){return Session.byte2str(w>>24)+Session.byte2str(w>>16)+
Session.byte2str(w>>8)+Session.byte2str(w);}
static str2byte(s,off){return s.charCodeAt(off)&0xff;}
static str2word(s,off){return(Session.str2byte(s,off)<<24)|(Session.str2byte(s,off+1)<<16)|(Session.str2byte(s,off+2)<<8)|Session.str2byte(s,off+3);}
static str2a(s){var res=[];for(var i=0;i<s.length;++i)res.push(s.charCodeAt(i)&0xff);return res;}}
class make{static el(type,params={}){const e=document.createElement(type);this.#applyParams(e,params);return e;}
static span(params={}){const e=document.createElement("span");this.#applyParams(e,params);return e;}
static div(params={}){const e=document.createElement("div");this.#applyParams(e,params);return e;}
static tr(params={}){const e=document.createElement("tr");this.#applyParams(e,params);return e;}
static td(params={}){const e=document.createElement("td");this.#applyParams(e,params);return e;}
static th(params={}){const e=document.createElement("th");this.#applyParams(e,params);return e;}
static input(params={},type="text"){const e=document.createElement("input");e.type=type;this.#applyParams(e,params);return e;}
static button(params={}){const e=document.createElement("button");e.type="button";this.#applyParams(e,params);return e;}
static anchor(params={},href="#"){const e=document.createElement("a");e.href=href;this.#applyParams(e,params);return e;}
static label(params={},target){const e=document.createElement("label");if(target)e.htmlFor=target;this.#applyParams(e,params);return e;}
static#applyParams(el,params){if(params.cont)el.textContent=params.cont;if(params.cls)el.className=params.cls;params.p?.appendChild(el);}
static fRow(parent,tag="div"){return make.el(tag,{p:parent,cls:"f-row"});}
static fCol(parent,tag="div"){return make.el(tag,{p:parent,cls:"f-col"});}}
class dom{static appendTxt(parent,content){const e=document.createTextNode(content);parent?.appendChild(e);}
static appendToAttr(node,attrName,postfix){node.setAttribute(attrName,node.getAttribute(attrName)+postfix);}
static toggleBoolAttribute(node,attrName){const val=node.getAttribute(attrName);node.setAttribute(attrName,val==="true"?"false":"true");}
static getByClass(parent,name){return parent.getElementsByClassName(name)[0];}
static getByTag(parent,name){return parent.getElementsByTagName(name)[0];}
static isVisible(node){return!!node?.offsetParent;}
static getAllInteractive(node){return[...node.querySelectorAll("a, button, input")].filter(el=>dom.isVisible(el)).filter(el=>!el.disabled);}
static focusNext(node){const list=this.getAllInteractive(node.closest("ul"));const idx=list.findIndex(el=>node.contains(el));list[(idx+1)%list.length]?.focus();}
static focusPrevious(node){const list=this.getAllInteractive(node.closest("ul"));const idx=list.findIndex(el=>node.contains(el));list[(idx-1+list.length)%list.length]?.focus();}
static focusFirst(node){this.getAllInteractive(node.closest("ul"))[0]?.focus();}
static focusLast(node){const l=this.getAllInteractive(node.closest("ul"));l[l.length-1]?.focus();}}
function createButton(title,cfg,href,cls){if(href){const a=make.anchor({cls:cls??"btn btn-gray"},href);a.appendChild(viewLabel(cfg,title));return a;}else{const b=make.button({cls:cls??"btn btn-gray"});b.appendChild(viewLabel(cfg,title));return b;}}
function createOption(tb,title,cfg,id){const opt=make.el("option",{p:tb});opt.appendChild(viewLabel(cfg,title));opt.value=id;opt.id=`${id}-opt`;tb.selectedIndex=-1;tb.onchange=e=>{get(e.target.selectedOptions[0].value)?.click();tb.selectedIndex=-1;}
return opt;}
function setDocumentTitle(title){if(title){currentTitle=title;}else{if(!currentTitle)return;title=currentTitle;}
document.title=`${sysres.identity} - ${title} at ${sysres.user}@${location.host} - `+`RouterOS v${sysres.version} on ${sysres.displayname} (${sysres.arch})`;}
function clearNodes(node){node?.replaceChildren();}
function getWindowSize(){var r=document.body.getBoundingClientRect();return{x:r.right,y:r.bottom};}
function getPos(e,box){var clientX;var clientY;var x=e.pageX;if(x==null){clientX=e.clientX;x=clientX+
(document.documentElement.scrollLeft||document.body.scrollLeft);}else{clientX=x-window.pageXOffset;}
var y=e.pageY;if(y==null){clientY=e.clientY;y=clientY+
(document.documentElement.scrollTop||document.body.scrollTop);}else{clientY=y-window.pageYOffset;}
if(box){x-=box.offsetLeft;y-=box.offsetTop;}
return{x:x,y:y,clientX:clientX,clientY:clientY};}
function replaceText(node,str,lnk){if(node.hasChildNodes()){var n=node.firstChild;if(n.nodeName=='#text'&&n.nodeValue==str)return;if(n.nodeName=='A'&&n.hasChildNodes()){var cn=n.firstChild;if(cn.nodeName=='#text'&&cn.nodeValue==str)return;}
node.removeChild(n);}
if(!lnk){dom.appendTxt(node,str);}else{make.anchor({p:node,cont:str},lnk);}}
function show(element){element.hidden=false;}
function hide(element){element.hidden=true;}
function SVGPoly(line){this.line=line;};SVGPoly.prototype.reset=function(){this.points='';};SVGPoly.prototype.add=function(x,y){this.points+=' '+x+','+y;};SVGPoly.prototype.draw=function(){this.line.setAttribute('points',this.points);};function SVGText(el){this.el=el;}
SVGText.prototype.text=function(t){replaceText(this.el,t);};function SVG(canvas,width,height,vWidth,vHeight,className){this.strokeOpacity=1;this.strokeColor='black';this.strokeWidth=1;this.fillOpacity=1;this.fillColor='white';if(!canvas){canvas=this.el('svg',{version:'1.1',viewBox:'0 0 '+width+' '+height,width:vWidth,height:(vHeight<height?'100%':vHeight),preserveAspectRatio:'xMaxYMax slice'});if(!canvas||!canvas.viewBox)return;if(className)canvas.className.baseVal=className;}
this.canvas=canvas;this.current=canvas;if(SVG.firefox)++width;this.viewBox={width:width,height:height};if(vWidth<width)this.canvas.style.width='100%';}
SVG.firefox=navigator.userAgent.search("Firefox")!=-1;SVG.prototype.line=function(x1,y1,x2,y2){var line=this.el('line',{x1:x1,y1:y1,x2:x2,y2:y2});line.classList.add("grid-line");line.setAttribute('shape-rendering','crispEdges');this.setAttrs(line);this.current.appendChild(line);};SVG.prototype.text=function(x,y,sz,rightAlign){var text=this.el('text',{x:x,y:y+sz,'font-size':sz});if(rightAlign)text.setAttribute('text-anchor','end');this.current.appendChild(text);return new SVGText(text);};SVG.prototype.polyline=function(cls){const l=this.el("polyline");l.classList.add(cls);this.setAttrs(l);this.current.appendChild(l);return new SVGPoly(l);};SVG.prototype.polygon=function(cls){const p=this.el("polygon");p.classList.add(cls);this.setAttrs(p);this.current.appendChild(p);return new SVGPoly(p);};SVG.prototype.el=function(type,attrs){const el=document.createElementNS('http://www.w3.org/2000/svg',type);if(!attrs)return el;for(var i in attrs){el.setAttribute(i,attrs[i]);}
return el;};SVG.prototype.setAttrs=function(el){el.setAttribute('fill',this.fillColor);el.setAttribute('fill-opacity',this.fillOpacity);el.setAttribute('stroke-opacity',this.strokeOpacity);el.setAttribute('stroke',this.strokeColor);el.setAttribute('stroke-width',this.strokeWidth);};function createGraphic(el,width,height,vWidth,vHeight,className){const g=new SVG(el,width,height,vWidth,vHeight,className);if(g.canvas)return g;return null;}
function levelColor(level,colormap){for(let i in colormap){if(level<colormap[i].level)return colormap[i].color;}}
function drawBars(g,vals,offset,max,colors){clearNodes(g.canvas);let idx=vals.length-1;const height=g.viewBox.height-1;offset=offset||0;for(let x=g.viewBox.width-4;x>0&&idx>=0;x-=4,idx-=2){let h;if(vals[idx][0]!=null){let v=num2int(vals[idx][0])+offset;h=Math.floor(Math.max(v*(height-1)/max,1));if(colors)g.strokeColor=levelColor(v,colors);else g.strokeColor='#40bbef';}else{h=0.2;g.strokeColor='#bbbbbb';}
g.line(x,height,x,height-(h+1));}}
function trim(str){return str.replace(/^\s+|\s+$/g,'');}
function hasPrefix(prefix,str){if(prefix[prefix.length-1]=='$'){return prefix.substr(0,prefix.length-1)==str;}
return prefix==str.substr(0,prefix.length);}
function hasPrefixIn(prefix,map){for(var i in map){if(hasPrefix(prefix,map[i].toString()))return true;}
return false;}
function hasOneOfPrefixes(prefixes,str){for(var i in prefixes){if(hasPrefix(prefixes[i],str))return true;}
return false;}
function fitsRangeLimit(n,limit){if(limit&&limit.ranges){var ranges=limit.ranges;for(var i=0;i<ranges.length;i+=2){if(minmax(n,ranges[i],ranges[i+1]))return true;}
return false;}
return true;}
function string2int(str,radix){if(str.length==0)return null;for(var i=0;i<str.length;++i){var c=str.substr(i,1);if((c=='-'||c=='+')&&i==0)continue;if(isNaN(parseInt(c,radix||10)))return null;}
return parseInt(str,radix||10);}
function fraction2string(num,scale){var len=scale.toString().length-1;var str=(num%scale).toString();while(str.length<len)str='0'+str;return str;}
function string2fraction(str,scale){var i=string2int(str);if(i==null||i<0)return null;var n=parseFloat('0.'+str);if(isNaN(n))return null;return Math.floor(n*scale);}
function ipaddr2string(ip){var r='';for(var i=0;i<4;++i){if(i>0)r+='.';r+=(ip&0xff).toString();ip>>=8;}
return r;}
function string2ipaddr(str){var a=str.split('.');if(a.length==1||a.length>4)return null;if(a.length!=4){if(a.length<=2)a.splice(a.length-1,0,'0');if(a.length<=3)a.splice(2,0,'0');}
var addr=[];for(var i in a){var n=string2int(a[i],10);if(n==null||n<0||n>255)return null;addr[i]=n;}
return(addr[3]<<24)|(addr[2]<<16)|(addr[1]<<8)|addr[0];}
function ntohl(v){return((v&0xff)<<24)|(((v>>8)&0xff)<<16)|(((v>>16)&0xff)<<8)|((v>>24)&0xff);}
function netmask2len(ip){if(!ip)return 0;var len=0;for(var i=0;i<4;++i,len+=8,ip>>=8){var x=ip&0xff;if(x==255)continue;for(var j=128;j>0;j>>=1,++len){if(!(x&j))return len;}}
return len;}
function len2netmask(len){var mask=0;for(let i=0;i<(len&7);++i){mask=(mask>>1)|0x80;}
for(let i=8;i<=len;i+=8){mask=(mask<<8)|0xff;}
return mask;}
function string2ip6addr(str){var p=str.split(':');var skip;var addr=[];for(var i=0;i<p.length;++i){if(p[i].length==0){if(i>0&&i+1<p.length){if(skip)return null;skip=addr.length;continue;}
addr.push(0);addr.push(0);continue;}
if(i+1==p.length){var a=string2ipaddr(p[i]);if(a!=null){addr.push(a&0xff);addr.push((a>>8)&0xff);addr.push((a>>16)&0xff);addr.push((a>>24)&0xff);break;}}
var n=string2int(p[i],16);if(n==null||n<0||n>0xffff)return null;addr.push(n>>8);addr.push(n&0xff);}
if(skip){while(addr.length<16)addr.splice(skip,0,0);}
if(addr.length!=16)return null;return addr;}
function ip6addr2string(addr){function find2Zeros(addr,pos){for(;pos<16;pos+=2){if(addr[pos]==0&&addr[pos+1]==0)return pos;}
return 16;}
function findNonZeros(addr,pos){for(;pos<16;pos+=2){if(addr[pos]!=0||addr[pos+1]!=0)return pos;}
return 16;}
var str='';var zerosStart=-1;var zerosLen=2;for(var start=0;start<16;){start=find2Zeros(addr,start);if(start!=16){var end=findNonZeros(addr,start+2);var len=end-start;if(len>zerosLen){zerosLen=len;zerosStart=start;}
start=end+2;}}
if(zerosStart==0){var ip=addr[12]|(addr[13]<<8)|(addr[14]<<16)|(addr[15]<<24);if(zerosLen==12){return'::'+ipaddr2string(ip);}else if(zerosLen==10){const word=(addr[zerosLen]<<8)+addr[zerosLen+1];if(word==0xffff){return'::ffff:'+ipaddr2string(ip);}}}
for(var i=0;i<16;){if(i==zerosStart){str+=':';i+=zerosLen;if(i==16)str+=':';continue;}
let word=(addr[i]<<8)+addr[i+1];if(i>0)str+=':';str+=word.toString(16);i+=2;}
return str;}
function ip6addr2ipaddr(addr){for(let i=0;i<10;++i){if(addr[i]!=0)return null;}
for(let i=10;i<12;++i){if(addr[i]!=0xff)return null;}
return(addr[15]<<24)|(addr[14]<<16)|(addr[13]<<8)|addr[12];}
function ipaddr2ip6addr(addr){return[0,0,0,0,0,0,0,0,0,0,0xff,0xff,addr&0xff,(addr>>8)&0xff,(addr>>16)&0xff,(addr>>24)&0xff,];}
function string2macaddr(str){const nums=str.split(":").map(n=>parseInt(n,16));if(nums.length===0)return[0,0,0,0,0,0];if(nums.length===6&&nums.every(n=>n>=0&&n<=0xff))return nums;return nums;}
function macaddr2string(mac){return mac.map(n=>n.toString(16).toUpperCase().padStart(2,'0')).join(":");}
function parseRd(str){if(str=='')return false;let i=str.indexOf(':');let first=str.substr(0,i).trimStart();let second=str.substr(i+1).trimStart();let numreg=/^\d+$/;let hexreg=/^0x[0-9A-Fa-f]+$/;if(numreg.test(first)||hexreg.test(first)){if(!(numreg.test(second)||hexreg.test(second)))return false;}else{if(string2ipaddr(first)==null)return false;if(!numreg.test(second)||(string2int(second)??0)>65535)return false;}
return true;}
function string2version(str){var state=0x66;var fix=0;str=str.split(' ')[0];var n=str.split('.');if(n.length<2)return null;var major=string2int(n[0]);if(major==null)return null;var minor=string2int(n[1]);if(minor==null){var vv={alpha:0x61,beta:0x62,rc:0x63,'final':0x66,'test':0x67};for(var i in vv){var x=n[1].split(i);if(x.length==2){minor=string2int(x[0]);if(minor==null)return null;state=vv[i];fix=string2int(x[1]);if(fix==null)return null;break;}}}else if(n.length>=3){fix=string2int(n[2]);if(fix==null)return null;}
if(minor==null)return null;return(major<<24)|(minor<<16)|(state<<8)|fix;}
function num2int(v){return v>=0x80000000?v-0x100000000:v;}
function int2num(v){return v<0?0x100000000+v:v;}
function toarray(m){var a=[];for(var i in m)a[i]=m[i];return a.length==1?a[0]:a;}
function fromarray(a){if(a instanceof Array){var r={};for(var i in a)r[i]=a[i];return r;}
return{0:a};}
function fillarray(f,sz){var res=new Array(sz);for(var i=0;i<sz;++i)res[i]=f;return res;}
function getTime(v){return v%(3600*24);}
function getDate(v){return v-getTime(v);}
function getNow(){return Math.floor(new Date().getTime()/1000);}
function getTZOffset(){return(new Date()).getTimezoneOffset()*60;}
function doubledigit(v){return v<10?'0'+v:v.toString();}
function interval2string(val,scale){var rem=0;if(scale>1){rem=val%scale;val=Math.floor(val/scale);}
var str='';var days=0;if(val>=fullday){days=Math.floor(val/fullday);val=val%fullday;}
if(days)str+=days+'d ';var h=Math.floor(val/3600);var m=Math.floor(val/60)%60;var s=val%60;str+=doubledigit(h)+':'+doubledigit(m)+':'+doubledigit(s);if(rem>0)str+='.'+fraction2string(rem,scale);return str;}
function string2interval(str,scale=1){if(/^\d+$/.test(str))return parseInt(str)*scale;var v=0;var d=str.split('d ');if(d.length>1){if(d.length>2)return null;v=string2int(d[0]);if(v==null||v<0)return null;str=d[1];}
var fr=str.split('.');if(fr.length>2)return null;var x=fr[0].split(':');if(x.length!=3)return null;for(var i in x){v*=seconds[i];var n=string2int(x[i]);if(n==null||n<0||(i!=="0"&&n>=seconds[i]))return null;v+=n;}
if(scale>1){v*=scale;if(fr.length==2){const fs=string2fraction(fr[1],scale);if(fs==null)return null;v+=fs;}}else{if(fr.length==2)return null;}
return v;}
function date2string(val){return(new Date(val*1000)).toISOString().substring(0,10);}
function string2date(str){const nonISO=str.includes('/')||str.includes('.');const val=Date.parse(str)/1000+(nonISO?getTZOffset():0);return Number.isNaN(val)?null:val;}
function timezone2string(val){var sign='+';if(val<0){sign='-';val=-val;}
val=Math.floor(val/60);return sign+
doubledigit(Math.floor(val/60))+':'+doubledigit(val%60);}
function string2timezone(str){var x=str.split(':');if(x.length!=2)return null;var hr=string2int(x[0]);if(hr==null)return null;var mn=string2int(x[1]);if(mn==null||mn<0||mn>=60)return null;return(hr*60+mn)*60;}
function dateAndTime2string(date,time,allwaysWithTime,dontShowToday){var s=date2string(date);const stime=new Date((date+time)*1000).toISOString().substring(11,19);if(dontShowToday&&s==date2string(Date.now()/1000)){return stime;}
if(!allwaysWithTime&&time==0)return s;return`${s} ${stime}`;}
function string2enum(values,str){if(!values)return null;var type=enm[values.type];var map=type?type.getMap(values):{};for(var i in map){if(str==map[i])return parseInt(i);}
return null;}
function enum2string(values,val){if(!values)return null;return enm[values.type].toString(int2num(val),values);}
function lossyenum_fromstr(attrs,str,fromstr){if(!attrs.values)return fromstr(attrs,str);var idx=str.indexOf('(');if(idx!=-1)return fromstr(attrs,trim(str.substr(0,idx)));var map=enm[attrs.values.type].getMap(attrs.values);for(var i in map){if(str==map[i])return parseInt(i,10);}
return fromstr(attrs,str);}
function lossyenum_tostr(attrs,val,str){if(!attrs.values)return str;var type=enm[attrs.values.type];var map=type?type.getMap(attrs.values):{};var n=map[val];if(n==undefined)return str;return n;}
function parseLimit(ranges,str,deflow,defhigh,fromstr){var range=str.split('..');if(range.length>2)return false;var low=deflow;if(range[0]!='')low=fromstr(range[0]);if(low==null)return false;var high=low;if(range.length==2){high=range[1]!=''?fromstr(range[1]):defhigh;if(high==null)return false;}
ranges.push(low);ranges.push(high);return true;};function minmax(val,min,max){if(max==0)return true;if(min!=null&&val<min)return false;if(max!=null&&val>max)return false;return true;}
function iminmax(val,min,max){if(min!=null&&val<num2int(min))return false;if(max!=null&&val>num2int(max))return false;return true;}
function update(obj,data){for(let i in obj){const c=i.charAt(0);if(c=='m'){update(obj[i],{});}else if(c!='_'){delete obj[i];}}
for(let i in data){const c=i.charAt(0);if(c=='m'&&obj[i]){update(obj[i],data[i]);}else if(c!='_'){obj[i]=data[i];}}
return obj;}
function updateOnNotification(obj,data){data.Sfe001c??=[];for(var i in data){var c=i.charAt(0);if(c!='_'){obj[i]=data[i];}}}
function tostr(attr,val){if(attr.opt){if(val==null||!ftype(attr).hasValue(attr,val))return'';}
return ftype(attr).tostr(attr,val);}
function toString(attr,obj){return tostr(attr,ftype(attr).get(attr,obj));}
function getUptime(){return getNow()+sysres.uptimediff;}
const iconName=nr=>iconMap[nr in iconMap?nr:0];const iconMap={0:"",1:"Bridge",2:"Files",5:"Interfaces",6:"IP",7:"IPv6",8:"Log",11:"Supout",13:"Mesh",14:"VirtualMachine",15:"MPLS",16:"Terminal",17:"PPP",18:"Queues",19:"Quick_Set",20:"RADIUS",22:"Routing",24:"Switch",25:"System",26:"Tools",29:"Wireless",30:"LCD",33:"Partitions",34:"Dude",38:"User_Manager",39:"WireGuard",40:"ZeroTier",42:"Wifi",43:"Dot1X",44:"IoT",45:"OpenFlow",64:"Interface_12x12",65:"UserEdit_12x12",66:"UserView_12x12",67:"UserFull_12x12",68:"Routing_12x12",69:"Routing_12x12",70:"Play_12x12",71:"Neighbours_12x12",72:"IP_12x12",73:"Bridge_12x12",75:"Ports_12x12",76:"IP_12x12-green",78:"FileNPK_12x12",79:"File_12x12",80:"Folder_12x12",81:"Circle_12x12",82:"VirtualInterface_12x12",83:"Ethernet_12x12",84:"Info_12x12",85:"Check_12x12-green",86:"Close_12x12-red",87:"Passthrough_12x12",88:"Jump_12x12",89:"Return_12x12",90:"Redirect_12x12",91:"NAT_12x12",92:"MarkPacket_12x12",93:"MarkConnection_12x12",94:"MarkRouting_12x12",95:"AddSrc_12x12",96:"AddDst_12x12",97:"LoadSmall_12x12",98:"LoadMid_12x12",99:"Load_12x12",100:"Reset_12x12",103:"Netwatch_12x12",104:"Exclamation_12x12",105:"WifiClient_12x12",106:"WifiAp_12x12",107:"WifiBss_12x12",108:"WifiFreq_12x12",109:"Tarpit_12x12",110:"Forward_12x12",116:"Wireless_12x12"}
function createIcon(parent,iconnr){const name=iconName(iconnr);console.assert(name,`Icon ${iconnr} is missing`);return make.span({p:parent,cls:`icon icon-tbl icon-${name}`});}
class TextInput{constructor(ctrl){this.setElement(ctrl);this.onchange=null;}
getElement(){return this.ctrl;}
setElement(ctrl){if(this.ctrl)this.ctrl.oninput=null;this.ctrl=ctrl;this.ctrl.oninput=()=>{this.text=this.ctrl.value;this.changed(this.text);};}
focus(){this.ctrl.focus();}
setEnabled(en){this.ctrl.disabled=!en;}
getValue(){return this.ctrl.value;}
setValue(value){this.text=value;this.ctrl.value=value;}
changed(value){if(this.onchange)this.onchange(value);}}
class TextArea extends TextInput{constructor(parent){super(make.el("textarea",{p:parent}));this.ctrl.rows=1;}
setValue(value){TextInput.prototype.setValue.call(this,value);this.changed(value);}
changed(value){const lines=this.ctrl.value.split('\n');this.ctrl.rows=lines.length;if(this.onchange)this.onchange(value);}}
function viewLabel(cfg,name,propname){if(!propname)propname="name";return make.span({cont:cfg&&cfg[propname]?cfg[propname]:name});}
function getStatusContainer(){var idx=0;while(sysmap[idx].name!='Status')++idx;return sysmap[idx].c[0];}
function isStatusPageEmpty(){if(skin.Status==null||skin.Status.Status==null)return true;var cfg=getContainerProp(getStatusContainer());for(var i in cfg){if(isNaN(parseInt(i)))continue;if(cfg[i]==0||cfg[i]._hide)continue;return false;}
return true;}
function lookupAttr(type,name,owner,nr){for(var i in type.c){var a=ftype(type.c[i]).lookup(type.c[i],owner,name,nr);if(a!=null)return a;}
return null;}
function addToStatusPage(path){var cfg=getContainerProp(getStatusContainer());var showStatus=isStatusPageEmpty();var i=0;for(var j in cfg){if(Number(j)>=i)i=parseInt(j)+1;}
cfg[i]={alias:path};if(showStatus)generateMenu();}
function shouldHide(cfg,hideByDefault){if(cfg._hide)return true;if(cfg._hide!=null)return false;if(cfg.show)return false;if(hideByDefault)return true;return false;}
const uniqueId={dummyId:0,formPrefix:"formfield",next:function(){return this.dummyId++;},form:function(attrs){return`${this.formPrefix}-${attrs.id ? attrs.id : "uid" + this.next()}`;}}
class DialogManager{#title;#body;constructor(){this.holder=get("exclusive-popup");this.#title=dom.getByTag(this.holder,"h2");this.#body=dom.getByTag(this.holder,"section");this.queue=[];}
request(cb){if(!this.busy()){cb(new DialogInstance(this.holder,this.#title,this.#body,this));this.holder.showModal();}
else this.queue.push(cb);}
release(){this.#title.replaceChildren();this.#body.replaceChildren();const cb=this.queue.shift();if(cb){cb(new DialogInstance(this.holder,this.#title,this.#body,this));this.holder.showModal();}}
busy(){return this.holder.open;}}
const dialogManager=new DialogManager;class DialogInstance{#title;#body;#valid;constructor(holder,title,body,mgr){this.#valid=true;this.#title=title;this.#body=body;holder.onclose=()=>{this.#valid=false;mgr.release();}}
setTitle(txt){if(!this.#valid)throw new Error("Dialog is not owned");this.#title.replaceChildren(txt);}
setBody(children){if(!this.#valid)throw new Error("Dialog is not owned");this.#body.replaceChildren(...children);}}
class ViewController{constructor(cfg,status){this.lstns=[];this.views=[];this.allConds=[];this.conds={};this.tabs={};this.needsSeparator=false;this.cfg=cfg;this.status=status;}
addAllViews(obj,type,views){if(!type)type=obj._type;if(!this.mainType)this.mainType=type;type.c.filter(c=>c.type==="cond").forEach(c=>{const cd=new Condition(c,this.conds,obj);this.conds[c.name]=cd;this.allConds.push(cd);});const ro=isROObj(obj,type);this.listenOn(obj);type.c.forEach(c=>{const v=this.createView(obj,null,c,ro);if(v&&views)views.push(v);});const ordered=this.views.filter(v=>"order"in v.attrs);const unordererd=this.views.filter(v=>!("order"in v.attrs));ordered.sort((v1,v2)=>{if(v1.attrs.order<v2.attrs.order)return-1;if(v1.attrs.order>v2.attrs.order)return 1;return 0;});this.views=ordered.concat(unordererd);}
listenOn(obj){if(!obj._owner)return;const lstn=(o)=>{if(obj.ufe0001==o.ufe0001)this.update(obj);};obj._owner.listen(lstn,true);this.lstns.push({obj:obj,lstn:lstn});}
destroy(){this.lstns.forEach(l=>{l.obj._owner.unlisten(l.lstn,true);});this.views.forEach(v=>{if(!v.info.owner)v.destroy();});}
createGrid(){if(!this.hasGrid){this.hasGrid=true;}else{this.rows=this.views.filter(v=>v.hasRow()).length;}}
create(table){this.table=table;if(this.hasGrid){this.grid=make.div({p:table,cls:"gridView"});const left=new CustomView({},false,viewCtrl=>viewCtrl.createGridCell());left.info.newColumn=true;this.addView(null,null,null,left,left.attrs,{order:0},true);const right=new CustomView({},false,viewCtrl=>viewCtrl.createGridCell());right.info.newColumn=true;const idx=this.cfg.rows!=null?this.cfg.rows:(this.rows||10000);this.addView(null,null,null,right,right.attrs,{order:idx},true);}
this.reorderViews();this.views.forEach(view=>{const v=view.info;this.current=view;view.createRow(this,v.cfg,v.obj);if(v.row&&!view.isVisible()){hide(v.row.closest("fieldset")??v.row);}});this.readdTabs();this.load();const tabs=this.firstTable?[...this.firstTable.children].concat([...this.secondTable?.children??[]]):[...this.table.children];const tabSepVisibility=()=>{tabs.forEach(tab=>{function nextVisible(e){while(e){e=e.nextElementSibling;if(e&&!e.hidden)return e;}}
const isSeperator=e=>e.classList.contains("f-item-sep");const rows=Array.from(tab.querySelector(".acc-cont").children);rows.filter(isSeperator).forEach(sep=>{const next=nextVisible(sep);if(!next||isSeperator(next))hide(sep);else show(sep);});if(!rows.find(row=>!row.hidden))hide(tab);else show(tab);});};this.allConds.forEach(cond=>cond.init(this,tabSepVisibility));const getButton=tab=>tab.querySelector("h2.acc-title > button");const sections=tabs.filter(tab=>!tab.hidden&&tab.querySelector(".acc-title"));if(this.mainType&&(!this.mainType.type||this.mainType.type in["item","map"])){sections.slice(1).forEach(tab=>{tab.classList.add("folded");getButton(tab).ariaExpanded="false";});}
sections.filter(tab=>getButton(tab).dataset.pref).forEach(tab=>{const btn=getButton(tab);if(tab.classList.contains("folded")){if(btn.dataset.pref!=="fold")btn.click();}else{if(btn.dataset.pref!=="expand")btn.click();}});}
reorderViews(){const ordered=[];let idx=0;for(let i=0;i<this.views.length;++i){const v=this.views[i];if(v.hasRow())v.info.orignalIdx=idx++;if(v.info.cfg.order!=null){ordered.push(v);this.views.splice(i,1);--i;}}
if(ordered.length==0)return;ordered.sort((a,b)=>{if(a.info.cfg.order<b.info.cfg.order)return-1;if(a.info.cfg.order>b.info.cfg.order)return 1;if(a.info.newColumn)return-1;if(b.info.newColumn)return 1;return 0;});idx=0;let j=0;for(let i in ordered){const v=ordered[i];while(idx<v.info.cfg.order&&j<this.views.length){if(this.views[j++].hasRow())++idx;}
this.views.splice(j,0,v);++j;if(v.hasRow())++idx;}}
renumViews(){let idx=0;this.views.forEach((view,i)=>{const v=view.info;if(v.newColumn){if(i==0)return;if(this.rows?idx==this.rows:i==this.views.length-1){delete this.cfg.rows;}else{this.cfg.rows=idx;}
return;}
if(!view.hasRow())return;if(v.cfg.order!=null){if(v.orignalIdx==idx){delete v.cfg.order;}else{v.cfg.order=idx;}}
++idx;});}
update(obj){this.views.forEach(v=>{if(v.info.owner)return;if(obj&&v.info.obj!=obj)return;if(!v.isChanged())v.load(v.info.obj);});}
load(){this.views.forEach(v=>{if(!v.info.owner)v.load(v.info.obj);});}
save(){for(let v of this.views){if(v.info.owner||v.info.ro)continue;if(!v.isVisible()||!v.isEnabled())continue;if(!v.info.obj._exportObj)v.info.obj._exportObj={};v.save(v.info.obj._exportObj);const err=v.save(v.info.obj);if(err!=null){delete v.info.obj._exportObj;displayErrorAtButtons(err);const n=notifications.error("Failed to save");make.span({p:n.getBody(),cont:err});return false;}}
return true;}
isChanged(){for(let v of this.views){if(v.info.owner||v.info.ro)continue;if(!v.isVisible()||!v.isEnabled())continue;if(v.isChanged())return true;}
return false;}
readdTabs(){if(this.readdTabsDone)return;this.readdTabsDone=true;let needSep=null;let needTab=null;function cleanupTab(v){if(v?.tab){v.tab.parentNode.removeChild(v.tab);v.tab=null;}}
function cleanupSep(v){if(v?.sep){v.sep.parentNode.removeChild(v.sep);v.sep=null;}}
let currentGroup=null;for(let view of this.views){const v=view.info;if(!v.row)continue;const hideSep=v.cfg.separator&&v.cfg.separator._hide;if(typeof v.cfg.tab=='string'){v.cfg.tab={name:v.cfg.tab};}
if((v.group&&currentGroup!=v.group)||(v.cfg.tab&&(v.cfg.tab._hide==0||v.cfg.tab.name))){if(v.group&&currentGroup!=v.group)v.tabByDefault=true;currentGroup=v.group;cleanupTab(needTab);needTab=null;cleanupSep(needSep);needSep=null;const tab=v.cfg.tab?v.cfg.tab:(v.group?v.group.cfg:null);if(!tab||tab._hide!=1)needTab=v;}else if(!needTab&&!hideSep&&(v.separator||v.cfg.separator)){cleanupSep(needSep);needSep=v;}
cleanupTab(v);cleanupSep(v);if(!view.isVisible())continue;if(v.group==null&&!v.cfg.tab)needTab=null;if(needTab){needTab.tab??=this.createTab(needTab);}else if(needSep){needSep.sep??=this.createSeparator(needSep);}
needTab=null;needSep=null;}
cleanupTab(needTab);cleanupSep(needSep);const coat=section=>{if(!section?.firstElementChild)return;if(section.firstElementChild.classList.contains("acc"))return;const tab=getTemplate("item-tab-block");dom.getByClass(tab,"acc-title").remove();dom.getByClass(tab,"acc-cont").setAttribute("aria-labelledby","title");section.prepend(tab);};coat(this.table);coat(this.firstTable);coat(this.secondTable);const reorder=section=>{if(!section)return;let currentTab=section.firstElementChild;for(let row of Array.from(section.children)){if(row.classList.contains("acc")){currentTab=row;}else{currentTab.querySelector(".acc-cont").append(row);}}};reorder(this.table);reorder(this.firstTable);reorder(this.secondTable);}
newView(obj,attrs,hide,ro){if(attrs.nonpublic||hide){return new HiddenView(attrs);}
const c=attrs.on?this.conds[attrs.on]:null;if(c&&c.shouldHide(obj))return null;if(!ro&&c&&c.shouldMakeRO(obj))ro=true;const view=ftype(attrs).view(attrs,ro||attrs.ro);if(view&&c)c.addView(view);return view;}
createView(obj,owner,attrs,ro){let group=owner;if(owner){if(owner.getTabName()==null){group=owner.info.group;}else{if(!owner.cfg)owner.cfg=getProp(owner.info.cfg,'tab');}}
if(!group&&attrs.owner&&attrs.owner.name&&(attrs.owner.type=='tab'||attrs.owner.type=='gridcell')){class Tab{constructor(attrs){this.attrs=attrs;}
getTabName(){return this.attrs.name;}
getVisualClass(){return null;}}
group=this.tabs[attrs.owner.name];if(!group){group=this.tabs[attrs.owner.name]=new Tab(attrs.owner);group.cfg=getProp(getAttrProp(obj,attrs.owner),'tab');}}
const cfg=ftype(attrs).cfg(attrs,obj);const view=this.newView(obj,attrs,shouldHide(cfg,attrs.hidebydefault),ro||cfg.ro);if(!view)return null;return this.addView(obj,owner,group,view,attrs,cfg,ro);}
addView(obj,owner,group,view,attrs,cfg,ro){const v=view.info;v.obj=obj;v.attrs=attrs;v.ro=ro||view.isRO();v.cfg=cfg;v.owner=owner;v.group=group;if(this.needsSeparator&&view.hasRow()){v.separator=true;this.needsSeparator=false;}
this.views.push(view);view.attach(this,obj);if(cfg.limit){const limit=ftype(attrs).limit(attrs,cfg.limit);if(limit!=null)view.setLimit(limit);}
if(view.getTabName()!=null)v.group=view;return view;}
showView(view,toShow){const v=view.info;if(v.row){const row=v.row.closest("fieldset")??v.row;toShow?show(row):hide(row);}}
getTBody(){const v=this.current.info;if(!v.row){v.row=make.div({p:make.el("fieldset",{p:this.table}),cls:"f-item"});if(v.owner){const cls=v.owner.getVisualClass();if(cls!=null)v.row.classList.add(cls);}}
return v.row;}
createRow(label,extra){const node=label?label.getNode():null;const tr=this.getTBody();const lbl=make.label({p:tr});if(node)lbl.appendChild(node);if(extra!=-1){const extr=make.div({p:tr,cls:"extra"});if(extra)extr.appendChild(extra);}
return tr;}
createSingleItemRow(){return make.fRow(this.getTBody());}
addRow(label,extra,views,sep){if(!(views instanceof Array))views=[views];let ctrl=views[0].create(this,label);if(!ctrl)return;if(views[1]){const cfg=this.getAttrCfg(views[0].attrs);const name=views[0].attrs.name;const cfgName=getProp(getProp(cfg,name),"name");addLabel(isempty(cfgName)?name:cfgName,ctrl);}
let row=this.createRow(label,extra);if(extra&&extra!==-1){extra.ariaLabel=`Set ${label.label.node.textContent} field`;extra.title=extra.ariaLabel;ctrl.id=`curtain-${uniqueId.next()}`;dom.appendToAttr(extra,"aria-controls",ctrl.id);}
if(this.current.info.cfg.note){const noteHolder=make.fCol(row);row=make.fRow(noteHolder);make.div({p:noteHolder,cls:"f-note",cont:this.current.info.cfg.note});}
for(let i=1;true;++i){const elem=make.fRow(row);elem.appendChild(ctrl);const postfix=views[i-1].getPostfix();if(postfix)make.div({p:elem,cls:"rovalue",cont:postfix});if(i==views.length){break;}
make.div({p:row,cls:"rovalue",cont:sep});ctrl=views[i].create(this,label?label.clone():null);const cfg=this.getAttrCfg(views[i].attrs);const name=views[i].attrs.name;const cfgName=getProp(getProp(cfg,name),"name");addLabel(isempty(cfgName)?name:cfgName,ctrl);}
rewire(row.closest(".f-item"));return row.parentNode;}
getViewAliasPath(view){const v=view.info;if(!v.attrs.name)return null;const obj=v.obj;let type=obj._type;while(type.owner)type=type.owner;const service=type.service;if(!service)return null;let path="";if(service.group)path=`${service.group}:`;path+=`${service.name}:`;path+=`${type.title}:`;if(obj.ufe0001!=null&&obj.ufe0001!=0xffffffff){path+=`*${obj.ufe0001}:`;}
let owner=null;if(v.group){owner=v.group.getTabName();path+=`${owner}:`;}
path+=v.attrs.name;for(let i=1;i<100;++i){const a=lookupAttr(type,v.attrs.name,owner,[i]);if(a==null)break;if(a==v.attrs){if(i>1)path+=`#${i}`;break;}}
return path;}
getAttrCfg(attr){function hasAttr(a){if(a?.id===attr?.id)return true;if(Array.isArray(a.c))!!a.c?.find(hasAttr);return false;}
const view=this.views.find(v=>hasAttr(v.attrs));if(!view)return{};if(view.attrs.owner?.type==="tab"){return this.cfg[view.attrs.owner.name][view.attrs.name]??{};}else{return this.cfg[view.attrs.name]??{};}}
createLine(before){const line=make.div({cls:"f-item-sep"});before.closest("fieldset").before(line);return line;}
addSeparatorForNext(){this.needsSeparator=true;}
createSeparator(v){return this.createLine(v.row);}
createTab(v){if(typeof v.cfg.tab=="string"){v.cfg.tab={name:v.cfg.tab};}
let tabcfg=v.cfg.tab;if(!tabcfg&&v.group)tabcfg=v.group.cfg;if(!tabcfg)tabcfg=getProp(v.cfg,"tab");const tab=getTemplate("item-tab-block");const name=v.group?.getTabName()??"unknown";const button=dom.getByTag(tab,"button");button.appendChild(viewLabel(tabcfg,name));button.id=`tabid-${name}`;const path=getPath(v.obj._type);button.onclick=e=>expandTab(e,name,path);const prefs=preferences.get(path)["accordion"]??{};if(name in prefs){button.dataset.pref=prefs[name]?"expand":"fold";}
const area=dom.getByClass(tab,"acc-cont");area.id=`areaid-${name}`;area.setAttribute("aria-labelledby",button.id);button.setAttribute("aria-controls",area.id);v.row.closest("fieldset").before(tab);return tab;}
createGridCell(){const gridCell=make.div({p:this.grid});this.table=gridCell;if(!this.firstTable){this.firstTable=gridCell;}
else{this.secondTable=gridCell;}
return;}
getView(name,obj){let best=null;for(let i in this.views){const v=this.views[i].getView(name);if(v){if(!best)best=v;if(!obj||this.views[i].info.obj==obj)return v;}}
return best;}
getCondition(name){return this.conds[name];}}
function rewire(row){const label=dom.getByTag(row,"label");if(label?.childElementCount===0)return;const iel=[...row.getElementsByTagName("*")].filter(e=>e.form).filter(e=>e.id.startsWith(uniqueId.formPrefix));if(iel.length===1){const first=iel[0];if(first.tagName==="FIELDSET"){label.id=`label-for-${first.id}`;first.setAttribute("aria-labelledby",label.id);}
else label.htmlFor=first.id;}
if(iel.length>1){const s=label.firstElementChild;const l=make.el("legend");l.append(s);label.replaceWith(l);}else{label.closest("fieldset").role="none";}
const newLbl=dom.getByTag(row,"label")??dom.getByTag(row,"legend");const extra=row.querySelector(".extra > :is(.btn-plus, .btn-minus)");if(extra)newLbl.onclick=e=>{if(extra.classList.contains("btn-plus"))extra.click();}}
function expandTab(e,name,path){const btn=e.currentTarget;btn.closest(".acc").classList.toggle("folded");dom.toggleBoolAttribute(btn,"aria-expanded");if(name==="Output")return;console.assert(path,"No path given");const prefs=preferences.get(path);prefs.accordion??={};prefs.accordion[name]=e.target.ariaExpanded==="true";preferences.set("accordion",prefs.accordion,path);};class SetupController extends ViewController{constructor(cfg){super(cfg);this.active=0;this.panes=[];}
createPanes(){let views=[];let group=null;this.views.forEach(view=>{const v=view.info;if(!group){group=v.group;}else if(v.group!=group){this.panes.push(views);views=[];group=v.group;}
views.push(view);if(this.panes.length>0)view.hide();});this.panes.push(views);}
show(idx){if(this.active!=idx){let views=this.panes[this.active];views.forEach(view=>view.hide());views=this.panes[idx];views.forEach(view=>view.show());this.active=idx;}}
save(){const views=this.panes[this.active];for(let v of views){if(!v.isVisible()||!v.isEnabled())continue;if(!v.info.obj._exportObj)v.info.obj._exportObj={};v.save(v.info.obj._exportObj);const err=v.save(v.info.obj);if(err!=null){delete v.info.obj._exportObj;notifications.error(err);return false;}}
return true;}}
function LabelHolder(node){this.node=node;this.states=[];this.lastClass='';}
LabelHolder.prototype.add=function(s){this.states.push(s);};LabelHolder.prototype.destroy=function(s){for(var i in this.states){if(this.states[i]==s){this.states.splice(Number(i),1);this.changed();break;}}};LabelHolder.prototype.changed=function(){var changed=false;var error=false;var disabled=0;for(var i in this.states){if(!this.states[i].isEnabled()){++disabled;}else{if(this.states[i].isError())error=true;if(this.states[i].isChanged())changed=true;}}
var cls='';if(disabled==this.states.length){cls='disabled';}else if(error){cls='error';}else if(changed){cls='changed';}
if(this.lastClass!=cls){if(this.lastClass!='')this.node.classList.remove(this.lastClass);if(cls!='')this.node.classList.add(cls);this.lastClass=cls;}};LabelHolder.prototype.getNode=function(){return this.node;};function Label(node,holder){if(node)holder=new LabelHolder(node);this.label=holder;this.changed=false;this.error=false;this.enabled=true;this.label.add(this);}
Label.prototype.clone=function(){return new Label(null,this.label);};Label.prototype.destroy=function(){this.label.destroy(this);};Label.prototype.enable=function(en){if(this.enabled!=en){this.enabled=en;this.label.changed();}};Label.prototype.setOriginal=function(){this.changed=false;this.error=false;this.label.changed();};Label.prototype.setChanged=function(){this.changed=true;this.error=false;this.label.changed();};Label.prototype.setError=function(){this.changed=true;this.error=true;this.label.changed();};Label.prototype.setOriginalError=function(){this.changed=false;this.error=true;this.label.changed();};Label.prototype.isChanged=function(){return this.changed;};Label.prototype.isError=function(){return this.error;};Label.prototype.isEnabled=function(){return this.enabled;};Label.prototype.getNode=function(){return this.label.getNode();};class Listeners{#lstns;constructor(){this.#lstns=[];}
listen(l){this.#lstns.push(l);return this.#lstns.length===1;}
unlisten(l){for(let i in this.#lstns){if(this.#lstns[i]==l){this.#lstns.splice(Number(i),1);return this.#lstns.length===0;}}
return false;}
notify(arg,arg2){this.#lstns.forEach(l=>l(arg,arg2));}}
let hidePasswordsLstn=new Listeners();class Ticker extends Listeners{constructor(){super();const ontimer=()=>{timer(ontimer,1000);this.notify();};timer(ontimer,1000);}};function addLabel(text,elem){if(typeof text!=="string"||!text.trim())return;elem.ariaLabel=text;elem.title=text;}
class View{constructor(attrs,ctrl){this.attrs=attrs;this.ctrl=ctrl;this.visible=1;this.limit=UndefinedLimit;this.info={};}
createRow(viewCtrl,cfg,obj){const label=new Label(viewLabel(cfg,this.attrs.title?this.attrs.title:this.attrs.name));viewCtrl.addRow(label,null,this);}
create(viewCtrl,label){this.label=label;return this.ctrl;}
getPostfix(){return this.attrs.postfix;}
load(obj){}
save(obj){return null;}
isChanged(){return this.isVisible()&&this.label&&this.label.isChanged();}
getView(name){if(this.attrs.secondname==name)return this;return this.attrs.name==name?this:null;}
getName(){return this.attrs.name!=null?this.attrs.name:this.name;}
setName(n){this.name=n;}
getAttrs(){return this.attrs;}
enable(en){}
makeRO(ro){}
setLimit(limit){this.limit=limit;}
findLimit(obj){if(this.limit==UndefinedLimit){this.limit=null;if(ftype(this.attrs).deflimit(this.attrs)!=null){const limitstr=ftype(this.attrs).cfg(this.attrs,obj).limit;if(limitstr){this.limit=ftype(this.attrs).limit(this.attrs,limitstr);}}}}
isEnabled(){return!this.label||this.label.isEnabled();}
show(){if(++this.visible!=1)return;if(this.viewCtrl)this.viewCtrl.showView(this,true);}
hide(){if(--this.visible!=0)return;if(this.viewCtrl)this.viewCtrl.showView(this,false);}
readdTabs(){if(this.viewCtrl)this.viewCtrl.readdTabs();}
isVisible(){return this.visible>0;}
hasRow(){return true;}
getTabName(){return null;}
getValue(){return null;}
getVisualClass(){return null;}
isRO(){return false;}
attach(viewCtrl,obj){this.viewCtrl=viewCtrl;}
destroy(){}
listen(l){if(!this.lstns)this.lstns=new Listeners();this.lstns.listen(l);}
unlisten(l){this.lstns?.unlisten(l);}
notify(){if(this.lstns)this.lstns.notify();}}
class HiddenView extends View{constructor(attrs){super(attrs);}
createRow(viewCtrl,cfg){}
load(obj){this.value=ftype(this.attrs).get(this.attrs,obj);if(this.value==null){const str=ftype(this.attrs).tostr(this.attrs,null);this.value=ftype(this.attrs).fromstr(this.attrs,str);}
this.notify();}
getValue(){return this.value;}
isVisible(){return false;}
hasRow(){return false;}};class CustomView extends View{constructor(attrs,onAttach,cb){super(attrs);this.cb=cb;this.onAttach=onAttach;this.disabled=false;this.visible=1;}
attach(viewCtrl,obj){if(this.onAttach)this.ctrl=this.cb(viewCtrl,obj);}
createRow(viewCtrl,cfg,obj){if(!this.onAttach)this.ctrl=this.cb(viewCtrl,cfg,obj);}
isVisible(){return this.visible>0;}
show(){if(++this.visible!=1)return;if(this.ctrl)show(this.ctrl);}
hide(){if(--this.visible!=0)return;if(this.ctrl)hide(this.ctrl);}
getView(name){return null;}
hasRow(){return false;}}
class AutoSetView extends View{constructor(attrs,ro){super(attrs);this.cb=()=>{if(this.loading)return;if(!this.view.isChanged())return;if(this.attrs.confirm&&!confirm(this.attrs.confirm)){this.loading=true;this.view.load(this.obj);this.loading=false;return;}
if(this.view.save(this.obj)==null){this.loading=true;this.view.load(this.obj);this.obj._owner.setObject(this.obj);this.loading=false;}};this.view=ftype(attrs.c[0]).view(attrs.c[0],ro);this.view.listen(this.cb);}
createRow(viewCtrl,cfg,obj){this.obj=obj;this.view.createRow(viewCtrl,cfg,this.obj);}
load(obj){if(this.loading)return;this.loading=true;this.view.load(obj);this.loading=false;}
destroy(){this.view.unlisten(this.cb);this.view.destroy();}
getView(name){if(this.attrs.name==name)return this.view;return this.view.getView(name);}}
class ContextButtonView extends View{constructor(attrs){super(attrs);this.owned=false;this.obj={};if(attrs.open!=null){this.cont=findContainer(attrs.group,normalize(attrs.open),attrs.tab?normalize(attrs.tab):null);if(attrs.link.length==0)this.path=getPath(this.cont);}}
createRow(viewCtrl,cfg,obj){this.obj=obj;this.cfg=cfg;if(!this.attrs.doset&&this.cont==null)return;if(this.ctrl)return;if(this.holder){this.makeButton(viewCtrl);return;}
if(this.attrs.link.length==0){let type=obj._type;while(type.owner)type=type.owner;if(type.type=="map")return;}
this.ctrl=current.addActionButton(this.attrs.name,cfg,this.path);this.attachHandler(this.ctrl);}
create(viewCtrl,label){if(this.cont==null&&this.attrs.name==null){return make.el("li",{cls:"sep"});}
if(this.attrs.type!="doit"&&this.cont==null&&!this.attrs.doset)return null;if(this.obj){return this.makeButton(viewCtrl);}
this.holder=make.span();return this.holder;}
owner(){this.owned=true;}
attach(viewCtrl,obj,cfg){this.viewCtrl=viewCtrl;this.obj=obj;this.cfg=cfg;}
makeButton(viewCtrl){this.ctrl=make.el("li");const b=createButton(this.attrs.name,this.cfg,this.path);this.ctrl.appendChild(b);if(this.holder){this.holder.parentNode?.replaceChild(this.ctrl,this.holder);}
this.attachHandler(b);return this.ctrl;}
attachHandler(b){if(this.attrs.doset){b.onclick=e=>{if(this.disabled)return true;if(this.viewCtrl.save()){this.obj._owner.setObject(this.obj);this.viewCtrl.load();}};return;}
if(this.attrs.type=="doit"){b.onclick=e=>{if(!this.attrs.confirm||confirm(this.attrs.confirm)){let type=this.obj._type;while(type.owner)type=type.owner;const doit=new Doit(this.attrs,type.path);if(this.obj)doit.setID(this.obj.ufe0001);doit.doit();}};return;}
if(this.path&&!this.attrs.autostart)return;const confirmOpenContent=path=>{if(this.viewCtrl.isChanged()){const res=confirm('There are pending changes, is it OK to apply them?');if(res){if(this.viewCtrl.save()){this.obj._owner.setObject(this.obj);}}}
openContent(path);}
b.onclick=e=>{if(this.disabled)return true;const attrs=this.attrs;const obj=this.obj;const c=getContainer(this.cont);if(!attrs.tab||(attrs.id==null&&attrs.link.length==0)){confirmOpenContent(c.getPath());return;}
let dst;if(attrs.id){var id=getAttr(obj._type,attrs.id);dst=c.getObject(ftype(id).get(id,obj));if(!dst)return;}else{dst=c.getObject();}
if(!convert(attrs.link,obj,dst,this.viewCtrl))return;if(attrs.autostart){if(c.autostart(dst)){if(attrs.autoclose){let type=obj._type;while(type.owner)type=type.owner;confirmOpenContent(getPath(type.service));}
return;}}
const path=c.getPath(dst);if(path!=null)confirmOpenContent(path);};}
enable(en){if(this.disabled==!en)return;this.disabled=!en;this.ctrl.firstChild.disabled=!en;}
show(){if(++this.visible!=1)return;show(this.ctrl);}
hide(){if(--this.visible!=0)return;hide(this.ctrl);}
getView(name){return null;}
hasRow(){return false;}}
class ToolbarView extends View{constructor(attrs){super(attrs);this.buttons=[];}
attach(viewCtrl,obj){super.attach(viewCtrl,obj);this.attrs.c.forEach(a=>{const attrs=inherit(a);attrs.tb=true;const v=viewCtrl.createView(obj,this,attrs,true);if(v.owner){v.owner(this);this.buttons.push(v);}});}
createRow(viewCtrl,cfg,obj){viewCtrl.addRow(null,null,this);}
create(viewCtrl,label){if(this.buttons[0]&&Object.getPrototypeOf(this.buttons[0].attrs).doset){const apply=get("ApplyButton");const b=this.buttons[0].create(viewCtrl,null).firstChild;b.id=apply.id;b.className=apply.className;apply.replaceWith(b);return;}
this.ctrl=make.fRow(undefined,"ul");this.ctrl.role="toolbar";this.buttons.slice().reverse().forEach(button=>{const b=button.create(viewCtrl,null);if(b)this.ctrl.appendChild(b);});new Toolbar(this.ctrl);return this.ctrl;}
getView(name){return null;}
hasRow(){return true;}}
class TextView extends View{constructor(attrs,ctrl=make.input(),inp=new TextInput(ctrl)){super(attrs,ctrl);if(ctrl instanceof HTMLInputElement&&ctrl.form!==undefined){ctrl.id=ctrl.id||uniqueId.form(attrs);}
this.inp=inp;this.disabled=false;this.inp.onchange=value=>{this.changed(value);};}
create(viewCtrl,label){this.label=label;this.lstn=()=>{this.update();};ftype(this.attrs).listen(this.attrs,this.lstn);if(this.disabled)this.inp.setEnabled(!this.disabled);return this.ctrl;}
destroy(){ftype(this.attrs).unlisten(this.attrs,this.lstn);}
load(obj){this.findLimit(obj);this.value=ftype(this.attrs).get(this.attrs,obj);this.label.setOriginal();this.update();this.notify();}
save(obj){const val=ftype(this.attrs).fromstr(this.attrs,this.inp.getValue(),this.limit);if(val==null)return"Invalid value in "+this.getName();ftype(this.attrs).put(this.attrs,obj,val);return null;}
getValue(){return ftype(this.attrs).fromstr(this.attrs,this.inp.getValue());}
enable(en){this.label.enable(en);this.inp.setEnabled(en&&!this.disabled);}
makeRO(ro){this.disabled=ro;if(this.inp)this.enable(this.isEnabled());}
setLimit(limit){this.limit=limit;if(this.label&&this.label.isChanged()){this.changed(this.inp.getValue());}else if(this.value!=null){this.update();}}
update(){if(!this.label.isChanged()){const str=ftype(this.attrs).tostr(this.attrs,this.value);if(this.inp.getValue()!=str)this.inp.setValue(str);this.text=str;if(ftype(this.attrs).fromstr(this.attrs,str,this.limit)==null){this.label.setOriginalError();}else{this.label.setOriginal();}}}
changed(value){if(ftype(this.attrs).fromstr(this.attrs,value,this.limit)!=null){this.label.setChanged();}else{this.label.setError();}
this.notify();}}
class TextAreaView extends TextView{constructor(attrs){const inp=new TextArea();super(attrs,inp.getElement(),inp);}}
class SecretView extends TextView{constructor(attrs){const hide=!attrs.private&&hidePasswords;const field=make.input({},hide?"password":"text");field.id=uniqueId.form(attrs);super(attrs,field);}
create(viewCtrl,label){this.onHide=()=>{const parent=this.ctrl.parentNode;const next=this.ctrl.nextSibling;const value=this.inp.getValue();super.destroy();parent.removeChild(this.ctrl);const hide=this.hideBox?this.hideBox.checked:hidePasswords;this.ctrl=make.input({},hide?"password":"text");this.inp.setElement(this.ctrl);super.create(viewCtrl,this.label);if(next){parent.insertBefore(this.ctrl,next);}else{parent.appendChild(this.ctrl);}
this.inp.setValue(value);};const field=super.create(viewCtrl,label);if(this.attrs.private){const holder=getTemplate("form-secret");holder.prepend(field);this.hideBox=holder.querySelector("input[type=checkbox]");this.hideBox.id=this.attrs.id;holder.querySelector("label").htmlFor=this.attrs.id;this.onHide();this.hideBox.onchange=()=>{this.onHide();};return holder;}else{hidePasswordsLstn.listen(this.onHide);const holder=make.fRow();holder.appendChild(field);return holder;}}
destroy(){hidePasswordsLstn.unlisten(this.onHide);return super.destroy();}}
class ROTextView extends View{constructor(attrs,rows){super(attrs,make.span({cls:"rovalue"}));this.rows=rows;}
createRow(viewCtrl,cfg){if(this.attrs.name){return super.createRow(viewCtrl,cfg);}
const row=viewCtrl.createSingleItemRow();row.appendChild(this.create(viewCtrl));}
create(viewCtrl,label){this.lstn=()=>{this.update();};ftype(this.attrs).listen(this.attrs,this.lstn);return super.create(viewCtrl,label);}
destroy(){ftype(this.attrs).unlisten(this.attrs,this.lstn);}
getPostfix(){return null;}
getValue(){return this.value;}
load(obj){this.value=ftype(this.attrs).get(this.attrs,obj);this.update();this.notify();}
save(obj){return null;}
isChanged(){return false;}
enable(en){}
update(){if(this.value==null&&this.attrs.hold)return;let str=ftype(this.attrs).tostr(this.attrs,this.value);const lnk=ftype(this.attrs).hyperlink(this.attrs,this.value);if(!str)str="";if(str&&this.attrs.postfix)str+=' '+this.attrs.postfix;if(!str)str='\u00a0';if(this.rows==null){replaceText(this.ctrl,str,lnk);}else{const lines=str.split('\n');if(lines.length<=1&&!this.multiline){replaceText(this.ctrl,str,lnk);}else{clearNodes(this.ctrl);lines.forEach(l=>{make.div({p:this.ctrl,cont:l||" "});});this.multiline=true;}}}
isRO(){return true;}}
class ROSecretView extends ROTextView{constructor(attrs){super(attrs);}
create(viewCtrl,label){this.onHide=()=>this.update();hidePasswordsLstn.listen(this.onHide);return super.create(viewCtrl,label);}
destroy(){hidePasswordsLstn.unlisten(this.onHide);return super.destroy();}
update(){var v=this.value;if(hidePasswords&&v)v=v.replace(/./g,'*');if(v&&v.length>0){replaceText(this.ctrl,v);}else{replaceText(this.ctrl,'\u00a0');}}}
class ROPreTextView extends ROTextView{constructor(attrs){super(attrs,1);this.ctrl.className="roprevalue";}
update(){if(this.value==null&&this.attrs.hold)return;const str=ftype(this.attrs).tostr(this.attrs,this.value)??"";this.ctrl.replaceChildren(make.el("pre",{p:this.ctrl,cont:str}));}}
class ROQRView extends ROTextView{constructor(attrs){super(attrs,1);this.ctrl.className="roqrvalue";}
update(){if(this.value==null&&this.attrs.hold)return;let str=ftype(this.attrs).tostr(this.attrs,this.value)??"";str=str.replaceAll(" ","██");str=str.replaceAll("#","  ");this.ctrl.replaceChildren(make.el("pre",{p:this.ctrl,cont:str}));}}
class ROOptTextView extends ROTextView{constructor(attrs){super(attrs);}
update(){if(this.value!=null&&ftype(this.attrs).hasValue(this.attrs,this.value)){let str=ftype(this.attrs).tostr(this.attrs,this.value);if(str&&this.attrs.postfix)str+=" "+this.attrs.postfix;replaceText(this.ctrl,str);}else{replaceText(this.ctrl,'\u00a0');}}}
class NumBarView extends View{constructor(attrs){const g=createGraphic(null,160,20,160,20);if(g){const c=g.canvas;c.style.border="1px solid";c.style.borderColor="#ccc #fff #fff #ccc";c.style.borderColor="#ccc #fff #fff #ccc";c.style.padding="1px 0 0 1px";c.style.margin="2px 0 0 0";c.style.width="160px";g.strokeWidth=3;}
super(attrs,g?.canvas);this.g=g;this.values=[];}
load(obj){this.values.push(0);const t=ftype(this.attrs);let val=t.get(this.attrs,obj);if(!t.hasValue(this.attrs,val))val=null;this.values.push([val]);if(this.values.length>200)this.values.splice(0,2);this.update();this.notify();}
update(){if(this.g?.canvas){drawBars(this.g,this.values,this.attrs.offset,this.attrs.max,this.attrs.colors);}}
isRO(){return true;}}
class OptView extends View{constructor(attrs,view=new TextView(attrs)){super(attrs);view.setName(attrs.name);this.view=view;this.opt=true;}
createRow(viewCtrl,cfg){const label=new Label(viewLabel(cfg,this.attrs.name));viewCtrl.addRow(label,this.createButton(),this);}
create(viewCtrl,label){this.label=label;const c=make.fRow();this.inp=this.view.create(viewCtrl,label.clone());c.appendChild(this.inp);if(this.attrs.postfix){dom.appendTxt(c,this.attrs.postfix);}else if(this.attrs.c&&this.attrs.c[0].postfix){dom.appendTxt(c,this.attrs.c[0].postfix);}
if(this.attrs.showdef){c.style.position="relative";this.curtain=make.div({p:c,cls:"curtain"});this.defval=make.span({p:this.curtain,cls:"defval"});}
this.ctrl=c;if(this.bttn==null){c.style.display="inline";const r=make.span();r.appendChild(this.createButton());r.appendChild(c);return r;}
return c;}
createButton(){this.bttn=make.button({cls:"btn btn-plus"});this.bttn.ariaPressed="false";this.bttn.onclick=()=>{if(this.label.isEnabled()){if(!this.opt){this.showCurtain();}else{this.hideCurtain();this.inp.focus();}
this.label.setChanged();}};return this.bttn;}
getPostfix(){return null;}
getView(name){if(this.attrs.name==name)return this;return this.view.getView(name);}
load(obj){const t=ftype(this.attrs);const val=reduceIfNullish(t.get(this.attrs,obj));if(this.limit==undefined){this.limit=null;if(t.deflimit(this.attrs)!=null){var limitstr=ftype(this.attrs).cfg(this.attrs,obj).limit;if(limitstr)this.limit=t.limit(this.attrs,limitstr);}}
this.view.load(obj);if(val!=null&&t.hasValue(this.attrs,val)){this.hideCurtain();}else{if(val!=null&&t.deferred(this.view.attrs)){const l=()=>{if(val!=null&&t.hasValue(this.attrs,val)){this.hideCurtain();this.view.unlisten(l);}}
this.view.listen(l);}
if(this.attrs.showdef&&obj._type.def){let str="";const d=obj[obj._type.def];if(d){let val=t.get(this.attrs,d);if(val)str=t.tostr(this.attrs,val);}
const mask=str&&this.attrs.c[0]?.type==="secret"&&hidePasswords;replaceText(this.defval,mask?"••••••••":str);}
if(this.attrs?.optval===val||!obj[this.attrs.id])this.showCurtain()
else if(this.attrs.def&&this.attrs.def!=BADID)this.hideCurtain()
else this.showCurtain();}
this.label.setOriginal();}
save(obj){if(this.attrs.type=="opt"){ftype(this.attrs).put(this.attrs,obj,this.opt?null:types.opt.VALUE);}else if(this.opt){ftype(this.attrs).put(this.attrs,obj,null);}
if(!this.opt)return this.view.save(obj);return null;}
getValue(){if(this.attrs.type=="opt")return!this.opt;return!this.opt?this.view.getValue():(this.attrs.def||0);}
show(){this.view.show();super.show();}
hide(){this.view.hide();super.hide();}
enable(en){if(!this.opt)this.view.enable(en);this.label.enable(en);this.setButtonState();}
makeRO(ro){this.bttn.disabled=ro;this.view.makeRO(ro);this.enable(this.isEnabled());}
setLimit(limit){this.limit=limit;if(!this.opt)this.view.setLimit(limit);}
isChanged(){if(!this.opt&&this.view.isChanged())return true;return super.isChanged();}
showCurtain(){this.view.enable(false);if(this.curtain)this.curtain.style.visibility="visible";this.inp.style.visibility="hidden";if(this.curtain?.parentElement?.offsetHeight){this.curtain.style.height=this.defval.style.lineHeight=`${this.curtain.parentElement.offsetHeight}px`;}
this.view.setLimit(null);this.opt=true;this.setButtonState();this.notify();}
hideCurtain(){this.view.enable(this.label.isEnabled());if(this.curtain)this.curtain.style.visibility="hidden";this.inp.style.visibility="visible";this.view.setLimit(this.limit);this.opt=false;this.setButtonState();this.notify();}
setButtonState(){if(this.opt){this.bttn.classList.replace("btn-minus","btn-plus");this.bttn.ariaPressed="false";}
else{this.bttn.classList.replace("btn-plus","btn-minus");this.bttn.ariaPressed="true";}
this.bttn.disabled=!this.label.isEnabled()||!this.isEnabled();}
destroy(){this.view.destroy();}}
function getOptionIndex(ctrl,id){for(var i=0;i<ctrl.options.length;++i){if(ctrl.options[i].value==id)return i;}
return-1;}
function binarySearch(a,val,lessCmp){let start=0;let end=a.length;while(end>0){const half=end>>1;const middle=start+half;if(lessCmp(a[middle],val)){start=middle+1;end=end-half-1;}else{end=half;}}
return start;}
function fillOptions(ctrl,values,sort,obj,viewCtrl,filter,cb){const type=enm[values.type];const newOpt=(id)=>{const opt=make.el("option");opt.text=type.toString(id,values,obj);opt.value=String(id);let idx=ctrl.options.length;if(sort){const less=(a,b)=>lexicographicalLess(a.text,b.text);idx=binarySearch(ctrl.options,opt,less);}
try{const next=idx<ctrl.options.length?ctrl.options[idx]:null;ctrl.add(opt,next);}catch(e){ctrl.insertBefore(opt,ctrl.childNodes[idx]);}
return idx;};const lstn=(nobj,more)=>{const id=nobj.ufe0001;let idx=getOptionIndex(ctrl,id);if(nobj.ufe0013){if(idx!=-1)ctrl.removeChild(ctrl.options[idx]);}else if(idx!=-1){const str=type.toString(id,values,obj);if(filter&&!filter(str)){ctrl.removeChild(ctrl.options[idx]);}else{if(ctrl.options[idx].text!==str)ctrl.options[idx].text=str;}}else{if(filter){if(!filter(type.toString(id,values,obj)))return;}
const idx=newOpt(id);if(cb)cb(id,idx,more);}};type.listen(values,lstn,viewCtrl,obj);const map=type.getMap(values,obj);for(let i in map){if(map[i]!=""&&(!filter||filter(map[i])))newOpt(Number(i));}
return lstn;}
class Combobox{constructor(attrs){this.attrs=attrs;this.holder=getTemplate("form-combobox");this.fld=dom.getByTag(this.holder,"input");this.list=dom.getByTag(this.holder,"ul");this.btn=dom.getByTag(this.holder,"button");this.active=null;this.maxHeight=0;this.cnt=get("content");this.onselect=null;this.fld.id=uniqueId.form(attrs);dom.appendToAttr(this.list,"id",this.fld.id);this.fld.setAttribute("aria-controls",this.list.id);this.btn.setAttribute("aria-controls",this.list.id);this.fld.onkeydown=e=>this.#handleKeypress(e);this.fld.onclick=()=>this.#expand();this.list.onclick=e=>{this.#fold();if(e.target instanceof HTMLLIElement){this.#apply(e.target);}}
this.holder.addEventListener("focusout",e=>{const target=e.relatedTarget;if(this.holder.contains(target))return;this.blocked=false;this.#fold();});this.btn.onclick=()=>{if(this.list.hidden)this.#expand();else this.#fold();this.fld.focus();}
this.blocked=false;}
fillList(obj,filter,cb){const values=this.attrs.values;const type=enm[values.type];const sort=!this.attrs.sortbyvalue;const newOpt=id=>{const opt=make.el("li",{cont:type.toString(id,values,obj)});opt.role="option";opt.dataset.id=id;opt.id=`dropdown-${this.fld.id}-option-${id}`;const less=(a,b)=>a.textContent<b.textContent;const idx=sort?binarySearch(this.list.children,opt,less):this.list.childElementCount;this.list.insertBefore(opt,this.list.childNodes[idx]);return idx;};const lstn=(nobj,more)=>{const id=nobj.ufe0001??0xffffffff;const value=nobj.sfe0010||type.toString(id,values,obj);const li=Array.from(this.list.children).find(e=>e.textContent===value);if(nobj.ufe0013){if(li)this.list.removeChild(li);}else if(li){if(!filter(value))this.list.removeChild(li);else if(li.textContent!==value)li.textContent=value;}else{if(!filter(value))return;if(cb)cb(id,newOpt(String(id)),more);}};const map=type.getMap(values,obj);for(const i in map){if(map[i]&&filter(map[i]))newOpt(i);}
return lstn;}
enable(en){this.btn.disabled=!en;}#handleKeypress(event){switch(event.key){case"ArrowUp":if(this.list.hidden){this.#expand();if(this.active){this.#scrollInto(this.active);this.#selectPrev();}
else this.#selectLast();}else{if(!this.active)this.#selectLast();else this.#selectPrev();}
break;case"ArrowDown":if(this.list.hidden){this.#expand();if(event.altKey)break;if(this.active){this.#scrollInto(this.active);this.#selectNext();}
else this.#selectFirst();}else{if(!this.active)this.#selectFirst();else this.#selectNext();}
break;case"Enter":if(this.active){this.#apply(this.active);}
this.#fold();break;case"Escape":this.#fold();break;case"Control":case"Alt":case"Shift":break;default:this.#select(null);return;}
event.stopPropagation();event.preventDefault();}#getActiveItem(){return[...this.list.children].find(li=>li.textContent===this.fld.value.trim())??null;}#select(elem){if(this.active)this.active.ariaSelected=null;if(elem){this.active=elem;this.active.ariaSelected="true";this.fld.setAttribute("aria-activedescendant",elem.id);this.#scrollInto(elem);}else{this.active=null;this.fld.removeAttribute("aria-activedescendant");}}#selectFirst(){const first=this.list.children[0];this.#select(first);}#selectLast(){const last=[...this.list.children].at(-1);this.#select(last);}#selectPrev(){const prev=this.active.previousElementSibling??[...this.list.children].at(-1)??null;this.#select(prev);}#selectNext(){const next=this.active.nextElementSibling??this.list.children[0]??null;this.#select(next);}#computeList(){if(!this.cnt)return;const cntr=this.cnt.getBoundingClientRect();const inpr=this.fld.getBoundingClientRect();const topSpace=inpr.top-cntr.top;const bottomSpace=cntr.bottom-inpr.bottom;if(bottomSpace<this.maxHeight&&topSpace>bottomSpace){this.list.classList.add("dropup");if(topSpace<this.maxHeight){this.list.style.maxHeight=`${Math.floor(topSpace)}px`;}}else{this.list.classList.remove("dropup");if(bottomSpace<this.maxHeight){this.list.style.maxHeight=`${Math.floor(bottomSpace)}px`;}}}#expand(){if(!this.list.hidden)return;this.fld.ariaExpanded="true";this.btn.ariaExpanded="true";this.blocked=true;this.#select(this.#getActiveItem());if(this.cnt)window.onresize=this.cnt.onscroll=()=>this.#computeList();show(this.list);this.maxHeight=parseInt(window.getComputedStyle(this.list).getPropertyValue("max-height"));if(this.list.offsetHeight<this.maxHeight)this.maxHeight=this.list.offsetHeight;this.#computeList();}#fold(){if(this.list.hidden)return;hide(this.list);this.fld.ariaExpanded="false";this.btn.ariaExpanded="false";this.#select(null);this.blocked=false;this.list.classList.remove("dropup");this.list.style.maxHeight="";if(this.cnt)window.onresize=this.cnt.onscroll=null;}#apply(elem){const values=this.attrs.values;const val=enm[values.type].toString(elem.dataset.id,values);if(this.fld.value===val)return;if(this.onselect)this.onselect(val);}#scrollInto(elem){const list=this.list;if(elem.offsetTop<list.scrollTop){list.scrollTo(0,elem.offsetTop-3);}
const elemOffsetBottom=list.scrollHeight-elem.offsetTop-elem.offsetHeight;const listScrollBottom=list.scrollHeight-list.scrollTop-list.offsetHeight;if(elemOffsetBottom<listScrollBottom){list.scrollTo(0,elem.offsetTop+elem.offsetHeight-list.offsetHeight+5);}}}
function refillOptions(lstn,values,obj){const type=enm[values.type];const map=type.getMap(values,obj);for(const i in map){if(map[i])lstn({ufe0001:Number(i)},false);}}
class RadioView extends View{constructor(attrs){super(attrs);this.id='radio'+(++RadioView.prototype.count);}
create(viewCtrl,label){this.label=label;this.ctrl=make.el("fieldset",{cls:"check-group"});this.ctrl.id=uniqueId.form(this.attrs);return this.ctrl;}
load(obj){this.findLimit(obj);if(this.radios==null)this.addButtons();const oldValue=this.value;this.value=ftype(this.attrs).get(this.attrs,obj);if(this.value==null)this.value=this.attrs.def||0;if(!this.radios[this.value])this.value=getfirst(this.radios);if(this.value!=null){this.radios[this.value].checked=1;this.label.setOriginal();}
if(oldValue!=this.value)this.notify();}
save(obj){ftype(this.attrs).put(this.attrs,obj,this.getValue());return null;}
enable(en){this.label.enable(en);var disabled=!en||this.disabled;for(var i in this.radios)this.radios.disabled=disabled;}
makeRO(ro){this.disabled=ro;if(this.ctrl)this.enable(this.isEnabled());}
getValue(){return this.value;}
updateValue(){this.updating=true;for(var i in this.radios){if(this.radios[i].checked){this.value=parseInt(i);break;}}
this.updating=false;}
addButtons(){const values=this.attrs.values;this.radios={};const map=enm[values.type].getMap(values,null);for(let i in map){if(map[i]=='')continue;this.addButton(i,map[i]);}}
addButton(id,name){if(this.limit&&this.limit.prefixes&&!(Number(hasOneOfPrefixes(this.limit.prefixes,name))^this.limit.invert)){return;}
const uniqueId=`${this.attrs.id}-${id}`;const holder=make.span({p:this.ctrl,cls:"check"});const btn=make.input({p:holder},"radio");btn.name=this.id;btn.id=uniqueId;make.label({p:holder,cont:name},uniqueId);btn.onchange=()=>{if(!this.updating){this.label.setChanged();this.updateValue();this.notify();}};this.radios[id]=btn;}}
RadioView.prototype.count=0;class EnumView extends View{constructor(attrs){super(attrs);this.disabled=false;}
createRow(viewCtrl,cfg,obj){function isbigger(l,sz){for(let i in l){if(--sz<0)return false;}
return true;}
if(this.attrs.selector){if(shouldHide(cfg,this.attrs.hidebydefault))return;const values=this.attrs.values;const label=new Label(viewLabel(cfg,this.attrs.name));let c=null;const map=enm[values.type].getMap(values,obj);if(isbigger(map,1)){c=document.createTextNode(enm[values.type].toString(getfirst(map),values,obj));}else{c=make.label({cont:"Template"});const sel=this.create(viewCtrl,label);sel.style.marginLeft="var(--space-sm)";c.appendChild(sel);}
current.setCustomTitle(this.attrs.postfix,c);}else{super.createRow(viewCtrl,cfg,obj);}}
create(viewCtrl,label){this.label=label;this.viewCtrl=viewCtrl;this.ctrl=make.el("select");if(viewCtrl)this.ctrl.id=uniqueId.form(this.attrs);this.ctrl.size=1;this.ctrl.onchange=()=>{this.value=null;this.autoSelected=false;this.label.setChanged();this.notify();};if(this.disabled)this.ctrl.disabled=true;return this.ctrl;}
load(obj){this.findLimit(obj);if(this.ctrl&&!this.lstn){const filter=str=>{if(this.attrs.selector&&skin["Quick Set"][str]?._hide)return false;if(!this.limit||!this.limit.prefixes)return true;return!!(Number(hasOneOfPrefixes(this.limit.prefixes,str))^this.limit.invert);};this.obj=obj;this.lstn=fillOptions(this.ctrl,this.attrs.values,!this.attrs.sortbyvalue,obj,this.viewCtrl,filter,(id,idx,more)=>{this.fillingIn=more;if(this.value==id){this.autoSelected=true;this.ctrl.selectedIndex=idx;this.notify();}else if(this.value!=null&&!this.autoSelected&&!more){this.autoSelected=true;this.ctrl.selectedIndex=0;this.notify();}});}
let oldValue=this.value;this.value=ftype(this.attrs).get(this.attrs,obj);if(this.value==null)this.value=this.attrs.def||0;if(this.ctrl){const idx=getOptionIndex(this.ctrl,this.value);if(this.ctrl.selectedIndex!=idx&&idx!=-1){this.ctrl.selectedIndex=idx;oldValue=this.value;this.notify();}
if(idx!=-1){this.label.setOriginal();this.autoSelected=true;}else if(this.ctrl.options.length>0&&!this.fillingIn){this.autoSelected=true;this.ctrl.selectedIndex=0;oldValue=this.value;this.notify();}}
if(oldValue!=this.value)this.notify();}
save(obj){if(!this.ctrl)return null;const idx=this.ctrl.selectedIndex;if(idx!=-1){ftype(this.attrs).put(this.attrs,obj,parseInt(this.ctrl.options[idx].value));return null;}
return"Invalid value in "+this.getName();}
enable(en){if(this.ctrl){this.label.enable(en);this.ctrl.disabled=!en||this.disabled;}}
makeRO(ro){if(this.ctrl){this.disabled=ro;if(this.ctrl)this.enable(this.isEnabled());}}
setLimit(limit){this.limit=limit;if(this.lstn)refillOptions(this.lstn,this.attrs.values,this.obj);}
getValue(){if(!this.ctrl)return this.value;const idx=this.ctrl.selectedIndex;if(idx==-1)return 0;return parseInt(this.ctrl.options[idx].value);}
destroy(){if(this.lstn){enm[this.attrs.values.type].unlisten(this.attrs.values,this.lstn,this.obj);}}}
class ComboView extends TextView{constructor(attrs){const combobox=new Combobox(attrs);super(attrs,combobox.holder,new TextInput(combobox.fld));this.combobox=combobox;this.combobox.onselect=val=>{this.inp.setValue(val);this.changed(val.toString());}}
create(viewCtrl,label){this.label=label;this.viewCtrl=viewCtrl;if(this.disabled)this.enable(false);return this.ctrl;}
load(obj){if(!this.lstn){this.obj=obj;const filter=str=>{if(!this.limit)return true;return ftype(this.attrs).fromstr(this.attrs,str??"",this.limit)!=null;};this.lstn=this.combobox.fillList(obj,filter,(id,idx)=>this.update());const vals=this.attrs.values;enm[vals.type].listen(vals,this.lstn,this.viewCtrl,obj);}
this.value=ftype(this.attrs).get(this.attrs,obj);super.load(obj);}
enable(en){super.enable(en);this.combobox.enable(en);}
destroy(){if(this.lstn){enm[this.attrs.values.type].unlisten(this.attrs.values,this.lstn);}}
setLimit(limit){super.setLimit(limit)
if(this.lstn&&!this.combobox.blocked){refillOptions(this.lstn,this.attrs.values,this.obj);}}
changed(value){super.changed(value);}}
class SetView extends View{constructor(attrs,ro){super(attrs);this.boxes={};this.items=0;this.disabled=ro;}
create(viewCtrl,label){this.label=label;this.viewCtrl=viewCtrl;this.ctrl=make.el("fieldset",{cls:"check-group"});this.ctrl.id=uniqueId.form(this.attrs);return this.ctrl;}
getValue(){let set=0;for(let i in this.boxes){if(this.boxes[i].checked)set|=1<<parseInt(i);}
return set;}
load(obj){this.findLimit(obj);this.obj=obj;if(!this.lstn){const values=this.attrs.values;const type=enm[values.type];this.lstn=(obj)=>{var id=obj.ufe0001;if(!this.boxes[id])this.addItem(id,obj);};type.listen(values,this.lstn,this.viewCtrl);var map=type.getMap(values,obj);for(let i in map){if(map[i]!="")this.addItem(i,obj);}}
this.value=ftype(this.attrs).get(this.attrs,obj);if(this.value==null){if(this.attrs.def){this.value=[this.attrs.def];}else if(this.attrs.policydef){this.value=[sysres.policy,~sysres.policy];}}
if(this.value){for(let i in this.boxes){this.boxes[i].checked=(this.value[0]&(1<<parseInt(i)))!=0;}}
this.label.setOriginal();this.notify();}
save(obj){let set=0;let unset=0;for(let i in this.boxes){if(this.boxes[i].checked){set|=1<<parseInt(i);}else{unset|=1<<parseInt(i);}}
ftype(this.attrs).put(this.attrs,obj,[set,unset]);return null;}
enable(en){for(let i in this.boxes)this.boxes[i].disabled=!en||this.disabled;this.label.enable(en);}
makeRO(ro){this.disabled=ro;this.enable(this.isEnabled());}
setLimit(limit){this.limit=limit;if(this.value){for(let i in this.boxes){if(this.boxes[i].checked)this.value[0]|=1<<parseInt(i);else this.value[0]&=~(1<<parseInt(i));}}
this.items=0;if(this.ctrl){clearNodes(this.ctrl);const values=this.attrs.values;const map=enm[values.type].getMap(values,this.obj);for(let i in map){if(map[i]!="")this.addItem(i,this.obj);}}}
destroy(){if(this.lstn){enm[this.attrs.values.type].unlisten(this.attrs.values,this.lstn);}}
addItem(id,obj){var values=this.attrs.values;var type=enm[values.type];var str=type.toString(id,values,obj);if(this.limit&&this.limit.prefixes&&!(Number(hasOneOfPrefixes(this.limit.prefixes,str))^this.limit.invert)){return;}
if(!this.attrs.small)this.ctrl.style.setProperty("--columns",this.attrs.columns||2);const holder=make.span({p:this.ctrl,cls:"check"});const uniqueId=`${this.attrs.id}-${id}`;const box=make.input({p:holder},"checkbox");box.id=uniqueId;make.label({p:holder,cont:str},uniqueId);box.checked=this.value&&((this.value[0]&(1<<id))!=0);if(this.disabled)box.disabled=true;box.onchange=()=>{this.label.setChanged();this.notify();};this.boxes[id]=box;++this.items;}}
class BoolView extends View{constructor(attrs,ro){super(attrs);this.ro=ro;this.disabled=false;}
create(viewCtrl,label){this.label=label;if(!this.ctrl){this.ctrl=make.fRow();this.chk=make.input({p:this.ctrl,cls:"switch"},"checkbox");this.chk.id=uniqueId.form(this.attrs);this.chk.onchange=()=>{this.label.setChanged();this.notify();};if(this.ro||this.disabled)this.chk.disabled=true;}
if(!this.label){const l=make.span({cont:this.attrs.name});this.ctrl.appendChild(l);this.label=new Label(l);}
return this.ctrl;}
load(obj){const val=ftype(this.attrs).get(this.attrs,obj)??this.attrs.def;this.setValue(!!val);this.label.setOriginal();this.notify();}
save(obj){ftype(this.attrs).put(this.attrs,obj,this.chk.checked?1:0);return null;}
enable(en){this.chk.disabled=!en||this.disabled||this.ro;this.label.enable(en);}
makeRO(ro){this.disabled=ro;if(this.chk)this.enable(this.isEnabled());}
isRO(){return this.ro;}
getValue(){return this.chk.checked?1:0;}
setValue(val){this.chk.checked=val;}}
class NotView extends BoolView{constructor(attrs,ro,view){super(attrs,ro);this.view=view;}
create(viewCtrl,label,ctrl){this.ctrl=make.fRow();this.chk=make.input({p:this.ctrl,cls:"btn btn-not"},"checkbox");this.chk.ariaLabel=`Invert ${label.label.node.textContent} field value`;this.chk.title=this.chk.ariaLabel;this.setValue(false);this.chk.onclick=()=>{if(!this.chk.disabled){this.setValue(!this.value);this.label.setChanged();this.notify();}};if(this.ro||this.disabled)this.chk.disabled=true;super.create(viewCtrl,label);const target=this.view.create(viewCtrl,label);if(target.id)this.chk.setAttribute("aria-controls",target.id);this.ctrl.appendChild(target);return this.ctrl;}
getView(name){if(this.attrs.name==name)return this;return this.view.getView(name);}
load(obj){const val=ftype(this.attrs).get(this.attrs,obj);this.setValue(val?val[0]:0);this.label.setOriginal();this.view.load(obj);this.notify();}
save(obj){ftype(this.attrs).put(this.attrs,obj,this.value?1:0);this.view.save(obj);return null;}
enable(en){this.view.enable(en);this.chk.disabled=!en||this.disabled||this.ro;this.label.enable(en);}
makeRO(ro){this.view.makeRO(ro);super.makeRO(ro);}
setLimit(limit){this.view.setLimit(limit);}
show(){this.view.show();super.show();}
hide(){this.view.hide();super.hide();}
destroy(){this.view.destroy();}
getValue(){return this.value;}
setValue(val){this.value=val;this.chk.checked=val;}
isChanged(obj){return View.prototype.isChanged.call(this)||this.view.isChanged();}}
class MultiView extends View{constructor(attrs,ro,createView){super(attrs,make.fCol(undefined,"fieldset"));this.ro=ro;this.createView=createView;this.values=[];this.rows=[];this.zeroRow=null;this.hidden=false;this.lstn=()=>{this.updateValue();this.notify();};}
createRow(viewCtrl,cfg,obj){if(this.ro)return View.prototype.createRow.call(this,viewCtrl,cfg,obj);const label=new Label(viewLabel(cfg,this.attrs.name));viewCtrl.addRow(label,-1,this);}
create(viewCtrl,label){this.label=label;this.viewCtrl=viewCtrl;this.ctrl.id=uniqueId.form(this.attrs);return this.ctrl;}
load(obj){this.findLimit(obj);const vals=ftype(this.attrs).get(this.attrs,obj)??[];while(this.rows.length>vals.length){this.removeRow(this.rows[0]);}
this.rows.forEach((row,i)=>row.view.load(vals[i]));while(this.rows.length<vals.length&&this.rows.length<(this.attrs.max||30)){this.addRow(null,vals[this.rows.length]);}
if(this.rows.length==0){this.addZeroRow();if(this.attrs.hideonempty&&!this.hidden){this.hide();this.hidden=true;}}else{this.removeZeroRow();if(this.attrs.hideonempty&&this.hidden){this.show();this.hidden=false;}}
this.label.setOriginal();}
updateValue(){for(let i in this.rows){if(this.rows[i].view.save(this.values[i])!=null){return"Invalid value in "+this.getName();}
delete this.values[i].Uff0014;}
return null;}
save(obj){const err=this.updateValue();if(err!=null)return err;if(this.attrs.opt&&this.values.length==0){ftype(this.attrs).remove(this.attrs,obj);}else{ftype(this.attrs).put(this.attrs,obj,this.values);}
return null;}
isChanged(){if(this.label.isChanged())return true;return this.rows.some(row=>row.view.isChanged());}
getValue(){return this.values;}
enable(en){this.label.enable(en);const disabled=this.disabled||!en;const add=!disabled&&this.rows.length<(this.attrs.max||30);for(const r of this.rows){r.view.enable(en);r.view.makeRO(this.disabled);if(r.addBtn){r.addBtn.disabled=!add;}
if(r.removeBtn){r.removeBtn.disabled=disabled;}}
if(this.zeroRow){this.zeroAddBtn.disabled=disabled?true:false;}}
makeRO(ro){this.disabled=ro;this.enable(this.isEnabled());}
setLimit(limit){this.limit=limit;this.rows.forEach(row=>row.view.setLimit(limit));}
show(){this.rows.forEach(row=>row.view.show());super.show();}
hide(){this.rows.forEach(row=>row.view.hide());super.hide();}
addRow(before,value){const row={};row.node=make.fRow();const value_slot=make.fRow(row.node);const button_slot=make.fRow(row.node);row.label=this.label.clone();row.view=this.createView();value_slot.appendChild(row.view.create(this.viewCtrl,row.label));const payloadId=value_slot.querySelector("[id]")?.id;row.view.setLimit(this.limit);if(this.attrs.c[0].postfix&&!this.ro){dom.appendTxt(value_slot,this.attrs.c[0].postfix);}
row.view.load(value);const inp=row.view.view?.ctrl??row.view.ctrl;inp.ariaLabel=`${this.attrs.name} instance`;row.view.listen(this.lstn);if(!this.ro){row.removeBtn=make.button({p:button_slot,cls:"btn btn-minus"});row.removeBtn.ariaLabel="Remove previous field";if(payloadId)row.removeBtn.setAttribute("aria-controls",payloadId);row.removeBtn.onclick=()=>{if(this.label.isEnabled()){this.removeRow(row);}};row.addBtn=make.button({p:button_slot,cls:"btn btn-plus"});row.addBtn.ariaLabel="Add new field after";row.addBtn.onclick=()=>{if(this.label.isEnabled()&&this.rows.length<(this.attrs.max||30)){const idx=this.findRow(row);this.addRow(idx+1<this.rows.length?this.rows[idx+1]:null,{});}};}
if(before){this.ctrl.insertBefore(row.node,before.node);}else{this.ctrl.appendChild(row.node);}
const idx=before?this.findRow(before):this.rows.length;this.values.splice(idx,0,value);this.rows.splice(idx,0,row);this.label.setChanged();this.enable(this.label.isEnabled());this.updateValue();this.notify();}
removeRow(row){const idx=this.findRow(row);row.label.destroy();row.view.unlisten(this.lstn);row.view.destroy();this.ctrl.removeChild(row.node);this.values.splice(idx,1);this.rows.splice(idx,1);if(this.rows.length==0)this.addZeroRow();this.label.setChanged();this.enable(this.label.isEnabled());this.updateValue();this.notify();}
findRow(row){const idx=this.rows.indexOf(row);return(idx===-1)?null:idx;}
addZeroRow(){if(this.zeroRow||this.ro)return;this.zeroRow=make.div({p:this.ctrl,cls:"extras"});this.zeroAddBtn=make.button({p:this.zeroRow,cls:"btn btn-plus"});this.zeroAddBtn.ariaLabel=`Add new ${this.attrs.name ?? ""} field`;this.zeroAddBtn.onclick=()=>{if(this.label.isEnabled()){this.removeZeroRow();this.addRow(0,{});}};}
removeZeroRow(){if(this.zeroRow){this.ctrl.removeChild(this.zeroRow);this.zeroRow=null;}}
destroy(){this.rows.forEach(row=>row.view.unlisten(this.lstn));}}
class TupleView extends View{constructor(attrs){super(attrs);this.views=[];}
createRow(viewCtrl,cfg,obj){this.attrs.c.forEach(a=>{const view=viewCtrl.newView(obj,a,false,this.isRO()||a.ro);if(view){view.attach(viewCtrl,obj,cfg);this.views.push(view);}});if(this.views.length==0)return;this.label=null;if(this.attrs.name){this.label=new Label(viewLabel(cfg,this.attrs.name));}
viewCtrl.addRow(this.label,null,this.views,this.attrs.sep??"/");}
create(viewCtrl,label){this.label=label;this.ctrl=make.fRow();let first=true;this.attrs.c.forEach(a=>{if(!first)make.div({p:this.ctrl,cls:"rovalue",cont:this.attrs.sep??"/"});const view=viewCtrl.newView(null,a,false,this.isRO()||a.ro);if(view){view.attach(viewCtrl,null);const fld=view.create(viewCtrl,label?label.clone():null);const cfg=viewCtrl.getAttrCfg(a);const cfgName=getProp(getProp(cfg,a.name),"name");addLabel(isempty(cfgName)?name:cfgName,fld);this.ctrl.appendChild(fld);const postfix=view.getPostfix();if(postfix)dom.appendTxt(this.ctrl,postfix);this.views.push(view);first=false;}});return this.ctrl;}
getView(name){this.views.forEach(v=>{const view=v.getView(name);if(view)return view;});return null;}
load(obj){this.views.forEach(view=>view.load(obj));}
save(obj){for(let i in this.views){const err=this.views[i].save(obj);if(err!=null)return err;}
return null;}
isChanged(obj){return this.views.some(view=>view.isChanged());}
enable(en){this.views.forEach(view=>view.enable(en));this.label.enable(en);}
makeRO(ro){this.views.forEach(view=>view.makeRO(ro));}
setLimit(limit){const limits=limit?.limits??[];this.views.forEach((view,i)=>view.setLimit(limits[i]));}
show(){this.views.forEach(view=>view.show());super.show();}
hide(){this.views.forEach(view=>view.hide());super.hide();}
destroy(){this.views.forEach(view=>view.destroy());}}
class StatusView extends View{constructor(attrs){super(attrs);this.obj={};this.obj._type=attrs;attrs.ro=1;}
attach(viewCtrl,obj){this.viewCtrl=viewCtrl;this.attrs.owner=obj._type;viewCtrl.addAllViews(this.obj);}
load(obj){this.id=obj.ufe0001;if(this.id!=null||obj._type.type==="item"){this.fetch(obj._type.path);}}
destroy(){if(this.timer!=null)cancelTimer(this.timer);this.dead=true;}
fetch(path){if(this.onreply)return;const req={};req.Uff0001=this.attrs.path||path;req.uff0007=this.attrs.cmd||0xfe0010;req.ufe0001=this.id;this.onreply=rep=>{if(this.dead)return;if(rep.ufe0003){req.ufe0003=rep.ufe0003;post(req,this.onreply);}else{if(this.timer==null){this.timer=timer(()=>{this.onreply=undefined;this.timer=null;this.fetch(path);},this.attrs.autorefresh||2000);}}
update(this.obj,rep);this.viewCtrl.update();};post(req,this.onreply);}
hasRow(){return false;}}
class GroupView extends TupleView{constructor(attrs,ro){super(attrs);this.ro=ro;this.open=true;this.changed=false;}
attach(viewCtrl,obj){this.attrs.c.forEach(c=>{const view=viewCtrl.createView(obj,this,c,this.ro);if(view)this.views.push(view);});}
createRow(viewCtrl,cfg,obj){this.bttn=make.button({cls:"btn btn-down expanded"});this.bttn.ariaPressed="false";this.bttn.onclick=()=>{this.showGroup(!this.open);this.changed=true;};this.label=new Label(viewLabel(cfg,this.attrs.name));viewCtrl.addRow(this.label,this.bttn,this);}
create(viewCtrl,label,ctrl){this.bttn.id=uniqueId.form(this.attrs);this.bttn.ariaDescription=`Toggles display of ${this.attrs.name} group`;return ctrl??make.span();}
load(obj){TupleView.prototype.load.call(this,obj);this.showGroup(ftype(this.attrs).get(this.attrs,obj));this.changed=false;}
save(obj){ftype(this.attrs).put(this.attrs,obj,this.open?1:0);if(!this.open){this.views.forEach(view=>view.load({_type:obj._type}))}
return super.save(obj);}
isChanged(){return this.changed||super.isChanged();}
showGroup(open){if(this.open==open)return;this.bttn.ariaPressed=this.bttn.ariaPressed=="true"?"false":"true";this.bttn.classList.toggle("expanded",open);this.views.forEach(view=>{if(open){view.show();}else{view.hide();}});this.open=open;}
getVisualClass(){return"group";}}
class GridView extends TupleView{constructor(attrs,ro){super(attrs);this.ro=ro;}
createRow(viewCtrl,cfg){const attrs=this.attrs;let items=0;let lastRow;attrs.c.forEach(c=>{const view=ftype(c).view(c,this.ro);this.views.push(view);if(items%attrs.cols==0){lastRow=viewCtrl.createRow();}
const lastInRow=(items%attrs.cols)+1==attrs.cols;const d=make.td({p:lastRow,cls:lastInRow?"value":"tvalue"});if(lastInRow)d.colSpan=19-attrs.cols;d.appendChild(view.create(viewCtrl));++items;});}
getTabName(){return this.attrs.name;}}
class GridMultiView extends TupleView{constructor(attrs,ro){super(attrs);this.ro=ro;}
createRow(viewCtrl,cfg){const attrs=this.attrs;const type=enm[attrs.values.type];const map=type?type.getMap(attrs.values):{};const views=[];let items=0;let lastRow;for(let i in map){const label=new Label(make.span({cont:map[i]}));const view=this.ro?new ROTextView(attrs.c[0]):new TextView(attrs.c[0]);let d;if(items%2==0){lastRow=viewCtrl.createRow(label);d=make.td({p:lastRow,cls:"tvalue"});}else{make.td({p:lastRow,cls:"label"}).appendChild(label.getNode());make.td({p:lastRow,cls:"extra"});d=make.td({p:lastRow,cls:"value"});d.colSpan=18-2;}
d.appendChild(view.create(viewCtrl,label));if(attrs.c[0].postfix)dom.appendTxt(d,attrs.c[0].postfix);views[i]=view;++items;}
this.views=views;}
load(obj){const val=ftype(this.attrs).get(this.attrs,obj);this.views.forEach((view,i)=>{view.load({_type:obj._type,0:val[i]});});}
save(obj){const val={};this.views.forEach((view,i)=>{let obj={};const err=view.save(obj);if(err!=null){const type=enm[this.attrs.values.type];const map=type?type.getMap(this.attrs.values):{};return`Invalid value in ${map[i]}`;}
val[i]=obj[0];});return null;}
getTabName(){return this.attrs.name;}}
class DeckView extends View{constructor(attrs,ro){super(attrs);this.ro=ro;this.active=null;this.panes=[];}
attach(viewCtrl,obj){super.attach(viewCtrl,obj);this.viewCtrl=viewCtrl;this.attrs.panes.forEach(pane=>this.panes.push(this.createPane(obj,pane)));}
createPane(obj,pane){const p={};p.vals=pane.vals;p.on=this.viewCtrl.getCondition(pane.on);p.views=[];for(var i in pane.c){var view=this.viewCtrl.createView(obj,this,pane.c[i],this.ro);if(view){view.hide();p.views.push(view);}}
return p;}
getView(name){for(let p in this.panes){const pane=this.panes[p];for(let i in pane.views){const view=pane.views[i].getView(name);if(view)return view;}}
return null;}
load(obj){if(!this.attrs.oncommited){if(!this.view&&this.attrs.selon){this.view=this.viewCtrl.getView(this.attrs.selon);this.lstn=()=>this.selectPane();this.view.listen(this.lstn);}}else{if(this.attrs.selon){this.onAttr=getAttr(obj._type,this.attrs.selon);}}
this.panes.forEach(pane=>{pane.views.forEach(view=>view.load(obj));});this.selectPane(obj);return this.ctrl;}
save(obj){if(this.active){for(let p in this.active.views){const err=this.active.views[p].save(obj);if(err!=null)return err;}}
return null;}
isChanged(){return!!this.active?.views.some(view=>view.isChanged());}
destroy(){this.panes.forEach(pane=>{pane.views.forEach(view=>view.destroy());});this.view?.unlisten(this.lstn);}
selectPane(obj){let p;if(this.attrs.oncommited){if(this.onAttr){p=this.findPane(ftype(this.onAttr).get(this.onAttr,obj));}else{for(let i in this.panes){const pane=this.panes[i];if(pane.on.isTrue(obj)){p=pane;break;}}}}else{if(this.view){p=this.findPane(this.view.getValue()||0);}else{p=this.panes.find(pane=>pane.on?.isTrue(this.attrs));}}
if(this.active!=p){if(this.active)this.showPane(this.active,false);this.active=p;if(this.active)this.showPane(this.active,true);}}
findPane(val){return this.panes.find(pane=>pane.vals.includes(val));}
showPane(pane,show){pane.views.forEach(v=>{if(show){v.show();}else{v.hide();}});}
hasRow(){return false;}
getTabName(){return this.attrs.name;}}
class FlagView extends View{constructor(attrs,hide,name){super(attrs);this.hide=hide;this.name=name||attrs.name;}
getView(name){if(this.attrs.secondname==name)return this;return this.name==name?this:null;}
createRow(viewCtrl,cfg,obj){let holder=null;if(this.attrs.band!=null){holder=document.getElementById("flag"+this.attrs.band);this.ctrl=make.span();holder?.appendChild(this.viewCtrl);}
if(!holder){const sb=get("statusbar");this.ctrl=make.span({p:sb});}}
load(obj){this.value=ftype(this.attrs).get(this.attrs,obj);if(this?.info?.cfg===0)return;if(!this.ctrl)return;let str=ftype(this.attrs).tostr(this.attrs,this.value);if(!this.value&&str===""){if(this.hide){hide(this.ctrl);}else if(this.attrs.band==null){str=`not ${ftype(this.attrs).tostr(this.attrs, !this.value)}`;this.ctrl.classList.replace("disabled","enabled");}}else{this.ctrl.classList.replace("enabled","disabled");if(this.hide)this.ctrl.parentNode.style.display="";}
replaceText(this.ctrl,str??"");}
getValue(){return this.value;}
hasRow(){return false;}
isRO(){return true;}}
class StatusBar extends View{constructor(attrs){super(attrs);}
attach(viewCtrl,obj){this.attrs.c.forEach(attrs=>{viewCtrl.addView(obj,null,null,new StatusBarView(attrs),attrs,getAttrProp(obj,attrs,attrs.name||"statusbar"),true);});}
createRow(viewCtrl,cfg,obj){return null;}
hasRow(){return false;}}
class StatusBarView extends View{constructor(attrs,viewCtrl,obj){super(attrs);}
createRow(viewCtrl,cfg,obj){const sb=get("statusbar");if(obj._owner.attrs.type=="query"){this.ctrl=make.div({p:sb,cls:"f-item"});const id=`sb-${this.attrs.id}`;make.label({p:this.ctrl,cont:this.attrs.name},id);make.div({p:this.ctrl,cls:"f-row rovalue"}).id=id;return;}
this.ctrl=make.span({p:sb});}
load(obj){if(!this.ctrl)return;const attrs=this.attrs;let str=toString(attrs,obj);if(obj._owner.attrs.type=="query"){replaceText(get(`sb-${this.attrs.id}`),`${str} ${attrs.postfix || ""}`.trim());return;}
if(str&&attrs.name){str=`${attrs.name}:${str} ${attrs.postfix || ""}`.trim();}
replaceText(this.ctrl,str);}
hasRow(){return false;}
isRO(){return true;}}
class AboutView extends View{constructor(attrs){super(attrs);}
createRow(viewCtrl,cfg,obj){}
load(obj){const alert=document.getElementById("alert");const val=ftype(this.attrs).get(this.attrs,obj)??[];clearNodes(alert);val.forEach(v=>make.div({p:alert,cont:v}));}
hasRow(){return false;}
isRO(){return true;}}
class TableView extends TupleView{constructor(attrs){super(attrs);this.cont=new ObjectMap({path:attrs.path,c:attrs.c});this.viewCtrl;}
attach(viewCtrl,obj){this.viewCtrl=viewCtrl;if(!this.attrs.views)return;this.attrs.owner=obj._type;this.viewObj={};this.viewObj._type={c:this.attrs.views,owner:this.attrs};this.viewObj._owner=new Listeners();viewCtrl.addAllViews(this.viewObj,null,this.views);}
createRow(viewCtrl,cfg,obj){const table=this.create(viewCtrl);viewCtrl.getTBody().classList.add("f-frame");viewCtrl.getTBody().appendChild(table);}
create(viewCtrl){this.table=make.el("table",{cls:"table"});this.table.style.background="#ffffff";this.cb=obj=>this.updateRow(obj);if(this.isVisible())this.cont.listen(this.cb,true);this.cont.foreach(obj=>this.updateRow(obj));return this.table;}
destroy(){if(this.cb)this.cont.unlisten(this.cb,true);}
load(obj){if(!this.table){this.obj=obj;return;}
this.createTable(obj);const objs=ftype(this.attrs).get(this.attrs,obj);if(!objs)return;this.updateTable(objs);}
save(obj){return null;}
updateTable(objs){const old={};for(let i in this.rows)old[i]=1;for(let i in objs){const o=objs[i];o.ufe0001=Number(i);this.updateRow(o);delete old[i];}
for(const i in old){this.updateRow({ufe0001:Number(i),ufe0013:1});}}
createTable(obj){if(this.rows)return;const type={owner:obj._type};const header=make.tr({p:make.el("thead",{p:this.table})});let idx=0;this.columns=[];this.attrs.c.forEach(a=>{const col=!a.nonpublic?ftype(a).column(a,this,type):null;if(col&&col[1]&&col[1]!=0xffffffff){const th=make.th({p:header,cont:col[0]});setCellWidth(th,col[1]);this.columns.push(a);}else{this.columns.push(null);}
if(!ftype(a).alias&&a.id==null)a.id=idx++;});this.cols=idx;this.rows={};}
attachHandler(row,obj){row.onclick=()=>{if(this.selectedRow){this.selectedRow.classList.remove("selected");}
if(obj.ufe0001==null)return;row.classList.add("selected");this.selectedRow=row;this.selected=obj.ufe0001;this.updateViews(obj);return false;};}
updateRow(obj){let row=this.rows[obj.ufe0001];if(obj.ufe0013){if(row){this.table.removeChild(row.parentNode);delete this.rows[obj.ufe0001];}
return;}
if(!row){row=make.tr({p:make.el("tbody",{p:this.table})});this.rows[obj.ufe0001]=row;if(this.flags)make.td({p:row});this.columns?.filter(v=>v).forEach(()=>make.td({p:row}));}
if(this.flags){const flags=row.cells[0];clearNodes(flags);flags.title="";const bands={};this.flags.forEach(flag=>{const attrs=flag[0];const band=flag[1];if(band&&bands[band])return;const val=ftype(attrs).get(attrs,obj);const f=ftype(attrs).flag(attrs,val);if(f){flags.appendChild(f[0]);flags.title+=f[1]+"\n";if(band)bands[band]=true;}});}
let col=this.flags?1:0;this.columns?.filter(v=>v).forEach((c,i)=>{const a=this.attrs.c[i];const val=ftype(a).get(a,obj);const cell=row.cells[col];const d=ftype(a).cell(a,obj,val,cell.firstChild);if(d!=cell.firstChild){clearNodes(cell);if(d)cell.appendChild(d);}
++col;});if(this.attrs.views)this.attachHandler(row.parentNode,obj);if(this.selected!=null&&this.selected==obj.ufe0001){this.selectedRow=row.parentNode;this.updateViews(obj);}}
updateViews(obj){if(this.viewObj){update(this.viewObj,obj);this.viewObj._owner.notify(this.viewObj);}}
addFlag(attrs,band){if(!this.flags){this.flags=[];const header=this.table?.firstChild?.firstChild;const fc=make.th();setCellWidth(fc,20);make.span({p:fc,cont:'\u00a0'});header.insertBefore(fc,header.firstChild);}
this.flags.push([attrs,band]);}
isRO(){return true;}
show(){const wasVisible=this.isVisible();super.show();if(!wasVisible&&this.isVisible()&&this.cb){this.cont.listen(this.cb,true);}}
hide(){const wasVisible=this.isVisible();super.hide();if(wasVisible&&!this.isVisible()&&this.cb){this.cont.unlisten(this.cb,true);}}}
class NumberTableView extends TableView{constructor(attrs){super(attrs);}
getTabName(){return this.attrs.name;}
createRow(viewCtrl,cfg,obj){viewCtrl.addRow(null,null,this);}
load(obj){this.createTable(obj);const val=ftype(this.attrs).get(this.attrs,obj);if(!val)return;const objs=[];let idx=0;while(idx<val.length){const o={};this.attrs.c.forEach(a=>{if(a.id!=null)o[a.id]=val[idx++];});objs.push(o);}
this.updateTable(objs);}}
function copyVals(attrs,dst,src){for(var i in attrs.c){var a=attrs.c[i];if(a.type=='object'){copyVals(a,dst,src);continue;}
var v=ftype(a).get(a,src);ftype(a).put(a,dst,v);}}
class ObjectView extends View{constructor(attrs){super(attrs);this.views=[];}
attach(viewCtrl,obj){this.mainObj=obj;if(this.mainObj){this.lstn=o=>{this.load(o);};this.mainObj._owner.listen(this.lstn);}
const a=inherit(this.attrs);a.owner=obj._type;this.obj={};this.obj._type={c:this.attrs.c,owner:a};this.obj._owner=new Listeners();this.obj._owner.setObject=o=>{this.setObject(o);};viewCtrl.addAllViews(this.obj,null,this.views);}
destroy(){if(this.lstn)this.mainObj._owner.unlisten(this.lstn);}
setObject(obj){const o=this.attrs.id?this.mainObj[this.attrs.id]:this.mainObj;if(o!=null){update(o,obj);this.mainObj._owner.setObject(this.mainObj);}}
load(obj){const o=this.attrs.id?obj[this.attrs.id]:obj;if(o!=null)copyVals(this.attrs,this.obj,o);this.obj?._owner.notify(this.obj);}
save(obj){for(let view of this.views){if(!view.isVisible()||!view.isEnabled())continue;const err=view.save(this.obj);if(err!=null)return err;}
if(this.attrs.id){obj=obj[this.attrs.id];}
copyVals(this.attrs,obj,this.obj);return null;}
show(){if(++this.visible!=1)return;this.views.forEach(view=>view.show());}
hide(){if(--this.visible!=0)return;this.views.forEach(view=>view.hide());}}
class GraphBox extends TupleView{constructor(attrs){super(attrs);}
attach(viewCtrl,obj){for(let i in this.attrs.graphs){const v=viewCtrl.createView(obj,this,this.attrs.graphs[i],true);this.views.push(v);}}
createRow(viewCtrl,cfg){}
hasRow(){return false;}}
class GraphView extends View{constructor(attrs){super(attrs);this.curves=[];this.ylabels=[];for(let i in attrs.curves){this.curves[i]={values:[]};}}
createRow(viewCtrl,cfg,obj){if(this.attrs.name){return View.prototype.createRow.call(this,viewCtrl,cfg,obj);}
const ctrl=this.create();if(!ctrl)return;const holder=viewCtrl.createSingleItemRow();holder.appendChild(ctrl);}
create(){const height=this.attrs.height||144;const g=createGraphic(null,1024,height,340,height,"graph");if(!g||!g.viewBox)return null;this.g=g;this.width=g.viewBox.width;this.height=g.viewBox.height;g.canvas.style.height=this.height;g.canvas.classList.add("graph-svg");g.strokeColor="#808080";g.strokeWidth=1;g.strokeWidth=2;this.curves.forEach((c,i)=>{g.strokeColor="#000";g.strokeOpacity=0;g.fillOpacity=0.3;g.fillColor=c.color;c.polygon=g.polygon(i-0?"secondary":"primary");g.strokeColor=c.color;g.strokeOpacity=0.4;g.fillOpacity=0;c.polyline=g.polyline(i-0?"secondary":"primary");});const level=(this.height-14)/5;for(let i=1;i<6;++i){const y=level*i-0.5;g.line(0,y,this.width,y);}
this.xlabels=[];let idx=0;for(var x=this.width;x>60;x-=120){g.line(x-0.5,0,x-0.5,this.height-4);var label=g.text(x-3,this.height-14,8,true);if(!this.attrs.model){if(idx>0)label.text(`${idx} min ago`);++idx;}
this.xlabels.push(label);}
for(let i=0;i<5;++i){const y=level*i;this.ylabels[5-i]=g.text(this.width-120-2,y,9,true);}
this.horizontal=[];const legend=make.el("table");legend.width="100%";legend.cellSpacing="0";legend.cellPadding="0";legend.style.margin="2px 0 0 0";this.curves.forEach((c,i)=>{const row=make.tr({p:make.el("tbody",{p:legend}),cls:i?"secondary":"primary"});const info=make.td({p:row});make.span({p:info,cont:this.attrs.curves[i].name});c.cur=make.td({p:row,cont:"cur:"});c.avg=make.td({p:row,cont:"avg:"});c.max=make.td({p:row,cont:"max:"});});const box=make.div({cls:"graph"});box.appendChild(g.canvas);box.appendChild(legend);return box;}
load(obj){if(!this.g)return;const width=this.width/2+1;let hasUpdate=false;if(this.attrs.model){const offset=this.attrs.offset||0;const model=this.attrs.model;let array=ftype(model).get(model,obj);if(!array){array=[];}else{hasUpdate=true;}
this.curves.forEach((c,i)=>{c.value=this.attrs.curves[i].value;c.values=[];});let idx=0;const x=[];while(idx<array.length){x.push(array[idx++][0]);this.curves.forEach(c=>{const val=ftype(c.value).get(c.value,array[idx++]);c.values.push(val+offset);});}
this.times=[];for(let i=x.length-1;i>=0;i-=60){this.times.push(x[i]);}}else{this.curves.forEach((c,i)=>{if(!c.value){c.ovalue=getAttr(obj._type,this.attrs.curves[i].value,true);c.value=c.ovalue;}
if(c.time==null){c.time=0;if(this.attrs.curves[i].time){c.time=getAttr(obj._type,this.attrs.curves[i].time,true);}}
const val=ftype(c.ovalue).get(c.ovalue,obj);if(val==null)return;let time;if(c.time){time=ftype(c.time).get(c.time,obj);if(time==null)return;}else{time=getUptime();}
if(c.lastTime!=null){var dt=time-c.lastTime;if(dt<1)return;while(dt-->1)c.values.push(null);}
c.lastTime=time;if(val instanceof Array){c.value=c.ovalue.c[0];val.forEach(v=>{c.values.push(v[0]??ftype(c.value).get(c.value,v));hasUpdate=true;});}else{c.values.push(val);hasUpdate=true;}});}
this.curves.forEach(c=>{if(c.values.length>width){c.values.splice(0,c.values.length-width);}});if(hasUpdate)this.update();}
update(){const tostr=(curve,val)=>{const a=curve.value;let str=ftype(a).tostr(a,val);if(a.postfix)str+=` ${a.postfix}`;return str.replace(' ','\u00a0');};const offset=this.attrs.offset||0;let tmax=10-offset;this.curves.forEach(c=>{let max=0-offset;let sum=0;let cur=0;let valCount=0;c.values.forEach(val=>{if(val!=null){cur=val-offset;if(max<cur)max=cur;sum+=cur;valCount++;}});let avg=0;if(valCount>0){avg=Math.round(sum/valCount);}else{max=0;}
replaceText(c.cur,`cur: ${tostr(c, cur)}`);replaceText(c.avg,`avg: ${tostr(c, avg)}`);replaceText(c.max,`max: ${tostr(c, max)}`);if(tmax<max)tmax=max;});if(this.attrs.max){tmax=this.attrs.max;}else{tmax+=offset;var nmax=Math.pow(10,Math.ceil(Math.log(tmax)/Math.LN10));tmax=nmax/2>=tmax?nmax/2:nmax;}
if(this.max!=tmax){this.max=tmax;let curve;for(let i in this.curves){curve=this.curves[i];if(curve.values.length>0)break;}
const step=tmax/5;for(let i=1;i<=5;++i){this.ylabels[i].text(tostr(curve,i*step-offset));}}
const height=this.height-14;this.curves.forEach(c=>{c.polyline.reset();c.polygon.reset();let lastX=null;c.values.forEach((val,j)=>{if(val!=null){const x=this.width-(c.values.length-1-j)*2;const y=val?Math.round(height-(val/tmax)*height):height;c.polyline.add(x,y);if(lastX==null)c.polygon.add(x,height);c.polygon.add(x,y);lastX=x;}});if(lastX!=null){c.polygon.add(lastX,height);}
c.polyline.draw();c.polygon.draw();});this.xlabels?.forEach((xl,i)=>{if(!this.times)return;let str="";if(this.times[i]!=null){const t=num2int(this.times[i])-sysres.uptimediff-getTZOffset();str=dateAndTime2string(getDate(t),getTime(t),false,true);}
xl.text(str);});}}
class FileUploader{constructor(file){this.formData=new FormData();this.formData.append("file",file);this.xhr=new XMLHttpRequest();this.xhr.open("POST",`/jsproxy/upload?${session.encryptURI("")}`,true);this.fileName=file.name;this.card=notifications.info(`Uploading "${file.name}"`,0);this.progress=make.el("progress",{p:this.card.getBody()});}
send(cb){const cleanup=()=>{this.card.updateTimeout(5000);cb();}
const failure=(text)=>{this.card.addError();this.card.updateHeading(`Failed to upload "${this.fileName}"`);this.progress.remove();make.span({p:this.card.getBody(),cont:text});cleanup();}
this.xhr.upload.onprogress=e=>{traffic.bytesTx+=e.loaded-(this.progress.value??0);this.progress.max=e.total;this.progress.value=e.loaded;this.progress.textContent=`Uploaded ${Math.floor(e.loaded * 100 / e.total)}%`;}
this.xhr.onload=()=>{if(this.xhr.status>=400)
return failure(this.xhr.status+": "+this.xhr.statusText);this.card.updateHeading(`Uploaded "${this.fileName}"`);cleanup();}
this.xhr.onerror=failure;this.xhr.ontimeout=failure;this.xhr.send(this.formData);}}
function containsFiles(event){return[...event.dataTransfer.types??[]].some(t=>t==="Files");}
class FileUploadView extends View{constructor(attrs){super(attrs);this.queue=[];}
create(viewCtrl,label){const inp=make.input({},"file");inp.multiple=true;this.ctrl=inp;const dropZone=getTemplate("splash");dropZone.classList.replace("splash","drop-zone");dom.getByClass(document,"panel").appendChild(dropZone);dom.getByClass(dropZone,"icon").classList.add("icon-Upload");make.el("h2",{p:dropZone.firstElementChild,cont:"Drop files here"});dropZone.ondragenter=()=>{dropZone.classList.add("hover");};dropZone.ondragleave=e=>{if(!dropZone.contains(e.relatedTarget))dropZone.classList.remove("hover");};document.body.ondragover=e=>e.preventDefault();document.body.ondragenter=e=>{if(!containsFiles(e))return;dropZone.classList.add("active");document.body.ondragleave=e=>{if(!e.relatedTarget){dropZone.classList.remove("active");document.body.ondragleave=null;}};};dropZone.ondrop=e=>{e.preventDefault();dropZone.classList.remove("active","hover");this.enqueue(e.dataTransfer.files);};inp.onchange=()=>{this.enqueue(inp.files);inp.value="";};return this.ctrl;}
enqueue(files){[...files].forEach(file=>this.queue.push(new FileUploader(file)));this.processQueue();}
processQueue(){const file=this.queue.shift();file?.send(()=>this.processQueue());}}
class ToggleView extends View{constructor(attrs){super(attrs);this.value=0;}
createRow(viewCtrl,cfg,obj){this.viewCtrl=viewCtrl;this.obj=obj;const holder=getTemplate("form-switch");this.ctrl=holder.querySelector("input");this.ctrl.id="advanced-mode";const label=holder.querySelector("label");label.htmlFor=this.ctrl.id;label.textContent=cfg.name??this.attrs.modes[1];get("adv-placeholder")?.replaceWith(holder);this.ctrl.onclick=e=>{this.value=this.ctrl.checked?1:0;this.notify();};}
getValue(){return this.value;}
hasRow(){return false;}}
function getAttr(type,name,topLevelOnly){for(let i in type.c){if(ftype(type.c[i]).alias)continue;if(type.c[i].type!='group'&&type.c[i].name==name)return type.c[i];if(topLevelOnly&&type.c[i].type!='tuple')continue;if(type.c[i].c){var attr=getAttr(type.c[i],name);if(attr)return attr;}
if(type.c[i].panes){var panes=type.c[i].panes;for(var p in panes){attr=getAttr(panes[p],name);if(attr)return attr;}}
if(type.c[i].type=='group'&&type.c[i].name==name)return type.c[i];}
if(name=='dynamic'||name=='enable'||name=='default'){if(name=='default')name='preset';for(let i in type.c){if(type.c[i].type==name)return type.c[i];}}
return null;}
class AliasView extends View{constructor(attrs,ro){super(attrs);this.ro=ro;}
attach(viewCtrl,obj){var a=getAttr(obj._type,this.attrs.name);if(a){this.view=viewCtrl.createView(obj,null,a,this.ro);}}
load(obj){if(this.view)this.view.load(obj);}
save(obj){if(this.view)return this.view.save(obj);return null;}
isChanged(){return this.view&&this.view.isChanged();}
show(){if(this.view)this.view.show();}
hide(){if(this.view)this.view.hide();}
hasRow(){return false;}}
class Condition extends Listeners{constructor(cond,conds,obj){super();this.cond=cond;this.on=[];this.views=[];this.value=true;this.obj=obj;if(cond.oron&&conds)this.oron=conds[cond.oron];}
init(ctrl,postCheckCB){if(!this.hasRegular())return;const lstn=()=>{this.check();this.notify();postCheckCB();};if(!this.cond.makero&&!this.cond.hide){for(let i in this.cond.c){const c=this.cond.c[i];const view=(c.on instanceof Array)?ctrl.getView(c.on[c.on.length-1],this.obj):ctrl.getView(c.on,this.obj);this.on[i]=view;if(view!=null)view.listen(lstn);}}
if(this.oron)this.oron.listen(lstn);this.check();postCheckCB();}
check(){const val=(this.cond.makero||this.cond.hide)?this.oron.isTrue():this.isTrue();if(val==this.value)return;this.value=val;this.views.filter(v=>v).forEach(view=>{if(this.cond.hidedynamicly){if(val){view.show();}else{view.hide();}}else{view.enable(val);}});}
hasRegular(){if(!this.cond.hide&&!this.cond.makero)return true;if(this.oron)return this.oron.hasRegular();return false;}
canHide(){if(this.cond.hide)return true;if(this.oron)return this.oron.canHide();return false;}
shouldHide(obj){if(this.cond.hide&&!this.isItselfTrue(obj))return true;if(this.oron)return this.oron.shouldHide(obj);return false;}
shouldMakeRO(obj){if(this.cond.makero&&!this.isItselfTrue(obj))return true;if(this.oron)return this.oron.shouldMakeRO(obj);return false;}
isItselfTrue(obj){for(let i in this.cond.c){const c=this.cond.c[i];if(!c.on){if(!isTrue(c.pred,null))return false;continue;}
if(!obj){if(!this.on[i])return true;if(!isTrue(c.pred,this.on[i].getValue()))return false;}else{if(c.on instanceof Array){return true;}
const attr=getAttr(obj._type,c.on);if(attr==null)return false;const val=ftype(attr).getvalue(attr,obj)??attr.def;if(!isTrue(c.pred,val))return false;}}
return true;}
isTrue(obj){if(this.isItselfTrue(obj))return true;if(this.oron)return this.oron.isTrue();return false;}
addView(view){this.views.push(view);}}
var conv={};conv.put=function(conv,obj,val){return conv.val;};conv.secret_str=function(conv,obj,val){return val;};conv.u32vector_u32=function(conv,obj,val){return val&&val[0]?val[0]:0;};conv.u32_network=function(conv,obj,val){return[val,(val?0xffffffff:0)];};conv.u32_vector_u32pair=function(conv,obj,val){return val;};conv.u32_u32=function(conv,obj,val){return val;};conv.id_str=function(conv,obj,val){return obj._owner.toString(obj);};conv.any_network=function(conv,obj,val){for(var i in val){if(val[i]instanceof Array&&val[i].length==2)return val[i];}
return null;};conv.multi_network=function(conv,obj,val){if(val!=null&&val[0]!=null){return[val[0][conv.id]||0,val[0][conv.mid]||0];}
return null;};function convert(links,src,dst,viewCtrl){var obj={};obj._type=dst._type;obj._owner=dst._owner;for(var i in links){var val;var sattr;if(links[i].src){if(links[i].presave&&viewCtrl){var v=viewCtrl.getView(links[i].src);var err=v.save(src);if(v.isVisible()&&v.isEnabled()&&err!=null){notifications.error(err);return false;}}
sattr=getAttr(src._type,links[i].src);val=ftype(sattr).get(sattr,src);}else{val=src.ufe0001;sattr=null;}
var dattr=getAttr(dst._type,links[i].dst);if(links[i].conv){val=conv[links[i].conv](links[i],src,val);}else if(sattr){var str=ftype(sattr).tostr(sattr,val);val=ftype(dattr).fromstr(dattr,str);}
if(val!=null)ftype(dattr).put(dattr,obj,val);}
update(dst,obj);return true;}
function unset(obj,id){if(id!=null){delete obj[id];if(obj.Uff0014==null)obj.Uff0014=[];obj.Uff0014.push(id2int[id.substr(0,1)]+parseInt(id.substr(1),16));}}
function ftype(attrs){return types[attrs.type]||types.def;}
var types={};types.def={};types.def.get=function(attrs,obj){return obj[attrs.id||0];};types.def.getvalue=function(attrs,obj){return ftype(attrs).get(attrs,obj);};types.def.put=function(attrs,obj,val){if(val!=null)obj[attrs.id||0]=val;};types.def.remove=function(attrs,obj){delete obj[attrs.id||0];unset(obj,attrs.id);};types.def.tostr=function(attrs,val){return val;};types.def.fromstr=function(attrs,str){return str;};types.def.hasValue=function(attrs,val){return true;};types.def.hyperlink=function(attrs,val){return null;};types.def.isRO=function(attrs){return!!attrs.ro;};types.def.less=function(attrs,v1,v2){return v1<v2;};types.def.cfg=function(attrs,obj){if(obj._type==null)return{};return getAttrProp(obj,attrs);};types.def.view=function(attrs,ro){if(ro){if(attrs.opt)return new ROOptTextView(attrs);return new ROTextView(attrs);}
if(attrs.values){var v=new ComboView(attrs);if(attrs.opt)v=new OptView(attrs,v);return v;}
if(attrs.opt)return new OptView(attrs);return new TextView(attrs);};types.def.column=function(attrs,table,type){if(attrs.on&&attrs.cond==null){var c=getAttr(type,attrs.on);attrs.cond=c?new Condition(c):0;if(attrs.cond&&!(attrs.cond.canHide()||attrs.cond.hasRegular())){attrs.cond=0;}}
if(attrs.cond&&attrs.cond.shouldHide())return;var cfg=getAttrProp(type,attrs);if(shouldHide(cfg,attrs.hidebydefault))return;var name=cfg.name||attrs.name;if(!attrs.inlinepostfix&&attrs.postfix){name+=' ('+attrs.postfix+')';}
return[name,attrs.width];};types.def.cell=function(attrs,obj,val){if(attrs.cond&&!attrs.cond.isTrue(obj))return null;let str=tostr(attrs,val)??"";if(str.length>0&&attrs.inlinepostfix)str+=attrs.postfix;return str?document.createTextNode(str):null;};types.def.listen=function(attrs,cb){if(attrs.values){var type=enm[attrs.values.type];if(type&&type.listen)type.listen(attrs.values,cb);}
if(!attrs.c)return;for(var i in attrs.c){var a=attrs.c[i];ftype(a).listen(a,cb);}};types.def.unlisten=function(attrs,cb){if(attrs.values){var type=enm[attrs.values.type];if(type&&type.unlisten)type.unlisten(attrs.values,cb);}
if(!attrs.c)return;for(var i in attrs.c){var a=attrs.c[i];ftype(a).unlisten(a,cb);}};types.def.deflimit=function(attrs){return null;};types.def.addlimit=function(attrs,limit,str){return false;};types.def.limit=function(attrs,str){var limit={};var chunks=str.split('\n');for(var i in chunks){if(chunks[i].length==0)continue;var items=chunks[i].split(',');for(var j in items){let str=trim(items[j]);if(str.length==0)continue;if(!ftype(attrs).addlimit(attrs,limit,str))return null;}}
return limit;};types.def.lookup=function(attrs,owner,name,nr){if(owner&&(!attrs.owner||attrs.owner.name!=owner))return null;if(attrs.name==name){if(--nr[0]==0)return attrs;}
return null;};types.def.alias=false;types.def.deferred=function(attrs){return false;};types.bool=inherit(types.def);types.bool.get=function(attrs,obj){var val=obj[attrs.id||0];if(attrs.bit)val=val&attrs.bit?1:0;return attrs.inv?(val!=null?!val:null):val;};types.bool.put=function(attrs,obj,val){var b=attrs.bit||1;obj[attrs.id||0]=attrs.inv?(val?0:b):(val?b:0);};types.bool.fromstr=function(attrs,str){if(str=='yes'||str=='true')return 1;if(str=='no'||str=='false')return 0;return null;};types.bool.tostr=function(attrs,val){if(val==null)val=attrs.def||false;return val?'yes':'no';};types.bool.view=function(attrs,ro){return new BoolView(attrs,ro);};types.number=inherit(types.def);types.number.get=function(attrs,obj){const val=obj[attrs.id||0]??attrs.def;return val instanceof Array?val[0]:val;};types.number.put=function(attrs,obj,val){if(val==null){val=attrs.optval!=null?attrs.optval:(attrs.def||0);}
obj[attrs.id||0]=val;};types.number.hasValue=function(attrs,val){if(attrs.optval!=null)return val!=attrs.optval;return val!=(attrs.def||0);};types.number.fromstr=function(attrs,str,limit){var n=lossyenum_fromstr(attrs,str,function(attrs,str){var n=string2int(str,attrs.radix||10);if(n==null||n<0)return null;if(!minmax(n,attrs.min,attrs.max||4294967295))return null;return n;});if(n==null||!fitsRangeLimit(n,limit))return null;return n;};types.number.tostr=function(attrs,val){if(val==null){val=attrs.def||0;if(!minmax(val,attrs.min,attrs.max))val=attrs.min||0;}
val=int2num(val);return lossyenum_tostr(attrs,val,val.toString(attrs.radix||10));};types.number.deflimit=function(attrs){var str;if(attrs.values){str=(attrs.min||0).toString(attrs.radix||10)+'..';if(attrs.max!=null)str+=attrs.max.toString(attrs.radix||10);return str;}
str=this.tostr(attrs,attrs.min||0)+'..';if(attrs.max!=null)str+=this.tostr(attrs,attrs.max);return str;};types.number.addlimit=function(attrs,limit,str){if(!limit.ranges)limit.ranges=[];return parseLimit(limit.ranges,str,attrs.min||0,attrs.max||0xffffffff,function(str){return ftype(attrs).fromstr(attrs,str);});};types.bignumber=inherit(types.number);types.integer=inherit(types.number);types.integer.get=function(attrs,obj){var val=obj[attrs.id||0];return val!=null?num2int(val):null;};types.integer.put=function(attrs,obj,val){if(val==null){val=attrs.optval!=null?attrs.optval:(attrs.def||0);}
obj[attrs.id||0]=val;};types.integer.hasValue=function(attrs,val){return val!=num2int(attrs.optval||attrs.def||0);};types.integer.tostr=function(attrs,val){if(val==null){val=num2int(attrs.def||0);if(!iminmax(val,attrs.min,attrs.max)){if(attrs.max&&val>num2int(attrs.max)){val=num2int(attrs.max);}else{val=num2int(attrs.min||0);}}}
return num2int(val).toString();};types.integer.fromstr=function(attrs,str,limit){var n=string2int(str);if(n==null||!iminmax(n,attrs.min,attrs.max))return null;if(limit&&limit.ranges){var ranges=limit.ranges;for(var i=0;i<ranges.length;i+=2){if(iminmax(n,ranges[i],ranges[i+1]))return n;}
return null;}
return n;};types.integer.addlimit=function(attrs,limit,str){if(!limit.ranges)limit.ranges=[];return parseLimit(limit.ranges,str,attrs.min!=null?attrs.min:num2int(0x80000000),attrs.max!=null?attrs.max:num2int(0x7fffffff),function(str){return ftype(attrs).fromstr(attrs,str);});};types.numbar=inherit(types.integer);types.numbar.view=function(attrs,ro){var c=[inherit(attrs),inherit(attrs)];c[0].type='numberval';c[0].postfix=null;c[0].units=attrs.postfix;c[0].ro=1;c[1].type='numbargraph';c[1].postfix=null;var a={c:c,name:attrs.name,sep:1};return new TupleView(a);};types.numberval=inherit(types.integer);types.numberval.tostr=function(attrs,val){if(val==null)return'';var s=num2int(val).toString();var scale=attrs.scale||1;if(scale!=1){var m=num2int(val)/scale;s=(val>0?Math.floor(m):Math.ceil(m)).toString()+'.'+fraction2string(Math.abs(val),scale);}
if(attrs.units)s+=' '+attrs.units;var colors=attrs.colors;var v=num2int(val)+(attrs.offset||0);for(var i in colors){if(v<colors[i].level){s+=' ('+colors[i].label+')';break;}}
return s;};types.numbargraph=inherit(types.integer);types.numbargraph.view=function(attrs,ro){return new NumBarView(attrs);};types.decimal=inherit(types.number);types.decimal.tostr=function(attrs,val){var str=types.integer.tostr(attrs,val);var res='';var off=str.length%3;if(off)res=str.substr(0,off);for(var i=off;i<str.length;i+=3){if(i>0)res=res+' ';res=res+str.substr(i,3);}
return res;};types.bigdecimal=inherit(types.decimal);types.bigdecimal.tostr=function(attrs,val){if(val==null){val=attrs.def||0;if(!minmax(val,attrs.min,attrs.max))val=attrs.min||0;}
var str=Math.abs(val).toString(attrs.radix||10);var res=val<0?'-':'';var off=str.length%3;if(off)res=str.substr(0,off);for(var i=off;i<str.length;i+=3){if(i>0)res=res+' ';res=res+str.substr(i,3);}
return res;};types.bytes=inherit(types.number);types.bytes.tostr=function(attrs,val){if(!val)return"0 B";val*=attrs.scale||1;if(val<5000)return val+" B";if(val<5000000)return(val/1024).toFixed(1)+" KiB";if(val<5000000000)return(val/(1024*1024)).toFixed(1)+" MiB";return(val/(1024*1024*1024)).toFixed(1)+" GiB";};types.bigbytes=inherit(types.bytes);types.bitrate=inherit(types.number);types.bitrate.tostr=function(attrs,val){if(!val)return"0 bps";if(val<2000&&val!=1000){return val+" bps";}
if(val<2000000&&val!=1000000){return(val/1000).toFixed(1)+" kbps";}
if(val<2000000000&&val!=1000000000){return(val/1000000).toFixed(1)+" Mbps";}
return(val/1000000000).toFixed(1)+" Gbps";};types.bigbitrate=inherit(types.bitrate);types.kbytes=inherit(types.number);types.kbytes.tostr=function(attrs,val){if(!val)return"0 KiB";if(val<5000)return val+" KiB";if(val<5000000)return(val/1024).toFixed(1)+" MiB";return(val/(1024*1024)).toFixed(1)+" GiB";};types.unit=inherit(types.number);types.unit.units=['','k','M','G'];types.unit.tostr=function(attrs,val){val=val||0;for(var i in this.units){if(val<1000||val%1000!=0)return val+this.units[i];val/=1000;}
return val.toString();};types.unit.fromstr=function(attrs,str,limit){if(str.length<1)return null;var p=str.substr(str.length-1).toLowerCase();var scale=1;for(var i=0;i<this.units.length;++i){if(this.units[i].toLowerCase()==p){var n=string2int(str.substr(0,str.length-1));if(n==null||n<0)return null;n*=scale;if(!minmax(n,attrs.min,attrs.max))return null;if(!fitsRangeLimit(n,limit))return null;return n;}
scale*=1000;}
return types.number.fromstr(attrs,str);};types.bigunit=inherit(types.unit);types.changerate=inherit(types.def);types.changerate.getRate=function(attrs,obj,scale){if(!attrs.v)attrs.v=getAttr(obj._type,attrs.value);var val=ftype(attrs.v).get(attrs.v,obj);if(val==null)return null;if(!obj._timestamp)obj._timestamp={};var now=(new Date()).getTime();var prev=obj._timestamp[attrs.value];var r=0;if(prev){var dt=now-prev[0];if(dt<=900)return prev[2];r=Math.floor((val-prev[1])*scale*1000/dt);}
obj._timestamp[attrs.value]=[now,val,r];return r;};types.changerate.get=function(attrs,obj){return this.getRate(attrs,obj,attrs.scale||1);};types.changerate.tostr=types.decimal.tostr;types.changerate.view=function(attrs,ro){return types.def.view(attrs,1);};types.bigchangerate=inherit(types.changerate);types.bigchangerate.tostr=types.bigdecimal.tostr;types.bigbitchangerate=inherit(types.changerate);types.bigbitchangerate.get=function(attrs,obj){return this.getRate(attrs,obj,8);};types.bigbitchangerate.tostr=types.bigbitrate.tostr;types.fixedpoint=inherit(types.number);types.fixedpoint.tostr=function(attrs,val){var scale=attrs.scale||1;val=num2int(val||attrs.def||0);var minus=val<0?"-":"";var str=minus+Math.floor(Math.abs(val)/scale).toString()
+'.'+fraction2string(Math.abs(val),scale);if(attrs.trimzeros){for(var i=str.length-1;i>0;--i){if(str[i]!='0'){if(str[i]=='.')--i;str=str.substr(0,i+1);break;}}}
return str;};types.fixedpoint.fromstr=function(attrs,str,limit){var scale=attrs.scale||1;var v=str.split('.');var n=string2int(v[0]);if(n==null||v.length>2)return null;n*=scale;if(v[1]){var f=string2fraction(v[1],scale);if(f==null)return null;n+=f*(v[0].length>0&&v[0][0]=='-'?-1:1);}
if(!iminmax(n,attrs.low,attrs.high))return null;if(!fitsRangeLimit(n,limit))return null;return n;};types.integerrange=inherit(types.def);types.integerrange.get=function(attrs,obj){var low=obj[attrs.id||0];var high=obj[attrs.idhigh||1];return[low!=null?num2int(low):low,high!=null?num2int(high):high];};types.integerrange.put=function(attrs,obj,val){if(val==null)val=[attrs.low||0,attrs.high||2147483647];obj[attrs.id||0]=val[0];obj[attrs.idhigh||1]=val[1];};types.integerrange.remove=function(attrs,obj){delete obj[attrs.id||0];delete obj[attrs.idhigh||0];unset(obj,attrs.id);unset(obj,attrs.idhigh);};types.integerrange.hasValue=function(attrs,val){return val[0]!=(attrs.low||0)||val[1]!=(attrs.high||2147483647);};types.integerrange.tostr=function(attrs,val){var low=val[0];var high=val[1];if(low==null){low=attrs.deflow!=null?attrs.deflow:attrs.low||0;}
if(high==null){high=attrs.defhigh!=null?attrs.defhigh:attrs.high||2147483647;}
if(low==high)return low.toString();return num2int(low).toString()+'..'+num2int(high).toString();};types.integerrange.fromstr=function(attrs,str,limit){var v=str.split('..');var low=string2int(v[0]);if(low==null||!iminmax(low,attrs.low,attrs.high))return null;if(v.length==1)return[low,low];var high=string2int(v[1]);if(high==null||!iminmax(high,attrs.low,attrs.high))return null;if(limit&&limit.ranges){var ranges=limit.ranges;for(var i=0;i<ranges.length;i+=2){if(iminmax(low,ranges[i],ranges[i+1])&&iminmax(high,ranges[i],ranges[i+1]))return[low,high];}
return null;}
return[low,high];};types.integerrange.deflimit=function(attrs){let str='';if(attrs.low!=null)str=num2int(attrs.low).toString();str+='..';if(attrs.high!=null)str+=num2int(attrs.high).toString();return str;};types.integerrange.addlimit=function(attrs,limit,str){if(!limit.ranges)limit.ranges=[];return parseLimit(limit.ranges,str,attrs.low!=null?attrs.low:num2int(0x80000000),attrs.high!=null?attrs.high:num2int(0x7fffffff),function(str){var v=string2int(str);if(v==null||!iminmax(v,attrs.low,attrs.high))return null;return v;});};types.numberlist=inherit(types.def);types.numberlist.tostr=function(attrs,val){if(val==null){val=[];if(attrs.def!=null)val=attrs.def;}
var str='';for(var i in val){if(str.length>0)str+=',';str+=val[i].toString(attrs.radix||10);}
return str;};types.numberlist.fromstr=function(attrs,str){var a=[];if(str=='')return a;var vals=str.split(',');for(var i in vals){var n=string2int(vals[i],attrs.radix);if(n==null||n<0||!minmax(n,attrs.min,attrs.max))return null;a.push(n);}
return a;};types.numberrange=inherit(types.def);types.numberrange.get=function(attrs,obj){var low=obj[attrs.id||0];var high=obj[attrs.highid||1];return low!=null&&high!=null?[low,high]:null;};types.numberrange.put=function(attrs,obj,val){if(val==null)val=[attrs.min||0,attrs.max||int2num(-1)];obj[attrs.id||0]=val[0];obj[attrs.highid||1]=val[1];};types.numberrange.remove=function(attrs,obj){delete obj[attrs.id||0];delete obj[attrs.highid||0];unset(obj,attrs.id);unset(obj,attrs.highid);};types.numberrange.hasValue=function(attrs,val){return val[0]!=(attrs.min||0)||val[1]!=(attrs.max||int2num(-1));};types.numberrange.tostr=function(attrs,val){var low=val&&val[0];var high=val&&val[1];if(low==null){low=attrs.deflow!=null?attrs.deflow:attrs.min||0;}
if(high==null){high=attrs.defhigh!=null?attrs.defhigh:attrs.max||int2num(-1);}
function tostr(val){if(attrs.unit)return types.unit.tostr(attrs,val);return val.toString(attrs.radix||10);}
if(low==high)return tostr(low);return tostr(low)+'-'+tostr(high);};types.numberrange.fromstr=function(attrs,str,limit){function fromstr(str){if(attrs.unit){return types.unit.fromstr(attrs,str);}
const v=string2int(str,attrs.radix);if(v==null||!minmax(v,attrs.min,attrs.max)||v<0)return null;return v;}
let[low,high]=str.split(/-(.*)/).map(fromstr);if(high===undefined)high=low;if(low===null||high===null)return null;if(limit&&limit.ranges){var ranges=limit.ranges;for(var i=0;i<ranges.length;i+=2){if(minmax(low,ranges[i],ranges[i+1])&&minmax(high,ranges[i],ranges[i+1]))return[low,high];}
return null;}
return[low,high];};types.numberrange.deflimit=function(attrs){var str=(attrs.min||0).toString(attrs.radix||10)+'..';if(attrs.max!=null)str+=attrs.max.toString(attrs.radix||10);return str;};types.numberrange.addlimit=function(attrs,limit,str){if(!limit.ranges)limit.ranges=[];return parseLimit(limit.ranges,str,attrs.min||0,attrs.max||0xffffffff,function(str){var n=string2int(str);if(n==null||n<0)return null;if(!minmax(n,attrs.min,attrs.max))return null;return n;});};types.numberrangelist=inherit(types.def);types.numberrangelist.hasValue=function(attrs,val){return val.length>0;};types.numberrangelist.fromstr=function(attrs,str,limit){var v=str.split(',');var a=[];for(var i in v){if(v[i]=='')continue;var e=string2enum(attrs.values,v[i]);if(e!=null){if(!fitsRangeLimit(e,limit))return null;a.push(e);a.push(e);}else{var r=types.numberrange.fromstr(attrs,v[i],limit);if(r==null||r[0]>r[1])return null;a.push(r[0]);a.push(r[1]);}}
return a;};types.numberrangelist.tostr=function(attrs,val){if(val==null)return'';var str='';for(var i=0;i<val.length;i+=2){if(i>0)str+=',';var v=enum2string(attrs.values,val[i]);if(v){str=str+v;}else{str=str+types.numberrange.tostr(attrs,[val[i],val[i+1]]);}}
return str;};types.numberrangelist.deflimit=function(attrs){return types.numberrange.deflimit(attrs);};types.numberrangelist.addlimit=function(attrs,limit,str){return types.numberrange.addlimit(attrs,limit,str);};types.numbertable=inherit(types.def);types.numbertable.view=function(attrs,ro){return new NumberTableView(attrs);};types.table=inherit(types.def);types.table.view=function(attrs,ro){return new TableView(attrs);};types.object=inherit(types.def);types.object.get=function(attrs,obj){var o=obj[attrs.id];if(!o)o=obj[attrs.id]={};if(!o._owner){o._owner=new Listeners();}
return o;};types.object.view=function(attrs,ro){return new ObjectView(attrs);};types.object.lookup=function(attrs,owner,name,nr){for(var i in attrs.c){var a=ftype(attrs.c[i]).lookup(attrs.c[i],owner,name,nr);if(a!=null)return a;}
return null;};types.interval=inherit(types.integer);types.interval.fromstr=function(attrs,str,limit){var n=string2enum(attrs.values,str);if(n==null){n=string2interval(str,attrs.scale);if(n==null||!iminmax(n,attrs.min,attrs.max))return null;}
if(limit&&limit.ranges){var ranges=limit.ranges;for(var i=0;i<ranges.length;i+=2){if(iminmax(n,ranges[i],ranges[i+1]))return n;}
return null;}
return n;};types.interval.tostr=function(attrs,val){val??=attrs.def||0;return enum2string(attrs.values,val)||interval2string(val,attrs.scale||1);};types.interval.deflimit=function(attrs){var str=this.tostr(attrs,attrs.min||0)+'..';if(attrs.max!=null)str+=this.tostr(attrs,attrs.max);return str;};types.age=inherit(types.def);types.age.get=function(attrs,obj){var val=obj[attrs.id||0];if(val==null)return null;if(attrs.scale)val=Math.floor(val/attrs.scale);return val;};types.age.hasValue=function(attrs,val){return val!=null&&val!=0xffffffff;};types.age.tostr=function(attrs,val){var str=enum2string(attrs.values,val);if(str!=null)return str;if(attrs.opt&&(val==null||val==0xffffffff))return'';var uptime=getUptime();if(val>0x7fffffff)val=uptime+(Math.abs(val-0xffffffff));else val=Math.abs(val-uptime);return interval2string(val,1);};types.age.listen=function(attrs,cb){ticker.listen(cb);};types.age.unlisten=function(attrs,cb){ticker.unlisten(cb);};types.as=inherit(types.number);types.as.fromstr=function(attrs,str){var p=str.split('.');if(p.length==2){var h=string2int(p[0]);if(h==null||h<0||h>=0x10000)return null;var l=string2int(p[1]);if(l==null||l<0||l>=0x10000)return null;return h*0x10000+l;}
var v=string2int(str);if(v==null||v<0)return null;return v;};types.community=inherit(types.def);types.community.values={type:'static',map:{0:'internet',0xFFFFFF01:'no export',0xFFFFFF02:'no advertise',0xFFFFFF03:'local as'}};types.community.get=function(attrs,obj){if(obj[attrs.id||0]==null)return null;return[obj[attrs.id||0],obj[attrs.highid||1]||0];};types.community.put=function(attrs,obj,val){if(val==null)val=[0,0];obj[attrs.id||0]=val[0];obj[attrs.highid||1]=val[1];};types.community.remove=function(attrs,obj){delete obj[attrs.id||0];delete obj[attrs.highid||0];unset(obj,attrs.id);unset(obj,attrs.highid);};types.community.tostr=function(attrs,val){if(val==null)val=[0,0];var str=enum2string(this.values,val[0]);if(str)return str;return val[0]+':'+val[1];};types.community.fromstr=function(attrs,str){var val=string2enum(this.values,str);if(val!=null)return[val,0];var x=str.split(':');if(x.length!=2)return null;var p=string2int(x[0]);if(p==null||p<0)return null;var s=string2int(x[1]);if(s==null||s<0)return null;return[p,s];};types.community.view=function(attrs,ro){attrs.values=types.community.values;return types.def.view(attrs,ro);};types.string=inherit(types.def);types.string.put=function(attrs,obj,val){if(val==null)val='';obj[attrs.id||0]=val;};types.string.hasValue=function(attrs,val){return val.length>0;};types.string.tostr=function(attrs,val){if(val!=null)return val;if(attrs.defuser)return sysres.user;return attrs.def||'';};types.string.fromstr=function(attrs,str,limit){if(attrs.strict&&attrs.values){if(string2enum(attrs.values,str)!=null)return str;return null;}
if(!minmax(str.length,attrs.min,attrs.max))return null;if(limit&&limit.prefixes){if(!hasOneOfPrefixes(limit.prefixes,str))return null;}
return str;};types.string.less=function(attrs,s1,s2){return lexicographicalLess(s1,s2);};types.string.deflimit=function(attrs){return'';};types.string.addlimit=function(attrs,limit,str){if(!limit.prefixes)limit.prefixes=[];limit.prefixes.push(str);return true;};types.version=inherit(types.string);types.version.less=function(attrs,v1,v2){return(string2version(v1)??0)<(string2version(v2)??0);};types.secret=inherit(types.string);types.secret.cell=function(attrs,obj,val){if(attrs.cond&&!attrs.cond.isTrue(obj))return null;var str='';if(val!=null||!attrs.opt)str=ftype(attrs).tostr(attrs,val);if(hidePasswords){var x='';while(x.length<str.length)x+='*';str=x;}
return str?document.createTextNode(str):null;};types.secret.listen=function(attrs,cb){hidePasswordsLstn.listen(cb);};types.secret.unlisten=function(attrs,cb){hidePasswordsLstn.unlisten(cb);};types.secret.view=function(attrs,ro){if(attrs.values){return types.def.view(attrs,ro);}
if(ro){return new ROSecretView(attrs);}
if(attrs.opt){return new OptView(attrs,new SecretView(attrs));}
return new SecretView(attrs);};types.script=inherit(types.string);types.script.view=function(attrs,ro){if(ro)return new ROTextView(attrs,5);return new TextAreaView(attrs);};types.packet=inherit(types.string);types.packet.view=function(attrs,ro){return new ROPreTextView(attrs);};types.multilinestring=inherit(types.string);types.multilinestring.view=function(attrs,ro){if(attrs.qr)return new ROQRView(attrs);if(ro)return new ROTextView(attrs,attrs.lines);return new TextAreaView(attrs);};types.stringarray=inherit(types.def);types.stringarray.tostr=function(attrs,val){if(val==null)return null;return val.join('\n');};types.stringarray.view=function(attrs,ro){return new ROTextView(attrs,attrs.rows);};types.ipaddr=inherit(types.def);types.ipaddr.put=function(attrs,obj,val){obj[attrs.id||0]=val!=null?val:0;};types.ipaddr.hasValue=function(attrs,val){return val!=0;};types.ipaddr.tostr=function(attrs,val){return ipaddr2string(val||attrs.def||0);};types.ipaddr.fromstr=function(attrs,str){var addr=string2ipaddr(str);if(addr==null)return null;if(attrs.zeroinvalid&&(addr==0))return null;return addr;};types.ipaddr.less=function(attrs,v1,v2){v1=ntohl(v1);v2=ntohl(v2);if(v1<0){if(v2>=0)return false;return v1<v2;}else if(v2<0){return true;}
return v1<v2;};types.addr=inherit(types.def);types.addr.get=function(attrs,obj){if(attrs.id==null)return obj;return obj[attrs.id];}
types.addr.put=function(attrs,obj,val){if(attrs.id==null){if(val!=null)update(obj,val);}else{obj[attrs.id]=val!=null?val:{};}};types.addr.fromstr=function(attrs,str){types.addr.init(attrs);var val={};var allow=attrs.allow;var off=-1;var l=str.split(/[/%@&]/);for(var i=0;i<l.length;++i){if(i==0){if(allow.indexOf('4')!=-1&&val.ufeff20==null){let a=string2ipaddr(l[i]);if(a!=null){val.ufeff20=a;continue;}}
if(allow.indexOf('6')!=-1&&val.afeff21==null){let a=string2ip6addr(l[i]);if(a!=null){val.afeff21=a;continue;}}
if(allow.indexOf('D')!=-1&&val.sfeff26==null){val.sfeff26=str;continue;}
if(allow.includes('R')&&val.sfeff27==null&&parseRd(l[i])){val.sfeff27=l[i];continue;}
if(allow.includes('m')&&val.rfeff2f==null){const a=string2macaddr(l[i]);if(a!=null){val.rfeff2f=a;continue;}}
if(l[i].length==0)continue;return null;}
off+=l[i-1].length+1;switch(str[off]){case'/':if(allow.indexOf('/')!=-1&&val.ufeff25==null){var p=string2int(l[i]);if(p!=null&&p>=0&&p<=128){val.ufeff25=p;break;}}
return null;case'%':if(allow.indexOf('i')!=-1&&val.ufeff22==null){let v=string2enum(attrs.ifaces,l[i]);if(v!=null){val.ufeff22=v;break;}}
return null;case'@':if(allow.indexOf('v')!=-1&&val.ufeff23==null){let v=string2enum(attrs.vrfs,l[i]);if(v!=null){val.ufeff23=v;break;}}
return null;case'&':if(allow.includes('R')&&val.sfeff27==null&&parseRd(l[i])){val.sfeff27=l[i];break;}
return null;}}
return val;};types.addr.tostr=function(attrs,val){types.addr.init(attrs);if(val==null)val={};var allow=attrs.allow;if(allow==null)return'';var str='';if(allow.indexOf('6')!=-1&&val.afeff21!=null){str=ip6addr2string(val.afeff21);}else if(allow.indexOf('4')!=-1&&val.ufeff20!=null){str=ipaddr2string(val.ufeff20);}else if(allow.indexOf('D')!=-1&&val.sfeff26!=null){str=val.sfeff26;}else if(allow.includes('m')&&val.rfeff2f!=null){str=macaddr2string(val.rfeff2f);}
if(allow.indexOf('/')!=-1&&val.ufeff25!=null){str+='/'+val.ufeff25.toString(10);}
if(allow.indexOf('i')!=-1&&val.ufeff22!=null){var i=enum2string(attrs.ifaces,val.ufeff22);str+='%'+(i!=null?i:val.ufeff22.toString(16));}
if(allow.includes('v')&&val.ufeff23!=null){var v=enum2string(attrs.vrfs,val.ufeff23)
str+='@'+(v!=null?v:"main");}
if(allow.includes('R')&&val.sfeff27!=null){if(str=='')str=val.sfeff27;else str+='&'+val.sfeff27;}
return str;};types.addr.less=function(attrs,s1,s2){types.addr.init(attrs);var allow=attrs.allow;if(allow.indexOf('6')!=-1){let a1=s1.afeff21||[];let a2=s2.afeff21||[];if(a1<a2)return true;if(a1>a2)return false;}
if(allow.indexOf('4')!=-1){let a1=s1.ufeff20||0;let a2=s2.ufeff20||0;if(types.ipaddr.less(null,a1,a2))return true;if(types.ipaddr.less(null,a2,a1))return false;}
if(allow.indexOf('D')!=-1){let a1=s1.sfeff26||'';let a2=s2.sfeff26||'';if(a1<a2)return true;if(a1>a2)return false;}
if(allow.indexOf('/')!=-1){var p1=s1.ufeff25||0;var p2=s2.ufeff25||0;if(p1<p2)return true;if(p1>p2)return false;}
if(allow.indexOf('i')!=-1){var i1=enum2string(attrs.ifaces,s1.ufeff22||0xffffffff);var i2=enum2string(attrs.ifaces,s2.ufeff22||0xffffffff);if(i2==null){if(i1!=null)return false;}else if(i1!=null){if(types.string.less(null,i1,i2))return true;if(types.string.less(null,i2,i1))return false;}}
if(allow.indexOf('v')!=-1){var v1=enum2string(attrs.vrfs,s1.ufeff23||0xffffffff);var v2=enum2string(attrs.vrfs,s2.ufeff23||0xffffffff);if(v1<v2)return true;if(v1>v2)return false;}
if(allow.indexOf('R')!=-1){var r1=s1.sfeff27||'';var r2=s2.sfeff27||'';if(r1<r2)return true;if(r1>r2)return false;}
return false;};types.addr.listen=function(attrs,cb){types.addr.init(attrs);if(attrs.ifaces)enm.dynamic.listen(attrs.ifaces,cb);if(attrs.vrfs)enm.dynamic.listen(attrs.vrfs,cb);types.def.listen(attrs,cb);};types.addr.unlisten=function(attrs,cb){if(attrs.ifaces)enm.dynamic.unlisten(attrs.ifaces,cb);if(attrs.vrfs)enm.dynamic.unlisten(attrs.vrfs,cb);types.def.unlisten(attrs,cb);};types.addr.init=function(attrs){if(attrs.ifaces==undefined){attrs.ifaces=null;if(attrs.allow.indexOf('i')!=-1){attrs.ifaces={type:'dynamic',path:[20,0]};}}
if(attrs.vrfs==undefined){attrs.vrfs=null;if(attrs.allow.indexOf('v')!=-1){attrs.vrfs={type:'dynamic',path:[20,101]};}}};types.addr.hasValue=function(attrs,val){return(Object.keys(val).length==0)?false:true;};types.ipaddrandport=inherit(types.def);types.ipaddrandport.get=function(attrs,obj){return[obj[attrs.id||0],obj[attrs.portid||1]];};types.ipaddrandport.put=function(attrs,obj,val){if(val==null)val=[0,0];obj[attrs.id||0]=val[0];obj[attrs.portid||1]=val[1];};types.ipaddrandport.remove=function(attrs,obj){delete obj[attrs.id||0];delete obj[attrs.portid||0];unset(obj,attrs.id);unset(obj,attrs.portid);};types.ipaddrandport.tostr=function(attrs,val){var str=ipaddr2string(val[0]);if(val[1])str+=':'+val[1];return str;};types.ipaddrandport.fromstr=function(attrs,str){return null;};types.ipaddrandport.less=function(attrs,v1,v2){var a1=ntohl(v1[0]);var a2=ntohl(v2[0]);if(a1<a2)return true;if(a1>a2)return false;return v1[1]<v2[2];};types.netmask=inherit(types.def);types.netmask.fromstr=function(attrs,str){var m=string2int(str);if(m!=null){if(m<0||m>32)return null;return len2netmask(m);}
return string2ipaddr(str);};types.netmask.tostr=function(attrs,val){return netmask2len(val).toString();};types.netmask.less=function(attrs,v1,v2){return ntohl(v1)<ntohl(v2);};types.network=inherit(types.def);types.network.get=function(attrs,obj){var addr=obj[attrs.id||0];if(addr==null)return null;var mask=obj[attrs.maskid||1];return[addr,mask];};types.network.put=function(attrs,obj,val){if(val==null)val=[0,0];obj[attrs.id||0]=val[0];obj[attrs.maskid||1]=val[1];};types.network.remove=function(attrs,obj){delete obj[attrs.id||0];delete obj[attrs.maskid||0];unset(obj,attrs.id);unset(obj,attrs.maskid);};types.network.tostr=function(attrs,val){if(val==null)val=[0,0];var addr=val[0]||0;var mask=val[1];if(mask==undefined)mask=attrs.deflen||0;var str=ipaddr2string(addr);if(attrs.range){if(addr==mask)return str;for(var i=31;i>=0;--i){var m=int2num(~len2netmask(i));if(int2num(addr|m)==int2num(mask)&&(addr&m)==0){return str+'/'+i;}}
return str+'-'+ipaddr2string(mask);}
return str+'/'+netmask2len(mask);};types.network.fromstr=function(attrs,val){if(attrs.range){let a=val.split('-',2);if(a.length==2){var addr1=string2ipaddr(a[0]);var addr2=string2ipaddr(a[1]);if(addr1===null||addr2===null)return null;return[addr1,addr2];}}
let a=val.split('/',2);var addr=string2ipaddr(a[0]);if(addr==null)return null;var mask=0xffffffff;if(a.length==2){mask=string2ipaddr(a[1]);if(mask==null){var len=string2int(a[1]);if(len==null||len>32)return null;mask=len2netmask(len);}}
if(attrs.range)return[addr&mask,addr|~mask];if(!attrs.hostnonzero&&(addr&~mask)!=0)return null;if(attrs.zeroinvalid&&(addr==0))return null;return[addr,mask];};types.network.less=function(attrs,v1,v2){var a1=ntohl(v1[0]);var a2=ntohl(v2[0]);if(a1<0){if(a2>=0)return false;}else if(a2<0){return true;}
if(a1<a2)return true;if(a1>a2)return false;return ntohl(v1[1])<ntohl(v2[1]);};types.ip6addr=inherit(types.def);types.ip6addr.get=function(attrs,obj){var addr=obj[attrs.id||0];if(addr==null)return null;if(attrs.ifaceid)return[addr,obj[attrs.ifaceid]||0];return addr;};types.ip6addr.put=function(attrs,obj,val){if(attrs.ifaceid){if(val==null)val=[fillarray(0,16),0];obj[attrs.id]=val[0];obj[attrs.ifaceid]=val[1];}else{obj[attrs.id||0]=val!=null?val:fillarray(0,16);}};types.ip6addr.remove=function(attrs,obj){delete obj[attrs.id||0];if(attrs.ifaceid)delete obj[attrs.ifaceid];unset(obj,attrs.id);unset(obj,attrs.ifaceid);};types.ip6addr.tostr=function(attrs,val){if(val==null)return attrs.allowipv4?'0.0.0.0':'::';if(attrs.ifaceid){if(!attrs.ifaces){attrs.ifaces={type:'dynamic',path:[20,0]};}
var str=ip6addr2string(val[0]);if(val[1]){var iface=enum2string(attrs.ifaces,val[1])||'unknown';return str+'%'+iface;}
return str;}
if(attrs.allowipv4){var ip4=ip6addr2ipaddr(val);if(ip4!=null)return ipaddr2string(ip4);}
return ip6addr2string(val);};types.ip6addr.fromstr=function(attrs,str){var zone=0;if(attrs.ifaceid){if(!attrs.ifaces){attrs.ifaces={type:'dynamic',path:[20,0]};}
var a=str.split('%');if(a.length>2)return null;if(a.length==2){str=a[0];zone=string2enum(attrs.ifaces,a[1]);if(zone==null)return null;}}
var addr=null;if(attrs.allowipv4){var ip4=string2ipaddr(str);if(ip4!=null)addr=ipaddr2ip6addr(ip4);}
if(addr==null)addr=string2ip6addr(str);if(addr==null)return null;if(attrs.zeroinvalid){var valid=false;for(var i=0;i<16;++i){if(addr[i]){valid=true;break;}}
if(!valid)return null;}
return attrs.ifaceid?[addr,zone]:addr;};types.ip6addr.listen=function(attrs,cb){if(attrs.ifaceid){if(!attrs.ifaces){attrs.ifaces={type:'dynamic',path:[20,0]};}
enm.dynamic.listen(attrs.ifaces,cb);}
types.def.listen(attrs,cb);};types.ip6addr.unlisten=function(attrs,cb){if(attrs.ifaceid){enm.dynamic.unlisten(attrs.ifaces,cb);}
types.def.unlisten(attrs,cb);};types.network6=inherit(types.network);types.network6.put=function(attrs,obj,val){if(val==null)val=[fillarray(0,16),0];obj[attrs.id||0]=val[0];obj[attrs.maskid||1]=val[1];};types.network6.tostr=function(attrs,val){if(val==null)return'::/'+(attrs.deflen||0);var addr=val[0]!=null?ip6addr2string(val[0]):"::";if(val[1]==128)return addr;return addr+'/'+(val[1]||0);};types.network6.fromstr=function(attrs,str){var v=str.split('/');var addr=string2ip6addr(v[0]);if(addr==null)return null;var len=128;if(v.length==2){len=string2int(v[1]);if(len==null||len<0||len>128)return null;}
if(!attrs.hostnonzero&&len!=128){let i=15;for(var bits=128;bits-8>len;bits-=8){if(addr[i--])return null;}
if(addr[i]&((1<<(8-(len&7)))-1))return null;}
if(attrs.zeroinvalid){for(let i=0;i<16;++i){if(addr[i])return[addr,len];}
return null;}
return[addr,len];};types.macaddr=inherit(types.def);types.macaddr.put=function(attrs,obj,val){if(val==null)val=[0,0,0,0,0,0];obj[attrs.id||0]=val;};types.macaddr.hasValue=function(attrs,val){if(val==null)return false;for(var i=0;i<6;++i){if(val[i])return true;}
return false;};types.macaddr.tostr=function(attrs,val){if(val==null||val.length==0){if(attrs.randomdef){val=[];val.push(0x2);for(let i=1;i<6;++i){val.push(Math.floor(Math.random()*256));}}else{var d=attrs.def||0;val=[d,d,d,d,d,d];}}
return macaddr2string(val);};types.macaddr.fromstr=function(attrs,str,limit){if(limit&&limit.prefixes){if(!hasOneOfPrefixes(limit.prefixes,str))return null;}
return string2macaddr(str);};types.macaddr.less=function(attrs,v1,v2){if(v1==null||v1.length==0){return v2!=null&&v2.length!=0;}
if(v2==null||v2.length==0)return false;for(var i=0;i<6;++i){if(v1[i]<v2[i])return true;if(v1[i]>v2[i])return false;}
return false;};types.macaddr.deflimit=function(attrs){return'';};types.macaddr.addlimit=function(attrs,limit,str){if(!limit.prefixes)limit.prefixes=[];limit.prefixes.push(str);return true;};types.macnetwork=inherit(types.def);types.macnetwork.get=function(attrs,obj){var addr=obj[attrs.id||0];var mask=obj[attrs.maskid||1];if(addr==null||mask==null)return null;return[addr,mask];}
types.macnetwork.put=function(attrs,obj,val){obj[attrs.id||0]=val[0];obj[attrs.maskid||1]=val[1];};types.macnetwork.remove=function(attrs,obj){delete obj[attrs.id||0];delete obj[attrs.maskid||0];unset(obj,attrs.id);unset(obj,attrs.maskid);};types.macnetwork.hasValue=function(attrs,val){if(val==null)return false;for(var i=0;i<6;++i){if(val[0][i]||val[1][i])return true;}
return false;};types.macnetwork.tostr=function(attrs,val){if(val==null||val[0].length==0){return types.macaddr.tostr(attrs,null);}
var str=types.macaddr.tostr(attrs,val[0]);if(hasall(val[0],0)){if(hasall(val[1],0))return str;}else if(hasall(val[1],0xff)){return str;}
return str+'/'+types.macaddr.tostr(attrs,val[1]);};types.macnetwork.fromstr=function(attrs,str,limit){var vals=str.split('/');var addr=types.macaddr.fromstr(attrs,vals[0],limit);if(addr==null)return null;var mask;if(vals[1]){mask=types.macaddr.fromstr(attrs,vals[1]);if(mask==null)return null;}else{if(!hasall(addr,0)){mask=[0xff,0xff,0xff,0xff,0xff,0xff];}else{mask=[0,0,0,0,0,0];}}
return[addr,mask];};types.macnetwork.deflimit=function(attrs){return types.macaddr.deflimit(attrs);};types.macnetwork.addlimit=function(attrs,limit,str){return types.macaddr.addlimit(attrs,limit,str);};types.date=inherit(types.def);types.date.tostr=function(attrs,val){return dateAndTime2string(getDate(val),getTime(val),false);};types.date.fromstr=function(obj,attrs,str){return null;};types.dateandtime=inherit(types.def);types.dateandtime.get=function(attrs,obj){if(attrs.timeid){if(obj[attrs.id]==null)return null;return[obj[attrs.id],obj[attrs.timeid]];}
var val=obj[attrs.id];if(val==null)return null;return[getDate(val),getTime(val)];};types.dateandtime.put=function(attrs,obj,val){if(attrs.timeid){obj[attrs.id]=val[0];obj[attrs.timeid]=val[1];}else{obj[attrs.id]=val[0]+val[1];}};types.dateandtime.remove=function(attrs,obj){delete obj[attrs.id];if(attrs.timeid)delete obj[attrs.timeid];unset(obj,attrs.id);unset(obj,attrs.timeid);};types.dateandtime.tostr=function(attrs,val){const splitTime=time=>[getDate(time),getTime(time)];if(val==null){var d=attrs.todaydef?getDate(getNow()):(attrs.def||0);val=[d,0];}
if(typeof val==="number")val=splitTime(val);var str=enum2string(attrs.values,val[0]);if(str!=null)return str;if(attrs.tz){const time=val[0]+val[1]+sysres.GMToffset;val=splitTime(time);}
if(attrs.relative){const t=getNow()-getUptime()+sysres.GMToffset+Math.floor((val[0]+val[1])/100);val=splitTime(t);}
return dateAndTime2string(val[0],val[1],true);};types.dateandtime.fromstr=function(attrs,str){var v=string2enum(attrs.values,str);if(v!=null)return[v,0];var a=str.split(' ');var time=0;if(a.length>2)return null;if(a.length==2){time=string2interval(a[1]);if(time==null)return null;}
var date=string2date(a[0]);if(date==null)return null;return[date,time];};types.dateandtime.less=function(attrs,v1,v2){if(v1[0]===v2[0])return v1[1]<v2[1];return v1[0]<v2[0];}
types.clocktime=inherit(types.def);types.clocktime.put=function(attrs,obj,val){obj[attrs.id]=getDate(obj[attrs.id]||0)+val;};types.clocktime.tostr=function(attrs,val){if(val==null)val=getNow();return interval2string(getTime(val));};types.clocktime.fromstr=function(attrs,str){return string2interval(str);};types.clockdate=inherit(types.def);types.clockdate.put=function(attrs,obj,val){obj[attrs.id]=getTime(obj[attrs.id]||0)+val;};types.clockdate.tostr=function(attrs,val){if(val==null)val=getNow();return date2string(getDate(val));};types.clockdate.fromstr=function(attrs,str){return string2date(str);};types.timezone=inherit(types.def);types.timezone.tostr=function(attrs,val){return timezone2string(num2int(val)||0);};types.timezone.fromstr=function(attrs,str){return string2timezone(str);};types.enm=inherit(types.def);types.enm.get=function(attrs,obj){var val=obj[attrs.id||0];return val!=null?int2num(val):null;};types.enm.put=function(attrs,obj,val){if(val==null)val=attrs.def||0;obj[attrs.id||0]=val;};types.enm.tostr=function(attrs,val){if(val==null){if(attrs.def!=null){val=attrs.def;}else if(attrs.c){let str=ftype(attrs.c[0]).tostr(attrs.c[0],null);val=ftype(attrs.c[0]).fromstr(attrs.c[0],str);}else{val=0;}}
let str=enum2string(attrs.values,val);if(str!=null)return str;if(attrs.strict){var type=enm[attrs.values.type];if(type){var v=getfirst(type.getMap(attrs.values));if(v!=null){str=enum2string(attrs.values,v);if(str)return str;}}}
if(attrs.c){return ftype(attrs.c[0]).tostr(attrs.c[0],val);}
if(attrs.opt)return'';return'unknown';};types.enm.fromstr=function(attrs,str,limit){if(str=='')return null;if(limit&&limit.prefixes&&!hasOneOfPrefixes(limit.prefixes,str))return null;var val=string2enum(attrs.values,str);if(val!=null){if(!attrs.c||!limit||!limit.inner||ftype(attrs.c[0]).fromstr(attrs.c[0],str)==null){return val;}}
if(attrs.c){const innerlimit=limit?limit.inner:null;const val=ftype(attrs.c[0]).fromstr(attrs.c[0],str,innerlimit);return Array.isArray(val)?val[0]+val[1]:val;}
return null;};types.enm.less=function(attrs,v1,v2){if(attrs.sortbyvalue)return v1<v2;return types.enm.tostr(attrs,v1)<types.enm.tostr(attrs,v2);};types.enm.hasValue=function(attrs,val){if(attrs.c&&ftype(attrs.c[0]).hasValue(attrs.c[0],val))return true;return enum2string(attrs.values,val)!=null;};types.enm.view=function(attrs,ro){if(ro)return new ROTextView(attrs);var v;if(attrs.c){v=new ComboView(attrs);}else if(attrs.radio){v=new RadioView(attrs);}else{v=new EnumView(attrs);}
if(attrs.opt)v=new OptView(attrs,v);return v;};types.enm.deflimit=function(attrs){if(attrs.c){var l=ftype(attrs.c[0]).deflimit(attrs.c[0]);if(l!=null)return l;}
return'';};types.enm.addlimit=function(attrs,limit,str){var invert=false;if(str[0]=='!'){invert=true;str=str.substr(1);}
if(limit.invert&&!invert)return;if(!limit.invert&&invert){limit.prefixes=null;limit.invert=true;}
if(!invert&&attrs.c){var type=enm[attrs.values.type];if(!type||!hasPrefixIn(str,type.getMap(attrs.values))){if(!limit.inner)limit.inner={};if(ftype(attrs.c[0]).addlimit(attrs.c[0],limit.inner,str)){return true;}}}
if(!limit.prefixes)limit.prefixes=[];limit.prefixes.push(str);return true;};types.enm.deferred=function(attrs){return attrs.values?.type==="dynamic";};types.set=inherit(types.def);types.set.get=function(attrs,obj){var val=obj[attrs.id||0];if(val==null)return null;if(attrs.id&&attrs.id.charAt(0)=='U'){if(val.length==0)return null;return[val[0],(val[1]!=null?val[1]:~val[0])];}
var ival=null;if(attrs.maskid)ival=obj[attrs.maskid];if(!attrs.id)ival=obj[1];return[val,(ival!=null?ival:~val)];};types.set.put=function(attrs,obj,val){if(val==null)return;if(attrs.id&&attrs.id.charAt(0)=='U'){obj[attrs.id]=val;}else{obj[attrs.id||0]=val[0];if(!attrs.id||attrs.maskid)obj[attrs.maskid||1]=val[1];}};types.set.remove=function(attrs,obj){delete obj[attrs.id||0];if(attrs.maskid)delete obj[attrs.maskid];unset(obj,attrs.id);unset(obj,attrs.maskid);};types.set.tostr=function(attrs,val){if(val==null)return'';var values=attrs.values;var type=enm[values.type];if(!type)return"###";var res='';for(let i=0;i<32;++i){if(val[0]&(1<<i)){var s=type.toString(i,values);if(s){if(res!='')res+=', ';res+=s;}}}
return res;};types.set.less=function(attrs,v1,v2){return types.set.tostr(attrs,v1)<types.set.tostr(attrs,v2);};types.set.listen=function(attrs,cb){var type=enm[attrs.values.type];if(type&&type.listen)type.listen(attrs.values,cb);};types.set.unlisten=function(attrs,cb){var type=enm[attrs.values.type];if(type&&type.unlisten)type.unlisten(attrs.values,cb);};types.set.view=function(attrs,ro){return new SetView(attrs,ro);};types.set.deflimit=function(attrs){return'';};types.set.addlimit=function(attrs,limit,str){var invert=false;if(str[0]=='!'){invert=true;str=str.substr(1);}
if(limit.invert&&!invert)return;if(!limit.invert&&invert){limit.prefixes=null;limit.invert=true;}
if(!limit.prefixes)limit.prefixes=[];limit.prefixes.push(str);return true;};types.hyperlink=inherit(types.def);types.hyperlink.get=function(attrs,obj){return obj[attrs.id||0];};types.hyperlink.put=function(attrs,obj,val){};types.hyperlink.hasValue=function(attrs,val){return val!=null&&val!=0xffffffff;};types.hyperlink.tostr=function(attrs,val){if(!attrs.enm)attrs.enm={type:'dynamic',path:attrs.path};if(val==null)return'unknown';var str=enum2string(attrs.enm,val);return str?str:'*'+val.toString(16);};types.hyperlink.hyperlink=function(attrs,val){if(val==null)return null;var a=mapAttrs[attrs.path];if(a==null)return null;return getPath(a)+'.'+val;};types.hyperlink.view=function(attrs,ro){return types.def.view(attrs,true);};types.hyperlink.listen=function(attrs,cb){if(!attrs.enm)attrs.enm={type:'dynamic',path:attrs.path};enm.dynamic.listen(attrs.enm,cb);types.def.listen(attrs,cb);};types.hyperlink.unlisten=function(attrs,cb){enm.dynamic.unlisten(attrs.enm,cb);types.def.unlisten(attrs,cb);};types.raw=inherit(types.def);types.raw.tostr=function(attrs,val){let str='';try{for(let i=0;i<val.length;i++){str+=val[i].toString(16).padStart(2,'0');}}catch(e){}
return str;};types.raw.fromstr=function(attrs,str){if(str.length%2!=0)return null;if(!/^[0-9a-fA-F]*$/.test(str))return null;let val=[];for(let i=0;i<str.length;i+=2){val.push(parseInt(str.substring(i,i+2),16));}
return val;};types.lookup=inherit(types.def);types.lookup.updateCache=function(attrs){var map=getObjectMap(attrs.path);if(map==null)return;var res={}
map.foreach(obj=>{if(attrs._dst&&attrs._val){res[toString(attrs._dst,obj)]=toString(attrs._val,obj);}});attrs.cache=res;};types.lookup.get=function(attrs,obj){if(!attrs._src)attrs._src=getAttr(obj._type,attrs.src);var s=toString(attrs._src,obj);if(s==''||!attrs.cache)return'';var r=attrs.cache[s];return r!=undefined?r:'';}
types.lookup.listen=function(attrs,cb,ctrl,obj){if(!attrs.cb){types.lookup.updateCache(attrs);var map=getObjectMap(attrs.path);attrs.cb=function(){types.lookup.updateCache(attrs);attrs.lstns.notify();};attrs.lstns=new Listeners();if(map){attrs._dst=getAttr(map.attrs,attrs.dst);attrs._val=getAttr(map.attrs,attrs.val);ftype(attrs._dst).listen(attrs._dst,attrs.cb);ftype(attrs._val).listen(attrs._val,attrs.cb);map.listen(attrs.cb,true);}}
attrs.lstns.listen(cb);types.def.listen(attrs,cb);};types.lookup.unlisten=function(attrs,cb){if(attrs.lstns.unlisten(cb)){var map=getObjectMap(attrs.path);if(map){ftype(attrs._dst).unlisten(attrs._dst,attrs.cb);ftype(attrs._val).unlisten(attrs._val,attrs.cb);map.unlisten(attrs.cb,true);attrs.cb=null;}}
types.def.unlisten(attrs,cb);};types.objtype=inherit(types.def);types.objtype.view=function(attrs,ro){return new ROTextView(attrs);};types.objtype.get=function(attrs,obj){return obj._type?obj._type.title:'unknown';};types.label=inherit(types.def);types.label.get=function(attrs,obj){return attrs.label;};types.label.put=function(attrs,obj,val){};types.label.view=function(attrs,ro){if(!attrs.label){attrs.label=attrs.name;attrs.name=' ';}
return types.def.view(attrs,true);};types.tuple=inherit(types.def);types.tuple.get=function(attrs,obj,fullData){if(attrs.own)return obj;var val=[];for(var i in attrs.c){var v=ftype(attrs.c[i]).get(attrs.c[i],obj);if(!attrs.c[i].opt&&fullData&&v==null)return null;val.push(v);}
return val;};types.tuple.put=function(attrs,obj,val){if(attrs.own){for(let i=0;i<val.length;++i)obj[i]=val[i];return;}
for(let i in attrs.c){ftype(attrs.c[i]).put(attrs.c[i],obj,val[i]);};};types.tuple.remove=function(attrs,obj){if(attrs.own){delete obj[0];return;}
for(var i in attrs.c){ftype(attrs.c[i]).remove(attrs.c[i],obj);};};types.tuple.tostr=function(attrs,val){var str='';var sep=attrs.sep||'/';for(var i in val){var s=tostr(attrs.c[i],val[i]);if(s.length>0&&str.length>0)str+=sep;str+=s;}
return str;};types.tuple.fromstr=function(attrs,str){var res=[];var vals=str.split(attrs.sep||'/');for(var i in attrs.c){if(i>=vals.length&&attrs.c[i].opt)break;var v=ftype(attrs.c[i]).fromstr(attrs.c[i],i<vals.length?vals[i]:'');if(v==null)return null;res.push(v);}
return res;};types.tuple.less=function(attrs,v1,v2){for(var i in attrs.c){if(v1[i]==null)return v2[i]!=null;if(v2[i]==null)return false;if(ftype(attrs.c[i]).less(attrs.c[i],v1[i],v2[i]))return true;if(ftype(attrs.c[i]).less(attrs.c[i],v2[i],v1[i]))return false;}
return false;};types.tuple.view=function(attrs,ro){if(!attrs.separate||ro){return types.def.view(attrs,ro);}
return new TupleView(attrs);};types.tuple.deflimit=function(attrs){if(attrs.separate)return'';return null;};types.tuple.addlimit=function(attrs){return null;};types.tuple.limit=function(attrs,str){if(!attrs.separate)return types.def.limit(attrs,str);var limits=[];var chunks=str.split(';');for(let i in chunks){if(chunks[i].length==0)continue;if(attrs.c[i]==null)return null;if(attrs.c[i].ro)return null;var l=ftype(attrs.c[i]).limit(attrs.c[i],chunks[i]);if(l==null)return null;limits[i]=l;}
if(chunks.length==1){for(let i=1;i<attrs.c.length;++i)limits[i]=limits[0];}
return{limits:limits};};types.union=inherit(types.def);types.union.get=function(attrs,obj){if(attrs.id){let i=obj[attrs.id]||attrs.def||0;if(attrs.mapping!=null)i=attrs.mapping[i]||0;if(i>=attrs.c.length)return[0,null];let d=ftype(attrs.c[i]).get(attrs.c[i],obj,true);return[i,d];}else if(attrs.single){for(let i in attrs.c){let d=ftype(attrs.c[i]).get(attrs.c[i],obj,true);if(d!=null){return[Number(i),d];}}
return[(attrs.def||0),null];}else{var v=[];for(let i in attrs.c){v.push(ftype(attrs.c[i]).get(attrs.c[i],obj));}
return v;}};types.union.put=function(attrs,obj,val){if(attrs.single){if(val==null){val=[0,null];for(let i in attrs.c){if(attrs.c[i].opt){val[0]=i;break;}}}
for(let i in attrs.c){let a=attrs.c[i];if(i!=val[0])ftype(a).remove(a,obj);}
let a=attrs.c[val[0]];ftype(a).put(a,obj,val[1]);if(attrs.id){var v=val[0];if(attrs.mapping!=null){for(let i in attrs.mapping){if(attrs.mapping[i]==v){v=i;break;}}}
obj[attrs.id]=v;}}else{if(val==null)val=[];for(let i in attrs.c){if(val[i]!=null){ftype(attrs.c[i]).put(attrs.c[i],obj,val[i]);}}}};types.union.remove=function(attrs,obj){for(var i in attrs.c){ftype(attrs.c[i]).remove(attrs.c[i],obj);}};types.union.hasValue=function(attrs,val){if(attrs.single){if(val[1]==null)return false;var a=attrs.c[val[0]];return ftype(a).hasValue(a,val[1]);}
for(var i in val){if(val[i]!=null&&ftype(attrs.c[i]).hasValue(attrs.c[i],val[i]))return true;}
return false;};types.union.tostr=function(attrs,val){if(attrs.single){var a=attrs.c[val[0]];if(attrs.strict)a.strict=1;return ftype(a).tostr(a,val[1]);}else{for(var i in val){if(reduceIfNullish(val[i])!==null&&ftype(attrs.c[i]).hasValue(attrs.c[i],val[i])){return ftype(attrs.c[i]).tostr(attrs.c[i],val[i]);}}
return ftype(attrs.c[0]).tostr(attrs.c[0],val[0]);}};types.union.fromstr=function(attrs,str){if(attrs.single){for(let i in attrs.c){var v=ftype(attrs.c[i]).fromstr(attrs.c[i],str);if(v!=null)return[Number(i),v];}
return null;}else{var val=new Array(attrs.c.length);for(let i in attrs.c){val[i]=ftype(attrs.c[i]).fromstr(attrs.c[i],str);if(val[i]!=null)break;}
for(let i in attrs.c){if(val[i]!=null)continue;let str=ftype(attrs.c[i]).tostr(attrs.c[i],null);val[i]=ftype(attrs.c[i]).fromstr(attrs.c[i],str);}
return val;}};types.union.less=function(attrs,v1,v2){if(attrs.single){if(v1[0]<v2[0])return true;if(v1[0]>v2[0])return false;if(v1[1]==null)return v2[1]!=null;if(v2[1]==null)return false;var a=attrs.c[v1[0]];return ftype(a).less(a,v1[1],v2[1]);}
for(var i in v1){var hasv1=v1[i]!=null&&ftype(attrs.c[i]).hasValue(attrs.c[i],v1[i]);var hasv2=v2[i]!=null&&ftype(attrs.c[i]).hasValue(attrs.c[i],v2[i]);if(hasv1){if(!hasv2)return false;return ftype(attrs.c[i]).less(attrs.c[i],v1[i],v2[i]);}else{if(hasv2)return true;}}
return false;};types.union.view=function(attrs,ro){if(!attrs.values){var enms=[];for(let i in attrs.c){if(attrs.c[i].values)enms.push(attrs.c[i].values);}
if(enms.length>0)attrs.values={type:'pair',c:enms};}
if(!ro&&!attrs.single&&attrs.c.length>1){for(let i=0;i<attrs.c.length-1;++i){if(!attrs.c[i].ro)return types.def.view(attrs,ro);}
var last=attrs.c[attrs.c.length-1];return ftype(last).view(last,ro);}
return types.def.view(attrs,ro);};types.password=inherit(types.string);types.password.view=function(attrs,ro){if(ro)return new ROTextView(attrs);return new TextView(attrs,make.input({},"password"));};types.prefix=inherit(types.def);types.prefix.get=function(attrs,obj){return ftype(attrs.c[0]).get(attrs,obj);};types.prefix.put=function(attrs,obj,val){ftype(attrs.c[0]).put(attrs,obj,val);};types.prefix.remove=function(attrs,obj){ftype(attrs.c[0]).remove(attrs,obj);};types.prefix.tostr=function(attrs,val){var res=ftype(attrs.c[0]).tostr(attrs.c[0],val);if(res==null)return null;if(res!='')res=attrs.name+res;return res;};types.gridcell=inherit(types.def);types.gridcell.view=function(attrs,ro){return new CustomView(attrs,true,function(viewCtrl,obj){viewCtrl.createGrid();});};types.separator=inherit(types.def);types.separator.cfg=function(attrs,obj){return{};};types.separator.outside=true;types.separator.isRO=function(attrs){return true;};types.separator.view=function(attrs,ro){return new CustomView(attrs,true,function(viewCtrl,obj){viewCtrl.addSeparatorForNext();});};types.separator.column=function(attrs,table,type){return null;};types.tab=inherit(types.def);types.tab.put=function(attrs,obj,val){};types.tab.column=function(attrs,table,type){return null;};types.not=inherit(types.def);types.not.get=function(attrs,obj){return[obj[attrs.id],ftype(attrs.c[0]).get(attrs.c[0],obj)];};types.not.getvalue=function(attrs,obj){return obj[attrs.id];};types.not.put=function(attrs,obj,val){if(val instanceof Array){obj[attrs.id]=val[0];ftype(attrs.c[0]).put(attrs.c[0],obj,val[1]);}else{obj[attrs.id]=val;}};types.not.remove=function(attrs,obj){delete obj[attrs.id];ftype(attrs.c[0]).remove(attrs,obj);unset(obj,attrs.id);};types.not.tostr=function(attrs,val){if(val==null)return ftype(attrs.c[0]).tostr(attrs.c[0],val);return(val[0]?'!':'')+ftype(attrs.c[0]).tostr(attrs.c[0],val[1]);};types.not.less=function(attrs,v1,v2){if(v1[0]<v2[0])return true;if(v1[0]>v2[0])return false;return ftype(attrs.c[0]).less(attrs.c[0],v1[1],v2[1]);};types.not.view=function(attrs,ro){return new NotView(attrs,ro,ftype(attrs.c[0]).view(attrs.c[0],ro));};types.not.deflimit=function(attrs){return ftype(attrs.c[0]).deflimit(attrs.c[0]);};types.not.addlimit=function(attrs,limit,str){return ftype(attrs.c[0]).addlimit(attrs.c[0],limit,str);};types.opt=inherit(types.def);types.opt.VALUE={};types.opt.NOVAL={};types.opt.get=function(attrs,obj){if(attrs.id!=null){if(Number(!obj[attrs.id])^attrs.inv)return null;}
var val=ftype(attrs.c[0]).get(attrs.c[0],obj);if(attrs.id==null&&val!=null&&!ftype(attrs.c[0]).hasValue(attrs.c[0],val))val=null;return val;};types.opt.getvalue=function(attrs,obj){if(attrs.id!=null)return obj[attrs.id];return ftype(attrs.c[0]).get(attrs.c[0],obj)!=null;};types.opt.put=function(attrs,obj,val){if(val==null||val==types.opt.NOVAL){if(attrs.id!=null)obj[attrs.id]=!attrs.inv?0:1;ftype(attrs.c[0]).remove(attrs.c[0],obj);}else{if(attrs.id!=null)obj[attrs.id]=!attrs.inv?1:0;if(val!=types.opt.VALUE){ftype(attrs.c[0]).put(attrs.c[0],obj,val);}}};types.opt.remove=function(attrs,obj){delete obj[attrs.id];ftype(attrs.c[0]).remove(attrs,obj);};types.opt.tostr=function(attrs,val){if(val==null)return'';return ftype(attrs.c[0]).tostr(attrs.c[0],val);};types.opt.fromstr=function(attrs,str){if(str=='')return types.opt.NOVAL;var val=ftype(attrs.c[0]).fromstr(attrs.c[0],str);return val!=null&&ftype(attrs.c[0]).hasValue(attrs.c[0],val)?val:null;};types.opt.hasValue=function(attrs,val){return val!=null;};types.opt.less=function(attrs,v1,v2){return ftype(attrs.c[0]).less(attrs.c[0],v1,v2);};types.opt.cell=function(attrs,obj,val){if(attrs.cond&&!attrs.cond.isTrue(obj))return null;if(ftype(attrs).get(attrs,obj)==null){if(attrs.showdef&&obj._type.def){var d=obj[obj._type.def];if(d!=null){val=ftype(attrs).get(attrs,d);if(val!=null){const c=ftype(attrs.c[0]).cell(attrs.c[0],d,val);if(c!=null){const s=make.span();s.style.color='gray';s.appendChild(c);return s;}}}}
return null;}
return ftype(attrs.c[0]).cell(attrs.c[0],obj,val);};types.opt.view=function(attrs,ro){if(ro)return new ROTextView(attrs);return new OptView(attrs,ftype(attrs.c[0]).view(attrs.c[0],ro||attrs.c[0].ro));};types.opt.deflimit=function(attrs){return ftype(attrs.c[0]).deflimit(attrs.c[0]);};types.opt.addlimit=function(attrs,limit,str){return ftype(attrs.c[0]).addlimit(attrs.c[0],limit,str);};types.tristate=inherit(types.def);types.tristate.get=function(attrs,obj){return[obj[0],obj[1]];};types.tristate.put=function(attrs,obj,val){if(val instanceof Array){obj[0]=val[0];obj[1]=val[1];}else{obj[0]=val;}};types.tristate.remove=function(attrs,obj){delete obj[0];delete obj[1];};types.tristate.tostr=function(attrs,val){if(val==null)return'';return(val[0]?'!':'')+enum2string(attrs.values,val[1]);};types.tristate.less=function(attrs,v1,v2){if(v1[0]<v2[0])return true;if(v1[0]>v2[0])return true;return types.tristate.tostr(attrs,v1)<types.tristate.tostr(attrs,v2);};types.tristate.view=function(attrs,ro){if(!attrs.c){var enm={};enm.type='enm';enm.id=1;enm.values=attrs.values;attrs.c=[enm];}
return new NotView(attrs,ro,ftype(attrs.c[0]).view(attrs.c[0],ro));};types.tristate.deflimit=function(attrs){return'';};types.tristate.addlimit=function(attrs,limit,str){if(!attrs.c)return false;return ftype(attrs.c[0]).addlimit(attrs.c[0],limit,str);};types.multi=inherit(types.def);types.multi.get=function(attrs,obj){return obj[attrs.id];};types.multi.put=function(attrs,obj,val){obj[attrs.id]=val;if(attrs.optid)obj[attrs.optid]=val.length>0?1:0;};types.multi.remove=function(attrs,obj){delete obj[attrs.id];if(attrs.optid)delete obj[attrs.optid];unset(obj,attrs.id);unset(obj,attrs.optid);};types.multi.tostr=function(attrs,val){var str='';for(var i in val){if(str.length>0)str+=', ';var v=ftype(attrs.c[0]).get(attrs.c[0],val[i]);str+=ftype(attrs.c[0]).tostr(attrs.c[0],v);}
return str;};types.multi.less=function(attrs,v1,v2){var a=attrs.c[0];for(var i in v1){if(i==v2.length)return false;var val1=ftype(attrs.c[0]).get(attrs.c[0],v1[i]);var val2=ftype(attrs.c[0]).get(attrs.c[0],v2[i]);if(val1==null)return val2!=null;if(val2==null)return true;if(ftype(a).less(a,val1,val2))return true;if(ftype(a).less(a,val2,val1))return false;}
return v1.length<v2.length;};types.multi.view=function(attrs,ro){return new MultiView(attrs,ro,function(){return ftype(attrs.c[0]).view(attrs.c[0],ro);});};types.multi.deflimit=function(attrs){return ftype(attrs.c[0]).deflimit(attrs.c[0]);};types.multi.addlimit=function(attrs,limit,str){return ftype(attrs.c[0]).addlimit(attrs.c[0],limit,str);};types.multinumber=inherit(types.multi);types.multinumber.get=function(attrs,obj){if(attrs.optid!=null&&obj[attrs.optid]==false)return null;var val=obj[attrs.id];if(val==null)return val;var a=new Array(val.length);for(var i in val)a[i]={0:val[i]};return a;};types.multinumber.put=function(attrs,obj,val){var a=[];for(var i in val){if(val[i][0]!=null)a.push(val[i][0]);}
obj[attrs.id]=a;if(attrs.optid!=null)obj[attrs.optid]=a.length>0?1:0;};types.multinumberrange=inherit(types.multi);types.multinumberrange.get=function(attrs,obj){if(attrs.optid!=null&&obj[attrs.optid]==false)return null;var val=obj[attrs.id];if(val==null)return val;if(attrs.id2!=null){var val2=obj[attrs.id2];if(val2==null)val2=[];let a=new Array(val.length);for(let i=0;i<val.length;++i){a[i]={0:val[i],1:val2[i]};}
return a;}
let a=new Array(val.length/2);for(let i=0;i<val.length;i+=2){a[i/2]={0:val[i],1:val[i+1]};}
return a;};types.multinumberrange.put=function(attrs,obj,val){if(attrs.optid!=null)obj[attrs.optid]=val.length>0?1:0;if(attrs.id2!=null){let a=[];var a2=[];for(let i in val){a.push(val[i][0]);a2.push(val[i][1]);}
obj[attrs.id]=a;obj[attrs.id2]=a2;return;}
let a=[];for(let i in val){if(val[i][0]!=null&&val[i][1]!=null){a.push(val[i][0]);a.push(val[i][1]);}}
obj[attrs.id]=a;};types.multinetwork=inherit(types.multinumberrange);types.multinetwork.get=function(attrs,obj){if(attrs.maskid==null)return types.multinumberrange.get(attrs,obj);if(attrs.optid!=null&&obj[attrs.optid]==false)return null;var addr=obj[attrs.id];var mask=obj[attrs.maskid];if(addr==null)return null;var a=new Array(addr.length);for(var i=0;i<addr.length;++i){a[i]={0:addr[i],1:mask[i]};}
return a;};types.multinetwork.put=function(attrs,obj,val){if(attrs.maskid==null)return types.multinumberrange.put(attrs,obj,val);var addr=[];var mask=[];for(var i in val){if(val[i][0]!=null&&val[i][1]!=null){addr.push(val[i][0]);mask.push(val[i][1]);}}
obj[attrs.id]=addr;obj[attrs.maskid]=mask;if(attrs.optid!=null)obj[attrs.optid]=addr.length>0?1:0;};types.multimacnetwork=inherit(types.multinetwork);types.multibignumber=inherit(types.multinumber);types.multiipaddr=inherit(types.multinumber);types.multiip6addr=inherit(types.multinumber);types.multinetwork6=inherit(types.multinetwork);types.multistring=inherit(types.multinumber);types.multiraw=inherit(types.multinumber);types.multibits=inherit(types.multi);types.multibits.get=function(attrs,obj){var val=obj[attrs.id];if(val==null)return null;var a=[];for(var i=0;i<32;++i){if(val&(1<<i))a.push({0:i});}
return a;};types.multibits.put=function(attrs,obj,val){var bmap=0;for(var i in val){if(val[i][0]==null)continue;bmap|=1<<val[i][0];}
obj[attrs.id]=bmap;if(attrs.maskid)obj[attrs.maskid]=~bmap;};types.multibits.remove=function(attrs,obj){delete obj[attrs.id];if(attrs.maskid)delete obj[attrs.maskid];unset(obj,attrs.id);unset(obj,attrs.maskid);};types.multitristate=inherit(types.multibits);types.multitristate.get=function(attrs,obj){const id=obj[attrs.id]??0;const maskid=obj[attrs.maskid]??0;const bmap=id|maskid;const a=[];for(let i=0;i<32;++i){if(bmap&(1<<i))a.push({0:(id&(1<<i))==0,1:i});}
return a;};types.multitristate.put=function(attrs,obj,val){var bmap=0;var bmask=0;for(var i in val){if(val[i][0]==null)continue;if(val[i][0]==0){bmap|=1<<val[i][1];}else{bmask|=1<<val[i][1];}}
obj[attrs.id]=bmap;obj[attrs.maskid]=bmask;};types.multitristatearray=inherit(types.multi);types.multitristatearray.get=function(attrs,obj){var on=obj[attrs.id];var off=obj[attrs.oid];if(on==null||off==null)return null;var a=[];for(let i in on){a.push({0:0,1:on[i]});}
for(let i in off){a.push({0:1,1:off[i]});}
return a;};types.multitristatearray.put=function(attrs,obj,val){var on=[];var off=[];for(var i in val){if(val[i][0]==null)continue;if(!val[i][0]){on.push(val[i][1]);}else{off.push(val[i][1]);}}
obj[attrs.id]=on;obj[attrs.oid]=off;};types.multitristatearray.remove=function(attrs,obj){delete obj[attrs.id];delete obj[attrs.oid];unset(obj,attrs.id);unset(obj,attrs.oid);};types.multituple=inherit(types.multi);types.multituple.get=function(attrs,obj){var v=[];for(var i in attrs.c){var a=ftype(attrs.c[i]).get(attrs.c[i],obj);for(var j in a){if(v[j]==null)v[j]=new Array(attrs.c.length);v[j][i]=toarray(a[j]);}}
return v;};types.multituple.put=function(attrs,obj,val){var a=new Array(attrs.c.length);for(let i in attrs.c){a[i]=new Array(val.length);}
for(let i in val){if(val[i]==null)continue;for(var j in attrs.c){a[j][i]=fromarray(val[i][j]);}}
for(let i in attrs.c){ftype(attrs.c[i]).put(attrs.c[i],obj,a[i]);}};types.multituple.remove=function(attrs,obj){for(var i in attrs.c){ftype(attrs.c[i]).remove(attrs.c[i],obj);}};types.multituple.tostr=function(attrs,val){var a=this.attrs(attrs);var str='';for(var i in val){if(str.length>0)str+=', ';ftype(a).tostr(a,val[i]);}
return str;};types.multituple.view=function(attrs,ro){var a=this.attrs(attrs);return new MultiView(attrs,ro,function(){return ftype(a).view(a,ro);});};types.multituple.attrs=function(attrs){if(attrs.tuple)return attrs.tuple;const c=[];for(var i in attrs.c){var ac=attrs.c[i].c[0];ac.id=i;c.push(ac);}
return attrs.tuple={type:'tuple',own:1,c:c,separate:1};};function findAttr(attrs,name){for(var i in attrs){if(attrs[i].name==name)return attrs[i];}
return null;}
types.group=inherit(types.def);types.group.get=function(attrs,obj){if(attrs.id)return obj[attrs.id];if(!attrs.keys){for(let i in attrs.c){let a=attrs.c[i];let val=ftype(a).get(a,obj);if(val!=null&&ftype(a).hasValue(a,val))return 1;}}
for(let i in attrs.keys){let a=findAttr(attrs.c,attrs.keys[i]);let val=ftype(a).get(a,obj);if(val!=null&&ftype(a).hasValue(a,val))return 1;}
return 0;};types.group.put=function(attrs,obj,val){if(attrs.id)obj[attrs.id]=val;};types.group.remove=function(attrs,obj){if(attrs.id)delete obj[attrs.id];unset(obj,attrs.id);};types.group.view=function(attrs,ro){return new GroupView(attrs,ro);};types.deck=inherit(types.def);types.deck.view=function(attrs,ro){return new DeckView(attrs,ro);};types.deck.lookup=function(attrs,owner,name,nr){if(owner){if(attrs.name){if(owner!=attrs.name)return null;}else{if(!attrs.owner||attrs.owner.name!=owner)return null;}}
for(var p in attrs.panes){var pane=attrs.panes[p];for(var i in pane.c){var a=ftype(pane.c[i]).lookup(pane.c[i],null,name,nr);if(a!=null)return a;}}
return null;};types.grid=inherit(types.def);types.grid.view=function(attrs,ro){return new GridView(attrs,ro);};types.gridmultinumber=inherit(types.def);types.gridmultinumber.get=function(attrs,obj){var val=obj[attrs.id];if(!val)return{};var res={};for(var i=0;i+1<val.length;i+=2){res[val[i]]=val[i+1];}
return res;};types.gridmultinumber.put=function(attrs,obj,val){var a=[];for(var i in val){a.push(i);a.push(val[i]);}
obj[attrs.id]=a;};types.gridmultinumber.view=function(attrs,ro){return new GridMultiView(attrs,ro);};types.flag=inherit(types.def);types.flag.outside=true;types.flag.get=function(attrs,obj){var val=obj[attrs.id]||0;if(attrs.val!=null)val=val==attrs.val?1:0;return attrs.inv?(val?0:1):val;};types.flag.put=function(attrs,obj,val){};types.flag.tostr=function(attrs,val){return val?attrs.name:'';};types.flag.cfg=function(attrs,obj){var name=attrs.name||ftype(attrs).tostr(attrs,true);if(attrs.band!=null)name='flag'+attrs.band;return getAttrProp(obj,attrs,name);};types.flag.view=function(attrs,ro){if(attrs.status)return new BoolView(attrs,true);return new FlagView(attrs,false);};types.flag.column=function(attrs,table,type){var name=attrs.name||ftype(attrs).tostr(attrs,true);if(attrs.band!=null)name='flag'+attrs.band;if(shouldHide(getAttrProp(type,attrs,name),attrs.hidebydefault))return null;table.addFlag(attrs,attrs.band);return null;};types.flag.flag=function(attrs,val){if(!val)return null;return[make.span({cont:attrs.hint}),attrs.name?`${attrs.hint} - ${attrs.name}`:null];};types.flag.lookup=function(attrs,owner,name,nr){if(types.def.lookup(attrs,owner,name,nr)!=null){attrs=inherit(attrs);attrs.status=1;attrs.order=null;return attrs;}
return null;};types.numflag=inherit(types.flag);types.numflag.get=function(attrs,obj){return obj[attrs.id];};types.numflag.tostr=function(attrs,val){var v=attrs.c[val||0];return v!=null?v[0]:'';};types.numflag.view=function(attrs,ro){return new FlagView(attrs,true);};types.numflag.flag=function(attrs,val){val=attrs.c[val||attrs.def];if(!val)return null;return[make.span({cont:val[1]}),`${val[1]} - ${val[0]}`];};types.enable=inherit(types.flag);types.enable.name='Enabled';types.enable.secondname='enable';types.enable.get=function(attrs,obj){if(attrs.id)return obj[attrs.id]?1:0;return obj.bfe000a&&!obj.bfe0007?0:1;};types.enable.put=function(attrs,obj,val){if(attrs.id){obj[attrs.id]=val?1:0;}else{obj.bfe000a=val?0:1;}};types.enable.tostr=function(attrs,val){return val?'enabled':'disabled';};types.enable.cfg=function(attrs,obj){return getAttrProp(obj,attrs,'Enabled');};types.enable.view=function(attrs,ro){if(!attrs.status)attrs.order=0;return new BoolView(attrs,ro);};types.enable.column=function(attrs,table,type){var cfg=getAttrProp(type,attrs,'Enabled');if(shouldHide(cfg,attrs.hidebydefault))return null;table.addFlag(attrs);if(!type.ro)table.addEnable(attrs);return null;};types.enable.flag=function(attrs,val){if(val)return null;return[make.span({cls:"disabled",cont:"X"}),"X - disabled"];};types.enable.lookup=function(attrs,owner,name,nr){return types.flag.lookup(attrs,owner,name,nr);};types.invalid=inherit(types.flag);types.invalid.name='Invalid';types.invalid.secondname='invalid';types.invalid.get=function(attrs,obj){return obj.bfe0008&&!obj.bfe000a;};types.invalid.tostr=function(attrs,val){return val?'invalid':'';};types.invalid.view=function(attrs,ro){return types.flag.view(attrs,ro);};types.invalid.flag=function(attrs,val){if(!val)return null;return[make.span({cls:"disabled",cont:"I"}),"I - invalid"];};types.invalid.lookup=function(attrs,owner,name,nr){return types.flag.lookup(attrs,owner,name,nr);};types.dynamic=inherit(types.flag);types.dynamic.name='Dynamic';types.dynamic.secondname='dynamic';types.dynamic.get=function(attrs,obj){return obj.bfe0007;};types.dynamic.tostr=function(attrs,val){return val?'dynamic':'';};types.dynamic.view=function(attrs,ro){if(attrs.status)return new BoolView(attrs,true);return new FlagView(attrs,true,'dynamic');};types.dynamic.flag=function(attrs,val){if(!val)return null;return[make.span({cont:"D"}),"D - dynamic"];};types.dynamic.lookup=function(attrs,owner,name,nr){return types.flag.lookup(attrs,owner,name,nr);};types.preset=inherit(types.flag);types.preset.name='Default';types.preset.secondname='default';types.preset.get=function(attrs,obj){return obj.bfe000d;};types.preset.tostr=function(attrs,val){return val?'default':'';};types.preset.view=function(attrs,ro){if(attrs.status)return new BoolView(attrs,true);return new FlagView(attrs,true,'default');};types.preset.flag=function(attrs,val){if(!val)return null;return[make.span({cont:"*"}),"* - default"];};types.preset.lookup=function(attrs,owner,name,nr){return types.flag.lookup(attrs,owner,name,nr);};types.active=inherit(types.flag);types.active.name='Active';types.active.secondname='active';types.active.get=function(attrs,obj){if(attrs.id)return obj[attrs.id]?1:0;return obj.bfe000a?0:1;};types.active.tostr=function(attrs,val){return val?'active':'inactive';};types.active.cfg=function(attrs,obj){return getAttrProp(obj,attrs,'Active');};types.active.view=function(attrs,ro){return new FlagView(attrs,false,'default');};types.active.flag=function(attrs,val){console.assert(false,"QuickSet modes are not listed in table, yet it somehow was");};types.toggle=inherit(types.def);types.toggle.outside=true;types.toggle.cfg=function(attrs,obj){const name=attrs.modes[1];return getAttrProp(obj,attrs,name);};types.toggle.view=function(attrs,ro){return new ToggleView(attrs);};types.status=inherit(types.def);types.status.outside=true;types.status.view=function(attrs,ro){return new StatusView(attrs);};types.status.lookup=function(attrs,owner,name,nr){if(owner)return null;for(var i in attrs.c){var a=ftype(attrs.c[i]).lookup(attrs.c[i],null,name,nr);if(a!=null){attrs=inherit(attrs);attrs.c=[a];return attrs;}}
return null;};types.statusbar=inherit(types.def);types.statusbar.outside=true;types.statusbar.isRO=function(attrs){return true;};types.statusbar.cfg=function(attrs,obj){return getAttrProp(obj,attrs,attrs.name||'statusbar');};types.statusbar.view=function(attrs){if(attrs.path||attrs.cmd)return null;return new StatusBar(attrs);};types.statusbar.column=function(attrs,table,type){if(!attrs.path&&!attrs.cmd)return null;var t={};t.owner=type;t.path=attrs.path||type.path;t.getcmd=attrs.cmd;t.c=attrs.c;t.ro=true;var holder=new ObjectHolder(t);var views=[];for(var i in attrs.c){views.push(new StatusBarView(attrs.c[i],null,holder.getObject()));}
var update=function(){for(var i in views){views[i].load(holder.getObject());}};holder.listen(update);table.onDestroy(function(){holder.unlisten(update);});return null;};types.comment=inherit(types.string);types.comment.outside=true;types.comment.get=function(attrs,obj){return obj.sfe0009;};types.comment.put=function(attrs,obj,val){obj.sfe0009=val;};types.comment.tostr=function(attrs,val){return val||'';};types.comment.column=function(attrs,table,type){var cfg=getAttrProp(type,attrs,'Comment');if(shouldHide(cfg,attrs.hidebydefault))return null;table.addComment(attrs);return null;};types.comment.view=function(attrs,ro){if(!attrs.name)attrs.name='Comment';if(!attrs.status)attrs.order=1;if(ro)return new ROTextView(attrs,5);return new TextAreaView(attrs);};types.comment.lookup=function(attrs,owner,name,nr){if(!attrs.name)attrs.name='Comment';if(types.def.lookup(attrs,owner,name,nr)!=null){attrs=inherit(attrs);attrs.order=null;attrs.status=1;return attrs;}
return null;};types.comment.cfg=function(attrs,obj){if(obj._type==null)return{};return getAttrProp(obj,attrs,"Comment");};types.about=inherit(types.def);types.about.outside=true;types.about.get=function(attrs,obj){var val=obj.Sfe001c;if(val==null)return val;var i=0;while(i<val.length){if(val[i]==''){val.splice(i,1);continue;}
++i;}
return val;};types.about.column=function(attrs,table,type){table.addAboutInfo(attrs);};types.about.view=function(attrs,ro){return new AboutView(attrs);};types.columnalias=inherit(types.def);types.columnalias.alias=true;types.columnalias.column=function(attrs,table,type){if(!attrs.alias)attrs.alias=getAttr(type,attrs.name);if(attrs.alias){var c=ftype(attrs.alias).column(attrs.alias,table,type);if(c)return[c[0],attrs.width];}
return null;};types.columnalias.cell=function(attrs,obj,val,cell){if(attrs.alias){val=ftype(attrs.alias).get(attrs.alias,obj);return ftype(attrs.alias).cell(attrs.alias,obj,val,cell);}
return null;};types.columnalias.listen=function(attrs,cb){if(attrs.alias)ftype(attrs.alias).listen(attrs.alias,cb);};types.columnalias.unlisten=function(attrs,cb){if(attrs.alias)ftype(attrs.alias).unlisten(attrs.alias,cb);};types.columnalias.view=function(){return null;};types.columnalias.lookup=function(attrs,owner,name,nr){return null;};types.columnalias.get=function(attrs,obj){return types[attrs.alias.type].get(attrs.alias,obj);};types.alias=inherit(types.def);types.alias.alias=true;types.alias.view=function(attrs,ro){return new AliasView(attrs,ro);};types.alias.lookup=function(attrs,owner,name,nr){return null;};types.graph=inherit(types.def);types.graph.get=function(attrs,obj){if(!attrs.model)return null;return ftype(attrs.model).get(attrs.model,obj);};types.graph.put=function(attrs,obj,val){if(attrs.model){ftype(attrs.model).put(attrs.model,obj,val);}};types.graph.view=function(attrs){return new GraphView(attrs);};types.graph.column=function(attrs,table,type){if(attrs.model&&attrs.width)return types.def.column(attrs,table,type);return null;};types.graph.cell=function(attrs,obj,val,canvas){if(val==null)return null;const g=createGraphic(canvas,200,16,80,16);if(g==null)return null;g.canvas.style.display='block';g.strokeWidth=3;drawBars(g,val,attrs.offset,attrs.max,attrs.colors);return g.canvas;};types.graphbox=inherit(types.def);types.graphbox.get=function(attrs,obj){var r=[];for(var g in attrs.graphs){r.push(ftype(attrs.graphs[g]).get(attrs.graphs[g],obj));}
return r;};types.graphbox.put=function(attrs,obj,val){if(val==null)return;for(var g in attrs.graphs){if(val[g]!=null){ftype(attrs.graphs[g]).put(attrs.graphs[g],obj,val[g]);}}};types.graphbox.view=function(attrs){attrs.name='Graph';return new GraphBox(attrs);};types.graphbox.lookup=function(attrs,owner,name,nr){if(owner&&(!attrs.owner||attrs.owner.name!=owner))return null;for(var g in attrs.graphs){if(attrs.graphs[g].name==name){if(--nr[0]==0)return attrs.graphs[g];}}
return null;};types.file=inherit(types.def);types.file.column=function(attrs,table,type){if(!(sysres.policy&(1<<4)))return null;if(sysres.policy&(1<<7)){const view=new FileUploadView(attrs);const input=view.create();input.id="uploader-field";const btn=current.addActionButton("Upload...");btn.onclick=()=>input.click();}
if(!(sysres.policy&(1<<6)))return null;this.createButton(attrs,true,null,type,null,table);table.onDestroy(()=>{document.body.ondragenter=null;document.body.ondragover=null;});return null;};types.file.createButton=function(attrs,global,obj,type,view,ctrl){const cfg=getAttrProp(type,attrs);const downloadable=obj=>{attrs.typeAttr??=getAttr(obj._type,'type');if(attrs.typeAttr){const type=ftype(attrs.typeAttr).get(attrs.typeAttr,obj);if(type===5||type===9)return false;}
return true;}
if(obj&&!downloadable(obj))return;const b=current.addActionButton("Download",cfg,obj?._owner?.toString(obj));const downloadFile=obj=>{const path=obj._owner.toString(obj);const link=make.anchor({},"/jsproxy/?"+session.encryptURI(path));link.download=path;link.click();}
b.onclick=e=>{if(obj)downloadFile(obj);else[...ctrl.selected].filter(downloadable).forEach(downloadFile);e.preventDefault();}
if(!b.href){b.disabled=true;ctrl.selectLstns?.listen(()=>{b.disabled=![...ctrl.selected].filter(downloadable).length;});}else{b.onkeydown=e=>{if(e.key!=="Enter")return;b.click();e.preventDefault();}}}
types.file.view=function(attrs,ro){if(!(sysres.policy&(1<<6)))return null;if(!(sysres.policy&(1<<4)))return null;if(attrs.tb)return new ContextButtonView(attrs);var view=new CustomView(attrs,false,(viewCtrl,cfg,obj)=>this.createButton(attrs,false,obj,obj._type,view,viewCtrl));return view;};types.custom=inherit(types.def);types.custom.view=function(){return null;};types.filter=inherit(types.def);types.filter.view=function(){return null;};types.filter.column=function(attrs,table,type){table.addFilter(attrs);return null;};types.doit=inherit(types.def);types.doit.outside=true;types.doit.isRO=function(attrs){return true;};types.doit.createButton=function(attrs,global,obj,type,view,ctrl){var cfg=getAttrProp(type,attrs);if(shouldHide(cfg,attrs.hidebydefault))return;if(attrs.global&&obj&&obj._type.type=='item')global=true;var b;if(attrs.c){b=current.addActionButton(attrs.name,cfg,getPath(type)+'.'+normalize(attrs.name));}else if((attrs.global||false)==global){if(attrs.name==''||attrs.name==null){return;}
b=current.addActionButton(attrs.name,cfg);b.onclick=function(e){if(!attrs.confirm||confirm(attrs.confirm)){var doit=new Doit(attrs,type.path);if(obj)doit.setID(obj.ufe0001);doit.doit();}};}else{if(!attrs.name)return;if(!ctrl)return;b=current.addActionButton(attrs.name,cfg);b.disabled=true;get(`${b.id}-opt`).disabled=true;b.dataset.perRow=true;ctrl.selectLstns?.listen(()=>{b.disabled=!ctrl.selected.size;get(`${b.id}-opt`).disabled=b.disabled;});b.onclick=e=>{if(!attrs.confirm||confirm(attrs.confirm)){ctrl.selected.forEach(obj=>{const doit=new Doit(attrs,type.path);doit.setID(obj.ufe0001);doit.doit();})}}}
return b?b.parentNode:null;};types.doit.view=function(attrs,ro){if(attrs.tb)return new ContextButtonView(attrs);var view=new CustomView(attrs,false,(viewCtrl,cfg,obj)=>this.createButton(attrs,false,obj,obj._type,view,viewCtrl));return view;};types.doit.column=function(attrs,table,type){this.createButton(attrs,true,null,type,null,table);return null;};types.autoset=inherit(types.def);types.autoset.get=function(attrs,obj){return ftype(attrs.c[0]).get(attrs.c[0],obj);};types.autoset.put=function(attrs,obj,val){ftype(attrs.c[0]).put(attrs.c[0],obj,val);};types.autoset.isRO=function(attrs){return true;};types.autoset.view=function(attrs,ro){return new AutoSetView(attrs,ro);};types.contextmenu=inherit(types.def);types.contextmenu.outside=true;types.contextmenu.view=function(attrs,ro){return new ContextButtonView(attrs);};types.contextmenu.column=function(attrs,table,type){if(attrs.link.length===0){var cfg=getAttrProp(type,attrs);if(shouldHide(cfg,attrs.hidebydefault))return null;var cont=findContainer(attrs.group,normalize(attrs.open),attrs.tab?normalize(attrs.tab):null);if(!cont)return null;current.addActionButton(attrs.name,cfg,getPath(cont));}
return null;};types.toolbar=inherit(types.def);types.toolbar.put=function(attrs,obj,val){};types.toolbar.outside=true;types.toolbar.view=function(attrs,ro){return new ToolbarView(attrs);};types.buttonsep=inherit(types.def);types.buttonsep.view=function(attrs,ro){return new CustomView(attrs,false,function(viewCtrl,cfg,obj){});};types.cond=inherit(types.def);types.cond.view=function(){return null;};types.cond.isRO=function(){return true;};types.concat=inherit(types.def);types.concat.get=function(attrs,obj){var first=attrs.first;if(typeof first=='string')first=getAttr(obj._type,first);var second=attrs.second;if(typeof second=='string')second=getAttr(obj._type,second);var f=toString(first,obj);var s=toString(second,obj);if(s==null||s.length==0)return f!=null?f:'';if(f==null||f.length==0)return'';return f+attrs.sep+s;};var enm={};enm.def={};enm.def.toString=function(val,attrs,obj){var str=this.getMap(attrs,obj)[val];return str!=''?str:null;};enm.def.getMap=function(attrs,obj){if(attrs.values){return enm[attrs.values.type].getMap(attrs.values,obj);}
return{};};enm.def.listen=function(attrs,cb,ctrl,obj){if(attrs.values)enm[attrs.values.type].listen(attrs.values,cb,ctrl,obj);};enm.def.unlisten=function(attrs,cb,obj){if(attrs.values)enm[attrs.values.type].unlisten(attrs.values,cb,obj);};enm.defenum=inherit(enm.def);enm.defenum.getMap=function(attrs,obj){var map=enm[attrs.values.type].getMap(attrs.values,obj);map=inherit(map);map[attrs.defid]=attrs.defname;return map;};enm['static']=inherit(enm.def);enm['static'].getMap=function(attrs){return attrs.map;};enm['pair']=inherit(enm.def);enm['pair'].toString=function(val,attrs,obj){for(var i in attrs.c){var vals=attrs.c[i];var v=enm[vals.type].toString(val,vals,obj);if(v!=null)return v;}
return null;};enm['pair'].getMap=function(attrs,obj){var res={};for(var i in attrs.c){var vals=attrs.c[i];var map=enm[vals.type].getMap(vals,obj);for(var j in map){if(map[j]!='')res[j]=map[j];}}
return res;};enm['pair'].listen=function(attrs,cb,ctrl,obj){for(var i in attrs.c){var vals=attrs.c[i];enm[vals.type].listen(vals,cb,ctrl,obj);}};enm['pair'].unlisten=function(attrs,cb,obj){for(var i in attrs.c){var vals=attrs.c[i];enm[vals.type].unlisten(vals,cb,obj);}};enm.dynamic=inherit(enm.def);enm.dynamic.toString=function(val,attrs){if(attrs.cache){var str=attrs.cache[val];if(str!=null)return str;}
try{var map=getObjectMap(attrs.path);return map.toString(map.getObject(val));}catch(e){return null;}};enm.dynamic.getMap=function(attrs){if(attrs.cache)return attrs.cache;var map=getObjectMap(attrs.path);if(map==null)return{};var res={};map.foreach((obj)=>{if(attrs.pred&&!isTrue(attrs.pred,obj))return;res[obj.ufe0001]=map.toString(obj);});return res;};enm.dynamic.listen=function(attrs,cb){if(!attrs.lstns)attrs.lstns=new Listeners();if(attrs.lstns.listen(cb)){var map=getObjectMap(attrs.path);if(map==null)return;attrs.cb=function(obj,more){const id=obj.ufe0001??0xffffffff;if(attrs.cache){if(obj.ufe0013){delete attrs.cache[id];}else{if(attrs.pred&&!isTrue(attrs.pred,obj))return;attrs.cache[id]=map.toString(obj);}
attrs.lstns.notify(obj,more);}};map.listen(attrs.cb,false);attrs.cache=this.getMap(attrs);}};enm.dynamic.unlisten=function(attrs,cb){if(attrs.lstns&&attrs.lstns.unlisten(cb)){attrs.cache=null;getObjectMap(attrs.path).unlisten(attrs.cb,false);}};enm.enumfilter=inherit(enm.def);enm.enumfilter.toString=function(val,attrs){return enm[attrs.values.type].toString(val,attrs.values);};enm.enumfilter.getMap=function(attrs,obj){var map=enm[attrs.values.type].getMap(attrs.values);var filter={};for(var i in attrs.filters){var a=attrs.filters[i];if(!a.pred||(obj&&isTrue(a.pred,obj)))filter[a.id]=map[a.id];}
return filter;};enm.enumfilter.listen=function(attrs,cb,ctrl,obj){if(!obj)return;var lstn=function(){var map=enm[attrs.values.type].getMap(attrs.values);for(var i in attrs.filters){var a=attrs.filters[i];const o={ufe0001:a.id};if(a.pred&&!isTrue(a.pred,obj))o.ufe0013=1;cb(o);}};cb.lstn=lstn;obj._owner.listen(cb.lstn,true);};enm.enumfilter.unlisten=function(attrs,cb,obj){if(!obj)return;if(cb.lstn){obj._owner?.unlisten(cb.lstn,true);}};enm.remapenum=inherit(enm.def);enm.remapenum.getMap=function(attrs,obj){if(!attrs.obj){if(attrs.view){var map=getObjectMap(attrs.path);attrs.obj=map.getObject(attrs.view.getValue());}
if(!attrs.obj)return{};}
attrs.map=enm[attrs.values.type].getMap(attrs.values,attrs.obj);return attrs.map;};enm.remapenum.listen=function(attrs,cb,ctrl,obj){if(!attrs.lstns)attrs.lstns=new Listeners();if(attrs.lstns.listen(cb)){attrs.cb=()=>{this.notify(attrs);};attrs.view=ctrl.getView(attrs.master);attrs.view.listen(attrs.cb);getObjectMap(attrs.path).listen(attrs.cb,false);this.notify(attrs);}};enm.remapenum.unlisten=function(attrs,cb,obj){if(attrs.lstns&&attrs.lstns.unlisten(cb)){attrs.view.unlisten(attrs.cb);delete attrs.view;getObjectMap(attrs.path).unlisten(attrs.cb,false);}};enm.remapenum.notify=function(attrs){var map=getObjectMap(attrs.path);let obj=map.getObject(attrs.view.getValue());if(attrs.obj==obj)return;attrs.obj=obj;if(!attrs.obj)return;var oldmap={};if(attrs.map){for(var i in attrs.map)oldmap[i]=attrs.map[i];}
attrs.map=this.getMap(attrs);for(let i in attrs.map){if(oldmap[i]!=null){delete oldmap[i];}else{const obj={};obj.ufe0001=Number(i);attrs.lstns.notify(obj);}}
for(let i in oldmap){const obj={};obj.ufe0001=Number(i);obj.ufe0013=1;attrs.lstns.notify(obj);}};enm.slotenum=inherit(enm.def);enm.slotenum.getMap=function(attrs,obj){if(attrs.map&&attrs.obj==obj)return attrs.map;if(!attrs.namesAttrs){attrs.namesAttrs=getAttr(obj._type,attrs.names);}
if(!attrs.valuesAttrs){attrs.valuesAttrs=getAttr(obj._type,attrs.values);}
var names=ftype(attrs.namesAttrs).get(attrs.namesAttrs,obj);var vals=ftype(attrs.valuesAttrs).get(attrs.valuesAttrs,obj);if(!names||!vals)return{};var map={};for(var i in names){map[vals[i][0]]=names[i][0];}
attrs.map=map;attrs.obj=obj;return map;};enm.slotenum.listen=function(attrs,cb){};enm.slotenum.unlisten=function(attrs,cb){};enm.offsetenum=inherit(enm.def);enm.offsetenum.toString=function(val,attrs,obj){return enm[attrs.values.type].toString(val,attrs.values,obj);};enm.queryenum=inherit(enm.def);enm.queryenum.toString=function(val,attrs,obj){var map=enm.queryenum.getMap(attrs,obj);if(!map)return val.toString();var str=map[val];if(str)return str;return null;};enm.queryenum.getMap=function(attrs,obj){if(!attrs.map||attrs.obj!=obj){if(!attrs.map||(obj&&attrs.obj!=obj))attrs.map={};if(!obj)return attrs.map;attrs.obj=obj;if(attrs.obj)this.query(attrs);}
return attrs.map;};enm.queryenum.listen=function(attrs,cb,ctrl){if(!ctrl)return;if(!attrs.lstns)attrs.lstns=new Listeners();if(attrs.lstns.listen(cb)){var me=this;attrs.cb=function(){if(!attrs.timer&&attrs.obj){attrs.timer=timer(function(){attrs.timer=null;me.query(attrs);},1);}};attrs.views=[];for(var i in attrs.params){if(!attrs.params[i].name){attrs.views.push(null);continue;}
var view=ctrl.getView(attrs.params[i].name);view.listen(attrs.cb);attrs.views.push(view);}
if(attrs.obj)this.query(attrs);}};enm.queryenum.unlisten=function(attrs,cb){if(attrs.lstns&&attrs.lstns.unlisten(cb)){for(var i in attrs.views){if(attrs.views[i])attrs.views[i].unlisten(attrs.cb);}
delete attrs.cb;delete attrs.views;delete attrs.map;}};enm.queryenum.query=function(attrs){var req={};req.Uff0001=attrs.path;req.uff0007=attrs.cmd;for(let i in attrs.views){if(!attrs.views[i]){req[attrs.params[i].id]=attrs.obj.ufe0001;}else{req[attrs.params[i].id]=attrs.views[i].getValue();}}
if(!attrs.map)attrs.map={};post(req,function(rep){if(attrs.map==undefined)return;var ids={};for(let i in attrs.map)ids[i]=true;var vals=rep[attrs.valuesid];attrs.bids=rep[attrs.bvaluesid];if(vals){for(var i in vals){var id=vals[i];attrs.map[id]=id;delete ids[id];const obj={};obj.ufe0001=id;attrs.lstns.notify(obj);}}
for(let i in ids){const obj={};obj.ufe0001=Number(i);obj.ufe0013=1;attrs.lstns.notify(obj);}});};enm.selector=inherit(enm.def);enm.selector.getMap=function(attrs){var map={};for(var i in attrs.c){var c=attrs.c[i];if(!isContainerVisible(c)||c.hide)continue;map[i]=c.title;}
return map;};function isTrue(attrs,val){return pred[attrs.type].isTrue(attrs,val);}
var pred={};pred.number={};pred.number.isTrue=function(attrs,val){val=val||0;if(val instanceof Array)val=val[0];for(var i in attrs.value){if(attrs.value[i]==val)return true;}
return false;};pred.string={};pred.string.isTrue=function(attrs,val){if(val==null)val='';return val==attrs.value;};pred.bool={};pred.bool.isTrue=function(attrs,val){return attrs.value?!!val:!val;};pred.numarrayany={};pred.numarrayany.isTrue=function(attrs,val){if(val==null)return false;for(var i in val){if(val[i][0]==attrs.value)return true;}
return false;};pred.bitmap={};pred.bitmap.isTrue=function(attrs,val){if(val instanceof Array)val=val[0];return(val&attrs.mask)==attrs.value;};pred.object={};pred.object.isTrue=function(attrs,val){if(!attrs.map)attrs.map=getObjectMap(attrs.path);var obj=attrs.map?attrs.map.getObject(val):null;return obj&&isTrue(attrs.pred,obj);};pred.slot={};pred.slot.isTrue=function(attrs,obj){if(!attrs.attrs){attrs.attrs=getAttr(obj._type,attrs.slot);if(!attrs.attrs)return false;}
var val=ftype(attrs.attrs).get(attrs.attrs,obj);return val==null||isTrue(attrs.pred,val);};pred.or={};pred.or.isTrue=function(attrs,val){for(var i in attrs.pred){if(isTrue(attrs.pred[i],val))return true;}
return false;};pred.not={};pred.not.isTrue=function(attrs,val){return!isTrue(attrs.pred,val);};pred.arch={};pred.arch.isTrue=function(attrs,val){return attrs.value==sysres.arch;};pred.board={};pred.board.isTrue=function(attrs,val){if(attrs.re){if(!attrs.regexp)attrs.regexp=new RegExp(attrs.value);return attrs.regexp.test(sysres.boardname);}
return attrs.value==sysres.board||attrs.value==sysres.boardname;};pred.daughterboard={};pred.daughterboard.isTrue=function(attrs,val){return false;};pred.quickset={};pred.quickset.isTrue=function(attrs,val){return!!(sysres.qscaps&(1<<attrs.bit));};pred.winbox={};pred.winbox.isTrue=function(attrs,val){return false;};pred.addon={};pred.addon.isTrue=function(attrs,val){return!!addons[attrs.value];};pred.haspwd={};pred.haspwd.isTrue=function(attrs,val){return sysres.haspwd;};pred.statuspane={};pred.statuspane.isTrue=function(attrs,val){return!isStatusPageEmpty();};pred.syscap={};pred.syscap.isTrue=function(attrs,val){return hasFeature(attrs.value);}
pred.supportmsgid={};pred.supportmsgid.isTrue=function(attrs,val){return false;}
function newRequest(){return new XMLHttpRequest();}
function request(method,url,obj,cb,errCb,binary){var stack=backtrace();if(!errCb)errCb=disconnect;var req=newRequest();var requestID=requestLast;requestLast+=1;requests[requestID]=true;req.onreadystatechange=function(){if(req.readyState!=XMLHttpRequest.DONE)return;if(!requests[requestID])return;delete requests[requestID];traffic.bytesRx+=req.getAllResponseHeaders().length;if(req.status==200){if(binary){traffic.bytesRx+=req.response.byteLength;cb(req.response);}
else{traffic.bytesRx+=req.responseText.length;cb(req.responseText);}}else if(req.status==410){logout();}
else{errCb({requestID:requestID,request:req,cb:cb,stack:stack});}
req=null;};req.open(method,url,true);if(binary){req.setRequestHeader("Content-Type","msg");req.setRequestHeader("Accept-Language","");req.responseType="arraybuffer";}
traffic.bytesTx+=obj.length;req.send(obj);}
function fetchFile(name,cb){var url='/jsproxy/?'+session.encryptURI(name);var req=newRequest();req.onreadystatechange=function(){if(req.readyState==4){if(req.status==200){traffic.bytesRx+=req.responseText.length;cb(req.responseText);}else{cb(null);}}};traffic.bytesTx+=url.length;req.open('GET',url,true);req.send();}
function msg2max_length(msg){const utf8encoder=new window.TextEncoder();let max_len=2;for(let r in msg){const pfx=r.charAt(0);if(pfx==='_'){continue;}
max_len+=4;var val=msg[r];switch(pfx){case'b':break;case'u':max_len+=4;break;case'q':max_len+=8;break;case'a':max_len+=16;break;case's':max_len+=4+utf8encoder.encode(val).length;break;case'r':max_len+=4+val.length;break;case'm':max_len+=4+msg2max_length(val);break;case'B':max_len+=4+val.length;break;case'U':max_len+=4+val.length*4;break;case'Q':max_len+=4+val.length*8;break;case'A':max_len+=4+val.length*16;break;case'S':max_len+=4;for(let i=0;i<val.length;++i){max_len+=4+val[i].length;}
break;case'R':max_len+=4;for(let i=0;i<val.length;++i){max_len+=4+val[i].length;}
break;case'M':max_len+=4;for(let i=0;i<val.length;++i){max_len+=4+msg2max_length(val[i]);}
break;default:break;}}
return max_len;}
function msg_is_array_long(pfx,val){if(val.length>=65536){return true;}
switch(pfx){case'S':case'R':for(let i=0;i<val.length;++i){if(val[i].length>=65536){return true;}}
break;case'M':for(let i=0;i<val.length;++i){if(msg2max_length(val[i])>=65536){return true;}}
break;}
return false;}
function msg2buffer(msg){const arr=new Uint8Array(msg2max_length(msg));let pos=0;arr[pos++]=0x4d;arr[pos++]=0x32;function writeId(idtype,idstr){const x=parseInt(idstr.slice(1),16);arr[pos++]=x;arr[pos++]=x>>8;arr[pos++]=x>>16;arr[pos++]=idtype>>24;}
function write16(val){arr[pos++]=val&0xff;arr[pos++]=(val>>8)&0xff;}
function write32(val){arr[pos++]=val&0xff;arr[pos++]=(val>>8)&0xff;arr[pos++]=(val>>16)&0xff;arr[pos++]=(val>>24)&0xff;}
function write64(val){arr[pos++]=val&0xff;arr[pos++]=(val>>8)&0xff;arr[pos++]=(val>>16)&0xff;arr[pos++]=(val>>24)&0xff;const temp=val/0x100000000;arr[pos++]=temp&0xff;arr[pos++]=(temp>>8)&0xff;arr[pos++]=(temp>>16)&0xff;arr[pos++]=(temp>>24)&0xff;}
const utf8encoder=new window.TextEncoder();for(let r in msg){const pfx=r.charAt(0);if(pfx==='_')continue;const val=msg[r];if(val===undefined)continue;switch(pfx){case'b':writeId(FT_BOOL|(val?FS_SHORT:0),r);break;case'u':if(val>=0&&val<256){writeId(FT_U32|FS_SHORT,r);arr[pos++]=val;}
else{writeId(FT_U32,r);write32(val);}
break;case'q':writeId(FT_U64,r);write64(val);break;case'a':writeId(FT_ADDR6,r);for(let i=0;i<16;++i){arr[pos++]=val[i];}
break;case's':{const enc=utf8encoder.encode(val);if(enc.length<256){writeId(FT_STRING|FS_SHORT,r);arr[pos++]=enc.length;}
else if(enc.length>=65536){writeId(FT_STRING|FS_LONG,r);write32(enc.length);}
else{writeId(FT_STRING,r);write16(enc.length);}
arr.set(enc,pos);pos+=enc.length;}
break;case'r':if(val.length<256){writeId(FT_RAW|FS_SHORT,r);arr[pos++]=val.length;}
else if(val.length>=65536){writeId(FT_RAW|FS_LONG,r);write32(val.length);}
else{writeId(FT_RAW,r);write16(val.length);}
for(let i=0;i<val.length;++i){arr[pos++]=val[i];}
break;case'm':{const x=msg2buffer(val);if(x.length<256){writeId(FT_MESSAGE|FS_SHORT,r);arr[pos++]=x.length;}
else if(x.length>=65536){writeId(FT_MESSAGE|FS_LONG,r);write32(x.length);}
else{writeId(FT_MESSAGE,r);write16(x.length);}
arr.set(x,pos);pos+=x.length;break;}
case'B':if(val.length>=65536){writeId(FT_BOOL_ARRAY|FS_LONG,r);write32(val.length);}
else{writeId(FT_BOOL_ARRAY,r);write16(val.length);}
for(let i=0;i<val.length;++i){arr[pos++]=val[i];}
break;case'U':if(val.length>=65536){writeId(FT_U32_ARRAY|FS_LONG,r);write32(val.length);}
else{writeId(FT_U32_ARRAY,r);write16(val.length);}
for(let i=0;i<val.length;++i){write32(val[i]);}
break;case'Q':if(val.length>=65536){writeId(FT_U64_ARRAY|FS_LONG,r);write32(val.length);}
else{writeId(FT_U64_ARRAY,r);write16(val.length);}
for(let i=0;i<val.length;++i){write64(val[i]);}
break;case'A':if(val.length>=65536){writeId(FT_ADDR6_ARRAY|FS_LONG,r);write32(val.length);}
else{writeId(FT_ADDR6_ARRAY,r);write16(val.length);}
for(let i=0;i<val.length;++i){for(let k=0;k<16;++k){arr[pos++]=val[i][k];}}
break;case'S':{const is_long=msg_is_array_long(pfx,val);if(is_long){writeId(FT_STRING_ARRAY|FS_LONG,r);write32(val.length);}
else{writeId(FT_STRING_ARRAY,r);write16(val.length);}
for(let i=0;i<val.length;++i){if(is_long){write32(val[i].length);}
else{write16(val[i].length);}
for(let k=0;k<val[i].length;++k){arr[pos++]=val[i].charCodeAt(k);}}
break;}
case'R':{const is_long=msg_is_array_long(pfx,val);if(is_long){writeId(FT_RAW_ARRAY|FS_LONG,r);write32(val.length);}
else{writeId(FT_RAW_ARRAY,r);write16(val.length);}
for(let i=0;i<val.length;++i){if(is_long){write16(val[i].length);}
else{write32(val[i].length);}
for(let k=0;k<val[i].length;++k){arr[pos++]=val[i][k];}}
break;}
case'M':{const is_long=msg_is_array_long(pfx,val);if(is_long){writeId(FT_MESSAGE_ARRAY|FS_LONG,r);write32(val.length);}
else{writeId(FT_MESSAGE_ARRAY,r);write16(val.length);}
for(let i=0;i<val.length;++i){const x=msg2buffer(val[i]);if(is_long){write32(x.length);}
else{write16(x.length);}
arr.set(x,pos);pos+=x.length;}
break;}
default:return null;}}
return new Uint8Array(arr.buffer,0,pos);}
function buffer2msg(arr){const ret={};let pos=2;function num2hex(ccc){if(ccc<10){return String.fromCharCode(48+ccc);}
return String.fromCharCode(87+ccc);}
function idnum2hex(id){let ret="";for(let i=0;i<6;++i){const x=(id>>(20-(i*4)))&0xf;if(ret.length==0&&!x){continue;}
ret=ret+num2hex(x);}
if(ret.length==0){ret="0";}
return ret;}
function read32(){let ret=0;ret|=arr[pos++];ret|=arr[pos++]<<8;ret|=arr[pos++]<<16;ret|=arr[pos++]<<24;return ret;}
function read64(){let ret=0;ret|=arr[pos++];ret|=arr[pos++]<<8;ret|=arr[pos++]<<16;ret|=arr[pos++]<<24;let temp=0;temp|=arr[pos++];temp|=arr[pos++]<<8;temp|=arr[pos++]<<16;temp|=arr[pos++]<<24;return int2num(ret)+temp*0x100000000;}
function readLen(id){let ret=arr[pos++];if(!(id&FS_SHORT)){ret|=arr[pos++]<<8;}
if(id&FS_LONG){ret|=arr[pos++]<<16;ret|=arr[pos++]<<24;}
return ret;}
if(arr[0]!=0x4d||arr[1]!=0x32){return ret;}
const utf8decoder=new window.TextDecoder();while(pos<arr.length){const id=read32();switch(id&MASK_FTYPE){case FT_BOOL:ret["b"+idnum2hex(id)]=(id&FS_SHORT)?1:0;break;case FT_U32:if(id&FS_SHORT){ret["u"+idnum2hex(id)]=arr[pos++];}
else{ret["u"+idnum2hex(id)]=int2num(read32());}
break;case FT_U64:ret["q"+idnum2hex(id)]=read64();break;case FT_ADDR6:{const a=[];for(let i=0;i<16;++i){a[i]=arr[pos++];}
ret["a"+idnum2hex(id)]=a;break;}
case FT_STRING:{const len=readLen(id);const s=utf8decoder.decode(arr.slice(pos,pos+len));pos+=len;ret["s"+idnum2hex(id)]=s;break;}
case FT_RAW:{const len=readLen(id);const a=[];for(let i=0;i<len;++i){a[i]=arr[pos++];}
ret["r"+idnum2hex(id)]=a;break;}
case FT_MESSAGE:{const len=readLen(id);ret["m"+idnum2hex(id)]=buffer2msg(new Uint8Array(arr.buffer,arr.byteOffset+pos,len));pos+=len;break;}
case FT_BOOL_ARRAY:{const len=readLen(id);const a=[];for(let i=0;i<len;++i){a[i]=!!arr[pos++];}
ret["B"+idnum2hex(id)]=a;break;}
case FT_U32_ARRAY:{const len=readLen(id);const a=[];for(let i=0;i<len;++i){a[i]=int2num(read32());}
ret["U"+idnum2hex(id)]=a;break;}
case FT_U64_ARRAY:{const len=readLen(id);const a=[];for(let i=0;i<len;++i){a[i]=read64();}
ret["Q"+idnum2hex(id)]=a;break;}
case FT_ADDR6_ARRAY:{const len=readLen(id);const a=[];for(let i=0;i<len;++i){const x=[];for(let k=0;k<16;++k){x[k]=arr[pos++];}
a[i]=x;}
ret["A"+idnum2hex(id)]=a;break;}
case FT_STRING_ARRAY:{const len=readLen(id);const a=[];for(let i=0;i<len;++i){let x="";const xlen=readLen(id);for(let k=0;k<xlen;++k){x=x+String.fromCharCode(arr[pos++]);}
a[i]=x;}
ret["S"+idnum2hex(id)]=a;break;}
case FT_RAW_ARRAY:{const len=readLen(id);const a=[];for(let i=0;i<len;++i){const x=[];const xlen=readLen(id);for(let k=0;k<xlen;++k){x[k]=arr[pos++];}
a[i]=x;}
ret["R"+idnum2hex(id)]=a;break;}
case FT_MESSAGE_ARRAY:{const len=readLen(id);const a=[];for(let i=0;i<len;++i){const xlen=readLen(id);a[i]=buffer2msg(new Uint8Array(arr.buffer,arr.byteOffset+pos,xlen));pos+=xlen;}
ret["M"+idnum2hex(id)]=a;break;}}}
return ret;}
function buffer2msgs(arr){const ret=[];let pos=0;while(pos+4<=arr.length){const len=(arr[pos]<<24)|(arr[pos+1]<<16)|(arr[pos+2]<<8)|arr[pos+3];const msg=buffer2msg(new Uint8Array(arr.buffer,arr.byteOffset+pos+4,len));pos+=4+len;ret.push(msg);}
return ret;}
function post_notification_request(){var start=new Date();post({},receive,function(err){var duration=(new Date()).getTime()-start.getTime();if(err.request.status!=0||duration<1000){disconnect(err);return;}
post_notification_request();});}
function post(req,cb,errCb){if(!req.Sff001c){req.Sff001c=[];}
req.Sff001c.push(trace);request('POST','/jsproxy',session.encryptUint8Array(msg2buffer(req)),function(r){session.decryptUint8Array(new Uint8Array(r),cb);session.dequeue();if(cb==receive){post_notification_request();}},errCb,true);}
function receive(msg){var from=msg.Uff0002;var lstn=subscribers[from];if(lstn)lstn.notify(msg);}
function subscribe(path,cb){if(!subscribers[path])subscribers[path]=new Listeners();if(subscribers[path].listen(cb)){var req={};req.Uff0001=path;req.uff0007=0xfe0012;post(req);}}
function unsubscribe(path,cb){if(subscribers[path].unlisten(cb)){var req={};req.Uff0001=path;req.uff0007=0xfe0013;post(req);}}
function isError(msg){return msg.uff0008!=null;}
function getErrorDescription(errno){switch(errno){case 0xfe0002:case 0xfe0003:return'feature is not implemented';case 0xfe0011:case 0xfe0004:return"object doesn't exist";case 0xfe0007:return'object already exists';case 0xfe0009:return'not permitted';case 0xfe0012:return'busy';case 0xfe000d:return'timeout';default:return'action failed';}};function showError(type,msg){if(!isError(msg))return;const str=msg.sff0009??getErrorDescription(msg.uff0008);const card=notifications.error(type);make.span({p:card.getBody(),cont:`${str} (${msg.uff0008 & 0xfff})`});}
function removeSysFields(msg){for(var i in msg){if(parseInt(i.substr(1),16)>=0xff0000)delete msg[i];}}
function getProp(parent,prop){var val=parent[prop];if(val==null)val=parent[prop]={};return val;}
function getServiceProp(service){var cfg=skin;if(service.group)cfg=getProp(cfg,service.group);return getProp(cfg,service.name??"Interfaces");}
function getContainerProp(attrs){attrs=attrs._type??attrs;while(attrs.owner)attrs=attrs.owner;const cfg=attrs.container?getContainerProp(attrs.container):getServiceProp(attrs.service);return getProp(cfg,attrs.title);}
function getAttrProp(type,attrs,name){var cfg=getContainerProp(type);if(attrs?.owner)cfg=getProp(cfg,attrs.owner.name);var prop=cfg;if(attrs?.owner)getProp(prop,attrs.owner.name);prop=getProp(prop,name??attrs.name);return prop;}
function getSysProps(type){return getProp(getContainerProp(type),'&');}
function getSysProp(type,cmd){return getProp(getSysProps(type),cmd);}
function compactSkinProps(cfg){if(cfg._hide)return 0;var res={};for(var i in cfg){var v=cfg[i];if(i=='_hide'&&v==0)continue;if(typeof(v)!='object'){res[i]=v;}else if(v!=null){if(i=='separator'){res[i]=v._hide?0:1;}else if(i=='tab'){if(v._hide){res[i]=0;}else if(v.name!=null){res[i]=v.name;}}else{var c=compactSkinProps(v);if(c!=null)res[i]=c;}}}
if(isempty(res))return null;return res;}
function compactSkin(cfg){cfg=compactSkinProps(cfg);if(cfg&&cfg.Status&&cfg.Status.Status){var s=cfg.Status.Status;for(var i in s){if(s[i]==0)delete s[i];}}
return cfg;}
function normalizeSkin(cfg){for(const i in cfg){const v=cfg[i];if(v===0&&i!=="order")cfg[i]={_hide:1};if(typeof(v)==="object"){if(v.tab){if(typeof v.tab==="string")v.tab={name:v.tab};if(v.tab===0)v.tab={_hide:1};continue;}
normalizeSkin(v);}}}
function loadSkin(name,cb){fetchFile('skins/'+name+'.json',function(resp){skin={};if(resp){try{try{skin=JSON.parse(resp);}catch(e){if(verifyJSON(resp)){skin=eval('('+resp+')');}}
if(!skin||typeof(skin)!=="object"||Array.isArray(skin))skin={};}catch(e){}}
normalizeSkin(skin);if(cb){cb();}else{generateMenu();reopen();}});}
function saveSkin(name){let str=JSON.stringify(compactSkin(skin),null,4);if(str==="null")str="{}";request("POST","/jsproxy/put?"+session.encryptURI("skins/"+name+".json"),str+'\n',()=>{});notifications.info(`Skin "${name}" saved`);}
function getObjectName(obj){var i=obj._owner.getFullName(obj);var name=i.name;if(i.cfg&&i.cfg[i.propname])name=i.cfg[i.propname];if(i.postfix)name+=' '+i.postfix;return name;}
function ObjectHolder(attrs){this.attrs=attrs;this.lstns=new Listeners();this.obj={};this.obj._type=attrs;this.obj._owner=this;this.obj._empty=true;if(attrs.getcmd==null)this.obj._empty=false;}
ObjectHolder.prototype.getNameType=function(obj){return null;};ObjectHolder.prototype.getName=function(obj){return getObjectName(obj);};ObjectHolder.prototype.getFullName=function(obj){return{name:this.attrs.title,cfg:getSysProps(this.attrs),propname:'title'};};ObjectHolder.prototype.getPath=function(){return getPath(this.attrs);};ObjectHolder.prototype.getObject=function(){return this.obj;};ObjectHolder.prototype.setObject=function(obj,cb){if(this.obj==obj){const req={};update(req,obj._exportObj||obj);delete obj._exportObj;req.Uff0001=this.attrs.path;req.uff0007=this.attrs.setcmd||0xfe000e;if("ufe0001"in obj)req.ufe0001=obj.ufe0001;delete obj.Uff0014;post(req,rep=>{if(isError(rep)){showError(`Couldn't change ${obj._owner.getName(obj)}`,rep);this.fetch();}else{notifications.info("Saved");}
if(cb)cb(!isError(rep));});this.lstns.notify(obj);}};ObjectHolder.prototype.autostart=function(obj){return false;};ObjectHolder.prototype.listen=function(cb){if(this.lstns.listen(cb)){if(this.attrs.autorefresh){this.autorefresh=this.attrs.autorefresh;if(!this.timer)this.fetch();}else{this.notifyLstn=(msg)=>{var objs=msg.Mfe0002;if(!objs){this.fetch();}else if(objs[0]&&(objs[0].ufe0001==undefined||objs[0].ufe0001==0xffffffff)){this.obj._empty=false;updateOnNotification(this.obj,objs[0]);this.lstns.notify(this.obj);}};if(!(this.attrs.getcmd==null&&this.attrs.setcmd!=null)){subscribe(this.attrs.path,this.notifyLstn);this.fetch();}}}};ObjectHolder.prototype.unlisten=function(cb){if(this.lstns.unlisten(cb)){if(this.timer){cancelTimer(this.timer);this.timer=null;}
this.autorefresh=0;if(this.notifyLstn){unsubscribe(this.attrs.path,this.notifyLstn);this.notifyLstn=null;}}};ObjectHolder.prototype.fetch=function(){var attrs=this.attrs;if(attrs.getcmd==null&&attrs.setcmd!=null)return;var req={};req.Uff0001=attrs.path;req.uff0007=attrs.getcmd||0xfe000d;req.ufe000c=0x10000005;req.ufe000c|=attrs.refetchonopen??0;req.ufe000c|=attrs.refreshfilter??0;var onreply=rep=>{if(isError(rep))return;update(this.obj,rep);this.obj._empty=false;this.lstns.notify(this.obj);if(this.autorefresh&&!this.timer){this.timer=timer(()=>{this.timer=null;this.fetch();},this.autorefresh);}};post(req,onreply);};function ObjectMap(attrs,lstns){this.attrs=attrs;this.lstns=lstns?lstns:new Listeners();this.autorefresh=0;this.map={};this.acquired={};this.objCount=null;this.size=0;this.fresh=false;this.timer=null;}
ObjectMap.prototype.getType=function(){return this.attrs;};ObjectMap.prototype.setID=function(id){this.id=id;};ObjectMap.prototype.getCount=function(){return this.objCount;};ObjectMap.prototype.getSize=function(){return this.size;};ObjectMap.prototype.getNameType=function(obj){var attrs=obj._type;if(!attrs.namevalAttr){if(typeof attrs.nameval=='string'){attrs.namevalAttr=getAttr(attrs,attrs.nameval);}else{attrs.namevalAttr=this.attrs.nameval;}}
return attrs.namevalAttr;};ObjectMap.prototype.toString=function(obj){return toString(this.getNameType(obj),obj);};ObjectMap.prototype.getName=function(obj){return getObjectName(obj);};ObjectMap.prototype.getFullName=function(obj){var i={name:this.attrs.name,cfg:getSysProps(this.attrs),propname:'title'};if(obj._type.nameval){if(obj.ufe0001!=null){i.propname='name';i.postfix='<'+this.toString(obj)+'>';}else{i.name='New '+i.name;i.propname='newname';}}
return i;};ObjectMap.prototype.getPath=function(obj){var path=getPath(this.attrs);if(obj){if(!obj._type.nameval&&!obj._type.name)return null;path+=obj.ufe0001==null?'.new':'.'+obj.ufe0001;}
return path;};ObjectMap.prototype.getObject=function(id,makeNew){if(id==null)return this.newObject();return this.map[id];};ObjectMap.prototype.newObject=function(typeid){var type=this.attrs;if(typeid)type=this.getSubtype(this.attrs,typeid)||this.attrs;var obj={};obj._type=type;obj._owner=this;const subtypeObj={};this.setSubtype(type,subtypeObj);update(obj,subtypeObj);obj._subtype=new Map(Object.entries(subtypeObj));if(type.prefix)this.setUniqueName(obj);return obj;};ObjectMap.prototype.acquireObject=function(id){var obj=this.acquired[id];if(obj){++obj._refcnt;return obj;}
obj=this.getObject(id);if(!obj){obj=this.newObject();obj.ufe0001=id;}
obj._refcnt=1;this.acquired[id]=obj;return obj;};ObjectMap.prototype.releaseObject=function(obj){if(--obj._refcnt==0){delete this.acquired[obj.ufe0001];}};ObjectMap.prototype.setUniqueName=function(obj){var nums={};var type=obj._type;for(let i in this.map){var name=this.toString(this.map[i]);if(name.substr(0,type.prefix.length)==type.prefix){var n=string2int(name.substr(type.prefix.length));if(n!=null)nums[n]=true;}}
let i=1;while(nums[i])++i;this.toString(obj);var a=type.namevalAttr;ftype(a).put(a,obj,type.prefix+i);};function displayErrorAtButtons(msg){const errorField=get("errorField");errorField.textContent=msg;errorField.onclick=()=>clearNodes(errorField);}
ObjectMap.prototype.setObject=function(obj,cb){var newObj=obj.ufe0001==null;var req={};update(req,obj._exportObj||obj);obj._subtype?.forEach((value,key)=>req[key]=value);delete obj._exportObj;req.Uff0001=this.attrs.path;req.uff0007=!newObj?0xfe0003:0xfe0005;if("ufe0001"in obj)req.ufe0001=obj.ufe0001;delete obj.Uff0014;post(req,rep=>{if(isError(rep)){const type=`Couldn't ${newObj ? "add" : "change"} ${this.getName(obj)}`;const str=rep.sff0009??getErrorDescription(rep.uff0008);displayErrorAtButtons(`${str} (${rep.uff0008 & 0xfff})`);notifications.error(type);if(cb)cb(false);if(!newObj)this.fetch(obj);return;}else{notifications.info("Saved");}
if(newObj){++this.size;if(this.objCount!=null)++this.objCount;obj.ufe0001=rep.ufe0001;this.map[obj.ufe0001]=obj;if(this.attrs.ordered)this.linkBefore(obj,null);}
if(this.attrs.refetchonchange)this.fetch(obj);if(cb)cb(true);this.lstns.notify(obj);});};ObjectMap.prototype.removeObject=function(obj,cb){const req={};req.ufe0001=obj.ufe0001;req.Uff0001=this.attrs.path;req.uff0007=0xfe0006;post(req,rep=>{if(isError(rep)){showError(`Couldn't remove ${this.getName(obj)}`,rep);if(cb)cb(false);return;}else{notifications.info("Removed");}
this.remove(obj);if(cb)cb(true);});};ObjectMap.prototype.moveObjectAfter=function(obj,after){var next=after!=null?after._next:this.first;var req={};req.ufe0001=obj.ufe0001;req.Uff0001=this.attrs.path;req.uff0007=0xfe0007;req.ufe0005=next!=null?next.ufe0001:0xffffffff;post(req,rep=>{if(isError(rep)){showError(`Couldn't move ${this.getName(obj)}`,rep);return;}else{notifications.info("moved");}
this.unlink(obj);this.linkBefore(obj,next);this.lstns.notify(obj);});};ObjectMap.prototype.remove=function(obj){if(this.attrs.ordered){this.unlink(obj);}
obj.ufe0013=1;delete this.map[obj.ufe0001];--this.size;if(this.objCount!=null)--this.objCount;this.lstns.notify(obj);};ObjectMap.prototype.getSubtypes=function(){if(!this.attrs.generic)return null;var types=[];if(this.getSubtypesFor(this.attrs,types))return types;return null;};ObjectMap.prototype.getSubtypesFor=function(gen,types){var subtypes=0;for(let i in gen.subtypes){var type=gen.subtypes[i];if(type.generic)subtypes+=this.getSubtypesFor(type,types);if(type.nonaddable||(type.pred&&!isTrue(type.pred)))continue;types.push(type.title);++subtypes;}
for(let i in gen.gensubtypes){subtypes+=this.getSubtypesFor(gen.gensubtypes[i],types);}
return subtypes;};ObjectMap.prototype.getSubtype=function(gen,id){for(let i in gen.subtypes){if(gen.subtypes[i].ntitle==id)return gen.subtypes[i];if(gen.subtypes[i].generic){let st=this.getSubtype(gen.subtypes[i],id);if(st)return st;}}
for(let i in gen.gensubtypes){let st=this.getSubtype(gen.gensubtypes[i],id);if(st)return st;}
return null;};ObjectMap.prototype.setSubtype=function(attrs,obj,typeid){if(attrs.typeon&&typeid!=null){ftype(attrs.typeon).put(attrs.typeon,obj,typeid);}
if(attrs.inherit){var t=attrs.typevalue;if(t==null||t==0xffffffff)t=typeid;this.setSubtype(attrs.inherit,obj,t);}};ObjectMap.prototype.setDefaultConf=function(obj){if(this.defconf){updateOnNotification(obj,this.defconf);return;}
var req={};req.Uff0001=this.attrs.path;req.uff0007=this.attrs.getallcmd||0xfe0004;req.ufe0018=0;req.ufe000c=0x20000000;post(req,rep=>{if(isError(rep))return;this.defconf=rep.mfe001d;if(this.defconf){delete this.defconf.bfe0008;updateOnNotification(obj,this.defconf);this.lstns.notify(obj);}else{this.defconf={};}});};ObjectMap.prototype.fetch=function(obj){const req={};req.ufe0001=obj.ufe0001;req.Uff0001=this.attrs.path;req.uff0007=0xfe0002;post(req,rep=>{if(isError(rep))return;removeSysFields(rep);update(obj,rep);obj.ufe0001=req.ufe0001;this.lstns.notify(obj);});};ObjectMap.prototype.foreach=function(cb){if(this.attrs.ordered){var obj=this.last;while(obj!=null){cb(obj);obj=obj._prev;}}else{for(var i in this.map)cb(this.map[i]);}};ObjectMap.prototype.getFirst=function(){return this.first;};ObjectMap.prototype.getNext=function(obj){return obj._next;}
ObjectMap.prototype.getNextID=function(obj){return obj._next?obj._next.ufe0001:null;};ObjectMap.prototype.autostart=function(obj){this.setObject(obj);return true;};ObjectMap.prototype.listen=function(cb,full){if(full){if(++this.autorefresh==1&&this.attrs.autorefresh){this.getall();}}
if(!this.lstns.listen(cb,full))return;if(this.attrs.path==null)return;var me=this;this.notifyLstn=function(msg){if(msg.ufe0019!=null)me.objCount=msg.ufe0019;var objs=msg.Mfe0002;if(objs==null){me.getall();return;}
for(let i in objs){var obj=objs[i];var id=obj.ufe0001;if(id==null)continue;var nextid=obj.ufe0005;if(!obj.ufe0013){var oldObj=me.map[id];if(!oldObj){var aobj=me.acquired[id];if(aobj){update(aobj,obj);obj=aobj;}
obj._type=me.getObjType(obj);obj._owner=me;++me.size;me.map[id]=obj;}else{updateOnNotification(oldObj,obj);obj=oldObj;}
if(me.attrs.ordered){var next=me.map[nextid];if(obj._next!=next||!oldObj){if(oldObj)me.unlink(obj);me.linkBefore(obj,next);}}}else{obj=me.map[id];if(!obj)continue;obj.ufe0013=1;--me.size;if(me.attrs.ordered)me.unlink(obj);delete me.map[id];}
me.lstns.notify(obj,Number(i)<objs.length-1);}};subscribe(this.attrs.path,this.notifyLstn);this.getall();};ObjectMap.prototype.unlisten=function(cb,full){if(this.lstns.unlisten(cb,full)){if(this.attrs.path!=null){unsubscribe(this.attrs.path,this.notifyLstn);this.notifyLstn=null;}}
if(full)--this.autorefresh;};ObjectMap.prototype.blockGetall=function(block){this.block=block;};ObjectMap.prototype.getall=function(cb,req){var attrs=this.attrs;if(this.getallinprogress||this.block)return;if(req==null)req={};req.Uff0001=attrs.path;req.uff0007=attrs.getallcmd||0xfe0004;req.ufe000c=0x10000005;req.ufe000c|=attrs.refetchonopen??0;req.ufe000c|=attrs.refreshfilter??0;req.ufe0018=attrs.maxobjs;if(this.id!=null)req.ufe0001=this.id;var oldids={};for(let i in this.map){oldids[i]=true;}
this.getallinprogress=true;var prev=null;var me=this;var onreply=function(rep){if(rep.ufe0019!=null)me.objCount=rep.ufe0019;var objs=rep.Mfe0002||[];for(let i in objs){var obj=objs[i];var oldObj=me.map[obj.ufe0001];if(oldObj){update(oldObj,obj);obj=oldObj;}else{var aobj=me.acquired[obj.ufe0001];if(aobj){update(aobj,obj);obj=aobj;}
++me.size;me.map[obj.ufe0001]=obj;}
if(attrs.ordered){if(obj._prev!=prev||!oldObj){if(oldObj)me.unlink(obj);me.linkAfter(obj,prev);}
prev=obj;}
obj._type=me.getObjType(obj);obj._owner=me;delete oldids[obj.ufe0001];}
if(cb&&!cb(rep)){me.getallinprogress=false;}else if(isError(rep)){if(rep.uff0008==16646158){showError(`Failed to get all ${me.attrs.maxobjsmsg ?? ""}`,rep);}
me.getallinprogress=false;}else if((rep.ufe0003!=null||rep.mfe0015)&&!me.block){if(rep.ufe0003!=null)req.ufe0003=rep.ufe0003;if(rep.mfe0015!=null)req.mfe0015=rep.mfe0015;post(req,onreply);}else{for(let id in oldids){const obj=me.map[id];if(!obj)continue;--me.size;obj.ufe0013=1;if(attrs.ordered)me.unlink(obj);delete me.map[id];me.lstns.notify(obj);}
me.getallinprogress=false;me.fresh=true;if(!me.block&&!me.timer&&me.autorefresh>=1&&attrs.autorefresh){me.timer=timer(function(){me.timer=null;if(me.autorefresh>=1)me.getall(cb);},attrs.autorefresh);}}
for(let i in objs){let obj=me.map[objs[i].ufe0001];me.lstns.notify(obj,me.getallinprogress||Number(i)<objs.length-1);}};post(req,onreply);};ObjectMap.prototype.getObjType=function(obj){return this.getObjSpecType(obj,this.attrs)||this.attrs;};ObjectMap.prototype.getObjSpecType=function(obj,attrs){if(!attrs.generic)return null;var t=attrs.subtypes[obj[attrs.typeon.id]];if(t)return this.getObjSpecType(obj,t)||t;for(var i in attrs.gensubtypes){t=this.getObjSpecType(obj,attrs.gensubtypes[i]);if(t)return t;}
return null;};ObjectMap.prototype.renumurate=function(obj,skipNotify){if(!obj)return;var num=obj._prev?obj._prev._num+1:0;do{if(obj._num==num)break;obj._num=num;if(skipNotify>0){--skipNotify;}else{this.lstns.notify(obj);}
obj=obj._next;++num;}while(obj);};ObjectMap.prototype.unlink=function(obj){if(obj._next){obj._next._prev=obj._prev;this.renumurate(obj._next,0);}else{this.last=obj._prev;if(this.last)this.last._next=null;}
if(obj._prev){obj._prev._next=obj._next;}else{this.first=obj._next;if(this.first)this.first._prev=null;}};ObjectMap.prototype.linkBefore=function(obj,next){if(next){obj._next=next;obj._prev=next._prev;if(next._prev){next._prev._next=obj;}else{this.first=obj;}
next._prev=obj;}else{obj._next=null;obj._prev=this.last;if(obj._prev){obj._prev._next=obj;}else{this.first=obj;}
this.last=obj;}
this.renumurate(obj,1);};ObjectMap.prototype.linkAfter=function(obj,prev){if(prev){obj._prev=prev;obj._next=prev._next;if(prev._next){prev._next._prev=obj;}else{this.last=obj;}
prev._next=obj;}else{obj._prev=null;obj._next=this.first;if(obj._next){obj._next._prev=obj;}else{this.last=obj;}
this.first=obj;}
this.renumurate(obj,1);};function FilteredMap(map,attrs){this.map=map;this.attrs=attrs;this.lstns=new Listeners();}
FilteredMap.prototype.getType=function(){return this.attrs;};FilteredMap.prototype.toString=function(obj){return this.map.toString(obj);};FilteredMap.prototype.getName=function(obj){return this.map.getName(obj);};FilteredMap.prototype.getFullName=function(obj){return this.map.getFullName(obj);};FilteredMap.prototype.getPath=function(obj){var path=getPath(this.attrs);if(obj){if(!obj._type.nameval&&!obj._type.name)return null;path+=obj.ufe0001==null?'.new':'.'+obj.ufe0001;}
return path;};FilteredMap.prototype.getCount=function(){return null;};FilteredMap.prototype.getObject=function(id){return this.map.getObject(id);};FilteredMap.prototype.newObject=function(typeid){return this.map.newObject(typeid??this.attrs.ntitle);};FilteredMap.prototype.removeObject=function(obj,cb){this.map.removeObject(obj,cb);};FilteredMap.prototype.getSubtypes=function(){var types=[];if(this.map.getSubtypesFor(this.attrs,types))return types;return null;};FilteredMap.prototype.getSubtype=function(gen,id){return this.map.getSubtype(gen,id);};FilteredMap.prototype.setDefaultConf=function(obj){return this.map.setDefaultConf(obj);};FilteredMap.prototype.foreach=function(cb){this.map.foreach(obj=>{if(this.filter(obj))cb(obj);});};FilteredMap.prototype.listen=function(cb,full){if(this.lstns.listen(cb)){this.lstn=obj=>{if(this.filter(obj))this.lstns.notify(obj);};this.map.listen(this.lstn,true);}};FilteredMap.prototype.unlisten=function(cb,full){if(this.lstns.unlisten(cb)){this.map.unlisten(this.lstn,true);}};FilteredMap.prototype.filter=function(obj){for(var type=obj._type;type;type=type.inherit){if(type==this.attrs)return true;}
return false;};function ObjectAction(attrs){this.attrs=attrs;this.lstns=new Listeners();this.autorefresh=0;this.req={};this.req._type={c:attrs.request,owner:attrs};this.req._owner=this;this.rep={};this.rep._type={ro:1,c:attrs.c,owner:attrs};this.rep._owner=this;}
ObjectAction.prototype.getName=function(){return getObjectName(this.req);};ObjectAction.prototype.getFullName=function(){return{name:this.attrs.title,cfg:getSysProps(this.attrs),propname:'title',postfix:(this.started?'(Running)':'')};};ObjectAction.prototype.getPath=function(){return getPath(this.attrs);};ObjectAction.prototype.getObject=function(){return this.getRequest();};ObjectAction.prototype.getRequest=function(){return this.req;};ObjectAction.prototype.getReply=function(){return this.rep;};ObjectAction.prototype.isRunning=function(){return this.started;};ObjectAction.prototype.start=function(){this.stop();const req={};update(req,this.req);req.Uff0001=this.attrs.path;req.uff0007=this.attrs.startcmd;for(var i in this.rep){if(i[0]!='_')delete this.rep[i];}
post(req,rep=>{if(isError(rep)){showError("Couldn't start",rep);return;}else{notifications.info("Started");}
if(rep.ufe0001!=null)this.req.ufe0001=rep.ufe0001;this.rep.ufe0001=this.req.ufe0001;this.started=true;if(this.autorefresh){this.lstns.notify(this.rep);this.fetch();}else{this.stop();}});};ObjectAction.prototype.stop=function(){if(this.started){this.started=false;if(this.timer){cancelTimer(this.timer);this.timer=null;}
const req={};req.Uff0001=this.attrs.path;req.uff0007=this.attrs.cancelcmd;if(this.req.ufe0001!=null)req.ufe0001=this.req.ufe0001;post(req,rep=>{this.lstns.notify(this.rep);});}};ObjectAction.prototype.fetch=function(){const req={};req.Uff0001=this.attrs.path;req.uff0007=this.attrs.pollcmd;if(this.req.ufe0001!=null)req.ufe0001=this.req.ufe0001;post(req,rep=>{if(!this.started)return;if(isError(rep)){showError('Couldn\'t continue',rep);this.stop();return;}
update(this.rep,rep);this.lstns.notify(this.rep);if(rep.bfe000b){this.stop();}else if(this.autorefresh&&!this.timer){this.timer=timer(()=>{this.timer=null;this.fetch();},this.attrs.autorefresh);}});};ObjectAction.prototype.autostart=function(obj){this.start();return false;};ObjectAction.prototype.listen=function(cb,full){if(full)++this.autorefresh;this.lstns.listen(cb);};ObjectAction.prototype.unlisten=function(cb,full){if(full&&--this.autorefresh==0){this.stop();}
this.lstns.unlisten(cb);};function ObjectQuery(attrs){this.attrs=attrs;this.lstns=new Listeners();this.listening=0;this.req={};this.req._type={c:attrs.request,owner:attrs};this.req._owner=this;if(attrs.status){this.status={};this.status._type={c:attrs.status,ro:1,owner:attrs};this.status._owner=this;}
var mapLstns={};mapLstns.lstns=new Listeners();mapLstns.owner=this;mapLstns.listen=function(cb,full){if(full)this.owner.listen(null,full);return this.lstns.listen(cb);};mapLstns.unlisten=function(cb,full){if(full)this.owner.unlisten(null,full);return this.lstns.unlisten(cb);};mapLstns.notify=function(obj){this.lstns.notify(obj);};var mapAttrs={c:attrs.c,columns:attrs.columns,path:attrs.path,getallcmd:attrs.getallcmd,ro:1,ordered:attrs.autolimit!=0,autorefresh:attrs.autorefresh,refreshfilter:attrs.refreshfilter,name:attrs.name,nameval:attrs.nameval,generic:attrs.generic,subtypes:attrs.subtypes,typeon:attrs.typeon,owner:attrs};this.map=new ObjectMap(mapAttrs,mapLstns);this.map.blockGetall(true);};ObjectQuery.prototype.getName=function(){return getObjectName(this.req);};ObjectQuery.prototype.getFullName=function(){return{name:this.attrs.title,cfg:getSysProps(this.attrs),propname:'title',postfix:(this.id!=null?'(Running)':'')};};ObjectQuery.prototype.getPath=function(obj){return getPath(this.attrs);};ObjectQuery.prototype.getObject=function(id){if(id==null)return this.getRequest();return this.map.getObject(id);};ObjectQuery.prototype.getRequest=function(){return this.req;};ObjectQuery.prototype.getStatus=function(){return this.status;};ObjectQuery.prototype.getMap=function(){return this.map;};ObjectQuery.prototype.isRunning=function(){return this.id!=null;};ObjectQuery.prototype.start=function(){this.stop();if(this.starting)return;this.starting=true;const req={};update(req,this.req);req.Uff0001=this.attrs.path;req.uff0007=this.attrs.startcmd;var map=this.map;map.foreach(function(obj){map.remove(obj);});if(this.status){for(var i in this.status){if(i[0]!='_')delete this.status[i];}}
if(this.attrs.startcmd==0xffffffff&&this.attrs.autorefresh==null){this.starting=false;this.map.blockGetall(false);this.map.getall(null,req);return;}
var me=this;post(req,function(rep){me.starting=false;if(isError(rep)){showError("Couldn't start",rep);return;}else{notifications.info("Started");}
me.id=rep.ufe0001!=null?rep.ufe0001:me.req.ufe0001;if(me.listening){me.lstns.notify(me.req);me.map.setID(me.id);me.map.blockGetall(false);me.map.getall(function(rep){return me.onGetall(rep);});}else{me.stop();}});};ObjectQuery.prototype.stop=function(){if(this.id!=null){this.map.blockGetall(true);const req={};req.Uff0001=this.attrs.path;req.uff0007=this.attrs.cancelcmd;req.ufe0001=this.id;this.id=null;post(req,rep=>{this.lstns.notify(this.req);});}};ObjectQuery.prototype.onGetall=function(rep){if(this.status&&rep.Mfe0002&&rep.Mfe0002.length>=1){update(this.status,rep.Mfe0002[rep.Mfe0002.length-1]);this.lstns.notify(this.status);}
if(this.id==null)return false;if(isError(rep)){showError('Couldn\'t continue',rep);this.stop();return false;}
if(rep.bfe000b){this.map.blockGetall(true);this.stop();return false;}
if(this.attrs.autolimit&&this.map.getSize()>=this.attrs.autolimit){this.map.remove(this.map.getFirst());}
return true;};ObjectQuery.prototype.autostart=function(obj){this.start();return false;};ObjectQuery.prototype.listen=function(cb,full){if(full)++this.listening;if(cb)this.lstns.listen(cb);};ObjectQuery.prototype.unlisten=function(cb,full){if(full&&--this.listening==0){this.stop();}
if(cb)this.lstns.unlisten(cb);};function Doit(attrs,path){this.attrs=attrs;this.path=path;this.lstns=new Listeners();this.obj={};this.obj._type=attrs;this.obj._owner=this;}
Doit.prototype.getName=function(){return getObjectName(this.obj);};Doit.prototype.getFullName=function(){return{name:this.attrs.title||this.attrs.name,cfg:getSysProps(this.attrs),propname:'title'};};Doit.prototype.getPath=function(){return getPath(this.attrs);};Doit.prototype.getObject=function(){return this.obj;};Doit.prototype.setID=function(id){if(id!=null){this.obj.ufe0001=id;}else{delete this.obj.ufe0001;}};Doit.prototype.doit=function(cb){const req={};update(req,this.obj);req.Uff0001=this.attrs.path||this.path;req.uff0007=this.attrs.cmd;post(req,rep=>{if(this.attrs.autoreset){update(this.obj,{});this.lstns.notify(this.obj);}
if(isError(rep)){showError(this.attrs.errorprefix||"Couldn't perform action",rep);}else{notifications.info("Done");}
if(cb)cb(!isError(rep));});};Doit.prototype.autostart=function(obj){if(this.attrs.confirm&&!confirm(this.attrs.confirm))return true;this.doit();return true;};Doit.prototype.listen=function(cb){this.lstns.listen(cb);};Doit.prototype.unlisten=function(cb){this.lstns.unlisten(cb);};function SetupManager(attrs){this.attrs=attrs;this.lstns=new Listeners();this.obj={};this.obj._type=attrs;this.obj._owner=this;this.pageNow=0;this.pageHistory=[1];this.pageDescrs=[];}
SetupManager.prototype.getName=function(){return getObjectName(this.obj);};SetupManager.prototype.getFullName=function(){return{name:this.attrs.title,cfg:getSysProps(this.attrs),propname:'title'};};SetupManager.prototype.getObject=function(){return this.obj;};SetupManager.prototype.getCurrentPage=function(){return this.pageHistory[this.pageNow];};SetupManager.prototype.getCurrentDescription=function(){return this.pageDescrs[this.pageNow];};SetupManager.prototype.isFinished=function(){return this.finished;};SetupManager.prototype.reset=function(){this.finished=false;this.pageNow=0;this.pageHistory=[1];this.pageDescrs=[];this.lstns.notify(this.obj);};SetupManager.prototype.back=function(){if(this.pageNow>0){--this.pageNow;this.lstns.notify(this.obj);}};SetupManager.prototype.next=function(fast){if(fast&&this.pageNow+1<this.pageHistory.length){++this.pageNow;this.lstns.notify(this.obj);return;}
const req={};req.Uff0001=this.attrs.path;req.uff0007=0xfe0008;req.mfe000f=this.obj;req.ufe000e=this.pageHistory[this.pageNow];var me=this;post(req,function(rep){if(isError(rep)){showError(me.getName(),rep);if(rep.uff0008==0xfe0008){me.finished=true;me.lstns.notify(me.obj);return;}
return;}
if(rep.bfe000b){me.finished=true;me.lstns.notify(me.obj);return;}
if(rep.mfe000f)update(me.obj,rep.mfe000f);++me.pageNow;me.pageHistory.splice(me.pageNow,me.pageHistory.length-me.pageNow);me.pageHistory.push(rep.ufe000e);me.pageDescrs[me.pageNow]=rep.sfe0009;me.lstns.notify(me.obj);});};SetupManager.prototype.listen=function(cb){this.lstns.listen(cb);};SetupManager.prototype.unlisten=function(cb){this.lstns.unlisten(cb);};function fooListener(obj){}
function getContainer(attrs){while(attrs.inherit)attrs=attrs.inherit;for(var i in pool){if(pool[i].attrs==attrs){let cont=pool[i].container;pool.splice(Number(i),1);pool.push({attrs:attrs,container:cont});return cont;}}
let cont=container[attrs.type].create(attrs);if(!attrs.autostop)cont.listen(fooListener);pool.push({attrs:attrs,container:cont});if(pool.length>10){pool[0].container.unlisten(fooListener);pool.splice(0,1);}
return cont;}
function getObjectMap(path){var attrs=mapAttrs[path];return attrs?getContainer(attrs):null;}
function isContainerVisible(c,ignoreNonPublic){return c.title&&(ignoreNonPublic||!c.nonpublic)&&(!c.pred||isTrue(c.pred));}
function isTabless(c){return!container[c.service.c[0].type].tab;}
function isTablessContainer(c){if(c.owner)c=c.owner;if(container[c.type].tab)return false;var service=c.service;for(var i in service.c){if(!isContainerVisible(service.c[i]))continue;return service.c[i]==c;}
return false;}
function isServiceVisible(service,ignoreNonPublic){if(service.pred&&!isTrue(service.pred))return false;for(var i in service.c){if(isContainerVisible(service.c[i],ignoreNonPublic))return true;}
return false;}
function isROObj(obj,type){type??=obj._type;return type.ro||obj.bfe0007;}
function hasApply(obj,type){type??=obj._type;if(isROObj(obj,type))return false;for(var i in type.c){if(!ftype(type.c[i]).isRO(type.c[i]))return true;}
return false;}
function CmpOrder(){this.next=null;}
CmpOrder.prototype.cmp=function(o1,o2){return o1._num<o2._num;};function CmpAscending(col,attrs,idx,next){this.col=col;this.attrs=attrs;this.idx=idx;this.next=next;this.ascend=true;}
CmpAscending.prototype.cmp=function(o1,o2){var a1=o1!=null?o1._type.columns[this.idx]:null;var a2=o2!=null?o2._type.columns[this.idx]:null;if(this.attrs.type=="comment")a1=a2=null;if(a1==null)a1=this.attrs;if(a2==null)a2=this.attrs;var v1=ftype(a1).get(a1,o1);var v2=ftype(a2).get(a2,o2);if(v1==null){if(v2!=null)return true;}else{if(v2==null)return false;if(ftype(this.attrs).less(this.attrs,v1,v2))return true;if(ftype(this.attrs).less(this.attrs,v2,v1))return false;}
if(!this.next)return false;return this.next.cmp(o1,o2);};function CmpDescending(col,attrs,idx,next){this.col=col;this.attrs=attrs;this.idx=idx;this.next=next;}
CmpDescending.prototype.cmp=function(o1,o2){var a1=o1!=null?o1._type.columns[this.idx]:null;var a2=o2!=null?o2._type.columns[this.idx]:null;if(this.attrs.type=="comment")a1=a2=null;if(a1==null)a1=this.attrs;if(a2==null)a2=this.attrs;var v1=ftype(a1).get(a1,o1);var v2=ftype(a2).get(a2,o2);if(v1==null){if(v2!=null)return false;}else{if(v2==null)return true;if(ftype(this.attrs).less(this.attrs,v2,v1))return true;if(ftype(this.attrs).less(this.attrs,v1,v2))return false;}
if(!this.next)return false;return this.next.cmp(o1,o2);};class TableSplash{constructor(parent){this.holder=parent;const splash=parent.appendChild(getTemplate("splash"));const splashContent=splash.querySelector(".splash-content");this.icon=splashContent.querySelector(".icon");this.heading=make.el("h2",{p:splashContent,cont:"No entries to show"});this.text=make.el("p",{p:splashContent});}
hide(){this.holder.classList.remove("no-data");}
show(){this.holder.classList.add("no-data");}
noEntries(){this.show();this.icon.className="icon icon-New";this.text.textContent="Table has no data";}
filter(){this.show();this.icon.className="icon icon-Filter";this.text.textContent="Adjust filter to show missing data";}}
function Table(cnt,map,sb){this.attrs=map.getType();this.map=map;this.columns=[];this.columnWidths={};this.flags=[];this.rows={};this.order=[];this.selected=new Set();this.selectLstns=new Listeners();this.landing={table:dom.getByClass(cnt,"table"),cell:document.body,column:0,focus:function(cell,last,relative){console.assert(cell.matches("td, th"),"Focus must be on cell");const top=arr=>arr[arr.length-1];if(!cell)return;const oldCell=this.cell;this.cell=cell??this.cell;const focusables=getFocusables(this.cell);const f=(last?top(focusables):focusables[0])??this.cell;oldCell.tabIndex=-1;[...oldCell.querySelectorAll("[tabindex='0']")].forEach(e=>e.tabIndex=-1);f.tabIndex=0;f.focus();if(!relative)this.column=this.cell.cellIndex;}}
this.table=get("main-table");this.header=get("main-table-head");this.destroyLstns=new Listeners();if(this.attrs.iconon)this.iconon=getAttr(this.attrs,this.attrs.iconon);this.dragging=null;this.statusbar=sb;this.splash=new TableSplash(get("main-table")?.parentElement);this.init(cnt);this.lstn=obj=>{if(this.updateRow(obj)){this.updateStatus();this.selectLstns.notify();}};this.map.listen(this.lstn,true);this.update();}
Table.prototype.destroy=function(){if(this.redrawTimer)cancelTimer(this.redrawTimer);for(let i in this.columns){if(!this.columns[i])continue;var attrs=this.columns[i];ftype(attrs).unlisten(attrs,this.columnLstn);}
if(this.filter&&this.filter.unlstn)this.filter.unlstn();this.map.unlisten(this.lstn,true);this.destroyLstns.notify();};Table.prototype.onDestroy=function(cb){this.destroyLstns.listen(cb);};Table.prototype.getPrefs=function(){return preferences.get(getPath(this.attrs));};Table.prototype.setPrefs=function(key,val){preferences.set(key,val,getPath(this.attrs));};Table.prototype.init=function(cnt){function elw(parent,width,title){const e=make.th({p:parent});setCellWidth(e,width);e.title=title;return e;}
this.expired=true;this.columnLstn=()=>{if(!this.expired)return;this.expired=false;this.redrawTimer=timer(()=>{this.redrawTimer=null;this.expired=true;this.update();},200);};this.landing.cell=elw(this.header,30,"Select");this.initSelectColumn(this.landing.cell);elw(this.header,30,"Status");if(this.attrs.ordered){const cell=elw(this.header,40,"Record order");cell.classList.add("sort");make.button({p:cell,cls:"cell-btn",cont:"#"}).tabIndex=-1;if(!this.attrs.ro)show(get("move-btn"));}
const comment=this.attrs.columns.find(c=>c.type==="comment");const commentCfg=getAttrProp(this.attrs,comment,"Comment");if(comment&&!commentCfg._hide)
this.initCommentColumn(elw(this.header,107,"Comment"),commentCfg);this.attrs.columns.forEach(attrs=>{var col=!attrs.nonpublic?ftype(attrs).column(attrs,this,this.attrs):null;if(col&&col[1]&&col[1]!=0xffffffff){var width=col[1];if(this.columns.length==0)width+=16;const h=elw(this.header,width,col[0]);h.classList.add("sort");make.button({p:h,cls:"cell-btn",cont:col[0]}).tabIndex=-1;ftype(attrs).listen(attrs,this.columnLstn);this.columns.push(attrs);}else{this.columns.push(null);}});make.th({p:this.header,cont:'\u00A0'}).width="100%";const addable=!this.attrs.nonaddable||this.attrs.generic;if((addable&&!this.attrs.ro)||this.attrs.removable)show(get("remove-btn"));var header=this.header;[...header.cells].splice(1).forEach(cell=>{const div=make.div();if(cell.previousElementSibling){make.el("i",{p:div,cls:"rsl"}).draggable=true;}
[...cell.children].forEach(node=>div.append(node));if(cell.nextElementSibling){make.el("i",{p:div,cls:"rsr"}).draggable=true;}
cell.append(div);});const isMinComment=cell=>cell.dataset.name==="comment"&&cell.closest(".table").classList.contains("comment-min");header.ondragstart=e=>{let cell;let confirmed;if(e.target.classList.contains("rsr")){cell=this.cellOf(e.target);}else if(e.target.classList.contains("rsl")){cell=this.cellOf(e.target).previousElementSibling;}else return e.preventDefault();const startWidth=parseInt(cell.offsetWidth);const xStart=e.clientX;const main=dom.getByTag(document.body,"main");console.assert(!main.ondragover&&!main.ondrop&&!main.ondragend);main.ondragover=e=>{if(isMinComment(cell)&&e.clientX-xStart>100){dom.getByClass(this.table,"switch").click();}
setCellWidth(cell,startWidth+e.clientX-xStart);e.preventDefault();}
main.ondrop=e=>{setCellWidth(cell,startWidth+e.clientX-xStart);if(getCellWidth(cell)>20&&!isMinComment(cell))confirmed=true;if(cell.dataset.name==="comment"&&getCellWidth(cell)<30){const sw=dom.getByClass(this.table,"switch");while(!this.table.classList.contains("comment-min"))sw.click();confirmed=true;}}
main.ondragend=()=>{if(!confirmed)setCellWidth(cell,startWidth);else{const i=this.findColumn(cell);if(i!=null){const col=this.columns[i];this.columnWidths[col.name]=getCellWidth(cell);}else if(cell.dataset.name==="comment"){this.columnWidths["comment"]=getCellWidth(cell);}
this.updateColumnPrefs();}
main.ondragover=null;main.ondrop=null;main.ondragend=null;}}
header.ondblclick=e=>{let cell;if(e.target.classList.contains("rsr")){cell=this.cellOf(e.target);}else if(e.target.classList.contains("rsl")){cell=this.cellOf(e.target).previousElementSibling;}
if(!cell)return;const i=this.findColumn(cell);if(i!=null){const col=this.columns[i];setCellWidth(cell,col.width??cell.width);delete this.columnWidths[col.name];}else if(cell.dataset.name==="comment"){setCellWidth(cell,107);delete this.columnWidths["comment"];}
this.updateColumnPrefs();}
header.onclick=e=>{if(this.inMoveMode()){this.moveRow(this.cellOf(e.target));e.stopPropagation();}else{if(e.target.classList.contains("rsr")||e.target.classList.contains("rsl"))
return e.stopPropagation();if(!this.inMoveMode()&&this.cellOf(e.target)&&!e.altKey)
this.sortBy(this.cellOf(e.target));}}
this.addFocusHandler();this.loadPrefs();};Table.prototype.initSelectColumn=function(cell){const check=make.input({p:cell},"checkbox");check.tabIndex=0;check.title="Select all";check.onchange=()=>{const header=this.header;[...this.table.getElementsByTagName("input")].filter(c=>!header.contains(c)).forEach(c=>{c.checked=check.checked;c.onchange();});check.indeterminate=false;this.selectLstns.notify(true);};check.onclick=e=>{if(this.inMoveMode())e.preventDefault();}
this.selectLstns.listen((synthetic)=>{const setTitle=()=>{check.title=`Select ${check.checked ? "none" : "all"}`};if(synthetic)return setTitle();if(this.selected.size===0){check.checked=false;check.indeterminate=false;}
else if(this.selected.size===Object.keys(this.rows).length){check.checked=true;check.indeterminate=false;}else{check.checked=false;check.indeterminate=true;}
setTitle();})
if(get("controls")){const enable=get("enable-btn");enable.onclick=e=>{this.selected.forEach(obj=>{ftype(this.enable).put(this.enable,obj,1);obj._exportObj={bfe000a:false};obj._owner.setObject(obj);})}
const disable=get("disable-btn");disable.onclick=e=>{this.selected.forEach(obj=>{ftype(this.enable).put(this.enable,obj,0);obj._exportObj={bfe000a:true};obj._owner.setObject(obj);})}
const remove=get("remove-btn");remove.onclick=e=>{this.selected.forEach(obj=>this.map.removeObject(obj));}
const move=get("move-btn");move.onclick=()=>{this.table.classList.toggle("move-mode");move.ariaPressed=this.inMoveMode()?"true":"false";}
this.selectLstns.listen(()=>{if(this.selected.size===0){enable.disabled=true;disable.disabled=true;remove.disabled=true;move.disabled=true;}else{if([...this.selected].some(obj=>!isROObj(obj)&&!shouldHide(getSysProp(obj,"set"))&&!shouldHide(getSysProp(obj,"enable")))){enable.disabled=false;disable.disabled=false;}
if([...this.selected].some(obj=>((!obj._type.nonaddable&&!obj._owner.attrs.ro)||obj._owner.attrs.removable)&&!shouldHide(getSysProp(obj,"remove")))){remove.disabled=false;}
if(!this.sortKey&&this.selected.size!==0)move.disabled=false;}})}}
Table.prototype.initCommentColumn=function(cell,cfg){cell.dataset.name="comment";cell.className="sort comment";const toggle=make.button({p:cell,cls:"switch"});toggle.tabIndex=-1;const state=["std","wrap","min"];const userState=this.getPrefs()?.comment;if(state.includes(userState)){while(state[0]!=userState)state.push(state.shift());}
this.table.classList.add("comment-"+state[0]);toggle.onclick=e=>{state.push(state.shift());this.table.classList.remove("comment-std","comment-wrap","comment-min");this.table.classList.add("comment-"+state[0]);this.updateCommentPrefs(state[0]);e.stopPropagation();};toggle.onmousedown=e=>e.stopPropagation();make.button({p:cell,cls:"cell-btn",cont:cfg.name??"Comment"}).tabIndex=-1;}
Table.prototype.inMoveMode=function(){return this.table.classList.contains("move-mode");}
Table.prototype.addFlag=function(attrs,band){this.flags.push([attrs,band]);};Table.prototype.addEnable=function(attrs){show(get("enable-btn"));show(get("disable-btn"));this.enable=attrs;};Table.prototype.addComment=function(attrs){this.comment=attrs;};Table.prototype.addAboutInfo=function(attrs){this.about=attrs;};Table.prototype.addFilter=function(filterAttrs){this.filterAttrs=filterAttrs;var values=filterAttrs.values;var attr;if(values){attr=getAttr(this.attrs,filterAttrs.filteron);if(shouldHide(getAttrProp(this.attrs,attr),this.attrs.hidebydefault)){values=null;}}
if(filterAttrs.conds){var cvalues={type:'static',map:{}};for(var i=0;i<filterAttrs.conds.length;++i){var c=filterAttrs.conds[i];var cc=getAttr(this.attrs,c.on);if(!cc)continue;var hide=true;for(var j in cc.c){var a=getAttr(this.attrs,cc.c[j].on);if(a&&!shouldHide(getAttrProp(this.attrs,a),this.attrs.hidebydefault)){hide=false;break;}}
if(!hide)cvalues.map[-i-2]=c.name;}
if(!isempty(cvalues.map)){if(values){values={type:'pair',c:[values,cvalues]};}else{values=cvalues;}}}
if(!values)return;values={type:'defenum',defid:-1,defname:'all',values:values};const ctrl=get("quick-filter");this.filter={values:values,filteron:attr,ctrl:ctrl,name:"all",value:-1}
ctrl.onchange=e=>{this.setFilterValue(parseInt(ctrl.value));this.updateFilterPrefs();};const cb=(id,idx)=>{if(this.filter.name&&this.filter.value==null){const name=enm[this.filter.values.type].toString(id,this.filter.values);if(this.filter.name==name){this.setFilterValue(id);this.filter.ctrl.selectedIndex=idx;}}}
if(!this.filter.lstn){this.filter.lstn=fillOptions(ctrl,values,true,null,null,null,cb);}
this.filter.unlstn=()=>{enm[values.type].unlisten(values,this.filter.lstn);};return ctrl;};Table.prototype.setFilterValue=function(value){this.filter.value=value;this.filter.name=enm[this.filter.values.type].toString(value,this.filter.values);this.filter.pred=null;if(value<-1){var cond=this.filterAttrs.conds[-value-2];var c=getAttr(this.attrs,cond.on);this.filter.pred=c.c[0].pred;this.filter.attr=getAttr(this.attrs,c.c[0].on);}
this.update();};Table.prototype.getFilterValue=function(){if(this.filter&&this.filter.value>=0){return this.filter.name;}
return null;};Table.prototype.update=function(onlyOrder){this.map.foreach(obj=>{this.updateRow(obj,onlyOrder);});this.updateStatus();};Table.prototype.updateStatus=function(){if(!this.statusbar)return;var size=this.table.childElementCount-1;if(size===0){this.splash.noEntries();}else{this.splash.hide();}
var msg=size!=1?size+' items':'1 item';var count=this.map.getCount();if(count!=null&&size!=count){msg+=' out of '+count;if(size===0){this.splash.filter();}else{this.splash.hide();}}
replaceText(this.statusbar,msg);};function getFocusables(cell){return[...cell.querySelectorAll("input, button, a")].filter(i=>!i.disabled);}
Table.prototype.moveRow=function(cell){const dropTarget=cell.closest("tbody, thead");if(!dropTarget)return;[...this.selected].sort((a,b)=>{if(a._num<b._num)return-1;if(a._num>b._num)return 1;return 0;}).forEach(o=>this.map.moveObjectAfter(o,this.getRowObject(dropTarget)));this.table.classList.remove("move-mode");const move=get("move-btn");move.ariaPressed="false";this.landing.focus(cell);}
Table.prototype.cellOf=function(element){return element.matches("td, th")?element:element.closest("td, th");}
Table.prototype.addFocusHandler=function(){const navKeys=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End","PageUp","PageDown"];const focusSibling=(item,prev)=>{const cell=this.cellOf(item);if(cell===item)return;const focusables=getFocusables(cell);const idx=focusables.indexOf(item);const nextItem=focusables[prev?idx-1:idx+1];if(!nextItem)return;nextItem.tabIndex=0;nextItem.focus();item.tabIndex=-1;return nextItem;}
const changeWidth=(cell,offset)=>{const th=this.header.cells[cell.cellIndex];const w=getCellWidth(th)+offset;if(cell.colSpan>1)return;if(th.dataset.name==="comment"){if(offset>0&&this.table.classList.contains("comment-min")){dom.getByClass(this.table,"switch").click();return;}
if(offset<0&&this.table.classList.contains("comment-min"))return;if(offset<0&&w<30&&!this.table.classList.contains("comment-min")){const sw=dom.getByClass(this.table,"switch");while(!this.table.classList.contains("comment-min"))sw.click();return;}}
if(w<20)return;setCellWidth(th,w);const i=this.findColumn(th);if(i!=null){const col=this.columns[i];this.columnWidths[col.name]=getCellWidth(th);}else if(th.dataset.name==="comment"){this.columnWidths["comment"]=getCellWidth(th);}
this.updateColumnPrefs();}
this.table.onkeydown=e=>{if(this.inMoveMode()){if(e.key==="Escape")get("move-btn")?.click();else if(e.key==="Enter")this.moveRow(e.target);}
if(!navKeys.includes(e.key))return;e.preventDefault();const cell=this.cellOf(e.target);let nextCell;let last;switch(e.key){case"ArrowUp":case"PageUp":{const row=cell.closest("tr");const offset=e.key==="PageUp"?5:1;const idx=row.rowIndex-offset>0?row.rowIndex-offset:0;const nextRow=this.table.rows[idx];if(!nextRow===row)return;nextCell=nextRow.cells[this.landing.column]??nextRow.lastElementChild;break;}
case"ArrowDown":case"PageDown":{const row=cell.closest("tr");const offset=e.key==="PageDown"?5:1;const rows=this.table.rows.length;const idx=row.rowIndex+offset>rows-1?rows-1:row.rowIndex+offset;const nextRow=this.table.rows[idx];if(!nextRow===row)return;nextCell=nextRow.cells[this.landing.column]??nextRow.lastElementChild;break;}
case"ArrowLeft":if(e.altKey)return changeWidth(cell,-10);if(focusSibling(e.target,true))return;nextCell=cell.previousElementSibling;if(!nextCell)return;this.landing.column-=1;last=true;break;case"ArrowRight":if(e.altKey)return changeWidth(cell,10);if(focusSibling(e.target))return;nextCell=cell.nextElementSibling;if(!nextCell)return;this.landing.column+=1;break;case"Home":nextCell=cell.parentElement.cells[0];this.landing.column=0;if(e.ctrlKey){nextCell=this.header.cells[0];}
break;case"End":if(e.ctrlKey){const idx=this.table.rows.length-1
nextCell=this.table.rows[idx].cells[this.header.cells.length-1];}else{nextCell=cell.parentElement.cells[this.header.cells.length-1];}
this.landing.column=this.header.cells.length-1;break;}
this.landing.focus(nextCell,last,true);}
this.table.onclick=e=>{e.stopPropagation();if(this.inMoveMode()&&!e.altKey){this.moveRow(e.target);return;};const cell=this.cellOf(e.target);if(!cell)return;const row=cell.closest("tr");this.landing.column=[...row.cells].indexOf(cell);if(!cell.contains(document.activeElement))this.landing.focus(cell);}}
Table.prototype.addRowHandlers=function(row,obj){row.onclick=e=>{if(e.altKey)return this.landing.focus(this.cellOf(e.target));if(this.inMoveMode())return this.moveRow(this.cellOf(e.target));if(e.target.matches("input, button, a"))return;const path=this.map.getPath(obj);if(path)openContent(path);}
row.onkeydown=e=>{if(e.key==="Enter"){if(this.inMoveMode())this.moveRow(this.cellOf(e.target));else openContent(this.map.getPath(obj));}
else if(e.key===" ")dom.getByTag(row,"input").click();}
const getGroup=cell=>cell.closest("tbody, thead");if(this.attrs.ordered&&!this.attrs.ro){if(!this.sortKey)row.draggable=true;let dragging=null;row.ondragstart=e=>{if(this.inMoveMode())e.preventDefault();dragging=e.target;this.table.ondragover=e=>{hide(dragging);const group=getGroup(e.target);const fromTop=e.clientY-group.getBoundingClientRect().top;if(fromTop<15){let prevVisible=group.previousElementSibling;if(prevVisible?.hidden)prevVisible=prevVisible.previousElementSibling;prevVisible?.classList.add("droptarget");group.classList.remove("droptarget");}
e.preventDefault();}
this.table.ondragenter=e=>{const group=getGroup(e.target);if(group!==row)group?.classList.add("droptarget");}
this.table.ondragleave=e=>{const group=getGroup(e.target);if(group!==getGroup(e.relatedTarget))group.classList.remove("droptarget");}
this.table.ondrop=e=>{if(!getGroup(e.target).classList.contains("droptarget"))return;this.map.moveObjectAfter(this.getRowObject(dragging),this.getRowObject(getGroup(e.target)));}}
row.ondragend=()=>{show(dragging);dragging=null;[...this.table.children].forEach(r=>r.classList.remove("droptarget"));this.table.ondragover=null;this.table.ondragenter=null;this.table.ondragleave=null;this.table.ondrop=null;}}};Table.prototype.getRowObject=function(row){for(var i in this.rows){if(this.rows[i]==row){return this.map.getObject(i);}}
return null;};Table.prototype.updateComment=function(row,obj){var val=ftype(this.comment).get(this.comment,obj)??"";let line=row.lastChild;let comments=line.cells[this.attrs.ordered?3:2];replaceText(comments,val);comments.title=val;};Table.prototype.updateAboutInfo=function(row,obj){var val=ftype(this.about).get(this.about,obj);if(!val)val=[];var line=row.firstChild;if(line.className=='comment')line=line.nextSibling;var idx;for(idx=0;line.className=='about'&&idx<val.length;++idx){replaceText(line.firstChild,'--- '+val[idx]);line=line.nextSibling;}
if(idx==val.length){while(line.className=='about'){var next=line.nextSibling;row.removeChild(line);line=next;}}
for(;idx<val.length;++idx){const nline=make.tr({cls:"about"});const td=make.td({p:nline,cont:`--- ${val[idx]}`});td.colSpan=this.header.cells.length;row.insertBefore(nline,line);}};Table.prototype.updateCells=function(row,obj){const line=row.lastChild;const flags=line.cells[1];const newFlags=make.td();const flagCont=make.span({p:newFlags,cls:"flags"});const bands={};row.className=row.classList.contains("droptarget")?"droptarget":"";for(const[attrs,band]of this.flags){if(band&&bands[band])continue;const val=ftype(attrs).get(attrs,obj);const f=ftype(attrs).flag(attrs,val);if(f){if(f[0].className!="")row.className=f[0].className;flagCont.appendChild(f[0]);flagCont.title+=f[1]+"\n";if(band)bands[band]=true;}}
if(flags.textContent!==newFlags.textContent){flags.replaceWith(newFlags);}
if(!flagCont.hasChildNodes())flagCont.remove();var type=obj._type;var idx=2;if(this.attrs.ordered){replaceText(line.cells[idx++].lastElementChild,obj._num);}
if(this.comment)idx++;var first=idx;for(let i in this.columns){if(!this.columns[i])continue;let attrs=type.columns[i];let val=ftype(attrs).get(attrs,obj);attrs=this.attrs.columns[i];const cell=line.cells[idx];let data=cell.firstChild;if(idx==first&&this.attrs.icons&&data)data=data.nextSibling;var d=ftype(attrs).cell(attrs,obj,val,data);if((d&&!d.isEqualNode(data))||(d===null&&data!==null)){clearNodes(cell);if(idx==first){var icons=this.attrs.icons;if(obj._type.icons)icons=obj._type.icons;if(icons){var nr=0;if(this.iconon){nr=ftype(this.iconon).get(this.iconon,obj);if(nr==null||this.attrs.icons[nr]==null)nr=0;}
createIcon(cell,icons[nr]||0);}}
if(d&&d.textContent!==cell.textContent)cell.appendChild(d);}
++idx;}
if(this.comment)this.updateComment(row,obj);if(this.about)this.updateAboutInfo(row,obj);var color=null;if(this.attrs.colors){for(let i in this.attrs.colors){var c=this.attrs.colors[i];if(c.cond==null){var cd=getAttr(this.attrs,c.on);c.cond=cd?new Condition(cd):0;}
if(c.cond){if(c.cond.isTrue(obj)){color=c.color;break;}}}}
row.style.color=color;};Table.prototype.findRowIndex=function(obj){for(var i=0;i<this.order.length;++i){if(this.order[i]==obj)return i;}
return null;};Table.prototype.insertRow=function(row,obj,newRow){var order=this.order;if(!newRow){const isInRightPlace=(sortKey,obj,idx)=>{const prev=order[idx-1];const next=order[idx+1];if(prev&&!sortKey.cmp(prev,obj)&&sortKey.cmp(obj,prev))return false;if(next&&!sortKey.cmp(obj,next)&&sortKey.cmp(next,obj))return false;return true;};const idx=this.findRowIndex(obj);if(idx!=null){if(isInRightPlace(this.sortKey,obj,idx))return;order.splice(idx,1);}
this.table.removeChild(row);}
const idx=binarySearch(this.order,obj,(a1,a2)=>this.sortKey.cmp(a1,a2));if(idx<order.length){order.splice(idx,0,obj);var next=this.rows[order[idx+1].ufe0001];this.table.insertBefore(row,next);}else{order.push(obj);this.table.appendChild(row);}};Table.prototype.shouldHide=function(obj){if(!this.filter)return false;if(this.filter.value<0){if(this.filter.pred){let val=ftype(this.filter.attr).get(this.filter.attr,obj);return!isTrue(this.filter.pred,val);}
return false;}
const filteron=this.filter.filteron;const val=ftype(filteron).get(filteron,obj);return val!=(filteron.type==="enm"?this.filter.value:this.filter.name);};Table.prototype.getNextRow=function(obj){while(obj!=null){obj=this.map.getNext(obj);if(obj==null)return null;var row=this.rows[obj.ufe0001];if(row!=null)return row;}
return null;};Table.prototype.makeRow=function(obj){const row=make.el("tbody");const line=make.tr({p:row});this.addRowHandlers(row,obj);const box=make.td({p:line});box.onclick=box.onmousedown=e=>e.stopPropagation();box.onkeydown=e=>{if(e.key===" ")e.stopPropagation();}
box.title="Select row";const checkbox=make.input({p:box},"checkbox");checkbox.tabIndex=-1;checkbox.onchange=e=>{const tr=checkbox.closest("tr");if(checkbox.checked){this.selected.add(obj);tr.ariaSelected="true";box.title="Unselect row";}else{this.selected.delete(obj);tr.ariaSelected="false";box.title="Select row";}
if(e)this.selectLstns.notify();}
checkbox.onclick=e=>{if(this.inMoveMode())e.preventDefault();}
make.td({p:line});if(this.attrs.ordered){const c=make.td({p:line});if(!this.attrs.ro)make.div({p:c,cls:"icon icon-tbl icon-Drag_12x12"});make.span({p:c});}
if(this.comment)make.td({p:line,cls:"comment"});this.columns.filter(c=>c).forEach(c=>make.td({p:line}));make.td({p:line});return row;}
Table.prototype.updateRow=function(obj,onlyOrder){var id=obj.ufe0001;var row=this.rows[id];if(obj.ufe0013||this.shouldHide(obj)){if(row){this.selected.delete(obj);this.selectLstns.notify();if(row.contains(this.landing.cell)){this.landing.cell=this.table.rows[0].cells[0];}
row.parentNode.removeChild(row);delete this.rows[id];var idx=this.findRowIndex(obj);if(idx!=null)this.order.splice(idx,1);}
return true;}
var ccfg=getContainerProp(obj._type);if(ccfg._hide)return true;if(obj._type.service){var scfg=getServiceProp(obj._type.service);if(scfg._hide)return true;}
var newRow=false;if(!row){newRow=true;row=this.makeRow(obj);this.rows[id]=row;}
if(!this.sortKey){var next=this.getNextRow(obj);if(newRow||row.nextSibling!=next){if(!newRow)this.table.removeChild(row);if(next){this.table.insertBefore(row,next);}else{this.table.appendChild(row);}}}else{this.insertRow(row,obj,newRow);}
if(!onlyOrder||newRow)this.updateCells(row,obj);return newRow;};Table.prototype.findColumnByName=function(name){var idx=2;if(this.comment)++idx;if(this.attrs.ordered)++idx;for(var i in this.columns){if(this.columns[i]==null)continue;if(this.columns[i].name==name)return this.header.cells[idx];++idx;}
return null;};Table.prototype.findColumn=function(col){var idx=2;if(this.comment)++idx;if(this.attrs.ordered)++idx;for(var i in this.columns){if(this.columns[i]==null)continue;if(this.header.cells[idx]==col)return i;++idx;}
return null;};Table.prototype.sortBy=function(col,skipUpdate){var i=this.findColumn(col);if(i==null){var colName=col.innerText;}
if(i==null&&!colName&&!this.attrs.ordered)return;if(this.sortKey){this.sortKey.col.classList.remove("sort-descend","sort-ascend");this.sortKey.col.ariaSort="none";}
var ascend=true;var next=this.sortKey;if(this.sortKey&&this.sortKey.col==col){next=next.next;ascend=!this.sortKey.ascend;}
if(!next&&this.attrs.ordered)next=new CmpOrder();if(!i&&colName==="Comment"){i="comment";}
const moveBtn=get("move-btn");if(i!=null){const attr=(i==="comment")?this.comment:this.columns[i];if(ascend){col.classList.add("sort","sort-ascend");col.ariaSort="ascending";this.sortKey=new CmpAscending(col,attr,i,next);}else{col.classList.add("sort","sort-descend");col.ariaSort="descending";this.sortKey=new CmpDescending(col,attr,i,next);}
if(moveBtn){if(moveBtn.ariaPressed==="true")moveBtn.click();moveBtn.disabled=true;if(this.attrs.ordered&&!this.attrs.ro){[...this.table.getElementsByTagName("tbody")].forEach(e=>{e.draggable=false})}}}else{if(this.selected.size>0&&moveBtn)moveBtn.disabled=false;this.sortKey=null;if(this.attrs.ordered&&!this.attrs.ro){[...this.table.getElementsByTagName("tbody")].forEach(e=>{e.draggable=true})}}
this.order=[];if(!skipUpdate){this.update(true);this.updateSortPrefs();}};Table.prototype.loadPrefs=function(){const newPrefs=this.getPrefs();const columns=newPrefs?.columns||{};for(const[name,width]of Object.entries(columns)){this.columnWidths[name]=width;const c=this.findColumnByName(name);if(c){setCellWidth(c,width);}else if(this.comment&&name==="comment"){setCellWidth(this.header.cells[this.attrs.ordered?3:2],width);}}
const sort=newPrefs?.sort||[];for(let name of sort.reverse()){let descend=false;if(name.startsWith('!')){name=name.substr(1);descend=true;}
const col=this.findColumnByName(name);if(col){this.sortBy(col,true);if(descend)this.sortBy(col,true);}else if(this.comment&&name==="comment"){const com=this.header.cells[this.attrs.ordered?3:2];this.sortBy(com,true);if(descend)this.sortBy(com,true);}}
if(!this.sortKey&&!this.attrs.ordered){this.sortBy(this.header.cells[this.comment?3:2],true);}
const filter=newPrefs?.filter;if(filter&&this.filter){this.filter.name=filter;this.filter.value=null;var map=enm[this.filter.values.type].getMap(this.filter.values);for(let id in map){if(map[id]==this.filter.name){this.setFilterValue(id);this.filter.ctrl.selectedIndex=getOptionIndex(this.filter.ctrl,id);break;}}}};Table.prototype.updateSortPrefs=function(){let limit=3;const prefs=[];for(let i=this.sortKey;i&&i.attrs;i=i.next){if(--limit==0)i.next=null;let name=i.attrs.name??i.attrs.type;if(!i.ascend)name='!'+name;prefs.push(name);}
this.setPrefs("sort",prefs);};Table.prototype.updateColumnPrefs=function(){this.setPrefs("columns",this.columnWidths);};Table.prototype.updateFilterPrefs=function(){if(this.filter.name){this.setPrefs("filter",this.filter.name);}};Table.prototype.updateCommentPrefs=function(state){this.setPrefs("comment",state);}
function copyObject(obj){return Object.assign({},obj);}
function TermBuf(maxSize,id){this.buffer=[];this.offset=0;this.maxBufferSize=maxSize;this.id=id;}
TermBuf.prototype.size=function(){return this.buffer.length-this.offset;};TermBuf.prototype.fullSize=function(){return this.buffer.length;};TermBuf.prototype.lineAt=function(idx){return this.buffer[this.offset+idx].line;};TermBuf.prototype.attrAt=function(idx){return this.buffer[this.offset+idx].attr;};TermBuf.prototype.append=function(){this.buffer.push({line:'',attr:[]});};TermBuf.prototype.setLine=function(idx,line){this.buffer[this.offset+idx].line=line;};TermBuf.prototype.resize=function(sz){if(this.fullSize()>(sz+this.offset)){for(let i=this.fullSize();i>(sz+this.offset);--i){this.buffer.pop();}}
else{for(let i=this.fullSize();i<(sz+this.offset);++i){this.buffer.push({line:"",attr:[]});}}};TermBuf.prototype.erase=function(begin,delCnt){this.buffer.splice(begin,delCnt);};TermBuf.prototype.clearAll=function(){this.offset=0;this.buffer=[];};function Terminal(term){this.term=term;this.path=[76];this.id=null;this.topMargin=0;this.sequence='';this.recvd=0;this.inputpost=false;this.inputbuffer=[];this.deletedRows=0;this.altBuffer=new TermBuf(0,0);this.mainBuffer=new TermBuf(1000,0);this.buf=this.mainBuffer;this.attribute={font:'normal',underline:'none',intensity:0,reverse:0,foreground:0,background:15};this.cursor={xpos:0,ypos:0,useGraphic:[false,true],attr:copyObject(this.attribute)};this.savedCursor={xpos:0,ypos:0,useGraphic:[false,true],attr:copyObject(this.attribute)};this.activeCharset=0;this.wrapPending=false;this.insertMode=false;this.keyMode=false;this.arrContainer=[];this.isAutoRepeat=false;this.bufAttrIdx=0;this.hasAttrChanged=false;this.consumer=this.processChar;this.bottomMargin=0;term.onbeforeinput=e=>{e.preventDefault();if(this.failedKeydown){this.input([...e.data].map(c=>c.charCodeAt(0)));this.failedKeydown=false;}}
this.term.onkeydown=e=>{if(e.key==="Unidentified"){this.failedKeydown=true;return;}
if(e.shiftKey&&e.key==="Tab")return;const key=e.key;const refresh=(key==='F5');if((e.ctrlKey&&key.length===1)||refresh){const sc=['\\','a','c','d','e','k','l','o','r','u','x','y','z'];if(sc.includes(key.toLowerCase())||refresh){const c=refresh?12:key.toUpperCase().charCodeAt(0)-0x40;this.input([c]);this.ignoreKeyEvent(e);if(key.toLowerCase()==='l'||refresh)
this.repaint();}
return;}
const seq=this.translateKey(key);if(seq!==null){this.input(seq);this.ignoreKeyEvent(e);}else if(key.length===1){this.input([key.charCodeAt(0)]);if(key=='/'||key=='\'')
this.ignoreKeyEvent(e);}};this.term.onhelp=e=>false;this.term.onpaste=e=>{e.preventDefault();this.input([...e.clipboardData.getData("text")].map(c=>c.charCodeAt(0)));}};Terminal.prototype.repaint=function(){if(this.buf!=this.mainBuffer)
return;this.buf.clearAll();this.term.innerHTML='';};Terminal.prototype.ignoreKeyEvent=function(e){e.preventDefault();e.stopPropagation();};Terminal.prototype.login=function(sz){this.screenWidth=sz.x;this.screenHeight=sz.y;this.bottomMargin=sz.y-1;var req={};req.Uff0001=this.path;req.uff0007=0xa0065;req.s7='vt102';req.u5=this.screenWidth;req.u6=this.screenHeight;this.listen();post(req,rep=>{if(isError(rep)){make.div({p:document.body,cls:"error",cont:`error ${rep.sff0009}`});}
this.id=rep.ufe0001;if(this.pendingWinch){this.sendWinch();}});};Terminal.prototype.sendWinch=function(){if(this.id==null){this.pendingWinch=true;return;}
this.pendingWinch=false;var req={};req.ufe0001=this.id;req.Uff0001=[76];req.uff0007=0xa0068;req.u5=this.screenWidth;req.u6=this.screenHeight;post(req,function(rep){});};Terminal.prototype.winch=function(sz){if(this.screenWidth==sz.x&&this.screenHeight==sz.y)return;this.screenWidth=sz.x;if(this.screenHeight!=sz.y){var doffset=this.screenHeight-sz.y;this.screenHeight=sz.y;this.bottomMargin=sz.y-1;doffset=Math.min(doffset,this.buf.size());doffset=Math.max(doffset,-this.buf.offset);this.buf.offset+=doffset;this.cursor.ypos-=doffset;this.term.scrollTop=this.term.scrollHeight;}
this.sendWinch();};Terminal.prototype.scroll=function(){if(this.buf.size()>0){if(this.buf.maxBufferSize>this.buf.offset+this.screenHeight){++this.buf.offset;}else{++this.deletedRows;this.buf.erase(0,1);}}};Terminal.prototype.scrollUp=function(){if(this.cursor.ypos==this.bottomMargin){if(this.topMargin==0){this.scroll();}
else if(this.topMargin<this.buf.size()){this.buf.erase(this.buf.offset+this.topMargin,1);}
if(this.bottomMargin<=this.buf.size()){this.buf.buffer.splice(this.buf.offset+this.bottomMargin,0,{line:"",attr:[]});}}
else{++this.cursor.ypos;}};Terminal.prototype.scrollDown=function(){if(this.cursor.ypos==this.topMargin){if(this.bottomMargin<this.buf.size()){this.buf.erase(this.buf.offset+this.bottomMargin,1);}
if(this.topMargin<=this.buf.size()){this.buf.buffer.splice(this.buf.offset+this.topMargin,0,{line:"",attr:[]});}}
else{--this.cursor.ypos;}};Terminal.prototype.ensureSpace=function(){if(this.cursor.ypos>=this.buf.size()){let len=this.cursor.ypos-this.buf.size();for(let i=0;i<=len;++i){this.buf.append();}}
var line=this.buf.lineAt(this.cursor.ypos);if(this.cursor.xpos>=line.length){let len=this.cursor.xpos-line.length;for(let i=0;i<=len;++i){line+='\u00a0';}
this.buf.setLine(this.cursor.ypos,line);}};Terminal.prototype.processChar=function(c){if(c<0)c=' ';if(this.cursor.useGraphic[this.activeCharset]&&c>=0x60){var map=['\u2666','\u2592','H','F','C','L','\u00b0','\u00b1','N','V','\u2518','\u2510','\u250c','\u2514','\u253c','\u00af','\u00af','\u2500','_','_','\u251c','\u2524','\u2534','\u252c','\u2502','\u2264','\u2265','\u00b6','\u2260','\u00a3','\u2219',' '];c=map[c-0x60];}
if(this.wrapPending){this.cursor.xpos=0;this.scrollUp();this.wrapPending=false;}
this.ensureSpace();var font=this.cursor.attr.font;var fg=!this.cursor.attr.reverse?this.cursor.attr.foreground:this.cursor.attr.background;var bg=!this.cursor.attr.reverse?this.cursor.attr.background:this.cursor.attr.foreground;if(fg<8){if(this.cursor.attr.intensity){fg+=8;}else if(font=='bold'&&this.cursor.attr.background!=15){fg+=8;font='normal';}}
var ch=String.fromCharCode(c);var x=this.cursor.xpos;var y=this.cursor.ypos;var line=this.buf.lineAt(y);var attr=this.buf.attrAt(y);var beg=line.slice(0,x);var end=line.slice(x);if(this.insertMode){this.buf.setLine(y,beg+ch+end);}else{this.buf.setLine(y,beg+ch+end.slice(1));}
if(this.hasAttrChanged){function color(i){var d=i>=8?'55':'00';var l=i>=8?'ff':'9b';return'#'+((i&1)?l:d)+((i&2)?l:d)+((i&4)?l:d);}
var style={}
style.fontWeight=font;style.backgroundColor=color(bg);style.color=color(fg);style.textDecoration=this.cursor.attr.underline;if(attr[x]){for(var i=x+1;i<=this.bufAttrIdx;++i){delete attr[i];}}
attr[x]=style;this.bufAttrIdx=x;this.hasAttrChanged=false;}
this.cursor.xpos++;if(this.cursor.xpos==this.screenWidth){this.cursor.xpos--;this.wrapPending=true;}};Terminal.prototype.selectGraphicRendition=function(args){for(var i=0;i<(args.length||1);++i){var p=this.argAt(args,i,0);switch(p){case 0:this.cursor.attr=copyObject(this.attribute);break;case 1:this.cursor.attr.font='bold';break;case 2:this.cursor.attr.font='normal';this.cursor.attr.intensity=0;break;case 4:this.cursor.attr.underline='underline';break;case 5:case 7:this.cursor.attr.reverse=1;break;case 21:this.cursor.attr.intensity=1;break;case 22:this.cursor.attr.font='bold';break;case 24:this.cursor.attr.font='normal';break;case 25:case 27:this.cursor.attr.reverse=0;break;case 38:this.cursor.attr.foreground=0;this.cursor.attr.underline='underline';break;case 39:this.cursor.attr.foreground=0;this.cursor.attr.font='normal';break;case 49:this.cursor.attr.background=15;break;default:if(p>=30&&p<=37){this.cursor.attr.foreground=p-30;}else if(p>=40&&p<=47){this.cursor.attr.background=p-40;}
break;};}};Terminal.prototype.doControll=function(cmd,args){switch(cmd){case'A':this.cursor.ypos=Math.max(this.cursor.ypos-this.argAt(args,0,1),0);break;case'B':this.cursor.ypos=Math.min(this.cursor.ypos+this.argAt(args,0,1),this.screenHeight-1);break;case'C':this.cursor.xpos=Math.min(this.cursor.xpos+this.argAt(args,0,1),this.screenWidth-1);this.wrapPending=false;break;case'D':this.cursor.xpos=Math.max(this.cursor.xpos-this.argAt(args,0,1),0);this.wrapPending=false;break;case'f':case'H':this.cursor.xpos=Math.min(Math.max(this.argAt(args,1,1)-1,0),this.screenWidth-1);this.cursor.ypos=Math.min(Math.max(this.argAt(args,0,1)-1,0),this.screenHeight-1);this.wrapPending=false;this.term.innerHTML="";this.buf.resize(this.screenHeight);for(var i=0;i<this.buf.buffer.length;++i){let line=this.createLineElements(i);this.term.appendChild(line);}
break;case'K':{this.ensureSpace();let line=this.buf.lineAt(this.cursor.ypos);switch(this.argAt(args,0,0)){case 0:this.buf.setLine(this.cursor.ypos,line.slice(0,this.cursor.xpos));this.hasAttrChanged=true;break;case 1:{let str='';for(let i=0;i<this.cursor.xpos;++i){str+=' ';}
var end=line.slice(this.cursor.xpos);this.buf.setLine(this.cursor.ypos,str+end);break;}
case 2:this.buf.setLine(this.cursor.ypos,"");break;}
this.wrapPending=false;break;}
case'J':{this.ensureSpace();switch(this.argAt(args,0,0)){case 0:{let line=this.buf.lineAt(this.cursor.ypos);this.buf.setLine(this.cursor.ypos,line.slice(0,this.cursor.xpos));this.buf.resize(this.cursor.ypos+1);break;}
case 1:{for(let i=0;i<this.cursor.ypos;++i){this.buf.setLine(i,"");}
let line=this.buf.lineAt(this.cursor.ypos);let str='';for(let i=0;i<this.cursor.xpos;++i){str+=' ';}
let end=line.slice(this.cursor.xpos);this.buf.setLine(this.cursor.ypos,str+end);break;}
case 2:this.buf.resize(0);break;}
this.wrapPending=false;break;}
case'P':{this.ensureSpace();let line=this.buf.lineAt(this.cursor.ypos);var n=this.argAt(args,0,1);if((this.cursor.xpos+n)>line.length){n=line.length-this.cursor.xpos;}
if((this.cursor.xpos+n)==line.length){var attr=this.buf.attrAt(line.length-1);var a=attr[this.bufAttrIdx];for(let i=0;i<n;++i){line+=' ';attr[this.bufAttrIdx+i]=a;}}
var beg=line.slice(0,this.cursor.xpos);let end=line.slice(this.cursor.xpos+n);this.buf.setLine(this.cursor.ypos,beg+end);this.wrapPending=false;break;}
case'r':this.topMargin=Math.max(this.argAt(args,0,1),1)-1;var reqBottomMargin=this.argAt(args,1,65535)-1;this.bottomMargin=Math.min(reqBottomMargin,this.screenHeight-1);break;case'm':this.hasAttrChanged=true;this.selectGraphicRendition(args);break;case'h':if(this.sequence.length>=1&&this.sequence.charAt(0)=='?'){this.setPrivateMode(this.argAt(args,0,0),true);}else{this.setMode(this.argAt(args,0,0),true);}
break;case'l':if(this.sequence.length>=1&&this.sequence.charAt(0)=='?'){this.setPrivateMode(this.argAt(args,0,0),false);}else{this.setMode(this.argAt(args,0,0),false);}
break;case'n':if(this.sequence.length>=1&&this.sequence.charAt(0)=='?'){let b='';switch(this.argAt(args,0,0)){case 6:b='?'+(this.cursor.ypos+1)+';'+(this.cursor.xpos+1)+'R';this.input(this.escSeq(b,false));break;};}
else{let b='';switch(this.argAt(args,0,0)){case 5:this.input(this.escSeq('0n',false));break;case 6:b=(this.cursor.ypos+1)+';'+(this.cursor.xpos+1)+'R';this.input(this.escSeq(b,false));break;};}
break;case'c':if(args.length<=1&&this.argAt(args,0,0)==0){var seq=this.escSeq('?1;2c',false);this.input(seq);}
break;case'g':break;default:break;}};Terminal.prototype.doEsc=function(cmd){if(this.sequence.length>=1){if(this.sequence.charAt(0)=='('){this.cursor.useGraphic[0]=(cmd=='0');return;}else if(this.sequence.charAt(0)==')'){this.cursor.useGraphic[1]=(cmd=='0');return;}else if(this.sequence.charAt(0)=='#'){if(cmd=='8'){this.buf.resize(this.screenHeight);for(var i=0;i<this.screenHeight;++i){var str='';for(var j=0;j<this.screenWidth;++j){str+='E';}
this.buf.setLine(i,str);}}else{}
return;}}
switch(cmd){case'D':this.scrollUp();break;case'M':this.scrollDown();break;case'E':this.scrollUp();this.cursor.xpos=0;this.wrapPending=false;break;case'N':break;case'O':break;case'7':this.savedCursor=copyObject(this.cursor);break;case'8':this.cursor=copyObject(this.savedCursor);this.cursor.xpos=Math.min(this.cursor.xpos,this.screenWidth-1);this.cursor.ypos=Math.min(this.cursor.ypos,this.screenHeight-1);this.wrapPending=false;break;case'c':this.cursor.xpos=0;this.cursor.ypos=0;this.cursor.useGraphic[0]=false;this.cursor.useGraphic[1]=true;this.cursor.attr=copyObject(this.attribute);this.altBuffer.clearAll();this.mainBuffer.clearAll();this.deletedRows=0;this.bufAttrIdx=0;this.hasAttrChanged=false;break;case'Z':var seq=this.escSeq('?1;2c',false);this.input(seq);break;default:break;}};Terminal.prototype.checkSequenceSize=function(){if(this.sequence.length>128){this.consumer=this.processChar;this.sequence='';}};Terminal.prototype.processControl=function(c){if(c>63&&c<127){this.doControll(String.fromCharCode(c),this.parseArray(this.sequence));this.sequence='';this.consumer=this.processChar;}else{this.sequence+=String.fromCharCode(c);this.checkSequenceSize();}};Terminal.prototype.processEscape=function(c){if(!this.sequence&&c==91){this.consumer=this.processControl;}else{if(c>47&&c<127){this.doEsc(String.fromCharCode(c));this.sequence='';this.consumer=this.processChar;}else{this.sequence+=String.fromCharCode(c);this.checkSequenceSize();}}};Terminal.prototype.doControlChar=function(cmd){switch(cmd){case 0:break;case 7:break;case 8:if(this.cursor.xpos>0)--this.cursor.xpos;this.wrapPending=false;break;case 9:this.cursor.xpos=Math.min((this.cursor.xpos+8)&-8,this.screenWidth-1);this.wrapPending=false;break;case 10:case 11:this.scrollUp();break;case 12:this.cursor.xpos=0;this.scrollUp();this.wrapPending=false;break;case 13:this.cursor.xpos=0;this.wrapPending=false;break;case 14:this.activeCharset=1;break;case 15:this.activeCharset=0;break;case 27:this.consumer=this.processEscape;break;default:break;}};Terminal.prototype.argAt=function(array,idx,def){return array.length>idx&&array[idx]!=-1?array[idx]:def;};Terminal.prototype.escSeq=function(ch,keyMode){var arr=[];arr.push(27);arr.push(keyMode?79:91);for(var i in ch){arr.push(ch.charCodeAt(i));}
return arr;};Terminal.prototype.input=function(arr){if(this.ackTimer){cancelTimer(this.ackTimer);this.ackTimer=null;}
this.inputbuffer=this.inputbuffer.concat(arr);if(this.inputpost){return;}
var req={};req.Uff0001=this.path;req.uff0007=0xa0067;if(this.inputbuffer.length){req.r2=this.inputbuffer;this.inputbuffer=[];}
req.u3=this.recvd;if(this.id!=null)req.ufe0001=this.id;this.inputpost=true;var that=this;post(req,function(rep){that.inputpost=false;if(that.inputbuffer.length){that.input([]);}});};Terminal.prototype.setMode=function(mode,enable){switch(mode){case 4:this.insertMode=enable;break;default:break;}};Terminal.prototype.setPrivateMode=function(mode,enable){switch(mode){case 1:this.keyMode=enable;break;case 3:break;case 47:case 1047:this.buf=enable?this.altBuffer:this.mainBuffer;if(enable){this.term.innerHTML='';this.altBuffer.resize(this.screenHeight);var buf=this.buf.buffer;var term=this.term;for(var i=0;i<buf.length;++i){var line=this.createLineElements(i);term.appendChild(line);}}
break;default:break;}};Terminal.prototype.parseArray=function(seq){var idx=0;var array=[];while(true){while(seq[idx]&&isNaN(seq[idx])&&seq[idx]!=';')++idx;if(isNaN(seq[idx]))break;var str='';var lastIdx=idx;while(!isNaN(seq[idx])){str+=parseInt(seq[idx],10);++idx;}
if(seq[idx]==';')++idx;if(lastIdx==idx)break;if(seq[lastIdx]==';')str="-1";array.push(Number(str));}
return array;};Terminal.prototype.translateKey=function(key){switch(key){case'Backspace':return[8];case'Tab':return[9];case'Enter':return[13];case'ArrowUp':return this.escSeq('A',this.keyMode);case'ArrowDown':return this.escSeq('B',this.keyMode);case'ArrowRight':return this.escSeq('C',this.keyMode);case'ArrowLeft':return this.escSeq('D',this.keyMode);case'Delete':return this.escSeq('3~',false);case'PageUp':return this.escSeq('5~',false);case'PageDown':return this.escSeq('6~',false);case'Home':return this.escSeq('1~',false);case'End':return this.escSeq('4~',false);case'F1':return this.escSeq('P',true);case'F2':return this.escSeq('Q',true);case'F3':return this.escSeq('R',true);case'F4':return this.escSeq('S',true);case'F6':return this.escSeq('17~',false);case'F7':return this.escSeq('18~',false);case'F8':return this.escSeq('l',true);case'F9':return this.escSeq('w',true);case'F10':return this.escSeq('x',true);}
return null;};Terminal.prototype.createLineElements=function(pos){var buf=this.buf.buffer[pos];var text=buf.line;var attr=buf.attr;var style=attr[0];var cpos=pos==this.buf.offset+this.cursor.ypos?this.cursor.xpos:-1;const line=make.span({cont:"\r\n"});var prev=0;for(var i=1;i<=text.length;++i){if(i==text.length||attr[i]||Math.abs(i-cpos)<=1){var t=text.substr(prev,i-prev);if(t=='')t='\u00a0';const s=make.span({p:line,cont:t});for(var k in style)s.style[k]=style[k];if(i-1==cpos){s.className='cursor';}
prev=i;if(attr[i])style=attr[i];}}
return line;};Terminal.prototype.process=function(dat){var oldXPos=this.cursor.xpos;var oldYPos=this.cursor.ypos+this.buf.offset;var oldBuf=[];var buf=this.buf.buffer;for(let i=0;i<buf.length;++i){oldBuf[i]={line:buf[i].line,attr:buf[i].attr.slice()};}
for(let i in dat){var c=dat[i];if(c>=0&&c<32){this.doControlChar(c);}else{this.consumer(c);}}
var term=this.term;for(let i=0;i<this.deletedRows;++i){term.removeChild(term.firstChild);}
oldBuf.splice(0,this.deletedRows);oldYPos-=this.deletedRows;this.deletedRows=0;var xPos=this.cursor.xpos;var yPos=this.cursor.ypos+this.buf.offset;if(oldYPos!=yPos){oldBuf[oldYPos]=null;oldBuf[yPos]=null;}else if(oldXPos!=xPos){oldBuf[yPos]=null;}
function eq(a1,a2){if(a1.length!=a2.length)return false;for(var i=0;i<a1.length;++i){if(a1[i]!=a2[i])return false;}
return true;}
this.ensureSpace();buf=this.buf.buffer;for(let i=0;i<buf.length;++i){const ob=oldBuf[i];if(ob&&ob.line==buf[i].line&&eq(ob.attr,buf[i].attr)){continue;}
var line=this.createLineElements(i);if(!term.childNodes[i])term.appendChild(line);else term.replaceChild(line,term.childNodes[i]);}
if(this.screenHeight-1==this.cursor.ypos){term.scrollTop=term.scrollHeight;}};Terminal.prototype.notify=function(obj){if(obj.r2==null)return;this.recvd+=obj.r2.length;if(!this.ackTimer){this.ackTimer=timer(()=>{this.input([]);},10);}
this.process(obj.r2);};Terminal.prototype.listen=function(){subscribers[this.path]=this;};Terminal.prototype.close=function(){subscribers[this.path]=null;if(this.id){var req={};req.ufe0001=this.id;req.Uff0001=this.path;req.uff0007=0xa0066;post(req);}};function Pane(attrs,top){this.attrs=attrs;this.top=top;this.pinChange=null;}
Pane.prototype.getPath=function(){return getPath(this.attrs);};Pane.prototype.open=function(cont){const cnt=get("content");this.addIcon(cont);this.addPin(cont);this.createTabs(cont);const a=get("action");const c=get("config");this.tb={action:a?Toolbar.make(a):null,mAction:get("m-action"),config:c?Toolbar.make(c):null,mConfig:get("m-config")}
this.create(cnt);this.addButtons(cont);};Pane.prototype.create=function(cnt){}
Pane.prototype.close=function(){if(this.owner)this.owner.close();this.removePin();};Pane.prototype.setOwner=function(o){this.owner=o;};Pane.prototype.setCustomTitle=function(title,subtitle){get("title")?.append(title);get("itemname")?.append(subtitle);this.customTitle=true;};Pane.prototype.setTitle=function(title,cfg,propname,postfix,updateOnlyPostfix){if(this.customTitle)return;if(this.attrs.notitle)return;if(cfg&&cfg[propname]&&cfg[propname].name){cfg[propname]=cfg[propname].name;}
const header=get("title");if(!updateOnlyPostfix){clearNodes(header);header.appendChild(viewLabel(cfg,title,propname));if(postfix!=null){const itemname=get("itemname");if(itemname){itemname.textContent=postfix.slice(1,-1);}
else make.span({p:header,cont:` ${postfix}`});}}else{if(postfix!=null){const itemname=get("itemname");if(itemname)replaceText(get("itemname"),postfix);}}
if(cfg&&cfg[propname])title=cfg[propname];if(postfix)title+=' '+postfix;setDocumentTitle(title);};Pane.prototype.setTitleFromObject=function(obj,updateOnlyPostfix){var ni=obj._owner.getFullName(obj);this.setTitle(ni.name,ni.cfg,ni.propname,ni.postfix,updateOnlyPostfix);};Pane.prototype.createTabs=function(cont){if(isTabless(cont)||!this.top||cont.hide)return;const tabCnt=get("tabs");const dropBtn=get("tablist");cont.service.c.forEach(c=>{if(!isContainerVisible(c)||c.hide)return;if(!container[c.type].tab)return;const cfg=getContainerProp(c);if(cfg._hide)return;const li=getTemplate("service-tab");tabCnt.appendChild(li);const a=dom.getByTag(li,"a");a.href=getPath(c);a.appendChild(viewLabel(cfg,c.title,"title"));a.title=a.textContent;if(c.title===cont.title){a.classList.add("tabs-active");a.id="active-table-tab";a.setAttribute("aria-selected","true");a.tabIndex=0;dropBtn.textContent=a.title;}
a.onkeydown=e=>{if(e.key==="ArrowRight")dom.focusNext(a);if(e.key==="ArrowLeft")dom.focusPrevious(a);}});const dropTabCnt=get("dropdown-tabs");Array.from(tabCnt.children).forEach(t=>{const li=t.cloneNode(true);const a=dom.getByTag(li,"a");if(a.id)a.id="";const active=a.classList.contains("tabs-active")?" active":"";a.className="option"+active;dropTabCnt.appendChild(li);a.onkeydown=e=>{if(e.key==="ArrowDown")dom.focusNext(a);if(e.key==="ArrowUp")dom.focusPrevious(a);}});const dropCnt=dropBtn.parentElement;dropCnt.onclick=e=>{if(e.target!==dropCnt)return;dropCnt.classList.remove("show");dropBtn.ariaExpanded="false";}
dropBtn.onclick=e=>{dropCnt.classList.toggle("show");dropBtn.ariaExpanded=dropBtn.ariaExpanded=="true"?"false":"true";if(!e.pointerType)dom.getByClass(dropTabCnt,"active")?.focus();}
dropBtn.onkeydown=e=>{if(e.key==="ArrowDown")dropBtn.click();}
dropTabCnt.addEventListener("focusout",e=>{const target=e.relatedTarget;if(dropTabCnt.contains(target))return;dropCnt.classList.remove("show");dropBtn.ariaExpanded="false";});dropBtn.ariaCurrent="page";const content=get("content");content.setAttribute("aria-labelledby","active-table-tab");if(tabCnt.childNodes.length==1){hide(get("tab-container"));content.role="";}};Pane.prototype.addIcon=function(cont){get("title-icon")?.classList.add(`icon-${iconName(cont.service.icon ??
                                                      cont.service.groupIcon)}`);};Pane.prototype.addPin=function(cont){const pin=get("container-pin");if(!pin)return;const pinIcon=dom.getByClass(pin,"icon");const path=this.getPath();if(configSearch.isPinned(path)){pinIcon.classList.replace("unpinned","pinned");pin.title="Remove from pinned";}
const remState=()=>{pinIcon.classList.replace("pinned","unpinned");pin.title="Pin to search results";}
const addState=()=>{pinIcon.classList.replace("unpinned","pinned");pin.title="Unpin from search results";}
pin.onclick=()=>{if(configSearch.isPinned(path)){configSearch.removePin(path);remState()}else{configSearch.addPin(path);addState();}}
this.pinChange=function(action,hash){if(hash!==path)return;if(action==="add")addState();if(action==="rm")remState();}
configSearch.lstn.listen(this.pinChange);}
Pane.prototype.removePin=function(){const pin=get("container-pin");if(!pin)return;configSearch.lstn.unlisten(this.pinChange);}
Pane.prototype.addButtons=function(cont){if((!this.top||isTabless(cont)||cont.hide)&&!isTablessContainer(cont))return;var service=cont.service;var i=0;for(;i<service.c.length;++i){if(service.c[i]==cont)break;}
for(++i;i<service.c.length;++i){var c=service.c[i];if(!isContainerVisible(c)||c.hide)continue;if(this.top&&container[c.type].tab)break;var cfg=getContainerProp(c);if(cfg._hide)continue;if(["map","item"].includes(c.type)){this.addConfigButton(c.title,cfg,getPath(c));}else{this.addActionButton(c.title,cfg,getPath(c));}}};Pane.prototype.addActionButton=function(title,cfg,href){const b=createButton(title,cfg,href,"btn w-100");this.tb.action?.append(b);b.id=`toolbar-item-${uniqueId.next()}`;createOption(this.tb.mAction,title,cfg,b.id);return b;};Pane.prototype.addConfigButton=function(title,cfg,href){const b=createButton(title,cfg,href,"btn w-100");this.tb.config?.append(b);b.id=`toolbar-item-${uniqueId.next()}`;createOption(this.tb.mConfig,title,cfg,b.id);return b;};class TablePane extends Pane{constructor(attrs,map,objID,href){super(attrs,true);this.map=map;this.objID=objID;this.href=href;}
create(cnt){if(this.objID!=null){this.lstn=(obj)=>{if(obj.ufe0001==this.objID)reopen();};this.map.listen(this.lstn);}
this.addCloseButton();this.setTitle(this.attrs.service.title,getSysProps(this.attrs),"title");this.table=new Table(cnt,this.map,document.getElementById("statusbar"));if(!this.attrs.ro&&!shouldHide(getSysProp(this.attrs,"set"))&&!shouldHide(getSysProp(this.attrs,"remove"))){const addCfg=getSysProp(this.attrs,"add");const subtypes=this.map.getSubtypes()?.map(t=>this.map.getSubtype(this.map.getType(),normalize(t))).filter(t=>!getServiceProp(t.service)._hide).filter(t=>!getContainerProp(t)._hide).filter(t=>!getSysProp(t,"remove")._hide).filter(t=>!getSysProp(t,"add")._hide).map(t=>t.title)??[];const newBtn=get("new-button");if(!isempty(subtypes)){const b=getTemplate("button-icon-menu");const sel=dom.getByTag(b,"select");subtypes.forEach(type=>{const opt=make.el("option",{p:sel});opt.text=type;opt.value=`${getPath(this.attrs)}.new.${normalize(type)}`;});sel.selectedIndex=-1;sel.onchange=e=>window.location.hash=e.target.selectedOptions[0].value;sel.tabIndex=-1;const btn=dom.getByTag(b,"button");dom.getByClass(btn,"icon").classList.add("icon-New");dom.appendTxt(btn,addCfg.name||"New")
btn.onclick=()=>{if(!navigator.userActivation.isActive)return;sel.focus();sel.showPicker();};if(!shouldHide(addCfg))newBtn.append(b);}else if(!this.attrs.nonaddable){const a=getTemplate("link-icon-txt");a.querySelector(".icon").classList.add("icon-New");dom.appendTxt(a,addCfg.name||"New");a.href=`${getPath(this.attrs)}.new`;if(!shouldHide(addCfg))newBtn.append(a);}}
new Toolbar(get("controls"));}
addCloseButton(){let path;if(this.attrs.service.owner){const owner=this.attrs.service.owner;path=getPath(findContainer(owner.group,normalize(owner.title)));}else if(this.attrs.hide){path=this.href;}else if(isTabless(this.attrs)){path=getPath(this.attrs.service);}
if(path){this.addActionButton("Close",null,path).id="CloseButton";}}
close(){this.table?.destroy();if(this.lstn)this.map.unlisten(this.lstn);Pane.prototype.close.call(this);}}
class ItemPane extends Pane{constructor(obj,href){super(obj._type);this.obj=obj;this.href=href;}
create(cnt){this.setTitleFromObject(this.obj);this.nameType=this.obj._owner.getNameType(this.obj);if(this.nameType){this.nameLstn=()=>{this.setTitleFromObject(this.obj,true);};ftype(this.nameType).listen(this.nameType,this.nameLstn);}
const type=this.obj._type;const removeCfg=getSysProp(type,"remove");const noTables=isTablessContainer(type)||window.location.hash==="#Quick_Set";get("control-buttons")?.replaceWith(getTemplate(`container-${noTables ? "single" : "item"}-controls`));this.newObj=this.obj.ufe0001==null&&type.type=="map";if(!this.newObj&&type.type=="map"&&((!type.nonaddable&&!type.ro)||type.removable)&&!shouldHide(removeCfg)){this.remove=this.addActionButton("Remove",removeCfg);this.remove.onclick=e=>{this.obj._owner.removeObject(this.obj);openContent(this.href);};}
if(this.attrs.type==="map")hide(get("container-pin"));this.ctrl=new ViewController(getContainerProp(type));this.ctrl.addAllViews(this.obj);this.ctrl.create(document.getElementById("itemList"));if(window.sessionStorage.getItem("ItemPaneWide")){document.body.classList.add("serve-formToggle");}
if(dom.getByClass(document,"gridView")){dom.getByClass(document,"form--item-width")?.classList.add("quickset");}
const apply=get("ApplyButton");const cancel=get("CloseButton");const setCfg=getSysProp(type,"set");const applyCfg=getSysProp(type,"apply");const cancelCfg=getSysProp(type,"cancel");apply.form.onsubmit=e=>e.preventDefault();if(cancel&&cancelCfg.name)cancel.textContent=cancelCfg.name;if(apply&&hasApply(this.obj)&&!shouldHide(setCfg)){if(this.obj._empty)apply.classList.add("disabled");if(applyCfg.name)apply.textContent=applyCfg.name;apply.onclick=e=>{e.preventDefault();e.stopPropagation();if(this.obj._empty)return true;clearNodes(get("errorField"));if(this.ctrl?.save()){this.obj._owner.setObject(this.obj);this.ctrl?.load();}};}else{if(apply)hide(apply);}
const ok=document.getElementById("OkButton");if(!noTables){if(ok&&hasApply(this.obj)&&!shouldHide(setCfg)){if(this.obj._empty)ok.classList.add("disabled");if(setCfg.name)ok.textContent=setCfg.name;ok.onclick=e=>{e.preventDefault();e.stopPropagation();if(this.obj._empty)return true;if(isROObj(this.obj)){openContent(this.href);return;}
clearNodes(get("errorField"));if(this.ctrl?.save()){this.obj._owner.unlisten(this.lstn);this.lstn=null;this.obj._owner.setObject(this.obj,ok=>{if(ok&&!this.dead)openContent(this.href);});}};if(cancel){cancel.onclick=()=>openContent(this.href);};}else{const b=this.addActionButton("Close",getSysProp(type,"cancel"),this.href);b.id="CloseButton";if(ok)hide(ok);cancel?.remove();}}else{if(cancel)hide(cancel);}
if(ok?.hidden&&apply?.hidden&&cancel?.hidden)get("confirmButtons")?.remove();this.lstn=(obj)=>{if(this.obj.ufe0001!==obj.ufe0001)return;if(obj.ufe0013)return reopen();if(ok)ok.classList.remove("disabled");if(apply)apply.classList.remove("disabled");if(this.newObj){openContent(this.obj._owner.getPath(this.obj),true);}else{this.setTitleFromObject(this.obj);}};this.obj._owner.listen(this.lstn);}
close(){this.ctrl?.destroy();if(this.nameType){ftype(this.nameType).unlisten(this.nameType,this.nameLstn);}
if(this.lstn)this.obj._owner.unlisten(this.lstn);this.dead=true;Pane.prototype.close.call(this);}}
class SelectorPane extends Pane{constructor(attrs){super(attrs);this.activeIdx=-1;this.wasActive=true;this.selObj={};this.objs=[];}
open(cont){this.attrs=cont;this.lstn=()=>{this.reselect();};this.attrs.c.forEach((c,i)=>{c.autostop=true;if(!isContainerVisible(c)||c.hide)return;this.objs[i]=getContainer(c).getObject();this.objs[i]._owner.listen(this.lstn);});get("page")?.classList.add("grid-quickset");const enm={type:"selector",c:cont.c};const attrs={postfix:cont.title,values:enm,selector:1};const sel=new EnumView(attrs);const cfg=getProp(getProp(skin,cont.title),"selector");sel.createRow(null,cfg,this.selObj);sel.load(this.selObj);sel.listen(()=>{this.select(sel.getValue());});this.sel=sel;this.reselect();}
close(){get("page")?.classList.remove("grid-quickset");for(let i in this.objs){this.objs[i]?._owner.unlisten(this.lstn);}}
select(idx){this.wasActive=this.objs[idx].bfe000a!=null&&!this.objs[idx].bfe000a;if(this.activeIdx==idx)return;this.activeIdx=idx;this.selObj[0]=idx;this.sel.load(this.selObj);let cont=this.attrs.c[idx];if(!cont)return false;cont=inherit(cont);cont.notitle=1;const cnt=container[cont.type].createPane(cont,{});if(!cnt)return false;cnt.setOwner(this);const old=current;current=cnt;window.scrollTo(0,0);clearNodes(get("itemList"));clearNodes(get("statusbar"));current.open(cont);try{if(old!=this){old.setOwner(null);old.close();}}catch(e){}
return true;}
reselect(){if(!this.wasActive)return;for(let i in this.objs){if(!this.objs[i])continue;if(this.objs[i].bfe000a!=null&&!this.objs[i].bfe000a){if(this.activeIdx!=Number(i))this.select(i);break;}}}}
class ActionPane extends Pane{constructor(attrs,prev){super(attrs);this.action=getContainer(attrs);this.href=prev;}
create(cnt){this.setTitleFromObject(this.action.getObject());const ctrlButtons=get("control-buttons");ctrlButtons.replaceWith(getTemplate("container-action-controls"));const startText=getSysProp(this.attrs,"start").name??"Start";const stopText=getSysProp(this.attrs,"stop").name??"Stop";const start=get("StartButton");start.dataset.state="start";start.textContent=startText;let stopping=false;start.form.onsubmit=e=>e.stopPropagation();start.onclick=e=>{e.preventDefault();e.stopPropagation();if(start.dataset.state==="start"){if(!this.ctrl?.save())return;this.ctrl.load();this.action.start();start.dataset.state="stop";start.textContent=stopText;}else{stopping=true;this.action.stop();start.dataset.state="start";start.textContent=startText;}};const back=get("CloseButton");back.textContent=getSysProp(this.attrs,'cancel').name??"Back";back.onclick=()=>openContent(this.href);this.ctrl=new ViewController(getContainerProp(this.attrs));this.ctrl.addAllViews(this.action.getRequest());const reply=this.action.getReply();reply._type.c.forEach(c=>c.owner={name:"Output",type:"tab",priority:0});this.ctrl.addAllViews(reply);this.ctrl.create(document.getElementById("itemList"));this.lstn=obj=>{if(this.running!=this.action.isRunning()){this.running=!this.running;start.dataset.state=this.running?"stop":"start";start.textContent=this.running?stopText:startText;this.setTitleFromObject(this.action.getObject(),true);if(!this.running&&stopping){stopping=false;notifications.info("Stopped");}}};this.action.listen(this.lstn,true);}
close(){this.ctrl?.destroy();this.action.unlisten(this.lstn,true);Pane.prototype.close.call(this);}}
class QueryPane extends Pane{constructor(attrs,prev){super(attrs);this.query=getContainer(attrs);this.href=prev;}
create(cnt){this.setTitleFromObject(this.query.getObject());const singleFetch=this.attrs.startcmd==0xffffffff&&this.attrs.autorefresh==null;const ctrlButtons=get("control-buttons");ctrlButtons.replaceWith(getTemplate("container-action-controls"));const formView=dom.getByClass(document,"form--item-width");formView.style.flexGrow="1";const conent=get("content");conent.style.flexGrow="1";get("statusbar")?.remove();const output=get("query-output");output.replaceWith(getTemplate("container-query-output"));const startText=getSysProp(this.attrs,"start").name??singleFetch?"Get":"Start";const stopText=getSysProp(this.attrs,"stop").name??"Stop";const start=document.getElementById("StartButton");const out=get("output-tab");start.textContent=this.query.starting?stopText:startText;start.dataset.state=this.query.starting?"stop":"start";start.form.onsubmit=e=>e.stopPropagation();start.onclick=e=>{e.preventDefault();e.stopPropagation();if(out.closest(".acc")?.classList.contains("folded"))out.click();clearNodes(get("errorField"));if(start.dataset.state==="start"){if(!this.ctrl?.save())return;this.ctrl.load();this.query.start();start.dataset.state="stop";start.textContent=stopText;}else{this.query.stop();start.dataset.state="start";start.textContent=startText;}};if(singleFetch){if(out.closest(".acc")?.classList.contains("folded"))out.click();start.textContent=startText;start.onclick=e=>{e.preventDefault();e.stopPropagation();clearNodes(get("errorField"));if(!this.ctrl?.save())return;this.ctrl.load();this.query.start();};}
out.onclick=e=>expandTab(e,"Output");const back=get("CloseButton");back.textContent=getSysProp(this.attrs,'cancel').name??"Back";back.onclick=()=>openContent(this.href);var status=this.query.getStatus();this.ctrl=new ViewController(getContainerProp(this.attrs));this.ctrl.addAllViews(this.query.getRequest());if(status)this.ctrl.addAllViews(status);this.ctrl.create(document.getElementById("itemList"));var map=this.query.getMap();this.table=new Table(document.getElementById("main-table"),map);this.lstn=obj=>{if(this.running!=this.query.isRunning()){this.running=!this.running;this.setTitleFromObject(this.query.getObject(),true);}};this.query.listen(this.lstn);if(!this.query.starting)out.click();}
close(){this.ctrl?.destroy();this.table?.destroy();this.query.unlisten(this.lstn);Pane.prototype.close.call(this);}}
class DoitPane extends Pane{constructor(attrs,doit,href){super(attrs);this.doit=doit?doit:getContainer(attrs);this.href=href;}
create(cnt){this.setTitleFromObject(this.doit.getObject());const ctrlBtns=get("control-buttons");ctrlBtns.replaceWith(getTemplate("container-doit-controls"));const doit=get("DoButton");doit.textContent=getSysProp(this.attrs,"start").name??this.doit.getName();doit.form.onsubmit=e=>e.preventDefault();doit.onclick=e=>{if(!this.ctrl?.save())return;this.ctrl.load();if(this.attrs.confirm&&!confirm(this.attrs.confirm))return;if(this.attrs.progress)this.status.innerHTML=this.attrs.progress;this.doit.doit(ok=>{if(ok&&!this.dead)openContent(this.href);});};const close=get("CloseButton");close.textContent=getSysProp(this.attrs,'cancel').name??"Cancel";close.onclick=()=>openContent(this.href);this.ctrl=new ViewController(getContainerProp(this.attrs));this.ctrl.addAllViews(this.doit.getObject());this.ctrl.create(document.getElementById("itemList"));if(this.attrs.progress){const sb=get("statusbar");this.status=make.span({p:sb,cont:"\u00a0"});}}
close(){this.dead=true;this.ctrl?.destroy();Pane.prototype.close.call(this);}}
class SetupPane extends Pane{constructor(attrs,href){super(attrs);this.setup=getContainer(attrs);this.href=href;}
create(cnt){this.setTitleFromObject(this.setup.getObject());this.setup.reset();const ctrlBtns=get("control-buttons");ctrlBtns.replaceWith(getTemplate("container-setup-controls"));const back=get("BackButton");back.textContent=getSysProp(this.attrs,"back").name??"Back";back.onclick=()=>this.setup.back();back.form.onsubmit=e=>e.preventDefault();const next=get("NextButton");next.textContent=getSysProp(this.attrs,"next").name??"Next";next.onclick=()=>{if(this.ctrl?.save())this.setup.next(!this.ctrl.isChanged());};const cancel=get("CloseButton");cancel.textContent=getSysProp(this.attrs,"cancel").name??"Cancel";cancel.onclick=()=>openContent(this.href);this.ctrl=new SetupController(getContainerProp(this.attrs));this.ctrl.addAllViews(this.setup.getObject());this.ctrl.createPanes();this.ctrl.create(document.getElementById("itemList"));this.lstn=()=>{if(this.setup.isFinished()){openContent(this.href);return;}
this.ctrl?.load();this.ctrl?.show(this.setup.getCurrentPage()-1);replaceText(get("errorField"),this.setup.getCurrentDescription()??"");};this.setup.listen(this.lstn);}
close(){this.ctrl?.destroy();this.setup.unlisten(this.lstn);Pane.prototype.close.call(this);}}
function isContainer(node){return["map","item","action","doit","query","setup","selector","terminal","alias","status"].includes(node.type);}
function visibleName(node){if(node.type==="toggle")return node.modes[1];}
function extractNames(set,c){if(!Array.isArray(c))return;c.forEach(c=>{if(c.name?.trim()){set.add({name:c.name,type:c.type})};extractNames(set,c.c);});}
const skinGenerics={};function restructureGeneric(node,parent){if(isContainer(node)&&!isContainerVisible(node)&&parent.type!=="toolbar")return;const irrelevant=["separator","cond","active","columnalias"];const finalContainer=["opt","not","multinumber","multinumberrange","enm","multistring","multiraw","multinetwork","gridcell","tuple","multi","multitristate","union"];if(irrelevant.includes(node.type))return;if(node.nonpublic&&node.type){if(!(isContainer(node)&&node.type!=="map"))return;}
if(node.type==="contextmenu"&&!node.title&&!node.name)return;if(node.type==="comment")node.name="Comment";const cfg={"type":node.type,"parent":parent,}
if(node.name)cfg.name=visibleName(node)??node.name;if(node.title)cfg.title=node.title;if(node.note)cfg.note=node.note;if(node.limit)cfg.limit=node.limit;if(node.ro)cfg.ro=node.ro;if(node.generic)skinGenerics[node.generic]=cfg;if(node.inherit)cfg.inherit=node.inherit.generic;if(node.owner?.type==="tab"){cfg.tab=node.owner.name;}
if(node.type==="contextmenu"){cfg.contextmenu={group:node.group,open:node.open,tab:node.tab}}
if(Array.isArray(node.c)&&!finalContainer.includes(node.type)){cfg.entries=[];let complexc=[];for(const deck of node.c.filter(c=>c.type==="deck")){deck.panes.forEach(pane=>{pane.c?.forEach(c=>c.owner=deck.owner);complexc=complexc.concat(pane.c??[]);});}
for(const gbox of node.c.filter(c=>c.type==="graphbox")){complexc=complexc.concat(gbox.graphs)}
if(node.request){complexc=complexc.concat(node.request||[]);node.c.forEach(c=>c.owner={"type":"tab","name":"Output"});}
function flatten(arr){return arr.map(c=>(c.type==="object"||c.type==="autoset")?c.c:c).flat();}
let len=0;let flats=node.c;do{flats.filter(c=>c.type==="autoset").forEach(as=>as?.c.forEach(child=>child.owner=as.owner));len=flats.length;flats=flatten(flats);}while(len<flats.length);for(const c of flats.concat(complexc)){const sub=restructureGeneric(c,cfg);if(!sub)continue;if(sub.tab){const tab=cfg.entries.find(e=>e.name===sub.tab&&e.type==="tab");if(tab){tab.entries.push(sub);}else{cfg.entries.push({"type":"tab","name":sub.tab,"entries":[sub]});}
delete sub.tab;}else{cfg.entries.push(sub);}}}
if(isContainer(node)){cfg.entries?.filter(e=>e.type==="tab").forEach(tab=>{for(let i=0;i<tab.entries?.length;++i){const name=tab.entries[i].name;if(!name)continue;let last=-1;do{last=tab.entries.findLastIndex(e=>e.name===name);if(last!=i)tab.entries.splice(last,1);}while(last!=i);}});}
if(finalContainer.includes(node.type)){const names=new Set;extractNames(names,node.c);if(names.size>0){cfg.entries??=[]
const a=[...names];a.forEach(o=>o.parent=cfg);cfg.entries.push(...a);}}
return cfg;}
const generalMenuCfg=[];function restructureSysmap(map){const arr=[];arr.push({name:"General Menu",type:"toolbar",node:{name:"General Menu"},entries:generalMenuCfg});arr.push({name:"Terminal",type:"button",node:{name:"Terminal"}});arr.push({name:"Advanced",type:"button",node:{name:"Advanced"}});for(const item of map){if(!isServiceVisible(item))continue;const cfg=restructureGeneric(item);cfg.type="service";const group=item.group;if(group){const grpItem=arr.find(e=>e.name===group&&e.type==="serviceGroup");if(!grpItem){arr.push({name:group,type:"serviceGroup",entries:[cfg],node:{name:group}});}else{grpItem.entries.push(cfg);}}else{arr.push(cfg);}}
arr.forEach(s=>{if(s.name)return;s.entries.forEach(e=>{if(!e.inherit)return;skinGenerics[e.inherit].parent.entries.push(e);});});return arr.filter(s=>s.name);}
function makePadding(parent,length=0){const padding=make.div({p:parent});padding.style.width=`${26*length}px`;padding.style.height="24px";padding.style.display="inline-block";return padding;}
function makeNameCell(row,cfg,indent){const node=cfg.node;const name=make.div({p:make.td({p:row})});makePadding(name,indent);let expander;if(node.entries){expander=make.button({p:name,cls:"btn btn-minus"});cfg.ctrls.expander=expander;expander.onclick=e=>{function isExpanded(btn){return btn.classList.contains("btn-minus");};if(isExpanded(expander)){expander.classList.replace("btn-minus","btn-plus");let child=row.nextElementSibling;do{if(child.dataset.level==indent+1){const exp=child.firstElementChild.querySelector("button");if(exp&&exp.classList.contains("btn-minus")){exp.click();}
hide(child);}
child=child.nextElementSibling;}while(child&&child.dataset.level>indent);}else{expander.classList.replace("btn-plus","btn-minus");if(row.dataset.level===row.nextElementSibling.dataset.level){console.assert(false,"Tab without child elements is most probably a bug");expander.replaceWith(makePadding(null,1));return;}
let child=row.nextElementSibling;do{if(child.dataset.level==indent+1)show(child);child=child.nextElementSibling;}while(child&&child.dataset.level>indent);}}}else{makePadding(name,1);}
const enable=make.input({p:name},"checkbox");enable.checked=true;enable.onchange=e=>{if(enable.checked){delete cfg.hide;if(expander)expander.disabled=false;}
else{cfg.hide=true;if(expander){if(expander.classList.contains("btn-minus"))expander.click();expander.disabled=true;}}}
cfg.ctrls.show=enable;make.span({p:name,cont:node.name||node.title});if((node.name&&node.type!=="flag")||isContainer(node)){const newName=make.input({p:name});newName.onchange=e=>{if(newName.value)cfg.name=newName.value;else delete cfg.name;if(isContainer(cfg.node)){if(newName.value)cfg["&"].name=newName.value;else delete cfg["&"].name;}}
cfg.ctrls.name=newName;}}
function makeTitleCell(row,cfg){const node=cfg.node;const title=make.div({p:make.td({p:row})});if(node.title){make.span({p:title,cont:node.title});const newTitle=make.input({p:title});newTitle.onchange=e=>{if(newTitle.value){cfg.title=newTitle.value;if(cfg.node.type==="service"){cfg.children.forEach(c=>{if(!c.title)c["&"].title=cfg.title;});}
if(isContainer(cfg.node)){cfg["&"].title=cfg.title;}}else{if(cfg.node.type==="service"){cfg.children.forEach(c=>{if(!c.title)delete c["&"].title;});}
if(isContainer(cfg.node)){delete cfg["&"].title;}
delete cfg.title;}}
cfg.ctrls.title=newTitle;}}
const nonRows=["serviceGroup","service","item","doit","map","tab","query","action","status","invalid","dynamic","flag","contextmenu","button","toolbar"];const readOnlyTypes=["numbargraph","bitrate","bigbitrate","bigbitchangerate","changerate","bigchangerate","numbertable","table","stringarray","hyperlink","flag","numflag","preset","active","about","graph","toolbar"];const complexTypes=["tuple"]
function makeROCell(row,cfg){const node=cfg.node;const cell=make.td({p:row});if(node.ro)return;if(nonRows.includes(node.type))return;if(readOnlyTypes.includes(node.type))return;const ro=make.input({p:cell},"checkbox");ro.onchange=e=>{if(ro.checked)cfg.ro=true;else delete cfg.ro;}
cfg.ctrls.ro=ro;}
function makeNoteCell(row,cfg){const cell=make.td({p:row});if(nonRows.includes(cfg.node.type))return;const note=make.input({p:cell});note.onchange=e=>{if(note.value)cfg.note=note.value;else delete cfg.note;}
cfg.ctrls.note=note;}
function makeTypeCell(row,cfg){if(cfg.node.type==="contextmenu"&&cfg.node.contextmenu.open){const link=make.button({p:make.td({p:row}),cont:"Go to item"});const cm=cfg.node.contextmenu;link.onclick=()=>{function unfold(e){e=e.ctrls.expander;if(e?.classList.contains("btn-plus"))e.click();e?.scrollIntoView({block:"center"});}
let seeker=skinMap;if(cm.group){const group=seeker.find(g=>g.node.name===cm.group);unfold(group);seeker=group.children;}
const service=seeker.find(s=>s.node.name===cm.open);unfold(service);seeker=service.children;if(cm.tab){const tab=seeker.find(g=>g.node.title===cm.tab);if(!tab)return;unfold(tab);}}}else{make.td({p:row,cont:cfg.node.type});}}
function makeLimitCell(row,cfg){const cell=make.td({p:row});if(nonRows.includes(cfg.node.type))return;if(readOnlyTypes.includes(cfg.node.type))return;const limit=make.input({p:cell});limit.onchange=e=>{if(limit.value)cfg.limit=limit.value;else delete cfg.limit;}
cfg.ctrls.limit=limit;}
function pathBuilder(table,node,level=0){const row=make.tr({p:table});row.dataset.level=String(level);const cfg={"node":node,"row":row,"ctrls":{}};if(node.name)cfg.origName=node.name;if(node.title)cfg.origTitle=node.title;makeNameCell(row,cfg,level);makeTypeCell(row,cfg);makeTitleCell(row,cfg);makeROCell(row,cfg);makeNoteCell(row,cfg);makeLimitCell(row,cfg);if(node.entries){cfg.children=[];node.entries.forEach(c=>{if(!c.name&&!c.title){if(c.type==="toolbar"){c.entries.forEach(c=>{const child=pathBuilder(table,c,level+1);child.parent=cfg;cfg.children.push(child);});}}else{const child=pathBuilder(table,c,level+1);child.parent=cfg;cfg.children.push(child);}});}
if(isContainer(node)){cfg["&"]=buttonBuilder(table,node,level+1);}
if(level===0){row.firstElementChild?.querySelector("button")?.click();}
return cfg;}
function buttonBuilder(table,node,level){const cfg={};function buildButton(type,string){cfg[type]={node:{name:string,type:"button"},ctrls:{}}
const row=make.tr({p:table});row.dataset.level=level;makeNameCell(row,cfg[type],level);makeTypeCell(row,cfg[type]);makeTitleCell(row,cfg[type]);makeROCell(row,cfg[type]);makeNoteCell(row,cfg[type]);makeLimitCell(row,cfg[type]);}
switch(node.type){case"map":if(!node.ro){buildButton("add","New");buildButton("remove","Remove");buildButton("set","OK");buildButton("apply","Apply");}
buildButton("cancel","Cancel");break;case"item":if(node.ro||node.parent.title==="Quick Set")break;buildButton("apply","Apply");break;case"setup":buildButton("back","Back");buildButton("next","Next");buildButton("cancel","Cancel");break;case"action":case"query":{const singleFetch=false;buildButton("start",singleFetch?"Get":"Start");buildButton("stop","Stop");buildButton("cancel","Back");break;}
case"doit":if(!node.entries)break;buildButton("start",node.title||"Do it!");buildButton("cancel","Cancel");break;}
return cfg;}
function skin2skin(sMap,cfg=skin){for(const key in cfg){const s=sMap.find(s=>key===(isContainer(s.node)?s.origTitle??s.origName:s.origName));const c=cfg[key];if(!s){if(["_hide","name","title","&"].includes(key))continue;let a=sMap.filter(c=>c.node.type==="group");sMap.filter(c=>c.node.type==="tab").forEach(n=>{n.children.filter(c=>c.node.type==="group").forEach(l=>{a=a.concat(l.children);})});a.forEach(e=>skin2skin(a,cfg));continue;}
const isTab=s.node.type==="tab";if(c.name&&!isTab){s.name=c.name;s.ctrls.name.value=s.name;}
if(isTab&&c.tab?.name){s.name=c.tab.name;s.ctrls.name.value=c.tab.name;}
if(c.title){s.title=c.title;s.ctrls.title.value=s.title;}
if(c.note){s.note=c.note;s.ctrls.note.value=c.note;}
if(c.limit){s.limit=c.limit;s.ctrls.limit.value=c.limit;}
if(c.ro){s.ro=true;s.ctrls.ro.checked=true;}
if(c._hide||(isTab&&c.tab?._hide===1))s.ctrls.show.click();if(c["&"]){const buttons=c["&"];for(const button in buttons){if(buttons[button]._hide){s["&"][button].ctrls.show.click();}}}
if(s.node.type==="service"&&c.title){s.children.forEach(child=>child["&"].title=c.title);}
if(s.children&&typeof c==="object"&&!(isTab&&c.tab?._hide===1)){skin2skin(s.children,c);}}}
let skinMap=[];class DesignerPane extends Pane{constructor(attrs){super(attrs);}
create(cnt){this.setTitle("Skin Designer");this.table=dom.getByTag(get("designTable"),"tbody");const skinList=get("baseline");const name=get("name");fillOptions(skinList,{type:"dynamic",path:[13,8]},true,null,null,null,(id,idx,more)=>{if(skinList.options[idx].text===sysres.skin){skinList.selectedIndex=idx;name.value=sysres.skin;}});const clearTable=()=>{function clearFields(node){if(node.name){node.ctrls.name.value="";delete node.name;}
if(node.title){node.ctrls.title.value="";delete node.title;}
if(node.note){node.ctrls.note.value="";delete node.note;}
if(node.limit){node.ctrls.limit.value="";delete node.limit;}
if(node.ro){node.ctrls.ro.checked=false;delete node.ro;}
if(!node.ctrls.show?.checked)node.ctrls.show.click();if(node["&"]){delete node["&"].title;for(const btnName in node["&"]){clearFields(node["&"][btnName]);}}
node.children?.forEach(child=>clearFields(child));}
skinMap.forEach(child=>clearFields(child));};const applySkin=()=>{skin2skin(skinMap);};const reset=get("reset");const save=get("save");reset.onclick=clearTable;save.onclick=()=>{skin=compact(skinMap);normalizeSkin(skin);saveSkin(name.value);};const updateTable=()=>{clearTable();applySkin();};restructureSysmap(sysmap).forEach(e=>skinMap.push(pathBuilder(this.table,e,0)));updateTable();skinList.onchange=()=>{const getValue=sel=>sel.options[sel.selectedIndex]?.text??"";name.value=getValue(skinList);loadSkin(name.value,updateTable);};}
close(){skinMap=[];Pane.prototype.close.call(this);}}
function compact(arr){const minimized={};for(const e of arr){const id=isContainer(e.node)?e.origTitle??e.origName:e.origName;if(e.hide){if(e.node.type==="tab"){minimized[id]={tab:0};e.children.map(c=>c.origName).forEach(name=>minimized[id][name]=0);continue;}
minimized[id]=0;continue;}
const cfg=e.node.type==="group"?{}:compact(e.children||[]);if(e.node.type==="map"||e.node.type==="item"){let a=e.children.filter(c=>c.node.type==="group");e.children.filter(c=>c.node.type==="tab").forEach(n=>{n.children.filter(c=>c.node.type==="group").forEach(l=>{a=a.concat(l.children);})});Object.assign(cfg,compact(a));}
if(e.name&&e.name!==e.origName){if(e.node.type==="tab")cfg.tab=e.name;else cfg.name=e.name;}
if(e.title&&e.title!==e.origTitle)cfg.title=e.title;if(e.note)cfg.note=e.note;if(e.limit)cfg.limit=e.limit;if(e.ro)cfg.ro=e.ro;const specBtns=compactAmp(e);if(specBtns)cfg["&"]=specBtns;if(isempty(cfg))continue;minimized[id]=cfg;}
return minimized;}
function compactAmp(inCfg){const amp=inCfg["&"];if(!amp)return null;const outCfg={};if(amp.title){outCfg.title=amp.title;}
if(amp.name){outCfg.name=amp.name;}
for(const btn in amp){if(amp[btn].hide){outCfg[btn]=0;continue;}
outCfg[btn]??={};if(amp[btn].name)outCfg[btn].name=amp[btn].name;if(isempty(outCfg[btn]))delete outCfg[btn];}
if(isempty(outCfg))return null;return outCfg;}
class TerminalPane extends Pane{constructor(attrs){super(attrs);this.charSz={x:0,y:0};}
create(cnt){this.setTitle("Terminal");this.cntrl=get("terminal");this.cntrl.focus();this.term=new Terminal(this.cntrl);const page=get("page");page.style.overflow="hidden";page.classList.add("grid-terminal");const s=make.span({p:this.cntrl,cont:"_"});this.charSz={x:s.offsetWidth,y:s.offsetHeight};this.cntrl.removeChild(s);timer(()=>{this.doResize(getWindowSize());this.term.login(this.getSize());},1);window.onresize=()=>{this.doResize(getWindowSize());this.term.winch(this.getSize());};}
close(){const page=get('page');page.style.overflow='auto';page.classList.remove("grid-terminal");this.term.close();window.onresize=null;}
doResize(sz){const r=this.cntrl.getBoundingClientRect();const height=(sz.y-r.top-14);const pad=height%this.charSz.y;this.cntrl.style.height=(height-pad)+'px';this.cntrl.style.paddingBottom=(pad+2)+'px';this.cntrl.style.width=(sz.x-22)+'px';}
getSize(){return{x:Math.floor((this.cntrl.clientWidth-4)/this.charSz.x),y:Math.floor(this.cntrl.clientHeight/this.charSz.y)};}}
function lookupContainer(path){if(!path[0])return null;for(let i in sysmap){var off=0;if(sysmap[i].group){if(sysmap[i].group!=path[0]||!path[1]||sysmap[i].name!=path[1])continue;off=2;}else{if(sysmap[i].name!=path[0])continue;off=1;}
var service=sysmap[i];if(!isServiceVisible(service))continue;for(let i in service.c){if(path[off]==service.c[i].title){var cont=service.c[i];if(cont.pred&&!isTrue(cont.pred))continue;path.splice(0,off+1);return cont;}}}
return null;}
class StatusPane extends Pane{constructor(attrs){super(attrs);}
create(cnt){const cfg=getContainerProp(this.attrs);this.setTitle("Status",getSysProp(this.attrs),"title");const list=make.div({p:cnt,cls:"acc-list"});const ctrl=new ViewController(cfg,true);for(let i in cfg){const v=cfg[i];if(typeof(v)!="object")continue;if(v._hide)continue;if(!v.alias)continue;const path=v.alias.split(':');const type=lookupContainer(path);if(!type||!path[0])continue;const cont=getContainer(type);let obj;if(path[0].charAt(0)=='*'){obj=cont.acquireObject(path[0].substr(1));path.shift();}else{obj=cont.getObject();}
const owner=path[1]?path.shift():null;const name=path[0].split('#');const idx=name[1]?Number(name[1]):1;const attrs=lookupAttr(type,name[0],owner,[idx]);if(!attrs)continue;const view=ftype(attrs).view(attrs,true);ctrl.listenOn(obj);ctrl.addView(obj,null,null,view,attrs,v,true);}
ctrl.createGrid();ctrl.create(list);}}
function normalize(str){return str.replace(/[\s.]/g,'_');}
function getPath(type){if(type.owner)type=type.owner;var s='';var service=type.service?type.service:type;if(service.group)s=service.group+':';s+=service.nname;if(type.service)s+='.'+type.ntitle;return'#'+s;}
function getTopPath(cont,prev){if(prev)return prev;var last=null;var service=cont.service;for(var i in service.c){var c=service.c[i];if(isContainerVisible(c)&&container[c.type].tab)last=c;if(cont==c)break;}
return last?getPath(last):getPath(sysmap[0]);}
function findDoit(cont,types,name,prev){for(var i in types){var attr=types[i];if(attr.type!='doit'||!attr.c)continue;if(normalize(attr.name)==name){var obj=getContainer(cont).getObject();attr.title=attr.name;attr.path=cont.path;attr.container=cont;var doit=getContainer(attr);if(obj)doit.setID(obj.ufe0001);return new DoitPane(attr,doit,prev);}}
return null;}
function findServices(name,group){return sysmap.filter(s=>s.nname===name&&(!group||s.group===group));}
function isServiceEligible(service){if(service.group&&shouldHide(getProp(skin,service.group)))return false;return(isServiceVisible(service,true)&&!shouldHide(getServiceProp(service)));}
function selectService(name,group){const services=findServices(name,group);const first=services.filter(isServiceEligible)[0];if(first)return first;console.assert(!services.filter(isServiceEligible)[1],"One service is masking another");const status=findServices("Status").filter(isServiceEligible)[0];if(status)return status;return sysmap.find(service=>isServiceEligible(service)&&service.title!=="Quick Set"&&!service.nonpublic);}
function findContainer(group,serviceName,name){if(serviceName==='Terminal'){let c={type:'terminal',title:'Terminal'};let s={title:serviceName,c:[c]};c.service=s;return c;}
if(serviceName==="SkinDesigner"){const c={type:"designer",title:"Skin Designer"};const s={title:serviceName,c:[c]};c.service=s;return c;}
let service=selectService(serviceName,group);if(!name&&service.selector){return{type:'selector',c:service.c,title:service.title};}
var master=null;var cont=null;for(var i in service.c){var c=service.c[i];if(!isContainerVisible(c,true))continue;if(shouldHide(getContainerProp(c))){if(!cont&&!master&&container[c.type].tab)master=c;continue;}
if(name&&c.ntitle===name)return c;if(!cont){cont=c;}else if(cont.hide&&!c.hide){cont=c;}else if(master){if(container[c.type].tab&&!container[cont.type].tab)cont=c;}}
return cont;}
function toggleSafeMode(){if(safeModeID==0xffffffff)return;const sf=get("safe-mode");const sf2=get("safe-mode-2");if(safeModeID!=null){post({Uff0001:[17],uff0007:0x80005,ufe0001:safeModeID},rep=>{sf.checked=false;sf2.checked=false;});safeModeID=null;window.onbeforeunload=null;}else{safeModeID=0xffffffff;post({Uff0001:[17],uff0007:0x80003},rep=>{if(isError(rep)){safeModeID=null;showError("Could not enable safe mode",rep);return;}
sf.checked=true;sf2.checked=true;safeModeID=rep.ufe0001;window.onbeforeunload=e=>{e.preventDefault();};});}}
var container={};container.map={};container.map.tab=true;container.map.create=function(cont){return new ObjectMap(cont);};container.map.createPane=function(cont,path,prev){var map=getContainer(cont);if(cont.inherit)map=new FilteredMap(map,cont);if(path.length>=1){var obj;if(path[0]=='new'){obj=map.newObject(path[1]);map.setDefaultConf(obj);}else{obj=map.getObject(path[0]);}
if(obj){return new ItemPane(obj,getTopPath(cont,prev));}else{var p=findDoit(cont,cont.c,path[0],getTopPath(cont,prev));if(p)return p;}}
return new TablePane(cont,map,path[0],getTopPath(cont,prev));};container.item={};container.item.create=function(cont){return new ObjectHolder(cont);};container.item.createPane=function(cont,path,prev){if(path[0]){var p=findDoit(cont,cont.c,path[0],getTopPath(cont,prev));if(p)return p;}
var holder=getContainer(cont);return new ItemPane(holder.getObject(),getTopPath(cont,prev));};container.action={};container.action.create=function(cont){return new ObjectAction(cont);};container.action.createPane=function(cont,path,prev){if(path[0]){var p=findDoit(cont,cont.request,path[0],getTopPath(cont,prev));if(!p)p=findDoit(cont,cont.reply,path[0],getTopPath(cont,prev));if(p)return p;}
return new ActionPane(cont,getTopPath(cont,prev));};container.query={};container.query.create=function(cont){return new ObjectQuery(cont);};container.query.createPane=function(cont,path,prev){if(path[0]){var obj=getContainer(cont).getObject(path[0]);if(obj)return new ItemPane(obj,getTopPath(cont,prev));}
return new QueryPane(cont,getTopPath(cont,prev));};container.doit={};container.doit.create=function(cont){return new Doit(cont);};container.doit.createPane=function(cont,path,prev){if(cont.c==null){if(!cont.confirm||confirm(cont.confirm)){var doit=new Doit(cont);doit.doit();}
return openContent(getTopPath(cont,prev));}
return new DoitPane(cont,null,getTopPath(cont,prev));};container.setup={};container.setup.create=function(cont){return new SetupManager(cont);};container.setup.createPane=function(cont,path,prev){return new SetupPane(cont,getTopPath(cont,prev));};container.designer={};container.designer.create=function(cont){return{};};container.designer.createPane=function(cont,path,prev){return new DesignerPane(cont);};container.terminal={};container.terminal.create=function(cont){return{};};container.terminal.createPane=function(cont,path,prev){return new TerminalPane(cont);};container.alias={};container.alias.createPane=function(attrs){var cont=findContainer(attrs.group,normalize(attrs.open),normalize(attrs.tab));if(!cont)return null;var c=getContainer(cont);var dst=c.getObject();convert(attrs.link,{},dst);c.autostart(dst);return null;};container.status={};container.status.createPane=function(attrs){return new StatusPane(attrs);};container.selector={};container.selector.createPane=function(cont){return new SelectorPane(cont);};function loadToolbar(){const tb=get("c-toolbar");if(!tb)return;tb.replaceWith(getTemplate("container-toolbar"));const ctb=get("c-m-toolbar");ctb.replaceWith(getTemplate("container-compact-toolbar"));const mab=get("m-action-button");const mcb=get("m-config-button");mab.onclick=mcb.onclick=e=>{if(!navigator.userActivation.isActive)return;const sel=get(e.target.getAttribute("aria-controls"));sel.focus();sel.showPicker();}}
function loadMainTemplate(pane){const main=dom.getByTag(document,"main");clearNodes(main);const populate=id=>{const t=get(id);main.appendChild(t.content.cloneNode(true));loadToolbar();};switch(true){case pane instanceof TablePane:return populate("table-container");case pane instanceof ItemPane:case pane instanceof DoitPane:case pane instanceof SelectorPane:case pane instanceof StatusPane:case pane instanceof SetupPane:case pane instanceof QueryPane:case pane instanceof ActionPane:return populate("item-container");case pane instanceof TerminalPane:return populate("terminal-container");case pane instanceof DesignerPane:return populate("skin-designer-container");}}
function updateContent(url){let[service,name,...items]=url.substr(1).split('.');var a=service.split(':');let sname=a.pop();let group=a.pop()??null;var cont=findContainer(group,sname,name);if(!cont)return false;if(name&&(sname!=cont.service.nname||name!=cont.ntitle)){items=[];}
if(hasMenu(cont)){const wf=get("id_WebFig");wf.href=url;const wfa=get("id_WebFig_alt");wfa.href=url;}
var prev=null;if(prevURLs.length>0)prev=prevURLs[prevURLs.length-1][0];var cnt=container[cont.type].createPane(cont,items,prev);if(!cnt)return false;currentCont=cont;highlightMenuItem(cont);if(sname==="WebFig"){window.location.hash=currentURL=normalize(cont.title);}
var old=current;current=cnt;window.scrollTo(0,0);loadMainTemplate(cnt);current.open(cont);try{if(old)old.close();}catch(e){this;}
return true;}
function reopen(){if(!updateContent(currentURL)){openContent('',true);}}
function generateContent(url,replace){if(!sysmap)return;if(currentURL==url)return;if(url==''){const id=preferences.get()?.applet||'id_Quick_Set';if(id=='id_Quick_Set'){url='#Quick_Set';}else if(id=='id_Terminal'){url='#Terminal';}else{url='#WebFig';}
location.hash=url;return;}
if(!replace){if(prevURLs.length==0||prevURLs[prevURLs.length-1][0]!=url){if(currentCont)prevURLs.push([currentURL,currentCont]);if(prevURLs.length>100)prevURLs.splice(0,1);}else{prevURLs.pop();}}
var oldURL=currentURL;currentURL=url;if(!updateContent(url)){currentURL=oldURL;if(current!=null){location.hash=currentURL;}else{generateContent('');}}}
function openContent(url,replace){location.hash=url;generateContent(url,replace);}
function openGroup(group){const item=document.getElementById(group);const list=document.getElementById(group+'list');if(item.className=="activegroup"){item.className="group";list.className="group";}else{item.className="activegroup";list.className="activegroup";}}
window.openGroup=openGroup;function isQuickSet(cont){if(cont.service&&cont.service.title=='Quick Set')return true;if(cont.title=='Quick Set')return true;return prevURLs.some(p=>p[1].title==="Quick Set");}
function hasMenu(cont){if(isQuickSet(cont))return false;if(cont.title=='Terminal')return false;return true;}
function showMenu(visible){const menu=get("nav-menu");if(visible)show(menu);else hide(menu);}
function highlightMenuItem(cont){var id='id_WebFig';if(isQuickSet(cont))id='id_Quick_Set';if(cont.title=='Terminal')id='id_Terminal';var item=document.getElementById(id);if(lastMenuBarItem!=item){if(lastMenuBarItem){lastMenuBarItem.classList.remove("active");lastMenuBarItem.tabIndex=-1;lastMenuBarItem.ariaChecked=false;}
item.tabIndex=0;item.ariaChecked="true";item.classList.add("active");lastMenuBarItem=item;preferences.set("applet",id);}
if(lastItem)lastItem.classList.remove("active");id='id_'+getPath(cont).substr(1).split('.')[0];item=document.getElementById(id);if(item)item.classList.add("active");lastItem=item;showMenu(hasMenu(cont));const menuList=get("nav-menu-list");const top=[...menuList.children].map(e=>e.querySelector("a, button"));if(top.length===0)return;top.forEach(item=>{item.tabIndex=-1;item.removeAttribute("aria-current");if(item.tagName==="BUTTON"){const submenu=item.getAttribute("aria-controls");[...get(submenu)?.getElementsByTagName("a")??[]].forEach(a=>a.removeAttribute("aria-current"));}});const active=top.find(item=>cont.service&&dom.getByClass(item,"text").dataset.name===(cont.service.group??cont.service.name));if(active){active.tabIndex=0;active.ariaCurrent="page";const submenu=active.getAttribute("aria-controls");[...get(submenu)?.getElementsByTagName("a")??[]].find(a=>a.dataset.name===cont.service.name)?.setAttribute("aria-current","page");}
else top[0].tabIndex=0}
function getSidemenuList(data){let list=[];let groups={};for(let i in data){var s=data[i];if(!s.name||!isServiceVisible(s)||s.nonpublic)continue;if(s.group){if(!groups[s.group]){groups[s.group]=[];list.push({name:s.group,prio:s.prio,group:true,icon:s.groupIcon});}
groups[s.group].push(s);}else{s.order=i;list.push(s);}}
for(let i in groups){groups[i].sort(function(a,b){if(a.name<b.name)return-1;if(a.name>b.name)return 1;return 0;});}
list.forEach(line=>{if(line.group)line.group=groups[line.name];});list.forEach(line=>{line.prio??=500;});list.forEach(line=>{line.order??=999;});list.sort((a,b)=>{if(a.name<b.name)return-1;if(a.name>b.name)return 1;return 0;});list.sort((a,b)=>{if(a.order<b.order)return-1;if(a.order>b.order)return 1;return 0;});list.sort((a,b)=>{if(a.prio<b.prio)return-1;if(a.prio>b.prio)return 1;return 0;});return list;}
function generateMenuBar(){const topCfg=skin["General Menu"]??{};const undoButton=document.getElementById("undo-button");const redoButton=document.getElementById("redo-button");const unCfg=getProp(topCfg,undoButton.title);if(unCfg._hide)hide(undoButton);undoButton.onclick=e=>{post({Uff0001:[17],Uff0002:[1],uff0007:0x80001},rep=>{if(isError(rep))showError("Could not undo",rep);else notifications.info("Undone");},()=>notifications.error("Could not undo"));e.preventDefault();};new Toolbar(get("undo-redo"));const reCfg=getProp(topCfg,redoButton.title);if(reCfg._hide)hide(redoButton);redoButton.onclick=e=>{post({Uff0001:[17],Uff0002:[1],uff0007:0x80002},rep=>{if(isError(rep))showError("Could not redo",rep);else notifications.info("Redone");},()=>notifications.error("Could not redo"));e.preventDefault();};redoButton.onkeydown=e=>{if(["ArrowLeft","ArrowRight","Home"].includes(e.key))undoButton.focus();}
const safeSwitch=document.getElementById("safe-mode");const safeCfg=getProp(topCfg,"Safe Mode");if(safeCfg._hide)hide(safeSwitch.closest("div.check-group"));const bold=safeSwitch.nextElementSibling?.querySelector("b");bold.innerText=viewLabel(safeCfg,"Safe Mode").innerText;safeSwitch.onchange=()=>{safeSwitch.checked=!safeSwitch.checked;toggleSafeMode();};function setButton(item){const text=item.lastChild.nodeValue;const cfg=getProp(skin,text);if(cfg._hide)hide(item);item.lastChild.replaceWith(viewLabel(cfg,text));item.onkeydown=e=>{if(e.key==="ArrowLeft")item.previousElementSibling?.focus();if(e.key==="ArrowRight")item.nextElementSibling?.focus();if(e.key==="Home")item.parentElement.firstElementChild.focus();if(e.key==="End")item.parentElement.lastElementChild.focus();}}
setButton(get("id_Quick_Set"));const advanced=get("id_WebFig");const advanced2=get("id_WebFig_alt");const advHandling=()=>{prevURLs=[];openContent(advanced.hash,true);};setButton(advanced);advanced.onclick=advHandling;advanced2.onclick=advHandling;setButton(get("id_Terminal"));generateGeneralMenu();}
function generateGeneralMenu(){const menu=get("genMenu");const menuBtn=get("genMenuButton");menuBtn.onkeydown=e=>{if(e.key==="Escape"&&e.target.closest(".btn-select-wrap")?.classList.contains("show")){e.stopPropagation();menuBtn.click();return;}
if(!["ArrowDown","Enter"," "].includes(e.key))return;e.target.click();dom.focusFirst(menu);e.preventDefault();}
menu.addEventListener("focusout",e=>{if(menu.contains(e.relatedTarget))return;menu.closest(".btn-select-wrap").classList.remove("show");menu.parentElement.previousElementSibling.ariaExpanded=false;});function setNav(item){item.onkeydown=e=>{if(e.key==="ArrowDown")dom.focusNext(item);if(e.key==="ArrowUp")dom.focusPrevious(item);if(e.key==="Home")dom.focusFirst(item);if(e.key==="End")dom.focusLast(item);if(e.key==="Escape")menuBtn?.focus();}}
function setButton(item,invisible){const text=item.lastChild.nodeValue;if(invisible==null){if(item.hash){let[a,b]=item.hash.substring(1).split(":");if(b){generalMenuCfg.push({name:text,type:"contextmenu",node:{name:text},contextmenu:{group:a,open:b}});}else{generalMenuCfg.push({name:text,type:"contextmenu",node:{name:text},contextmenu:{open:a}});}}else generalMenuCfg.push({name:text,type:"button",node:{name:text}});}
const cfg=getProp(skin["General Menu"]??{},text);if(invisible??cfg._hide)hide(item.closest("li"));item.lastChild.nodeValue=viewLabel(cfg,text).innerText;setNav(item);}
function setSwitch(item,invisible){const text=item.previousElementSibling.textContent;if(invisible==null)generalMenuCfg.push({name:text,type:"bool",node:{name:text}});const cfg=getProp(skin["General Menu"]??{},text);if(invisible??cfg._hide)hide(item.closest("li"));item.previousElementSibling.textContent=viewLabel(cfg,text).innerText;setNav(item);}
const undoItem=get("undo-item");const undoButton=get("undo-button");setButton(undoItem);undoItem.onclick=undoButton.onclick;undoButton.ariaLabel=undoItem.textContent;const redoItem=get("redo-item");const redoButton=get("redo-button");setButton(redoItem);redoItem.onclick=redoButton.onclick;redoButton.ariaLabel=redoItem.textContent;const safeSwitch=get("safe-mode-2");setSwitch(safeSwitch);safeSwitch.onchange=e=>{safeSwitch.checked=!safeSwitch.checked;toggleSafeMode();e.stopPropagation();};const password=get("show-passwords");setSwitch(password,!(sysres.policy&(1<<14)));password.checked=!hidePasswords;password.onchange=e=>{hidePasswords=!hidePasswords;hidePasswordsLstn.notify();e.stopPropagation();};setButton(get("design-skin"),!(sysres.policy&(1<<8))||!(sysres.policy&(1<<14)));setButton(get("about"));setButton(get("reboot"));setButton(get("help"));setButton(get("winbox"));const logoutBtn=document.getElementById("logout");setButton(logoutBtn);logoutBtn.onclick=e=>{e.preventDefault();if(safeModeID){if(confirm(safeModeConfirm))toggleSafeMode();else return;}
post({uff0007:0xfe0014},()=>logout());};}
class Toolbar{constructor(holder){this.ul=holder;console.assert(this.ul.tagName==="UL","Toolbar must be within ul");console.assert(holder.role==="toolbar","Requires toolbar role");this.isVertical=holder.getAttribute("aria-orientation")==="vertical";this.reindex();this.ul.onkeydown=e=>this.keypress(e);}
append(element){console.assert(element.matches("button, a"));make.el("li",{p:this.ul}).appendChild(element);this.reindex();}
disable(element){console.assert(this.ul.contains(element),"Non-member passed");console.assert(element.tagName==="button","Can't disable anchor links");element.disabled=true;this.reindex();}
enable(element){console.assert(this.ul.contains(element),"Non-member passed");console.assert(element.tagName==="button","Can't disable anchor links");element.disabled=false;this.reindex();}
reindex(){const clickables="button:not(:disabled), input:not(:disabled), a";const tabable=[...this.ul.querySelectorAll(clickables)];tabable.splice(1).forEach(item=>item.tabIndex=-1);const removed=tabable.splice(0,1);if(removed[0])removed[0].tabIndex=0;}
keypress(e){const stop=e=>e.preventDefault();switch(e.key){case"ArrowLeft":if(this.isVertical)break;dom.focusPrevious(e.target);stop(e);break;case"ArrowUp":if(!this.isVertical)break;dom.focusPrevious(e.target);stop(e);break;case"ArrowRight":if(this.isVertical)break;dom.focusNext(e.target);stop(e);break;case"ArrowDown":if(!this.isVertical)break;dom.focusNext(e.target);stop(e);break;case"Home":dom.focusFirst(e.target);stop(e);break;case"End":dom.focusLast(e.target);stop(e);break;}}
static make(holder){return new Toolbar(holder);}};function logout(error){if(error){window.sessionStorage.setItem("error",error);window.name=`error=${error}`;}else{window.name="";}
window.localStorage.removeItem("token");window.location.replace(`/${window.location.hash}`);}
window.onstorage=e=>{console.log();if(window.localStorage.getItem("token")==null)logout();}
function disconnect(error){debug("disconnect "+backtrace());debug(error);session=null;dom.getByTag(document,"main").replaceChildren();hide(get("page"));show(get("startup"));sysmap=[];addons={};mapAttrs={};generics={};sysres={GMToffset:0};hidePasswords=true;hidePasswordsLstn=new Listeners();skin={};pool=[];prevURLs=[];currentURL=null;currentCont=null;current=null;ticker=null;session=null;currentTitle=null;subscribers={};prefTimer=null;safeModeID=null;lastItem=null;lastMenuBarItem=null;window.clearInterval(keepAliveHandle);cancelAllTimers();requests={};fileCache.reset();timer(initWebfig,1000);}
class Cleanup{setup(active,btn){this.prev=document.onclick;this.item=active;this.btn=btn;this.timeout;document.body.onclick=e=>{if(!(e.target instanceof HTMLElement))return;if(e.target.closest(".menu"))return;this.done();}
this.item.onmouseleave=()=>{this.timeout=setTimeout(()=>{this.done()},350);}
this.item.onmouseenter=()=>{clearTimeout(this.timeout);};}
done(){this.item.classList.remove("active");this.btn.ariaExpanded=false;document.body.onclick=this.prev;this.item.onmouseenter=null;this.item.onmouseleave=null;}}
function generateSideMenu(){const menu=get("nav-menu-list");if(!menu||menu?.childElementCount>1)return;const search=configSearch.init();search.onkeydown=e=>{if(e.key==="ArrowDown")dom.focusNext(search);if(e.key==="ArrowUp")dom.focusPrevious(search);if(e.key==="Home")dom.focusFirst(search);if(e.key==="End")dom.focusLast(search);}
for(const menuItem of getSidemenuList(sysmap)){if(menuItem.group){const name=menuItem.name;const normalName=normalize(name);const cfg=getProp(skin,name);if(cfg._hide)continue;const item=getTemplate("side-menu-item-lvl2");const link=item.querySelector("button");link.id=`id_${normalName}`;link.setAttribute("aria-controls",`${link.id}-sublist`);item.querySelector(".icon").classList.add(`icon-${iconName(menuItem.icon)}`);const text=dom.getByClass(item,"text");text.appendChild(viewLabel(cfg,name));text.dataset.name=name;const cleanup=new Cleanup;item.onclick=e=>{if(!item.classList.contains("active")){e.preventDefault();}
item.classList.toggle("active");const btn=dom.getByTag(item,"button");dom.toggleBoolAttribute(btn,"aria-expanded");if(btn.ariaExpanded==="false")return;if(!e.pointerType)subList.firstElementChild?.focus();cleanup.setup(item,btn);};const subList=dom.getByClass(item,"level-2");subList.id=`${link.id}-sublist`;for(let subMenuItem of menuItem.group){if(subMenuItem.name==="Telnet")continue;const name=subMenuItem.name;const prop=getProp(cfg,name);if(prop._hide)continue;const li=getTemplate("side-menu-subitem-lvl2");subList.appendChild(li);const subItem=dom.getByTag(li,"a");subItem.href=getPath(subMenuItem);subItem.appendChild(viewLabel(prop,name));subItem.dataset.name=name;subItem.onkeydown=e=>{if(e.key==="ArrowDown")dom.focusNext(subItem);if(e.key==="ArrowUp")dom.focusPrevious(subItem);if(e.key==="ArrowLeft"){const idx=[...subList.children].findIndex(li=>li.contains(subItem))-10;if(idx<0)subList.previousElementSibling.focus();else dom.getByTag(subList.children[idx],"a").focus();}
if(e.key==="ArrowRight"){const idx=[...subList.children].findIndex(li=>li.contains(subItem))+10;if(idx<subList.childElementCount)dom.getByTag(subList.children[idx],"a").focus();}
if(e.key==="Home")dom.focusFirst(subList);if(e.key==="End")dom.focusLast(subList);if(e.key==="Escape"){subList.previousElementSibling.focus();}
e.stopPropagation();}}
subList.addEventListener("focusout",e=>{if(subList.contains(e.relatedTarget))return;subList.closest("li").classList.remove("active");subList.previousElementSibling.ariaExpanded=false;});item.onkeydown=e=>{if(e.key==="ArrowDown")dom.focusNext(item);if(e.key==="ArrowUp")dom.focusPrevious(item);if(e.key==="ArrowRight"||e.key==="Enter"||e.key===" "){e.preventDefault();e.stopPropagation();item.classList.add("active");dom.getByTag(item,"button").ariaExpanded=true;dom.getByTag(subList.firstElementChild,"a").focus();}
if(e.key==="Home")dom.focusFirst(item);if(e.key==="End")dom.focusLast(item);}
menu?.appendChild(item);continue;}
if(menuItem.name=='Quick Set')continue;if(menuItem.name=='New Terminal')continue;const lvl1Item=getTemplate("side-menu-item-lvl1");const link=dom.getByTag(lvl1Item,"a");const prop=getProp(skin,menuItem.name);if(prop._hide)continue;link.href=getPath(menuItem);dom.getByClass(lvl1Item,"icon").classList.add(`icon-${iconName(menuItem.icon)}`);const text=dom.getByClass(lvl1Item,"text")
text.appendChild(viewLabel(prop,menuItem.name));text.dataset.name=menuItem.name;menu?.appendChild(lvl1Item);link.onkeydown=e=>{if(e.key==="ArrowDown")dom.focusNext(link);if(e.key==="ArrowUp")dom.focusPrevious(link);if(e.key==="Home")dom.focusFirst(link);if(e.key==="End")dom.focusLast(link);}}}
function indexSearch(index){if(index.length>0)return;index.push(...sysmap.flatMap(s=>s.c.map(c=>{if(s.title==="Quick Set"||s.title==="Status")return null;if(!isServiceVisible(s,true))return null;const grpCfg=getProp(skin,s.group);const srvCfg=getServiceProp(s);const cntCfg=getContainerProp(c);if(shouldHide(srvCfg))return null;if(s.group&&shouldHide(grpCfg))return null;if(!isContainerVisible(c,true)||c.hide)return null;if(shouldHide(cntCfg))return null;const base=[grpCfg?.name??c.service.group,srvCfg.name??c.service.name,cntCfg.name??c.title];if(s.c.length===1)base.pop();return{str:base.filter(s=>s).join(" > "),path:getPath(c),icon:c.service.icon??c.service.groupIcon,}})).filter(s=>s));}
const configSearch={lstn:new Listeners,prefName:"searchPins",init(){this.pins??=preferences.get()[this.prefName]??[];const search=get("search-button");const textNode=dom.getByClass(search,"text");const input=get("menu-search-input");const dialog=get("search-dialog");this.dialog=dialog;dialog.onclick=e=>{if(e.target===dialog)dialog.close();}
dialog.onkeydown=e=>{if(!["Enter","Tab","Shift","Control","Alt"," "].includes(e.key))input.focus();}
this.index=[];const showSearch=()=>{if(this.index.length===0)indexSearch(this.index);if(!this.hasShownPins)this.drawPinned();dialog.showModal();input.select();}
search.onclick=showSearch;const list=get("menu-search-results");input.oninput=e=>{list.replaceChildren();if(input.value.length<3)return;const terms=input.value.split(" ").map(t=>t.toLowerCase());const results=this.index.filter(s=>terms.every(term=>s.str.toLowerCase().includes(term)));results.forEach(row=>this.drawItem(list,row,terms));list.firstElementChild?.classList.add("first");}
input.onblur=()=>{list.firstElementChild?.classList.remove("first");}
input.onfocus=()=>{list.firstElementChild?.classList.add("first");}
const form=input.closest("form");form.onsubmit=e=>{list.firstElementChild?.getElementsByTagName("a")[0].click();e.preventDefault();}
document.body.onkeydown=e=>{if(e.ctrlKey&&!e.shiftKey&&(e.key==="k"||e.key==="K")){showSearch();e.preventDefault();return;}
if(e.key==="Escape"){if(dialogManager.busy())return;get("CloseButton")?.click();return;}}
return search;},drawPinned(){this.hasShownPins=true;const list=get("menu-pinned-list");list.replaceChildren();this.index.filter(s=>this.pins.includes(s.path)).forEach(pin=>this.drawItem(list,pin,null,true));if(this.pins.length!==list.childElementCount){this.pins=[...list.children].map(c=>c.getElementsByTagName("a")[0].hash);preferences.set(this.prefName,this.pins);}},drawItem(list,row,terms,inPins){const link=getTemplate("search-result-item");const anchor=dom.getByTag(link,"a");anchor.href=row.path;dom.getByClass(link,"icon").classList.add(`icon-${iconName(row.icon)}`);dom.getByClass(link,"search-link").innerHTML=this.markText(row.str,terms);list.append(link);link.onclick=()=>this.dialog.close();const pin=dom.getByTag(link,"button");const pinIcon=dom.getByClass(pin,"icon");if(inPins){pinIcon.classList.replace("icon-Pin_12x12","icon-Close_12x12");pin.title="Remove from pinned";}
else if(this.pins.includes(row.path)){pinIcon.classList.add("icon-pinned");pin.title="Remove from pinned";}
pin.onclick=e=>{e.stopPropagation();e.preventDefault();if(this.pins.some(p=>p===row.path)){this.removePin(row.path);pinIcon.classList.remove("icon-pinned");pin.title="Add to pinned";}else{this.addPin(row.path);pinIcon.classList.add("icon-pinned");pin.title="Remove from pinned";}
anchor.focus();}
link.onkeydown=e=>{if(e.key===" ")pin.click();}},addPin(path){this.pins.push(path);preferences.set(this.prefName,this.pins);if(this.hasShownPins)this.drawPinned();this.lstn.notify("add",path);},removePin(path){this.pins.splice(this.pins.indexOf(path),1);preferences.set(this.prefName,this.pins);if(this.hasShownPins)this.drawPinned();this.lstn.notify("rm",path);},markText(text,terms){if(!terms)return text.replaceAll(">","&gt;");const searchtext=text.toLowerCase();const markPos=[];terms.forEach(term=>{if(term==="")return;for(let i=searchtext.indexOf(term);i!=-1;i=searchtext.indexOf(term,i+1)){markPos.push([i,i+term.length]);}})
const output=[];text.split("").forEach((c,i)=>{markPos.forEach(mark=>{if(mark[0]===i)output.push("<mark>");if(mark[1]===i)output.push("</mark>");});output.push(c);});return output.map(c=>c===">"?"&gt;":c).join("");},isPinned(path){this.pins??=preferences.get()[this.prefName]??[];return this.pins.includes(path);}}
function generateMenu(){generateMenuBar();if(!getProp(skin,"WebFig")["_hide"])generateSideMenu();}
function sortSlots(slots,owner){var cur={slots:[]};var tabs=[cur];var findTab=function(name){for(let i in tabs){if(tabs[i].tab&&tabs[i].tab.name==name)return tabs[i];}
return null;};var prio=0;for(let i in slots){var s=slots[i];if(s.type=='tab'){if(s.priority==null)s.priority=prio++;cur={tab:s,slots:[]};if(s.combine){var t=findTab(s.name);if(t){cur=t;continue;}}
tabs.push(cur);continue;}
if(s.type=='gridcell'&&s.name){cur={tab:s,slots:[s]};tabs.push(cur);continue;}
if(s.type=='object'){var c=s.c;if(cur.tab&&cur.tab.type=='tab')c=([cur.tab]).concat(c);s.c=sortSlots(c,owner);}
if(s.type=='filter'){owner.filter=s;}
if(s.type=='group'){if(!s.keys&&!s.id&&s.c.length==1){s.type='opt';}}
if(s.type=='multinumberrange'){if(s.c[0]&&s.c[0].type=='tuple'){s.c[0].own=1;}}
if(s.type==="status")s.c.forEach(e=>e.owner=cur.tab);if(!s.name){s.name=ftype(s).name;s.secondname=ftype(s).secondname;}
if(!ftype(s).outside){if(s.type=='graphbox'){for(var g in s.graphs)s.graphs[g].owner=cur.tab;}
if(s.type!='comment')s.owner=cur.tab;}
cur.slots.push(s);}
if(tabs.length==1)return cur.slots;tabs.sort(function(a,b){if(!a.tab)return-1;if(!b.tab)return 1;if((a.tab.priority||0)<(b.tab.priority||0))return-1;if((a.tab.priority||0)>(b.tab.priority||0))return 1;return 0;});slots=[];for(let i in tabs){if(tabs[i].tab&&tabs[i].slots.length==0)continue;slots=slots.concat(tabs[i].slots);}
return slots;}
function handleOverrides(slots){var find=function(name,limit){for(var i=0;i<limit;++i){if(slots[i].name==name)return i;}
return null;};for(var i=0;i<slots.length;){if(slots[i].override){var p=find(slots[i].name,i);if(p){if(!slots[i].on&&slots[p].on)slots[i].on=slots[p].on;slots[p]=slots[i];slots.splice(i,1);continue;}}
++i;}}
function splitColumns(cols){var i=0;while(i<cols.length){if(cols[i].type=='tuple'&&cols[i].separate){cols=cols.slice(0,i).concat(cols[i].c,cols.slice(i+1));continue;}
++i;}
return cols;}
function generateMetaInfo(data){const status={name:"Status",prio:20,pred:{type:"statuspane"},c:[{title:"Status",type:"status"}]};data.splice(data[0].name==="Quick Set"?1:0,0,status);const groupIcons={};data.forEach(service=>{if(service.name)service.nname=normalize(service.name);if(service.group){if(!groupIcons[service.group]){const icon=data.find(s=>s.group===service.group&&s.groupIcon);groupIcons[service.group]=icon.groupIcon;}
service.groupIcon??=groupIcons[service.group];}
service.c.forEach(attrs=>{attrs.service=service;if(attrs.title)attrs.ntitle=normalize(attrs.title);if(attrs.nameval&&!mapAttrs[attrs.path]){mapAttrs[attrs.path]=attrs;}
attrs.columns=attrs.c?splitColumns(attrs.c):[];if(attrs.generic){generics[attrs.generic]=attrs;attrs.subtypes={};attrs.gensubtypes=[];}
if(attrs.inherit){var p=generics[attrs.inherit];if(p){if(attrs.typevalue!=0xffffffff){p.subtypes[attrs.typevalue]=attrs;}else{p.gensubtypes.push(attrs);}
if(p.origc)attrs.c=p.origc.concat(attrs.c||[]);else if(p.c)attrs.c=p.c.concat(attrs.c||[]);if(p.columns){attrs.columns=p.columns.concat(attrs.columns);}
if(attrs.c)handleOverrides(attrs.c);if(attrs.columns)handleOverrides(attrs.columns);if(!attrs.name)attrs.name=p.name;if(!attrs.nameval)attrs.nameval=p.nameval;if(!attrs.path)attrs.path=p.path;if(!attrs.treeon)attrs.treeon=p.treeon;}
attrs.inherit=p;}
if(attrs.c){attrs.origc=attrs.c;attrs.c=sortSlots(attrs.origc,attrs);attrs.c.forEach(c=>{if(c.type==="opt"&&c.c)c.name??=c.c[0]?.name});}
if(attrs.request)attrs.request=sortSlots(attrs.request,attrs);if(attrs.typeon){var typeon=getAttr(attrs,attrs.typeon);if(typeon)attrs.typeon=typeon;}});});}
function processList(list){list=eval(`([${list}{}])`);let gums=[];for(let gum of list){if(!gum.name||gum.name.endsWith(".png"))continue;if(gum.name==="roteros.jg")gums.unshift(gum);else gums.push(gum);}
return gums;}
class Traffic{constructor(){this.bytesTx=0;this.bytesRx=0;this.bytesLastDisplay=new Date;}
update(){const format=b=>types.bitrate.tostr(null,b);const calcBytes=(b,t)=>Math.round(b*8*1000/(t));const now=new Date();this.bytesTx=calcBytes(this.bytesTx,now.getTime()-this.bytesLastDisplay.getTime());this.bytesRx=calcBytes(this.bytesRx,now.getTime()-this.bytesLastDisplay.getTime());const str=`Tx: ${format(this.bytesTx)}\nRx: ${format(this.bytesRx)}`;const s=get("status");s.innerText=str;this.bytesTx=0;this.bytesRx=0;this.bytesLastDisplay=now;timer(()=>traffic.update(),3000);}}
const traffic=new Traffic;async function initWebfig(){debug("initWebfig");addInitialInteractivity();trace=window.navigator.userAgent;let plat=trace.match(/\([^)]*\)/);if(plat){trace=plat[0].substr(1,plat[0].length-2);trace=trace.replaceAll(/[/(_; ]/g,"-");trace=trace.replaceAll(/-+/g,"-");trace=trace.toLowerCase();}
else{trace="unknown";}
try{const start=get("startup");show(start);start.innerText="Connecting";const response=await window.fetch("/webfig");const indexTextNew=await response.text();if(indexText.length>0&&indexText!=indexTextNew){window.location.reload();}
indexText=indexTextNew;autoLogin();}
catch(e){disconnect(e);}}
function hideMobileMenu(){document.body.classList.remove("serve--menu-show");const burger=get("Burger");burger.setAttribute("aria-pressed","false");}
let keepMobileMenuOpen=false;function addInitialInteractivity(){const burger=get("Burger");burger.onclick=e=>{e.preventDefault();document.body.classList.toggle("serve--menu-show");dom.toggleBoolAttribute(e.target,"aria-pressed");};const mobileNav=get("mobile-nav");mobileNav.onclick=e=>{keepMobileMenuOpen=false;const link=e.target.closest("a");if(!link)return;if(link.id==="id_WebFig_alt")keepMobileMenuOpen=true;else hideMobileMenu();}
const menuSwitch=get("MenuSwitch");menuSwitch.onclick=()=>{document.body.classList.toggle("serve--menu-minimized");dom.toggleBoolAttribute(menuSwitch,"aria-pressed");};menuSwitch.onkeydown=e=>{if(e.key==="ArrowDown"){const navMenu=get("nav-menu");navMenu.querySelector("[tabindex='0']")?.focus();}}
const genMenu=get("genMenuButton")?.parentElement;genMenu.onclick=e=>{genMenu.classList.toggle("show");}}
function keepAlive(){const msg={}
msg[SYS_TO]=[1];msg[SYS_CMD]=0xfe0000;post(msg,rep=>{});}
function start(){generateMetaInfo(sysmap);keepAliveHandle=window.setInterval(keepAlive,20000);loadSkin(sysres.skin,function(){generateMenu();const logo=get("logo");if(logo.naturalWidth===1)hide(logo);hide(document.getElementById("startup"));show(document.getElementById("page"));window.onhashchange=e=>{if(!keepMobileMenuOpen){hideMobileMenu();}
keepMobileMenuOpen=false;generateContent(e.target.location.hash);}
if(pwdAuth)showSysnote();generateContent(location.hash);if(sysres.expiredPwd){let cont=findContainer('System','Password','Change_Now');openContent(getPath(cont));return;}
if(sysres.defconf){let cont=findContainer('System',normalize('Reset Configuration'),normalize('Default Configuration'));openContent(getPath(cont));timer(function(){var req={Uff0001:[24,8],uff0007:11};post(req,function(rep){});},3000);return;}});}
function fetchBoardInfo(){const req={Uff0001:[24,2],Uff0002:[44],uff0007:0xfe000d};post(req,function(rep){if(rep){const board=rep;sysres.uptime=board.u1;sysres.uptimediff=sysres.uptime-getNow();sysres.version=board.s16;sysres.displayname=board.s2c||sysres.boardname;}
fetchTimeZone();});}
function fetchTimeZone(){const req={Uff0001:[24,0],uff0007:0xfe000d}
post(req,rep=>{if(!isError(rep))sysres.GMToffset=num2int(rep.u1b);start();});subscribe([24,0],_=>{post(req,rep=>{if(!isError(rep))sysres.GMToffset=num2int(rep.u1b);})});}
function showSysnote(){const req={Uff0001:[24,33],uff0007:0xfe000d}
post(req,rep=>{const show=!!rep.b1f6;const note=rep.s1f5;if(show&&note){dialogManager.request(dialog=>{const snote=findContainer("System","Note");const cfg=getContainerProp(snote);dialog.setTitle(cfg.title??snote.title);dialog.setBody([make.el("pre",{cont:note})]);})}},()=>{});}
async function initSession(){let response=await window.fetch("/webfig/list");let list=await response.text();let gums=processList(list);gums.forEach(gum=>addons[gum.name.slice(0,-3)]=true);for(let gum of gums){response=await window.fetch(`/webfig/${gum.unique}`);let map=await response.text();sysmap=sysmap.concat(eval(`(${map})`));}
show(get("page"));timer(()=>traffic.update(),3000);ticker=new Ticker();post_notification_request();for(var i in sysmap){if(sysmap[i].name=='Identity'){var c=getContainer(sysmap[i].c[0]);c.listen(function(obj){var attr=getAttr(obj._type,'Identity');sysres.identity=ftype(attr).get(attr,obj);setDocumentTitle();const identity=get("identity");identity.innerText=sysres.identity;});break;}}
post({Uff0001:[13,7],uff0007:0xfe000d,s1:sysres.user},rep=>{sysres.manualURL=rep.s2||"https://help.mikrotik.com/docs/";fetchBoardInfo();});}
var Feature={SYSTEM:0,ADVANCED_TOOLS:1,CONTAINER:2,CALEA:3,CLOUD_BACKUP:4,DEVTOOLS:5,DFSTEST:6,DHCP:7,DUDE:8,GPS:9,HOTSPOT:10,IOT:11,IPV6:12,KVM:13,MODEM_LOG:14,___UNUSED___:15,NETINSTALLER:16,OPENFLOW:17,OPTION:18,PPP:19,RB_NETINSTALL:20,ROSE_STORAGE:21,SECURITY:22,TERRAGRAPH:23,TR069_CLIENT:24,TRAINING:25,UPS:26,USERMAN:27,WIRELESS:28,WW2:29,WW2_TESTCMD:30,WIPE_VM:31,ZEROTIER:32,RB_META:33,RB_SWITCH:34,NOT_VM:35,SMP:36,LCD:37,POE:38,POE_ATTINY:39,POE_PWR_CHG:40,POE_SETTINGS:41,MUSIC_SWITCH:42,SWITCH:43,MULTI_SWITCH:44,CHR:45,NOT_CHR:46,SIM_SLOT:47,MODEM_ANTENNA_SWITCH:48,MODEM_ANTENNA_SCAN:49,RB_GPS:50,GHZ_60:51,OLD_SWITCH:52,CRS_PRESTERA:53,SWOS:54,PWR_LINK:55,WPS_SYNC:56,PTP:57,GPIO:58,NBAND:59,PCIE_PASSTHROUGH:60,SWITCH_MIRROR1:61,SWITCH_MIRROR2:62,SWITCH_MIRROR_PRESTERA:63,SWITCH_RATE:64,STORAGE:65,SWITCHING:66,WIREGUARD_RELAY:67,CLOUD_VPN:68,WW2_MTKTEST:69,IS_UEFI:70,PRESTERA_AC3:71,PRESTERA_BC2:72,PRESTERA_CPSS:73,HEALTH:74,HEALTH_SETTINGS:75,FIX_RB:76,IOT_BT_EXTRA:77,MODE_TAINTED:78,MODE_TAINTING_ENABLED:79,MODE_SCHEDULER:80,MODE_SOCKS:81,MODE_FETCH:82,MODE_PPTP:83,MODE_L2TP:84,MODE_BTEST:85,MODE_TRAFGEN:86,MODE_SNIFF:87,MODE_IPSEC:88,MODE_ROMON:89,MODE_PROXY:90,MODE_HOTSPOT:91,MODE_SMB:92,MODE_EMAIL:93,MODE_ZEROTIER:94,MODE_CONTAINER:95,MODE_DOWNGRADE:96,MODE_PARTITIONS:97,MODE_BOOTLOADER:98,POE_4P_POWER:99,LORA_TEST:100,DEV_TESTING:101,PARTITIONS:102,RB_USB:103,BUTTON_MODE:104,BUTTON_WPS:105,NUM_FEATURES:106};function hasFeature(feature){var idx=feature>>5;var bit=feature%32;return!!(sysres.rosmode.U6d[idx]&(1<<bit));}
function doAuth(user,pwd,token){session=new Session();request('POST','/jsproxy',session.makeInitialRequest(),function(r){session.keyExchange(new Uint8Array(r));const credentials=token?{s2d:token}:{s1:user,s3:pwd};post(credentials,rep=>{sysres.user=user;sysres.policy=rep.uff000b;sysres.skin=rep.sfe0009;const userdata=rep;sysres.haspwd=userdata.b1c;sysres.arch=userdata.s11;sysres.boardname=userdata.s15;sysres.board=userdata.s17;sysres.defconf=userdata.b13;sysres.expiredPwd=userdata.b26;sysres.rosmode=userdata.m28;window.localStorage.setItem("token",userdata.s2d);if(!token)pwdAuth=true;if(!hasFeature(Feature.OPTION)){window.sessionStorage.clear();}
post({Uff0001:[120],uff0007:5},rep=>{sysres.qscaps=rep.u1||0;initSession();});},()=>{if(window.localStorage.getItem("token")){window.localStorage.removeItem("token");logout();}else{logout("Authentication failed: invalid username or password.");}})},null,true);}
function autoLogin(){const token=window.localStorage.getItem("token");if(token){doAuth(null,null,token);return;}
const user=window.sessionStorage.getItem("name");const password=window.sessionStorage.getItem("password");if(user!=undefined&&password!=undefined){doAuth(user,password);window.sessionStorage.clear();}
else if(window.name){const[method,loginData]=window.name.split(/=(.*)/s);window.name="";if((["login","autologin"].includes(method))&&loginData){const[user,pwd]=loginData.split(/\|(.*)/s);doAuth(user,pwd);}}
else{logout();}}
window.onload=initWebfig;var DUDE_DATA_DIR="s2";var CONFIG_MAP_BACKGROUND_COLOR="u100fb6";var CONFIG_MAP_UP_COLOR="u100fbc";var CONFIG_MAP_DOWN_PARTIAL_COLOR="u100fbd";var CONFIG_MAP_DOWN_COMPLETE_COLOR="u100fbe";var CONFIG_MAP_UNKNOWN_COLOR="u100fbf";var CONFIG_MAP_ACKED_COLOR="u100fc0";var CONFIG_MAP_NETWORK_COLOR="u100fc1";var CONFIG_MAP_SUBMAP_COLOR="u100fc2";var CONFIG_MAP_SUBMAP_UP_COLOR="u100fc3";var CONFIG_MAP_SUBMAP_DOWN_PARTIAL_COLOR="u100fc4";var CONFIG_MAP_SUBMAP_DOWN_COMPLETE_COLOR="u100fc5";var CONFIG_MAP_SUBMAP_ACKED_COLOR="u100fc6";var CONFIG_MAP_STATIC_COLOR="u100fc7";var CONFIG_MAP_LINK_COLOR="u100fc8";var CONFIG_MAP_LINK_LABEL_COLOR="u100fc9";var CONFIG_MAP_DEVICE_SHAPE="u100fcf";var CONFIG_MAP_DEVICE_FONT="r100fd0";var CONFIG_MAP_NETWORK_SHAPE="u100fd4";var CONFIG_MAP_NETWORK_FONT="r100fd5";var CONFIG_MAP_SUBMAP_SHAPE="u100fd9";var CONFIG_MAP_SUBMAP_FONT="r100fda";var CONFIG_MAP_STATIC_SHAPE="u100fdc";var CONFIG_MAP_STATIC_FONT="r100fdd";var CONFIG_MAP_LINK_FONT="r100fe1";var FILE_FULL_NAME="s106979";var DEVICE_TYPE_ID="u101f4c";var DEVICE_STATUS="u101f5b";var DEVICE_TYPE_IMAGE_ID="u102713";var DEVICE_TYPE_IMAGE_SCALE="u102714";var LINK_TYPE_ID="u1055f6";var LINK_TYPE_STYLE="u1059d8";var LINK_TYPE_THICKNESS="u1059d9";var NET_MAP_ELEMENT_MAP_ID="u105dc0";var NET_MAP_ELEMENT_LABEL="s105dc1";var NET_MAP_ELEMENT_TYPE="u105dc2";var NET_MAP_ELEMENT_ITEM_TYPE="u105dc3";var NET_MAP_ELEMENT_ITEM_ID="u105dc4";var NET_MAP_ELEMENT_ITEM_X="u105dc5";var NET_MAP_ELEMENT_ITEM_Y="u105dc6";var NET_MAP_ELEMENT_ITEM_USE_UP_COLOR="b105dc8";var NET_MAP_ELEMENT_ITEM_USE_DOWN_PARTIAL_COLOR="b105dc9";var NET_MAP_ELEMENT_ITEM_USE_DOWN_COMPLETE_COLOR="b105dca";var NET_MAP_ELEMENT_ITEM_USE_UNKNOWN_COLOR="b105dcb";var NET_MAP_ELEMENT_ITEM_USE_ACKED_COLOR="b105dcc";var NET_MAP_ELEMENT_ITEM_USE_SHAPE="b105dce";var NET_MAP_ELEMENT_ITEM_USE_FONT="b105dcf";var NET_MAP_ELEMENT_ITEM_USE_IMAGE="b105dd0";var NET_MAP_ELEMENT_ITEM_USE_IMAGE_SCALE="b105dd1";var NET_MAP_ELEMENT_ITEM_UP_COLOR="u105dd2";var NET_MAP_ELEMENT_ITEM_DOWN_PARTIAL_COLOR="u105dd3";var NET_MAP_ELEMENT_ITEM_DOWN_COMPLETE_COLOR="u105dd4";var NET_MAP_ELEMENT_ITEM_UNKNOWN_COLOR="u105dd5";var NET_MAP_ELEMENT_ITEM_ACKED_COLOR="u105dd6";var NET_MAP_ELEMENT_ITEM_SHAPE="u105dd7";var NET_MAP_ELEMENT_ITEM_FONT="r105dd8";var NET_MAP_ELEMENT_ITEM_IMAGE="u105dd9";var NET_MAP_ELEMENT_ITEM_IMAGE_SCALE="u105dda";var NET_MAP_ELEMENT_LINK_FROM="u105ddb";var NET_MAP_ELEMENT_LINK_TO="u105ddc";var NET_MAP_ELEMENT_LINK_ID="u105ddd";var NET_MAP_ELEMENT_LINK_USE_WIDTH="b105dde";var NET_MAP_ELEMENT_LINK_WIDTH="u105ddf";var NET_MAP_IMAGE_ID="u1061aa";var NET_MAP_IMAGE_SCALE="u1061ab";var NET_MAP_IMAGE_TILE="b1061ac";var NET_MAP_USE_BACKGROUND_COLOR="b1061b4";var NET_MAP_USE_UP_COLOR="b1061b5";var NET_MAP_USE_DOWN_PARTIAL_COLOR="b1061b6";var NET_MAP_USE_DOWN_COMPLETE_COLOR="b1061b7";var NET_MAP_USE_UNKNOWN_COLOR="b1061b8";var NET_MAP_USE_ACKED_COLOR="b1061b9";var NET_MAP_USE_NETWORK_COLOR="b1061ba";var NET_MAP_USE_SUBMAP_COLOR="b1061bb";var NET_MAP_USE_SUBMAP_UP_COLOR="b1061bc";var NET_MAP_USE_SUBMAP_DOWN_PARTIAL_COLOR="b1061bd";var NET_MAP_USE_SUBMAP_DOWN_COMPLETE_COLOR="b1061be";var NET_MAP_USE_SUBMAP_ACKED_COLOR="b1061bf";var NET_MAP_USE_STATIC_COLOR="b1061c0";var NET_MAP_USE_LINK_COLOR="b1061c1";var NET_MAP_USE_LINK_LABEL_COLOR="b1061c2";var NET_MAP_USE_DEVICE_SHAPE="b1061c6";var NET_MAP_USE_DEVICE_FONT="b1061c7";var NET_MAP_USE_NETWORK_SHAPE="b1061c9";var NET_MAP_USE_NETWORK_FONT="b1061ca";var NET_MAP_USE_SUBMAP_SHAPE="b1061cc";var NET_MAP_USE_SUBMAP_FONT="b1061cd";var NET_MAP_USE_STATIC_SHAPE="b1061ce";var NET_MAP_USE_STATIC_FONT="b1061cf";var NET_MAP_USE_LINK_FONT="b1061d1";var NET_MAP_BACKGROUND_COLOR="u1061d3";var NET_MAP_UP_COLOR="u1061d4";var NET_MAP_DOWN_PARTIAL_COLOR="u1061d5";var NET_MAP_DOWN_COMPLETE_COLOR="u1061d6";var NET_MAP_UNKNOWN_COLOR="u1061d7";var NET_MAP_ACKED_COLOR="u1061d8";var NET_MAP_NETWORK_COLOR="u1061d9";var NET_MAP_SUBMAP_COLOR="u1061da";var NET_MAP_SUBMAP_UP_COLOR="u1061db";var NET_MAP_SUBMAP_DOWN_PARTIAL_COLOR="u1061dc";var NET_MAP_SUBMAP_DOWN_COMPLETE_COLOR="u1061dd";var NET_MAP_SUBMAP_ACKED_COLOR="u1061de";var NET_MAP_STATIC_COLOR="u1061df";var NET_MAP_LINK_COLOR="u1061e0";var NET_MAP_LINK_LABEL_COLOR="u1061e1";var NET_MAP_DEVICE_SHAPE="u1061e5";var NET_MAP_DEVICE_FONT="r1061e6";var NET_MAP_NETWORK_SHAPE="u1061e8";var NET_MAP_NETWORK_FONT="r1061e9";var NET_MAP_SUBMAP_SHAPE="u1061eb";var NET_MAP_SUBMAP_FONT="r1061ec";var NET_MAP_STATIC_SHAPE="u1061ed";var NET_MAP_STATIC_FONT="r1061ee";var NET_MAP_LINK_FONT="r1061f0";var NET_MAP_STATUS="u1061fb";var DEVICE_STATUS_UP=1;var DEVICE_STATUS_DOWN_PARTIAL=2;var DEVICE_STATUS_DOWN_COMPLETE=3;var DEVICE_STATUS_ACKED=4;var LINK_SOLID=0;var LINK_DASHED=1;var LINK_DOTTED=2;var LINK_ZIGZAG=3;var NETMAP_ITEM=0;var NETMAP_LINK=1;var NETMAP_ITEM_DEVICE=0;var NETMAP_ITEM_NETWORK=1;var NETMAP_ITEM_SUBMAP=2;var NETMAP_ITEM_STATIC=3;var NETMAP_SHAPE_RECT=0;var NETMAP_SHAPE_DIAMOND=1;var NETMAP_SHAPE_OVAL=2;var NETMAP_SHAPE_CLOUD=3;var NETMAP_SHAPE_HEXAGON=4;var NETMAP_SHAPE_HEXAGON2=5;var NETMAP_SHAPE_TRIANGLE=6;var NETMAP_SHAPE_TRIANGLE2=7;var fileCache={ID_FILEMAN:72,ID_TRANSFER:1,NAME:"s1",SIZE:"u2",LSIZE:"qe",CHUNK:"r5",LAST_CHUNK:"b6",CMD_OPEN_READ:3,CMD_READ:4,queue:[],cache:{},reset:function(){this.queue=[];this.cache={};},onDudeSettingsChanged:function(){this.dudeSettings=this.dudeSettingsHolder.obj;this.processQueue();},onFileChanged:function(obj,more){if(!more){this.processQueue();}},done:function(c){c.inprogress=false;c.listeners.notify(c.failed?null:c.data,c.name);if(c.failed){delete this.cache[c.id];}},readChunk:function(c){var that=this;var req={};req[SYS_TO]=[this.ID_FILEMAN,this.ID_TRANSFER];req[SYS_CMD]=this.CMD_READ;req[STD_ID]=c.transID;req[this.SIZE]=4096;post(req,function(rep){if(isError(rep)){c.failed=true;that.done(c);return;}
c.data=c.data.concat(rep[that.CHUNK]);if(!rep[that.LAST_CHUNK]){that.readChunk(c);return;}
that.done(c);});},startTransfer:function(c){var that=this;c.name=this.dudeSettings[DUDE_DATA_DIR]+"/files/"+this.filesMap.map[c.id][FILE_FULL_NAME];var req={};req[SYS_TO]=[this.ID_FILEMAN,this.ID_TRANSFER];req[SYS_CMD]=this.CMD_OPEN_READ;req[this.NAME]=c.name;post(req,function(rep){if(isError(rep)){c.failed=true;that.done(c);return;}
c.transID=rep[STD_ID];c.size=rep[that.LSIZE];that.readChunk(c);});},processQueue:function(){if(!this.dudeSettings||!this.filesMap.fresh){return;}
var i;for(i=0;i<this.queue.length;++i){var qe=this.queue[i];if(!this.cache[qe.fileid]){if(!this.filesMap.map[qe.fileid]){qe.cb(null);continue;}
let c={id:qe.fileid,inprogress:true,failed:false,data:[],listeners:new Listeners,};c.listeners.listen(qe.cb);this.cache[c.id]=c;this.startTransfer(c);}
else{let c=this.cache[qe.fileid];c.listeners.listen(qe.cb);if(c.inprogress){return;}
this.done(c);}}
this.queue=[];},get:function(fileid,cb){if(!this.dudeSettingsHolder){this.dudeSettingsHolder=new ObjectHolder({path:[103,100]});this.dudeSettingsHolder.listen(function(){fileCache.onDudeSettingsChanged();},false);}
if(!this.filesMap){this.filesMap=getObjectMap([103,5]);this.filesMap.listen(function(o,m){fileCache.onFileChanged(o,m);},false);};this.queue.push({fileid:fileid,cb:cb});this.processQueue();},cancel:function(fileid,cb){var c=this.cache[fileid];if(!c){return;}
c.listeners.unlisten(cb);},};class NetworkMapView extends View{constructor(attrs){super(attrs);this.config={};this.loaded=false;this.itemEls={};this.linkEls={};this.objEls={};this.maxx=0;this.maxy=0;this.elementCount=0;}
createRow(viewCtrl,cfg,obj){if(this.attrs.name){return View.prototype.createRow.call(this,viewCtrl,cfg,obj);}
const ctrl=this.create();if(!ctrl)return;const holder=viewCtrl.createSingleItemRow();holder.classList.add("dude-map");holder.appendChild(ctrl);}
el(type,attrs){const el=document.createElementNS('http://www.w3.org/2000/svg',type);if(attrs){for(let i in attrs){el.setAttribute(i,attrs[i]);}}
return el;}
imageEncode(raw,name){let ext=/\.([^.]+)$/.exec(name);if(ext&&ext[1]=="svg"){var s="";for(let i=0;i<raw.length;++i){s=s+String.fromCharCode(raw[i]);}
return"data:image/svg+xml,"+encodeURLComponent(s);}
const keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let output="";let chr1,chr2,chr3,enc1,enc2,enc3,enc4;let i=0;while(i<raw.length){chr1=raw[i++];chr2=raw[i++];chr3=raw[i++];enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output+=keyStr.charAt(enc1)+keyStr.charAt(enc2)+
keyStr.charAt(enc3)+keyStr.charAt(enc4);}
ext=/\.([^.]+)$/.exec(name);if(ext){if(ext[1]=="svg"){return"data:image/svg+xml;base64,"+output;}
else{ext=ext[1];}}
return`data:image/${ext || "jpg"};base64,${output}`;}
getLabel(elem){switch(elem[NET_MAP_ELEMENT_TYPE]){case NETMAP_ITEM:switch(elem[NET_MAP_ELEMENT_ITEM_TYPE]){case NETMAP_ITEM_STATIC:return elem[STD_NAME];}}
return elem[NET_MAP_ELEMENT_LABEL];}
getBackgroundColor(){if(this.netmap[NET_MAP_USE_BACKGROUND_COLOR]){return this.netmap[NET_MAP_BACKGROUND_COLOR];}
return this.config[CONFIG_MAP_BACKGROUND_COLOR];}
getLabelBackgroundColor(elem){switch(elem[NET_MAP_ELEMENT_TYPE]){case NETMAP_ITEM:const itemID=elem[NET_MAP_ELEMENT_ITEM_ID];switch(elem[NET_MAP_ELEMENT_ITEM_TYPE]){case NETMAP_ITEM_DEVICE:const device=this.devices.map[itemID];if(!device){return 0xffffff;}
switch(device[DEVICE_STATUS]){case DEVICE_STATUS_UP:if(elem[NET_MAP_ELEMENT_ITEM_USE_UP_COLOR]){return elem[NET_MAP_ELEMENT_ITEM_UP_COLOR];}
if(this.netmap[NET_MAP_USE_UP_COLOR]){return this.netmap[NET_MAP_UP_COLOR];}
return this.config[CONFIG_MAP_UP_COLOR];case DEVICE_STATUS_DOWN_PARTIAL:if(elem[NET_MAP_ELEMENT_ITEM_USE_DOWN_PARTIAL_COLOR]){return elem[NET_MAP_ELEMENT_ITEM_DOWN_PARTIAL_COLOR];}
if(this.netmap[NET_MAP_USE_DOWN_PARTIAL_COLOR]){return this.netmap[NET_MAP_DOWN_PARTIAL_COLOR];}
return this.config[CONFIG_MAP_DOWN_PARTIAL_COLOR];case DEVICE_STATUS_DOWN_COMPLETE:if(elem[NET_MAP_ELEMENT_ITEM_USE_DOWN_COMPLETE_COLOR]){return elem[NET_MAP_ELEMENT_ITEM_DOWN_COMPLETE_COLOR];}
if(this.netmap[NET_MAP_USE_DOWN_COMPLETE_COLOR]){return this.netmap[NET_MAP_DOWN_COMPLETE_COLOR];}
return this.config[CONFIG_MAP_DOWN_COMPLETE_COLOR];case DEVICE_STATUS_ACKED:if(elem[NET_MAP_ELEMENT_ITEM_USE_ACKED_COLOR]){return elem[NET_MAP_ELEMENT_ITEM_ACKED_COLOR];}
if(this.netmap[NET_MAP_USE_ACKED_COLOR]){return this.netmap[NET_MAP_ACKED_COLOR];}
return this.config[CONFIG_MAP_ACKED_COLOR];}
if(elem[NET_MAP_ELEMENT_ITEM_USE_UNKNOWN_COLOR]){return elem[NET_MAP_ELEMENT_ITEM_UNKNOWN_COLOR];}
if(this.netmap[NET_MAP_USE_UNKNOWN_COLOR]){return this.netmap[NET_MAP_UNKNOWN_COLOR];}
return this.config[CONFIG_MAP_UNKNOWN_COLOR];case NETMAP_ITEM_NETWORK:if(elem[NET_MAP_ELEMENT_ITEM_USE_UP_COLOR]){return elem[NET_MAP_ELEMENT_ITEM_UP_COLOR];}
if(this.netmap[NET_MAP_USE_NETWORK_COLOR]){return this.netmap[NET_MAP_NETWORK_COLOR];}
return this.config[CONFIG_MAP_NETWORK_COLOR];case NETMAP_ITEM_SUBMAP:var map=this.netMaps.map[itemID];if(!map){return 0;}
switch(map[NET_MAP_STATUS]){case DEVICE_STATUS_UP:if(elem[NET_MAP_ELEMENT_ITEM_USE_UP_COLOR]){return elem[NET_MAP_ELEMENT_ITEM_UP_COLOR];}
if(this.netmap[NET_MAP_USE_SUBMAP_UP_COLOR]){return this.netmap[NET_MAP_SUBMAP_UP_COLOR];}
return this.config[CONFIG_MAP_SUBMAP_UP_COLOR];case DEVICE_STATUS_DOWN_PARTIAL:if(elem[NET_MAP_ELEMENT_ITEM_USE_DOWN_PARTIAL_COLOR]){return elem[NET_MAP_ELEMENT_ITEM_DOWN_PARTIAL_COLOR];}
if(this.netmap[NET_MAP_USE_SUBMAP_DOWN_PARTIAL_COLOR]){return this.netmap[NET_MAP_SUBMAP_DOWN_PARTIAL_COLOR];}
return this.config[CONFIG_MAP_SUBMAP_DOWN_PARTIAL_COLOR];case DEVICE_STATUS_DOWN_COMPLETE:if(elem[NET_MAP_ELEMENT_ITEM_USE_DOWN_COMPLETE_COLOR]){return elem[NET_MAP_ELEMENT_ITEM_DOWN_COMPLETE_COLOR];}
if(this.netmap[NET_MAP_USE_SUBMAP_DOWN_COMPLETE_COLOR]){return this.netmap[NET_MAP_SUBMAP_DOWN_COMPLETE_COLOR];}
return this.config[CONFIG_MAP_SUBMAP_DOWN_COMPLETE_COLOR];case DEVICE_STATUS_ACKED:if(elem[NET_MAP_ELEMENT_ITEM_USE_ACKED_COLOR]){return elem[NET_MAP_ELEMENT_ITEM_ACKED_COLOR];}
if(this.netmap[NET_MAP_USE_SUBMAP_ACKED_COLOR]){return this.netmap[NET_MAP_SUBMAP_ACKED_COLOR];}
return this.config[CONFIG_MAP_SUBMAP_ACKED_COLOR];}
if(elem[NET_MAP_ELEMENT_ITEM_USE_UNKNOWN_COLOR]){return elem[NET_MAP_ELEMENT_ITEM_UNKNOWN_COLOR];}
if(this.netmap[NET_MAP_USE_SUBMAP_COLOR]){return this.netmap[NET_MAP_SUBMAP_COLOR];}
return this.config[CONFIG_MAP_SUBMAP_COLOR];case NETMAP_ITEM_STATIC:if(elem[NET_MAP_ELEMENT_ITEM_USE_UP_COLOR]){return elem[NET_MAP_ELEMENT_ITEM_UP_COLOR];}
if(this.netmap[NET_MAP_USE_STATIC_COLOR]){return this.netmap[NET_MAP_STATIC_COLOR];}
return this.config[CONFIG_MAP_STATIC_COLOR];}
return 0xffffff;case NETMAP_LINK:if(elem[NET_MAP_ELEMENT_ITEM_USE_DOWN_PARTIAL_COLOR]){return elem[NET_MAP_ELEMENT_ITEM_DOWN_PARTIAL_COLOR];}
if(this.netmap[NET_MAP_USE_LINK_LABEL_COLOR]){return this.netmap[NET_MAP_LINK_LABEL_COLOR];}
return this.config[CONFIG_MAP_LINK_LABEL_COLOR];}}
getLinkColor(elem){if(elem[NET_MAP_ELEMENT_ITEM_USE_UP_COLOR]){return elem[NET_MAP_ELEMENT_ITEM_UP_COLOR];}
if(this.netmap[NET_MAP_USE_LINK_COLOR]){return this.netmap[NET_MAP_LINK_COLOR];}
return this.config[CONFIG_MAP_LINK_COLOR];}
getLinkStyle(elem){const link=this.links.map[elem[NET_MAP_ELEMENT_LINK_ID]];if(!link){return LINK_SOLID;}
const type=this.linkTypes.map[link[LINK_TYPE_ID]];if(!type){return LINK_SOLID;}
return type[LINK_TYPE_STYLE];}
getLinkThickness(elem){if(elem[NET_MAP_ELEMENT_LINK_USE_WIDTH]){return elem[NET_MAP_ELEMENT_LINK_WIDTH];}
const link=this.links.map[elem[NET_MAP_ELEMENT_LINK_ID]];if(!link){return 4;}
const type=this.linkTypes.map[link[LINK_TYPE_ID]];if(!type){return 4;}
return type[LINK_TYPE_THICKNESS];}
getShape(elem){switch(elem[NET_MAP_ELEMENT_TYPE]){case NETMAP_ITEM:if(elem[NET_MAP_ELEMENT_ITEM_USE_SHAPE]){return elem[NET_MAP_ELEMENT_ITEM_SHAPE];}
switch(elem[NET_MAP_ELEMENT_ITEM_TYPE]){case NETMAP_ITEM_DEVICE:if(this.netmap[NET_MAP_USE_DEVICE_SHAPE]){return this.netmap[NET_MAP_DEVICE_SHAPE];}
return this.config[CONFIG_MAP_DEVICE_SHAPE];case NETMAP_ITEM_NETWORK:if(this.netmap[NET_MAP_USE_NETWORK_SHAPE]){return this.netmap[NET_MAP_NETWORK_SHAPE];}
return this.config[CONFIG_MAP_NETWORK_SHAPE];case NETMAP_ITEM_SUBMAP:if(this.netmap[NET_MAP_USE_SUBMAP_SHAPE]){return this.netmap[NET_MAP_SUBMAP_SHAPE];}
return this.config[CONFIG_MAP_SUBMAP_SHAPE];case NETMAP_ITEM_STATIC:if(this.netmap[NET_MAP_USE_STATIC_SHAPE]){return this.netmap[NET_MAP_STATIC_SHAPE];}
return this.config[CONFIG_MAP_STATIC_SHAPE];}}
return NETMAP_SHAPE_RECT;}
getFont(elem){if(elem[NET_MAP_ELEMENT_ITEM_USE_FONT]){return elem[NET_MAP_ELEMENT_ITEM_FONT];}
switch(elem[NET_MAP_ELEMENT_TYPE]){case NETMAP_ITEM:switch(elem[NET_MAP_ELEMENT_ITEM_TYPE]){case NETMAP_ITEM_DEVICE:if(this.netmap[NET_MAP_USE_DEVICE_FONT]){return this.netmap[NET_MAP_DEVICE_FONT];}
return this.config[CONFIG_MAP_DEVICE_FONT];case NETMAP_ITEM_NETWORK:if(this.netmap[NET_MAP_USE_NETWORK_FONT]){return this.netmap[NET_MAP_NETWORK_FONT];}
return this.config[CONFIG_MAP_NETWORK_FONT];case NETMAP_ITEM_SUBMAP:if(this.netmap[NET_MAP_USE_SUBMAP_FONT]){return this.netmap[NET_MAP_SUBMAP_FONT];}
return this.config[CONFIG_MAP_SUBMAP_FONT];case NETMAP_ITEM_STATIC:if(this.netmap[NET_MAP_USE_STATIC_FONT]){return this.netmap[NET_MAP_STATIC_FONT];}
return this.config[CONFIG_MAP_STATIC_FONT];}
case NETMAP_LINK:if(this.netmap[NET_MAP_USE_LINK_FONT]){return this.netmap[NET_MAP_LINK_FONT];}
return this.config[CONFIG_MAP_LINK_FONT];}
return this.config[CONFIG_MAP_DEVICE_FONT];}
getImageID(elem){if(elem[NET_MAP_ELEMENT_ITEM_USE_IMAGE]){return elem[NET_MAP_ELEMENT_ITEM_IMAGE];}
switch(elem[NET_MAP_ELEMENT_TYPE]){case NETMAP_ITEM:switch(elem[NET_MAP_ELEMENT_ITEM_TYPE]){case NETMAP_ITEM_DEVICE:var device=this.devices.map[elem[NET_MAP_ELEMENT_ITEM_ID]];if(device){var deviceType=this.deviceTypes.map[device[DEVICE_TYPE_ID]];if(deviceType){return deviceType[DEVICE_TYPE_IMAGE_ID];}}}}
return BADID;}
getImageScale(elem){if(elem[NET_MAP_ELEMENT_ITEM_USE_IMAGE_SCALE]){return elem[NET_MAP_ELEMENT_ITEM_IMAGE_SCALE];}
switch(elem[NET_MAP_ELEMENT_TYPE]){case NETMAP_ITEM:switch(elem[NET_MAP_ELEMENT_ITEM_TYPE]){case NETMAP_ITEM_DEVICE:var device=this.devices.map[elem[NET_MAP_ELEMENT_ITEM_ID]];if(device){var deviceType=this.deviceTypes.map[device[DEVICE_TYPE_ID]];if(deviceType){return deviceType[DEVICE_TYPE_IMAGE_SCALE];}}}}
return 100;}
formatColor(c){const r=((c>>0)&0xff);const g=((c>>8)&0xff);const b=((c>>16)&0xff);return`rgb(${r},${g},${b})`;}
formatFadeColor(c){let r=((c>>0)&0xff);let g=((c>>8)&0xff);let b=((c>>16)&0xff);r=Math.round((r+255)/2);g=Math.round((g+255)/2);b=Math.round((b+255)/2);return`rgb(${r},${g},${b})`;}
prepareText(label){const lines=label.trim().split("\n");let w=0;for(let i=0;i<lines.length;++i){if(w<lines[i].length){w=lines[i].length;}}
return{lines:lines,w:w};}
createText(elem,preparedText){const font=this.getFont(elem);const text=this.el("text",{style:"font-size: "+font[0]+"px"});for(let i=0;i<preparedText.lines.length;++i){const props={x:0,"text-anchor":"middle",dy:"1em"};const tspan=this.el("tspan",props);tspan.textContent=preparedText.lines[i];text.appendChild(tspan);}
return text;}
createRect(elem,w,h){w+=10;h+=10;return this.el("rect",{x:"-"+(w/2),y:"-"+(h/2),width:w,height:h,rx:5,ry:5,fill:this.formatFadeColor(this.getLabelBackgroundColor(elem))});}
createDiamond(elem,w,h){const x=w+8;const y=h+8;return this.el("polygon",{points:-x+","+0+" "+
0+","+-y+" "+
x+","+0+" "+
0+","+y,fill:this.formatFadeColor(this.getLabelBackgroundColor(elem)),});}
createOval(elem,w,h){w*=1.4;h*=1.4;w+=10;h+=10;return this.el("ellipse",{rx:(w/2),ry:(h/2),fill:this.formatFadeColor(this.getLabelBackgroundColor(elem))});}
createCloud(elem,w,h){w*=1.4;h*=2.5;const svg=this.el("svg",{viewBox:"0 0 20 10",x:"-"+(w/2),y:"-"+(h/2),width:w,height:h,preserveAspectRatio:"none",});svg.appendChild(this.el("path",{d:"M4 7  A 2.5 2.5 0 1 1 4 3  A 4 4 0 0 1 10 2  A 4 4 0 0 1 16 3  A 2.5 2.5 0 1 1 16 7  A 4 4 0 0 1 10 8  A 4 4 0 0 1 4 7",fill:this.formatFadeColor(this.getLabelBackgroundColor(elem)),}));return svg;}
createHexagon(elem,w,h){const x=w/2+4;const y=h/2+8;return this.el("polygon",{points:(-x-(x/2))+","+0+" "+
-x+","+-y+" "+
x+","+-y+" "+
(x+(x/2))+","+0+" "+
x+","+y+" "+
-x+","+y,fill:this.formatFadeColor(this.getLabelBackgroundColor(elem)),});}
createHexagon2(elem,w,h){const x=w/2+8;const y=h/2+4;return this.el("polygon",{points:-x+","+-y+" "+
0+","+(-y-(y/2))+" "+
x+","+-y+" "+
x+","+y+" "+
0+","+(y+(y/2))+" "+
-x+","+y,fill:this.formatFadeColor(this.getLabelBackgroundColor(elem)),});}
createTriangle(elem,w,h){const cy=5;return this.el("polygon",{points:(-(w/2)-(h/1.4))+","+(cy+(h/2))+" "+
0+","+(cy-(h/2)-w)+" "+
((w/2)+(h/1.4))+","+(cy+(h/2)),fill:this.formatFadeColor(this.getLabelBackgroundColor(elem)),});}
createTriangle2(elem,w,h){const cy=-5;return this.el("polygon",{points:(-(w/2)-(h/1.4))+","+(cy-(h/2))+" "+
0+","+(cy+(h/2)+w)+" "+
((w/2)+(h/1.4))+","+(cy-(h/2)),fill:this.formatFadeColor(this.getLabelBackgroundColor(elem)),});}
createShape(elem,w,h){switch(this.getShape(elem)){case NETMAP_SHAPE_DIAMOND:return this.createDiamond(elem,w,h);case NETMAP_SHAPE_OVAL:return this.createOval(elem,w,h);case NETMAP_SHAPE_CLOUD:return this.createCloud(elem,w,h);case NETMAP_SHAPE_HEXAGON:return this.createHexagon(elem,w,h);case NETMAP_SHAPE_HEXAGON2:return this.createHexagon2(elem,w,h);case NETMAP_SHAPE_TRIANGLE:return this.createTriangle(elem,w,h);case NETMAP_SHAPE_TRIANGLE2:return this.createTriangle2(elem,w,h);default:return this.createRect(elem,w,h);}}
pitagor(x,y){return Math.sqrt(x*x+y*y);}
getAngle(x,y){if(x==0){x=0.000001;}
let ang=Math.atan(y/x);if(x<0.0){ang+=Math.PI;}
return ang;}
rotate(x,y,angle){const a=this.getAngle(x,y)+angle;const len=this.pitagor(x,y);return{x:len*Math.cos(a),y:len*Math.sin(a)};}
createZig(elem,x1,y1,x2,y2){const len=this.pitagor(x1-x2,y1-y2);const width=this.getLinkThickness(elem)*2;const ang=this.getAngle(x2-x1,y2-y1);const rrr=(x,y)=>{const r=this.rotate(x,y,ang);return(x1+r.x)+" "+(y1+r.y)+" ";};var points=x1+" "+y1+" "+
rrr(0.65*len-width*3,0.1*len-width)+
rrr(0.35*len-width,-0.1*len-width)+
rrr(len,0)+
rrr(0.35*len+width*3,-0.1*len+width)+
rrr(0.65*len+width,0.1*len+width);return this.el("polygon",{points:points,fill:this.formatColor(this.getLinkColor(elem)),});}
createBox(el,x,y,nextNode,force){const pt=this.prepareText(this.getLabel(el.obj));if(!force&&pt.lines.length<=1&&pt.w==0){return;}
const g=this.el("g",{transform:"translate("+x+","+y+")"});el.node=this.svg.insertBefore(g,nextNode);const text=this.createText(el.obj,pt);g.appendChild(text);const bbox=text.getBBox();let w=bbox.width;let h=bbox.height;let iw=0;let ih=0;if(el.loadedImage){const scale=this.getImageScale(el.obj)/100;if(el.loadedImage.width&&el.loadedImage.height){iw=el.loadedImage.width*scale;ih=el.loadedImage.height*scale;}
else{iw=50*scale;ih=50*scale;}
if(w<iw){w=iw;}
h+=ih;const img=this.el("image",{x:-iw/2,y:-h/2,width:iw,height:ih,});img.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",el.loadedImage.src);g.appendChild(img);}
text.setAttribute("y",-h/2+ih);g.insertBefore(this.createShape(el.obj,w,h),text);return[w,h];}
createLink(el,nextNode){const item1=this.itemEls[el.obj[NET_MAP_ELEMENT_LINK_FROM]];const item2=this.itemEls[el.obj[NET_MAP_ELEMENT_LINK_TO]];if(!item1||!item2){return;}
const x1=item1.obj[NET_MAP_ELEMENT_ITEM_X];const y1=item1.obj[NET_MAP_ELEMENT_ITEM_Y];const x2=item2.obj[NET_MAP_ELEMENT_ITEM_X];const y2=item2.obj[NET_MAP_ELEMENT_ITEM_Y];let link;const params={};const thickness=this.getLinkThickness(el.obj);switch(this.getLinkStyle(el.obj)){case LINK_DASHED:params["stroke-dasharray"]=(thickness*5)+" "+(thickness*5);params["stroke-linecap"]="round";break;case LINK_DOTTED:params["stroke-dasharray"]="0 "+thickness*2;params["stroke-linecap"]="round";break;};switch(this.getLinkStyle(el.obj)){case LINK_SOLID:case LINK_DASHED:case LINK_DOTTED:params["stroke-width"]=thickness;params.stroke=this.formatColor(this.getLinkColor(el.obj));params.x1=x1;params.y1=y1;params.x2=x2;params.y2=y2;link=this.el("line",params);break;case LINK_ZIGZAG:link=this.createZig(el.obj,x1,y1,x2,y2);break;};if(!link){return;}
el.link=this.svg.insertBefore(link,nextNode);this.createBox(el,(x1+x2)/2,(y1+y2)/2,nextNode,false);}
firstDraw(){if(this.loaded){return;}
if(!this.config||!this.netmap||!this.netMaps.fresh||!this.devices.fresh||!this.deviceTypes.fresh||!this.links.fresh||!this.linkTypes.fresh||!this.elements.fresh){return;}
this.loaded=true;this.redraw();}
redraw(){if(!this.loaded){return;}
this.svg.setAttribute("style","background: "+this.formatColor(this.getBackgroundColor()));for(let id in this.linkEls){this.updateElement(this.linkEls[id]);}
for(let id in this.itemEls){this.updateElement(this.itemEls[id]);}}
onNetMap(obj,more){this.firstDraw();const x=this.objEls[obj[STD_ID]];if(!x){return;}
for(var i=0;i<x.length;++i){this.updateElement(x[i]);}}
onDevice(obj,more){this.firstDraw();const x=this.objEls[obj[STD_ID]];if(!x){return;}
for(var i=0;i<x.length;++i){this.updateElement(x[i]);}}
onDeviceType(obj,more){this.firstDraw();if(!this.loaded){return;}
for(let id in this.itemEls){const item=this.itemEls[id];if(item.obj[NET_MAP_ELEMENT_ITEM_TYPE]!=NETMAP_ITEM_DEVICE){continue;}
const d=this.devices.map[item.obj[NET_MAP_ELEMENT_ITEM_ID]];if(!d){continue;}
if(d[DEVICE_TYPE_ID]!=obj[STD_ID]){continue;}
this.updateElement(item);}}
onLink(obj,more){this.firstDraw();const x=this.objEls[obj[STD_ID]];if(!x){return;}
for(var i=0;i<x.length;++i){this.updateElement(x[i]);}}
onLinkType(obj,more){this.firstDraw();if(!this.loaded){return;}
for(let id in this.linkEls){const link=this.linkEls[id];const l=this.links.map[link.obj[NET_MAP_ELEMENT_LINK_ID]];if(!l){continue;}
if(l[LINK_TYPE_ID]!=obj[STD_ID]){continue;}
this.updateElement(link);}}
onElementImage(el,data,name){if(el.image){el.image.onload=null;el.image=null;}
el.loadedImage=null;if(!data){this.updateElement(el);return;}
el.image=new Image();el.image.onload=()=>{el.loadedImage=el.image;this.updateElement(el);};el.image.src=this.imageEncode(data,name);}
updateElement(el){if(!this.loaded){return;}
const newImageID=this.getImageID(el.obj);if(!el.imageID){el.imageID=BADID;}
if(el.imageID!=newImageID){if(!el.imageLstn){el.imageLstn=(data,name)=>{this.onElementImage(el,data,name);};}
fileCache.cancel(el.imageID,el.imageLstn);el.imageID=newImageID;fileCache.get(el.imageID,el.imageLstn);}
let nextNode=null;if(el.link){nextNode=el.link.nextSibling;el.link.parentNode.removeChild(el.link);el.link=null;}
if(el.node){nextNode=el.node.nextSibling;el.node.parentNode.removeChild(el.node);el.node=null;}
if(el.obj[NET_MAP_ELEMENT_TYPE]==NETMAP_LINK){this.createLink(el,nextNode);}
else{let x=el.obj[NET_MAP_ELEMENT_ITEM_X];let y=el.obj[NET_MAP_ELEMENT_ITEM_Y];if(el.x!=x||el.y!=y){for(let id in this.linkEls){const lel=this.linkEls[id];if(lel.obj[NET_MAP_ELEMENT_LINK_FROM]==el.obj[STD_ID]||lel.obj[NET_MAP_ELEMENT_LINK_TO]==el.obj[STD_ID]){this.updateElement(lel);}}}
const size=this.createBox(el,x,y,nextNode,true);el.x=x;el.y=y;x+=size[0];y+=size[1];if(x>this.maxx||y>this.maxy){if(x>this.maxx){this.maxx=x;}
if(y>this.maxy){this.maxy=y;}
this.svg.setAttribute("width",this.maxx);this.svg.setAttribute("height",this.maxy);this.svg.setAttribute("viewBox","0 0 "+this.maxx+" "+this.maxy);}}}
removeElement(el){if(!el){return;}
if(el.link){el.link.parentNode.removeChild(el.link);el.link=null;}
if(el.node){el.node.parentNode.removeChild(el.node);el.node=null;}}
addObjEl(el){if(!el){return;}
let objID;if(el.obj[NET_MAP_ELEMENT_TYPE]==NETMAP_ITEM){objID=el.obj[NET_MAP_ELEMENT_ITEM_ID];}
else{objID=el.obj[NET_MAP_ELEMENT_LINK_ID];}
let x=this.objEls[objID];if(!x){x=[];this.objEls[objID]=x;}
x.push(el);}
removeObjEl(el){if(!el){return;}
let objID;if(el.obj[NET_MAP_ELEMENT_TYPE]==NETMAP_ITEM){objID=el.obj[NET_MAP_ELEMENT_ITEM_ID];}
else{objID=el.obj[NET_MAP_ELEMENT_LINK_ID];}
const x=this.objEls[objID];if(!x){return;}
const idx=x.indexOf(el);if(idx>=0){x.splice(idx,1);}
if(!x.length){delete this.objEls[objID];}}
onElement(obj,more){const id=obj[STD_ID];++this.elementCount;if(obj[STD_DEAD]){debug("remove element "+id);this.removeElement(this.itemEls[id]);this.removeElement(this.linkEls[id]);return;}
if(obj[NET_MAP_ELEMENT_MAP_ID]!=this.netmap[STD_ID]){return;}
if(obj[NET_MAP_ELEMENT_TYPE]==NETMAP_ITEM){let x=this.itemEls[id];if(!x){x={obj:obj};this.itemEls[id]=x;}
this.addObjEl(x);this.updateElement(x);}
else{let x=this.linkEls[id];if(!x){x={obj:obj};this.linkEls[id]=x;}
this.addObjEl(x);this.updateElement(x);}
if(this.elements.fresh&&!more){this.firstDraw();}}
create(){if(!document.createElementNS){return null;}
this.svg=this.el("svg",{version:"1.1"});if(!this.svg){return null;}
this.defs=this.el("defs");this.svg.appendChild(this.defs);this.configLstn=obj=>{this.config=this.configHolder.obj;this.firstDraw();this.redraw();};this.configHolder=new ObjectHolder({path:[103,3]});this.configHolder.listen(this.configLstn);this.netMapLstn=(obj,more)=>{this.onNetMap(obj,more);};this.netMaps=getObjectMap([103,10]);this.netMaps.listen(this.netMapLstn,false);this.deviceLstn=(obj,more)=>{this.onDevice(obj,more);};this.devices=getObjectMap([103,15]);this.devices.listen(this.deviceLstn,false);this.deviceTypeLstn=(obj,more)=>{this.onDeviceType(obj,more);};this.deviceTypes=getObjectMap([103,14]);this.deviceTypes.listen(this.deviceTypeLstn,false);this.linkLstn=(obj,more)=>{this.onLink(obj,more);};this.links=getObjectMap([103,31]);this.links.listen(this.linkLstn,false);this.linkTypeLstn=(obj,more)=>{this.onLinkType(obj,more);};this.linkTypes=getObjectMap([103,34]);this.linkTypes.listen(this.linkTypeLstn,false);return this.svg;}
setBackground(data,name){if(this.backgroundImage){this.backgroundImage.onload=null;this.backgroundImage=null;}
if(this.backgroundPattern){this.backgroundPattern.parentNode.removeChild(this.backgroundPattern);this.backgroundPattern=null;}
if(this.backgroundRect){this.backgroundRect.parentNode.removeChild(this.backgroundRect);this.backgroundRect=null;}
if(!data){return;}
const src=this.imageEncode(data,name);this.backgroundImage=new Image();this.backgroundImage.src=src;this.backgroundImage.onload=()=>{const w=this.backgroundImage.width;const h=this.backgroundImage.height;const scale=this.imageScale/100;this.backgroundPattern=this.el("pattern",{id:"background",patternUnits:"userSpaceOnUse",width:w*scale,height:h*scale,});const img=this.el("image",{width:w*scale,height:h*scale});img.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",src);this.backgroundPattern.appendChild(img);this.defs.appendChild(this.backgroundPattern);this.backgroundRect=this.el("rect",{width:this.imageTile?"100%":w*scale,height:this.imageTile?"100%":h*scale,fill:"url(\"#background\")"});this.svg.insertBefore(this.backgroundRect,this.defs.nextSibling);};}
load(obj){if(!this.svg){return;}
if(!this.netmap){this.elementCount=0;this.elementLstn=(obj,more)=>{this.onElement(obj,more);};this.elements=getObjectMap([103,74]);this.elements.listen(this.elementLstn,false);this.netmap=obj;for(let i in this.elements.map){this.onElement(this.elements.map[i],false);}
this.firstDraw();}
if(!this.imageLstn){this.imageLstn=(data,name)=>{this.setBackground(data,name);};}
if(this.imageID!=this.netmap[NET_MAP_IMAGE_ID]||this.imageScale!=this.netmap[NET_MAP_IMAGE_SCALE]||this.imageTile!=this.netmap[NET_MAP_IMAGE_TILE]){fileCache.cancel(this.imageID,this.imageLstn);this.imageID=this.netmap[NET_MAP_IMAGE_ID];this.imageScale=this.netmap[NET_MAP_IMAGE_SCALE];this.imageTile=this.netmap[NET_MAP_IMAGE_TILE];fileCache.get(this.imageID,this.imageLstn);}
this.redraw();}
destroy(){if(!this.svg){return;}
this.configHolder?.unlisten(this.configLstn);this.netMaps.unlisten(this.netMapLstn);this.devices.unlisten(this.deviceLstn);this.deviceTypes.unlisten(this.deviceTypeLstn);this.links.unlisten(this.linkLstn);this.linkTypes.unlisten(this.linkTypeLstn);this.elements.unlisten(this.elementLstn,false);}}
types.networkmap=inherit(types.def);types.networkmap.view=function(attrs){return new NetworkMapView(attrs);};
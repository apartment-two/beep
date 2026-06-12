var El=Object.defineProperty;var yl=(i,t,e)=>t in i?El(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var to=(i,t,e)=>yl(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ea="169",Al=0,eo=1,Tl=2,Tc=1,wc=2,nn=3,Ke=0,ye=1,He=2,_n=0,li=1,no=2,io=3,ro=4,wl=5,Dn=100,Rl=101,Cl=102,Pl=103,Ll=104,Dl=200,Il=201,Ul=202,Nl=203,Ds=204,Is=205,Fl=206,Ol=207,Bl=208,zl=209,Hl=210,Gl=211,Vl=212,kl=213,Wl=214,Us=0,Ns=1,Fs=2,fi=3,Os=4,Bs=5,zs=6,Hs=7,ya=0,Xl=1,ql=2,vn=0,Yl=1,Kl=2,Zl=3,jl=4,Jl=5,$l=6,Ql=7,Rc=300,di=301,pi=302,Gs=303,Vs=304,Br=306,ks=1e3,Un=1001,Ws=1002,he=1003,tu=1004,Zi=1005,Ge=1006,Kr=1007,Nn=1008,an=1009,Cc=1010,Pc=1011,Oi=1012,Aa=1013,Bn=1014,Ye=1015,Vi=1016,Ta=1017,wa=1018,mi=1020,Lc=35902,Dc=1021,Ic=1022,ke=1023,Uc=1024,Nc=1025,ui=1026,bi=1027,Ra=1028,Ca=1029,Fc=1030,Pa=1031,La=1033,xr=33776,Mr=33777,Sr=33778,Er=33779,Xs=35840,qs=35841,Ys=35842,Ks=35843,Zs=36196,js=37492,Js=37496,$s=37808,Qs=37809,ta=37810,ea=37811,na=37812,ia=37813,ra=37814,sa=37815,aa=37816,oa=37817,ca=37818,la=37819,ua=37820,ha=37821,yr=36492,fa=36494,da=36495,Oc=36283,pa=36284,ma=36285,ba=36286,eu=3200,nu=3201,Bc=0,iu=1,gn="",Xe="srgb",Mn="srgb-linear",Da="display-p3",zr="display-p3-linear",Rr="linear",te="srgb",Cr="rec709",Pr="p3",Vn=7680,so=519,ru=512,su=513,au=514,zc=515,ou=516,cu=517,lu=518,uu=519,ga=35044,ao="300 es",rn=2e3,Lr=2001;class _i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oo=1234567;const Ii=Math.PI/180,Bi=180/Math.PI;function sn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(me[i&255]+me[i>>8&255]+me[i>>16&255]+me[i>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function Ia(i,t){return(i%t+t)%t}function hu(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function fu(i,t,e){return i!==t?(e-i)/(t-i):0}function Ui(i,t,e){return(1-e)*i+e*t}function du(i,t,e,n){return Ui(i,t,1-Math.exp(-e*n))}function pu(i,t=1){return t-Math.abs(Ia(i,t*2)-t)}function mu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function bu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _u(i,t){return i+Math.random()*(t-i)}function vu(i){return i*(.5-Math.random())}function xu(i){i!==void 0&&(oo=i);let t=oo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mu(i){return i*Ii}function Su(i){return i*Bi}function Eu(i){return(i&i-1)===0&&i!==0}function yu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Au(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tu(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),p=o((t-n)/2),m=s((n-t)/2),_=o((n-t)/2);switch(r){case"XYX":i.set(a*u,c*h,c*p,a*l);break;case"YZY":i.set(c*p,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*p,a*u,a*l);break;case"XZX":i.set(a*u,c*_,c*m,a*l);break;case"YXY":i.set(c*m,a*u,c*_,a*l);break;case"ZYZ":i.set(c*_,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const co={DEG2RAD:Ii,RAD2DEG:Bi,generateUUID:sn,clamp:xe,euclideanModulo:Ia,mapLinear:hu,inverseLerp:fu,lerp:Ui,damp:du,pingpong:pu,smoothstep:mu,smootherstep:bu,randInt:gu,randFloat:_u,randFloatSpread:vu,seededRandom:xu,degToRad:Mu,radToDeg:Su,isPowerOfTwo:Eu,ceilPowerOfTwo:yu,floorPowerOfTwo:Au,setQuaternionFromProperEuler:Tu,normalize:Zt,denormalize:Ve};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,n,r,s,o,a,c,l){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],p=n[2],m=n[5],_=n[8],M=r[0],d=r[3],f=r[6],A=r[1],S=r[4],y=r[7],N=r[2],R=r[5],T=r[8];return s[0]=o*M+a*A+c*N,s[3]=o*d+a*S+c*R,s[6]=o*f+a*y+c*T,s[1]=l*M+u*A+h*N,s[4]=l*d+u*S+h*R,s[7]=l*f+u*y+h*T,s[2]=p*M+m*A+_*N,s[5]=p*d+m*S+_*R,s[8]=p*f+m*y+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,p=a*c-u*s,m=l*s-o*c,_=e*h+n*p+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=h*M,t[1]=(r*l-u*n)*M,t[2]=(a*n-r*o)*M,t[3]=p*M,t[4]=(u*e-r*c)*M,t[5]=(r*s-a*e)*M,t[6]=m*M,t[7]=(n*c-l*e)*M,t[8]=(o*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zr.makeScale(t,e)),this}rotate(t){return this.premultiply(Zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new Lt;function Hc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wu(){const i=zi("canvas");return i.style.display="block",i}const lo={};function Ar(i){i in lo||(lo[i]=!0,console.warn(i))}function Ru(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Cu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const uo=new Lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ho=new Lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Si={[Mn]:{transfer:Rr,primaries:Cr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Xe]:{transfer:te,primaries:Cr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zr]:{transfer:Rr,primaries:Pr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ho),fromReference:i=>i.applyMatrix3(uo)},[Da]:{transfer:te,primaries:Pr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ho),fromReference:i=>i.applyMatrix3(uo).convertLinearToSRGB()}},Lu=new Set([Mn,zr]),Yt={enabled:!0,_workingColorSpace:Mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Lu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Si[t].toReference,r=Si[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Si[i].primaries},getTransfer:function(i){return i===gn?Rr:Si[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Si[t].luminanceCoefficients)}};function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let kn;class Du{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{kn===void 0&&(kn=zi("canvas")),kn.width=t.width,kn.height=t.height;const n=kn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=kn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Iu=0;class Gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jr(r[o].image)):s.push(Jr(r[o]))}else s=Jr(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Du.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uu=0;class pe extends _i{constructor(t=pe.DEFAULT_IMAGE,e=pe.DEFAULT_MAPPING,n=Un,r=Un,s=Ge,o=Nn,a=ke,c=an,l=pe.DEFAULT_ANISOTROPY,u=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=sn(),this.name="",this.source=new Gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ks:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case Ws:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ks:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case Ws:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}pe.DEFAULT_IMAGE=null;pe.DEFAULT_MAPPING=Rc;pe.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,r=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],p=c[1],m=c[5],_=c[9],M=c[2],d=c[6],f=c[10];if(Math.abs(u-p)<.01&&Math.abs(h-M)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+M)<.1&&Math.abs(_+d)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,y=(m+1)/2,N=(f+1)/2,R=(u+p)/4,T=(h+M)/4,I=(_+d)/4;return S>y&&S>N?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=R/n,s=T/n):y>N?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=R/r,s=I/r):N<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),n=T/s,r=I/s),this.set(n,r,s,e),this}let A=Math.sqrt((d-_)*(d-_)+(h-M)*(h-M)+(p-u)*(p-u));return Math.abs(A)<.001&&(A=1),this.x=(d-_)/A,this.y=(h-M)/A,this.z=(p-u)/A,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nu extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new pe(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Nu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vc extends pe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=he,this.minFilter=he,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fu extends pe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=he,this.minFilter=he,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const p=s[o+0],m=s[o+1],_=s[o+2],M=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=_,t[e+3]=M;return}if(h!==M||c!==p||l!==m||u!==_){let d=1-a;const f=c*p+l*m+u*_+h*M,A=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const N=Math.sqrt(S),R=Math.atan2(N,f*A);d=Math.sin(d*R)/N,a=Math.sin(a*R)/N}const y=a*A;if(c=c*d+p*y,l=l*d+m*y,u=u*d+_*y,h=h*d+M*y,d===1-a){const N=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=N,l*=N,u*=N,h*=N}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],p=s[o+1],m=s[o+2],_=s[o+3];return t[e]=a*_+u*h+c*m-l*p,t[e+1]=c*_+u*p+l*h-a*m,t[e+2]=l*_+u*m+a*p-c*h,t[e+3]=u*_-a*h-c*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),p=c(n/2),m=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=p*u*h+l*m*_,this._y=l*m*h-p*u*_,this._z=l*u*_+p*m*h,this._w=l*u*h-p*m*_;break;case"YXZ":this._x=p*u*h+l*m*_,this._y=l*m*h-p*u*_,this._z=l*u*_-p*m*h,this._w=l*u*h+p*m*_;break;case"ZXY":this._x=p*u*h-l*m*_,this._y=l*m*h+p*u*_,this._z=l*u*_+p*m*h,this._w=l*u*h-p*m*_;break;case"ZYX":this._x=p*u*h-l*m*_,this._y=l*m*h+p*u*_,this._z=l*u*_-p*m*h,this._w=l*u*h+p*m*_;break;case"YZX":this._x=p*u*h+l*m*_,this._y=l*m*h+p*u*_,this._z=l*u*_-p*m*h,this._w=l*u*h-p*m*_;break;case"XZY":this._x=p*u*h-l*m*_,this._y=l*m*h-p*u*_,this._z=l*u*_+p*m*h,this._w=l*u*h+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],p=n+a+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,p=Math.sin(e*u)/l;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $r.copy(this).projectOnVector(t),this.sub($r)}reflect(t){return this.sub($r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $r=new D,fo=new ki;class Sn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Oe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Oe):Oe.fromBufferAttribute(s,o),Oe.applyMatrix4(t.matrixWorld),this.expandByPoint(Oe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(t.matrixWorld),this.union(ji)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oe),Oe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ei),Ji.subVectors(this.max,Ei),Wn.subVectors(t.a,Ei),Xn.subVectors(t.b,Ei),qn.subVectors(t.c,Ei),ln.subVectors(Xn,Wn),un.subVectors(qn,Xn),yn.subVectors(Wn,qn);let e=[0,-ln.z,ln.y,0,-un.z,un.y,0,-yn.z,yn.y,ln.z,0,-ln.x,un.z,0,-un.x,yn.z,0,-yn.x,-ln.y,ln.x,0,-un.y,un.x,0,-yn.y,yn.x,0];return!Qr(e,Wn,Xn,qn,Ji)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,Wn,Xn,qn,Ji))?!1:($i.crossVectors(ln,un),e=[$i.x,$i.y,$i.z],Qr(e,Wn,Xn,qn,Ji))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Je=[new D,new D,new D,new D,new D,new D,new D,new D],Oe=new D,ji=new Sn,Wn=new D,Xn=new D,qn=new D,ln=new D,un=new D,yn=new D,Ei=new D,Ji=new D,$i=new D,An=new D;function Qr(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){An.fromArray(i,s);const a=r.x*Math.abs(An.x)+r.y*Math.abs(An.y)+r.z*Math.abs(An.z),c=t.dot(An),l=e.dot(An),u=n.dot(An);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ou=new Sn,yi=new D,ts=new D;class Wi{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ou.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yi.subVectors(t,this.center);const e=yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(yi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ts.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yi.copy(t.center).add(ts)),this.expandByPoint(yi.copy(t.center).sub(ts))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $e=new D,es=new D,Qi=new D,hn=new D,ns=new D,tr=new D,is=new D;class kc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$e)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$e.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($e.copy(this.origin).addScaledVector(this.direction,e),$e.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){es.copy(t).add(e).multiplyScalar(.5),Qi.copy(e).sub(t).normalize(),hn.copy(this.origin).sub(es);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Qi),a=hn.dot(this.direction),c=-hn.dot(Qi),l=hn.lengthSq(),u=Math.abs(1-o*o);let h,p,m,_;if(u>0)if(h=o*c-a,p=o*a-c,_=s*u,h>=0)if(p>=-_)if(p<=_){const M=1/u;h*=M,p*=M,m=h*(h+o*p+2*a)+p*(o*h+p+2*c)+l}else p=s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*c)+l;else p=-s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*c)+l;else p<=-_?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+p*(p+2*c)+l):p<=_?(h=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+l):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+p*(p+2*c)+l);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(es).addScaledVector(Qi,p),m}intersectSphere(t,e){$e.subVectors(t.center,this.origin);const n=$e.dot(this.direction),r=$e.dot($e)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,r=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,r=(t.min.x-p.x)*l),u>=0?(s=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(s=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-p.z)*h,c=(t.max.z-p.z)*h):(a=(t.max.z-p.z)*h,c=(t.min.z-p.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,$e)!==null}intersectTriangle(t,e,n,r,s){ns.subVectors(e,t),tr.subVectors(n,t),is.crossVectors(ns,tr);let o=this.direction.dot(is),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hn.subVectors(this.origin,t);const c=a*this.direction.dot(tr.crossVectors(hn,tr));if(c<0)return null;const l=a*this.direction.dot(ns.cross(hn));if(l<0||c+l>o)return null;const u=-a*hn.dot(is);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,r,s,o,a,c,l,u,h,p,m,_,M,d){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,h,p,m,_,M,d)}set(t,e,n,r,s,o,a,c,l,u,h,p,m,_,M,d){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=p,f[3]=m,f[7]=_,f[11]=M,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Yn.setFromMatrixColumn(t,0).length(),s=1/Yn.setFromMatrixColumn(t,1).length(),o=1/Yn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const p=o*u,m=o*h,_=a*u,M=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+_*l,e[5]=p-M*l,e[9]=-a*c,e[2]=M-p*l,e[6]=_+m*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*u,m=c*h,_=l*u,M=l*h;e[0]=p+M*a,e[4]=_*a-m,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-_,e[6]=M+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*u,m=c*h,_=l*u,M=l*h;e[0]=p-M*a,e[4]=-o*h,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*u,e[9]=M-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*u,m=o*h,_=a*u,M=a*h;e[0]=c*u,e[4]=_*l-m,e[8]=p*l+M,e[1]=c*h,e[5]=M*l+p,e[9]=m*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,m=o*l,_=a*c,M=a*l;e[0]=c*u,e[4]=M-p*h,e[8]=_*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*h+_,e[10]=p-M*h}else if(t.order==="XZY"){const p=o*c,m=o*l,_=a*c,M=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=p*h+M,e[5]=o*u,e[9]=m*h-_,e[2]=_*h-m,e[6]=a*u,e[10]=M*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bu,t,zu)}lookAt(t,e,n){const r=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),fn.crossVectors(n,we),fn.lengthSq()===0&&(Math.abs(n.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),fn.crossVectors(n,we)),fn.normalize(),er.crossVectors(we,fn),r[0]=fn.x,r[4]=er.x,r[8]=we.x,r[1]=fn.y,r[5]=er.y,r[9]=we.y,r[2]=fn.z,r[6]=er.z,r[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],p=n[9],m=n[13],_=n[2],M=n[6],d=n[10],f=n[14],A=n[3],S=n[7],y=n[11],N=n[15],R=r[0],T=r[4],I=r[8],J=r[12],b=r[1],x=r[5],z=r[9],B=r[13],k=r[2],K=r[6],H=r[10],j=r[14],V=r[3],at=r[7],it=r[11],mt=r[15];return s[0]=o*R+a*b+c*k+l*V,s[4]=o*T+a*x+c*K+l*at,s[8]=o*I+a*z+c*H+l*it,s[12]=o*J+a*B+c*j+l*mt,s[1]=u*R+h*b+p*k+m*V,s[5]=u*T+h*x+p*K+m*at,s[9]=u*I+h*z+p*H+m*it,s[13]=u*J+h*B+p*j+m*mt,s[2]=_*R+M*b+d*k+f*V,s[6]=_*T+M*x+d*K+f*at,s[10]=_*I+M*z+d*H+f*it,s[14]=_*J+M*B+d*j+f*mt,s[3]=A*R+S*b+y*k+N*V,s[7]=A*T+S*x+y*K+N*at,s[11]=A*I+S*z+y*H+N*it,s[15]=A*J+S*B+y*j+N*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],p=t[10],m=t[14],_=t[3],M=t[7],d=t[11],f=t[15];return _*(+s*c*h-r*l*h-s*a*p+n*l*p+r*a*m-n*c*m)+M*(+e*c*m-e*l*p+s*o*p-r*o*m+r*l*u-s*c*u)+d*(+e*l*h-e*a*m-s*o*h+n*o*m+s*a*u-n*l*u)+f*(-r*a*u-e*c*h+e*a*p+r*o*h-n*o*p+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],p=t[10],m=t[11],_=t[12],M=t[13],d=t[14],f=t[15],A=h*d*l-M*p*l+M*c*m-a*d*m-h*c*f+a*p*f,S=_*p*l-u*d*l-_*c*m+o*d*m+u*c*f-o*p*f,y=u*M*l-_*h*l+_*a*m-o*M*m-u*a*f+o*h*f,N=_*h*c-u*M*c-_*a*p+o*M*p+u*a*d-o*h*d,R=e*A+n*S+r*y+s*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=A*T,t[1]=(M*p*s-h*d*s-M*r*m+n*d*m+h*r*f-n*p*f)*T,t[2]=(a*d*s-M*c*s+M*r*l-n*d*l-a*r*f+n*c*f)*T,t[3]=(h*c*s-a*p*s-h*r*l+n*p*l+a*r*m-n*c*m)*T,t[4]=S*T,t[5]=(u*d*s-_*p*s+_*r*m-e*d*m-u*r*f+e*p*f)*T,t[6]=(_*c*s-o*d*s-_*r*l+e*d*l+o*r*f-e*c*f)*T,t[7]=(o*p*s-u*c*s+u*r*l-e*p*l-o*r*m+e*c*m)*T,t[8]=y*T,t[9]=(_*h*s-u*M*s-_*n*m+e*M*m+u*n*f-e*h*f)*T,t[10]=(o*M*s-_*a*s+_*n*l-e*M*l-o*n*f+e*a*f)*T,t[11]=(u*a*s-o*h*s-u*n*l+e*h*l+o*n*m-e*a*m)*T,t[12]=N*T,t[13]=(u*M*r-_*h*r+_*n*p-e*M*p-u*n*d+e*h*d)*T,t[14]=(_*a*r-o*M*r-_*n*c+e*M*c+o*n*d-e*a*d)*T,t[15]=(o*h*r-u*a*r+u*n*c-e*h*c-o*n*p+e*a*p)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,p=s*l,m=s*u,_=s*h,M=o*u,d=o*h,f=a*h,A=c*l,S=c*u,y=c*h,N=n.x,R=n.y,T=n.z;return r[0]=(1-(M+f))*N,r[1]=(m+y)*N,r[2]=(_-S)*N,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(p+f))*R,r[6]=(d+A)*R,r[7]=0,r[8]=(_+S)*T,r[9]=(d-A)*T,r[10]=(1-(p+M))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Yn.set(r[0],r[1],r[2]).length();const o=Yn.set(r[4],r[5],r[6]).length(),a=Yn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Be.copy(this);const l=1/s,u=1/o,h=1/a;return Be.elements[0]*=l,Be.elements[1]*=l,Be.elements[2]*=l,Be.elements[4]*=u,Be.elements[5]*=u,Be.elements[6]*=u,Be.elements[8]*=h,Be.elements[9]*=h,Be.elements[10]*=h,e.setFromRotationMatrix(Be),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=rn){const c=this.elements,l=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),p=(n+r)/(n-r);let m,_;if(a===rn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Lr)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=rn){const c=this.elements,l=1/(e-t),u=1/(n-r),h=1/(o-s),p=(e+t)*l,m=(n+r)*u;let _,M;if(a===rn)_=(o+s)*h,M=-2*h;else if(a===Lr)_=s*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=M,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yn=new D,Be=new Jt,Bu=new D(0,0,0),zu=new D(1,1,1),fn=new D,er=new D,we=new D,po=new Jt,mo=new ki;class Ze{constructor(t=0,e=0,n=0,r=Ze.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],p=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(xe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return po.makeRotationFromQuaternion(t),this.setFromRotationMatrix(po,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mo.setFromEuler(this),this.setFromQuaternion(mo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ze.DEFAULT_ORDER="XYZ";class Ua{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hu=0;const bo=new D,Kn=new ki,Qe=new Jt,nr=new D,Ai=new D,Gu=new D,Vu=new ki,go=new D(1,0,0),_o=new D(0,1,0),vo=new D(0,0,1),xo={type:"added"},ku={type:"removed"},Zn={type:"childadded",child:null},rs={type:"childremoved",child:null};class ie extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ie.DEFAULT_UP.clone();const t=new D,e=new Ze,n=new ki,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Lt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(go,t)}rotateY(t){return this.rotateOnAxis(_o,t)}rotateZ(t){return this.rotateOnAxis(vo,t)}translateOnAxis(t,e){return bo.copy(t).applyQuaternion(this.quaternion),this.position.add(bo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(go,t)}translateY(t){return this.translateOnAxis(_o,t)}translateZ(t){return this.translateOnAxis(vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?nr.copy(t):nr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(Ai,nr,this.up):Qe.lookAt(nr,Ai,this.up),this.quaternion.setFromRotationMatrix(Qe),r&&(Qe.extractRotation(r.matrixWorld),Kn.setFromRotationMatrix(Qe),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xo),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ku),rs.child=t,this.dispatchEvent(rs),rs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xo),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,t,Gu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,Vu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),p=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ie.DEFAULT_UP=new D(0,1,0);ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ze=new D,tn=new D,ss=new D,en=new D,jn=new D,Jn=new D,Mo=new D,as=new D,os=new D,cs=new D,ls=new ne,us=new ne,hs=new ne;class Ie{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ze.subVectors(t,e),r.cross(ze);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ze.subVectors(r,e),tn.subVectors(n,e),ss.subVectors(t,e);const o=ze.dot(ze),a=ze.dot(tn),c=ze.dot(ss),l=tn.dot(tn),u=tn.dot(ss),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,m=(l*c-a*u)*p,_=(o*u-a*c)*p;return s.set(1-m-_,_,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,en)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,en.x),c.addScaledVector(o,en.y),c.addScaledVector(a,en.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return ls.setScalar(0),us.setScalar(0),hs.setScalar(0),ls.fromBufferAttribute(t,e),us.fromBufferAttribute(t,n),hs.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ls,s.x),o.addScaledVector(us,s.y),o.addScaledVector(hs,s.z),o}static isFrontFacing(t,e,n,r){return ze.subVectors(n,e),tn.subVectors(t,e),ze.cross(tn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ze.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),ze.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ie.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ie.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ie.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ie.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ie.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;jn.subVectors(r,n),Jn.subVectors(s,n),as.subVectors(t,n);const c=jn.dot(as),l=Jn.dot(as);if(c<=0&&l<=0)return e.copy(n);os.subVectors(t,r);const u=jn.dot(os),h=Jn.dot(os);if(u>=0&&h<=u)return e.copy(r);const p=c*h-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(jn,o);cs.subVectors(t,s);const m=jn.dot(cs),_=Jn.dot(cs);if(_>=0&&m<=_)return e.copy(s);const M=m*l-c*_;if(M<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Jn,a);const d=u*_-m*h;if(d<=0&&h-u>=0&&m-_>=0)return Mo.subVectors(s,r),a=(h-u)/(h-u+(m-_)),e.copy(r).addScaledVector(Mo,a);const f=1/(d+M+p);return o=M*f,a=p*f,e.copy(n).addScaledVector(jn,o).addScaledVector(Jn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function fs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Yt.workingColorSpace){if(t=Ia(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=fs(o,s,t+1/3),this.g=fs(o,s,t),this.b=fs(o,s,t-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(t,e=Xe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=Wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Yt.fromWorkingColorSpace(be.copy(this),t),Math.round(xe(be.r*255,0,255))*65536+Math.round(xe(be.g*255,0,255))*256+Math.round(xe(be.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,r=be.g,s=be.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=Xe){Yt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,r=be.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(dn),this.setHSL(dn.h+t,dn.s+e,dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(dn),t.getHSL(ir);const n=Ui(dn.h,ir.h,e),r=Ui(dn.s,ir.s,e),s=Ui(dn.l,ir.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new It;It.NAMES=Wc;let Wu=0;class vi extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=sn(),this.name="",this.type="Material",this.blending=li,this.side=Ke,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ds,this.blendDst=Is,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=so,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==Ke&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ds&&(n.blendSrc=this.blendSrc),this.blendDst!==Is&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==so&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xc extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new D,rr=new Ut;class Ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ga,this.updateRanges=[],this.gpuType=Ye,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ve(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ve(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ve(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ve(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ve(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ga&&(t.usage=this.usage),t}}class qc extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xu=0;const Le=new Jt,ds=new ie,$n=new D,Re=new Sn,Ti=new Sn,ue=new D;class We extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hc(t)?Yc:qc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Lt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Le.makeRotationFromQuaternion(t),this.applyMatrix4(Le),this}rotateX(t){return Le.makeRotationX(t),this.applyMatrix4(Le),this}rotateY(t){return Le.makeRotationY(t),this.applyMatrix4(Le),this}rotateZ(t){return Le.makeRotationZ(t),this.applyMatrix4(Le),this}translate(t,e,n){return Le.makeTranslation(t,e,n),this.applyMatrix4(Le),this}scale(t,e,n){return Le.makeScale(t,e,n),this.applyMatrix4(Le),this}lookAt(t){return ds.lookAt(t),ds.updateMatrix(),this.applyMatrix4(ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Re.setFromBufferAttribute(s),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ti.setFromBufferAttribute(a),this.morphTargetsRelative?(ue.addVectors(Re.min,Ti.min),Re.expandByPoint(ue),ue.addVectors(Re.max,Ti.max),Re.expandByPoint(ue)):(Re.expandByPoint(Ti.min),Re.expandByPoint(Ti.max))}Re.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ue.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ue));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ue.fromBufferAttribute(a,l),c&&($n.fromBufferAttribute(t,l),ue.add($n)),r=Math.max(r,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new D,c[I]=new D;const l=new D,u=new D,h=new D,p=new Ut,m=new Ut,_=new Ut,M=new D,d=new D;function f(I,J,b){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,J),h.fromBufferAttribute(n,b),p.fromBufferAttribute(s,I),m.fromBufferAttribute(s,J),_.fromBufferAttribute(s,b),u.sub(l),h.sub(l),m.sub(p),_.sub(p);const x=1/(m.x*_.y-_.x*m.y);isFinite(x)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(x),d.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(x),a[I].add(M),a[J].add(M),a[b].add(M),c[I].add(d),c[J].add(d),c[b].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let I=0,J=A.length;I<J;++I){const b=A[I],x=b.start,z=b.count;for(let B=x,k=x+z;B<k;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new D,y=new D,N=new D,R=new D;function T(I){N.fromBufferAttribute(r,I),R.copy(N);const J=a[I];S.copy(J),S.sub(N.multiplyScalar(N.dot(J))).normalize(),y.crossVectors(R,J);const x=y.dot(c[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,x)}for(let I=0,J=A.length;I<J;++I){const b=A[I],x=b.start,z=b.count;for(let B=x,k=x+z;B<k;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new D,s=new D,o=new D,a=new D,c=new D,l=new D,u=new D,h=new D;if(t)for(let p=0,m=t.count;p<m;p+=3){const _=t.getX(p+0),M=t.getX(p+1),d=t.getX(p+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,M),o.fromBufferAttribute(e,d),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,d),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,p=new l.constructor(c.length*u);let m=0,_=0;for(let M=0,d=c.length;M<d;M++){a.isInterleavedBufferAttribute?m=c[M]*a.data.stride+a.offset:m=c[M]*u;for(let f=0;f<u;f++)p[_++]=l[m++]}return new Ce(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const p=l[u],m=t(p,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,p=l.length;h<p;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const So=new Jt,Tn=new kc,sr=new Wi,Eo=new D,ar=new D,or=new D,cr=new D,ps=new D,lr=new D,yo=new D,ur=new D;class ge extends ie{constructor(t=new We,e=new Xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){lr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(ps.fromBufferAttribute(h,t),o?lr.addScaledVector(ps,u):lr.addScaledVector(ps.sub(e),u))}e.add(lr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),Tn.copy(t.ray).recast(t.near),!(sr.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(sr,Eo)===null||Tn.origin.distanceToSquared(Eo)>(t.far-t.near)**2))&&(So.copy(s).invert(),Tn.copy(t.ray).applyMatrix4(So),!(n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Tn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=p.length;_<M;_++){const d=p[_],f=o[d.materialIndex],A=Math.max(d.start,m.start),S=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let y=A,N=S;y<N;y+=3){const R=a.getX(y),T=a.getX(y+1),I=a.getX(y+2);r=hr(this,f,t,n,l,u,h,R,T,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let d=_,f=M;d<f;d+=3){const A=a.getX(d),S=a.getX(d+1),y=a.getX(d+2);r=hr(this,o,t,n,l,u,h,A,S,y),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,M=p.length;_<M;_++){const d=p[_],f=o[d.materialIndex],A=Math.max(d.start,m.start),S=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let y=A,N=S;y<N;y+=3){const R=y,T=y+1,I=y+2;r=hr(this,f,t,n,l,u,h,R,T,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let d=_,f=M;d<f;d+=3){const A=d,S=d+1,y=d+2;r=hr(this,o,t,n,l,u,h,A,S,y),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function qu(i,t,e,n,r,s,o,a){let c;if(t.side===ye?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Ke,a),c===null)return null;ur.copy(a),ur.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ur);return l<e.near||l>e.far?null:{distance:l,point:ur.clone(),object:i}}function hr(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,ar),i.getVertexPosition(c,or),i.getVertexPosition(l,cr);const u=qu(i,t,e,n,ar,or,cr,yo);if(u){const h=new D;Ie.getBarycoord(yo,ar,or,cr,h),r&&(u.uv=Ie.getInterpolatedAttribute(r,a,c,l,h,new Ut)),s&&(u.uv1=Ie.getInterpolatedAttribute(s,a,c,l,h,new Ut)),o&&(u.normal=Ie.getInterpolatedAttribute(o,a,c,l,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new D,materialIndex:0};Ie.getNormal(ar,or,cr,p.normal),u.face=p,u.barycoord=h}return u}class xi extends We{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let p=0,m=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,r,o,2),_("x","z","y",1,-1,t,n,-e,r,o,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(h,2));function _(M,d,f,A,S,y,N,R,T,I,J){const b=y/T,x=N/I,z=y/2,B=N/2,k=R/2,K=T+1,H=I+1;let j=0,V=0;const at=new D;for(let it=0;it<H;it++){const mt=it*x-B;for(let zt=0;zt<K;zt++){const Vt=zt*b-z;at[M]=Vt*A,at[d]=mt*S,at[f]=k,l.push(at.x,at.y,at.z),at[M]=0,at[d]=0,at[f]=R>0?1:-1,u.push(at.x,at.y,at.z),h.push(zt/T),h.push(1-it/I),j+=1}}for(let it=0;it<I;it++)for(let mt=0;mt<T;mt++){const zt=p+mt+K*it,Vt=p+mt+K*(it+1),W=p+(mt+1)+K*(it+1),Y=p+(mt+1)+K*it;c.push(zt,Vt,Y),c.push(Vt,W,Y),V+=6}a.addGroup(m,V,J),m+=V,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ve(i){const t={};for(let e=0;e<i.length;e++){const n=gi(i[e]);for(const r in n)t[r]=n[r]}return t}function Yu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Ku={clone:gi,merge:ve};var Zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zu,this.fragmentShader=ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gi(t.uniforms),this.uniformsGroups=Yu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zc extends ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pn=new D,Ao=new Ut,To=new Ut;class De extends Zc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ii*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(Ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pn.x,pn.y).multiplyScalar(-t/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pn.x,pn.y).multiplyScalar(-t/pn.z)}getViewSize(t,e){return this.getViewBounds(t,Ao,To),e.subVectors(To,Ao)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ii*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qn=-90,ti=1;class Ju extends ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new De(Qn,ti,t,e);r.layers=this.layers,this.add(r);const s=new De(Qn,ti,t,e);s.layers=this.layers,this.add(s);const o=new De(Qn,ti,t,e);o.layers=this.layers,this.add(o);const a=new De(Qn,ti,t,e);a.layers=this.layers,this.add(a);const c=new De(Qn,ti,t,e);c.layers=this.layers,this.add(c);const l=new De(Qn,ti,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,p,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class jc extends pe{constructor(t,e,n,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:di,super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $u extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new jc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xi(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ye,blending:_n});s.uniforms.tEquirect.value=e;const o=new ge(r,s),a=e.minFilter;return e.minFilter===Nn&&(e.minFilter=Ge),new Ju(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const ms=new D,Qu=new D,th=new Lt;class Pn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ms.subVectors(n,e).cross(Qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ms),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||th.getNormalMatrix(t),r=this.coplanarPoint(ms).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new Wi,fr=new D;class Na{constructor(t=new Pn,e=new Pn,n=new Pn,r=new Pn,s=new Pn,o=new Pn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=rn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],p=r[7],m=r[8],_=r[9],M=r[10],d=r[11],f=r[12],A=r[13],S=r[14],y=r[15];if(n[0].setComponents(c-s,p-l,d-m,y-f).normalize(),n[1].setComponents(c+s,p+l,d+m,y+f).normalize(),n[2].setComponents(c+o,p+u,d+_,y+A).normalize(),n[3].setComponents(c-o,p-u,d-_,y-A).normalize(),n[4].setComponents(c-a,p-h,d-M,y-S).normalize(),e===rn)n[5].setComponents(c+a,p+h,d+M,y+S).normalize();else if(e===Lr)n[5].setComponents(a,h,M,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(t){return wn.center.set(0,0,0),wn.radius=.7071067811865476,wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(fr.x=r.normal.x>0?t.max.x:t.min.x,fr.y=r.normal.y>0?t.max.y:t.min.y,fr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jc(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function eh(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((m,_)=>m.start-_.start);let p=0;for(let m=1;m<h.length;m++){const _=h[p],M=h[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++p,h[p]=M)}h.length=p+1;for(let m=0,_=h.length;m<_;m++){const M=h[m];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Xi extends We{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=t/a,p=e/c,m=[],_=[],M=[],d=[];for(let f=0;f<u;f++){const A=f*p-o;for(let S=0;S<l;S++){const y=S*h-s;_.push(y,-A,0),M.push(0,0,1),d.push(S/a),d.push(1-f/c)}}for(let f=0;f<c;f++)for(let A=0;A<a;A++){const S=A+l*f,y=A+l*(f+1),N=A+1+l*(f+1),R=A+1+l*f;m.push(S,y,R),m.push(y,N,R)}this.setIndex(m),this.setAttribute("position",new Me(_,3)),this.setAttribute("normal",new Me(M,3)),this.setAttribute("uv",new Me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.width,t.height,t.widthSegments,t.heightSegments)}}var nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ih=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ah=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ch=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ph=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ah=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Th=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ih=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$h=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,t1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,n1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,i1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,h1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,x1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,A1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,L1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,H1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,G1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,k1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,X1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,of=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ef=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Df=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Uf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pt={alphahash_fragment:nh,alphahash_pars_fragment:ih,alphamap_fragment:rh,alphamap_pars_fragment:sh,alphatest_fragment:ah,alphatest_pars_fragment:oh,aomap_fragment:ch,aomap_pars_fragment:lh,batching_pars_vertex:uh,batching_vertex:hh,begin_vertex:fh,beginnormal_vertex:dh,bsdfs:ph,iridescence_fragment:mh,bumpmap_pars_fragment:bh,clipping_planes_fragment:gh,clipping_planes_pars_fragment:_h,clipping_planes_pars_vertex:vh,clipping_planes_vertex:xh,color_fragment:Mh,color_pars_fragment:Sh,color_pars_vertex:Eh,color_vertex:yh,common:Ah,cube_uv_reflection_fragment:Th,defaultnormal_vertex:wh,displacementmap_pars_vertex:Rh,displacementmap_vertex:Ch,emissivemap_fragment:Ph,emissivemap_pars_fragment:Lh,colorspace_fragment:Dh,colorspace_pars_fragment:Ih,envmap_fragment:Uh,envmap_common_pars_fragment:Nh,envmap_pars_fragment:Fh,envmap_pars_vertex:Oh,envmap_physical_pars_fragment:Kh,envmap_vertex:Bh,fog_vertex:zh,fog_pars_vertex:Hh,fog_fragment:Gh,fog_pars_fragment:Vh,gradientmap_pars_fragment:kh,lightmap_pars_fragment:Wh,lights_lambert_fragment:Xh,lights_lambert_pars_fragment:qh,lights_pars_begin:Yh,lights_toon_fragment:Zh,lights_toon_pars_fragment:jh,lights_phong_fragment:Jh,lights_phong_pars_fragment:$h,lights_physical_fragment:Qh,lights_physical_pars_fragment:t1,lights_fragment_begin:e1,lights_fragment_maps:n1,lights_fragment_end:i1,logdepthbuf_fragment:r1,logdepthbuf_pars_fragment:s1,logdepthbuf_pars_vertex:a1,logdepthbuf_vertex:o1,map_fragment:c1,map_pars_fragment:l1,map_particle_fragment:u1,map_particle_pars_fragment:h1,metalnessmap_fragment:f1,metalnessmap_pars_fragment:d1,morphinstance_vertex:p1,morphcolor_vertex:m1,morphnormal_vertex:b1,morphtarget_pars_vertex:g1,morphtarget_vertex:_1,normal_fragment_begin:v1,normal_fragment_maps:x1,normal_pars_fragment:M1,normal_pars_vertex:S1,normal_vertex:E1,normalmap_pars_fragment:y1,clearcoat_normal_fragment_begin:A1,clearcoat_normal_fragment_maps:T1,clearcoat_pars_fragment:w1,iridescence_pars_fragment:R1,opaque_fragment:C1,packing:P1,premultiplied_alpha_fragment:L1,project_vertex:D1,dithering_fragment:I1,dithering_pars_fragment:U1,roughnessmap_fragment:N1,roughnessmap_pars_fragment:F1,shadowmap_pars_fragment:O1,shadowmap_pars_vertex:B1,shadowmap_vertex:z1,shadowmask_pars_fragment:H1,skinbase_vertex:G1,skinning_pars_vertex:V1,skinning_vertex:k1,skinnormal_vertex:W1,specularmap_fragment:X1,specularmap_pars_fragment:q1,tonemapping_fragment:Y1,tonemapping_pars_fragment:K1,transmission_fragment:Z1,transmission_pars_fragment:j1,uv_pars_fragment:J1,uv_pars_vertex:$1,uv_vertex:Q1,worldpos_vertex:tf,background_vert:ef,background_frag:nf,backgroundCube_vert:rf,backgroundCube_frag:sf,cube_vert:af,cube_frag:of,depth_vert:cf,depth_frag:lf,distanceRGBA_vert:uf,distanceRGBA_frag:hf,equirect_vert:ff,equirect_frag:df,linedashed_vert:pf,linedashed_frag:mf,meshbasic_vert:bf,meshbasic_frag:gf,meshlambert_vert:_f,meshlambert_frag:vf,meshmatcap_vert:xf,meshmatcap_frag:Mf,meshnormal_vert:Sf,meshnormal_frag:Ef,meshphong_vert:yf,meshphong_frag:Af,meshphysical_vert:Tf,meshphysical_frag:wf,meshtoon_vert:Rf,meshtoon_frag:Cf,points_vert:Pf,points_frag:Lf,shadow_vert:Df,shadow_frag:If,sprite_vert:Uf,sprite_frag:Nf},et={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},qe={basic:{uniforms:ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new It(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:ve([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:ve([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new It(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:ve([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:ve([et.points,et.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:ve([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:ve([et.common,et.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:ve([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:ve([et.sprite,et.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:ve([et.common,et.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:ve([et.lights,et.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};qe.physical={uniforms:ve([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const dr={r:0,b:0,g:0},Rn=new Ze,Ff=new Jt;function Of(i,t,e,n,r,s,o){const a=new It(0);let c=s===!0?0:1,l,u,h=null,p=0,m=null;function _(A){let S=A.isScene===!0?A.background:null;return S&&S.isTexture&&(S=(A.backgroundBlurriness>0?e:t).get(S)),S}function M(A){let S=!1;const y=_(A);y===null?f(a,c):y&&y.isColor&&(f(y,1),S=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(A,S){const y=_(S);y&&(y.isCubeTexture||y.mapping===Br)?(u===void 0&&(u=new ge(new xi(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:gi(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:ye,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Rn.copy(S.backgroundRotation),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ff.makeRotationFromEuler(Rn)),u.material.toneMapped=Yt.getTransfer(y.colorSpace)!==te,(h!==y||p!==y.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,p=y.version,m=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ge(new Xi(2,2),new xn({name:"BackgroundMaterial",uniforms:gi(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(y.colorSpace)!==te,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,p=y.version,m=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function f(A,S){A.getRGB(dr,Kc(i)),n.buffers.color.setClear(dr.r,dr.g,dr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(A,S=1){a.set(A),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,f(a,c)},render:M,addToRenderList:d}}function Bf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function a(b,x,z,B,k){let K=!1;const H=h(B,z,x);s!==H&&(s=H,l(s.object)),K=m(b,B,z,k),K&&_(b,B,z,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(b,x,z,B),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,x,z){const B=z.wireframe===!0;let k=n[b.id];k===void 0&&(k={},n[b.id]=k);let K=k[x.id];K===void 0&&(K={},k[x.id]=K);let H=K[B];return H===void 0&&(H=p(c()),K[B]=H),H}function p(b){const x=[],z=[],B=[];for(let k=0;k<e;k++)x[k]=0,z[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:z,attributeDivisors:B,object:b,attributes:{},index:null}}function m(b,x,z,B){const k=s.attributes,K=x.attributes;let H=0;const j=z.getAttributes();for(const V in j)if(j[V].location>=0){const it=k[V];let mt=K[V];if(mt===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor)),it===void 0||it.attribute!==mt||mt&&it.data!==mt.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function _(b,x,z,B){const k={},K=x.attributes;let H=0;const j=z.getAttributes();for(const V in j)if(j[V].location>=0){let it=K[V];it===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(it=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(it=b.instanceColor));const mt={};mt.attribute=it,it&&it.data&&(mt.data=it.data),k[V]=mt,H++}s.attributes=k,s.attributesNum=H,s.index=B}function M(){const b=s.newAttributes;for(let x=0,z=b.length;x<z;x++)b[x]=0}function d(b){f(b,0)}function f(b,x){const z=s.newAttributes,B=s.enabledAttributes,k=s.attributeDivisors;z[b]=1,B[b]===0&&(i.enableVertexAttribArray(b),B[b]=1),k[b]!==x&&(i.vertexAttribDivisor(b,x),k[b]=x)}function A(){const b=s.newAttributes,x=s.enabledAttributes;for(let z=0,B=x.length;z<B;z++)x[z]!==b[z]&&(i.disableVertexAttribArray(z),x[z]=0)}function S(b,x,z,B,k,K,H){H===!0?i.vertexAttribIPointer(b,x,z,k,K):i.vertexAttribPointer(b,x,z,B,k,K)}function y(b,x,z,B){M();const k=B.attributes,K=z.getAttributes(),H=x.defaultAttributeValues;for(const j in K){const V=K[j];if(V.location>=0){let at=k[j];if(at===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(at=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(at=b.instanceColor)),at!==void 0){const it=at.normalized,mt=at.itemSize,zt=t.get(at);if(zt===void 0)continue;const Vt=zt.buffer,W=zt.type,Y=zt.bytesPerElement,ot=W===i.INT||W===i.UNSIGNED_INT||at.gpuType===Aa;if(at.isInterleavedBufferAttribute){const ut=at.data,At=ut.stride,St=at.offset;if(ut.isInstancedInterleavedBuffer){for(let Ot=0;Ot<V.locationSize;Ot++)f(V.location+Ot,ut.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ot=0;Ot<V.locationSize;Ot++)d(V.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let Ot=0;Ot<V.locationSize;Ot++)S(V.location+Ot,mt/V.locationSize,W,it,At*Y,(St+mt/V.locationSize*Ot)*Y,ot)}else{if(at.isInstancedBufferAttribute){for(let ut=0;ut<V.locationSize;ut++)f(V.location+ut,at.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ut=0;ut<V.locationSize;ut++)d(V.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let ut=0;ut<V.locationSize;ut++)S(V.location+ut,mt/V.locationSize,W,it,mt*Y,mt/V.locationSize*ut*Y,ot)}}else if(H!==void 0){const it=H[j];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(V.location,it);break;case 3:i.vertexAttrib3fv(V.location,it);break;case 4:i.vertexAttrib4fv(V.location,it);break;default:i.vertexAttrib1fv(V.location,it)}}}}A()}function N(){I();for(const b in n){const x=n[b];for(const z in x){const B=x[z];for(const k in B)u(B[k].object),delete B[k];delete x[z]}delete n[b]}}function R(b){if(n[b.id]===void 0)return;const x=n[b.id];for(const z in x){const B=x[z];for(const k in B)u(B[k].object),delete B[k];delete x[z]}delete n[b.id]}function T(b){for(const x in n){const z=n[x];if(z[b.id]===void 0)continue;const B=z[b.id];for(const k in B)u(B[k].object),delete B[k];delete z[b.id]}}function I(){J(),o=!0,s!==r&&(s=r,l(s.object))}function J(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:J,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:d,disableUnusedAttributes:A}}function zf(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];e.update(m,n,1)}function c(l,u,h,p){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)o(l[_],u[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,p,0,h);let _=0;for(let M=0;M<h;M++)_+=u[M];for(let M=0;M<p.length;M++)e.update(_,n,p[M])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Hf(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ke&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const I=T===Vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==an&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ye&&!I)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(p===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:A,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:N,maxSamples:R}}function Gf(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Pn,a=new Lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||n!==0||r;return r=p,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){e=u(h,p,0)},this.setState=function(h,p,m){const _=h.clippingPlanes,M=h.clipIntersection,d=h.clipShadows,f=i.get(h);if(!r||_===null||_.length===0||s&&!d)s?u(null):l();else{const A=s?0:n,S=A*4;let y=f.clippingState||null;c.value=y,y=u(_,p,S,m);for(let N=0;N!==S;++N)y[N]=e[N];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,p,m,_){const M=h!==null?h.length:0;let d=null;if(M!==0){if(d=c.value,_!==!0||d===null){const f=m+M*4,A=p.matrixWorldInverse;a.getNormalMatrix(A),(d===null||d.length<f)&&(d=new Float32Array(f));for(let S=0,y=m;S!==M;++S,y+=4)o.copy(h[S]).applyMatrix4(A,a),o.normal.toArray(d,y),d[y+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,d}}function Vf(i){let t=new WeakMap;function e(o,a){return a===Gs?o.mapping=di:a===Vs&&(o.mapping=pi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gs||a===Vs)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new $u(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class $c extends Zc{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ci=4,wo=[.125,.215,.35,.446,.526,.582],In=20,bs=new $c,Ro=new It;let gs=null,_s=0,vs=0,xs=!1;const Ln=(1+Math.sqrt(5))/2,ei=1/Ln,Co=[new D(-Ln,ei,0),new D(Ln,ei,0),new D(-ei,0,Ln),new D(ei,0,Ln),new D(0,Ln,-ei),new D(0,Ln,ei),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Po{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){gs=this._renderer.getRenderTarget(),_s=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Do(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gs,_s,vs),this._renderer.xr.enabled=xs,t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gs=this._renderer.getRenderTarget(),_s=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Vi,format:ke,colorSpace:Mn,depthBuffer:!1},r=Lo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kf(s)),this._blurMaterial=Wf(s,t,e)}return r}_compileMaterial(t){const e=new ge(this._lodPlanes[0],t);this._renderer.compile(e,bs)}_sceneToCubeUV(t,e,n,r){const a=new De(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Ro),u.toneMapping=vn,u.autoClear=!1;const m=new Xc({name:"PMREM.Background",side:ye,depthWrite:!1,depthTest:!1}),_=new ge(new xi,m);let M=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,M=!0):(m.color.copy(Ro),M=!0);for(let f=0;f<6;f++){const A=f%3;A===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):A===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const S=this._cubeSize;pr(r,A*S,f>2?S:0,S,S),u.setRenderTarget(r),M&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===di||t.mapping===pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Io()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Do());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;pr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,bs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Co[(r-s-1)%Co.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ge(this._lodPlanes[r],l),p=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*In-1),M=s/_,d=isFinite(s)?1+Math.floor(u*M):In;d>In&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${In}`);const f=[];let A=0;for(let T=0;T<In;++T){const I=T/M,J=Math.exp(-I*I/2);f.push(J),T===0?A+=J:T<d&&(A+=2*J)}for(let T=0;T<f.length;T++)f[T]=f[T]/A;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=_,p.mipInt.value=S-n;const y=this._sizeLods[r],N=3*y*(r>S-ci?r-S+ci:0),R=4*(this._cubeSize-y);pr(e,N,R,3*y,2*y),c.setRenderTarget(e),c.render(h,bs)}}function kf(i){const t=[],e=[],n=[];let r=i;const s=i-ci+1+wo.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-ci?c=wo[o-i+ci-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,p=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,M=3,d=2,f=1,A=new Float32Array(M*_*m),S=new Float32Array(d*_*m),y=new Float32Array(f*_*m);for(let R=0;R<m;R++){const T=R%3*2/3-1,I=R>2?0:-1,J=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];A.set(J,M*_*R),S.set(p,d*_*R);const b=[R,R,R,R,R,R];y.set(b,f*_*R)}const N=new We;N.setAttribute("position",new Ce(A,M)),N.setAttribute("uv",new Ce(S,d)),N.setAttribute("faceIndex",new Ce(y,f)),t.push(N),r>ci&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lo(i,t,e){const n=new zn(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Wf(i,t,e){const n=new Float32Array(In),r=new D(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Do(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Io(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Fa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Gs||c===Vs,u=c===di||c===pi;if(l||u){let h=t.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Po(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new Po(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function qf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Yf(i,t,e,n){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const M=p.morphAttributes[_];for(let d=0,f=M.length;d<f;d++)t.remove(M[d])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(t.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function c(h){const p=h.attributes;for(const _ in p)t.update(p[_],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const M=m[_];for(let d=0,f=M.length;d<f;d++)t.update(M[d],i.ARRAY_BUFFER)}}function l(h){const p=[],m=h.index,_=h.attributes.position;let M=0;if(m!==null){const A=m.array;M=m.version;for(let S=0,y=A.length;S<y;S+=3){const N=A[S+0],R=A[S+1],T=A[S+2];p.push(N,R,R,T,T,N)}}else if(_!==void 0){const A=_.array;M=_.version;for(let S=0,y=A.length/3-1;S<y;S+=3){const N=S+0,R=S+1,T=S+2;p.push(N,R,R,T,T,N)}}else return;const d=new(Hc(p)?Yc:qc)(p,1);d.version=M;const f=s.get(h);f&&t.remove(f),s.set(h,d)}function u(h){const p=s.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Kf(i,t,e){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,m){i.drawElements(n,m,s,p*o),e.update(m,n,1)}function l(p,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,p*o,_),e.update(m,n,_))}function u(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,p,0,_);let d=0;for(let f=0;f<_;f++)d+=m[f];e.update(d,n,1)}function h(p,m,_,M){if(_===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<p.length;f++)l(p[f]/o,m[f],M[f]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,s,p,0,M,0,_);let f=0;for(let A=0;A<_;A++)f+=m[A];for(let A=0;A<M.length;A++)e.update(f,n,M[A])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Zf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function jf(i,t,e){const n=new WeakMap,r=new ne;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(a);if(p===void 0||p.count!==h){let b=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var m=b;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),M===!0&&(y=2),d===!0&&(y=3);let N=a.attributes.position.count*y,R=1;N>t.maxTextureSize&&(R=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const T=new Float32Array(N*R*4*h),I=new Vc(T,N,R,h);I.type=Ye,I.needsUpdate=!0;const J=y*4;for(let x=0;x<h;x++){const z=f[x],B=A[x],k=S[x],K=N*R*4*x;for(let H=0;H<z.count;H++){const j=H*J;_===!0&&(r.fromBufferAttribute(z,H),T[K+j+0]=r.x,T[K+j+1]=r.y,T[K+j+2]=r.z,T[K+j+3]=0),M===!0&&(r.fromBufferAttribute(B,H),T[K+j+4]=r.x,T[K+j+5]=r.y,T[K+j+6]=r.z,T[K+j+7]=0),d===!0&&(r.fromBufferAttribute(k,H),T[K+j+8]=r.x,T[K+j+9]=r.y,T[K+j+10]=r.z,T[K+j+11]=k.itemSize===4?r.w:1)}}p={count:h,texture:I,size:new Ut(N,R)},n.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let d=0;d<l.length;d++)_+=l[d];const M=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Jf(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Qc extends pe{constructor(t,e,n,r,s,o,a,c,l,u=ui){if(u!==ui&&u!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ui&&(n=Bn),n===void 0&&u===bi&&(n=mi),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:he,this.minFilter=c!==void 0?c:he,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tl=new pe,Uo=new Qc(1,1),el=new Vc,nl=new Fu,il=new jc,No=[],Fo=[],Oo=new Float32Array(16),Bo=new Float32Array(9),zo=new Float32Array(4);function Mi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=No[r];if(s===void 0&&(s=new Float32Array(r),No[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hr(i,t){let e=Fo[t];e===void 0&&(e=new Int32Array(t),Fo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $f(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2fv(this.addr,t),le(e,t)}}function td(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;i.uniform3fv(this.addr,t),le(e,t)}}function ed(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4fv(this.addr,t),le(e,t)}}function nd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;zo.set(n),i.uniformMatrix2fv(this.addr,!1,zo),le(e,n)}}function id(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;Bo.set(n),i.uniformMatrix3fv(this.addr,!1,Bo),le(e,n)}}function rd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;Oo.set(n),i.uniformMatrix4fv(this.addr,!1,Oo),le(e,n)}}function sd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ad(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2iv(this.addr,t),le(e,t)}}function od(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3iv(this.addr,t),le(e,t)}}function cd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4iv(this.addr,t),le(e,t)}}function ld(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ud(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2uiv(this.addr,t),le(e,t)}}function hd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3uiv(this.addr,t),le(e,t)}}function fd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4uiv(this.addr,t),le(e,t)}}function dd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Uo.compareFunction=zc,s=Uo):s=tl,e.setTexture2D(t||s,r)}function pd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||nl,r)}function md(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||il,r)}function bd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||el,r)}function gd(i){switch(i){case 5126:return $f;case 35664:return Qf;case 35665:return td;case 35666:return ed;case 35674:return nd;case 35675:return id;case 35676:return rd;case 5124:case 35670:return sd;case 35667:case 35671:return ad;case 35668:case 35672:return od;case 35669:case 35673:return cd;case 5125:return ld;case 36294:return ud;case 36295:return hd;case 36296:return fd;case 35678:case 36198:case 36298:case 36306:case 35682:return dd;case 35679:case 36299:case 36307:return pd;case 35680:case 36300:case 36308:case 36293:return md;case 36289:case 36303:case 36311:case 36292:return bd}}function _d(i,t){i.uniform1fv(this.addr,t)}function vd(i,t){const e=Mi(t,this.size,2);i.uniform2fv(this.addr,e)}function xd(i,t){const e=Mi(t,this.size,3);i.uniform3fv(this.addr,e)}function Md(i,t){const e=Mi(t,this.size,4);i.uniform4fv(this.addr,e)}function Sd(i,t){const e=Mi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ed(i,t){const e=Mi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yd(i,t){const e=Mi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ad(i,t){i.uniform1iv(this.addr,t)}function Td(i,t){i.uniform2iv(this.addr,t)}function wd(i,t){i.uniform3iv(this.addr,t)}function Rd(i,t){i.uniform4iv(this.addr,t)}function Cd(i,t){i.uniform1uiv(this.addr,t)}function Pd(i,t){i.uniform2uiv(this.addr,t)}function Ld(i,t){i.uniform3uiv(this.addr,t)}function Dd(i,t){i.uniform4uiv(this.addr,t)}function Id(i,t,e){const n=this.cache,r=t.length,s=Hr(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||tl,s[o])}function Ud(i,t,e){const n=this.cache,r=t.length,s=Hr(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||nl,s[o])}function Nd(i,t,e){const n=this.cache,r=t.length,s=Hr(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||il,s[o])}function Fd(i,t,e){const n=this.cache,r=t.length,s=Hr(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||el,s[o])}function Od(i){switch(i){case 5126:return _d;case 35664:return vd;case 35665:return xd;case 35666:return Md;case 35674:return Sd;case 35675:return Ed;case 35676:return yd;case 5124:case 35670:return Ad;case 35667:case 35671:return Td;case 35668:case 35672:return wd;case 35669:case 35673:return Rd;case 5125:return Cd;case 36294:return Pd;case 36295:return Ld;case 36296:return Dd;case 35678:case 36198:case 36298:case 36306:case 35682:return Id;case 35679:case 36299:case 36307:return Ud;case 35680:case 36300:case 36308:case 36293:return Nd;case 36289:case 36303:case 36311:case 36292:return Fd}}class Bd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gd(e.type)}}class zd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Od(e.type)}}class Hd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Ms=/(\w+)(\])?(\[|\.)?/g;function Ho(i,t){i.seq.push(t),i.map[t.id]=t}function Gd(i,t,e){const n=i.name,r=n.length;for(Ms.lastIndex=0;;){const s=Ms.exec(n),o=Ms.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Ho(e,l===void 0?new Bd(a,i,t):new zd(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Hd(a),Ho(e,h)),e=h}}}class Tr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Gd(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Go(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Vd=37297;let kd=0;function Wd(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Xd(i){const t=Yt.getPrimaries(Yt.workingColorSpace),e=Yt.getPrimaries(i);let n;switch(t===e?n="":t===Pr&&e===Cr?n="LinearDisplayP3ToLinearSRGB":t===Cr&&e===Pr&&(n="LinearSRGBToLinearDisplayP3"),i){case Mn:case zr:return[n,"LinearTransferOETF"];case Xe:case Da:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Vo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Wd(i.getShaderSource(t),o)}else return r}function qd(i,t){const e=Xd(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Yd(i,t){let e;switch(t){case Yl:e="Linear";break;case Kl:e="Reinhard";break;case Zl:e="Cineon";break;case jl:e="ACESFilmic";break;case $l:e="AgX";break;case Ql:e="Neutral";break;case Jl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mr=new D;function Kd(){Yt.getLuminanceCoefficients(mr);const i=mr.x.toFixed(4),t=mr.y.toFixed(4),e=mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Di).join(`
`)}function jd(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jd(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Di(i){return i!==""}function ko(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $d=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(i){return i.replace($d,t0)}const Qd=new Map;function t0(i,t){let e=Pt[t];if(e===void 0){const n=Qd.get(t);if(n!==void 0)e=Pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _a(e)}const e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xo(i){return i.replace(e0,n0)}function n0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qo(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function i0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function r0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case pi:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function s0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pi:t="ENVMAP_MODE_REFRACTION";break}return t}function a0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ya:t="ENVMAP_BLENDING_MULTIPLY";break;case Xl:t="ENVMAP_BLENDING_MIX";break;case ql:t="ENVMAP_BLENDING_ADD";break}return t}function o0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function c0(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=i0(e),l=r0(e),u=s0(e),h=a0(e),p=o0(e),m=Zd(e),_=jd(s),M=r.createProgram();let d,f,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Di).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Di).join(`
`),f.length>0&&(f+=`
`)):(d=[qo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),f=[qo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==vn?Yd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,qd("linearToOutputTexel",e.outputColorSpace),Kd(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Di).join(`
`)),o=_a(o),o=ko(o,e),o=Wo(o,e),a=_a(a),a=ko(a,e),a=Wo(a,e),o=Xo(o),a=Xo(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",e.glslVersion===ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=A+d+o,y=A+f+a,N=Go(r,r.VERTEX_SHADER,S),R=Go(r,r.FRAGMENT_SHADER,y);r.attachShader(M,N),r.attachShader(M,R),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function T(x){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(M).trim(),B=r.getShaderInfoLog(N).trim(),k=r.getShaderInfoLog(R).trim();let K=!0,H=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,N,R);else{const j=Vo(r,N,"vertex"),V=Vo(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+z+`
`+j+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||k==="")&&(H=!1);H&&(x.diagnostics={runnable:K,programLog:z,vertexShader:{log:B,prefix:d},fragmentShader:{log:k,prefix:f}})}r.deleteShader(N),r.deleteShader(R),I=new Tr(r,M),J=Jd(r,M)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let J;this.getAttributes=function(){return J===void 0&&T(this),J};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(M,Vd)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kd++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=R,this}let l0=0;class u0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new h0(t),e.set(t,n)),n}}class h0{constructor(t){this.id=l0++,this.code=t,this.usedTimes=0}}function f0(i,t,e,n,r,s,o){const a=new Ua,c=new u0,l=new Set,u=[],h=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,m=r.vertexTextures;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(b){return l.add(b),b===0?"uv":`uv${b}`}function f(b,x,z,B,k){const K=B.fog,H=k.geometry,j=b.isMeshStandardMaterial?B.environment:null,V=(b.isMeshStandardMaterial?e:t).get(b.envMap||j),at=V&&V.mapping===Br?V.image.height:null,it=M[b.type];b.precision!==null&&(_=r.getMaxPrecision(b.precision),_!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,zt=mt!==void 0?mt.length:0;let Vt=0;H.morphAttributes.position!==void 0&&(Vt=1),H.morphAttributes.normal!==void 0&&(Vt=2),H.morphAttributes.color!==void 0&&(Vt=3);let W,Y,ot,ut;if(it){const Ee=qe[it];W=Ee.vertexShader,Y=Ee.fragmentShader}else W=b.vertexShader,Y=b.fragmentShader,c.update(b),ot=c.getVertexShaderID(b),ut=c.getFragmentShaderID(b);const At=i.getRenderTarget(),St=k.isInstancedMesh===!0,Ot=k.isBatchedMesh===!0,Wt=!!b.map,Dt=!!b.matcap,w=!!V,fe=!!b.aoMap,Nt=!!b.lightMap,Ft=!!b.bumpMap,Et=!!b.normalMap,jt=!!b.displacementMap,bt=!!b.emissiveMap,E=!!b.metalnessMap,g=!!b.roughnessMap,U=b.anisotropy>0,X=b.clearcoat>0,$=b.dispersion>0,q=b.iridescence>0,_t=b.sheen>0,nt=b.transmission>0,ht=U&&!!b.anisotropyMap,Gt=X&&!!b.clearcoatMap,Q=X&&!!b.clearcoatNormalMap,ft=X&&!!b.clearcoatRoughnessMap,wt=q&&!!b.iridescenceMap,Rt=q&&!!b.iridescenceThicknessMap,dt=_t&&!!b.sheenColorMap,Bt=_t&&!!b.sheenRoughnessMap,Ct=!!b.specularMap,$t=!!b.specularColorMap,C=!!b.specularIntensityMap,ct=nt&&!!b.transmissionMap,G=nt&&!!b.thicknessMap,Z=!!b.gradientMap,rt=!!b.alphaMap,lt=b.alphaTest>0,Ht=!!b.alphaHash,se=!!b.extensions;let Se=vn;b.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Se=i.toneMapping);const kt={shaderID:it,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:Y,defines:b.defines,customVertexShaderID:ot,customFragmentShaderID:ut,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:Ot,batchingColor:Ot&&k._colorsTexture!==null,instancing:St,instancingColor:St&&k.instanceColor!==null,instancingMorph:St&&k.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:At===null?i.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Mn,alphaToCoverage:!!b.alphaToCoverage,map:Wt,matcap:Dt,envMap:w,envMapMode:w&&V.mapping,envMapCubeUVHeight:at,aoMap:fe,lightMap:Nt,bumpMap:Ft,normalMap:Et,displacementMap:m&&jt,emissiveMap:bt,normalMapObjectSpace:Et&&b.normalMapType===iu,normalMapTangentSpace:Et&&b.normalMapType===Bc,metalnessMap:E,roughnessMap:g,anisotropy:U,anisotropyMap:ht,clearcoat:X,clearcoatMap:Gt,clearcoatNormalMap:Q,clearcoatRoughnessMap:ft,dispersion:$,iridescence:q,iridescenceMap:wt,iridescenceThicknessMap:Rt,sheen:_t,sheenColorMap:dt,sheenRoughnessMap:Bt,specularMap:Ct,specularColorMap:$t,specularIntensityMap:C,transmission:nt,transmissionMap:ct,thicknessMap:G,gradientMap:Z,opaque:b.transparent===!1&&b.blending===li&&b.alphaToCoverage===!1,alphaMap:rt,alphaTest:lt,alphaHash:Ht,combine:b.combine,mapUv:Wt&&d(b.map.channel),aoMapUv:fe&&d(b.aoMap.channel),lightMapUv:Nt&&d(b.lightMap.channel),bumpMapUv:Ft&&d(b.bumpMap.channel),normalMapUv:Et&&d(b.normalMap.channel),displacementMapUv:jt&&d(b.displacementMap.channel),emissiveMapUv:bt&&d(b.emissiveMap.channel),metalnessMapUv:E&&d(b.metalnessMap.channel),roughnessMapUv:g&&d(b.roughnessMap.channel),anisotropyMapUv:ht&&d(b.anisotropyMap.channel),clearcoatMapUv:Gt&&d(b.clearcoatMap.channel),clearcoatNormalMapUv:Q&&d(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&d(b.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&d(b.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&d(b.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&d(b.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&d(b.sheenRoughnessMap.channel),specularMapUv:Ct&&d(b.specularMap.channel),specularColorMapUv:$t&&d(b.specularColorMap.channel),specularIntensityMapUv:C&&d(b.specularIntensityMap.channel),transmissionMapUv:ct&&d(b.transmissionMap.channel),thicknessMapUv:G&&d(b.thicknessMap.channel),alphaMapUv:rt&&d(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Et||U),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!H.attributes.uv&&(Wt||rt),fog:!!K,useFog:b.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:p,skinning:k.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Vt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:Wt&&b.map.isVideoTexture===!0&&Yt.getTransfer(b.map.colorSpace)===te,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===He,flipSided:b.side===ye,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:se&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&b.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function A(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)x.push(z),x.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(S(x,b),y(x,b),x.push(i.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function S(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function y(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),b.push(a.mask)}function N(b){const x=M[b.type];let z;if(x){const B=qe[x];z=Ku.clone(B.uniforms)}else z=b.uniforms;return z}function R(b,x){let z;for(let B=0,k=u.length;B<k;B++){const K=u[B];if(K.cacheKey===x){z=K,++z.usedTimes;break}}return z===void 0&&(z=new c0(i,x,b,s),u.push(z)),z}function T(b){if(--b.usedTimes===0){const x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function I(b){c.remove(b)}function J(){c.dispose()}return{getParameters:f,getProgramCacheKey:A,getUniforms:N,acquireProgram:R,releaseProgram:T,releaseShaderCache:I,programs:u,dispose:J}}function d0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function p0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ko(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,p,m,_,M,d){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:p,material:m,groupOrder:_,renderOrder:h.renderOrder,z:M,group:d},i[t]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=m,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=M,f.group=d),t++,f}function a(h,p,m,_,M,d){const f=o(h,p,m,_,M,d);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):e.push(f)}function c(h,p,m,_,M,d){const f=o(h,p,m,_,M,d);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):e.unshift(f)}function l(h,p){e.length>1&&e.sort(h||p0),n.length>1&&n.sort(p||Yo),r.length>1&&r.sort(p||Yo)}function u(){for(let h=t,p=i.length;h<p;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function m0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ko,i.set(n,[o])):r>=s.length?(o=new Ko,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function b0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new It};break;case"SpotLight":e={position:new D,direction:new D,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function g0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let _0=0;function v0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function x0(i){const t=new b0,e=g0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const r=new D,s=new Jt,o=new Jt;function a(l){let u=0,h=0,p=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let m=0,_=0,M=0,d=0,f=0,A=0,S=0,y=0,N=0,R=0,T=0;l.sort(v0);for(let J=0,b=l.length;J<b;J++){const x=l[J],z=x.color,B=x.intensity,k=x.distance,K=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)u+=z.r*B,h+=z.g*B,p+=z.b*B;else if(x.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(x.sh.coefficients[H],B);T++}else if(x.isDirectionalLight){const H=t.get(x);if(H.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const j=x.shadow,V=e.get(x);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=x.shadow.matrix,A++}n.directional[m]=H,m++}else if(x.isSpotLight){const H=t.get(x);H.position.setFromMatrixPosition(x.matrixWorld),H.color.copy(z).multiplyScalar(B),H.distance=k,H.coneCos=Math.cos(x.angle),H.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),H.decay=x.decay,n.spot[M]=H;const j=x.shadow;if(x.map&&(n.spotLightMap[N]=x.map,N++,j.updateMatrices(x),x.castShadow&&R++),n.spotLightMatrix[M]=j.matrix,x.castShadow){const V=e.get(x);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[M]=V,n.spotShadowMap[M]=K,y++}M++}else if(x.isRectAreaLight){const H=t.get(x);H.color.copy(z).multiplyScalar(B),H.halfWidth.set(x.width*.5,0,0),H.halfHeight.set(0,x.height*.5,0),n.rectArea[d]=H,d++}else if(x.isPointLight){const H=t.get(x);if(H.color.copy(x.color).multiplyScalar(x.intensity),H.distance=x.distance,H.decay=x.decay,x.castShadow){const j=x.shadow,V=e.get(x);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=x.shadow.matrix,S++}n.point[_]=H,_++}else if(x.isHemisphereLight){const H=t.get(x);H.skyColor.copy(x.color).multiplyScalar(B),H.groundColor.copy(x.groundColor).multiplyScalar(B),n.hemi[f]=H,f++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const I=n.hash;(I.directionalLength!==m||I.pointLength!==_||I.spotLength!==M||I.rectAreaLength!==d||I.hemiLength!==f||I.numDirectionalShadows!==A||I.numPointShadows!==S||I.numSpotShadows!==y||I.numSpotMaps!==N||I.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=d,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+N-R,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,I.directionalLength=m,I.pointLength=_,I.spotLength=M,I.rectAreaLength=d,I.hemiLength=f,I.numDirectionalShadows=A,I.numPointShadows=S,I.numSpotShadows=y,I.numSpotMaps=N,I.numLightProbes=T,n.version=_0++)}function c(l,u){let h=0,p=0,m=0,_=0,M=0;const d=u.matrixWorldInverse;for(let f=0,A=l.length;f<A;f++){const S=l[f];if(S.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(d),h++}else if(S.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(d),m++}else if(S.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(d),o.identity(),s.copy(S.matrixWorld),s.premultiply(d),o.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const y=n.hemi[M];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(d),M++}}}return{setup:a,setupView:c,state:n}}function Zo(i){const t=new x0(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function M0(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Zo(i),t.set(r,[a])):s>=o.length?(a=new Zo(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class S0 extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class E0 extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function T0(i,t,e){let n=new Na;const r=new Ut,s=new Ut,o=new ne,a=new S0({depthPacking:nu}),c=new E0,l={},u=e.maxTextureSize,h={[Ke]:ye,[ye]:Ke,[He]:He},p=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:y0,fragmentShader:A0}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new We;_.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ge(_,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let f=this.type;this.render=function(R,T,I){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;const J=i.getRenderTarget(),b=i.getActiveCubeFace(),x=i.getActiveMipmapLevel(),z=i.state;z.setBlending(_n),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=f!==nn&&this.type===nn,k=f===nn&&this.type!==nn;for(let K=0,H=R.length;K<H;K++){const j=R[K],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const at=V.getFrameExtents();if(r.multiply(at),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/at.x),r.x=s.x*at.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/at.y),r.y=s.y*at.y,V.mapSize.y=s.y)),V.map===null||B===!0||k===!0){const mt=this.type!==nn?{minFilter:he,magFilter:he}:{};V.map!==null&&V.map.dispose(),V.map=new zn(r.x,r.y,mt),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const it=V.getViewportCount();for(let mt=0;mt<it;mt++){const zt=V.getViewport(mt);o.set(s.x*zt.x,s.y*zt.y,s.x*zt.z,s.y*zt.w),z.viewport(o),V.updateMatrices(j,mt),n=V.getFrustum(),y(T,I,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===nn&&A(V,I),V.needsUpdate=!1}f=this.type,d.needsUpdate=!1,i.setRenderTarget(J,b,x)};function A(R,T){const I=t.update(M);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new zn(r.x,r.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,I,p,M,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,I,m,M,null)}function S(R,T,I,J){let b=null;const x=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(x!==void 0)b=x;else if(b=I.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=b.uuid,B=T.uuid;let k=l[z];k===void 0&&(k={},l[z]=k);let K=k[B];K===void 0&&(K=b.clone(),k[B]=K,T.addEventListener("dispose",N)),b=K}if(b.visible=T.visible,b.wireframe=T.wireframe,J===nn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:h[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=i.properties.get(b);z.light=I}return b}function y(R,T,I,J,b){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===nn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const B=t.update(R),k=R.material;if(Array.isArray(k)){const K=B.groups;for(let H=0,j=K.length;H<j;H++){const V=K[H],at=k[V.materialIndex];if(at&&at.visible){const it=S(R,at,J,b);R.onBeforeShadow(i,R,T,I,B,it,V),i.renderBufferDirect(I,null,B,it,R,V),R.onAfterShadow(i,R,T,I,B,it,V)}}}else if(k.visible){const K=S(R,k,J,b);R.onBeforeShadow(i,R,T,I,B,K,null),i.renderBufferDirect(I,null,B,K,R,null),R.onAfterShadow(i,R,T,I,B,K,null)}}const z=R.children;for(let B=0,k=z.length;B<k;B++)y(z[B],T,I,J,b)}function N(R){R.target.removeEventListener("dispose",N);for(const I in l){const J=l[I],b=R.target.uuid;b in J&&(J[b].dispose(),delete J[b])}}}const w0={[Us]:Ns,[Fs]:zs,[Os]:Hs,[fi]:Bs,[Ns]:Us,[zs]:Fs,[Hs]:Os,[Bs]:fi};function R0(i){function t(){let C=!1;const ct=new ne;let G=null;const Z=new ne(0,0,0,0);return{setMask:function(rt){G!==rt&&!C&&(i.colorMask(rt,rt,rt,rt),G=rt)},setLocked:function(rt){C=rt},setClear:function(rt,lt,Ht,se,Se){Se===!0&&(rt*=se,lt*=se,Ht*=se),ct.set(rt,lt,Ht,se),Z.equals(ct)===!1&&(i.clearColor(rt,lt,Ht,se),Z.copy(ct))},reset:function(){C=!1,G=null,Z.set(-1,0,0,0)}}}function e(){let C=!1,ct=!1,G=null,Z=null,rt=null;return{setReversed:function(lt){ct=lt},setTest:function(lt){lt?ot(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(lt){G!==lt&&!C&&(i.depthMask(lt),G=lt)},setFunc:function(lt){if(ct&&(lt=w0[lt]),Z!==lt){switch(lt){case Us:i.depthFunc(i.NEVER);break;case Ns:i.depthFunc(i.ALWAYS);break;case Fs:i.depthFunc(i.LESS);break;case fi:i.depthFunc(i.LEQUAL);break;case Os:i.depthFunc(i.EQUAL);break;case Bs:i.depthFunc(i.GEQUAL);break;case zs:i.depthFunc(i.GREATER);break;case Hs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=lt}},setLocked:function(lt){C=lt},setClear:function(lt){rt!==lt&&(i.clearDepth(lt),rt=lt)},reset:function(){C=!1,G=null,Z=null,rt=null}}}function n(){let C=!1,ct=null,G=null,Z=null,rt=null,lt=null,Ht=null,se=null,Se=null;return{setTest:function(kt){C||(kt?ot(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(kt){ct!==kt&&!C&&(i.stencilMask(kt),ct=kt)},setFunc:function(kt,Ee,je){(G!==kt||Z!==Ee||rt!==je)&&(i.stencilFunc(kt,Ee,je),G=kt,Z=Ee,rt=je)},setOp:function(kt,Ee,je){(lt!==kt||Ht!==Ee||se!==je)&&(i.stencilOp(kt,Ee,je),lt=kt,Ht=Ee,se=je)},setLocked:function(kt){C=kt},setClear:function(kt){Se!==kt&&(i.clearStencil(kt),Se=kt)},reset:function(){C=!1,ct=null,G=null,Z=null,rt=null,lt=null,Ht=null,se=null,Se=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,p=[],m=null,_=!1,M=null,d=null,f=null,A=null,S=null,y=null,N=null,R=new It(0,0,0),T=0,I=!1,J=null,b=null,x=null,z=null,B=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=H>=1):j.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=H>=2);let V=null,at={};const it=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),zt=new ne().fromArray(it),Vt=new ne().fromArray(mt);function W(C,ct,G,Z){const rt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(C,lt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<G;Ht++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(ct+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return lt}const Y={};Y[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),s.setFunc(fi),Nt(!1),Ft(eo),ot(i.CULL_FACE),w(_n);function ot(C){l[C]!==!0&&(i.enable(C),l[C]=!0)}function ut(C){l[C]!==!1&&(i.disable(C),l[C]=!1)}function At(C,ct){return u[C]!==ct?(i.bindFramebuffer(C,ct),u[C]=ct,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function St(C,ct){let G=p,Z=!1;if(C){G=h.get(ct),G===void 0&&(G=[],h.set(ct,G));const rt=C.textures;if(G.length!==rt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ht=rt.length;lt<Ht;lt++)G[lt]=i.COLOR_ATTACHMENT0+lt;G.length=rt.length,Z=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Z=!0);Z&&i.drawBuffers(G)}function Ot(C){return m!==C?(i.useProgram(C),m=C,!0):!1}const Wt={[Dn]:i.FUNC_ADD,[Rl]:i.FUNC_SUBTRACT,[Cl]:i.FUNC_REVERSE_SUBTRACT};Wt[Pl]=i.MIN,Wt[Ll]=i.MAX;const Dt={[Dl]:i.ZERO,[Il]:i.ONE,[Ul]:i.SRC_COLOR,[Ds]:i.SRC_ALPHA,[Hl]:i.SRC_ALPHA_SATURATE,[Bl]:i.DST_COLOR,[Fl]:i.DST_ALPHA,[Nl]:i.ONE_MINUS_SRC_COLOR,[Is]:i.ONE_MINUS_SRC_ALPHA,[zl]:i.ONE_MINUS_DST_COLOR,[Ol]:i.ONE_MINUS_DST_ALPHA,[Gl]:i.CONSTANT_COLOR,[Vl]:i.ONE_MINUS_CONSTANT_COLOR,[kl]:i.CONSTANT_ALPHA,[Wl]:i.ONE_MINUS_CONSTANT_ALPHA};function w(C,ct,G,Z,rt,lt,Ht,se,Se,kt){if(C===_n){_===!0&&(ut(i.BLEND),_=!1);return}if(_===!1&&(ot(i.BLEND),_=!0),C!==wl){if(C!==M||kt!==I){if((d!==Dn||S!==Dn)&&(i.blendEquation(i.FUNC_ADD),d=Dn,S=Dn),kt)switch(C){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFunc(i.ONE,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ro:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}f=null,A=null,y=null,N=null,R.set(0,0,0),T=0,M=C,I=kt}return}rt=rt||ct,lt=lt||G,Ht=Ht||Z,(ct!==d||rt!==S)&&(i.blendEquationSeparate(Wt[ct],Wt[rt]),d=ct,S=rt),(G!==f||Z!==A||lt!==y||Ht!==N)&&(i.blendFuncSeparate(Dt[G],Dt[Z],Dt[lt],Dt[Ht]),f=G,A=Z,y=lt,N=Ht),(se.equals(R)===!1||Se!==T)&&(i.blendColor(se.r,se.g,se.b,Se),R.copy(se),T=Se),M=C,I=!1}function fe(C,ct){C.side===He?ut(i.CULL_FACE):ot(i.CULL_FACE);let G=C.side===ye;ct&&(G=!G),Nt(G),C.blending===li&&C.transparent===!1?w(_n):w(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),r.setMask(C.colorWrite);const Z=C.stencilWrite;o.setTest(Z),Z&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),jt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(C){J!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),J=C)}function Ft(C){C!==Al?(ot(i.CULL_FACE),C!==b&&(C===eo?i.cullFace(i.BACK):C===Tl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),b=C}function Et(C){C!==x&&(K&&i.lineWidth(C),x=C)}function jt(C,ct,G){C?(ot(i.POLYGON_OFFSET_FILL),(z!==ct||B!==G)&&(i.polygonOffset(ct,G),z=ct,B=G)):ut(i.POLYGON_OFFSET_FILL)}function bt(C){C?ot(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function E(C){C===void 0&&(C=i.TEXTURE0+k-1),V!==C&&(i.activeTexture(C),V=C)}function g(C,ct,G){G===void 0&&(V===null?G=i.TEXTURE0+k-1:G=V);let Z=at[G];Z===void 0&&(Z={type:void 0,texture:void 0},at[G]=Z),(Z.type!==C||Z.texture!==ct)&&(V!==G&&(i.activeTexture(G),V=G),i.bindTexture(C,ct||Y[C]),Z.type=C,Z.texture=ct)}function U(){const C=at[V];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function nt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Rt(C){zt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),zt.copy(C))}function dt(C){Vt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Vt.copy(C))}function Bt(C,ct){let G=c.get(ct);G===void 0&&(G=new WeakMap,c.set(ct,G));let Z=G.get(C);Z===void 0&&(Z=i.getUniformBlockIndex(ct,C.name),G.set(C,Z))}function Ct(C,ct){const Z=c.get(ct).get(C);a.get(ct)!==Z&&(i.uniformBlockBinding(ct,Z,C.__bindingPointIndex),a.set(ct,Z))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},V=null,at={},u={},h=new WeakMap,p=[],m=null,_=!1,M=null,d=null,f=null,A=null,S=null,y=null,N=null,R=new It(0,0,0),T=0,I=!1,J=null,b=null,x=null,z=null,B=null,zt.set(0,0,i.canvas.width,i.canvas.height),Vt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ot,disable:ut,bindFramebuffer:At,drawBuffers:St,useProgram:Ot,setBlending:w,setMaterial:fe,setFlipSided:Nt,setCullFace:Ft,setLineWidth:Et,setPolygonOffset:jt,setScissorTest:bt,activeTexture:E,bindTexture:g,unbindTexture:U,compressedTexImage2D:X,compressedTexImage3D:$,texImage2D:ft,texImage3D:wt,updateUBOMapping:Bt,uniformBlockBinding:Ct,texStorage2D:Gt,texStorage3D:Q,texSubImage2D:q,texSubImage3D:_t,compressedTexSubImage2D:nt,compressedTexSubImage3D:ht,scissor:Rt,viewport:dt,reset:$t}}function jo(i,t,e,n){const r=C0(n);switch(e){case Dc:return i*t;case Uc:return i*t;case Nc:return i*t*2;case Ra:return i*t/r.components*r.byteLength;case Ca:return i*t/r.components*r.byteLength;case Fc:return i*t*2/r.components*r.byteLength;case Pa:return i*t*2/r.components*r.byteLength;case Ic:return i*t*3/r.components*r.byteLength;case ke:return i*t*4/r.components*r.byteLength;case La:return i*t*4/r.components*r.byteLength;case xr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qs:case Ks:return Math.max(i,16)*Math.max(t,8)/4;case Xs:case Ys:return Math.max(i,8)*Math.max(t,8)/2;case Zs:case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qs:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ta:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case aa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ua:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case yr:case fa:case da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Oc:case pa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ma:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function C0(i){switch(i){case an:case Cc:return{byteLength:1,components:1};case Oi:case Pc:case Vi:return{byteLength:2,components:1};case Ta:case wa:return{byteLength:2,components:4};case Bn:case Aa:case Ye:return{byteLength:4,components:1};case Lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function P0(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,u=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return m?new OffscreenCanvas(E,g):zi("canvas")}function M(E,g,U){let X=1;const $=bt(E);if(($.width>U||$.height>U)&&(X=U/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(X*$.width),_t=Math.floor(X*$.height);h===void 0&&(h=_(q,_t));const nt=g?_(q,_t):h;return nt.width=q,nt.height=_t,nt.getContext("2d").drawImage(E,0,0,q,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+_t+")."),nt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function d(E){return E.generateMipmaps&&E.minFilter!==he&&E.minFilter!==Ge}function f(E){i.generateMipmap(E)}function A(E,g,U,X,$=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=g;if(g===i.RED&&(U===i.FLOAT&&(q=i.R32F),U===i.HALF_FLOAT&&(q=i.R16F),U===i.UNSIGNED_BYTE&&(q=i.R8)),g===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.R8UI),U===i.UNSIGNED_SHORT&&(q=i.R16UI),U===i.UNSIGNED_INT&&(q=i.R32UI),U===i.BYTE&&(q=i.R8I),U===i.SHORT&&(q=i.R16I),U===i.INT&&(q=i.R32I)),g===i.RG&&(U===i.FLOAT&&(q=i.RG32F),U===i.HALF_FLOAT&&(q=i.RG16F),U===i.UNSIGNED_BYTE&&(q=i.RG8)),g===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RG8UI),U===i.UNSIGNED_SHORT&&(q=i.RG16UI),U===i.UNSIGNED_INT&&(q=i.RG32UI),U===i.BYTE&&(q=i.RG8I),U===i.SHORT&&(q=i.RG16I),U===i.INT&&(q=i.RG32I)),g===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGB8UI),U===i.UNSIGNED_SHORT&&(q=i.RGB16UI),U===i.UNSIGNED_INT&&(q=i.RGB32UI),U===i.BYTE&&(q=i.RGB8I),U===i.SHORT&&(q=i.RGB16I),U===i.INT&&(q=i.RGB32I)),g===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),U===i.UNSIGNED_INT&&(q=i.RGBA32UI),U===i.BYTE&&(q=i.RGBA8I),U===i.SHORT&&(q=i.RGBA16I),U===i.INT&&(q=i.RGBA32I)),g===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),g===i.RGBA){const _t=$?Rr:Yt.getTransfer(X);U===i.FLOAT&&(q=i.RGBA32F),U===i.HALF_FLOAT&&(q=i.RGBA16F),U===i.UNSIGNED_BYTE&&(q=_t===te?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(E,g){let U;return E?g===null||g===Bn||g===mi?U=i.DEPTH24_STENCIL8:g===Ye?U=i.DEPTH32F_STENCIL8:g===Oi&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Bn||g===mi?U=i.DEPTH_COMPONENT24:g===Ye?U=i.DEPTH_COMPONENT32F:g===Oi&&(U=i.DEPTH_COMPONENT16),U}function y(E,g){return d(E)===!0||E.isFramebufferTexture&&E.minFilter!==he&&E.minFilter!==Ge?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function N(E){const g=E.target;g.removeEventListener("dispose",N),T(g),g.isVideoTexture&&u.delete(g)}function R(E){const g=E.target;g.removeEventListener("dispose",R),J(g)}function T(E){const g=n.get(E);if(g.__webglInit===void 0)return;const U=E.source,X=p.get(U);if(X){const $=X[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(E),Object.keys(X).length===0&&p.delete(U)}n.remove(E)}function I(E){const g=n.get(E);i.deleteTexture(g.__webglTexture);const U=E.source,X=p.get(U);delete X[g.__cacheKey],o.memory.textures--}function J(E){const g=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let $=0;$<g.__webglFramebuffer[X].length;$++)i.deleteFramebuffer(g.__webglFramebuffer[X][$]);else i.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)i.deleteFramebuffer(g.__webglFramebuffer[X]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=E.textures;for(let X=0,$=U.length;X<$;X++){const q=n.get(U[X]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(U[X])}n.remove(E)}let b=0;function x(){b=0}function z(){const E=b;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),b+=1,E}function B(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function k(E,g){const U=n.get(E);if(E.isVideoTexture&&Et(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const X=E.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(U,E,g);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+g)}function K(E,g){const U=n.get(E);if(E.version>0&&U.__version!==E.version){Vt(U,E,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+g)}function H(E,g){const U=n.get(E);if(E.version>0&&U.__version!==E.version){Vt(U,E,g);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+g)}function j(E,g){const U=n.get(E);if(E.version>0&&U.__version!==E.version){W(U,E,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+g)}const V={[ks]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[Ws]:i.MIRRORED_REPEAT},at={[he]:i.NEAREST,[tu]:i.NEAREST_MIPMAP_NEAREST,[Zi]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[Kr]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},it={[ru]:i.NEVER,[uu]:i.ALWAYS,[su]:i.LESS,[zc]:i.LEQUAL,[au]:i.EQUAL,[lu]:i.GEQUAL,[ou]:i.GREATER,[cu]:i.NOTEQUAL};function mt(E,g){if(g.type===Ye&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ge||g.magFilter===Kr||g.magFilter===Zi||g.magFilter===Nn||g.minFilter===Ge||g.minFilter===Kr||g.minFilter===Zi||g.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,V[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,V[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,V[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,at[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,at[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,it[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===he||g.minFilter!==Zi&&g.minFilter!==Nn||g.type===Ye&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function zt(E,g){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",N));const X=g.source;let $=p.get(X);$===void 0&&($={},p.set(X,$));const q=B(g);if(q!==E.__cacheKey){$[q]===void 0&&($[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),$[q].usedTimes++;const _t=$[E.__cacheKey];_t!==void 0&&($[E.__cacheKey].usedTimes--,_t.usedTimes===0&&I(g)),E.__cacheKey=q,E.__webglTexture=$[q].texture}return U}function Vt(E,g,U){let X=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=i.TEXTURE_3D);const $=zt(E,g),q=g.source;e.bindTexture(X,E.__webglTexture,i.TEXTURE0+U);const _t=n.get(q);if(q.version!==_t.__version||$===!0){e.activeTexture(i.TEXTURE0+U);const nt=Yt.getPrimaries(Yt.workingColorSpace),ht=g.colorSpace===gn?null:Yt.getPrimaries(g.colorSpace),Gt=g.colorSpace===gn||nt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let Q=M(g.image,!1,r.maxTextureSize);Q=jt(g,Q);const ft=s.convert(g.format,g.colorSpace),wt=s.convert(g.type);let Rt=A(g.internalFormat,ft,wt,g.colorSpace,g.isVideoTexture);mt(X,g);let dt;const Bt=g.mipmaps,Ct=g.isVideoTexture!==!0,$t=_t.__version===void 0||$===!0,C=q.dataReady,ct=y(g,Q);if(g.isDepthTexture)Rt=S(g.format===bi,g.type),$t&&(Ct?e.texStorage2D(i.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Rt,Q.width,Q.height,0,ft,wt,null));else if(g.isDataTexture)if(Bt.length>0){Ct&&$t&&e.texStorage2D(i.TEXTURE_2D,ct,Rt,Bt[0].width,Bt[0].height);for(let G=0,Z=Bt.length;G<Z;G++)dt=Bt[G],Ct?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,dt.width,dt.height,ft,wt,dt.data):e.texImage2D(i.TEXTURE_2D,G,Rt,dt.width,dt.height,0,ft,wt,dt.data);g.generateMipmaps=!1}else Ct?($t&&e.texStorage2D(i.TEXTURE_2D,ct,Rt,Q.width,Q.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,wt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,Q.width,Q.height,0,ft,wt,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ct&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Rt,Bt[0].width,Bt[0].height,Q.depth);for(let G=0,Z=Bt.length;G<Z;G++)if(dt=Bt[G],g.format!==ke)if(ft!==null)if(Ct){if(C)if(g.layerUpdates.size>0){const rt=jo(dt.width,dt.height,g.format,g.type);for(const lt of g.layerUpdates){const Ht=dt.data.subarray(lt*rt/dt.data.BYTES_PER_ELEMENT,(lt+1)*rt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,lt,dt.width,dt.height,1,ft,Ht,0,0)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,dt.width,dt.height,Q.depth,ft,dt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Rt,dt.width,dt.height,Q.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,dt.width,dt.height,Q.depth,ft,wt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Rt,dt.width,dt.height,Q.depth,0,ft,wt,dt.data)}else{Ct&&$t&&e.texStorage2D(i.TEXTURE_2D,ct,Rt,Bt[0].width,Bt[0].height);for(let G=0,Z=Bt.length;G<Z;G++)dt=Bt[G],g.format!==ke?ft!==null?Ct?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Rt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,dt.width,dt.height,ft,wt,dt.data):e.texImage2D(i.TEXTURE_2D,G,Rt,dt.width,dt.height,0,ft,wt,dt.data)}else if(g.isDataArrayTexture)if(Ct){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Rt,Q.width,Q.height,Q.depth),C)if(g.layerUpdates.size>0){const G=jo(Q.width,Q.height,g.format,g.type);for(const Z of g.layerUpdates){const rt=Q.data.subarray(Z*G/Q.data.BYTES_PER_ELEMENT,(Z+1)*G/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,ft,wt,rt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,wt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,ft,wt,Q.data);else if(g.isData3DTexture)Ct?($t&&e.texStorage3D(i.TEXTURE_3D,ct,Rt,Q.width,Q.height,Q.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,wt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,ft,wt,Q.data);else if(g.isFramebufferTexture){if($t)if(Ct)e.texStorage2D(i.TEXTURE_2D,ct,Rt,Q.width,Q.height);else{let G=Q.width,Z=Q.height;for(let rt=0;rt<ct;rt++)e.texImage2D(i.TEXTURE_2D,rt,Rt,G,Z,0,ft,wt,null),G>>=1,Z>>=1}}else if(Bt.length>0){if(Ct&&$t){const G=bt(Bt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Rt,G.width,G.height)}for(let G=0,Z=Bt.length;G<Z;G++)dt=Bt[G],Ct?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ft,wt,dt):e.texImage2D(i.TEXTURE_2D,G,Rt,ft,wt,dt);g.generateMipmaps=!1}else if(Ct){if($t){const G=bt(Q);e.texStorage2D(i.TEXTURE_2D,ct,Rt,G.width,G.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,wt,Q)}else e.texImage2D(i.TEXTURE_2D,0,Rt,ft,wt,Q);d(g)&&f(X),_t.__version=q.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function W(E,g,U){if(g.image.length!==6)return;const X=zt(E,g),$=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+U);const q=n.get($);if($.version!==q.__version||X===!0){e.activeTexture(i.TEXTURE0+U);const _t=Yt.getPrimaries(Yt.workingColorSpace),nt=g.colorSpace===gn?null:Yt.getPrimaries(g.colorSpace),ht=g.colorSpace===gn||_t===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Gt=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,ft=[];for(let Z=0;Z<6;Z++)!Gt&&!Q?ft[Z]=M(g.image[Z],!0,r.maxCubemapSize):ft[Z]=Q?g.image[Z].image:g.image[Z],ft[Z]=jt(g,ft[Z]);const wt=ft[0],Rt=s.convert(g.format,g.colorSpace),dt=s.convert(g.type),Bt=A(g.internalFormat,Rt,dt,g.colorSpace),Ct=g.isVideoTexture!==!0,$t=q.__version===void 0||X===!0,C=$.dataReady;let ct=y(g,wt);mt(i.TEXTURE_CUBE_MAP,g);let G;if(Gt){Ct&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Bt,wt.width,wt.height);for(let Z=0;Z<6;Z++){G=ft[Z].mipmaps;for(let rt=0;rt<G.length;rt++){const lt=G[rt];g.format!==ke?Rt!==null?Ct?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,lt.width,lt.height,Rt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,Bt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,lt.width,lt.height,Rt,dt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,Bt,lt.width,lt.height,0,Rt,dt,lt.data)}}}else{if(G=g.mipmaps,Ct&&$t){G.length>0&&ct++;const Z=bt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Bt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Ct?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ft[Z].width,ft[Z].height,Rt,dt,ft[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Bt,ft[Z].width,ft[Z].height,0,Rt,dt,ft[Z].data);for(let rt=0;rt<G.length;rt++){const Ht=G[rt].image[Z].image;Ct?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,Ht.width,Ht.height,Rt,dt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,Bt,Ht.width,Ht.height,0,Rt,dt,Ht.data)}}else{Ct?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Rt,dt,ft[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Bt,Rt,dt,ft[Z]);for(let rt=0;rt<G.length;rt++){const lt=G[rt];Ct?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,Rt,dt,lt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,Bt,Rt,dt,lt.image[Z])}}}d(g)&&f(i.TEXTURE_CUBE_MAP),q.__version=$.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Y(E,g,U,X,$,q){const _t=s.convert(U.format,U.colorSpace),nt=s.convert(U.type),ht=A(U.internalFormat,_t,nt,U.colorSpace);if(!n.get(g).__hasExternalTextures){const Q=Math.max(1,g.width>>q),ft=Math.max(1,g.height>>q);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,q,ht,Q,ft,g.depth,0,_t,nt,null):e.texImage2D($,q,ht,Q,ft,0,_t,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Ft(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,$,n.get(U).__webglTexture,0,Nt(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,$,n.get(U).__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(E,g,U){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){const X=g.depthTexture,$=X&&X.isDepthTexture?X.type:null,q=S(g.stencilBuffer,$),_t=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=Nt(g);Ft(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,q,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,q,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,E)}else{const X=g.textures;for(let $=0;$<X.length;$++){const q=X[$],_t=s.convert(q.format,q.colorSpace),nt=s.convert(q.type),ht=A(q.internalFormat,_t,nt,q.colorSpace),Gt=Nt(g);U&&Ft(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,ht,g.width,g.height):Ft(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,ht,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ht,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k(g.depthTexture,0);const X=n.get(g.depthTexture).__webglTexture,$=Nt(g);if(g.depthTexture.format===ui)Ft(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(g.depthTexture.format===bi)Ft(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function At(E){const g=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const X=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=X}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ut(g.__webglFramebuffer,E)}else if(U){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=i.createRenderbuffer(),ot(g.__webglDepthbuffer[X],E,!1);else{const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ot(g.__webglDepthbuffer,E,!1);else{const X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,$)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(E,g,U){const X=n.get(E);g!==void 0&&Y(X.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&At(E)}function Ot(E){const g=E.texture,U=n.get(E),X=n.get(g);E.addEventListener("dispose",R);const $=E.textures,q=E.isWebGLCubeRenderTarget===!0,_t=$.length>1;if(_t||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=g.version,o.memory.textures++),q){U.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[nt]=[];for(let ht=0;ht<g.mipmaps.length;ht++)U.__webglFramebuffer[nt][ht]=i.createFramebuffer()}else U.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let nt=0;nt<g.mipmaps.length;nt++)U.__webglFramebuffer[nt]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(_t)for(let nt=0,ht=$.length;nt<ht;nt++){const Gt=n.get($[nt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Ft(E)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let nt=0;nt<$.length;nt++){const ht=$[nt];U.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[nt]);const Gt=s.convert(ht.format,ht.colorSpace),Q=s.convert(ht.type),ft=A(ht.internalFormat,Gt,Q,ht.colorSpace,E.isXRRenderTarget===!0),wt=Nt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,ft,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,U.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(U.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),mt(i.TEXTURE_CUBE_MAP,g);for(let nt=0;nt<6;nt++)if(g.mipmaps&&g.mipmaps.length>0)for(let ht=0;ht<g.mipmaps.length;ht++)Y(U.__webglFramebuffer[nt][ht],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ht);else Y(U.__webglFramebuffer[nt],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);d(g)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let nt=0,ht=$.length;nt<ht;nt++){const Gt=$[nt],Q=n.get(Gt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),mt(i.TEXTURE_2D,Gt),Y(U.__webglFramebuffer,E,Gt,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,0),d(Gt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(nt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,X.__webglTexture),mt(nt,g),g.mipmaps&&g.mipmaps.length>0)for(let ht=0;ht<g.mipmaps.length;ht++)Y(U.__webglFramebuffer[ht],E,g,i.COLOR_ATTACHMENT0,nt,ht);else Y(U.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,nt,0);d(g)&&f(nt),e.unbindTexture()}E.depthBuffer&&At(E)}function Wt(E){const g=E.textures;for(let U=0,X=g.length;U<X;U++){const $=g[U];if(d($)){const q=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_t=n.get($).__webglTexture;e.bindTexture(q,_t),f(q),e.unbindTexture()}}}const Dt=[],w=[];function fe(E){if(E.samples>0){if(Ft(E)===!1){const g=E.textures,U=E.width,X=E.height;let $=i.COLOR_BUFFER_BIT;const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(E),nt=g.length>1;if(nt)for(let ht=0;ht<g.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ht=0;ht<g.length;ht++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);const Gt=n.get(g[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,U,X,0,0,U,X,$,i.NEAREST),c===!0&&(Dt.length=0,w.length=0,Dt.push(i.COLOR_ATTACHMENT0+ht),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Dt.push(q),w.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let ht=0;ht<g.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);const Gt=n.get(g[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Nt(E){return Math.min(r.maxSamples,E.samples)}function Ft(E){const g=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Et(E){const g=o.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function jt(E,g){const U=E.colorSpace,X=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Mn&&U!==gn&&(Yt.getTransfer(U)===te?(X!==ke||$!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}function bt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=x,this.setTexture2D=k,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=j,this.rebindTextures=St,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Ft}function L0(i,t){function e(n,r=gn){let s;const o=Yt.getTransfer(r);if(n===an)return i.UNSIGNED_BYTE;if(n===Ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===Oi)return i.UNSIGNED_SHORT;if(n===Aa)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===Ye)return i.FLOAT;if(n===Vi)return i.HALF_FLOAT;if(n===Dc)return i.ALPHA;if(n===Ic)return i.RGB;if(n===ke)return i.RGBA;if(n===Uc)return i.LUMINANCE;if(n===Nc)return i.LUMINANCE_ALPHA;if(n===ui)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===Ra)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===Fc)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===xr||n===Mr||n===Sr||n===Er)if(o===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xs||n===qs||n===Ys||n===Ks)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Xs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ys)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ks)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zs||n===js||n===Js)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zs||n===js)return o===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Js)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$s||n===Qs||n===ta||n===ea||n===na||n===ia||n===ra||n===sa||n===aa||n===oa||n===ca||n===la||n===ua||n===ha)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$s)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qs)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ta)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ea)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===na)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ia)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ra)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===aa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ca)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===la)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ua)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ha)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yr||n===fa||n===da)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===yr)return o===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===da)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oc||n===pa||n===ma||n===ba)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===yr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===pa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ma)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ba)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class D0 extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Fn extends ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I0={type:"move"};class Ss{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const M of t.hand.values()){const d=e.getJointPose(M,n),f=this._getHandJoint(l,M);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,_=.005;l.inputState.pinching&&p>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(I0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Fn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const U0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class F0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new pe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xn({vertexShader:U0,fragmentShader:N0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new Xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O0 extends _i{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,p=null,m=null,_=null;const M=new F0,d=e.getContextAttributes();let f=null,A=null;const S=[],y=[],N=new Ut;let R=null;const T=new De;T.layers.enable(1),T.viewport=new ne;const I=new De;I.layers.enable(2),I.viewport=new ne;const J=[T,I],b=new D0;b.layers.enable(1),b.layers.enable(2);let x=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=S[W];return Y===void 0&&(Y=new Ss,S[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=S[W];return Y===void 0&&(Y=new Ss,S[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=S[W];return Y===void 0&&(Y=new Ss,S[W]=Y),Y.getHandSpace()};function B(W){const Y=y.indexOf(W.inputSource);if(Y===-1)return;const ot=S[Y];ot!==void 0&&(ot.update(W.inputSource,W.frame,l||o),ot.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",K);for(let W=0;W<S.length;W++){const Y=y[W];Y!==null&&(y[W]=null,S[W].disconnect(Y))}x=null,z=null,M.reset(),t.setRenderTarget(f),m=null,p=null,h=null,r=null,A=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",k),r.addEventListener("inputsourceschange",K),d.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(N),r.renderState.layers===void 0){const Y={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,Y),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new zn(m.framebufferWidth,m.framebufferHeight,{format:ke,type:an,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let Y=null,ot=null,ut=null;d.depth&&(ut=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=d.stencil?bi:ui,ot=d.stencil?mi:Bn);const At={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};h=new XRWebGLBinding(r,e),p=h.createProjectionLayer(At),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),A=new zn(p.textureWidth,p.textureHeight,{format:ke,type:an,depthTexture:new Qc(p.textureWidth,p.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Vt.setContext(r),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(W){for(let Y=0;Y<W.removed.length;Y++){const ot=W.removed[Y],ut=y.indexOf(ot);ut>=0&&(y[ut]=null,S[ut].disconnect(ot))}for(let Y=0;Y<W.added.length;Y++){const ot=W.added[Y];let ut=y.indexOf(ot);if(ut===-1){for(let St=0;St<S.length;St++)if(St>=y.length){y.push(ot),ut=St;break}else if(y[St]===null){y[St]=ot,ut=St;break}if(ut===-1)break}const At=S[ut];At&&At.connect(ot)}}const H=new D,j=new D;function V(W,Y,ot){H.setFromMatrixPosition(Y.matrixWorld),j.setFromMatrixPosition(ot.matrixWorld);const ut=H.distanceTo(j),At=Y.projectionMatrix.elements,St=ot.projectionMatrix.elements,Ot=At[14]/(At[10]-1),Wt=At[14]/(At[10]+1),Dt=(At[9]+1)/At[5],w=(At[9]-1)/At[5],fe=(At[8]-1)/At[0],Nt=(St[8]+1)/St[0],Ft=Ot*fe,Et=Ot*Nt,jt=ut/(-fe+Nt),bt=jt*-fe;if(Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(bt),W.translateZ(jt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),At[10]===-1)W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const E=Ot+jt,g=Wt+jt,U=Ft-bt,X=Et+(ut-bt),$=Dt*Wt/g*E,q=w*Wt/g*E;W.projectionMatrix.makePerspective(U,X,$,q,E,g),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function at(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let Y=W.near,ot=W.far;M.texture!==null&&(M.depthNear>0&&(Y=M.depthNear),M.depthFar>0&&(ot=M.depthFar)),b.near=I.near=T.near=Y,b.far=I.far=T.far=ot,(x!==b.near||z!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),x=b.near,z=b.far);const ut=W.parent,At=b.cameras;at(b,ut);for(let St=0;St<At.length;St++)at(At[St],ut);At.length===2?V(b,T,I):b.projectionMatrix.copy(T.projectionMatrix),it(W,b,ut)};function it(W,Y,ot){ot===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(ot.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Bi*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(W){c=W,p!==null&&(p.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let mt=null;function zt(W,Y){if(u=Y.getViewerPose(l||o),_=Y,u!==null){const ot=u.views;m!==null&&(t.setRenderTargetFramebuffer(A,m.framebuffer),t.setRenderTarget(A));let ut=!1;ot.length!==b.cameras.length&&(b.cameras.length=0,ut=!0);for(let St=0;St<ot.length;St++){const Ot=ot[St];let Wt=null;if(m!==null)Wt=m.getViewport(Ot);else{const w=h.getViewSubImage(p,Ot);Wt=w.viewport,St===0&&(t.setRenderTargetTextures(A,w.colorTexture,p.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(A))}let Dt=J[St];Dt===void 0&&(Dt=new De,Dt.layers.enable(St),Dt.viewport=new ne,J[St]=Dt),Dt.matrix.fromArray(Ot.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Ot.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),St===0&&(b.matrix.copy(Dt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ut===!0&&b.cameras.push(Dt)}const At=r.enabledFeatures;if(At&&At.includes("depth-sensing")){const St=h.getDepthInformation(ot[0]);St&&St.isValid&&St.texture&&M.init(t,St,r.renderState)}}for(let ot=0;ot<S.length;ot++){const ut=y[ot],At=S[ot];ut!==null&&At!==void 0&&At.update(ut,Y,l||o)}mt&&mt(W,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),_=null}const Vt=new Jc;Vt.setAnimationLoop(zt),this.setAnimationLoop=function(W){mt=W},this.dispose=function(){}}}const Cn=new Ze,B0=new Jt;function z0(i,t){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,Kc(i)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function r(d,f,A,S,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(d,f):f.isMeshToonMaterial?(s(d,f),h(d,f)):f.isMeshPhongMaterial?(s(d,f),u(d,f)):f.isMeshStandardMaterial?(s(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,y)):f.isMeshMatcapMaterial?(s(d,f),_(d,f)):f.isMeshDepthMaterial?s(d,f):f.isMeshDistanceMaterial?(s(d,f),M(d,f)):f.isMeshNormalMaterial?s(d,f):f.isLineBasicMaterial?(o(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?c(d,f,A,S):f.isSpriteMaterial?l(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===ye&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===ye&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const A=t.get(f),S=A.envMap,y=A.envMapRotation;S&&(d.envMap.value=S,Cn.copy(y),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),d.envMapRotation.value.setFromMatrix4(B0.makeRotationFromEuler(Cn)),d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function o(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function c(d,f,A,S){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*A,d.scale.value=S*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function l(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function u(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function h(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,A){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ye&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=A.texture,d.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,f){f.matcap&&(d.matcap.value=f.matcap)}function M(d,f){const A=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(A.matrixWorld),d.nearDistance.value=A.shadow.camera.near,d.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function H0(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,S){const y=S.program;n.uniformBlockBinding(A,y)}function l(A,S){let y=r[A.id];y===void 0&&(_(A),y=u(A),r[A.id]=y,A.addEventListener("dispose",d));const N=S.program;n.updateUBOMapping(A,N);const R=t.render.frame;s[A.id]!==R&&(p(A),s[A.id]=R)}function u(A){const S=h();A.__bindingPointIndex=S;const y=i.createBuffer(),N=A.__size,R=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,N,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const S=r[A.id],y=A.uniforms,N=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,T=y.length;R<T;R++){const I=Array.isArray(y[R])?y[R]:[y[R]];for(let J=0,b=I.length;J<b;J++){const x=I[J];if(m(x,R,J,N)===!0){const z=x.__offset,B=Array.isArray(x.value)?x.value:[x.value];let k=0;for(let K=0;K<B.length;K++){const H=B[K],j=M(H);typeof H=="number"||typeof H=="boolean"?(x.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,z+k,x.__data)):H.isMatrix3?(x.__data[0]=H.elements[0],x.__data[1]=H.elements[1],x.__data[2]=H.elements[2],x.__data[3]=0,x.__data[4]=H.elements[3],x.__data[5]=H.elements[4],x.__data[6]=H.elements[5],x.__data[7]=0,x.__data[8]=H.elements[6],x.__data[9]=H.elements[7],x.__data[10]=H.elements[8],x.__data[11]=0):(H.toArray(x.__data,k),k+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,x.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,S,y,N){const R=A.value,T=S+"_"+y;if(N[T]===void 0)return typeof R=="number"||typeof R=="boolean"?N[T]=R:N[T]=R.clone(),!0;{const I=N[T];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return N[T]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function _(A){const S=A.uniforms;let y=0;const N=16;for(let T=0,I=S.length;T<I;T++){const J=Array.isArray(S[T])?S[T]:[S[T]];for(let b=0,x=J.length;b<x;b++){const z=J[b],B=Array.isArray(z.value)?z.value:[z.value];for(let k=0,K=B.length;k<K;k++){const H=B[k],j=M(H),V=y%N,at=V%j.boundary,it=V+at;y+=at,it!==0&&N-it<j.storage&&(y+=N-it),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=j.storage}}}const R=y%N;return R>0&&(y+=N-R),A.__size=y,A.__cache={},this}function M(A){const S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function d(A){const S=A.target;S.removeEventListener("dispose",d);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(const A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class G0{constructor(t={}){const{canvas:e=wu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),_=new Int32Array(4);let M=null,d=null;const f=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=vn,this.toneMappingExposure=1;const S=this;let y=!1,N=0,R=0,T=null,I=-1,J=null;const b=new ne,x=new ne;let z=null;const B=new It(0);let k=0,K=e.width,H=e.height,j=1,V=null,at=null;const it=new ne(0,0,K,H),mt=new ne(0,0,K,H);let zt=!1;const Vt=new Na;let W=!1,Y=!1;const ot=new Jt,ut=new Jt,At=new D,St=new ne,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Dt(){return T===null?j:1}let w=n;function fe(v,P){return e.getContext(v,P)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ea}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),w===null){const P="webgl2";if(w=fe(P,v),w===null)throw fe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Nt,Ft,Et,jt,bt,E,g,U,X,$,q,_t,nt,ht,Gt,Q,ft,wt,Rt,dt,Bt,Ct,$t,C;function ct(){Nt=new qf(w),Nt.init(),Ct=new L0(w,Nt),Ft=new Hf(w,Nt,t,Ct),Et=new R0(w),Ft.reverseDepthBuffer&&Et.buffers.depth.setReversed(!0),jt=new Zf(w),bt=new d0,E=new P0(w,Nt,Et,bt,Ft,Ct,jt),g=new Vf(S),U=new Xf(S),X=new eh(w),$t=new Bf(w,X),$=new Yf(w,X,jt,$t),q=new Jf(w,$,X,jt),Rt=new jf(w,Ft,E),Q=new Gf(bt),_t=new f0(S,g,U,Nt,Ft,$t,Q),nt=new z0(S,bt),ht=new m0,Gt=new M0(Nt),wt=new Of(S,g,U,Et,q,p,c),ft=new T0(S,q,Ft),C=new H0(w,jt,Ft,Et),dt=new zf(w,Nt,jt),Bt=new Kf(w,Nt,jt),jt.programs=_t.programs,S.capabilities=Ft,S.extensions=Nt,S.properties=bt,S.renderLists=ht,S.shadowMap=ft,S.state=Et,S.info=jt}ct();const G=new O0(S,w);this.xr=G,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=Nt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Nt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(K,H,!1))},this.getSize=function(v){return v.set(K,H)},this.setSize=function(v,P,F=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=v,H=P,e.width=Math.floor(v*j),e.height=Math.floor(P*j),F===!0&&(e.style.width=v+"px",e.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(K*j,H*j).floor()},this.setDrawingBufferSize=function(v,P,F){K=v,H=P,j=F,e.width=Math.floor(v*F),e.height=Math.floor(P*F),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(b)},this.getViewport=function(v){return v.copy(it)},this.setViewport=function(v,P,F,O){v.isVector4?it.set(v.x,v.y,v.z,v.w):it.set(v,P,F,O),Et.viewport(b.copy(it).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy(mt)},this.setScissor=function(v,P,F,O){v.isVector4?mt.set(v.x,v.y,v.z,v.w):mt.set(v,P,F,O),Et.scissor(x.copy(mt).multiplyScalar(j).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(v){Et.setScissorTest(zt=v)},this.setOpaqueSort=function(v){V=v},this.setTransparentSort=function(v){at=v},this.getClearColor=function(v){return v.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(v=!0,P=!0,F=!0){let O=0;if(v){let L=!1;if(T!==null){const tt=T.texture.format;L=tt===La||tt===Pa||tt===Ca}if(L){const tt=T.texture.type,st=tt===an||tt===Bn||tt===Oi||tt===mi||tt===Ta||tt===wa,pt=wt.getClearColor(),gt=wt.getClearAlpha(),yt=pt.r,Tt=pt.g,vt=pt.b;st?(m[0]=yt,m[1]=Tt,m[2]=vt,m[3]=gt,w.clearBufferuiv(w.COLOR,0,m)):(_[0]=yt,_[1]=Tt,_[2]=vt,_[3]=gt,w.clearBufferiv(w.COLOR,0,_))}else O|=w.COLOR_BUFFER_BIT}P&&(O|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(O|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ht.dispose(),Gt.dispose(),bt.dispose(),g.dispose(),U.dispose(),q.dispose(),$t.dispose(),C.dispose(),_t.dispose(),G.dispose(),G.removeEventListener("sessionstart",qa),G.removeEventListener("sessionend",Ya),En.stop()};function Z(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const v=jt.autoReset,P=ft.enabled,F=ft.autoUpdate,O=ft.needsUpdate,L=ft.type;ct(),jt.autoReset=v,ft.enabled=P,ft.autoUpdate=F,ft.needsUpdate=O,ft.type=L}function lt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ht(v){const P=v.target;P.removeEventListener("dispose",Ht),se(P)}function se(v){Se(v),bt.remove(v)}function Se(v){const P=bt.get(v).programs;P!==void 0&&(P.forEach(function(F){_t.releaseProgram(F)}),v.isShaderMaterial&&_t.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,F,O,L,tt){P===null&&(P=Ot);const st=L.isMesh&&L.matrixWorld.determinant()<0,pt=vl(v,P,F,O,L);Et.setMaterial(O,st);let gt=F.index,yt=1;if(O.wireframe===!0){if(gt=$.getWireframeAttribute(F),gt===void 0)return;yt=2}const Tt=F.drawRange,vt=F.attributes.position;let Kt=Tt.start*yt,Qt=(Tt.start+Tt.count)*yt;tt!==null&&(Kt=Math.max(Kt,tt.start*yt),Qt=Math.min(Qt,(tt.start+tt.count)*yt)),gt!==null?(Kt=Math.max(Kt,0),Qt=Math.min(Qt,gt.count)):vt!=null&&(Kt=Math.max(Kt,0),Qt=Math.min(Qt,vt.count));const ee=Qt-Kt;if(ee<0||ee===1/0)return;$t.setup(L,O,pt,F,gt);let Ae,Xt=dt;if(gt!==null&&(Ae=X.get(gt),Xt=Bt,Xt.setIndex(Ae)),L.isMesh)O.wireframe===!0?(Et.setLineWidth(O.wireframeLinewidth*Dt()),Xt.setMode(w.LINES)):Xt.setMode(w.TRIANGLES);else if(L.isLine){let xt=O.linewidth;xt===void 0&&(xt=1),Et.setLineWidth(xt*Dt()),L.isLineSegments?Xt.setMode(w.LINES):L.isLineLoop?Xt.setMode(w.LINE_LOOP):Xt.setMode(w.LINE_STRIP)}else L.isPoints?Xt.setMode(w.POINTS):L.isSprite&&Xt.setMode(w.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Xt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const xt=L._multiDrawStarts,de=L._multiDrawCounts,qt=L._multiDrawCount,Fe=gt?X.get(gt).bytesPerElement:1,Gn=bt.get(O).currentProgram.getUniforms();for(let Te=0;Te<qt;Te++)Gn.setValue(w,"_gl_DrawID",Te),Xt.render(xt[Te]/Fe,de[Te])}else if(L.isInstancedMesh)Xt.renderInstances(Kt,ee,L.count);else if(F.isInstancedBufferGeometry){const xt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,de=Math.min(F.instanceCount,xt);Xt.renderInstances(Kt,ee,de)}else Xt.render(Kt,ee)};function kt(v,P,F){v.transparent===!0&&v.side===He&&v.forceSinglePass===!1?(v.side=ye,v.needsUpdate=!0,Ki(v,P,F),v.side=Ke,v.needsUpdate=!0,Ki(v,P,F),v.side=He):Ki(v,P,F)}this.compile=function(v,P,F=null){F===null&&(F=v),d=Gt.get(F),d.init(P),A.push(d),F.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),v!==F&&v.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights();const O=new Set;return v.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const tt=L.material;if(tt)if(Array.isArray(tt))for(let st=0;st<tt.length;st++){const pt=tt[st];kt(pt,F,L),O.add(pt)}else kt(tt,F,L),O.add(tt)}),A.pop(),d=null,O},this.compileAsync=function(v,P,F=null){const O=this.compile(v,P,F);return new Promise(L=>{function tt(){if(O.forEach(function(st){bt.get(st).currentProgram.isReady()&&O.delete(st)}),O.size===0){L(v);return}setTimeout(tt,10)}Nt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Ee=null;function je(v){Ee&&Ee(v)}function qa(){En.stop()}function Ya(){En.start()}const En=new Jc;En.setAnimationLoop(je),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(v){Ee=v,G.setAnimationLoop(v),v===null?En.stop():En.start()},G.addEventListener("sessionstart",qa),G.addEventListener("sessionend",Ya),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(P),P=G.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,P,T),d=Gt.get(v,A.length),d.init(P),A.push(d),ut.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Vt.setFromProjectionMatrix(ut),Y=this.localClippingEnabled,W=Q.init(this.clippingPlanes,Y),M=ht.get(v,f.length),M.init(),f.push(M),G.enabled===!0&&G.isPresenting===!0){const tt=S.xr.getDepthSensingMesh();tt!==null&&Wr(tt,P,-1/0,S.sortObjects)}Wr(v,P,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(V,at),Wt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Wt&&wt.addToRenderList(M,v),this.info.render.frame++,W===!0&&Q.beginShadows();const F=d.state.shadowsArray;ft.render(F,v,P),W===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=M.opaque,L=M.transmissive;if(d.setupLights(),P.isArrayCamera){const tt=P.cameras;if(L.length>0)for(let st=0,pt=tt.length;st<pt;st++){const gt=tt[st];Za(O,L,v,gt)}Wt&&wt.render(v);for(let st=0,pt=tt.length;st<pt;st++){const gt=tt[st];Ka(M,v,gt,gt.viewport)}}else L.length>0&&Za(O,L,v,P),Wt&&wt.render(v),Ka(M,v,P);T!==null&&(E.updateMultisampleRenderTarget(T),E.updateRenderTargetMipmap(T)),v.isScene===!0&&v.onAfterRender(S,v,P),$t.resetDefaultState(),I=-1,J=null,A.pop(),A.length>0?(d=A[A.length-1],W===!0&&Q.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,f.pop(),f.length>0?M=f[f.length-1]:M=null};function Wr(v,P,F,O){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Vt.intersectsSprite(v)){O&&St.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ut);const st=q.update(v),pt=v.material;pt.visible&&M.push(v,st,pt,F,St.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Vt.intersectsObject(v))){const st=q.update(v),pt=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),St.copy(v.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),St.copy(st.boundingSphere.center)),St.applyMatrix4(v.matrixWorld).applyMatrix4(ut)),Array.isArray(pt)){const gt=st.groups;for(let yt=0,Tt=gt.length;yt<Tt;yt++){const vt=gt[yt],Kt=pt[vt.materialIndex];Kt&&Kt.visible&&M.push(v,st,Kt,F,St.z,vt)}}else pt.visible&&M.push(v,st,pt,F,St.z,null)}}const tt=v.children;for(let st=0,pt=tt.length;st<pt;st++)Wr(tt[st],P,F,O)}function Ka(v,P,F,O){const L=v.opaque,tt=v.transmissive,st=v.transparent;d.setupLightsView(F),W===!0&&Q.setGlobalState(S.clippingPlanes,F),O&&Et.viewport(b.copy(O)),L.length>0&&Yi(L,P,F),tt.length>0&&Yi(tt,P,F),st.length>0&&Yi(st,P,F),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Za(v,P,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new zn(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?Vi:an,minFilter:Nn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const tt=d.state.transmissionRenderTarget[O.id],st=O.viewport||b;tt.setSize(st.z,st.w);const pt=S.getRenderTarget();S.setRenderTarget(tt),S.getClearColor(B),k=S.getClearAlpha(),k<1&&S.setClearColor(16777215,.5),S.clear(),Wt&&wt.render(F);const gt=S.toneMapping;S.toneMapping=vn;const yt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),W===!0&&Q.setGlobalState(S.clippingPlanes,O),Yi(v,F,O),E.updateMultisampleRenderTarget(tt),E.updateRenderTargetMipmap(tt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let vt=0,Kt=P.length;vt<Kt;vt++){const Qt=P[vt],ee=Qt.object,Ae=Qt.geometry,Xt=Qt.material,xt=Qt.group;if(Xt.side===He&&ee.layers.test(O.layers)){const de=Xt.side;Xt.side=ye,Xt.needsUpdate=!0,ja(ee,F,O,Ae,Xt,xt),Xt.side=de,Xt.needsUpdate=!0,Tt=!0}}Tt===!0&&(E.updateMultisampleRenderTarget(tt),E.updateRenderTargetMipmap(tt))}S.setRenderTarget(pt),S.setClearColor(B,k),yt!==void 0&&(O.viewport=yt),S.toneMapping=gt}function Yi(v,P,F){const O=P.isScene===!0?P.overrideMaterial:null;for(let L=0,tt=v.length;L<tt;L++){const st=v[L],pt=st.object,gt=st.geometry,yt=O===null?st.material:O,Tt=st.group;pt.layers.test(F.layers)&&ja(pt,P,F,gt,yt,Tt)}}function ja(v,P,F,O,L,tt){v.onBeforeRender(S,P,F,O,L,tt),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),L.onBeforeRender(S,P,F,O,v,tt),L.transparent===!0&&L.side===He&&L.forceSinglePass===!1?(L.side=ye,L.needsUpdate=!0,S.renderBufferDirect(F,P,O,L,v,tt),L.side=Ke,L.needsUpdate=!0,S.renderBufferDirect(F,P,O,L,v,tt),L.side=He):S.renderBufferDirect(F,P,O,L,v,tt),v.onAfterRender(S,P,F,O,L,tt)}function Ki(v,P,F){P.isScene!==!0&&(P=Ot);const O=bt.get(v),L=d.state.lights,tt=d.state.shadowsArray,st=L.state.version,pt=_t.getParameters(v,L.state,tt,P,F),gt=_t.getProgramCacheKey(pt);let yt=O.programs;O.environment=v.isMeshStandardMaterial?P.environment:null,O.fog=P.fog,O.envMap=(v.isMeshStandardMaterial?U:g).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,yt===void 0&&(v.addEventListener("dispose",Ht),yt=new Map,O.programs=yt);let Tt=yt.get(gt);if(Tt!==void 0){if(O.currentProgram===Tt&&O.lightsStateVersion===st)return $a(v,pt),Tt}else pt.uniforms=_t.getUniforms(v),v.onBeforeCompile(pt,S),Tt=_t.acquireProgram(pt,gt),yt.set(gt,Tt),O.uniforms=pt.uniforms;const vt=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(vt.clippingPlanes=Q.uniform),$a(v,pt),O.needsLights=Ml(v),O.lightsStateVersion=st,O.needsLights&&(vt.ambientLightColor.value=L.state.ambient,vt.lightProbe.value=L.state.probe,vt.directionalLights.value=L.state.directional,vt.directionalLightShadows.value=L.state.directionalShadow,vt.spotLights.value=L.state.spot,vt.spotLightShadows.value=L.state.spotShadow,vt.rectAreaLights.value=L.state.rectArea,vt.ltc_1.value=L.state.rectAreaLTC1,vt.ltc_2.value=L.state.rectAreaLTC2,vt.pointLights.value=L.state.point,vt.pointLightShadows.value=L.state.pointShadow,vt.hemisphereLights.value=L.state.hemi,vt.directionalShadowMap.value=L.state.directionalShadowMap,vt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,vt.spotShadowMap.value=L.state.spotShadowMap,vt.spotLightMatrix.value=L.state.spotLightMatrix,vt.spotLightMap.value=L.state.spotLightMap,vt.pointShadowMap.value=L.state.pointShadowMap,vt.pointShadowMatrix.value=L.state.pointShadowMatrix),O.currentProgram=Tt,O.uniformsList=null,Tt}function Ja(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=Tr.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function $a(v,P){const F=bt.get(v);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.batchingColor=P.batchingColor,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.instancingMorph=P.instancingMorph,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function vl(v,P,F,O,L){P.isScene!==!0&&(P=Ot),E.resetTextureUnits();const tt=P.fog,st=O.isMeshStandardMaterial?P.environment:null,pt=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Mn,gt=(O.isMeshStandardMaterial?U:g).get(O.envMap||st),yt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Tt=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),vt=!!F.morphAttributes.position,Kt=!!F.morphAttributes.normal,Qt=!!F.morphAttributes.color;let ee=vn;O.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ee=S.toneMapping);const Ae=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Xt=Ae!==void 0?Ae.length:0,xt=bt.get(O),de=d.state.lights;if(W===!0&&(Y===!0||v!==J)){const Pe=v===J&&O.id===I;Q.setState(O,v,Pe)}let qt=!1;O.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==de.state.version||xt.outputColorSpace!==pt||L.isBatchedMesh&&xt.batching===!1||!L.isBatchedMesh&&xt.batching===!0||L.isBatchedMesh&&xt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&xt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&xt.instancing===!1||!L.isInstancedMesh&&xt.instancing===!0||L.isSkinnedMesh&&xt.skinning===!1||!L.isSkinnedMesh&&xt.skinning===!0||L.isInstancedMesh&&xt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&xt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&xt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&xt.instancingMorph===!1&&L.morphTexture!==null||xt.envMap!==gt||O.fog===!0&&xt.fog!==tt||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Q.numPlanes||xt.numIntersection!==Q.numIntersection)||xt.vertexAlphas!==yt||xt.vertexTangents!==Tt||xt.morphTargets!==vt||xt.morphNormals!==Kt||xt.morphColors!==Qt||xt.toneMapping!==ee||xt.morphTargetsCount!==Xt)&&(qt=!0):(qt=!0,xt.__version=O.version);let Fe=xt.currentProgram;qt===!0&&(Fe=Ki(O,P,L));let Gn=!1,Te=!1,Xr=!1;const re=Fe.getUniforms(),cn=xt.uniforms;if(Et.useProgram(Fe.program)&&(Gn=!0,Te=!0,Xr=!0),O.id!==I&&(I=O.id,Te=!0),Gn||J!==v){Ft.reverseDepthBuffer?(ot.copy(v.projectionMatrix),Cu(ot),Pu(ot),re.setValue(w,"projectionMatrix",ot)):re.setValue(w,"projectionMatrix",v.projectionMatrix),re.setValue(w,"viewMatrix",v.matrixWorldInverse);const Pe=re.map.cameraPosition;Pe!==void 0&&Pe.setValue(w,At.setFromMatrixPosition(v.matrixWorld)),Ft.logarithmicDepthBuffer&&re.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&re.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),J!==v&&(J=v,Te=!0,Xr=!0)}if(L.isSkinnedMesh){re.setOptional(w,L,"bindMatrix"),re.setOptional(w,L,"bindMatrixInverse");const Pe=L.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),re.setValue(w,"boneTexture",Pe.boneTexture,E))}L.isBatchedMesh&&(re.setOptional(w,L,"batchingTexture"),re.setValue(w,"batchingTexture",L._matricesTexture,E),re.setOptional(w,L,"batchingIdTexture"),re.setValue(w,"batchingIdTexture",L._indirectTexture,E),re.setOptional(w,L,"batchingColorTexture"),L._colorsTexture!==null&&re.setValue(w,"batchingColorTexture",L._colorsTexture,E));const qr=F.morphAttributes;if((qr.position!==void 0||qr.normal!==void 0||qr.color!==void 0)&&Rt.update(L,F,Fe),(Te||xt.receiveShadow!==L.receiveShadow)&&(xt.receiveShadow=L.receiveShadow,re.setValue(w,"receiveShadow",L.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(cn.envMap.value=gt,cn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&P.environment!==null&&(cn.envMapIntensity.value=P.environmentIntensity),Te&&(re.setValue(w,"toneMappingExposure",S.toneMappingExposure),xt.needsLights&&xl(cn,Xr),tt&&O.fog===!0&&nt.refreshFogUniforms(cn,tt),nt.refreshMaterialUniforms(cn,O,j,H,d.state.transmissionRenderTarget[v.id]),Tr.upload(w,Ja(xt),cn,E)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Tr.upload(w,Ja(xt),cn,E),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&re.setValue(w,"center",L.center),re.setValue(w,"modelViewMatrix",L.modelViewMatrix),re.setValue(w,"normalMatrix",L.normalMatrix),re.setValue(w,"modelMatrix",L.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Pe=O.uniformsGroups;for(let Yr=0,Sl=Pe.length;Yr<Sl;Yr++){const Qa=Pe[Yr];C.update(Qa,Fe),C.bind(Qa,Fe)}}return Fe}function xl(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Ml(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(v,P,F){bt.get(v.texture).__webglTexture=P,bt.get(v.depthTexture).__webglTexture=F;const O=bt.get(v);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,P){const F=bt.get(v);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,F=0){T=v,N=P,R=F;let O=!0,L=null,tt=!1,st=!1;if(v){const gt=bt.get(v);if(gt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(w.FRAMEBUFFER,null),O=!1;else if(gt.__webglFramebuffer===void 0)E.setupRenderTarget(v);else if(gt.__hasExternalTextures)E.rebindTextures(v,bt.get(v.texture).__webglTexture,bt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const vt=v.depthTexture;if(gt.__boundDepthTexture!==vt){if(vt!==null&&bt.has(vt)&&(v.width!==vt.image.width||v.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(v)}}const yt=v.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(st=!0);const Tt=bt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Tt[P])?L=Tt[P][F]:L=Tt[P],tt=!0):v.samples>0&&E.useMultisampledRTT(v)===!1?L=bt.get(v).__webglMultisampledFramebuffer:Array.isArray(Tt)?L=Tt[F]:L=Tt,b.copy(v.viewport),x.copy(v.scissor),z=v.scissorTest}else b.copy(it).multiplyScalar(j).floor(),x.copy(mt).multiplyScalar(j).floor(),z=zt;if(Et.bindFramebuffer(w.FRAMEBUFFER,L)&&O&&Et.drawBuffers(v,L),Et.viewport(b),Et.scissor(x),Et.setScissorTest(z),tt){const gt=bt.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+P,gt.__webglTexture,F)}else if(st){const gt=bt.get(v.texture),yt=P||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,gt.__webglTexture,F||0,yt)}I=-1},this.readRenderTargetPixels=function(v,P,F,O,L,tt,st){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=bt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&st!==void 0&&(pt=pt[st]),pt){Et.bindFramebuffer(w.FRAMEBUFFER,pt);try{const gt=v.texture,yt=gt.format,Tt=gt.type;if(!Ft.textureFormatReadable(yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-O&&F>=0&&F<=v.height-L&&w.readPixels(P,F,O,L,Ct.convert(yt),Ct.convert(Tt),tt)}finally{const gt=T!==null?bt.get(T).__webglFramebuffer:null;Et.bindFramebuffer(w.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(v,P,F,O,L,tt,st){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=bt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&st!==void 0&&(pt=pt[st]),pt){const gt=v.texture,yt=gt.format,Tt=gt.type;if(!Ft.textureFormatReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=v.width-O&&F>=0&&F<=v.height-L){Et.bindFramebuffer(w.FRAMEBUFFER,pt);const vt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,vt),w.bufferData(w.PIXEL_PACK_BUFFER,tt.byteLength,w.STREAM_READ),w.readPixels(P,F,O,L,Ct.convert(yt),Ct.convert(Tt),0);const Kt=T!==null?bt.get(T).__webglFramebuffer:null;Et.bindFramebuffer(w.FRAMEBUFFER,Kt);const Qt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Ru(w,Qt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,vt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,tt),w.deleteBuffer(vt),w.deleteSync(Qt),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,P=null,F=0){v.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,v=arguments[1]);const O=Math.pow(2,-F),L=Math.floor(v.image.width*O),tt=Math.floor(v.image.height*O),st=P!==null?P.x:0,pt=P!==null?P.y:0;E.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,F,0,0,st,pt,L,tt),Et.unbindTexture()},this.copyTextureToTexture=function(v,P,F=null,O=null,L=0){v.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,v=arguments[1],P=arguments[2],L=arguments[3]||0,F=null);let tt,st,pt,gt,yt,Tt;F!==null?(tt=F.max.x-F.min.x,st=F.max.y-F.min.y,pt=F.min.x,gt=F.min.y):(tt=v.image.width,st=v.image.height,pt=0,gt=0),O!==null?(yt=O.x,Tt=O.y):(yt=0,Tt=0);const vt=Ct.convert(P.format),Kt=Ct.convert(P.type);E.setTexture2D(P,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,P.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,P.unpackAlignment);const Qt=w.getParameter(w.UNPACK_ROW_LENGTH),ee=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ae=w.getParameter(w.UNPACK_SKIP_PIXELS),Xt=w.getParameter(w.UNPACK_SKIP_ROWS),xt=w.getParameter(w.UNPACK_SKIP_IMAGES),de=v.isCompressedTexture?v.mipmaps[L]:v.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,de.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,de.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,pt),w.pixelStorei(w.UNPACK_SKIP_ROWS,gt),v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,L,yt,Tt,tt,st,vt,Kt,de.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,L,yt,Tt,de.width,de.height,vt,de.data):w.texSubImage2D(w.TEXTURE_2D,L,yt,Tt,tt,st,vt,Kt,de),w.pixelStorei(w.UNPACK_ROW_LENGTH,Qt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ee),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ae),w.pixelStorei(w.UNPACK_SKIP_ROWS,Xt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,xt),L===0&&P.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(v,P,F=null,O=null,L=0){v.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,v=arguments[2],P=arguments[3],L=arguments[4]||0);let tt,st,pt,gt,yt,Tt,vt,Kt,Qt;const ee=v.isCompressedTexture?v.mipmaps[L]:v.image;F!==null?(tt=F.max.x-F.min.x,st=F.max.y-F.min.y,pt=F.max.z-F.min.z,gt=F.min.x,yt=F.min.y,Tt=F.min.z):(tt=ee.width,st=ee.height,pt=ee.depth,gt=0,yt=0,Tt=0),O!==null?(vt=O.x,Kt=O.y,Qt=O.z):(vt=0,Kt=0,Qt=0);const Ae=Ct.convert(P.format),Xt=Ct.convert(P.type);let xt;if(P.isData3DTexture)E.setTexture3D(P,0),xt=w.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)E.setTexture2DArray(P,0),xt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,P.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,P.unpackAlignment);const de=w.getParameter(w.UNPACK_ROW_LENGTH),qt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Fe=w.getParameter(w.UNPACK_SKIP_PIXELS),Gn=w.getParameter(w.UNPACK_SKIP_ROWS),Te=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ee.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ee.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,gt),w.pixelStorei(w.UNPACK_SKIP_ROWS,yt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Tt),v.isDataTexture||v.isData3DTexture?w.texSubImage3D(xt,L,vt,Kt,Qt,tt,st,pt,Ae,Xt,ee.data):P.isCompressedArrayTexture?w.compressedTexSubImage3D(xt,L,vt,Kt,Qt,tt,st,pt,Ae,ee.data):w.texSubImage3D(xt,L,vt,Kt,Qt,tt,st,pt,Ae,Xt,ee),w.pixelStorei(w.UNPACK_ROW_LENGTH,de),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,qt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Fe),w.pixelStorei(w.UNPACK_SKIP_ROWS,Gn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Te),L===0&&P.generateMipmaps&&w.generateMipmap(xt),Et.unbindTexture()},this.initRenderTarget=function(v){bt.get(v).__webglFramebuffer===void 0&&E.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?E.setTextureCube(v,0):v.isData3DTexture?E.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?E.setTexture2DArray(v,0):E.setTexture2D(v,0),Et.unbindTexture()},this.resetState=function(){N=0,R=0,T=null,Et.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Da?"display-p3":"srgb",e.unpackColorSpace=Yt.workingColorSpace===zr?"display-p3":"srgb"}}class Oa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new Oa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class V0 extends ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class k0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ga,this.updateRanges=[],this.version=0,this.uuid=sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _e=new D;class Dr{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ve(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ve(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ve(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ve(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ve(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Dr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ba extends vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ni;const wi=new D,ii=new D,ri=new D,si=new Ut,Ri=new Ut,rl=new Jt,br=new D,Ci=new D,gr=new D,Jo=new Ut,Es=new Ut,$o=new Ut;class sl extends ie{constructor(t=new Ba){if(super(),this.isSprite=!0,this.type="Sprite",ni===void 0){ni=new We;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new k0(e,5);ni.setIndex([0,1,2,0,2,3]),ni.setAttribute("position",new Dr(n,3,0,!1)),ni.setAttribute("uv",new Dr(n,2,3,!1))}this.geometry=ni,this.material=t,this.center=new Ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ii.setFromMatrixScale(this.matrixWorld),rl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ri.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ii.multiplyScalar(-ri.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;_r(br.set(-.5,-.5,0),ri,o,ii,r,s),_r(Ci.set(.5,-.5,0),ri,o,ii,r,s),_r(gr.set(.5,.5,0),ri,o,ii,r,s),Jo.set(0,0),Es.set(1,0),$o.set(1,1);let a=t.ray.intersectTriangle(br,Ci,gr,!1,wi);if(a===null&&(_r(Ci.set(-.5,.5,0),ri,o,ii,r,s),Es.set(0,1),a=t.ray.intersectTriangle(br,gr,Ci,!1,wi),a===null))return;const c=t.ray.origin.distanceTo(wi);c<t.near||c>t.far||e.push({distance:c,point:wi.clone(),uv:Ie.getInterpolation(wi,br,Ci,gr,Jo,Es,$o,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function _r(i,t,e,n,r,s){si.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Ri.x=s*si.x-r*si.y,Ri.y=r*si.x+s*si.y):Ri.copy(si),i.copy(t),i.x+=Ri.x,i.y+=Ri.y,i.applyMatrix4(rl)}class al extends pe{constructor(t=null,e=1,n=1,r,s,o,a,c,l=he,u=he,h,p){super(null,o,a,c,l,u,r,s,h,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qo extends Ce{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ai=new Jt,tc=new Jt,vr=[],ec=new Sn,W0=new Jt,Pi=new ge,Li=new Wi;class Gr extends ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,W0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ai),ec.copy(t.boundingBox).applyMatrix4(ai),this.boundingBox.union(ec)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ai),Li.copy(t.boundingSphere).applyMatrix4(ai),this.boundingSphere.union(Li)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Pi.geometry=this.geometry,Pi.material=this.material,Pi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Li.copy(this.boundingSphere),Li.applyMatrix4(n),t.ray.intersectsSphere(Li)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ai),tc.multiplyMatrices(n,ai),Pi.matrixWorld=tc,Pi.raycast(t,vr);for(let o=0,a=vr.length;o<a;o++){const c=vr[o];c.instanceId=s,c.object=this,e.push(c)}vr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new al(new Float32Array(r*this.count),r,this.count,Ra,Ye));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ol extends pe{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vr extends We{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],p=[],m=[];let _=0;const M=[],d=n/2;let f=0;A(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(p,3)),this.setAttribute("uv",new Me(m,2));function A(){const y=new D,N=new D;let R=0;const T=(e-t)/n;for(let I=0;I<=s;I++){const J=[],b=I/s,x=b*(e-t)+t;for(let z=0;z<=r;z++){const B=z/r,k=B*c+a,K=Math.sin(k),H=Math.cos(k);N.x=x*K,N.y=-b*n+d,N.z=x*H,h.push(N.x,N.y,N.z),y.set(K,T,H).normalize(),p.push(y.x,y.y,y.z),m.push(B,1-b),J.push(_++)}M.push(J)}for(let I=0;I<r;I++)for(let J=0;J<s;J++){const b=M[J][I],x=M[J+1][I],z=M[J+1][I+1],B=M[J][I+1];t>0&&(u.push(b,x,B),R+=3),e>0&&(u.push(x,z,B),R+=3)}l.addGroup(f,R,0),f+=R}function S(y){const N=_,R=new Ut,T=new D;let I=0;const J=y===!0?t:e,b=y===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,d*b,0),p.push(0,b,0),m.push(.5,.5),_++;const x=_;for(let z=0;z<=r;z++){const k=z/r*c+a,K=Math.cos(k),H=Math.sin(k);T.x=J*H,T.y=d*b,T.z=J*K,h.push(T.x,T.y,T.z),p.push(0,b,0),R.x=K*.5+.5,R.y=H*.5*b+.5,m.push(R.x,R.y),_++}for(let z=0;z<r;z++){const B=N+z,k=x+z;y===!0?u.push(k,k+1,B):u.push(k+1,k,B),I+=3}l.addGroup(f,I,y===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qi extends Vr{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new qi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class za extends We{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let h=t;const p=(e-t)/r,m=new D,_=new Ut;for(let M=0;M<=r;M++){for(let d=0;d<=n;d++){const f=s+d/n*o;m.x=h*Math.cos(f),m.y=h*Math.sin(f),c.push(m.x,m.y,m.z),l.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,u.push(_.x,_.y)}h+=p}for(let M=0;M<r;M++){const d=M*(n+1);for(let f=0;f<n;f++){const A=f+d,S=A,y=A+n+1,N=A+n+2,R=A+1;a.push(S,y,R),a.push(y,N,R)}}this.setIndex(a),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class on extends vi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bc,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const nc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class X0{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=l.length;h<p;h+=2){const m=l[h],_=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const q0=new X0;class Ha{constructor(t){this.manager=t!==void 0?t:q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ha.DEFAULT_MATERIAL_NAME="__DEFAULT";class Y0 extends Ha{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=nc.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=zi("img");function c(){u(),nc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class K0 extends Ha{constructor(t){super(t)}load(t,e,n,r){const s=new pe,o=new Y0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class cl extends ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Z0 extends cl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ys=new Jt,ic=new D,rc=new D;class j0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(ic),rc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rc),e.updateMatrixWorld(),ys.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ys),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ys)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class J0 extends j0{constructor(){super(new $c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ll extends cl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.target=new ie,this.shadow=new J0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const sc=new Jt;class $0{constructor(t,e,n=0,r=1/0){this.ray=new kc(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ua,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sc),this}intersectObject(t,e=!0,n=[]){return va(t,this,n,e),n.sort(ac),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)va(t[r],this,n,e);return n.sort(ac),n}}function ac(i,t){return i.distance-t.distance}function va(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)va(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ea);const ul=[0,1911635,8267091,34641,11227702,6248271,12764103,16773608,16711757,16753408,16772135,58422,2731519,8615580,16742312,16764074];function Ni(i,t){let e=0;for(let n=t;n<i.length;n++)if(i[n]==="{")e++;else if(i[n]==="}"&&--e===0)return n;return i.length-1}function xa(i){const t=[];let e=0;for(;e<i.length;)if(i[e]==="{"){const n=Ni(i,e);t.push(i.slice(e+1,n)),e=n+1}else e++;return t}function As(i){return i.split(",").map(t=>parseFloat(t.trim())).filter(t=>!isNaN(t))}function Q0(i){const t=i.match(/name='([^']*)'/),e=t?t[1]:"",n=i.match(/pos=\{([^}]+)\}/),r=n?As(n[1]):[0,0,0],s=i.indexOf("v={"),o=Ni(i,s+2),a=i.slice(s+3,o),c=xa(a).map(m=>{const _=As(m);return[_[0]??0,_[1]??0,_[2]??0]}),l=i.indexOf("f={");if(l===-1)return null;const u=Ni(i,l+2),h=i.slice(l+3,u),p=xa(h).map(m=>{const _=m.match(/^[\d\s,]+/),M=_?_[0].split(",").map(R=>parseInt(R.trim())).filter(R=>!isNaN(R)&&R>0):[],d=m.match(/c=(\d+)/),f=d?parseInt(d[1]):0,A=/dbl=1/.test(m),S=/notex=1/.test(m),y=m.indexOf("uv={");let N=[];if(y!==-1){const R=Ni(m,y+3);N=As(m.slice(y+4,R))}return{indices:M,color:f,dbl:A,notex:S,uv:N}}).filter(m=>m.indices.length>=3);return{name:e,pos:r,vertices:c,faces:p}}function hl(i){const t=[],e=[],n=[];return i.traverse(r=>{r.userData.wheelRoll&&(t.push(r),r.userData.rear&&n.push(r)),r.userData.wheelSteer===!0&&e.push(r)}),{rolls:t,fronts:e,rears:n}}function tp(i){const n=new Uint8Array(65536);for(let s=0;s<Math.min(i.length,128);s++){const o=i[s];for(let a=0;a<Math.min(o.length,128);a++){const c=parseInt(o[a],16),l=ul[isNaN(c)?0:c],u=((127-s)*128+a)*4;n[u+0]=l>>16&255,n[u+1]=l>>8&255,n[u+2]=l&255,n[u+3]=255}}const r=new al(n,128,128);return r.needsUpdate=!0,r.magFilter=he,r.minFilter=he,r}function ep(i,t){const e=i.indexOf("%"),n=i.slice(0,e),s=i.slice(e+1).trim().split(`
`).map(y=>y.trimEnd()),o=t??tp(s),a=16,c=n.indexOf("{"),l=Ni(n,c),u=n.slice(c+1,l),p=xa(u).map(Q0).filter(y=>y!==null),m=new Fn,_=[];for(const y of p){const[N,R,T]=y.pos;let I=1/0,J=1/0,b=1/0,x=-1/0,z=-1/0,B=-1/0;for(const Y of y.vertices)I=Math.min(I,Y[0]),x=Math.max(x,Y[0]),J=Math.min(J,Y[1]),z=Math.max(z,Y[1]),b=Math.min(b,Y[2]),B=Math.max(B,Y[2]);const k=x-I,K=z-J,H=B-b,j=(I+x)/2,V=(J+z)/2,at=(b+B)/2,it=y.name==="cylinder"&&k<K&&k<H,mt=it?j:0,zt=it?V:0,Vt=it?at:0,W=new Fn;for(const Y of y.faces){const ot=Y.indices.map(bt=>bt-1);if([...new Set(ot)].length<3||Y.notex&&Y.color===14)continue;const At=ul[Y.color]??8947848,St=(At>>16&255)/255,Ot=(At>>8&255)/255,Wt=(At&255)/255,Dt=ot.map(bt=>y.vertices[bt]??[0,0,0]),w=[];if(!Y.notex&&Y.uv.length>=6)for(let bt=0;bt+1<Y.uv.length;bt+=2)w.push([Y.uv[bt]/a,1-Y.uv[bt+1]/a]);const fe=[],Nt=[];for(let bt=1;bt<Dt.length-1;bt++){const E=[Dt[0],Dt[bt],Dt[bt+1]];for(const g of E)fe.push(g[0]-mt,-(g[1]-zt),g[2]-Vt);if(w.length>=Dt.length){const g=w[0],U=w[bt],X=w[bt+1];Nt.push(g[0],g[1],U[0],U[1],X[0],X[1])}}const Ft=new We;Ft.setAttribute("position",new Me(fe,3));const Et=!Y.notex&&Nt.length===fe.length/3*2;Et&&Ft.setAttribute("uv",new Me(Nt,2)),Ft.computeVertexNormals();const jt=Et?new on({map:o,alphaTest:.5,side:Y.dbl?He:Ke}):new on({color:new It(St,Ot,Wt),side:Y.dbl?He:Ke});W.add(new ge(Ft,jt))}if(it){const Y=T+at<0;W.userData.wheelRoll=!0,W.userData.rear=!Y;const ot=new Fn;ot.position.set(N+j,-(R+V),T+at),ot.userData.wheelSteer=Y,ot.add(W),m.add(ot),_.push({pivot:W,modelRadius:Math.max(K,H)/2})}else W.position.set(N,-R,T),m.add(W)}const M=new Sn().setFromObject(m),d=M.getCenter(new D),f=M.getSize(new D),S=2.5/Math.max(f.x,f.y,f.z);m.position.sub(d.multiplyScalar(S)),m.scale.setScalar(S);for(const{pivot:y,modelRadius:N}of _)y.userData.radius=N*S;return m}const oc=12,np=18,ip=4,Hi=20,cc=1.8,lc=Math.PI/5;function rp(){return{position:new D(0,0,0),velocity:new D,angle:0,speed:0,wheelAngle:0}}function sp(i,t,e){const n=t.has("w")||t.has("arrowup"),r=t.has("s")||t.has("arrowdown"),s=t.has("a")||t.has("arrowleft"),o=t.has("d")||t.has("arrowright"),a=t.has(" ");if(n)i.speed=Math.min(i.speed+oc*e,Hi);else if(r)i.speed=Math.max(i.speed-oc*e,-Hi*.5);else if(a){const u=Math.sign(i.speed);i.speed=u*Math.max(0,Math.abs(i.speed)-np*e)}else{const u=Math.sign(i.speed);i.speed=u*Math.max(0,Math.abs(i.speed)-ip*e)}const c=Math.min(1,Math.abs(i.speed)/3);s?(i.angle+=cc*c*e*Math.sign(i.speed||1),i.wheelAngle=Math.max(i.wheelAngle-3*e,-lc)):o?(i.angle-=cc*c*e*Math.sign(i.speed||1),i.wheelAngle=Math.min(i.wheelAngle+3*e,lc)):i.wheelAngle*=Math.pow(.1,e);const l=new D(Math.sin(i.angle),0,Math.cos(i.angle));i.position.addScaledVector(l,i.speed*e)}function ap(){const e=new Xi(300,300,60,60);e.rotateX(-Math.PI/2);const n=e.attributes.position;for(let l=0;l<n.count;l++){const u=n.getX(l),h=n.getZ(l),p=Math.sin(u*.04)*1.5+Math.cos(h*.04)*1.5+Math.sin(u*.12+h*.09)*.5;n.setY(l,p)}n.needsUpdate=!0;const r=e.toNonIndexed();r.computeVertexNormals();const s=r.attributes.position,o=new Float32Array(s.count*3),a=new It;for(let l=0;l<s.count;l+=3){const u=(s.getY(l)+s.getY(l+1)+s.getY(l+2))/3;u>2.2?a.setHex(10125408):u>.8?a.setHex(5415008):u>-.5?a.setHex(3833156):a.setHex(2778677);for(let h=0;h<3;h++)o[(l+h)*3]=a.r,o[(l+h)*3+1]=a.g,o[(l+h)*3+2]=a.b}r.setAttribute("color",new Ce(o,3));const c=new on({vertexColors:!0,flatShading:!0});return new ge(r,c)}function op(i,t){return Math.sin(i*.04)*1.5+Math.cos(t*.04)*1.5+Math.sin(i*.12+t*.09)*.5}function cp(){const i=new on({color:8015662,flatShading:!0});return[{x:12,z:0,r:7,h:4},{x:-8,z:10,r:5.5,h:3.5},{x:0,z:-14,r:5,h:3},{x:-14,z:-6,r:6,h:2.5},{x:6,z:14,r:4.5,h:3.5},{x:18,z:8,r:5,h:3}].map(e=>{const n=new qi(e.r,e.h,8),r=new ge(n,i),s=op(e.x,e.z);return r.position.set(e.x,s+e.h/2,e.z),r.castShadow=!0,r.receiveShadow=!0,r})}function lp(i){const t=new qi(1,4,6),e=new on({color:16777215,flatShading:!0}),n=new Gr(t,e,i),r=new ie,s=kr(3735928559),o=[1727530,1927984,1331234,2261056,1002014],a=new It;for(let c=0;c<i;c++){const l=s()*Math.PI*2,u=45+s()*120,h=Math.cos(l)*u,p=Math.sin(l)*u,m=.8+s()*1.5;r.position.set(h,2*m,p),r.scale.setScalar(m),r.updateMatrix(),n.setMatrixAt(c,r.matrix),a.setHex(o[c%o.length]),n.setColorAt(c,a)}return n.instanceColor&&(n.instanceColor.needsUpdate=!0),n}function up(i){const t=new Vr(.3,.4,1.5,5),e=new on({color:6042640,flatShading:!0}),n=new Gr(t,e,i),r=new ie,s=kr(3735928559);for(let o=0;o<i;o++){const a=s()*Math.PI*2,c=45+s()*120,l=Math.cos(a)*c,u=Math.sin(a)*c,h=.8+s()*1.5;r.position.set(l,-.4*h,u),r.scale.setScalar(h),r.updateMatrix(),n.setMatrixAt(o,r.matrix)}return n}function hp(i){const t=new xi(1,1,1),e=new on({color:15791871,flatShading:!0}),n=new Gr(t,e,i),r=new ie,s=kr(3405691582);for(let o=0;o<i;o++){const a=s()*Math.PI*2,c=40+s()*110;r.position.set(Math.cos(a)*c,38+s()*22,Math.sin(a)*c),r.scale.set(14+s()*16,5+s()*4,9+s()*10),r.rotation.y=s()*Math.PI,r.updateMatrix(),n.setMatrixAt(o,r.matrix)}return n}function fp(){const t=new qi(1,1,6),e=new on({color:16777215,flatShading:!0}),n=new Gr(t,e,16),r=new ie,s=kr(2003195204),o=[4877114,4021808,5601344,4479541,7043658],a=new It;for(let c=0;c<16;c++){const l=c/16*Math.PI*2+s()*.4,u=185+s()*80,h=45+s()*55,p=h*(.3+s()*.2);r.position.set(Math.cos(l)*u,h/2-15,Math.sin(l)*u),r.scale.set(p,h,p),r.rotation.y=s()*Math.PI,r.updateMatrix(),n.setMatrixAt(c,r.matrix),a.setHex(o[c%o.length]),n.setColorAt(c,a)}return n.instanceColor&&(n.instanceColor.needsUpdate=!0),n}function kr(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967295}}const dp=50;let On=null,uc=0;const Ir=new Map;function pp(i,t,e){let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*e}function hc(i,t){const e=Ir.get(i);Ir.set(i,e?[e[1],t]:[t,t])}function mp(i,t,e,n,r){const s=i.startsWith("localhost")?"ws":"wss";On=new WebSocket(`${s}://${i}/party/${t}`),On.onopen=()=>{On.send(JSON.stringify({type:"join",plate:e}))},On.onmessage=({data:o})=>{const a=JSON.parse(o);if(a.type==="init"){const c=a.players;for(const[l,u]of Object.entries(c))n(l,u.plate),hc(l,{x:u.x,y:u.y,z:u.z,angle:u.angle,speed:u.speed,wheel:u.wheel,t:performance.now()})}else if(a.type==="join")n(a.id,a.plate);else if(a.type==="move"){const{id:c,type:l,...u}=a;hc(c,{...u,t:performance.now()})}else a.type==="leave"&&(Ir.delete(a.id),r(a.id))}}function bp(i,t){!On||On.readyState!==WebSocket.OPEN||t-uc<dp||(uc=t,On.send(JSON.stringify({x:i.position.x,y:i.position.y,z:i.position.z,angle:i.angle,speed:i.speed,wheel:i.wheelAngle})))}function gp(i){const t=new Map,e=i-100;for(const[n,[r,s]]of Ir){const o=s.t-r.t,a=o>0?Math.max(0,Math.min(1,(e-r.t)/o)):1;t.set(n,{x:r.x+(s.x-r.x)*a,y:r.y+(s.y-r.y)*a,z:r.z+(s.z-r.z)*a,angle:pp(r.angle,s.angle,a),speed:r.speed+(s.speed-r.speed)*a,wheel:r.wheel+(s.wheel-r.wheel)*a})}return t}function _p(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.5,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const r=new ol(t);return r.needsUpdate=!0,r}class vp{constructor(t,e=180){to(this,"pool",[]);const n=_p();for(let r=0;r<e;r++){const s=new Ba({map:n,color:12757112,transparent:!0,opacity:0,depthWrite:!1}),o=new sl(s);o.visible=!1,t.add(o),this.pool.push({sprite:o,mat:s,vel:new D,life:0,maxLife:1,baseScale:1})}}emit(t,e,n,r,s){for(let o=0;o<s;o++){const a=this.pool.find(c=>c.life<=0);if(!a)return;a.maxLife=a.life=.45+Math.random()*.5,a.baseScale=.35+Math.random()*.4+r*.4,a.vel.set((Math.random()-.5)*1.6,.8+Math.random()*1.4,(Math.random()-.5)*1.6),a.sprite.position.set(t+(Math.random()-.5)*.4,e,n+(Math.random()-.5)*.4),a.sprite.scale.setScalar(a.baseScale*.5),a.mat.opacity=.7,a.sprite.visible=!0}}update(t){for(const e of this.pool){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.sprite.visible=!1,e.mat.opacity=0;continue}const n=e.life/e.maxLife;e.vel.y-=2.4*t,e.vel.multiplyScalar(1-1.6*t),e.sprite.position.addScaledVector(e.vel,t),e.sprite.scale.setScalar(e.baseScale*(1+(1-n)*1.5)),e.mat.opacity=.7*n}}}const xp=`picocad;wrangler;15;8;11\r
{\r
{\r
 name='cube', pos={1.25,-0.75,-2}, rot={0,0,0},\r
 v={\r
  {-2.25,-0.75,-2.25},\r
  {1,-0.75,-2.25},\r
  {0.75,-0.25,-2.25},\r
  {-2,-0.25,-2.25},\r
  {-2.5,-0.75,-0.75},\r
  {1.25,-0.75,-0.75},\r
  {1.25,-0.25,-0.75},\r
  {-2.5,-0.25,-0.75},\r
  {1.25,-0.75,0.75},\r
  {-2.5,-0.75,0.75},\r
  {-2.5,0.75,0.75},\r
  {1.25,0.75,0.75},\r
  {1.25,-1.25,3.5},\r
  {-2.5,-1.25,3.5},\r
  {-2.5,0.75,3.5},\r
  {1.25,0.75,3.5},\r
  {1.25,-1.25,5.75},\r
  {-2.5,-1.25,5.75},\r
  {-2.5,0.75,5.75},\r
  {1.25,0.75,5.75},\r
  {1,-2.75,3.5},\r
  {1,-3,1.25},\r
  {-2.25,-3,1.25},\r
  {-2.25,-2.75,3.5},\r
  {1,-3,5.5},\r
  {-2.25,-3,5.5},\r
  {1.75,-0.75,-2.25},\r
  {1.75,-0.75,-0.75},\r
  {1.75,-0.25,-0.75},\r
  {1.75,-0.25,-2.25},\r
  {-3,-0.75,-0.75},\r
  {-3,-0.75,-2.25},\r
  {-3,-0.25,-2.25},\r
  {-3,-0.25,-0.75},\r
  {-3,0.75,0.25},\r
  {-2.5,0.25,0.25},\r
  {-3,0.25,0.25},\r
  {1.75,0.25,0.25},\r
  {1.25,0.25,0.25},\r
  {1.75,0.75,0.25},\r
  {-2,0.5,-2.25},\r
  {0.75,0.5,-2.25},\r
  {-2.75,0.75,1.25},\r
  {-2.5,0.75,1.25},\r
  {-2.5,0.39,1.25},\r
  {-2.75,0.39,1.25},\r
  {1.5,0.39,1.25},\r
  {1.25,0.39,1.25},\r
  {1.25,0.75,1.25},\r
  {1.5,0.75,1.25},\r
  {-2.25,-0.25,-2.5},\r
  {-3,-0.25,-2.5},\r
  {1.75,-0.25,-2.5},\r
  {1,-0.25,-2.5},\r
  {-2.12,-0.75,-0.75},\r
  {-2.25,-0.75,0.75},\r
  {0.87,-0.75,-0.75},\r
  {1,-0.75,0.75},\r
  {-2,-1.25,-2.25},\r
  {0.75,-1.25,-2.25},\r
  {-2.25,-1.5,1},\r
  {1,-1.5,1},\r
  {-2,1.25,5.5},\r
  {-2.5,0.75,3.5},\r
  {1.25,0.75,3.5},\r
  {0.75,1.25,5.5}\r
 },\r
 f={\r
  {1,2,3,4, c=0, uv={6.25,6,12.75,6,12.25,7,6.75,7} },\r
  {10,5,8,11, c=1, dbl=1, uv={10.5,10.25,9.5,10.25,9.5,8.25,10.5,8.25} },\r
  {12,7,6,9, c=1, dbl=1, uv={10,8.25,11,8.25,11,9.5,10,10} },\r
  {14,10,11,15, c=1, dbl=1, uv={13.25,0,16,0,16,4.5,13.25,4.5} },\r
  {16,12,9,13, c=1, dbl=1, uv={13.25,4.5,16,4.5,16,0,13.25,0} },\r
  {18,14,15,19, c=0, dbl=1, uv={12.75,4.5,16,4.5,16,8.25,12.75,8.25} },\r
  {20,16,13,17, c=0, dbl=1, uv={12.75,8.25,16,8.25,16,4.5,12.75,4.5} },\r
  {17,18,19,20, c=0, dbl=1, uv={7.25,8.25,13.5,8.25,13.5,12,7.25,12} },\r
  {21,13,9,22, c=0, dbl=1, uv={9.25,0.25,9.25,3,5.25,4,5.25,0} },\r
  {22,9,10,23, c=0, dbl=1, uv={6.25,4.5,6.25,9.25,0,9.25,0,4.5} },\r
  {23,10,14,24, c=0, dbl=1, uv={5.25,0,5.25,4,9.25,3,9.25,0.25} },\r
  {21,22,23,24, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {25,17,13,21, c=0, dbl=1, uv={13.25,0,13.25,3.75,9.25,3.75,9.25,0} },\r
  {24,14,18,26, c=0, dbl=1, uv={9.25,0,9.25,3.75,13.25,3.75,13.25,0} },\r
  {26,18,17,25, c=0, dbl=1, uv={13.5,12,13.5,15,7.25,15,7.25,12} },\r
  {25,21,24,26, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {27,2,6,28, c=0, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {29,7,3,30, c=0, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {27,28,29,30, c=0, uv={6.5,4.5,7.25,4.5,8,5,6.5,5} },\r
  {31,5,1,32, c=0, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {33,4,8,34, c=0, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {31,32,33,34, c=0, uv={7.25,4.5,6.5,4.5,6.5,5,8.25,5} },\r
  {36,5,31,37, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {37,31,34,35, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {38,28,6,39, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {40,29,28,38, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {41,4,3,42, c=0, uv={6.75,8.5,6.75,7,12.25,7,12.25,8.5} },\r
  {42,3,7,12, c=0, uv={0,15,0,13.25,4.25,13.25,4.25,15} },\r
  {11,8,4,41, c=0, uv={0,15,0,13.25,4.25,13.25,4.25,15} },\r
  {45,36,37,46, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {46,37,35,43, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {43,44,45,46, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {47,38,39,48, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {50,40,38,47, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {47,48,49,50, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {1,1,4,51, c=0, uv={2.25,1,3.25,1,3.25,2,2.25,2} },\r
  {51,4,33,52, c=0, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {52,33,32,32, c=0, notex=1, uv={6.25,5,6.5,5,6.5,4.5,6.25,4.5} },\r
  {32,1,51,52, c=0, uv={3.25,1,4.25,1,4.25,2,3.25,2} },\r
  {53,30,3,54, c=0, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {54,3,2,2, c=0, uv={2.25,1,3.25,1,3.25,2,2.25,2} },\r
  {27,27,30,53, c=0, uv={6.25,4.5,6.5,4.5,6.75,5,6.25,5} },\r
  {53,54,2,27, c=0, uv={3.25,2,4.25,2,4.25,1,3.25,1} },\r
  {1,1,5,55, c=1, uv={7.25,11.75,6.75,11.75,6.75,10.75,7.25,10.75} },\r
  {5,10,56,55, c=1, notex=1, uv={0,0,1,0,1,1,0,1} },\r
  {57,6,2,2, c=0, uv={7.25,10.75,6.75,10.75,6.75,11.75,7.25,11.75} },\r
  {57,58,9,6, c=1, notex=1, uv={3.25,2,3.25,1,2.75,1,2.75,2} },\r
  {59,60,2,1, c=0, uv={6.75,5,12.25,5,12.75,6,6.25,6} },\r
  {62,61,56,58, c=0, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {61,62,60,59, c=0, uv={0,9.25,6.25,9.25,6.25,13,0,13} },\r
  {61,59,1,56, c=0, uv={6.25,8.25,6.25,12,7.25,12,7.25,8.25} },\r
  {60,62,58,2, c=0, uv={6.25,12,6.25,8.25,7.25,8.25,7.25,12} },\r
  {63,19,15,64, c=0, uv={15,6.25,16,6.25,16,7.25,15,7.25} },\r
  {65,16,20,66, c=0, uv={16,7.25,15,7.25,15,6.25,16,6.25} },\r
  {66,20,19,63, c=0, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} }\r
 } \r
},{\r
 name='cube', pos={2.25,-0.25,2}, rot={0,0,0},\r
 v={\r
  {0.25,0,-1.5},\r
  {0.75,0,-1.5},\r
  {0.75,0.25,-1.25},\r
  {0.25,0.25,-1.25},\r
  {0.25,-1.25,-0.75},\r
  {0.75,-1.25,-0.75},\r
  {0.75,-0.75,-0.5},\r
  {0.75,-1.25,0.75},\r
  {0.25,-1.25,0.75},\r
  {0.75,-0.75,0.5},\r
  {0.75,0,1.5},\r
  {0.25,0,1.5},\r
  {0.25,0.25,1.25},\r
  {0.75,0.25,1.25}\r
 },\r
 f={\r
  {1,2,3,4, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {5,6,2,1, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {2,6,7,3, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {8,6,5,9, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {10,7,6,8, c=0, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {11,8,9,12, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {14,10,8,11, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {11,12,13,14, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} }\r
 } \r
},{\r
 name='cube', pos={-1.75,-0.25,2}, rot={0,0,0},\r
 v={\r
  {0,0,-1.5},\r
  {0.5,0,-1.5},\r
  {0.5,0.25,-1.25},\r
  {0,0.25,-1.25},\r
  {0,-1.25,-0.75},\r
  {0.5,-1.25,-0.75},\r
  {0,-0.75,-0.5},\r
  {0.5,-1.25,0.75},\r
  {0,-1.25,0.75},\r
  {0,-0.75,0.5},\r
  {0.5,0,1.5},\r
  {0,0,1.5},\r
  {0,0.25,1.25},\r
  {0.5,0.25,1.25}\r
 },\r
 f={\r
  {1,2,3,4, c=0, dbl=1, prio=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {5,6,2,1, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {5,1,4,7, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {8,6,5,9, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {9,5,7,10, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {11,8,9,12, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {12,9,10,13, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {11,12,13,14, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} }\r
 } \r
},{\r
 name='cube', pos={0,-0.75,5.25}, rot={0,0,0},\r
 v={\r
  {-1.25,0.25,-1.5},\r
  {2.5,0.25,-1.5},\r
  {2.5,0.75,-1.5},\r
  {-1.25,0.75,-1.5},\r
  {-1,0.25,-1},\r
  {2.25,0.25,-1},\r
  {2.25,0.75,-1},\r
  {-1,0.75,-1}\r
 },\r
 f={\r
  {6,5,8,7, c=0, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {5,6,2,1, c=0, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {5,1,4,8, c=0, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {2,6,7,3, c=0, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} }\r
 } \r
},{\r
 name='cube', pos={2.5,-2.75,0.25}, rot={0,0,0},\r
 v={\r
  {0.25,0,-1.25},\r
  {0.75,0,-1.25},\r
  {0.75,0.5,-1.25},\r
  {0,0.75,-1.25},\r
  {0.25,-0.25,-1},\r
  {0.75,-0.25,-1},\r
  {0.75,0.5,-1},\r
  {0,0.75,-1}\r
 },\r
 f={\r
  {1,2,3,4, c=0, notex=1, uv={0.5,0,1.5,0,1.5,1,0.5,1} },\r
  {6,5,8,7, c=0, uv={3.25,0,4.25,0,4.25,1,3.25,1} },\r
  {5,6,2,1, c=0, notex=1, uv={0.5,0,1.5,0,1.5,1,0.5,1} },\r
  {5,1,4,8, c=0, notex=1, uv={0.5,0,1.5,0,1.5,1,0.5,1} },\r
  {2,6,7,3, c=0, notex=1, uv={0.5,0,1.5,0,1.5,1,0.5,1} },\r
  {4,3,7,8, c=0, dbl=1, notex=1, uv={0.5,0,1.5,0,1.5,1,0.5,1} }\r
 } \r
},{\r
 name='cube', pos={-2.5,-2.75,0.25}, rot={0,0,0},\r
 v={\r
  {1,0,-1.25},\r
  {0.5,0,-1.25},\r
  {0.5,0.5,-1.25},\r
  {1.25,0.75,-1.25},\r
  {1,-0.25,-1},\r
  {0.5,-0.25,-1},\r
  {0.5,0.5,-1},\r
  {1.25,0.75,-1}\r
 },\r
 f={\r
  {4,3,2,1, c=0, notex=1, uv={0.5,1,1.5,1,1.5,0,0.5,0} },\r
  {7,8,5,6, c=0, uv={4.25,1,3.25,1,3.25,0,4.25,0} },\r
  {1,2,6,5, c=0, notex=1, uv={0.5,1,1.5,1,1.5,0,0.5,0} },\r
  {8,4,1,5, c=0, notex=1, uv={0.5,1,1.5,1,1.5,0,0.5,0} },\r
  {3,7,6,2, c=0, notex=1, uv={0.5,1,1.5,1,1.5,0,0.5,0} },\r
  {8,7,3,4, c=0, dbl=1, notex=1, uv={0.5,1,1.5,1,1.5,0,0.5,0} }\r
 } \r
},{\r
 name='plane', pos={0,1.25,0}, rot={0,0,0},\r
 v={\r
  {-1.75,0,-4.25},\r
  {3,0,-4.25},\r
  {-1.75,0,3.25},\r
  {3,0,3.25}\r
 },\r
 f={\r
  {3,4,2,1, c=6, dbl=1, prio=1, uv={13.5,11,16,11,16,15,13.5,15} }\r
 } \r
},{\r
 name='plane', pos={-3.75,-1.75,0.75}, rot={0,0,0},\r
 v={\r
  {2.75,0.25,-2},\r
  {2.5,0.25,-2.25},\r
  {2.75,-2.25,-2},\r
  {2.5,-2.25,-2}\r
 },\r
 f={\r
  {3,4,2,1, c=0, dbl=1, uv={4.5,2,4.75,2,5,4.5,4.5,4.5} }\r
 } \r
},{\r
 name='plane', pos={0.25,-1.5,4.25}, rot={0,0,0},\r
 v={\r
  {1.625,0.5,-0.37},\r
  {2,0.5,-0.37},\r
  {1.625,0,-0.25},\r
  {2,0,-0.37}\r
 },\r
 f={\r
  {3,4,2,1, c=8, dbl=1, noshade=1, uv={4.25,0,5.25,0,5.25,1,4.25,1} }\r
 } \r
},{\r
 name='plane', pos={0.25,-3,4.25}, rot={0,0,0},\r
 v={\r
  {-1.25,2,-0.37},\r
  {-0.875,2,-0.37},\r
  {-1.25,1.5,-0.37},\r
  {-0.875,1.5,-0.37}\r
 },\r
 f={\r
  {3,4,2,1, c=8, dbl=1, noshade=1, uv={4.25,0,5.25,0,5.25,1,4.25,1} }\r
 } \r
},{\r
 name='cylinder', pos={-2.25,-1.75,5.5}, rot={0,0,0},\r
 v={\r
  {2.75,1.25,-1},\r
  {3.5,1,-1},\r
  {3.75,0.25,-1},\r
  {3.5,-0.5,-1},\r
  {2.75,-0.75,-1},\r
  {2,-0.5,-1},\r
  {1.75,0.25,-1},\r
  {2,1,-1},\r
  {2.75,1.25,-1.75},\r
  {3.5,1,-1.75},\r
  {3.75,0.25,-1.75},\r
  {3.5,-0.5,-1.75},\r
  {2.75,-0.75,-1.75},\r
  {2,-0.5,-1.75},\r
  {1.75,0.25,-1.75},\r
  {2,1,-1.75}\r
 },\r
 f={\r
  {1,2,3,4,5,6,7,8, c=0, uv={0.5,2.25,0,1.75,0,0.5,0.5,0,1.75,0,2.25,0.5,2.25,1.75,1.75,2.25} },\r
  {16,15,14,13,12,11,10,9, c=0, notex=1, uv={11,0.5,11.5,0,12.5,0,13,0.5,13,1.5,12.5,2,11.5,2,11,1.5} },\r
  {1,9,10,2, c=0, uv={3.25,2,2.25,2,2.25,1,3.25,1} },\r
  {2,10,11,3, c=0, uv={3.25,2,2.25,2,2.25,1,3.25,1} },\r
  {3,11,12,4, c=0, uv={3.25,2,2.25,2,2.25,1,3.25,1} },\r
  {4,12,13,5, c=0, uv={3.25,2,2.25,2,2.25,1,3.25,1} },\r
  {5,13,14,6, c=0, uv={3.25,2,2.25,2,2.25,1,3.25,1} },\r
  {6,14,15,7, c=0, uv={3.25,2,2.25,2,2.25,1,3.25,1} },\r
  {7,15,16,8, c=0, uv={3.25,2,2.25,2,2.25,1,3.25,1} },\r
  {8,16,9,1, c=0, uv={3.25,2,2.25,2,2.25,1,3.25,1} }\r
 } \r
},{\r
 name='cylinder', pos={1.75,0,-1.75}, rot={0,0,0},\r
 v={\r
  {1,1.25,-1.4},\r
  {1.25,1,-2.1},\r
  {1.35,0.25,-2.32},\r
  {1.25,-0.5,-2.1},\r
  {1,-0.75,-1.4},\r
  {0.7,-0.5,-0.7},\r
  {0.6,0.25,-0.5},\r
  {0.6936,1,-0.7115},\r
  {0.2881,1.25,-1.6913},\r
  {0.5752,1,-2.3843},\r
  {0.6707,0.25,-2.6152},\r
  {0.5752,-0.5,-2.3843},\r
  {0.3,-0.75,-1.6913},\r
  {0,-0.5,-1},\r
  {-0.1,0.25,-0.7675},\r
  {0,1,-1}\r
 },\r
 f={\r
  {1,2,3,4,5,6,7,8, c=0, uv={2.25,4,1.75,4.5,0.5,4.5,0,4,0,2.75,0.5,2.25,1.75,2.25,2.25,2.75} },\r
  {16,15,14,13,12,11,10,9, c=0, uv={4,4.5,2.75,4.5,2.25,4,2.25,2.75,2.75,2.25,4,2.25,4.5,2.75,4.5,3.75} },\r
  {1,9,10,2, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {2,10,11,3, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {3,11,12,4, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {4,12,13,5, c=0, uv={2.25,0,3.25,0,3.25,1,2.25,1} },\r
  {5,13,14,6, c=0, uv={2.25,0,3.25,0,3.25,1,2.25,1} },\r
  {6,14,15,7, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {7,15,16,8, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {8,16,9,1, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} }\r
 } \r
},{\r
 name='cube', pos={0.25,-0.25,-3.5}, rot={0,0,0},\r
 v={\r
  {-1.5,-0.25,-1.25},\r
  {2.25,-0.25,-1.25},\r
  {2.25,0.25,-1.25},\r
  {-1.5,0.25,-1.25},\r
  {-1.5,-0.25,-1},\r
  {2.25,-0.25,-1},\r
  {2.25,0.25,-1},\r
  {-1.5,0.25,-1}\r
 },\r
 f={\r
  {1,2,3,4, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {5,6,2,1, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {5,1,4,8, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {2,6,7,3, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} }\r
 } \r
},{\r
 name='cube', pos={0,-4.25,3.5}, rot={0,0,0},\r
 v={\r
  {-1,0.62,-3},\r
  {2.25,0.62,-3},\r
  {2.25,0.75,-2},\r
  {-1,0.75,-2},\r
  {-1,0.415,-2},\r
  {2.25,0.415,-2},\r
  {2.25,0.62,-1},\r
  {-1,0.62,-1}\r
 },\r
 f={\r
  {6,5,8,7, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {5,6,2,1, c=0, dbl=1, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {5,1,4,8, c=0, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {2,6,7,3, c=0, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} }\r
 } \r
},{\r
 name='cylinder', pos={-0.5,0,3.5}, rot={0,0,0},\r
 v={\r
  {3.25,1.25,-1.5},\r
  {3.25,1,-2.25},\r
  {3.25,0.25,-2.5},\r
  {3.25,-0.5,-2.25},\r
  {3.25,-0.75,-1.5},\r
  {3.25,-0.5,-0.75},\r
  {3.25,0.25,-0.5},\r
  {3.25,1,-0.75},\r
  {2.5,1.25,-1.5},\r
  {2.5,1,-2.25},\r
  {2.5,0.25,-2.5},\r
  {2.5,-0.5,-2.25},\r
  {2.5,-0.72,-1.5},\r
  {2.5,-0.5,-0.75},\r
  {2.5,0.25,-0.5},\r
  {2.5,1,-0.75}\r
 },\r
 f={\r
  {1,2,3,4,5,6,7,8, c=0, uv={2.25,4,1.75,4.5,0.5,4.5,0,4,0,2.75,0.5,2.25,1.75,2.25,2.25,2.75} },\r
  {16,15,14,13,12,11,10,9, c=0, uv={4,4.5,2.75,4.5,2.25,4,2.25,2.75,2.75,2.25,4,2.25,4.5,2.75,4.5,3.75} },\r
  {1,9,10,2, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {2,10,11,3, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {3,11,12,4, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {4,12,13,5, c=0, uv={2.25,0,3.25,0,3.25,1,2.25,1} },\r
  {5,13,14,6, c=0, uv={2.25,0,3.25,0,3.25,1,2.25,1} },\r
  {6,14,15,7, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {7,15,16,8, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {8,16,9,1, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} }\r
 } \r
},{\r
 name='cylinder', pos={-1.5,0,-1.75}, rot={0,0,0},\r
 v={\r
  {0.0385,1.25,-1.6922},\r
  {-0.2487,1,-0.9972},\r
  {-0.3444,0.25,-0.7666},\r
  {-0.2487,-0.5,-0.9972},\r
  {0.0385,-0.75,-1.6922},\r
  {0.3252,-0.5,-2.3842},\r
  {0.4216,0.25,-2.6157},\r
  {0.3252,1,-2.3842},\r
  {0.7312,1.25,-1.4048},\r
  {0.4442,1,-0.7113},\r
  {0.3483,0.25,-0.4803},\r
  {0.4442,-0.5,-0.7113},\r
  {0.7312,-0.75,-1.4048},\r
  {1.0178,-0.5,-2.0975},\r
  {1.1123,0.25,-2.3276},\r
  {1.0178,1,-2.0975}\r
 },\r
 f={\r
  {1,2,3,4,5,6,7,8, c=0, uv={1.75,4.5,0.5,4.5,0,4,0,2.75,0.5,2.25,1.75,2.25,2.25,2.75,2.25,4} },\r
  {16,15,14,13,12,11,10,9, c=0, uv={4,4.5,2.75,4.5,2.25,4,2.25,2.75,2.75,2.25,4,2.25,4.5,2.75,4.5,3.75} },\r
  {1,9,10,2, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {2,10,11,3, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {3,11,12,4, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {4,12,13,5, c=0, uv={2.25,0,3.25,0,3.25,1,2.25,1} },\r
  {5,13,14,6, c=0, uv={2.25,0,3.25,0,3.25,1,2.25,1} },\r
  {6,14,15,7, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {7,15,16,8, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {8,16,9,1, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} }\r
 } \r
},{\r
 name='cylinder', pos={0.5,0,3.5}, rot={0,0,0},\r
 v={\r
  {-2,1.25,-1.5},\r
  {-2,1,-0.75},\r
  {-2,0.25,-0.5},\r
  {-2,-0.5,-0.75},\r
  {-2,-0.75,-1.5},\r
  {-2,-0.5,-2.25},\r
  {-2,0.25,-2.5},\r
  {-2,1,-2.25},\r
  {-1.25,1.25,-1.5},\r
  {-1.25,1,-0.75},\r
  {-1.25,0.25,-0.5},\r
  {-1.25,-0.5,-0.75},\r
  {-1.25,-0.75,-1.5},\r
  {-1.25,-0.5,-2.25},\r
  {-1.25,0.25,-2.5},\r
  {-1.25,1,-2.25}\r
 },\r
 f={\r
  {1,2,3,4,5,6,7,8, c=0, uv={2.25,4,1.75,4.5,0.5,4.5,0,4,0,2.75,0.5,2.25,1.75,2.25,2.25,2.75} },\r
  {16,15,14,13,12,11,10,9, c=0, uv={4,4.5,2.75,4.5,2.25,4,2.25,2.75,2.75,2.25,4,2.25,4.5,2.75,4.5,3.75} },\r
  {1,9,10,2, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {2,10,11,3, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {3,11,12,4, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {4,12,13,5, c=0, uv={2.25,0,3.25,0,3.25,1,2.25,1} },\r
  {5,13,14,6, c=0, uv={2.25,0,3.25,0,3.25,1,2.25,1} },\r
  {6,14,15,7, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {7,15,16,8, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} },\r
  {8,16,9,1, c=0, uv={3.25,1,2.25,1,2.25,0,3.25,0} }\r
 } \r
},{\r
 name='cube', pos={1.25,-1.5,4.75}, rot={0,0,0},\r
 v={\r
  {0.5,0.57,-1},\r
  {1.4,0.57,-1},\r
  {1.4,1,-1},\r
  {0.5,1.05,-1},\r
  {0.5,0.5,-1},\r
  {1.4,0.5,-1},\r
  {1.4,1,-1},\r
  {0.5,1,-1}\r
 },\r
 f={\r
  {1,2,3,4, c=5, notex=1, uv={5.5,0.5,6.5,0.5,6.5,1.5,5.5,1.5} },\r
  {6,5,8,7, c=11, uv={4.25,14,6.25,14,6.25,15,4.25,15} }\r
 } \r
},{\r
 name='plane', pos={0.25,2,0}, rot={0,0,0},\r
 v={\r
  {0.75,-3,-4},\r
  {0.75,-1.75,-3.75},\r
  {0.75,-3,3.5},\r
  {0.75,-1.75,3}\r
 },\r
 f={\r
  {3,4,2,1, c=0, dbl=1, notex=1, uv={13,0,15,0,15,2,13,2} }\r
 } \r
},{\r
 name='plane', pos={1.94,-1.76,-4.705}, rot={0,0,0},\r
 v={\r
  {0.3088,-0.7636,0.2147},\r
  {-0.7156,-0.1964,-0.0463},\r
  {0.9797,0.3915,0.0928},\r
  {-0.0443,0.9588,-0.1678}\r
 },\r
 f={\r
  {3,4,2,1, c=6, uv={13.5,8.25,16,8.25,16,11,13.5,11} }\r
 } \r
}\r
}%\r
1111001001010011111011001000000000b888888b00000000000000000000000000000000000000000000000000000000000000001110111111111111111111\r
11100000000000011101110001066767608776777800000000000000000000000000000000000000000000000000000000000000001110100511111111111111\r
11000000000000101110001110067666608767677800000000000000000000000000000000000000000000000000000000000000001110105511111111111111\r
10100000000000001101001101067676608888888811111111111111111111111111000000000005555555555555555555500000001110105511111111111100\r
0000000000000000001011001007667660888888881111111111111111111111111110000000005bbbbbbbbbbbbbbbbbbbb50000001110100511111111111010\r
0000000000000000000111000107676660828282881111000000000000000000000111000000005bfbbbbbbbbbbbbbbbbbbb5000001110155511111111110110\r
10000d00000000000110001110066766608828282811110bbbbbbbbbbbbbbbbbbb0001100000005bfbbbffffbbb7777bbbbb5000001110111111111111110110\r
00000d0dd0dd0dd0000100110100000000b888888b11110bbbbbbbbbbbbbbbbbbbbb0010000005bbbbbbbbbfffbbff77bbbb5000001110111111111111110110\r
000d0d0d50d50dd00100000101000000005555555511110bbbbbbbbbbbbbbbbbbbbbb010000005bbbbbbbbbbbfffffffffb55000001110111111111111111000\r
100ddd0dd0dd0dd00000000010000000005555555511110bbbbbbbbbbbbbbbbb7bbbb010000005bbff7777fbbbbbbbbbbbf55500001110111111111111111110\r
0000000000000d000100000101000999905555555511110bbbbbbbbbbbbbbbbbb7bbb01000005bbffffffffffffbbbbbbff55500001110111111111111111110\r
0000000000000d000000000010000f9f905555555511110bbbbbbbbbbbbbbbbbb7bbb01000005bbbbbbbbbbbbbffffffbf555500001110111111111111111110\r
100000000000000000000001010009f9f05555555511110bbbbbbbbbbbbbbbbbbbbbb01000005ffffffffffbbbbbbffff555b500001110111111111111111110\r
00000000000000000000000010000000005555555511110bbbbbbbbbbbbb7bbbbbbbb01000005bbbbbbbbfffffbffbbb555bfb50001110111111111111111110\r
100000000000000011000001010000000055555555111100bbbbbbbbbbbbbbbbbbbbb01000005bbbbbbbbbbbffffffbb555ffb50001111011111111111111110\r
110100000000001011000000100000000055555555111100bbbbbbbbbbbbbbbbbbbbb0100005bbbbbbbbbbbbbbbbbfb555ffbb50001111101111111111111110\r
111000000000000111555555555555555555b00b551111000bbbbbbbbbbbbb7bbbbbb0100005bbbbbbbbbbbbbbbbbfb5557bbf50001111110111111111111101\r
111101010010101111555555555555555555b00b551111000bbbbbbbbbbbbbb7bbbbb0100005bbbbbbbbbbbbbbbbff555b7fffb5001111111011111111111101\r
111111111111111111000000000000000000bb0b5511110000bbbbbbbbbbbbb7bbbbb0100005bbbbbbbbbbbbbbbbf555bffffff5000001111101111111111011\r
111111111111111100000000000000000000bb0b5511110000bbbbbbbbbbbbb7bbbbb0100005bffbbbbbbbbbbbbff555bbbbbbb5000000111110000000000011\r
111111100000000000000000000000000000bb0b5511110000bbbbbbbbbbbbbbbbbbb0100005bbfbbbbbbbbbbbbb555bbbbbbbb5000000111111111111111111\r
111110066660000000000001000000000000bb0b5511110000bbbbbbbbbbbbbbbbbbb0100005bffbbbbbbbbbbbb555bbbbbbbbbb500000011111111111111111\r
111106666666600000000000011110000000bb0b5511110000bbbbbbbbbbbbbbbbbbb0100005bfbbbbbbbbbbbbb555bbbbbbbbbb500000001111111111111111\r
111066660006660000000001111111100000bb0b551111000000000000000000000000111005bbffbbbbbbbbbb555bbbbbbbbbb500b000001111111111111111\r
111066666066660000001001111555500000bb0b5511111111111111111111111111111111005bbbbbbbbbbbbb555bbbbbbbbb5000bb00000111111111111111\r
110660665656066000000011150055550000bb0b550001111111111111111111111111111100055555555555555555555555550000bbb0000111111111111111\r
110660066660066000000011500005550000bb0b550000111111111111111111111111111100000000000000000000000000000000bbbb000111111111111111\r
110666656656066000000011500005550000bb0b550000011111111111111111111111111100000000000000000000000000000000bbbb000011111111111111\r
110666665666666000000015550055550000bb0b550000011111111111111111111111111100000000000000000000000000000000bbbbb00011111111111111\r
110066006606661000000005555555501000bb0b550001111111111111111111111111111100000000000000000000000000000000bbbbb00011111111111111\r
110066606600661000000005555555501000bb0b551111111111111111111111111111111100000000000000000000000000000000bbbbb00011111111111111\r
110006666666610000000100055550010000bb0b551111111111111111111111111111111111111111111111111111111111111111bbbbbb0011111111111111\r
110000166661100000000000000001100000bb0b551111111111111111111111111111111111111111111111111111111111111111bbbbbb0011111111111111\r
110000011100000000000000011100000000bb0b551111111111111111111111111111111111111111111111111111111111111111bbbbbbb011111111111111\r
110000000000000000000000000000000000b11b551111111111111111111111111111111111111111111111111111111111111111bbbbbbb011111111111111\r
100000000000000000000000000000000000b11b551111111111111111111111111111111111111111111111111111111111111111bbbbbbb011111111111111\r
11111111111111111111111111111111111111111111111111000000000000000000000000000000000000000000000000000000000000000000000000000000\r
111111111111111111111111111111111111111111111111110f9900000000000000000000000000000000000000000000000000000000000000000000000000\r
111111111111111111111111111111111111111111111111110f9900000000000000000000000000000000000000000000000000000000000000000000000000\r
11110000000000000000000000000000000000000000001111000000000000000000000000000000000000000000000000000000000000000000000000000000\r
1110bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb0111555555555555555555555555555555555555555555555555555511111111111111111111111111\r
110bbbbbbbbbbbbbbbbbbbbb00bbbbbbbbbbbbbbbbbbbbb011555111111111111111111111111111111111111111111111155511111111111111111111111111\r
110bbbbbbbbbbbbbbbbb555500555bbbbbbbbbbbbbbbbbb011551111111111111111111111111111111111111111111111115511110000111111111111111111\r
110bbbbbbbbbbbbbbbb55555555555bbbbbbbbbbbbbbbbb011511111116666111110001100011000110001111116666111111511100000011111111111111111\r
110bbbbbbbbbbbbbbbb55555555555bbbbbbbbbbbbbbffb011111111655555561110001100011000110001111655555561111111000111001111111111111111\r
110bbbbbbbbbbbbbbbbb555555555bbbbbb7bbbbbbbbffb011111116566666656110001100011000110001116566666656111111001105001111111111111111\r
110bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffb01111111566d67666511000110001100011000111566d676665111111001d00501111111111111111\r
110bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb011111166d6d6d6766610001100011000110001166d6d6d6766611111001500501111111111111111\r
110bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbb011111166d6d6d6d66610001100011000110001166d6d6d6d66611111100055011111111111111111\r
110bbbbbbbbbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbb0111111676d67676d66100011000110001100011676d67676d6611111110000111111111100000000\r
110bbbbbbbbbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbb0111111676d67676d66100011000110001100011676d67676d6611111111111111111110000000000\r
110bbbbbbbbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbb011111116676767676110001100011000110001116676767676111111111111111111000000000000\r
110bbbbbbbbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbb6666b011111116676767666110001100011000110001116676767666111111111111111110000000000000\r
110bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666b011111111666767661110001100011000110001111666767661111111111111111100000000000000\r
110bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666b011111111116666111110001100011000110001111116666111111111111111111000000000000000\r
110bbbbb0000000bbbbbbbbbbbbbbbb0000000bbbbbbbbb0111111111111111111100011000110001100011111111111111111111111111100000000bbbbbbbb\r
1110bbbb0000000bbbbbbbbbbbbbbbb0000000bbbbbbbb0111111111111111111110001100011000110001111111111111111111111111110000000bbbbbbbbb\r
1111000055555550000000000000000555555500000000111111111111111111111000110001100011000111111111111111111111111110000000bbbbbbbbbb\r
111111111111111550011111111111111111115500111111111111111111111111100011000110001100011111111111111111111111111000000bbbbbbbbbbb\r
11111111111111111550011111111111111111115500111111111111111111111110001100011000110001111111111111111111111111000000bbbbbbbbbbbb\r
1111111111111111111111111111111111111111111111111111111111111111555555555555555555555555111111111111111111111100000bbbbbbbbbbbbb\r
1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110000000000000bbbbbbbbbbbbb\r
1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110000000000000bbbbbbbbbbbbb\r
1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110000000000000bbbbbbbbbbbbb\r
1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110000000000000bbbbbbbbbbbbb\r
1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110000000000000bbbbbbbbbbbbb\r
111111111111111111111111111111111111111111111111111111111100000000000000000000000000000000000000000000000000bbbbbbbbb77bbbbbbbbb\r
111111111111111111111111111111111111111111111111111111111000000000000000000000000000000000000000000000000000bbbbbbbbb77bbbbbbbbb\r
111111111111111111111111111111111111111111111111111111111000000000000000000000000000000000000000000000000000bbbbbbbbbbbbbbbbbbbb\r
111111111111111111111111111111111111111111111111111111111000000111111111111111111111111111111111111111100000bbbbbbbbbbbbbbbbbbbb\r
111111111111111111111111111111111111111111111111111111111011111111111111111111111111111111111111111111111111bbbbbbbbb77bbbbbbbbb\r
111111111111111111111111111111111111111111111111111111111011111111111111111111111111111111111111111111111111bbbbbbbbb77bbbbbbbbb\r
111111111111111111111111111111111111111111111111111111111011111111111111111111111111111111111111111111111111bbbbbbbbb77bbbbbbbbb\r
111111111111111111111111111111111111111111111111111111111011111221111111111111111111111111111111111112211111bbbbbbbbb77bbbbbbbbb\r
111111111111511111111111111111111111111511111111111111111011112222111111111111111111111111111111111122221111bbbbbbbbb77bbbbbbbbb\r
111111111111511111111111111111111111111511111111111111111011112222111111111111111111111111111111111122221111bbbbbbb777777bbbbbbb\r
111111111111511111111111111111111111111511111111111111111011112222111111111111111111111111111111111122221111bbbbbbb777777bbbbbbb\r
1111111111115111111111111111111111111115111111111111111110111122221111111111111111111111111111111111222211117bb77777777777777bb7\r
11111111111151111111111111111111111111151111111111111111101111222211111111111111111111111111111111112222111177777777777777777777\r
111111111111511111111111111111111111111511111111111111111011112222111111111111111111111111111111111122221111bbbbbbb777777bbbbbbb\r
111111111111511111111111111111111111111511111111111111111011112222111111111111111111111111111111111122221111bbbbbbb777777bbbbbbb\r
111111111111151111111111111111111111115111111111111111111011111221111111111111111111111111111111111112211111bbbbbbbbb77bbbbbbbbb\r
111111111111151111111111111111111111115111111111111111111011111111111111111111111111111111111111111111111111bbbbbbbbb77bbbbbbbbb\r
111111111111151111111111111111111111115111111111111111111011111111111111111111111111111111111111111111111111bbbbbbbbb77bbbbbbbbb\r
111111111111151111111111111111111111115111111111111111111011111111111111111111111111111111111111111111111111bbbbbbbbb77bbbbbbbbb\r
111111111111151111111111111111111111115111111111111111111011111111111111111111111111111111111111111111111111bbbbbbbbb77bbbbbbbbb\r
111111111111151111111111111111111111115111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbb7bbbbbbbbb\r
111111111111151111111111111111111111115111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbb7bbbbbbbbb\r
111111111111151111111111111111111111115111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbb22bbbbbbbbb\r
111111111111151111111111111111111111115111111111111111111111111111111111111111111111111111111111111111111111bb2b2bb222b222222b2b\r
111111111111151111111111111111111111115111111111111111100011111111111111111111111111111111111111111111111111bbb2bb222222222b2bbb\r
111111111111151111111111111111111111115111111111111000000011111111111111111111111111111111111111111111111111bbbbb2b22222222222b2\r
111111111111151111111111111111111111115111111111111000000011111111111111111111111111111111111111111111111111b2bb2b2222222222b2bb\r
111111111111151111111111111111111111115111111111111111111111111111111111111111111111111111111111111111111111bb2b22222222222222bb\r
111111111111151111111111111111111111115111111111111111111111111111111111111111111111111111111111111111111111bbbb222222222222222b\r
1111111111111151111111111111111111111511111111111111111111111111111111111111111111111111111111111111111111112bbb222222222222b2bb\r
111111111111115111111111111111111111151111111111115555555500000000000000000000000000000000000000000000000000bbb2222222222222222b\r
111111111111111555555555555555555555511111111111115555555500000000000000000000000000000000000000000000000000b2b222222222222222bb\r
111111111111111111111111111111111111111111111111115555555500005555000005555555555555555555555555000005550000bbb222222222222222b2\r
111111111111111111111111111111111111111111111111115555555500055bbb00000bbbb00000000000000055555500000bb55000b2b2b2222222222222bb\r
11111111111111111111111111111111111111111111111111555555550005bbbbb000bbbbb00b0bbb0bbbb5005555555000bbbb5000bbb22222222222222bbb\r
11111111111111111111111111111111111111111111111111555555550005bbbbb000bbbbbbbbbbbbbbbbbb55555555b000bbbb5000b2bb22222222222222bb\r
11111111111111111111111111111111111111111111111111555555550005bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5000bbbbb2222222222222b4\r
11111111111111111111111111111111111111111111111111555555550005bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5000bbbb222222222222b2bb\r
55555555555555555555555555555555555555555555555555555555550005bbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5000bbb222222222222222bb\r
55555555555555555555555555555555555555555555555555555555550005bb7bb7bbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbb5000b2bb2222222222222b2b\r
00000000000000000000000000000000005555555555555555555555550005bb77bbbbbbbbbbbbbbbbbbbbbbbbb7fbbbbbbbbbbb5000bbbbb2222222222222bb\r
00000000000000000000000000000000005555555555555555555555550005bbf7bfbbbbbbbbbbbbbbbbbbbbbbb7fbbbbbbbbbfb5000bbbb22222222222222bb\r
00000000000000000000000000000000005555555555555555555555550005bbffbb77bbbbbbbbbbbbbbbbbbbbffbbbbbbbbb7fb5000bbb2222222222222b22b\r
00000000000000000000000000000000005555555555555555555555550005bbbfbbf7bbbbbbbb00000000bbbffbbbbbbbbfbbfb5000bbbb22222222222222bb\r
00000000000000000000000000000000005555555555555555555555550005bbbffbffbbbbbbb0022222200bbbbbbbbbbbffbfbb50002bb222222222222222bb\r
00000000000000000000000000000000005555555555555555555555550005bbbbfbbfffbbbbb0222222220bffbbbbbbbbff7fbb5000b2222222222222222bbb\r
00000000000000000000000000000000007777777777777777555555550005bbbbfbbbbbfffbb0000000000bfbbbbbbbbbbbfbbb5000bbb22222222222222bbb\r
00000000000000000000000000000000007577778788777757555555550005bbbbfbbffbfbbfb0000000000bfffbffbffbfbbbbb5000bbbb22222222222222bb\r
00000000000000bbbbbb0000000000000077777787878777775555555500055bbbbbbbbbbbbbb0000000000bbbbbbbffffbbbbb55000bbb222222222222222b4\r
00000000000bbbbbbbbbbbb0000000000077777787887777775555555500005555555555555550000000000555555555555555550000bbbb2222222222222bbb\r
0000000000bbbbbbbbbbbbbb0000000000c7c787878787c7c75555555500000000000000000000000000000000000000000000000000bbbb22222222222222bb\r
000000000bbbbbbbbbbbbbbbb0000000007c7c888c887c7c7c5555555500000000000000000000000000000000000000000000000000bb2b2b22222222222bbb\r
00000000bbbbbbbbbbbbbbbbbb00000000cccccccccccccccc5555555500000000000000000000000000000000000000000000000000bb2bb22222222222bbbb\r
0000000bbbbbbbbbbbbbbbbbbbb0000000cccccccccccccccc5555555500000000000000000000000000000000000000000000000000bbb2bb2b222b222bbbbb\r
`,Mp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH6gUJAhEEmdNh2QAADG1JREFUeNrtnU2IHMcVgF8ti2/CR+3CDEEQHeRdfDILPkhBImBCIikgEh1EGAXZjiDCOezEiCSSiZyAcHYPCTpsIot4MHtYmTmslKNR8O5BIHIy3uSwARFmYEfHRTcjqBx2X+/r6qrq+uue/qkPhunp6q6u6fdTr366mnUXLnEgjHaGAADQXbiU2Rb3ieAxqny0jJcY7xznsiQ2fsGg84znZ9Jc6P2m99mXGfqDCkq2rUrXFYru39p+ClvbT4HvT1LfAAC8c5zD/n2A/fuwvf0bwG3Yvw8qxWg7o50hjHaGcG7xlXMeszQzG6hXoL9puizv02+egO2vnwMAJN+U7a+fJ8ecfvNE2fe0dvQuX/Q6fxYAMu7dBJUHMN1PFSHh9ffgNKYL1wvl8mz/lw7fmy8y2Ngs5T/S/zkrc+8uGYkeQRYDSIVeMUwNoXf5IgxW91jIa/fgIrdVgsHGprUiUqOctTrTIFPdxRCVInx08jX4/e63mW/V9UKjqs508Emfs7mVIIowWN1jNkrg4oFEOc3K/uzHH34Ktz551/rG5cUAedYvE75OCWC8FM4CO8849Vq2VSLCJ/1UwEqVgx97lE57ecGr/E++8bffWd2f/PjDTwEA4NYn7yq3AfRNPuoBzpx+W3ktNn7BeOc4R2HTbzZ+wbrvdIttCaAyHSqCLuag7l+0/pTAJ32OCsHmVhh7eYElCnLyDPBjj7ivEviSUiGZ5f/3f4+l2xQUsNhMtAncesvz/OplddqTsu7IeClYnwMqA1WEhN0tAADgcKQgveX5wpu7opFmqgC0buS73zkPAJuZbYrKi7i0LsrG1wqpRafY3UoUwCRG4JM+vwrrAHDoYQpsEdAqO1UFiNZPf+vSVEKW9SACAPDP08exnxX2X3NhLy8wGyWg7j9l1YcWTdHFA7rjyiRIK8DaA5x6CPCfnx591xSb6F9aDZA8rv5pfSr/YdbFRZu2EFQeICX8Uw8BYLpKYFsFmFosVRAxOKTbVPiD1b1SYgFktsj6WeUBDlw+Cr1c4YeIvPMsHwVMBc3mVhhtEeB+KuzB6h7jkz5nqytW/QE+zPh2sWKbWZUWcuQqg0O0Xkazi82tMPzgPtHqZeeZepaQgfUMZki/TQuRRx1aATa4dP9SZRCVglr/Z7++khxvkm+o+5oEgS6DQVQJ1N2SrwAWzbssB6t7R+3w8VJ+fdh5xl16BKvQCZPi5JnEO9EmoQ4fD4vnzYgZyr7z0uoINv/Kvi66ebHuxzRMH6zuMZO+fl9PkGkG2igBJVjAsrpk3xvn6AWmhRj180mfwyTdjyB6AdU4C/628QT0WO9+gKbU7zbIonmb80RU+fRAXv3JhO3qCbQK0HThusYAtElne57M9YfCpVqWKgAKHufrIbrRPFWBmqhErl23tsLXzQ8I1bzOKMBoZ5gRPIL7TRVBNYO4CUoRahKIDyGUIKUAMuFTYWPa1vZTIyXQdRDh9YJRwLRxVTlVvXo6XFx/b3n+yPoDDlNTcoNAFLbKK8humkqw4vTlwY57wctshuJ/GmxsHszbW91jRXuAlPARiRL4eoHUtHDq4nH7wb27sLX9FB7cuwvXbtxM0lReQOb2zy2+gsHGJgx20h1GNuPeumZQmaAS+ORhMtijvC+BPYHSA6Cgr924CQCQCN8WFD79Y77TqQsdXzCgzOnbUgIqwYxsJ1r4g3t3k33oCapCEwLJUPjcixld4rUbNxMlQE9gowRY54tuPxKAQD2fqSqA1v3o7mVxAQDAlesr2oxHO8PUIJBM8IONTae+grqPQ1QJpQeQWbpLDBAKnHcQhR+WTBBILZ0qgWj9OqulzSaArPXj/jr1FE5b8UYwyu4MEAxKWwFnTr8N3YVLsL7WT+1Ht58nNDFdjJoL6QiKOKFsBo52hnDlevq3K+JjYlHwAfH0AqWMBloHee90OSx05W4vEpQZgOiK2wwT1wiqK1GJ3Zjxz6I68H89BP559tGziJpGKUDEHumEkDoga5ezt+r7nOG0SMUAo51h2FU3iqTzjItDzk0ixOofJqSXiStC+OQhj6D5jpfYqDPkMk9Q1s0LzTSUOPidEic7DCT7Q8+GpdRV+Fh2lRKIVXOorumgd0s200U2CthbnudFKIFO+KpubYps1pHPPpcyyJRAFpcVNiu46qgmY6qEv77Whwf37qYmtwAAnFs8mOOQN6wdAtsy0P+iW3kt+KxgX0wXN1BZf+gHNvHG42QWkQf37sL6WrFKEKoM1NP0Ll/0mlBLCe4BfFx76Kd16Y3/6vEOfO/8QmqRyqMZT8U5wpBleP+HP4BbODs50EJStesIEp+xV7G+1odrN27CV4/TpvKHP/4DACBZiPrajZuZujkUocugWqbPh0oowDQe00YhTBOTMlDXj5aP1t+IILDIhRrQwqjrle0vkhBloDOn6GwqE/J6dqeuABEzbK3dtEt/qlVAkdZ/5fpKEmj97rc/kh6D+4tqBUyjDLYzrmrjAbae/zkVJ5w58StvxanCuwtClsFlIG+qHqDoRZrQqnQ3ueiOoLLK4DqKWxsP4Are3PW1fupdRWX0AJZVhqCLRGXQzTj1HeGzyNvX5Zcp8DLLkCv8HBklVUB34VIhiywUhjAfICLBwEBTHqC7cAlGnWFKCXQPcw46m37PyXvkHYWfY/2G3lm5TiDy5Bv1yShA286JMvJuNRZVs1cQiMOWR8JSv1a2Snk3AaX1W8ZljXkuwJWip2EVNUNJqgAOQXnjm4F5VHUKWVmzsysxGhiZHlEBWk5UgJYTFaDlVDMCKoC6PPKWi0GkjzOsTAbbWuEBGiP8AmiNB2gTNsPsrVaAqvcqluG5WqMAVRe2aZlN1k2KMUDEmKgALafVCvDzbw8+VaPMclkrQJmLGBR5LXqDq6QEZZerNUFgGxAfsTMJBltdBUSiB6gd9Gkq04dqxePo+VEBaojv09T0/KgANUNXn6sUI8YAESXWCqBbyiwk5xZfFTpf7++vybenjU+52MsLjFq7+FtGq6uAKgl+WuWKVUDLiQrQcqICtJxWKEAd5wL4YDMjqBUKEFETFaCB3D7b5R+99UujY1vdDKwzt892+Z1/jhh+4z5MxzTZufS8RnsAXDKtidPCdcKX/cZzxO1GeYAmCloHFb7O4hFMp8c32gM0FSpoU+EjohdolAdoS3Mvz/3rEI+NHqCmUEt2ARXBSQGKHhEseiSwzthYuwxUnMYFgXkKGeLtGlXgDnk62EUZxEDQWQGK9ALR+vXQ+t+VIB6gzoISF6mUeQjdQpahyLuuLN1X+Mjts912TgpN1h6kL7jagIw7zbwAy2MpXRtlwuv2lue57OVQ1APYNAFFGt8TqCMjXHHlDd1KHJg2XmLJR/w9XmImQs8cQ66regMb9QAuwqfnt1YBnBCFLaYJDFb3GL7kSYXLa/ZQ6K5VAVWaVlYBSgp4ebaRgC2vK/bmuVYBX3wAsSu47tgKnyrPT/4CbHYaryyvInzS5yYvpKwSPv0ASOs9QPIE7dwKK+MFlvjyax98YwBabcxWpYesjDa3CnzgsuiXWPFjjzhMtrzz8Y0BaDOy9R4Ado8EEsI6Q2FaFt+xgagAAIkSYDVQRFXAJ30Ou1tgEmeYXt+nD8BrNLBJZASya+iiO8+49kNAa84TfnKcYVXkEgOI8UPsBzgk1QrY3QKY0xx8KODbJ+UTUO7sDg+OOWzfG1k9cfm6FonrRBAVrfcAAGkB4Taf9LmuHlYJX0zLy0ckz/1j0OcjfOo5KuMBPvvbX73Ov/r+L4KVhSoEFR7df2fXfAKqiQdIFG8XcvsjGusBpEJ8/b2jb9zOO8cT0WrZ3ApjcyvMtZVA89Nt47VM853uWICq/9pjyDTXC+zfP1CC/fvm5yjoLc9z2k8vqwZ026aI59AqBvep6vze8rzRNG9XvvgAOAMA80xsB0sslIHvT+QJKHC0fiJ8Sp4nEDu8fDqeTDvPQnRuZa4lyMB3ONjcA7iMlI2XmKkSvPHlcfj3918k36KlA0DKA2SO972xBVCVXlYR+55An2FSw3OpMN/48vjBzkOrT/2WCD9JbxHic4A259Lj86uAUGPkOZ7g1NAvoF16+GNtelWt0ZpDebj2B4jKovcAISdIFDDZos3QQSBxrj89RvcbwMQDRBpNpfoBIuUTFaBGcDiffFT7xLQ8ogLUDAaPgcHjlHBxH2IieCQqQM1Aa9cJXFQQHVEBaobKA8iOM6Eyo4ERM1DwMg9gKnRKbAa2nP8DtVJCW4swn/IAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjYtMDUtMDlUMDE6NDA6MDcrMDA6MDA1dCufAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI2LTA1LTA5VDAxOjQwOjA3KzAwOjAwRCmTIwAAAABJRU5ErkJggg==",Hn=new G0({antialias:!0});Hn.setSize(window.innerWidth,window.innerHeight);Hn.setPixelRatio(devicePixelRatio);Hn.shadowMap.enabled=!0;Hn.shadowMap.type=wc;document.body.appendChild(Hn.domElement);const oe=new V0;oe.background=new It(8900331);oe.fog=new Oa(8900331,100,370);const Sp=new Z0(6993128,9072192,1.1);oe.add(Sp);const Ne=new ll(16769168,2.6);Ne.position.set(80,130,50);Ne.castShadow=!0;Ne.shadow.mapSize.width=2048;Ne.shadow.mapSize.height=2048;Ne.shadow.camera.near=1;Ne.shadow.camera.far=400;Ne.shadow.camera.left=-80;Ne.shadow.camera.right=80;Ne.shadow.camera.top=80;Ne.shadow.camera.bottom=-80;Ne.shadow.bias=-3e-4;oe.add(Ne);const fl=new ll(8960248,.4);fl.position.set(-60,25,-40);oe.add(fl);const Ga=ap();Ga.receiveShadow=!0;oe.add(Ga);const Ep=lp(200);oe.add(Ep);const yp=up(200);oe.add(yp);const Ap=hp(20);oe.add(Ap);const Tp=fp();oe.add(Tp);const dl=cp();dl.forEach(i=>oe.add(i));const pl=new za(28,36,64);pl.rotateX(-Math.PI/2);const ml=new ge(pl,new on({color:5592405}));ml.position.y=.05;oe.add(ml);const Va=new K0().load(Mp);Va.magFilter=he;Va.minFilter=he;const Ue=ep(xp,Va);Ue.traverse(i=>{i instanceof ge&&(i.castShadow=!0)});Ue.rotation.order="YXZ";Ue.rotation.y=Math.PI;Ue.position.y=.5;oe.add(Ue);const Ma=hl(Ue);var Ac;const fc=((Ac=Ma.rolls[0])==null?void 0:Ac.userData.radius)??1,Sa=new vp(oe),dc=-1,wp=-1,pc=.25,Rp=.012,mc=5,Ts=new D;function bc(i,t,e){for(const n of i.rolls)n.rotation.x=t;for(const n of i.fronts)n.rotation.y=e*wp}function gc(i,t,e){const n=Math.abs(t);if(n<=mc)return;const r=Math.min(1,(n-mc)/15);for(const s of i.rears)Math.random()>=r||(s.getWorldPosition(Ts),Sa.emit(Ts.x,e+.1,Ts.z,n/Hi,1))}function bl(i){const n=document.createElement("canvas");n.width=200,n.height=50;const r=n.getContext("2d");r.fillStyle="#fff",r.beginPath(),r.roundRect(3,3,194,44,7),r.fill(),r.strokeStyle="#1a1a1a",r.lineWidth=1,r.beginPath(),r.roundRect(3,3,194,44,7),r.stroke(),r.fillStyle="#111",r.font="bold 20px monospace",r.textAlign="center",r.textBaseline="middle",r.fillText(i.toUpperCase(),200/2,50/2);const s=new ol(n),o=new Ba({map:s,depthTest:!1}),a=new sl(o);return a.scale.set(1,.25,1),a.renderOrder=1,a}let Ur=null;const Gi=new Map,ka=new Map,Nr=new Map,Fr=new Map,Wa=new Map,Cp=document.getElementById("players");function Xa(i){const t=[`<div class="me">▶ ${i}</div>`];for(const e of Wa.values())t.push(`<div class="other">• ${e}</div>`);Cp.innerHTML=t.join("")}function Pp(i,t,e){if(Gi.has(i))return;const n=Ue.clone();n.rotation.set(0,Math.PI,0),oe.add(n),Gi.set(i,n),ka.set(i,hl(n)),Nr.set(i,0);const r=bl(t);oe.add(r),Fr.set(i,r),Wa.set(i,t),Xa(e)}function Lp(i,t){const e=Gi.get(i);e&&(oe.remove(e),Gi.delete(i)),ka.delete(i),Nr.delete(i);const n=Fr.get(i);n&&(oe.remove(n),Fr.delete(i)),Wa.delete(i),Xa(t)}const bn=new De(60,innerWidth/innerHeight,.1,500),ws=new D(0,3.5,-9),Or=new Set;addEventListener("keydown",i=>Or.add(i.key.toLowerCase()));addEventListener("keyup",i=>Or.delete(i.key.toLowerCase()));const Mt=rp();Mt.position.set(32,0,0);Mt.angle=Math.PI/2;const Dp=document.getElementById("speedometer");let _c=performance.now();const vc=new $0,Ip=new D(0,-1,0);function wr(i,t){vc.set(new D(i,20,t),Ip);const e=vc.intersectObjects([Ga,...dl]);return e.length>0?e[0].point.y:0}Mt.position.y=wr(Mt.position.x,Mt.position.z);Ue.position.set(Mt.position.x,Mt.position.y+.5,Mt.position.z);const Up=20;let mn=0,oi=!0,xc=0,Rs=0,Cs=0,Mc=0;const Np=5,Sc=9,Fp=3;let Ec=0,Ps=!1;const yc=new D,Ls=new D;function gl(i){requestAnimationFrame(gl);const t=Math.min((i-_c)/1e3,.05);if(_c=i,Ps){Or.has("r")&&(Mt.position.set(32,0,0),Mt.angle=Math.PI/2,Mt.speed=0,Mt.velocity.set(0,0,0),mn=0,oi=!0),sp(Mt,Or,t);const{x:o,z:a}=Mt.position,c=wr(o,a);if(oi){const h=Math.sign(Mt.speed||1),p=Math.sin(Mt.angle)*h*.5,m=Math.cos(Mt.angle)*h*.5,_=wr(o-p,a-m),M=(c-_)/.5;Mt.position.y=c,mn=M*Math.abs(Mt.speed),wr(o+p,a+m)<c-.25&&Math.abs(Mt.speed)>2&&(oi=!1)}else if(mn-=Up*t,Mt.position.y+=mn*t,Mt.position.y<=c){if(Mt.position.y=c,oi=!0,mn<-4){const h=Math.min(16,Math.round(-mn));Sa.emit(o,c+.1,a,1,h)}mn=0}bp(Mt,i);const l=Math.sin(Mt.angle),u=Math.cos(Mt.angle);yc.set(Mt.position.x+ws.z*l,Mt.position.y+ws.y,Mt.position.z+ws.z*u),Ls.lerp(yc,1-Math.pow(.001,t)),bn.position.copy(Ls),bn.lookAt(Mt.position.x,Mt.position.y+1,Mt.position.z),Dp.textContent=`${Math.abs(Math.round(Mt.speed*2.24))} mph`}else{Ec+=t;const o=Math.min(Ec/Np,1),a=o*Math.PI*2;bn.position.set(Mt.position.x+Math.sin(a)*Sc,Mt.position.y+.5+Fp,Mt.position.z+Math.cos(a)*Sc),bn.lookAt(Mt.position.x,Mt.position.y+1,Mt.position.z),o>=1&&(Ps=!0,Ls.copy(bn.position))}Ue.position.set(Mt.position.x,Mt.position.y+.5,Mt.position.z),Ue.rotation.y=Mt.angle+Math.PI,xc+=Mt.speed*t/fc*dc,bc(Ma,xc,Mt.wheelAngle);const e=(Mt.speed-Mc)/Math.max(t,1e-4);Mc=Mt.speed;const n=Mt.wheelAngle*(Mt.speed/Hi)*pc,r=co.clamp(-e*Rp,-.12,.12)+(oi?0:co.clamp(-mn*.02,-.18,.18)),s=1-Math.pow(1e-4,t);Rs+=(n-Rs)*s,Cs+=(r-Cs)*s,Ue.rotation.z=Rs,Ue.rotation.x=Cs,Ps&&oi&&gc(Ma,Mt.speed,Mt.position.y),Ur&&Ur.position.set(Mt.position.x,Mt.position.y+2.8,Mt.position.z);for(const[o,a]of gp(i)){const c=Gi.get(o);c&&(c.position.set(a.x,a.y+.5,a.z),c.rotation.y=a.angle+Math.PI,c.rotation.z=a.wheel*(a.speed/Hi)*pc);const l=ka.get(o);if(l){const h=(Nr.get(o)??0)+a.speed*t/fc*dc;Nr.set(o,h),bc(l,h,a.wheel),gc(l,a.speed,a.y)}const u=Fr.get(o);u&&u.position.set(a.x,a.y+2.8,a.z)}Sa.update(t),Hn.render(oe,bn)}const Op=document.getElementById("plate-screen"),Fi=document.getElementById("plate-input"),Bp=document.getElementById("plate-btn");Fi.addEventListener("input",()=>{Fi.value=Fi.value.replace(/[^a-zA-Z0-9]/g,"").toUpperCase()});function _l(){const i=Fi.value.trim();if(!i.length)return;Op.remove(),Ur=bl(i),oe.add(Ur),Xa(i),mp("beep-beep.jbottigliero.partykit.dev","wrangler-game",i,(e,n)=>Pp(e,n,i),e=>Lp(e,i)),requestAnimationFrame(gl)}Fi.addEventListener("keydown",i=>{i.key==="Enter"&&_l()});Bp.addEventListener("click",_l);addEventListener("resize",()=>{bn.aspect=innerWidth/innerHeight,bn.updateProjectionMatrix(),Hn.setSize(innerWidth,innerHeight)});

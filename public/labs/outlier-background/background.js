(()=>{var gl="187";var _l=0,Gr=1,xl=2;var qi=1,vl=2,yi=3,Si=0,Be=1,nn=2,Vn=0,Yi=1,kr=2,Hr=3,Wr=4,yl=5;var Mi=100,Sl=101,Ml=102,bl=103,El=104,Tl=200,Al=201,wl=202,Rl=203,Cl=204,Il=205,Pl=206,Ll=207,Nl=208,Dl=209,Ul=210,Fl=211,Ol=212,Bl=213,zl=214,Gl=0,kl=1,Hl=2,Vr=3,Wl=4,Vl=5,Xl=6,ql=7,Yl=0,Zl=1,Jl=2,sn=0,Xr=1,qr=2,Yr=3,Zr=4,Jr=5,$r=6,Kr=7;var Zi=301,bi=302,Ls=303,Ns=304,$l=1000,Ds=1001,Kl=1002,Rn=1003,Ql=1004;var Ji=1005;var We=1006,Us=1007;var Cn=1008;var je=1009,jl=1010,tc=1011,$i=1012,Qr=1013,In=1014,_n=1015,rn=1016,jr=1017,ta=1018,Xn=1020,ec=35902,nc=35899,ic=1021,sc=1022,xn=1023,Ei=1026,Pn=1027,rc=1028,ea=1029,qn=1030,na=1031;var ia=1033,Fs=33776,Os=33777,Bs=33778,zs=33779,sa=35840,ra=35841,aa=35842,oa=35843,la=36196,ca=37492,ha=37496,ua=37488,da=37489,Gs=37490,fa=37491,pa=37808,ma=37809,ga=37810,_a=37811,xa=37812,va=37813,ya=37814,Sa=37815,Ma=37816,ba=37817,Ea=37818,Ta=37819,Aa=37820,wa=37821,Ra=36492,Ca=36494,Ia=36495,Pa=36283,La=36284,ks=36285,Na=36286;var Da=0,ac=1,Yn="",oc="srgb",Ua="srgb-linear",Fa="linear",he="srgb";var lc=512,cc=513,hc=514,Oa=515,uc=516,dc=517,Ba=518,za=519;var Ga="300 es",ka=2000;function Th(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ah(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Hi(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fc(){let t=Hi("canvas");return t.style.display="block",t}var Go={},_i=null;function Ha(...t){let e="THREE."+t.shift();if(_i)_i("log",e,...t);else console.log(e,...t)}function pc(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function zt(...t){t=pc(t);let e="THREE."+t.shift();if(_i)_i("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Gt(...t){t=pc(t);let e="THREE."+t.shift();if(_i)_i("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Oi(...t){let e=t.join(" ");if(e in Go)return;Go[e]=!0,zt(...t)}function mc(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var gc={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class vn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ko=1234567,Bi=Math.PI/180,xi=180/Math.PI;function Zn(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pe[t&255]+Pe[t>>8&255]+Pe[t>>16&255]+Pe[t>>24&255]+"-"+Pe[e&255]+Pe[e>>8&255]+"-"+Pe[e>>16&15|64]+Pe[e>>24&255]+"-"+Pe[n&63|128]+Pe[n>>8&255]+"-"+Pe[n>>16&255]+Pe[n>>24&255]+Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function Wa(t,e){return(t%e+e)%e}function wh(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function Rh(t,e,n){if(t!==e)return(n-t)/(e-t);else return 0}function zi(t,e,n){return(1-n)*t+n*e}function Ch(t,e,n,i){return zi(t,e,1-Math.exp(-n*i))}function Ih(t,e=1){return e-Math.abs(Wa(t,e*2)-e)}function Ph(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*(3-2*t)}function Lh(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10)}function Nh(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Dh(t,e){return t+Math.random()*(e-t)}function Uh(t){return t*(0.5-Math.random())}function Fh(t){if(t!==void 0)ko=t;let e=ko+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Oh(t){return t*Bi}function Bh(t){return t*xi}function zh(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function Gh(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Va(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function kh(t,e,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),f=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":t.set(o*h,l*d,l*u,o*c);break;case"YZY":t.set(l*u,o*h,l*d,o*c);break;case"ZXZ":t.set(l*d,l*u,o*h,o*c);break;case"XZX":t.set(o*h,l*_,l*f,o*c);break;case"YXY":t.set(l*f,o*h,l*_,o*c);break;case"ZYZ":t.set(l*_,l*f,o*h,o*c);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xa(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function _c(t,e){if(e.constructor===Float32Array)return t;let n=Xa(e);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function xc(t,e){if(e.constructor===Float32Array)return t;let n=Xa(e);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}var Ti={DEG2RAD:Bi,RAD2DEG:xi,generateUUID:Zn,clamp:$t,euclideanModulo:Wa,mapLinear:wh,inverseLerp:Rh,lerp:zi,damp:Ch,pingpong:Ih,smoothstep:Ph,smootherstep:Lh,randInt:Nh,randFloat:Dh,randFloatSpread:Uh,seededRandom:Fh,degToRad:Oh,radToDeg:Bh,isPowerOfTwo:zh,ceilPowerOfTwo:Gh,floorPowerOfTwo:Va,setQuaternionFromProperEuler:kh,normalize:xc,denormalize:_c};class lt{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r+0],u=s[r+1],f=s[r+2],_=s[r+3];if(h!==_||o!==d||l!==u||c!==f){let M=o*d+l*u+c*f+h*_;if(M<0)d=-d,u=-u,f=-f,_=-_,M=-M;let m=1-a;if(M<0.9995){let g=Math.acos(M),T=Math.sin(g);m=Math.sin(m*g)/T,a=Math.sin(a*g)/T,o=o*m+d*a,l=l*m+u*a,c=c*m+f*a,h=h*m+_*a}else{o=o*m+d*a,l=l*m+u*a,c=c*m+f*a,h=h*m+_*a;let g=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=g,l*=g,c*=g,h*=g}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=s[r],d=s[r+1],u=s[r+2],f=s[r+3];return t[e]=a*f+c*h+o*u-l*d,t[e+1]=o*f+c*d+l*h-a*u,t[e+2]=l*f+c*u+a*d-o*h,t[e+3]=c*f-a*h-o*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),h=a(s/2),d=o(n/2),u=o(i/2),f=o(s/2);switch(r){case"XYZ":this._x=d*c*h+l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h-d*u*f;break;case"YXZ":this._x=d*c*h+l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h+d*u*f;break;case"ZXY":this._x=d*c*h-l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h-d*u*f;break;case"ZYX":this._x=d*c*h-l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h+d*u*f;break;case"YZX":this._x=d*c*h+l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h-d*u*f;break;case"XZY":this._x=d*c*h-l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h+d*u*f;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],d=n+a+h;if(d>0){let u=0.5/Math.sqrt(d+1);this._w=0.25/u,this._x=(c-o)*u,this._y=(s-l)*u,this._z=(r-i)*u}else if(n>a&&n>h){let u=2*Math.sqrt(1+n-a-h);this._w=(c-o)/u,this._x=0.25*u,this._y=(i+r)/u,this._z=(s+l)/u}else if(a>h){let u=2*Math.sqrt(1+a-n-h);this._w=(s-l)/u,this._x=(i+r)/u,this._y=0.25*u,this._z=(o+c)/u}else{let u=2*Math.sqrt(1+h-n-a);this._w=(r-i)/u,this._x=(s+l)/u,this._y=(o+c)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ho.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ho.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),h=2*(s*n-r*e);return this.x=e+o*l+r*h-a*c,this.y=n+o*c+a*l-s*h,this.z=i+o*h+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pr.copy(this).projectOnVector(t),this.sub(pr)}reflect(t){return this.sub(pr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var pr=new D,Ho=new yn;class Ht{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],d=n[2],u=n[5],f=n[8],_=i[0],M=i[3],m=i[6],g=i[1],T=i[4],E=i[7],S=i[2],A=i[5],R=i[8];return s[0]=r*_+a*g+o*S,s[3]=r*M+a*T+o*A,s[6]=r*m+a*E+o*R,s[1]=l*_+c*g+h*S,s[4]=l*M+c*T+h*A,s[7]=l*m+c*E+h*R,s[2]=d*_+u*g+f*S,s[5]=d*M+u*T+f*A,s[8]=d*m+u*E+f*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*r-a*l,d=a*o-c*s,u=l*s-r*o,f=e*h+n*d+i*u;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return t[0]=h*_,t[1]=(i*l-c*n)*_,t[2]=(a*n-i*r)*_,t[3]=d*_,t[4]=(c*e-i*o)*_,t[5]=(i*s-a*e)*_,t[6]=u*_,t[7]=(n*o-l*e)*_,t[8]=(r*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return Oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mr.makeScale(t,e)),this}rotate(t){return Oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mr.makeRotation(-t)),this}translate(t,e){return Oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mr.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var mr=new Ht,Wo=new Ht().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Vo=new Ht().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Hh(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=mn(s.r),s.g=mn(s.g),s.b=mn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:Wo,fromXYZ:Vo,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:Wo,fromXYZ:Vo,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var jt=Hh();function mn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function gi(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var ni;class qa{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(ni===void 0)ni=Hi("canvas");ni.width=t.width,ni.height=t.height;let i=ni.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=mn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(mn(e[n]/255)*255);else e[n]=mn(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Wh=0;class Ki{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width||0,e.height||0,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(gr(i[r].image));else s.push(gr(i[r]))}else s=gr(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function gr(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return qa.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return zt("Texture: Unable to serialize Texture."),{}}var Vh=0,_r=new D;class Ne extends vn{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Ne.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Zn(),this.name="",this.source=new Ki(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_r).x}get height(){return this.source.getSize(_r).y}get depth(){return this.source.getSize(_r).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=300;Ne.DEFAULT_ANISOTROPY=1;class me{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],h=o[8],d=o[1],u=o[5],f=o[9],_=o[2],M=o[6],m=o[10];if(Math.abs(c-d)<0.01&&Math.abs(h-_)<0.01&&Math.abs(f-M)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(h+_)<0.1&&Math.abs(f+M)<0.1&&Math.abs(l+u+m-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,E=(u+1)/2,S=(m+1)/2,A=(c+d)/4,R=(h+_)/4,p=(f+M)/4;if(T>E&&T>S)if(T<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(T),i=A/n,s=R/n;else if(E>S)if(E<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(E),n=A/i,s=p/i;else if(S<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(S),n=R/s,i=p/s;return this.set(n,i,s,e),this}let g=Math.sqrt((M-f)*(M-f)+(h-_)*(h-_)+(d-c)*(d-c));if(Math.abs(g)<0.001)g=1;return this.x=(M-f)/g,this.y=(h-_)/g,this.z=(d-c)/g,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ya extends vn{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Ne({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.mipmapsAutoUpdate!==void 0)e.mipmapsAutoUpdate=t.mipmapsAutoUpdate;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ki(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ve extends Ya{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class Hs extends Ne{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Za extends Ne{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class de{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,h,d,u,f,_,M){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,h,d,u,f,_,M)}set(t,e,n,i,s,r,a,o,l,c,h,d,u,f,_,M){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=o,m[2]=l,m[6]=c,m[10]=h,m[14]=d,m[3]=u,m[7]=f,m[11]=_,m[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ii.setFromMatrixColumn(t,0).length(),s=1/ii.setFromMatrixColumn(t,1).length(),r=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let d=r*c,u=r*h,f=a*c,_=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=u+f*l,e[5]=d-_*l,e[9]=-a*o,e[2]=_-d*l,e[6]=f+u*l,e[10]=r*o}else if(t.order==="YXZ"){let d=o*c,u=o*h,f=l*c,_=l*h;e[0]=d+_*a,e[4]=f*a-u,e[8]=r*l,e[1]=r*h,e[5]=r*c,e[9]=-a,e[2]=u*a-f,e[6]=_+d*a,e[10]=r*o}else if(t.order==="ZXY"){let d=o*c,u=o*h,f=l*c,_=l*h;e[0]=d-_*a,e[4]=-r*h,e[8]=f+u*a,e[1]=u+f*a,e[5]=r*c,e[9]=_-d*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let d=r*c,u=r*h,f=a*c,_=a*h;e[0]=o*c,e[4]=f*l-u,e[8]=d*l+_,e[1]=o*h,e[5]=_*l+d,e[9]=u*l-f,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let d=r*o,u=r*l,f=a*o,_=a*l;e[0]=o*c,e[4]=_-d*h,e[8]=f*h+u,e[1]=h,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=u*h+f,e[10]=d-_*h}else if(t.order==="XZY"){let d=r*o,u=r*l,f=a*o,_=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=d*h+_,e[5]=r*c,e[9]=u*h-f,e[2]=f*h-u,e[6]=a*c,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xh,t,qh)}lookAt(t,e,n){let i=this.elements;if(ze.subVectors(t,e),ze.lengthSq()===0)ze.z=1;if(ze.normalize(),bn.crossVectors(n,ze),bn.lengthSq()===0){if(Math.abs(n.z)===1)ze.x+=0.0001;else ze.z+=0.0001;ze.normalize(),bn.crossVectors(n,ze)}return bn.normalize(),cs.crossVectors(ze,bn),i[0]=bn.x,i[4]=cs.x,i[8]=ze.x,i[1]=bn.y,i[5]=cs.y,i[9]=ze.y,i[2]=bn.z,i[6]=cs.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],d=n[9],u=n[13],f=n[2],_=n[6],M=n[10],m=n[14],g=n[3],T=n[7],E=n[11],S=n[15],A=i[0],R=i[4],p=i[8],y=i[12],I=i[1],O=i[5],P=i[9],G=i[13],Q=i[2],w=i[6],X=i[10],q=i[14],B=i[3],rt=i[7],W=i[11],K=i[15];return s[0]=r*A+a*I+o*Q+l*B,s[4]=r*R+a*O+o*w+l*rt,s[8]=r*p+a*P+o*X+l*W,s[12]=r*y+a*G+o*q+l*K,s[1]=c*A+h*I+d*Q+u*B,s[5]=c*R+h*O+d*w+u*rt,s[9]=c*p+h*P+d*X+u*W,s[13]=c*y+h*G+d*q+u*K,s[2]=f*A+_*I+M*Q+m*B,s[6]=f*R+_*O+M*w+m*rt,s[10]=f*p+_*P+M*X+m*W,s[14]=f*y+_*G+M*q+m*K,s[3]=g*A+T*I+E*Q+S*B,s[7]=g*R+T*O+E*w+S*rt,s[11]=g*p+T*P+E*X+S*W,s[15]=g*y+T*G+E*q+S*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],d=t[10],u=t[14],f=t[3],_=t[7],M=t[11],m=t[15],g=o*u-l*d,T=a*u-l*h,E=a*d-o*h,S=r*u-l*c,A=r*d-o*c,R=r*h-a*c;return e*(_*g-M*T+m*E)-n*(f*g-M*S+m*A)+i*(f*T-_*S+m*R)-s*(f*E-_*A+M*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],d=t[10],u=t[11],f=t[12],_=t[13],M=t[14],m=t[15],g=e*a-n*r,T=e*o-i*r,E=e*l-s*r,S=n*o-i*a,A=n*l-s*a,R=i*l-s*o,p=c*_-h*f,y=c*M-d*f,I=c*m-u*f,O=h*M-d*_,P=h*m-u*_,G=d*m-u*M,Q=g*G-T*P+E*O+S*I-A*y+R*p;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/Q;return t[0]=(a*G-o*P+l*O)*w,t[1]=(i*P-n*G-s*O)*w,t[2]=(_*R-M*A+m*S)*w,t[3]=(d*A-h*R-u*S)*w,t[4]=(o*I-r*G-l*y)*w,t[5]=(e*G-i*I+s*y)*w,t[6]=(M*E-f*R-m*T)*w,t[7]=(c*R-d*E+u*T)*w,t[8]=(r*P-a*I+l*p)*w,t[9]=(n*I-e*P-s*p)*w,t[10]=(f*A-_*E+m*g)*w,t[11]=(h*E-c*A-u*g)*w,t[12]=(a*y-r*O-o*p)*w,t[13]=(e*O-n*y+i*p)*w,t[14]=(_*T-f*S-M*g)*w,t[15]=(c*S-h*T+d*g)*w,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,h=a+a,d=s*l,u=s*c,f=s*h,_=r*c,M=r*h,m=a*h,g=o*l,T=o*c,E=o*h,{x:S,y:A,z:R}=n;return i[0]=(1-(_+m))*S,i[1]=(u+E)*S,i[2]=(f-T)*S,i[3]=0,i[4]=(u-E)*A,i[5]=(1-(d+m))*A,i[6]=(M+g)*A,i[7]=0,i[8]=(f+T)*R,i[9]=(M-g)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=ii.set(i[0],i[1],i[2]).length(),a=ii.set(i[4],i[5],i[6]).length(),o=ii.set(i[8],i[9],i[10]).length();if(s<0)r=-r;Je.copy(this);let l=1/r,c=1/a,h=1/o;return Je.elements[0]*=l,Je.elements[1]*=l,Je.elements[2]*=l,Je.elements[4]*=c,Je.elements[5]*=c,Je.elements[6]*=c,Je.elements[8]*=h,Je.elements[9]*=h,Je.elements[10]*=h,e.setFromRotationMatrix(Je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),f,_;if(o)f=s/(r-s),_=r*s/(r-s);else if(a===2000)f=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(a===2001)f=-r/(r-s),_=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),h=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),f,_;if(o)f=1/(r-s),_=r/(r-s);else if(a===2000)f=-2/(r-s),_=-(r+s)/(r-s);else if(a===2001)f=-1/(r-s),_=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var ii=new D,Je=new de,Xh=new D(0,0,0),qh=new D(1,1,1),bn=new D,cs=new D,ze=new D,Xo=new de,qo=new yn;class gn{constructor(t=0,e=0,n=0,i=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],d=i[6],u=i[10];switch(e){case"XYZ":if(this._y=Math.asin($t(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,u),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-$t(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,u),this._z=Math.atan2(o,l);else this._y=Math.atan2(-h,s),this._z=0;break;case"ZXY":if(this._x=Math.asin($t(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-h,u),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(d,u),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin($t(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s);else this._x=0,this._y=Math.atan2(a,u);break;case"XZY":if(this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,u),this._y=0;break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return Xo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qo.setFromEuler(this),this.setFromQuaternion(qo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Ws{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var Yh=0,Yo=new D,si=new yn,hn=new de,hs=new D,Li=new D,Zh=new D,Jh=new yn,Zo=new D(1,0,0),Jo=new D(0,1,0),$o=new D(0,0,1),Ko={type:"added"},$h={type:"removed"},ri={type:"childadded",child:null},xr={type:"childremoved",child:null};class Oe extends vn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();let t=new D,e=new gn,n=new yn,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new Ht}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(Zo,t)}rotateY(t){return this.rotateOnAxis(Jo,t)}rotateZ(t){return this.rotateOnAxis($o,t)}translateOnAxis(t,e){return Yo.copy(t).applyQuaternion(this.quaternion),this.position.add(Yo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zo,t)}translateY(t){return this.translateOnAxis(Jo,t)}translateZ(t){return this.translateOnAxis($o,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)hs.copy(t);else hs.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)hn.lookAt(Li,hs,this.up);else hn.lookAt(hs,Li,this.up);if(this.quaternion.setFromRotationMatrix(hn),i)hn.extractRotation(i.matrixWorld),si.setFromRotationMatrix(hn),this.quaternion.premultiply(si.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Gt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ko),ri.child=t,this.dispatchEvent(ri),ri.child=null;else Gt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent($h),xr.child=t,this.dispatchEvent(xr),xr.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld);return t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ko),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,t,Zh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,Jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let h=o[l];s(t.shapes,h)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),h=r(t.shapes),d=r(t.skeletons),u=r(t.animations),f=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(h.length>0)n.shapes=h;if(d.length>0)n.skeletons=d;if(u.length>0)n.animations=u;if(f.length>0)n.nodes=f}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Oe.DEFAULT_UP=new D(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mi extends Oe{constructor(){super();this.isGroup=!0,this.type="Group"}}var Kh={type:"move"};class Qi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let _ of t.hand.values()){let M=e.getJointPose(_,n),m=this._getHandJoint(l,_);if(M!==null)m.matrix.fromArray(M.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=M.radius;m.visible=M!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position),u=0.02,f=0.005;if(l.inputState.pinching&&d>u+f)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&d<=u-f)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(Kh)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new mi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},us={h:0,s:0,l:0};function vr(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=Wa(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=vr(r,s,t+0.3333333333333333),this.g=vr(r,s,t),this.b=vr(r,s,t-0.3333333333333333)}return jt.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)zt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=vc[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else zt("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mn(t.r),this.g=mn(t.g),this.b=mn(t.b),this}copyLinearToSRGB(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return jt.workingToColorSpace(Le.copy(this),t),Math.round($t(Le.r*255,0,255))*65536+Math.round($t(Le.g*255,0,255))*256+Math.round($t(Le.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Le.copy(this),e);let{r:n,g:i,b:s}=Le,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let h=r-a;switch(l=c<=0.5?h/(r+a):h/(2-r-a),r){case n:o=(i-s)/h+(i<s?6:0);break;case i:o=(s-n)/h+2;break;case s:o=(n-i)/h+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t="srgb"){jt.workingToColorSpace(Le.copy(this),t);let{r:e,g:n,b:i}=Le;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(us);let n=zi(En.h,us.h,e),i=zi(En.s,us.s,e),s=zi(En.l,us.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Le=new ee;ee.NAMES=vc;class Vs extends Oe{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var $e=new D,un=new D,yr=new D,dn=new D,ai=new D,oi=new D,Qo=new D,Sr=new D,Mr=new D,br=new D,Er=new me,Tr=new me,Ar=new me;class He{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){$e.subVectors(i,e),un.subVectors(n,e),yr.subVectors(t,e);let r=$e.dot($e),a=$e.dot(un),o=$e.dot(yr),l=un.dot(un),c=un.dot(yr),h=r*l-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,u=(l*o-a*c)*d,f=(r*c-a*o)*d;return s.set(1-u-f,f,u)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,dn)===null)return!1;return dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,dn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,dn.x),o.addScaledVector(r,dn.y),o.addScaledVector(a,dn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return Er.setScalar(0),Tr.setScalar(0),Ar.setScalar(0),Er.fromBufferAttribute(t,e),Tr.fromBufferAttribute(t,n),Ar.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Er,s.x),r.addScaledVector(Tr,s.y),r.addScaledVector(Ar,s.z),r}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),un.subVectors(t,e),$e.cross(un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),un.subVectors(this.a,this.b),$e.cross(un).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return He.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;ai.subVectors(i,n),oi.subVectors(s,n),Sr.subVectors(t,n);let o=ai.dot(Sr),l=oi.dot(Sr);if(o<=0&&l<=0)return e.copy(n);Mr.subVectors(t,i);let c=ai.dot(Mr),h=oi.dot(Mr);if(c>=0&&h<=c)return e.copy(i);let d=o*h-c*l;if(d<=0&&o>=0&&c<=0&&o-c>0)return r=o/(o-c),e.copy(n).addScaledVector(ai,r);br.subVectors(t,s);let u=ai.dot(br),f=oi.dot(br);if(f>=0&&u<=f)return e.copy(s);let _=u*l-o*f;if(_<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(oi,a);let M=c*f-u*h;if(M<=0&&h-c>=0&&u-f>=0)return Qo.subVectors(s,i),a=(h-c)/(h-c+(u-f)),e.copy(i).addScaledVector(Qo,a);let m=1/(M+_+d);return r=_*m,a=d*m,e.copy(n).addScaledVector(ai,r).addScaledVector(oi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Jn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ke.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,Ke);else Ke.fromBufferAttribute(s,r);Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();ds.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();ds.copy(n.boundingBox)}ds.applyMatrix4(t.matrixWorld),this.union(ds)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ni),fs.subVectors(this.max,Ni),li.subVectors(t.a,Ni),ci.subVectors(t.b,Ni),hi.subVectors(t.c,Ni),Tn.subVectors(ci,li),An.subVectors(hi,ci),On.subVectors(li,hi);let e=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-On.z,On.y,Tn.z,0,-Tn.x,An.z,0,-An.x,On.z,0,-On.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-On.y,On.x,0];if(!wr(e,li,ci,hi,fs))return!1;if(e=[1,0,0,0,1,0,0,0,1],!wr(e,li,ci,hi,fs))return!1;return ps.crossVectors(Tn,An),e=[ps.x,ps.y,ps.z],wr(e,li,ci,hi,fs)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(Ke).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var fn=[new D,new D,new D,new D,new D,new D,new D,new D],Ke=new D,ds=new Jn,li=new D,ci=new D,hi=new D,Tn=new D,An=new D,On=new D,Ni=new D,fs=new D,ps=new D,Bn=new D;function wr(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Bn.fromArray(t,r);let o=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),l=e.dot(Bn),c=n.dot(Bn),h=i.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var xe=new D,ms=new lt,Qh=0;class Qe extends vn{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=t!==void 0?Xa(t):void 0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ms.fromBufferAttribute(this,e),ms.applyMatrix3(t),this.setXY(e,ms.x,ms.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=this._denormalize(n);return n}setComponent(t,e,n){if(this.normalized)n=this._normalize(n);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=this._denormalize(e);return e}setX(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=this._denormalize(e);return e}setY(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=this._denormalize(e);return e}setZ(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=this._denormalize(e);return e}setW(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):_c(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):xc(t,this.array)}}class Xs extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qs extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}var jh=new Jn,Di=new D,Rr=new D;class ji{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else jh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Di.subVectors(t,this.center);let e=Di.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(Di,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else Rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Di.copy(t.center).add(Rr)),this.expandByPoint(Di.copy(t.center).sub(Rr));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var tu=0,ke=new de,Cr=new Oe,ui=new D,Ge=new Jn,Ui=new Jn,Te=new D;class Xe extends vn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((Th(t))?qs:Xs)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return Cr.lookAt(t),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new we(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Jn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(Ge.setFromBufferAttribute(s),this.morphTargetsRelative)Te.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Te);else this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new ji;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(Ui.setFromBufferAttribute(a),this.morphTargetsRelative)Te.addVectors(Ge.min,Ui.min),Ge.expandByPoint(Te),Te.addVectors(Ge.max,Ui.max),Ge.expandByPoint(Te);else Ge.expandByPoint(Ui.min),Ge.expandByPoint(Ui.max)}Ge.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Te.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Te.fromBufferAttribute(a,l),o)ui.fromBufferAttribute(t,l),Te.add(ui);i=Math.max(i,n.distanceToSquared(Te))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new Qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[],l=new Uint8Array(n.count);for(let y=0;y<n.count;y++)a[y]=new D,o[y]=new D;let c=new D,h=new D,d=new D,u=new lt,f=new lt,_=new lt,M=new D,m=new D;function g(y,I,O){l[y]=l[I]=l[O]=1,c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,O),u.fromBufferAttribute(s,y),f.fromBufferAttribute(s,I),_.fromBufferAttribute(s,O),h.sub(c),d.sub(c),f.sub(u),_.sub(u);let P=1/(f.x*_.y-_.x*f.y);if(!isFinite(P))return;M.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(P),a[y].add(M),a[I].add(M),a[O].add(M),o[y].add(m),o[I].add(m),o[O].add(m)}let T=this.groups;if(T.length===0)T=[{start:0,count:t.count}];for(let y=0,I=T.length;y<I;++y){let O=T[y],{start:P,count:G}=O;for(let Q=P,w=P+G;Q<w;Q+=3)g(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}let E=new D,S=new D,A=new D,R=new D;function p(y){A.fromBufferAttribute(i,y),R.copy(A);let I=a[y];E.copy(I),E.sub(A.multiplyScalar(A.dot(I))).normalize(),S.crossVectors(R,I);let P=S.dot(o[y])<0?-1:1;r.setXYZW(y,E.x,E.y,E.z,P)}for(let y=0,I=n.count;y<I;++y)if(l[y])p(y);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new D,s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D;if(t)for(let d=0,u=t.count;d<u;d+=3){let f=t.getX(d+0),_=t.getX(d+1),M=t.getX(d+2);i.fromBufferAttribute(e,f),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),a.add(c),o.add(c),l.add(c),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:h}=a,d=new l.constructor(o.length*c),u=0,f=0;for(let _=0,M=o.length;_<M;_++){if(a.isInterleavedBufferAttribute)u=o[_]*a.data.stride+a.offset;else u=o[_]*c;for(let m=0;m<c;m++)d[f++]=l[u++]}return new Qe(d,c,h)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Xe,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,h=l.length;c<h;c++){let d=l[c],u=t(d,n);o.push(u)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let h=0,d=l.length;h<d;h++){let u=l[h];c.push(u.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],h=s[l];for(let d=0,u=h.length;d<u;d++)c.push(h[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Ir=new D,eu=new D,nu=new Ht;class en{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ir.subVectors(n,e).cross(eu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Ir),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||nu.getNormalMatrix(t),i=this.coplanarPoint(Ir).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var iu=0;class $n extends vn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)n.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new ee().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.diffuseRoughness!==void 0)this.diffuseRoughness=t.diffuseRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum;if(t.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1];if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new en().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new lt().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale);if(t.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null;if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}var pn=new D,Pr=new D,gs=new D,_s=new D;class Ja{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pn.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){Pr.copy(t).add(e).multiplyScalar(0.5),gs.copy(e).sub(t).normalize(),_s.copy(this.origin).sub(Pr);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(gs),a=_s.dot(this.direction),o=-_s.dot(gs),l=_s.lengthSq(),c=Math.abs(1-r*r),h,d,u,f;if(c>0)if(h=r*o-a,d=r*a-o,f=s*c,h>=0)if(d>=-f)if(d<=f){let _=1/c;h*=_,d*=_,u=h*(h+r*d+2*a)+d*(r*h+d+2*o)+l}else d=s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;else d=-s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;else if(d<=-f)h=Math.max(0,-(-r*s+a)),d=h>0?-s:Math.min(Math.max(-s,-o),s),u=-h*h+d*(d+2*o)+l;else if(d<=f)h=0,d=Math.min(Math.max(-s,-o),s),u=d*(d+2*o)+l;else h=Math.max(0,-(r*s+a)),d=h>0?s:Math.min(Math.max(-s,-o),s),u=-h*h+d*(d+2*o)+l;else d=r>0?-s:s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,h);if(i)i.copy(Pr).addScaledVector(gs,d);return u}intersectSphere(t,e){if(t.radius<0)return null;pn.subVectors(t.center,this.origin);let n=pn.dot(this.direction),i=pn.dot(pn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;if(l>=0)n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l;else n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l;if(c>=0)s=(t.min.y-d.y)*c,r=(t.max.y-d.y)*c;else s=(t.max.y-d.y)*c,r=(t.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(h>=0)a=(t.min.z-d.z)*h,o=(t.max.z-d.z)*h;else a=(t.max.z-d.z)*h,o=(t.min.z-d.z)*h;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,h=t.x-r.x,d=t.y-r.y,u=t.z-r.z,f=e.x-r.x,_=e.y-r.y,M=e.z-r.z,m=n.x-r.x,g=n.y-r.y,T=n.z-r.z,E=Math.abs(o),S=Math.abs(l),A=Math.abs(c),R,p,y,I,O,P,G,Q,w,X,q,B;if(E>=S&&E>=A)if(y=o,P=h,w=f,B=m,o>=0)R=l,p=c,I=d,O=u,G=_,Q=M,X=g,q=T;else R=c,p=l,I=u,O=d,G=M,Q=_,X=T,q=g;else if(S>=A)if(y=l,P=d,w=_,B=g,l>=0)R=c,p=o,I=u,O=h,G=M,Q=f,X=T,q=m;else R=o,p=c,I=h,O=u,G=f,Q=M,X=m,q=T;else if(y=c,P=u,w=M,B=T,c>=0)R=o,p=l,I=h,O=d,G=f,Q=_,X=m,q=g;else R=l,p=o,I=d,O=h,G=_,Q=f,X=g,q=m;if(y===0)return null;let rt=R/y,W=p/y,K=1/y,nt=I-rt*P,bt=O-W*P,Z=G-rt*w,it=Q-W*w,Tt=X-rt*B,Nt=q-W*B,Dt=Tt*it-Nt*Z,St=nt*Nt-bt*Tt,ne=Z*bt-it*nt;if(i){if(Dt<0||St<0||ne<0)return null}else if((Dt<0||St<0||ne<0)&&(Dt>0||St>0||ne>0))return null;let qt=Dt+St+ne;if(qt===0)return null;let Bt=K*(Dt*P+St*w+ne*B);if(qt>0?Bt<0:Bt>0)return null;return this.at(Bt/qt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $a extends $n{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var jo=new de,zn=new Ja,xs=new ji,tl=new D,vs=new D,ys=new D,Ss=new D,Lr=new D,Ms=new D,el=new D,bs=new D;class Re extends Oe{constructor(t=new Xe,e=new $a){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Ms.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],h=s[o];if(c===0)continue;if(Lr.fromBufferAttribute(h,t),r)Ms.addScaledVector(Lr,c);else Ms.addScaledVector(Lr.sub(e),c)}e.add(Ms)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(xs.copy(n.boundingSphere),xs.applyMatrix4(s),zn.copy(t.ray).recast(t.near),xs.containsPoint(zn.origin)===!1){if(zn.intersectSphere(xs,tl)===null)return;if(zn.origin.distanceToSquared(tl)>(t.far-t.near)**2)return}if(jo.copy(s).invert(),zn.copy(t.ray).applyMatrix4(jo),n.boundingBox!==null){if(zn.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,zn)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,{groups:d,drawRange:u}=s;if(a!==null)if(Array.isArray(r))for(let f=0,_=d.length;f<_;f++){let M=d[f],m=r[M.materialIndex],g=Math.max(M.start,u.start),T=Math.min(a.count,Math.min(M.start+M.count,u.start+u.count));for(let E=g,S=T;E<S;E+=3){let A=a.getX(E),R=a.getX(E+1),p=a.getX(E+2);if(i=Es(this,m,t,n,l,c,h,A,R,p),i)i.faceIndex=Math.floor(E/3),i.face.materialIndex=M.materialIndex,e.push(i)}}else{let f=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let M=f,m=_;M<m;M+=3){let g=a.getX(M),T=a.getX(M+1),E=a.getX(M+2);if(i=Es(this,r,t,n,l,c,h,g,T,E),i)i.faceIndex=Math.floor(M/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let f=0,_=d.length;f<_;f++){let M=d[f],m=r[M.materialIndex],g=Math.max(M.start,u.start),T=Math.min(o.count,Math.min(M.start+M.count,u.start+u.count));for(let E=g,S=T;E<S;E+=3){let A=E,R=E+1,p=E+2;if(i=Es(this,m,t,n,l,c,h,A,R,p),i)i.faceIndex=Math.floor(E/3),i.face.materialIndex=M.materialIndex,e.push(i)}}else{let f=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let M=f,m=_;M<m;M+=3){let g=M,T=M+1,E=M+2;if(i=Es(this,r,t,n,l,c,h,g,T,E),i)i.faceIndex=Math.floor(M/3),e.push(i)}}}}function su(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;bs.copy(o),bs.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(bs);if(c<n.near||c>n.far)return null;return{distance:c,point:bs.clone(),object:t}}function Es(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,vs),t.getVertexPosition(l,ys),t.getVertexPosition(c,Ss);let h=su(t,e,n,i,vs,ys,Ss,el);if(h){let d=new D;if(He.getBarycoord(el,vs,ys,Ss,d),s)h.uv=He.getInterpolatedAttribute(s,o,l,c,d,new lt);if(r)h.uv1=He.getInterpolatedAttribute(r,o,l,c,d,new lt);if(a){if(h.normal=He.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(i.direction)>0)h.normal.multiplyScalar(-1)}let u={a:o,b:l,c,normal:new D,materialIndex:0};He.getNormal(vs,ys,Ss,u.normal),h.face=u,h.barycoord=d}return h}class Ka extends Ne{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,h,d){super(null,r,a,o,l,c,i,s,h,d);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var Gn=new ji,ru=new lt(0.5,0.5),Ts=new D;class Hn{constructor(t=new en,e=new en,n=new en,i=new en,s=new en,r=new en){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],_=s[9],M=s[10],m=s[11],g=s[12],T=s[13],E=s[14],S=s[15];if(i[0].setComponents(l-r,u-c,m-f,S-g).normalize(),i[1].setComponents(l+r,u+c,m+f,S+g).normalize(),i[2].setComponents(l+a,u+h,m+_,S+T).normalize(),i[3].setComponents(l-a,u-h,m-_,S-T).normalize(),n)i[4].setComponents(o,d,M,E).normalize(),i[5].setComponents(l-o,u-d,m-M,S-E).normalize();else if(i[4].setComponents(l-o,u-d,m-M,S-E).normalize(),e===2000)i[5].setComponents(l+o,u+d,m+M,S+E).normalize();else if(e===2001)i[5].setComponents(o,d,M,E).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){Gn.center.set(0,0,0);let e=ru.distanceTo(t.center);return Gn.radius=0.7071067811865476+e,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ts.x=i.normal.x>0?t.max.x:t.min.x,Ts.y=i.normal.y>0?t.max.y:t.min.y,Ts.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var nl=new de;class Ys{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];if(nl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0)n[i]=new Hn;n[i].setFromProjectionMatrix(nl,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++){if(e[i]===void 0)e[i]=new Hn;e[i].copy(n[i])}return this._count=t._count,this}clone(){return new Ys().copy(this)}}class Zs extends Ne{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ln extends Ne{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,h=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ki(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Js extends Ln{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},h=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class $s extends Ne{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Nn extends Xe{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],h=[],d=0,u=0;f("z","y","x",-1,-1,n,e,t,r,s,0),f("z","y","x",1,-1,n,e,-t,r,s,1),f("x","z","y",1,1,t,n,e,i,r,2),f("x","z","y",1,-1,t,n,-e,i,r,3),f("x","y","z",1,-1,t,e,n,i,s,4),f("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(h,2));function f(_,M,m,g,T,E,S,A,R,p,y){let I=E/R,O=S/p,P=E/2,G=S/2,Q=A/2,w=R+1,X=p+1,q=0,B=0,rt=new D;for(let W=0;W<X;W++){let K=W*O-G;for(let nt=0;nt<w;nt++){let bt=nt*I-P;rt[_]=bt*g,rt[M]=K*T,rt[m]=Q,l.push(rt.x,rt.y,rt.z),rt[_]=0,rt[M]=0,rt[m]=A>0?1:-1,c.push(rt.x,rt.y,rt.z),h.push(nt/R),h.push(1-W/p),q+=1}}for(let W=0;W<p;W++)for(let K=0;K<R;K++){let nt=d+K+w*W,bt=d+K+w*(W+1),Z=d+(K+1)+w*(W+1),it=d+(K+1)+w*W;o.push(nt,bt,it),o.push(bt,Z,it),B+=6}a.addGroup(u,B,y),u+=B,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ai extends Xe{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],h=[],d=[],u=[],f=0,_=[],M=n/2,m=0;if(g(),r===!1){if(t>0)T(!0);if(e>0)T(!1)}this.setIndex(c),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(u,2));function g(){let E=new D,S=new D,A=0,R=(e-t)/n;for(let p=0;p<=s;p++){let y=[],I=p/s,O=I*(e-t)+t;for(let P=0;P<=i;P++){let G=P/i,Q=G*o+a,w=Math.sin(Q),X=Math.cos(Q);S.x=O*w,S.y=-I*n+M,S.z=O*X,h.push(S.x,S.y,S.z),E.set(w,R,X).normalize(),d.push(E.x,E.y,E.z),u.push(G,1-I),y.push(f++)}_.push(y)}for(let p=0;p<i;p++)for(let y=0;y<s;y++){let I=_[y][p],O=_[y+1][p],P=_[y+1][p+1],G=_[y][p+1];if(t>0||y!==0)c.push(I,O,G),A+=3;if(e>0||y!==s-1)c.push(O,P,G),A+=3}l.addGroup(m,A,0),m+=A}function T(E){let S=f,A=new lt,R=new D,p=0,y=E===!0?t:e,I=E===!0?1:-1;for(let P=1;P<=i;P++)h.push(0,M*I,0),d.push(0,I,0),u.push(0.5,0.5),f++;let O=f;for(let P=0;P<=i;P++){let Q=P/i*o+a,w=Math.cos(Q),X=Math.sin(Q);R.x=y*X,R.y=M*I,R.z=y*w,h.push(R.x,R.y,R.z),d.push(0,I,0),A.x=w*0.5+0.5,A.y=X*0.5*I+0.5,u.push(A.x,A.y),f++}for(let P=0;P<i;P++){let G=S+P,Q=O+P;if(E===!0)c.push(Q,Q+1,G);else c.push(Q+1,Q,G);p+=3}l.addGroup(m,p,E===!0?1:2),m+=p}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qe{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,r;if(e)r=e;else r=t*n[s-1];let a=0,o=s-1,l;while(a<=o)if(i=Math.floor(a+(o-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===r)return i/(s-1);let c=n[i],d=n[i+1]-c,u=(r-c)/d;return(i+u)/(s-1)}getTangent(t,e){let i=t-0.0001,s=t+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),a=this.getPoint(s),o=e||(r.isVector2?new lt:new D);return o.copy(a).sub(r).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,i=[],s=[],r=[],a=new D,o=new de;for(let u=0;u<=t;u++){let f=u/t;i[u]=this.getTangentAt(f,new D)}s[0]=new D,r[0]=new D;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(h<=l)l=h,n.set(0,1,0);if(d<=l)n.set(0,0,1);a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let u=1;u<=t;u++){if(s[u]=s[u-1].clone(),r[u]=r[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos($t(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(o.makeRotationAxis(a,f))}r[u].crossVectors(i[u],s[u])}if(e===!0){let u=Math.acos($t(s[0].dot(s[t]),-1,1));if(u/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0)u=-u;for(let f=1;f<=t;f++)s[f].applyMatrix4(o.makeRotationAxis(i[f],u*f)),r[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class ts extends qe{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,o=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new lt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let a=this.aStartAngle+t*s,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*c-u*h+this.aX,l=d*h+u*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qa extends ts{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function ja(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return t+e*r+n*a+i*o}}}var il=new D,sl=new D,Nr=new ja,Dr=new ja,Ur=new ja;class to extends qe{constructor(t=[],e=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),o=r-a;if(this.closed)a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s;else if(o===0&&a===s-1)a=s-2,o=1;let l,c;if(this.closed||a>0)l=i[(a-1)%s];else sl.subVectors(i[0],i[1]).add(i[0]),l=sl;let h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s)c=i[(a+2)%s];else il.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=il;if(this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?0.5:0.25,f=Math.pow(l.distanceToSquared(h),u),_=Math.pow(h.distanceToSquared(d),u),M=Math.pow(d.distanceToSquared(c),u);if(_<0.0001)_=1;if(f<0.0001)f=_;if(M<0.0001)M=_;Nr.initNonuniformCatmullRom(l.x,h.x,d.x,c.x,f,_,M),Dr.initNonuniformCatmullRom(l.y,h.y,d.y,c.y,f,_,M),Ur.initNonuniformCatmullRom(l.z,h.z,d.z,c.z,f,_,M)}else if(this.curveType==="catmullrom")Nr.initCatmullRom(l.x,h.x,d.x,c.x,this.tension),Dr.initCatmullRom(l.y,h.y,d.y,c.y,this.tension),Ur.initCatmullRom(l.z,h.z,d.z,c.z,this.tension);return n.set(Nr.calc(o),Dr.calc(o),Ur.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rl(t,e,n,i,s){let r=(i-e)*0.5,a=(s-n)*0.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function au(t,e){let n=1-t;return n*n*e}function ou(t,e){return 2*(1-t)*t*e}function lu(t,e){return t*t*e}function Gi(t,e,n,i){return au(t,e)+ou(t,n)+lu(t,i)}function cu(t,e){let n=1-t;return n*n*n*e}function hu(t,e){let n=1-t;return 3*n*n*t*e}function uu(t,e){return 3*(1-t)*t*t*e}function du(t,e){return t*t*t*e}function ki(t,e,n,i,s){return cu(t,e)+hu(t,n)+uu(t,i)+du(t,s)}class Ks extends qe{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(ki(t,i.x,s.x,r.x,a.x),ki(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eo extends qe{constructor(t=new D,e=new D,n=new D,i=new D){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(ki(t,i.x,s.x,r.x,a.x),ki(t,i.y,s.y,r.y,a.y),ki(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qs extends qe{constructor(t=new lt,e=new lt){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class no extends qe{constructor(t=new D,e=new D){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class js extends qe{constructor(t=new lt,e=new lt,n=new lt){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Gi(t,i.x,s.x,r.x),Gi(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class io extends qe{constructor(t=new D,e=new D,n=new D){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Gi(t,i.x,s.x,r.x),Gi(t,i.y,s.y,r.y),Gi(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tr extends qe{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,o=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return n.set(rl(a,o.x,l.x,c.x,h.x),rl(a,o.y,l.y,c.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new lt().fromArray(i))}return this}}var Or=Object.freeze({__proto__:null,ArcCurve:Qa,CatmullRomCurve3:to,CubicBezierCurve:Ks,CubicBezierCurve3:eo,EllipseCurve:ts,LineCurve:Qs,LineCurve3:no,QuadraticBezierCurve:js,QuadraticBezierCurve3:io,SplineCurve:tr});class so extends qe{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Or[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,a=this.curves[s],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));if(this.autoClose)e.push(e[0]);return e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,o=r.getPoints(a);for(let l=0;l<o.length;l++){let c=o[l];if(n&&n.equals(c))continue;e.push(c),n=c}}if(this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0]))e.push(e[0]);return e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Or[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class Ps extends so{constructor(t){super();if(this.type="Path",this.currentPoint=new lt,t)this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Qs(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new js(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){let a=new Ks(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new tr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,s,r,a,o),this}absellipse(t,e,n,i,s,r,a,o){let l=new ts(t,e,n,i,s,r,a,o);if(this.curves.length>0){let h=l.getPoint(0);if(!h.equals(this.currentPoint))this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wi extends Ps{constructor(t){super(t);this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ps().fromJSON(i))}return this}}function fu(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=yc(t,0,s,n,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i)r=xu(t,e,r,n);if(t.length>80*n){o=t[0],l=t[1];let h=o,d=l;for(let u=n;u<s;u+=n){let f=t[u],_=t[u+1];if(f<o)o=f;if(_<l)l=_;if(f>h)h=f;if(_>d)d=_}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Wi(r,a,n,o,l,c,0),a}function yc(t,e,n,i,s){let r;if(s===Cu(t,e,n,i)>0)for(let a=e;a<n;a+=i)r=al(a/i|0,t[a],t[a+1],r);else for(let a=n-i;a>=e;a-=i)r=al(a/i|0,t[a],t[a+1],r);if(r&&vi(r,r.next))Xi(r),r=r.next;return r}function Wn(t,e){if(!t)return t;if(!e)e=t;let n=t,i;do if(i=!1,!n.steiner&&(vi(n,n.next)||pe(n.prev,n,n.next)===0)){if(Xi(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Wi(t,e,n,i,s,r,a){if(!t)return;if(!a&&r)bu(t,i,s,r);let o=t;while(t.prev!==t.next){let l=t.prev,c=t.next;if(r?mu(t,i,s,r):pu(t)){e.push(l.i,t.i,c.i),Xi(t),t=c.next,o=c.next;continue}if(t=c,t===o){if(!a)Wi(Wn(t),e,n,i,s,r,1);else if(a===1)t=gu(Wn(t),e),Wi(t,e,n,i,s,r,2);else if(a===2)_u(t,e,n,i,s,r);break}}}function pu(t){let e=t.prev,n=t,i=t.next;if(pe(e,n,i)>=0)return!1;let s=e.x,r=n.x,a=i.x,o=e.y,l=n.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),_=i.next;while(_!==e){if(_.x>=h&&_.x<=u&&_.y>=d&&_.y<=f&&Fi(s,o,r,l,a,c,_.x,_.y)&&pe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function mu(t,e,n,i){let s=t.prev,r=t,a=t.next;if(pe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),_=Math.min(h,d,u),M=Math.max(o,l,c),m=Math.max(h,d,u),g=Br(f,_,e,n,i),T=Br(M,m,e,n,i),{prevZ:E,nextZ:S}=t;while(E&&E.z>=g&&S&&S.z<=T){if(E.x>=f&&E.x<=M&&E.y>=_&&E.y<=m&&E!==s&&E!==a&&Fi(o,h,l,d,c,u,E.x,E.y)&&pe(E.prev,E,E.next)>=0)return!1;if(E=E.prevZ,S.x>=f&&S.x<=M&&S.y>=_&&S.y<=m&&S!==s&&S!==a&&Fi(o,h,l,d,c,u,S.x,S.y)&&pe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}while(E&&E.z>=g){if(E.x>=f&&E.x<=M&&E.y>=_&&E.y<=m&&E!==s&&E!==a&&Fi(o,h,l,d,c,u,E.x,E.y)&&pe(E.prev,E,E.next)>=0)return!1;E=E.prevZ}while(S&&S.z<=T){if(S.x>=f&&S.x<=M&&S.y>=_&&S.y<=m&&S!==s&&S!==a&&Fi(o,h,l,d,c,u,S.x,S.y)&&pe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function gu(t,e){let n=t;do{let i=n.prev,s=n.next.next;if(!vi(i,s)&&Mc(i,n,n.next,s)&&Vi(i,s)&&Vi(s,i))e.push(i.i,n.i,s.i),Xi(n),Xi(n.next),n=t=s;n=n.next}while(n!==t);return Wn(n)}function _u(t,e,n,i,s,r){let a=t;do{let o=a.next.next;while(o!==a.prev){if(a.i!==o.i&&Au(a,o)){let l=bc(a,o);a=Wn(a,a.next),l=Wn(l,l.next),Wi(a,e,n,i,s,r,0),Wi(l,e,n,i,s,r,0);return}o=o.next}a=a.next}while(a!==t)}function xu(t,e,n,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:t.length,c=yc(t,o,l,i,!1);if(c===c.next)c.steiner=!0;s.push(Tu(c))}s.sort(vu);for(let r=0;r<s.length;r++)n=yu(s[r],n);return n}function vu(t,e){let n=t.x-e.x;if(n===0){if(n=t.y-e.y,n===0){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}}return n}function yu(t,e){let n=Su(t,e);if(!n)return e;let i=bc(n,t);return Wn(i,i.next),Wn(n,n.next)}function Su(t,e){let n=e,{x:i,y:s}=t,r=-1/0,a;if(vi(t,n))return n;do{if(vi(t,n.next))return n.next;else if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>r){if(r=d,a=n.x<n.next.x?n:n.next,d===i)return a}}n=n.next}while(n!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;n=a;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Sc(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);if(Vi(n,t)&&(d<h||d===h&&(n.x>a.x||n.x===a.x&&Mu(a,n))))a=n,h=d}n=n.next}while(n!==o);return a}function Mu(t,e){return pe(t.prev,t,e.prev)<0&&pe(e.next,t,t.next)<0}function bu(t,e,n,i){let s=t;do{if(s.z===0)s.z=Br(s.x,s.y,e,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,Eu(s)}function Eu(t){let e,n=1;do{let i=t,s;t=null;let r=null;e=0;while(i){e++;let a=i,o=0;for(let c=0;c<n;c++)if(o++,a=a.nextZ,!a)break;let l=n;while(o>0||l>0&&a){if(o!==0&&(l===0||!a||i.z<=a.z))s=i,i=i.nextZ,o--;else s=a,a=a.nextZ,l--;if(r)r.nextZ=s;else t=s;s.prevZ=r,r=s}i=a}r.nextZ=null,n*=2}while(e>1);return t}function Br(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Tu(t){let e=t,n=t;do{if(e.x<n.x||e.x===n.x&&e.y<n.y)n=e;e=e.next}while(e!==t);return n}function Sc(t,e,n,i,s,r,a,o){return(s-a)*(e-o)>=(t-a)*(r-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(r-o)>=(s-a)*(i-o)}function Fi(t,e,n,i,s,r,a,o){return!(t===a&&e===o)&&Sc(t,e,n,i,s,r,a,o)}function Au(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!wu(t,e)&&(Vi(t,e)&&Vi(e,t)&&Ru(t,e)&&(pe(t.prev,t,e.prev)||pe(t,e.prev,e))||vi(t,e)&&pe(t.prev,t,t.next)>0&&pe(e.prev,e,e.next)>0)}function pe(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function vi(t,e){return t.x===e.x&&t.y===e.y}function Mc(t,e,n,i){let s=ws(pe(t,e,n)),r=ws(pe(t,e,i)),a=ws(pe(n,i,t)),o=ws(pe(n,i,e));if(s!==r&&a!==o)return!0;if(s===0&&As(t,n,e))return!0;if(r===0&&As(t,i,e))return!0;if(a===0&&As(n,t,i))return!0;if(o===0&&As(n,e,i))return!0;return!1}function As(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ws(t){return t>0?1:t<0?-1:0}function wu(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Mc(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Vi(t,e){return pe(t.prev,t,t.next)<0?pe(t,e,t.next)>=0&&pe(t,t.prev,e)>=0:pe(t,e,t.prev)<0||pe(t,t.next,e)<0}function Ru(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==t);return i}function bc(t,e){let n=zr(t.i,t.x,t.y),i=zr(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function al(t,e,n,i){let s=zr(t,e,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function Xi(t){if(t.next.prev=t.prev,t.prev.next=t.next,t.prevZ)t.prevZ.nextZ=t.nextZ;if(t.nextZ)t.nextZ.prevZ=t.prevZ}function zr(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cu(t,e,n,i){let s=0;for(let r=e,a=n-i;r<n;r+=i)s+=(t[a]-t[r])*(t[r+1]+t[a+1]),a=r;return s}class Ec{static triangulate(t,e,n=2){return fu(t,e,n)}}class kn{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*0.5}static isClockWise(t){return kn.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];ol(t),ll(n,t);let r=t.length;e.forEach(ol);for(let o=0;o<e.length;o++)i.push(r),r+=e[o].length,ll(n,e[o]);let a=Ec.triangulate(n,i);for(let o=0;o<a.length;o+=3)s.push(a.slice(o,o+3));return s}}function ol(t){let e=t.length;if(e>2&&t[e-1].equals(t[0]))t.pop()}function ll(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Ri extends Xe{constructor(t=new wi([new lt(0.5,0.5),new lt(-0.5,0.5),new lt(-0.5,-0.5),new lt(0.5,-0.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,o=t.length;a<o;a++){let l=t[a];r(l)}this.setAttribute("position",new we(i,3)),this.setAttribute("uv",new we(s,2)),this.computeVertexNormals();function r(a){let o=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:0.2,f=e.bevelSize!==void 0?e.bevelSize:u-0.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,M=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,g=e.UVGenerator!==void 0?e.UVGenerator:Iu,T,E=!1,S,A,R,p;if(m){T=m.getSpacedPoints(c),E=!0,d=!1;let j=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(c,j),A=new D,R=new D,p=new D}if(!d)M=0,u=0,f=0,_=0;let y=a.extractPoints(l),{shape:I,holes:O}=y;if(!kn.isClockWise(I)){I=I.reverse();for(let j=0,at=O.length;j<at;j++){let ht=O[j];if(kn.isClockWise(ht))O[j]=ht.reverse()}}function G(j){let Et=j[0];for(let Mt=1;Mt<=j.length;Mt++){let Ft=Mt%j.length,Pt=j[Ft],Zt=Pt.x-Et.x,Jt=Pt.y-Et.y,se=Zt*Zt+Jt*Jt,N=Math.max(Math.abs(Pt.x),Math.abs(Pt.y),Math.abs(Et.x),Math.abs(Et.y)),ve=0.000000000000000000010000000000000001*N*N;if(se<=ve){j.splice(Ft,1),Mt--;continue}Et=Pt}}G(I),O.forEach(G);let Q=O.length,w=I;for(let j=0;j<Q;j++){let at=O[j];I=I.concat(at)}function X(j,at,ht){if(!at)Gt("ExtrudeGeometry: vec does not exist");return j.clone().addScaledVector(at,ht)}let q=I.length;function B(j,at,ht){let Et,Mt,Ft,Pt=j.x-at.x,Zt=j.y-at.y,Jt=ht.x-j.x,se=ht.y-j.y,N=Pt*Pt+Zt*Zt,ve=Pt*se-Zt*Jt;if(Math.abs(ve)>Number.EPSILON){let Vt=Math.sqrt(N),ge=Math.sqrt(Jt*Jt+se*se),gt=at.x-Zt/Vt,ae=at.y+Pt/Vt,Ot=ht.x-se/ge,kt=ht.y+Jt/ge,ye=((Ot-gt)*se-(kt-ae)*Jt)/(Pt*se-Zt*Jt);Et=gt+Pt*ye-j.x,Mt=ae+Zt*ye-j.y;let b=Et*Et+Mt*Mt;if(b<=2)return new lt(Et,Mt);else Ft=Math.sqrt(b/2)}else{let Vt=!1;if(Pt>Number.EPSILON){if(Jt>Number.EPSILON)Vt=!0}else if(Pt<-Number.EPSILON){if(Jt<-Number.EPSILON)Vt=!0}else if(Math.sign(Zt)===Math.sign(se))Vt=!0;if(Vt)Et=-Zt,Mt=Pt,Ft=Math.sqrt(N);else Et=Pt,Mt=Zt,Ft=Math.sqrt(N/2)}return new lt(Et/Ft,Mt/Ft)}let rt=[];for(let j=0,at=w.length,ht=at-1,Et=j+1;j<at;j++,ht++,Et++){if(ht===at)ht=0;if(Et===at)Et=0;rt[j]=B(w[j],w[ht],w[Et])}let W=[],K,nt=rt.concat();for(let j=0,at=Q;j<at;j++){let ht=O[j];K=[];for(let Et=0,Mt=ht.length,Ft=Mt-1,Pt=Et+1;Et<Mt;Et++,Ft++,Pt++){if(Ft===Mt)Ft=0;if(Pt===Mt)Pt=0;K[Et]=B(ht[Et],ht[Ft],ht[Pt])}W.push(K),nt=nt.concat(K)}let bt;if(M===0)bt=kn.triangulateShape(w,O);else{let j=[],at=[];for(let ht=0;ht<M;ht++){let Et=ht/M,Mt=u*Math.cos(Et*Math.PI/2),Ft=f*Math.sin(Et*Math.PI/2)+_;for(let Pt=0,Zt=w.length;Pt<Zt;Pt++){let Jt=X(w[Pt],rt[Pt],Ft);if(St(Jt.x,Jt.y,-Mt),Et===0)j.push(Jt)}for(let Pt=0,Zt=Q;Pt<Zt;Pt++){let Jt=O[Pt];K=W[Pt];let se=[];for(let N=0,ve=Jt.length;N<ve;N++){let Vt=X(Jt[N],K[N],Ft);if(St(Vt.x,Vt.y,-Mt),Et===0)se.push(Vt)}if(Et===0)at.push(se)}}bt=kn.triangulateShape(j,at)}let Z=bt.length,it=f+_;for(let j=0;j<q;j++){let at=d?X(I[j],nt[j],it):I[j];if(!E)St(at.x,at.y,0);else R.copy(S.normals[0]).multiplyScalar(at.x),A.copy(S.binormals[0]).multiplyScalar(at.y),p.copy(T[0]).add(R).add(A),St(p.x,p.y,p.z)}for(let j=1;j<=c;j++)for(let at=0;at<q;at++){let ht=d?X(I[at],nt[at],it):I[at];if(!E)St(ht.x,ht.y,h/c*j);else R.copy(S.normals[j]).multiplyScalar(ht.x),A.copy(S.binormals[j]).multiplyScalar(ht.y),p.copy(T[j]).add(R).add(A),St(p.x,p.y,p.z)}for(let j=M-1;j>=0;j--){let at=j/M,ht=u*Math.cos(at*Math.PI/2),Et=f*Math.sin(at*Math.PI/2)+_;for(let Mt=0,Ft=w.length;Mt<Ft;Mt++){let Pt=X(w[Mt],rt[Mt],Et);St(Pt.x,Pt.y,h+ht)}for(let Mt=0,Ft=O.length;Mt<Ft;Mt++){let Pt=O[Mt];K=W[Mt];for(let Zt=0,Jt=Pt.length;Zt<Jt;Zt++){let se=X(Pt[Zt],K[Zt],Et);if(!E)St(se.x,se.y,h+ht);else St(se.x,se.y+T[c-1].y,T[c-1].x+ht)}}}Tt(),Nt();function Tt(){let j=i.length/3;if(d){let at=0,ht=q*at;for(let Et=0;Et<Z;Et++){let Mt=bt[Et];ne(Mt[2]+ht,Mt[1]+ht,Mt[0]+ht)}at=c+M*2,ht=q*at;for(let Et=0;Et<Z;Et++){let Mt=bt[Et];ne(Mt[0]+ht,Mt[1]+ht,Mt[2]+ht)}}else{for(let at=0;at<Z;at++){let ht=bt[at];ne(ht[2],ht[1],ht[0])}for(let at=0;at<Z;at++){let ht=bt[at];ne(ht[0]+q*c,ht[1]+q*c,ht[2]+q*c)}}n.addGroup(j,i.length/3-j,0)}function Nt(){let j=i.length/3,at=0;Dt(w,at),at+=w.length;for(let ht=0,Et=O.length;ht<Et;ht++){let Mt=O[ht];Dt(Mt,at),at+=Mt.length}n.addGroup(j,i.length/3-j,1)}function Dt(j,at){let ht=j.length;while(--ht>=0){let Et=ht,Mt=ht-1;if(Mt<0)Mt=j.length-1;for(let Ft=0,Pt=c+M*2;Ft<Pt;Ft++){let Zt=q*Ft,Jt=q*(Ft+1),se=at+Et+Zt,N=at+Mt+Zt,ve=at+Mt+Jt,Vt=at+Et+Jt;qt(se,N,ve,Vt)}}}function St(j,at,ht){o.push(j),o.push(at),o.push(ht)}function ne(j,at,ht){Bt(j),Bt(at),Bt(ht);let Et=i.length/3,Mt=g.generateTopUV(n,i,Et-3,Et-2,Et-1);te(Mt[0]),te(Mt[1]),te(Mt[2])}function qt(j,at,ht,Et){Bt(j),Bt(at),Bt(Et),Bt(at),Bt(ht),Bt(Et);let Mt=i.length/3,Ft=g.generateSideWallUV(n,i,Mt-6,Mt-3,Mt-2,Mt-1);te(Ft[0]),te(Ft[1]),te(Ft[3]),te(Ft[1]),te(Ft[2]),te(Ft[3])}function Bt(j){i.push(o[j*3+0]),i.push(o[j*3+1]),i.push(o[j*3+2])}function te(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Pu(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;if(i!==void 0)t.options.extrudePath=new Or[i.type]().fromJSON(i);return new Ri(n,t.options)}}var Iu={generateTopUV:function(t,e,n,i,s){let r=e[n*3],a=e[n*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new lt(r,a),new lt(o,l),new lt(c,h)]},generateSideWallUV:function(t,e,n,i,s,r){let a=e[n*3],o=e[n*3+1],l=e[n*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],_=e[s*3+2],M=e[r*3],m=e[r*3+1],g=e[r*3+2];if(Math.abs(o-h)<Math.abs(a-c))return[new lt(a,1-l),new lt(c,1-d),new lt(u,1-_),new lt(M,1-g)];else return[new lt(o,1-l),new lt(h,1-d),new lt(f,1-_),new lt(m,1-g)]}};function Pu(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);if(n.options=Object.assign({},e),e.extrudePath!==void 0)n.options.extrudePath=e.extrudePath.toJSON();return n}class Kn extends Xe{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=t/a,d=e/o,u=[],f=[],_=[],M=[];for(let m=0;m<c;m++){let g=m*d-r;for(let T=0;T<l;T++){let E=T*h-s;f.push(E,-g,0),_.push(0,0,1),M.push(T/a),M.push(1-m/o)}}for(let m=0;m<o;m++)for(let g=0;g<a;g++){let T=g+l*m,E=g+l*(m+1),S=g+1+l*(m+1),A=g+1+l*m;u.push(T,E,A),u.push(E,S,A)}this.setIndex(u),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.widthSegments,t.heightSegments)}}function Qn(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(cl(s))if(s.isRenderTargetTexture)zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(cl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function De(t){let e={};for(let n=0;n<t.length;n++){let i=Qn(t[n]);for(let s in i)e[s]=i[s]}return e}function cl(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Lu(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ro(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return jt.workingColorSpace}var Tc={clone:Qn,merge:De},Nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends $n{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nu,this.fragmentShader=Du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qn(t.uniforms),this.uniformsGroups=Lu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ee().setHex(i.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new me().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"m4":this.uniforms[n].value=new de().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class ao extends Sn{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class es extends $n{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class oo extends $n{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lo extends $n{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function di(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function Rs(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class jn{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class co extends jn{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(n-e)/(i-e),_=f*f,M=_*f,m=-d*M+2*d*_-d*f,g=(1+d)*M+(-1.5-2*d)*_+(-0.5+d)*f+1,T=(-1-u)*M+(1.5+u)*_+0.5*f,E=u*M-u*_;for(let S=0;S!==a;++S)s[S]=m*r[c+S]+g*r[l+S]+T*r[o+S]+E*r[h+S];return s}}class ho extends jn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),h=1-c;for(let d=0;d!==a;++d)s[d]=r[l+d]*h+r[o+d]*c;return s}}class uo extends jn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class fo extends jn{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,h=this.outTangents;if(!c||!h){let f=(n-e)/(i-e),_=1-f;for(let M=0;M!==a;++M)s[M]=r[l+M]*_+r[o+M]*f;return s}let d=a*2,u=t-1;for(let f=0;f!==a;++f){let _=r[l+f],M=r[o+f],m=u*d+f*2,g=h[m],T=h[m+1],E=t*d+f*2,S=c[E],A=c[E+1],R=Fu(n,e,g,S,i);s[f]=Ac(R,_,T,A,M)}return s}}function Ac(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function Uu(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function Fu(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=Ac(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=Uu(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class Ye{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=di(e,this.TimeBufferType),this.values=di(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:di(t.times,Array),values:di(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(Rs(t.settings))n.settings={inTangents:di(t.settings.inTangents,Array),outTangents:di(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fo(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;if(Rs(this.settings))hl(this.settings.inTangents,t),hl(this.settings.outTangents,t)}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(Rs(this.settings))ul(this.settings.inTangents,t),ul(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Gt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Gt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Gt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Gt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(Ah(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Gt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let h=a*n,d=h-n,u=h+n;for(let f=0;f!==n;++f){let _=e[h+f];if(_!==e[d+f]||_!==e[u+f]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let h=a*n,d=r*n;for(let u=0;u!==n;++u)e[d+u]=e[h+u]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,Rs(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function hl(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function ul(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}Ye.prototype.ValueTypeName="";Ye.prototype.TimeBufferType=Float32Array;Ye.prototype.ValueBufferType=Float32Array;Ye.prototype.DefaultInterpolation=2301;class ti extends Ye{constructor(t,e,n){super(t,e,n)}}ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=2300;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;class po extends Ye{constructor(t,e,n,i){super(t,e,n,i)}}po.prototype.ValueTypeName="color";class mo extends Ye{constructor(t,e,n,i){super(t,e,n,i)}}mo.prototype.ValueTypeName="number";class go extends jn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)yn.slerpFlat(s,0,r,l-a,r,l,o);return s}}class er extends Ye{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new go(this.times,this.values,this.getValueSize(),t)}}er.prototype.ValueTypeName="quaternion";er.prototype.InterpolantFactoryMethodSmooth=void 0;class ei extends Ye{constructor(t,e,n){super(t,e,n)}}ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=2300;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;class _o extends Ye{constructor(t,e,n,i){super(t,e,n,i)}}_o.prototype.ValueTypeName="vector";class xo{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],f=l[h+1];if(u.global)u.lastIndex=0;if(u.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var wc=new xo;class vo{constructor(t){if(this.manager=t!==void 0?t:wc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}vo.DEFAULT_MATERIAL_NAME="__DEFAULT";class nr extends Oe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}var Fr=new de,dl=new D,fl=new D;class yo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hn,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;dl.setFromMatrixPosition(t.matrixWorld),e.position.copy(dl),fl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Fr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Fr,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,l=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,0.5,0.5,0,0,0,1);e.multiply(Fr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var Cs=new D,Is=new yn,tn=new D;class ir extends Oe{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(Cs,Is,tn),tn.x===1&&tn.y===1&&tn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Cs,Is,tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Cs,Is,tn),tn.x===1&&tn.y===1&&tn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Cs,Is,tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var wn=new D,pl=new lt,ml=new lt;class Fe extends ir{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=xi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Bi*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return xi*2*Math.atan(Math.tan(Bi*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,pl,ml),e.subVectors(ml,pl)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Bi*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Rc extends yo{constructor(){super(new Fe(90,1,0.5,500));this.isPointLightShadow=!0}}class Ci extends nr{constructor(t,e,n=0,i=2){super(t,e);this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class So extends ir{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class sr extends nr{constructor(t,e){super(t,e);this.isAmbientLight=!0,this.type="AmbientLight"}}var fi=-90,pi=1;class ns extends Oe{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Fe(fi,pi,t,e);i.layers=this.layers,this.add(i);let s=new Fe(fi,pi,t,e);s.layers=this.layers,this.add(s);let r=new Fe(fi,pi,t,e);r.layers=this.layers,this.add(r);let a=new Fe(fi,pi,t,e);a.layers=this.layers,this.add(a);let o=new Fe(fi,pi,t,e);o.layers=this.layers,this.add(o);let l=new Fe(fi,pi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let M=!1;if(t.isWebGLRenderer===!0)M=t.state.buffers.depth.getReversed();else M=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),M&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(h,d,u),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Mo extends Fe{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}var bo="\\[\\]\\.:\\/",Ou=new RegExp("["+bo+"]","g"),Eo="[^"+bo+"]",Bu="[^"+bo.replace("\\.","")+"]",zu=/((?:WC+[\/:])*)/.source.replace("WC",Eo),Gu=/(WCOD+)?/.source.replace("WCOD",Bu),ku=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eo),Hu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eo),Wu=new RegExp("^"+zu+Gu+ku+Hu+"$"),Vu=["material","materials","bones","map"];class Cc{constructor(t,e,n){let i=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class oe{constructor(t,e,n){this.path=e,this.parsedPath=n||oe.parseTrackName(e),this.node=oe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new oe(t,e,n);else return new oe.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ou,"")}static parseTrackName(t){let e=Wu.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(Vu.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=oe.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}oe.Composite=Cc;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kg=new Float32Array(1);class Ic{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}function To(t,e,n,i){let s=Xu(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Xu(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)zt("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function Qc(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Qu(t){let e=new WeakMap;function n(o,l){let{array:c,usage:h}=o,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)f=t.HALF_FLOAT;else f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let{array:h,updateRanges:d}=l;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){let _=d[u],M=d[f];if(M.start<=_.start+_.count+1)_.count=Math.max(_.count,M.start+M.count-_.start);else++u,d[u]=M}d.length=u+1;for(let f=0,_=d.length;f<_;f++){let M=d[f];t.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let h=e.get(o);if(!h||h.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,td=`#ifdef USE_ALPHAHASH
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
#endif`,ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
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
#endif`,ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dd=`#ifdef USE_IRIDESCENCE
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
#endif`,fd=`#ifdef USE_BUMPMAP
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Md=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,bd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Id=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zd=`#ifdef USE_GRADIENTMAP
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
}`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wd=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Vd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,$d=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kd=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cf=`#if defined( USE_POINTS_UV )
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
#endif`,hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ff=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`#ifdef USE_MORPHTARGETS
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
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mf=`#ifdef USE_NORMALMAP
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
#endif`,bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,If=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Bf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gf=`#ifdef USE_SKINNING
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
#endif`,kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zf=`#ifdef USE_TRANSMISSION
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`;var Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`#include <common>
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
}`,ap=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,op=`#define DISTANCE
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
}`,lp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`uniform float scale;
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#define LAMBERT
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
}`,gp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,_p=`#define MATCAP
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
}`,xp=`#define MATCAP
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
}`,vp=`#define NORMAL
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
}`,yp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sp=`#define PHONG
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
}`,Mp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,bp=`#define STANDARD
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
}`,Ep=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Tp=`#define TOON
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
}`,Ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,wp=`uniform float size;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Ip=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Pp=`uniform float rotation;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:ju,alphahash_pars_fragment:td,alphamap_fragment:ed,alphamap_pars_fragment:nd,alphatest_fragment:id,alphatest_pars_fragment:sd,aomap_fragment:rd,aomap_pars_fragment:ad,batching_pars_vertex:od,batching_vertex:ld,begin_vertex:cd,beginnormal_vertex:hd,bsdfs:ud,iridescence_fragment:dd,bumpmap_pars_fragment:fd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:gd,clipping_planes_vertex:_d,color_fragment:xd,color_pars_fragment:vd,color_pars_vertex:yd,color_vertex:Sd,common:Md,defaultnormal_vertex:bd,displacementmap_pars_vertex:Ed,displacementmap_vertex:Td,emissivemap_fragment:Ad,emissivemap_pars_fragment:wd,colorspace_fragment:Rd,colorspace_pars_fragment:Cd,envmap_fragment:Id,envmap_common_pars_fragment:Pd,envmap_pars_fragment:Ld,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:Vd,envmap_vertex:Dd,fog_vertex:Ud,fog_pars_vertex:Fd,fog_fragment:Od,fog_pars_fragment:Bd,gradientmap_pars_fragment:zd,lightmap_pars_fragment:Gd,lights_lambert_fragment:kd,lights_lambert_pars_fragment:Hd,lights_pars_begin:Wd,lights_toon_fragment:Xd,lights_toon_pars_fragment:qd,lights_phong_fragment:Yd,lights_phong_pars_fragment:Zd,lights_physical_fragment:Jd,lights_physical_pars_fragment:$d,lights_fragment_begin:Kd,lights_fragment_maps:Qd,lights_fragment_end:jd,lightprobes_pars_fragment:tf,logdepthbuf_fragment:ef,logdepthbuf_pars_fragment:nf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:rf,map_fragment:af,map_pars_fragment:of,map_particle_fragment:lf,map_particle_pars_fragment:cf,metalnessmap_fragment:hf,metalnessmap_pars_fragment:uf,morphinstance_vertex:df,morphcolor_vertex:ff,morphnormal_vertex:pf,morphtarget_pars_vertex:mf,morphtarget_vertex:gf,normal_fragment_begin:_f,normal_fragment_maps:xf,normal_pars_fragment:vf,normal_pars_vertex:yf,normal_vertex:Sf,normalmap_pars_fragment:Mf,clearcoat_normal_fragment_begin:bf,clearcoat_normal_fragment_maps:Ef,clearcoat_pars_fragment:Tf,iridescence_pars_fragment:Af,opaque_fragment:wf,packing:Rf,premultiplied_alpha_fragment:Cf,project_vertex:If,dithering_fragment:Pf,dithering_pars_fragment:Lf,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Df,shadowmap_pars_fragment:Uf,shadowmap_pars_vertex:Ff,shadowmap_vertex:Of,shadowmask_pars_fragment:Bf,skinbase_vertex:zf,skinning_pars_vertex:Gf,skinning_vertex:kf,skinnormal_vertex:Hf,specularmap_fragment:Wf,specularmap_pars_fragment:Vf,tonemapping_fragment:Xf,tonemapping_pars_fragment:qf,transmission_fragment:Yf,transmission_pars_fragment:Zf,uv_pars_fragment:Jf,uv_pars_vertex:$f,uv_vertex:Kf,worldpos_vertex:Qf,background_vert:jf,background_frag:tp,backgroundCube_vert:ep,backgroundCube_frag:np,cube_vert:ip,cube_frag:sp,depth_vert:rp,depth_frag:ap,distance_vert:op,distance_frag:lp,equirect_vert:cp,equirect_frag:hp,linedashed_vert:up,linedashed_frag:dp,meshbasic_vert:fp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:gp,meshmatcap_vert:_p,meshmatcap_frag:xp,meshnormal_vert:vp,meshnormal_frag:yp,meshphong_vert:Sp,meshphong_frag:Mp,meshphysical_vert:bp,meshphysical_frag:Ep,meshtoon_vert:Tp,meshtoon_frag:Ap,points_vert:wp,points_frag:Rp,shadow_vert:Cp,shadow_frag:Ip,sprite_vert:Pp,sprite_frag:Lp},_t={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new lt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},on={basic:{uniforms:De([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:De([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:De([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:De([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:De([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ee(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:De([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:De([_t.points,_t.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:De([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:De([_t.common,_t.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:De([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:De([_t.sprite,_t.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:De([_t.common,_t.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:De([_t.lights,_t.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};on.physical={uniforms:De([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var rr={r:0,b:0,g:0},Np=new de,jc=new Ht;jc.set(-1,0,0,0,1,0,0,0,1);function Dp(t,e,n,i,s,r){let a=new ee(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(T){let E=T.isScene===!0?T.background:null;if(E&&E.isTexture){let S=T.backgroundBlurriness>0;E=e.get(E,S)}return E}function _(T){let E=!1,S=f(T);if(S===null)m(a,o);else if(S&&S.isColor)m(S,1),E=!0;let A=t.xr.getEnvironmentBlendMode();if(A==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(A==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||E)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function M(T,E){let S=f(E);if(S&&S.isCubeTexture){if(c===void 0)c=new Re(new Nn(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Qn(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(jc);if(c.material.toneMapped=jt.getTransfer(S.colorSpace)!==he,h!==S||d!==S.version||u!==t.toneMapping)c.material.needsUpdate=!0,h=S,d=S.version,u=t.toneMapping;c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)}else if(S&&S.isTexture){if(l===void 0)l=new Re(new Kn(2,2),new Sn({name:"BackgroundMaterial",uniforms:Qn(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=jt.getTransfer(S.colorSpace)!==he,S.matrixAutoUpdate===!0)S.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(S.matrix),h!==S||d!==S.version||u!==t.toneMapping)l.material.needsUpdate=!0,h=S,d=S.version,u=t.toneMapping;l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)}}function m(T,E){T.getRGB(rr,ro(t)),n.buffers.color.setClear(rr.r,rr.g,rr.b,E,r)}function g(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:_,addToRenderList:M,dispose:g}}function Up(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(P,G,Q,w,X){let q=!1,B=d(P,w,Q,G);if(r!==B)r=B,c(r.object);if(q=f(P,w,Q,X),q)_(P,w,Q,X);if(X!==null)e.update(X,t.ELEMENT_ARRAY_BUFFER);if(q||a){if(a=!1,S(P,G,Q,w),X!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer)}}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function h(P){return t.deleteVertexArray(P)}function d(P,G,Q,w){let X=w.wireframe===!0,q=i[G.id];if(q===void 0)q={},i[G.id]=q;let B=P.isInstancedMesh===!0?P.id:0,rt=q[B];if(rt===void 0)rt={},q[B]=rt;let W=rt[Q.id];if(W===void 0)W={},rt[Q.id]=W;let K=W[X];if(K===void 0)K=u(l()),W[X]=K;return K}function u(P){let G=[],Q=[],w=[];for(let X=0;X<n;X++)G[X]=0,Q[X]=0,w[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Q,attributeDivisors:w,object:P,attributes:{},index:null}}function f(P,G,Q,w){let X=r.attributes,q=G.attributes,B=0,rt=Q.getAttributes();for(let W in rt)if(rt[W].location>=0){let nt=X[W],bt=q[W];if(bt===void 0){if(W==="instanceMatrix"&&P.instanceMatrix)bt=P.instanceMatrix;if(W==="instanceColor"&&P.instanceColor)bt=P.instanceColor}if(nt===void 0)return!0;if(nt.attribute!==bt)return!0;if(bt&&nt.data!==bt.data)return!0;B++}if(r.attributesNum!==B)return!0;if(r.index!==w)return!0;return!1}function _(P,G,Q,w){let X={},q=G.attributes,B=0,rt=Q.getAttributes();for(let W in rt)if(rt[W].location>=0){let nt=q[W];if(nt===void 0){if(W==="instanceMatrix"&&P.instanceMatrix)nt=P.instanceMatrix;if(W==="instanceColor"&&P.instanceColor)nt=P.instanceColor}let bt={};if(bt.attribute=nt,nt&&nt.data)bt.data=nt.data;X[W]=bt,B++}r.attributes=X,r.attributesNum=B,r.index=w}function M(){let P=r.newAttributes;for(let G=0,Q=P.length;G<Q;G++)P[G]=0}function m(P){g(P,0)}function g(P,G){let Q=r.newAttributes,w=r.enabledAttributes,X=r.attributeDivisors;if(Q[P]=1,w[P]===0)t.enableVertexAttribArray(P),w[P]=1;if(X[P]!==G)t.vertexAttribDivisor(P,G),X[P]=G}function T(){let P=r.newAttributes,G=r.enabledAttributes;for(let Q=0,w=G.length;Q<w;Q++)if(G[Q]!==P[Q])t.disableVertexAttribArray(Q),G[Q]=0}function E(P,G,Q,w,X,q,B){if(B===!0)t.vertexAttribIPointer(P,G,Q,X,q);else t.vertexAttribPointer(P,G,Q,w,X,q)}function S(P,G,Q,w){M();let X=w.attributes,q=Q.getAttributes(),B=G.defaultAttributeValues;for(let rt in q){let W=q[rt];if(W.location>=0){let K=X[rt];if(K===void 0){if(rt==="instanceMatrix"&&P.instanceMatrix)K=P.instanceMatrix;if(rt==="instanceColor"&&P.instanceColor)K=P.instanceColor}if(K!==void 0){let nt=K.normalized,bt=K.itemSize,Z=e.get(K);if(Z===void 0)continue;let{buffer:it,type:Tt,bytesPerElement:Nt}=Z,Dt=Tt===t.INT||Tt===t.UNSIGNED_INT||K.gpuType===Qr;if(K.isInterleavedBufferAttribute){let St=K.data,ne=St.isInterleavedBuffer===!0?St.stride:St.itemSize,qt=K.offset;if(St.isInstancedInterleavedBuffer||St.isInstancedBufferAttribute){for(let Bt=0;Bt<W.locationSize;Bt++)g(W.location+Bt,St.meshPerAttribute);if(P.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=St.meshPerAttribute*St.count}else for(let Bt=0;Bt<W.locationSize;Bt++)m(W.location+Bt);t.bindBuffer(t.ARRAY_BUFFER,it);for(let Bt=0;Bt<W.locationSize;Bt++)E(W.location+Bt,bt/W.locationSize,Tt,nt,ne*Nt,(qt+bt/W.locationSize*Bt)*Nt,Dt)}else{if(K.isInstancedBufferAttribute){for(let St=0;St<W.locationSize;St++)g(W.location+St,K.meshPerAttribute);if(P.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=K.meshPerAttribute*K.count}else for(let St=0;St<W.locationSize;St++)m(W.location+St);t.bindBuffer(t.ARRAY_BUFFER,it);for(let St=0;St<W.locationSize;St++)E(W.location+St,bt/W.locationSize,Tt,nt,bt*Nt,bt/W.locationSize*St*Nt,Dt)}}else if(B!==void 0){let nt=B[rt];if(nt!==void 0)switch(nt.length){case 2:t.vertexAttrib2fv(W.location,nt);break;case 3:t.vertexAttrib3fv(W.location,nt);break;case 4:t.vertexAttrib4fv(W.location,nt);break;default:t.vertexAttrib1fv(W.location,nt)}}}}T()}function A(){I();for(let P in i){let G=i[P];for(let Q in G){let w=G[Q];for(let X in w){let q=w[X];for(let B in q)h(q[B].object),delete q[B];delete w[X]}}delete i[P]}}function R(P){if(i[P.id]===void 0)return;let G=i[P.id];for(let Q in G){let w=G[Q];for(let X in w){let q=w[X];for(let B in q)h(q[B].object),delete q[B];delete w[X]}}delete i[P.id]}function p(P){for(let G in i){let Q=i[G];for(let w in Q){let X=Q[w];if(X[P.id]===void 0)continue;let q=X[P.id];for(let B in q)h(q[B].object),delete q[B];delete X[P.id]}}}function y(P){for(let G in i){let Q=i[G],w=P.isInstancedMesh===!0?P.id:0,X=Q[w];if(X===void 0)continue;for(let q in X){let B=X[q];for(let rt in B)h(B[rt].object),delete B[rt];delete X[q]}if(delete Q[w],Object.keys(Q).length===0)delete i[G]}}function I(){if(O(),a=!0,r===s)return;r=s,c(r.object)}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:O,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:y,releaseStatesOfProgram:p,initAttributes:M,enableAttribute:m,disableUnusedAttributes:T}}function Fp(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){if(h===0)return;t.drawArraysInstanced(i,l,c,h),n.update(c,i,h)}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Op(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let p=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(p){if(p!==xn&&i.convert(p)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(p){let y=p===rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(p!==je&&p!==_n&&!y&&i.convert(p)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(p){if(p==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";p="mediump"}if(p==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);if(h!==c)zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&d===!1;if(n.reversedDepthBuffer===!0&&d===!1)zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(n.logarithmicDepthBuffer===!0&&d===!0)zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),T=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,maxSamples:A,samples:R}}function Bp(t){let e=this,n=null,i=0,s=!1,r=!1,a=new en,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){let{clippingPlanes:_,clipIntersection:M,clipShadows:m}=d,g=t.get(d);if(!s||_===null||_.length===0||r&&!m)if(r)h(null);else c();else{let T=r?0:i,E=T*4,S=g.clippingState||null;l.value=S,S=h(_,u,E,f);for(let A=0;A!==E;++A)S[A]=n[A];g.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function h(d,u,f,_){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,_!==!0||m===null){let g=f+M*4,T=u.matrixWorldInverse;if(o.getNormalMatrix(T),m===null||m.length<g)m=new Float32Array(g);for(let E=0,S=f;E!==M;++E,S+=4)a.copy(d[E]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}class lr extends Ve{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Zs(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Nn(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:Qn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Vn});s.uniforms.tEquirect.value=e;let r=new Re(i,s),a=e.minFilter;if(e.minFilter===Cn)e.minFilter=We;return new ns(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}var Pc=256,zp=3,Gp=20,th=256,eh=16,kp=3,Hp=new D,Wp=new ee;class or{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ns(1,10,null),this._boxMesh=new Re(new Nn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=Hp}=s,o=this._renderer;this._setSize(r);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(e>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:h,autoClearColor:d,autoClearDepth:u,autoClearStencil:f}=o,_=t.background;if(o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,_===null)t.background=o.getClearColor(Wp);let M=new ns(n,i,c);if(M.position.copy(a),M.update(o,t),o.autoClear=h,o.autoClearColor=d,o.autoClearDepth=u,o.autoClearStencil=f,t.background=_,e>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,e);return this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Dc(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Pc,Va(t))}_fromTexture(t,e){if(t.mapping===Zi||t.mapping===bi)this._setSize(t.image.length===0?Pc:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Lc(t,!1,!1),n=Math.log2(t)-zp;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;if(n===null||n.width!==e||t&&n.depthBuffer===!1){if(n!==null)n.dispose();this._sourceTarget=Lc(e,!0,t)}return this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let r=t.width>>e;t.viewport.set(0,0,r,r),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;if(t.mapping===Zi||t.mapping===bi){if(this._cubemapMaterial===null)this._cubemapMaterial=Dc();e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Nc();e=this._equirectMaterial}e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){if(this._ggxMaterial===null)this._ggxMaterial=Vp(),this._integrationMaterial=Xp();let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/eh);for(let r=0;r<=n;r++){let a=or.lodToRoughness(r,n);if(r>n-kp)s.roughness.value=a,this._renderCube(t,r,this._integrationMaterial);else{let o=a>0?Math.log2(e)+0.5*Math.log2(6/(th*Math.pow(a,4)))+0.5:0;i.roughness.value=a,i.lodBias.value=o,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,e){if(this._blurMaterial===null)this._blurMaterial=qp();let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}}function Lc(t,e,n){return new lr(t,{minFilter:Cn,generateMipmaps:e,type:rn,colorSpace:Ua,depthBuffer:n})}function as(t,e,n){return new Sn({name:t,uniforms:e,vertexShader:Yt.cube_vert,fragmentShader:n,side:Be,blending:Vn,depthTest:!1,depthWrite:!1})}function Vp(){return as("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${th}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Xp(){return as("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:eh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function qp(){return as("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Gp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Nc(){return as("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Dc(){return as("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Yp(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){if(u===null||u===void 0)return null;if(f)return a(u);return r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ls||f===Ns)if(e.has(u)){let _=e.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let M=new lr(_.height);return M.fromEquirectangularTexture(t,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,_=f===Ls||f===Ns,M=f===Zi||f===bi;if(_||M){let m=n.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g){if(i===null)i=new or(t);return m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture}else if(m!==void 0)return m.texture;else{let T=u.image;if(_&&T&&T.height>0||M&&T&&l(T)){if(i===null)i=new or(t);return m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture}else return null}}}return u}function o(u,f){if(f===Ls)u.mapping=Zi;else if(f===Ns)u.mapping=bi;return u}function l(u){let f=0,_=6;for(let M=0;M<_;M++)if(u[M]!==void 0)f++;return f===_}function c(u){let f=u.target;f.removeEventListener("dispose",c);let _=e.get(f);if(_!==void 0)e.delete(f),_.dispose()}function h(u){let f=u.target;f.removeEventListener("dispose",h);let _=n.get(f);if(_!==void 0)n.delete(f),_.dispose()}function d(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function Zp(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Oi("WebGLRenderer: "+i+" extension not supported.");return s}}}function Jp(t,e,n,i){let s={},r=new WeakMap,a=new FinalizationRegistry((_)=>delete s[_]);function o(_){l(_.target)}function l(_){if(_.index!==null)e.remove(_.index);for(let m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let M=r.get(_);if(M)e.remove(M),r.delete(_);if(i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0)delete _._maxInstanceCount;n.memory.geometries--}function c(_,M){if(s[M.id]!==void 0)return M;return M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),n.memory.geometries++,M}function h(_){let M=_.attributes;for(let m in M)e.update(M[m],t.ARRAY_BUFFER)}function d(_){let M=_.index,m=_.attributes.position,g=0;if(m===void 0)return;let T=M!==null?M.array.length:m.array.length/3-1,S=new(m.count>=65535?qs:Xs)(Math.ceil(T/3)*6,1),A=S.array;if(M!==null){let p=M.array;g=M.version;for(let y=0,I=0;y<T;y+=3){let O=p[y+0],P=p[y+1],G=p[y+2];A[I++]=O,A[I++]=P,A[I++]=P,A[I++]=G,A[I++]=G,A[I++]=O}}else{g=m.version;for(let p=0,y=0;p<T;p+=3){let I=p+0,O=p+1,P=p+2;A[y++]=I,A[y++]=O,A[y++]=O,A[y++]=P,A[y++]=P,A[y++]=I}}S.version=g;let R=r.get(_);if(R)e.remove(R);r.set(_,S)}function u(_){let M=r.get(_);if(M){let m=_.index;if(m!==null){if(M.version<m.version)d(_)}}else d(_);return r.get(_)}function f(){for(let _ in s){let M=s[_].deref();if(M!==void 0)l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function $p(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){t.drawElements(i,u,r,d*a),n.update(u,i,1)}function c(d,u,f){if(f===0)return;t.drawElementsInstanced(i,u,r,d*a,f),n.update(u,i,f)}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Kp(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Qp(t,e,n){let i=new WeakMap,s=new me;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let I=function(){p.dispose(),i.delete(o),o.removeEventListener("dispose",I)};if(u!==void 0)u.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],E=0;if(f===!0)E=1;if(_===!0)E=2;if(M===!0)E=3;let S=o.attributes.position.count*E,A=1;if(S>e.maxTextureSize)A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize;let R=new Float32Array(S*A*4*d),p=new Hs(R,S,A,d);p.type=_n,p.needsUpdate=!0;let y=E*4;for(let O=0;O<d;O++){let P=m[O],G=g[O],Q=T[O],w=S*A*4*O;for(let X=0;X<P.count;X++){let q=X*y;if(f===!0)s.fromBufferAttribute(P,X),R[w+q+0]=s.x,R[w+q+1]=s.y,R[w+q+2]=s.z,R[w+q+3]=0;if(_===!0)s.fromBufferAttribute(G,X),R[w+q+4]=s.x,R[w+q+5]=s.y,R[w+q+6]=s.z,R[w+q+7]=0;if(M===!0)s.fromBufferAttribute(Q,X),R[w+q+8]=s.x,R[w+q+9]=s.y,R[w+q+10]=s.z,R[w+q+11]=Q.itemSize===4?s.w:1}}u={count:d,texture:p,size:new lt(S,A)},i.set(o,u),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function jp(t,e,n,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h)e.update(u),r.set(u,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==h){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,h)}}if(c.isSkinnedMesh){let f=c.skeleton;if(r.get(f)!==h)f.update(),r.set(f,h)}return u}function o(){r=new WeakMap}function l(c){let h=c.target;if(h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null)n.remove(h.instanceColor)}return{update:a,dispose:o}}var tm={[Xr]:"LINEAR_TONE_MAPPING",[qr]:"REINHARD_TONE_MAPPING",[Yr]:"CINEON_TONE_MAPPING",[Zr]:"ACES_FILMIC_TONE_MAPPING",[$r]:"AGX_TONE_MAPPING",[Kr]:"NEUTRAL_TONE_MAPPING",[Jr]:"CUSTOM_TONE_MAPPING"};function em(t,e,n,i,s,r){let a=new Ve(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Xe;h.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new we([0,2,0,0,2,0],2));let d=new ao({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Re(h,d),f=new So(-1,1,1,-1,0,1),_=null,M=null,m=!1,g,T=null,E=[],S=!1;this.setSize=function(A,R){if(a.setSize(A,R),o!==null)o.setSize(A,R);if(l!==null)l.setSize(A,R);for(let p=0;p<E.length;p++){let y=E[p];if(y.setSize)y.setSize(A,R)}},this.setEffects=function(A){E=A,S=E.length>0&&E[0].isRenderPass===!0;let{width:R,height:p}=a;if(E.length>0&&o===null)o=new Ve(R,p,{type:rn,depthBuffer:!1,stencilBuffer:!1}),l=new Ve(R,p,{type:rn,depthBuffer:!1,stencilBuffer:!1});let y=s===!0&&E.some((I)=>I.needsDepthTexture===!0);if(y!==(a.depthTexture!==null)){if(y===!0&&c===null){if(c=new Ln(R,p),r===!0)c.format=Pn,c.type=Xn}a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y}for(let I=0;I<E.length;I++){let O=E[I];if(O.setSize)O.setSize(R,p);if(y&&O.needsDepthTexture===!0&&O.setDepthTexture)O.setDepthTexture(c)}},this.begin=function(A,R){if(m)return!1;if(A.toneMapping===sn&&E.length===0)return!1;if(T=R,R!==null){let{width:p,height:y}=R;if(a.width!==p||a.height!==y)this.setSize(p,y)}if(S===!1)A.setRenderTarget(a);return g=A.toneMapping,A.toneMapping=sn,!0},this.hasRenderPass=function(){return S},this.end=function(A,R){A.toneMapping=g,m=!0;let p=a,y=o;for(let I=0;I<E.length;I++){let O=E[I];if(O.enabled===!1)continue;if(O.render(A,y,p,R),O.needsSwap!==!1)p=y,y=y===o?l:o}if(_!==A.outputColorSpace||M!==A.toneMapping){if(_=A.outputColorSpace,M=A.toneMapping,d.defines={},jt.getTransfer(_)===he)d.defines.SRGB_TRANSFER="";let I=tm[M];if(I)d.defines[I]="";d.needsUpdate=!0}d.uniforms.tDiffuse.value=p.texture,A.setRenderTarget(T),A.render(u,f),T=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();h.dispose(),d.dispose()}}var nh=new Ne,ih=new Ln(1,1),sh=new Js(1),rh=new Hs,ah=new Za,oh=new Zs,Uc=[],Fc=[],Oc=new Float32Array(16),Bc=new Float32Array(9),zc=new Float32Array(4);function Ii(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Uc[s];if(r===void 0)r=new Float32Array(s),Uc[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Se(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Me(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cr(t,e){let n=Fc[e];if(n===void 0)n=new Int32Array(e),Fc[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function nm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function im(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Se(n,e))return;t.uniform2fv(this.addr,e),Me(n,e)}}function sm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Se(n,e))return;t.uniform3fv(this.addr,e),Me(n,e)}}function rm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Se(n,e))return;t.uniform4fv(this.addr,e),Me(n,e)}}function am(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Se(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Me(n,e)}else{if(Se(n,i))return;zc.set(i),t.uniformMatrix2fv(this.addr,!1,zc),Me(n,i)}}function om(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Se(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Me(n,e)}else{if(Se(n,i))return;Bc.set(i),t.uniformMatrix3fv(this.addr,!1,Bc),Me(n,i)}}function lm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Se(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Me(n,e)}else{if(Se(n,i))return;Oc.set(i),t.uniformMatrix4fv(this.addr,!1,Oc),Me(n,i)}}function cm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function hm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Se(n,e))return;t.uniform2iv(this.addr,e),Me(n,e)}}function um(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Se(n,e))return;t.uniform3iv(this.addr,e),Me(n,e)}}function dm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Se(n,e))return;t.uniform4iv(this.addr,e),Me(n,e)}}function fm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function pm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Se(n,e))return;t.uniform2uiv(this.addr,e),Me(n,e)}}function mm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Se(n,e))return;t.uniform3uiv(this.addr,e),Me(n,e)}}function gm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Se(n,e))return;t.uniform4uiv(this.addr,e),Me(n,e)}}function hr(t){if(t.version===0)t.compareFunction=za,t.needsUpdate=!0;return t}function _m(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)r=hr(ih);else r=nh;n.setTexture2D(e||r,s)}function xm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||ah,s)}function vm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_CUBE_SHADOW)r=hr(sh);else r=oh;n.setTextureCube(e||r,s)}function ym(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||rh,s)}function Sm(t){switch(t){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return ym}}function Mm(t,e){t.uniform1fv(this.addr,e)}function bm(t,e){let n=Ii(e,this.size,2);t.uniform2fv(this.addr,n)}function Em(t,e){let n=Ii(e,this.size,3);t.uniform3fv(this.addr,n)}function Tm(t,e){let n=Ii(e,this.size,4);t.uniform4fv(this.addr,n)}function Am(t,e){let n=Ii(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function wm(t,e){let n=Ii(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Rm(t,e){let n=Ii(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Cm(t,e){t.uniform1iv(this.addr,e)}function Im(t,e){t.uniform2iv(this.addr,e)}function Pm(t,e){t.uniform3iv(this.addr,e)}function Lm(t,e){t.uniform4iv(this.addr,e)}function Nm(t,e){t.uniform1uiv(this.addr,e)}function Dm(t,e){t.uniform2uiv(this.addr,e)}function Um(t,e){t.uniform3uiv(this.addr,e)}function Fm(t,e){t.uniform4uiv(this.addr,e)}function Om(t,e,n){let i=this.cache,s=e.length,r=cr(n,s);if(!Se(i,r))t.uniform1iv(this.addr,r),Me(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=hr(ih);else a=nh;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function Bm(t,e,n){let i=this.cache,s=e.length,r=cr(n,s);if(!Se(i,r))t.uniform1iv(this.addr,r),Me(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||ah,r[a])}function zm(t,e,n){let i=this.cache,s=e.length,r=cr(n,s);if(!Se(i,r))t.uniform1iv(this.addr,r),Me(i,r);let a;if(this.type===t.SAMPLER_CUBE_SHADOW)a=hr(sh);else a=oh;for(let o=0;o!==s;++o)n.setTextureCube(e[o]||a,r[o])}function Gm(t,e,n){let i=this.cache,s=e.length,r=cr(n,s);if(!Se(i,r))t.uniform1iv(this.addr,r),Me(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||rh,r[a])}function km(t){switch(t){case 5126:return Mm;case 35664:return bm;case 35665:return Em;case 35666:return Tm;case 35674:return Am;case 35675:return wm;case 35676:return Rm;case 5124:case 35670:return Cm;case 35667:case 35671:return Im;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Nm;case 36294:return Dm;case 36295:return Um;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Gm}}class lh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sm(e.type)}}class ch{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=km(e.type)}}class hh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var Ao=/(\w+)(\])?(\[|\.)?/g;function Gc(t,e){t.seq.push(e),t.map[e.id]=e}function Hm(t,e,n){let i=t.name,s=i.length;Ao.lastIndex=0;while(!0){let r=Ao.exec(i),a=Ao.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){Gc(n,c===void 0?new lh(o,t,e):new ch(o,t,e));break}else{let d=n.map[o];if(d===void 0)d=new hh(o),Gc(n,d);n=d}}}class rs{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);Hm(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function kc(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Wm=37297,Vm=0;function Xm(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Hc=new Ht;function qm(t){jt._getMatrix(Hc,jt.workingColorSpace,t);let e=`mat3( ${Hc.elements.map((n)=>n.toFixed(4))} )`;switch(jt.getTransfer(t)){case Fa:return[e,"LinearTransferOETF"];case he:return[e,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Wc(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+Xm(t.getShaderSource(e),o)}else return r}function Ym(t,e){let n=qm(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Zm={[Xr]:"Linear",[qr]:"Reinhard",[Yr]:"Cineon",[Zr]:"ACESFilmic",[$r]:"AgX",[Kr]:"Neutral",[Jr]:"Custom"};function Jm(t,e){let n=Zm[e];if(n===void 0)return zt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var ar=new D;function $m(){jt.getLuminanceCoefficients(ar);let t=ar.x.toFixed(4),e=ar.y.toFixed(4),n=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Km(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Qm(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function jm(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ss(t){return t!==""}function Vc(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Xc(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(t){return t.replace(tg,eg)}function eg(t,e){let n=Yt[e];if(n===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ro(n)}var ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(t){return t.replace(ng,ig)}function ig(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yc(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}var sg={[qi]:"SHADOWMAP_TYPE_PCF",[yi]:"SHADOWMAP_TYPE_VSM"};function rg(t){return sg[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ag={[bi]:"ENVMAP_MODE_REFRACTION"};function og(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return ag[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var lg={[Yl]:"ENVMAP_BLENDING_MULTIPLY",[Zl]:"ENVMAP_BLENDING_MIX",[Jl]:"ENVMAP_BLENDING_ADD"};function cg(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return lg[t.combine]||"ENVMAP_BLENDING_NONE"}function hg(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=rg(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=og(n),d=cg(n),u=Km(n),f=Qm(r),_=s.createProgram(),M,m,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(ss).join(`
`),M.length>0)M+=`
`;if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(ss).join(`
`),m.length>0)m+=`
`}else M=[Yc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),m=[Yc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sn?"#define TONE_MAPPING":"",n.toneMapping!==sn?Yt.tonemapping_pars_fragment:"",n.toneMapping!==sn?Jm("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Ym("linearToOutputTexel",n.outputColorSpace),$m(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ss).join(`
`);if(a=Ro(a),a=Vc(a,n),a=Xc(a,n),o=Ro(o),o=Vc(o,n),o=Xc(o,n),a=qc(a),o=qc(o),n.isRawShaderMaterial!==!0)g=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",n.glslVersion===Ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m;let T=g+M+a,E=g+m+o,S=kc(s,s.VERTEX_SHADER,T),A=kc(s,s.FRAGMENT_SHADER,E);if(s.attachShader(_,S),s.attachShader(_,A),n.index0AttributeName!==void 0)s.bindAttribLocation(_,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(_,0,"position");s.linkProgram(_);function R(O){if(t.debug.checkShaderErrors){let P=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(S)||"",Q=s.getShaderInfoLog(A)||"",w=P.trim(),X=G.trim(),q=Q.trim(),B=!0,rt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,_,S,A);else{let W=Wc(s,S,"vertex"),K=Wc(s,A,"fragment");Gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+w+`
`+W+`
`+K)}else if(w!=="")zt("WebGLProgram: Program Info Log:",w);else if(X===""||q==="")rt=!1;if(rt)O.diagnostics={runnable:B,programLog:w,vertexShader:{log:X,prefix:M},fragmentShader:{log:q,prefix:m}}}s.deleteShader(S),s.deleteShader(A),p=new rs(s,_),y=jm(s,_)}let p;this.getUniforms=function(){if(p===void 0)R(this);return p};let y;this.getAttributes=function(){if(y===void 0)R(this);return y};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(I===!1)I=s.getProgramParameter(_,Wm);return I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Vm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=A,this}var ug=0;class uh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new dh(t),e.set(t,n);return n}}class dh{constructor(t){this.id=ug++,this.code=t,this.usedTimes=0}}function dg(t){return t===qn||t===Gs||t===ks}function fg(t,e,n,i,s,r){let a=new Ws,o=new uh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(p){if(l.add(p),p===0)return"uv";return`uv${p}`}function _(p,y,I,O,P,G){let Q=O.fog,w=P.geometry,X=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?O.environment:null,q=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,B=e.get(p.envMap||X,q),rt=u[p.type],W=i.precision;if(p.precision!==null){if(W=i.getMaxPrecision(p.precision),W!==p.precision)zt("WebGLProgram.getParameters:",p.precision,"not supported, using",W,"instead.")}let K=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,nt=K!==void 0?K.length:0,bt=0;if(w.morphAttributes.position!==void 0)bt=1;if(w.morphAttributes.normal!==void 0)bt=2;if(w.morphAttributes.color!==void 0)bt=3;let Z,it,Tt,Nt;if(rt){let vt=on[rt];Z=vt.vertexShader,it=vt.fragmentShader}else{Z=p.vertexShader,it=p.fragmentShader;let vt=o.getVertexShaderStage(p),le=o.getFragmentShaderStage(p);o.update(p,vt,le),Tt=vt.id,Nt=le.id}let Dt=t.getRenderTarget(),St=t.state.buffers.depth.getReversed(),ne=P.isInstancedMesh===!0,qt=P.isBatchedMesh===!0,Bt=!!p.map,te=!!p.matcap,j=!!B,at=j&&B.isPMREMTexture===!0,ht=!!p.aoMap,Et=!!p.lightMap,Mt=!!p.bumpMap&&p.wireframe===!1,Ft=!!p.normalMap,Pt=!!p.displacementMap,Zt=!!p.emissiveMap,Jt=!!p.metalnessMap,se=!!p.roughnessMap,N=p.anisotropy>0,ve=p.clearcoat>0,Vt=p.diffuseRoughness>0,ge=p.dispersion>0,gt=p.retroreflectivity>0,ae=p.iridescence>0,Ot=p.sheen>0,kt=p.transmission>0,ye=N&&!!p.anisotropyMap,b=ve&&!!p.clearcoatMap,x=ve&&!!p.clearcoatNormalMap,U=ve&&!!p.clearcoatRoughnessMap,et=Vt&&!!p.diffuseRoughnessMap,tt=ae&&!!p.iridescenceMap,ct=ae&&!!p.iridescenceThicknessMap,ft=Ot&&!!p.sheenColorMap,H=Ot&&!!p.sheenRoughnessMap,J=!!p.specularMap,ut=!!p.specularColorMap,C=!!p.specularIntensityMap,Y=kt&&!!p.transmissionMap,V=kt&&!!p.thicknessMap,st=!!p.gradientMap,ot=!!p.alphaMap,mt=p.alphaTest>0,Lt=!!p.alphaHash,It=!!p.extensions,xt=sn;if(p.toneMapped){if(Dt===null||Dt.isXRRenderTarget===!0)xt=t.toneMapping}let Ut=at?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Xt={shaderID:rt,shaderType:p.type,shaderName:p.name,vertexShader:Z,fragmentShader:it,defines:p.defines,customVertexShaderID:Tt,customFragmentShaderID:Nt,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:W,batching:qt,batchingColor:qt&&P._colorsTexture!==null,instancing:ne,instancingColor:ne&&P.instanceColor!==null,instancingMorph:ne&&P.morphTexture!==null,outputColorSpace:Dt===null?t.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:Bt,matcap:te,envMap:j,envMapMode:j&&B.mapping,envMapPMREM:at,envMapMaxLod:at?Ut.length-1:null,envMapSize:at?Ut[0].width:null,aoMap:ht,lightMap:Et,bumpMap:Mt,normalMap:Ft,displacementMap:Pt,emissiveMap:Zt,normalMapObjectSpace:Ft&&p.normalMapType===ac,normalMapTangentSpace:Ft&&p.normalMapType===Da,packedNormalMap:Ft&&p.normalMapType===Da&&dg(p.normalMap.format),metalnessMap:Jt,roughnessMap:se,anisotropy:N,anisotropyMap:ye,clearcoat:ve,clearcoatMap:b,clearcoatNormalMap:x,clearcoatRoughnessMap:U,diffuseRoughness:Vt,diffuseRoughnessMap:et,dispersion:ge,retroreflection:gt,iridescence:ae,iridescenceMap:tt,iridescenceThicknessMap:ct,sheen:Ot,sheenColorMap:ft,sheenRoughnessMap:H,specularMap:J,specularColorMap:ut,specularIntensityMap:C,transmission:kt,transmissionMap:Y,thicknessMap:V,gradientMap:st,opaque:p.transparent===!1&&p.blending===Yi&&p.alphaToCoverage===!1,alphaMap:ot,alphaTest:mt,alphaHash:Lt,combine:p.combine,mapUv:Bt&&f(p.map.channel),aoMapUv:ht&&f(p.aoMap.channel),lightMapUv:Et&&f(p.lightMap.channel),bumpMapUv:Mt&&f(p.bumpMap.channel),normalMapUv:Ft&&f(p.normalMap.channel),displacementMapUv:Pt&&f(p.displacementMap.channel),emissiveMapUv:Zt&&f(p.emissiveMap.channel),metalnessMapUv:Jt&&f(p.metalnessMap.channel),roughnessMapUv:se&&f(p.roughnessMap.channel),anisotropyMapUv:ye&&f(p.anisotropyMap.channel),clearcoatMapUv:b&&f(p.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&f(p.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&f(p.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(p.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(p.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&f(p.sheenColorMap.channel),sheenRoughnessMapUv:H&&f(p.sheenRoughnessMap.channel),specularMapUv:J&&f(p.specularMap.channel),specularColorMapUv:ut&&f(p.specularColorMap.channel),specularIntensityMapUv:C&&f(p.specularIntensityMap.channel),transmissionMapUv:Y&&f(p.transmissionMap.channel),thicknessMapUv:V&&f(p.thicknessMap.channel),alphaMapUv:ot&&f(p.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(Ft||N),vertexNormals:!!w.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!w.attributes.uv&&(Bt||ot),fog:!!Q,useFog:p.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||w.attributes.normal===void 0&&Ft===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:St,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:bt,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:G.filter((vt)=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:p.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:Bt&&p.map.isVideoTexture===!0&&jt.getTransfer(p.map.colorSpace)===he,decodeVideoTextureEmissive:Zt&&p.emissiveMap.isVideoTexture===!0&&jt.getTransfer(p.emissiveMap.colorSpace)===he,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===nn,flipSided:p.side===Be,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:It&&p.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&p.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function M(p){let y=[];if(p.shaderID)y.push(p.shaderID);else y.push(p.customVertexShaderID),y.push(p.customFragmentShaderID);if(p.defines!==void 0)for(let I in p.defines)y.push(I),y.push(p.defines[I]);if(p.isRawShaderMaterial===!1)m(y,p),g(y,p),y.push(t.outputColorSpace);return y.push(p.customProgramCacheKey),y.join()}function m(p,y){p.push(y.precision),p.push(y.outputColorSpace),p.push(y.envMapMode),p.push(y.envMapPMREM),p.push(y.envMapMaxLod),p.push(y.envMapSize),p.push(y.mapUv),p.push(y.alphaMapUv),p.push(y.lightMapUv),p.push(y.aoMapUv),p.push(y.bumpMapUv),p.push(y.normalMapUv),p.push(y.displacementMapUv),p.push(y.emissiveMapUv),p.push(y.metalnessMapUv),p.push(y.roughnessMapUv),p.push(y.anisotropyMapUv),p.push(y.clearcoatMapUv),p.push(y.clearcoatNormalMapUv),p.push(y.clearcoatRoughnessMapUv),p.push(y.diffuseRoughnessMapUv),p.push(y.iridescenceMapUv),p.push(y.iridescenceThicknessMapUv),p.push(y.sheenColorMapUv),p.push(y.sheenRoughnessMapUv),p.push(y.specularMapUv),p.push(y.specularColorMapUv),p.push(y.specularIntensityMapUv),p.push(y.transmissionMapUv),p.push(y.thicknessMapUv),p.push(y.combine),p.push(y.fogExp2),p.push(y.sizeAttenuation),p.push(y.morphTargetsCount),p.push(y.numSunLights),p.push(y.numDirLights),p.push(y.numPointLights),p.push(y.numSpotLights),p.push(y.numSpotLightMaps),p.push(y.numHemiLights),p.push(y.numRectAreaLights),p.push(y.numSunLightShadows),p.push(y.numDirLightShadows),p.push(y.numPointLightShadows),p.push(y.numSpotLightShadows),p.push(y.numSpotLightShadowsWithMaps),p.push(y.numLightProbes),p.push(y.numLightProbeGrids),p.push(y.shadowMapType),p.push(y.toneMapping),p.push(y.numClippingPlanes),p.push(y.numClipIntersection),p.push(y.depthPacking)}function g(p,y){if(a.disableAll(),y.instancing)a.enable(0);if(y.instancingColor)a.enable(1);if(y.instancingMorph)a.enable(2);if(y.matcap)a.enable(3);if(y.envMap)a.enable(4);if(y.normalMapObjectSpace)a.enable(5);if(y.normalMapTangentSpace)a.enable(6);if(y.clearcoat)a.enable(7);if(y.iridescence)a.enable(8);if(y.alphaTest)a.enable(9);if(y.vertexColors)a.enable(10);if(y.vertexAlphas)a.enable(11);if(y.vertexUv1s)a.enable(12);if(y.vertexUv2s)a.enable(13);if(y.vertexUv3s)a.enable(14);if(y.vertexTangents)a.enable(15);if(y.anisotropy)a.enable(16);if(y.alphaHash)a.enable(17);if(y.batching)a.enable(18);if(y.dispersion)a.enable(19);if(y.retroreflection)a.enable(24);if(y.diffuseRoughness)a.enable(25);if(y.batchingColor)a.enable(20);if(y.gradientMap)a.enable(21);if(y.packedNormalMap)a.enable(22);if(y.vertexNormals)a.enable(23);if(p.push(a.mask),a.disableAll(),y.fog)a.enable(0);if(y.useFog)a.enable(1);if(y.flatShading)a.enable(2);if(y.logarithmicDepthBuffer)a.enable(3);if(y.reversedDepthBuffer)a.enable(4);if(y.skinning)a.enable(5);if(y.morphTargets)a.enable(6);if(y.morphNormals)a.enable(7);if(y.morphColors)a.enable(8);if(y.premultipliedAlpha)a.enable(9);if(y.shadowMapEnabled)a.enable(10);if(y.doubleSided)a.enable(11);if(y.flipSided)a.enable(12);if(y.useDepthPacking)a.enable(13);if(y.dithering)a.enable(14);if(y.transmission)a.enable(15);if(y.sheen)a.enable(16);if(y.opaque)a.enable(17);if(y.pointsUvs)a.enable(18);if(y.decodeVideoTexture)a.enable(19);if(y.decodeVideoTextureEmissive)a.enable(20);if(y.alphaToCoverage)a.enable(21);if(y.numLightProbeGrids>0)a.enable(22);if(y.hasPositionAttribute)a.enable(23);p.push(a.mask)}function T(p){let y=u[p.type],I;if(y){let O=on[y];I=Tc.clone(O.uniforms)}else I=p.uniforms;return I}function E(p,y){let I=h.get(y);if(I!==void 0)++I.usedTimes;else I=new hg(t,y,p,s),c.push(I),h.set(y,I);return I}function S(p){if(--p.usedTimes===0){let y=c.indexOf(p);c[y]=c[c.length-1],c.pop(),h.delete(p.cacheKey),p.destroy()}}function A(p){o.remove(p)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:T,acquireProgram:E,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:R}}function pg(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function mg(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Zc(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Jc(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u){let f=0;if(u.isInstancedMesh)f+=2;if(u.isSkinnedMesh)f+=1;return f}function o(u,f,_,M,m,g){let T=t[e];if(T===void 0)T={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:g},t[e]=T;else T.id=u.id,T.object=u,T.geometry=f,T.material=_,T.materialVariant=a(u),T.groupOrder=M,T.renderOrder=u.renderOrder,T.z=m,T.group=g;return e++,T}function l(u,f,_,M,m,g,T){if(T.reversedDepth===!0)m=-m;let E=o(u,f,_,M,m,g);if(_.transmission>0)i.push(E);else if(_.transparent===!0)s.push(E);else n.push(E)}function c(u,f,_,M,m,g){let T=o(u,f,_,M,m,g);if(_.transmission>0)i.unshift(T);else if(_.transparent===!0)s.unshift(T);else n.unshift(T)}function h(u,f){if(n.length>1)n.sort(u||mg);if(i.length>1)i.sort(f||Zc);if(s.length>1)s.sort(f||Zc)}function d(){for(let u=e,f=t.length;u<f;u++){let _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function gg(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Jc,t.set(i,[a]);else if(s>=r.length)a=new Jc,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function _g(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new D,color:new ee};break;case"SpotLight":n={position:new D,direction:new D,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new ee,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":n={color:new ee,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function xg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var vg=0;function yg(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Sg(t){let e=new _g,n=xg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new de,a=new de;function o(c){let h=0,d=0,u=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let f=0,_=0,M=0,m=0,g=0,T=0,E=0,S=0,A=0,R=0,p=0,y=0,I=0,O=0;c.sort(yg);for(let G=0,Q=c.length;G<Q;G++){let w=c[G],{color:X,intensity:q,distance:B}=w,rt=null;if(w.shadow&&w.shadow.map)if(w.shadow.map.texture.format===qn)rt=w.shadow.map.texture;else rt=w.shadow.map.depthTexture||w.shadow.map.texture;if(w.isAmbientLight)h+=X.r*q,d+=X.g*q,u+=X.b*q;else if(w.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(w.sh.coefficients[W],q);O++}else if(w.isSunLight){let W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let K=w.shadow,nt=n.get(w);nt.shadowIntensity=K.intensity,nt.shadowBias=K.bias,nt.shadowNormalBias=K.normalBias,nt.shadowRadius=K.radius,nt.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[_]=nt,i.sunShadowMap[_]=rt;let bt=K.getViewportCount();for(let Z=0;Z<bt;Z++)i.sunShadowMatrix[M+Z]=K.getMatrix(Z),i.sunShadowCascade[M+Z]=K._cascadeData[Z];M+=bt,_++}i.sun[f]=W,f++}else if(w.isDirectionalLight){let W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let K=w.shadow,nt=n.get(w);nt.shadowIntensity=K.intensity,nt.shadowBias=K.bias,nt.shadowNormalBias=K.normalBias,nt.shadowRadius=K.radius,nt.shadowMapSize=K.mapSize,i.directionalShadow[m]=nt,i.directionalShadowMap[m]=rt,i.directionalShadowMatrix[m]=w.shadow.matrix,A++}i.directional[m]=W,m++}else if(w.isSpotLight){let W=e.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(X).multiplyScalar(q),W.distance=B,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,i.spot[T]=W;let K=w.shadow;if(w.map){if(i.spotLightMap[y]=w.map,y++,K.updateMatrices(w),w.castShadow)I++}if(i.spotLightMatrix[T]=K.matrix,w.castShadow){let nt=n.get(w);nt.shadowIntensity=K.intensity,nt.shadowBias=K.bias,nt.shadowNormalBias=K.normalBias,nt.shadowRadius=K.radius,nt.shadowMapSize=K.mapSize,i.spotShadow[T]=nt,i.spotShadowMap[T]=rt,p++}T++}else if(w.isRectAreaLight){let W=e.get(w);W.color.copy(X).multiplyScalar(q),W.halfWidth.set(w.width*0.5,0,0),W.halfHeight.set(0,w.height*0.5,0),i.rectArea[E]=W,E++}else if(w.isPointLight){let W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){let K=w.shadow,nt=n.get(w);nt.shadowIntensity=K.intensity,nt.shadowBias=K.bias,nt.shadowNormalBias=K.normalBias,nt.shadowRadius=K.radius,nt.shadowMapSize=K.mapSize,nt.shadowCameraNear=K.camera.near,nt.shadowCameraFar=K.camera.far,i.pointShadow[g]=nt,i.pointShadowMap[g]=rt,i.pointShadowMatrix[g]=w.shadow.matrix,R++}i.point[g]=W,g++}else if(w.isHemisphereLight){let W=e.get(w);W.skyColor.copy(w.color).multiplyScalar(q),W.groundColor.copy(w.groundColor).multiplyScalar(q),i.hemi[S]=W,S++}}if(E>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2;else i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2;i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;if(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==T||P.rectAreaLength!==E||P.hemiLength!==S||P.numSunShadows!==_||P.numDirectionalShadows!==A||P.numPointShadows!==R||P.numSpotShadows!==p||P.numSpotMaps!==y||P.numLightProbes!==O)i.sun.length=f,i.directional.length=m,i.spot.length=T,i.rectArea.length=E,i.point.length=g,i.hemi.length=S,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=p,i.spotShadowMap.length=p,i.spotLightMatrix.length=p+y-I,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=O,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=T,P.rectAreaLength=E,P.hemiLength=S,P.numSunShadows=_,P.numDirectionalShadows=A,P.numPointShadows=R,P.numSpotShadows=p,P.numSpotMaps=y,P.numLightProbes=O,i.version=vg++}function l(c,h){let d=0,u=0,f=0,_=0,M=0,m=0,g=h.matrixWorldInverse;for(let T=0,E=c.length;T<E;T++){let S=c[T];if(S.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(g),d++}else if(S.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),u++}else if(S.isSpotLight){let A=i.spot[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),_++}else if(S.isRectAreaLight){let A=i.rectArea[M];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(S.width*0.5,0,0),A.halfHeight.set(0,S.height*0.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function $c(t){let e=new Sg(t),n=[],i=[],s=[];function r(d){h.camera=d,n.length=0,i.length=0,s.length=0}function a(d){if(d.isLightProbeGrid)s.push(d);else n.push(d)}function o(d){i.push(d)}function l(){e.setup(n),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(n,d)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Mg(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new $c(t),e.set(s,[o]);else if(r>=a.length)o=new $c(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Tg=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Ag=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Kc=new de,is=new D,wo=new D;function wg(t,e,n){let i=new Hn,s=new lt,r=new lt,a=new me,o=new oo,l=new lo,c={},h=n.maxTextureSize,d={[Si]:Be,[Be]:Si,[nn]:nn},u=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:bg,fragmentShader:Eg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new Xe;_.setAttribute("position",new Qe(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new Re(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qi;let g=this.type;this.render=function(R,p,y){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(R.length===0)return;if(this.type===vl)zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qi;let I=t.getRenderTarget(),O=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),G=t.state;if(G.setBlending(Vn),G.buffers.depth.getReversed()===!0)G.buffers.color.setClear(0,0,0,0);else G.buffers.color.setClear(1,1,1,1);G.buffers.depth.setTest(!0),G.setScissorTest(!1);let Q=g!==this.type;if(Q)p.traverse(function(w){if(w.material)if(Array.isArray(w.material))w.material.forEach((X)=>X.needsUpdate=!0);else w.material.needsUpdate=!0});for(let w=0,X=R.length;w<X;w++){let q=R[w],B=q.shadow;if(B===void 0){zt("WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let rt=B.getFrameExtents();if(s.multiply(rt),r.copy(B.mapSize),s.x>h||s.y>h){if(s.x>h)r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,B.mapSize.x=r.x;if(s.y>h)r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,B.mapSize.y=r.y}let W=t.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||Q===!0){if(B.map!==null){if(B.map.depthTexture!==null)B.map.depthTexture.dispose(),B.map.depthTexture=null;B.map.dispose()}if(this.type===yi){if(q.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ve(s.x,s.y,{format:qn,type:rn,minFilter:We,magFilter:We,generateMipmaps:!1}),B.map.texture.name=q.name+".shadowMap",B.map.depthTexture=new Ln(s.x,s.y,_n),B.map.depthTexture.name=q.name+".shadowMapDepth",B.map.depthTexture.format=Ei,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rn,B.map.depthTexture.magFilter=Rn}else{if(q.isPointLight)B.map=new lr(s.x),B.map.depthTexture=new Js(s.x,In);else B.map=new Ve(s.x,s.y),B.map.depthTexture=new Ln(s.x,s.y,In);if(B.map.depthTexture.name=q.name+".shadowMap",B.map.depthTexture.format=Ei,this.type===qi)B.map.depthTexture.compareFunction=W?Ba:Oa,B.map.depthTexture.minFilter=We,B.map.depthTexture.magFilter=We;else B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rn,B.map.depthTexture.magFilter=Rn}B.camera.updateProjectionMatrix()}if(B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y))B.map.setSize(s.x,s.y);let K=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();if(q.isPointLight!==!0)B.updateMatrices(q,y);let nt=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:y.layers;for(let bt=0;bt<K;bt++){let Z=B.getCamera(bt);if(q.isPointLight){let{camera:it,matrix:Tt}=B,Nt=q.distance||it.far;if(Nt!==it.far)it.far=Nt,it.updateProjectionMatrix();is.setFromMatrixPosition(q.matrixWorld),it.position.copy(is),wo.copy(it.position),wo.add(Tg[bt]),it.up.copy(Ag[bt]),it.lookAt(wo),it.updateMatrixWorld(),Tt.makeTranslation(-is.x,-is.y,-is.z),Kc.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Kc,it.coordinateSystem,it.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,bt),t.clear();else{if(bt===0)t.setRenderTarget(B.map),t.clear();let it=B.getViewport(bt);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),G.viewport(a)}i=B.getFrustum(bt),S(p,y,Z,q,nt,this.type)}if(B.isPointLightShadow!==!0&&this.type===yi)T(B,y);B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,t.setRenderTarget(I,O,P)};function T(R,p){let y=e.update(M);if(u.defines.VSM_SAMPLES!==R.blurSamples)u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0;if(R.mapPass===null)R.mapPass=new Ve(s.x,s.y,{format:qn,type:rn});else if(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)R.mapPass.setSize(R.map.width,R.map.height);u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(p,null,y,u,M,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(p,null,y,f,M,null)}function E(R,p,y,I){let O=null,P=y.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)O=P;else if(O=y.isPointLight===!0?l:o,t.localClippingEnabled&&p.clipShadows===!0&&Array.isArray(p.clippingPlanes)&&p.clippingPlanes.length!==0||p.displacementMap&&p.displacementScale!==0||p.alphaMap&&p.alphaTest>0||p.map&&p.alphaTest>0||p.alphaToCoverage===!0){let G=O.uuid,Q=p.uuid,w=c[G];if(w===void 0)w={},c[G]=w;let X=w[Q];if(X===void 0)X=O.clone(),w[Q]=X,p.addEventListener("dispose",A);O=X}if(O.visible=p.visible,O.wireframe=p.wireframe,I===yi)O.side=p.shadowSide!==null?p.shadowSide:p.side;else O.side=p.shadowSide!==null?p.shadowSide:d[p.side];if(O.alphaMap=p.alphaMap,O.alphaTest=p.alphaToCoverage===!0?0.5:p.alphaTest,O.map=p.map,O.clipShadows=p.clipShadows,O.clippingPlanes=p.clippingPlanes,O.clipIntersection=p.clipIntersection,O.displacementMap=p.displacementMap,O.displacementScale=p.displacementScale,O.displacementBias=p.displacementBias,O.wireframeLinewidth=p.wireframeLinewidth,O.linewidth=p.linewidth,y.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let G=t.properties.get(O);G.light=y}return O}function S(R,p,y,I,O,P){if(R.visible===!1)return;if(R.layers.test(O)&&(R.isMesh||R.isLine||R.isPoints)){if((R.castShadow||R.receiveShadow&&P===yi)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,R.matrixWorld);let w=e.update(R),X=R.material;if(Array.isArray(X)){let q=w.groups;for(let B=0,rt=q.length;B<rt;B++){let W=q[B],K=X[W.materialIndex];if(K&&K.visible){let nt=E(R,K,I,P);R.onBeforeShadow(t,R,p,y,w,nt,W),t.renderBufferDirect(y,null,w,nt,R,W),R.onAfterShadow(t,R,p,y,w,nt,W)}}}else if(X.visible){let q=E(R,X,I,P);R.onBeforeShadow(t,R,p,y,w,q,null),t.renderBufferDirect(y,null,w,q,R,null),R.onAfterShadow(t,R,p,y,w,q,null)}}}let Q=R.children;for(let w=0,X=Q.length;w<X;w++)S(Q[w],p,y,I,O,P)}function A(R){R.target.removeEventListener("dispose",A);for(let y in c){let I=c[y],O=R.target.uuid;if(O in I)I[O].dispose(),delete I[O]}}}function Rg(t,e){function n(){let C=!1,Y=new me,V=null,st=new me(0,0,0,0);return{setMask:function(ot){if(V!==ot&&!C)t.colorMask(ot,ot,ot,ot),V=ot},setLocked:function(ot){C=ot},setClear:function(ot,mt,Lt,It,xt){if(xt===!0)ot*=It,mt*=It,Lt*=It;if(Y.set(ot,mt,Lt,It),st.equals(Y)===!1)t.clearColor(ot,mt,Lt,It),st.copy(Y)},reset:function(){C=!1,V=null,st.set(-1,0,0,0)}}}function i(){let C=!1,Y=!1,V=null,st=null,ot=null;return{setReversed:function(mt){if(Y!==mt){let Lt=e.get("EXT_clip_control");if(mt)Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT);else Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);Y=mt;let It=ot;ot=null,this.setClear(It)}},getReversed:function(){return Y},setTest:function(mt){if(mt)St(t.DEPTH_TEST);else ne(t.DEPTH_TEST)},setMask:function(mt){if(V!==mt&&!C)t.depthMask(mt),V=mt},setFunc:function(mt){if(Y)mt=gc[mt];if(st!==mt){switch(mt){case Gl:t.depthFunc(t.NEVER);break;case kl:t.depthFunc(t.ALWAYS);break;case Hl:t.depthFunc(t.LESS);break;case Vr:t.depthFunc(t.LEQUAL);break;case Wl:t.depthFunc(t.EQUAL);break;case Vl:t.depthFunc(t.GEQUAL);break;case Xl:t.depthFunc(t.GREATER);break;case ql:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}st=mt}},setLocked:function(mt){C=mt},setClear:function(mt){if(ot!==mt){if(ot=mt,Y)mt=1-mt;t.clearDepth(mt)}},reset:function(){C=!1,V=null,st=null,ot=null,Y=!1}}}function s(){let C=!1,Y=null,V=null,st=null,ot=null,mt=null,Lt=null,It=null,xt=null;return{setTest:function(Ut){if(!C)if(Ut)St(t.STENCIL_TEST);else ne(t.STENCIL_TEST)},setMask:function(Ut){if(Y!==Ut&&!C)t.stencilMask(Ut),Y=Ut},setFunc:function(Ut,Xt,vt){if(V!==Ut||st!==Xt||ot!==vt)t.stencilFunc(Ut,Xt,vt),V=Ut,st=Xt,ot=vt},setOp:function(Ut,Xt,vt){if(mt!==Ut||Lt!==Xt||It!==vt)t.stencilOp(Ut,Xt,vt),mt=Ut,Lt=Xt,It=vt},setLocked:function(Ut){C=Ut},setClear:function(Ut){if(xt!==Ut)t.clearStencil(Ut),xt=Ut},reset:function(){C=!1,Y=null,V=null,st=null,ot=null,mt=null,Lt=null,It=null,xt=null}}}let r=new n,a=new i,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,_=[],M=null,m=!1,g=null,T=null,E=null,S=null,A=null,R=null,p=null,y=new ee(0,0,0),I=0,O=!1,P=null,G=null,Q=null,w=null,X=null,q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,rt=0,W=t.getParameter(t.VERSION);if(W.indexOf("WebGL")!==-1)rt=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=rt>=1;else if(W.indexOf("OpenGL ES")!==-1)rt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=rt>=2;let K=null,nt={},bt=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),it=new me().fromArray(bt),Tt=new me().fromArray(Z);function Nt(C,Y,V,st){let ot=new Uint8Array(4),mt=t.createTexture();t.bindTexture(C,mt),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Lt=0;Lt<V;Lt++)if(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)t.texImage3D(Y,0,t.RGBA,1,1,st,0,t.RGBA,t.UNSIGNED_BYTE,ot);else t.texImage2D(Y+Lt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ot);return mt}let Dt={};Dt[t.TEXTURE_2D]=Nt(t.TEXTURE_2D,t.TEXTURE_2D,1),Dt[t.TEXTURE_CUBE_MAP]=Nt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[t.TEXTURE_2D_ARRAY]=Nt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Dt[t.TEXTURE_3D]=Nt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),St(t.DEPTH_TEST),a.setFunc(Vr),Mt(!1),Ft(Gr),St(t.CULL_FACE),ht(Vn);function St(C){if(h[C]!==!0)t.enable(C),h[C]=!0}function ne(C){if(h[C]!==!1)t.disable(C),h[C]=!1}function qt(C,Y){if(u[C]!==Y){if(t.bindFramebuffer(C,Y),u[C]=Y,C===t.DRAW_FRAMEBUFFER)u[t.FRAMEBUFFER]=Y;if(C===t.FRAMEBUFFER)u[t.DRAW_FRAMEBUFFER]=Y;return!0}return!1}function Bt(C,Y){let V=_,st=!1;if(C){if(V=f.get(Y),V===void 0)V=[],f.set(Y,V);let ot=C.textures;if(V.length!==ot.length||V[0]!==t.COLOR_ATTACHMENT0){for(let mt=0,Lt=ot.length;mt<Lt;mt++)V[mt]=t.COLOR_ATTACHMENT0+mt;V.length=ot.length,st=!0}}else if(V[0]!==t.BACK)V[0]=t.BACK,st=!0;if(st)t.drawBuffers(V)}function te(C){if(M!==C)return t.useProgram(C),M=C,!0;return!1}let j={[Mi]:t.FUNC_ADD,[Sl]:t.FUNC_SUBTRACT,[Ml]:t.FUNC_REVERSE_SUBTRACT};j[bl]=t.MIN,j[El]=t.MAX;let at={[Tl]:t.ZERO,[Al]:t.ONE,[wl]:t.SRC_COLOR,[Cl]:t.SRC_ALPHA,[Ul]:t.SRC_ALPHA_SATURATE,[Nl]:t.DST_COLOR,[Pl]:t.DST_ALPHA,[Rl]:t.ONE_MINUS_SRC_COLOR,[Il]:t.ONE_MINUS_SRC_ALPHA,[Dl]:t.ONE_MINUS_DST_COLOR,[Ll]:t.ONE_MINUS_DST_ALPHA,[Fl]:t.CONSTANT_COLOR,[Ol]:t.ONE_MINUS_CONSTANT_COLOR,[Bl]:t.CONSTANT_ALPHA,[zl]:t.ONE_MINUS_CONSTANT_ALPHA};function ht(C,Y,V,st,ot,mt,Lt,It,xt,Ut){if(C===Vn){if(m===!0)ne(t.BLEND),m=!1;return}if(m===!1)St(t.BLEND),m=!0;if(C!==yl){if(C!==g||Ut!==O){if(T!==Mi||A!==Mi)t.blendEquation(t.FUNC_ADD),T=Mi,A=Mi;if(Ut)switch(C){case Yi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kr:t.blendFunc(t.ONE,t.ONE);break;case Hr:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wr:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Gt("WebGLState: Invalid blending: ",C);break}else switch(C){case Yi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Hr:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wr:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",C);break}E=null,S=null,R=null,p=null,y.set(0,0,0),I=0,g=C,O=Ut}return}if(ot=ot||Y,mt=mt||V,Lt=Lt||st,Y!==T||ot!==A)t.blendEquationSeparate(j[Y],j[ot]),T=Y,A=ot;if(V!==E||st!==S||mt!==R||Lt!==p)t.blendFuncSeparate(at[V],at[st],at[mt],at[Lt]),E=V,S=st,R=mt,p=Lt;if(It.equals(y)===!1||xt!==I)t.blendColor(It.r,It.g,It.b,xt),y.copy(It),I=xt;g=C,O=!1}function Et(C,Y){C.side===nn?ne(t.CULL_FACE):St(t.CULL_FACE);let V=C.side===Be;if(Y)V=!V;Mt(V),C.blending===Yi&&C.transparent===!1?ht(Vn):ht(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let st=C.stencilWrite;if(o.setTest(st),st)o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass);Zt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?St(t.SAMPLE_ALPHA_TO_COVERAGE):ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(C){if(P!==C){if(C)t.frontFace(t.CW);else t.frontFace(t.CCW);P=C}}function Ft(C){if(C!==_l){if(St(t.CULL_FACE),C!==G)if(C===Gr)t.cullFace(t.BACK);else if(C===xl)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else ne(t.CULL_FACE);G=C}function Pt(C){if(C!==Q){if(B)t.lineWidth(C);Q=C}}function Zt(C,Y,V){if(C){if(St(t.POLYGON_OFFSET_FILL),w!==Y||X!==V){if(w=Y,X=V,a.getReversed())Y=-Y,V=-V;t.polygonOffset(Y,V)}}else ne(t.POLYGON_OFFSET_FILL)}function Jt(C){if(C)St(t.SCISSOR_TEST);else ne(t.SCISSOR_TEST)}function se(C){if(C===void 0)C=t.TEXTURE0+q-1;if(K!==C)t.activeTexture(C),K=C}function N(C,Y,V){if(V===void 0)if(K===null)V=t.TEXTURE0+q-1;else V=K;let st=nt[V];if(st===void 0)st={type:void 0,texture:void 0},nt[V]=st;if(st.type!==C||st.texture!==Y){if(K!==V)t.activeTexture(V),K=V;t.bindTexture(C,Y||Dt[C]),st.type=C,st.texture=Y}}function ve(){let C=nt[K];if(C!==void 0&&C.type!==void 0)t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0}function Vt(){try{t.compressedTexImage2D(...arguments)}catch(C){Gt("WebGLState:",C)}}function ge(){try{t.compressedTexImage3D(...arguments)}catch(C){Gt("WebGLState:",C)}}function gt(){try{t.texSubImage2D(...arguments)}catch(C){Gt("WebGLState:",C)}}function ae(){try{t.texSubImage3D(...arguments)}catch(C){Gt("WebGLState:",C)}}function Ot(){try{t.compressedTexSubImage2D(...arguments)}catch(C){Gt("WebGLState:",C)}}function kt(){try{t.compressedTexSubImage3D(...arguments)}catch(C){Gt("WebGLState:",C)}}function ye(){try{t.texStorage2D(...arguments)}catch(C){Gt("WebGLState:",C)}}function b(){try{t.texStorage3D(...arguments)}catch(C){Gt("WebGLState:",C)}}function x(){try{t.texImage2D(...arguments)}catch(C){Gt("WebGLState:",C)}}function U(){try{t.texImage3D(...arguments)}catch(C){Gt("WebGLState:",C)}}function et(C){if(d[C]!==void 0)return d[C];else return t.getParameter(C)}function tt(C,Y){if(d[C]!==Y)t.pixelStorei(C,Y),d[C]=Y}function ct(C){if(it.equals(C)===!1)t.scissor(C.x,C.y,C.z,C.w),it.copy(C)}function ft(C){if(Tt.equals(C)===!1)t.viewport(C.x,C.y,C.z,C.w),Tt.copy(C)}function H(C,Y){let V=c.get(Y);if(V===void 0)V=new WeakMap,c.set(Y,V);let st=V.get(C);if(st===void 0)st=t.getUniformBlockIndex(Y,C.name),t.uniformBlockBinding(Y,st,st),V.set(C,st)}function J(C,Y,V){let ot=c.get(Y).get(C);if(l[ot]!==V)t.bindBufferBase(t.UNIFORM_BUFFER,ot,V),l[ot]=V}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,nt={},u={},l={},f=new WeakMap,_=[],M=null,m=!1,g=null,T=null,E=null,S=null,A=null,R=null,p=null,y=new ee(0,0,0),I=0,O=!1,P=null,G=null,Q=null,w=null,X=null,it.set(0,0,t.canvas.width,t.canvas.height),Tt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:St,disable:ne,bindFramebuffer:qt,drawBuffers:Bt,useProgram:te,setBlending:ht,setMaterial:Et,setFlipSided:Mt,setCullFace:Ft,setLineWidth:Pt,setPolygonOffset:Zt,setScissorTest:Jt,activeTexture:se,bindTexture:N,unbindTexture:ve,compressedTexImage2D:Vt,compressedTexImage3D:ge,texImage2D:x,texImage3D:U,pixelStorei:tt,getParameter:et,updateUBOMapping:H,uniformBlockBinding:J,texStorage2D:ye,texStorage3D:b,texSubImage2D:gt,texSubImage3D:ae,compressedTexSubImage2D:Ot,compressedTexSubImage3D:kt,scissor:ct,viewport:ft,reset:ut}}function Cg(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,d=new Set,u,f=new WeakMap,_=new Set,M=new FinalizationRegistry((b)=>_.delete(b)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function g(b,x){return m?new OffscreenCanvas(b,x):Hi("canvas")}function T(b,x,U){let et=1,tt=ye(b);if(tt.width>U||tt.height>U)et=U/Math.max(tt.width,tt.height);if(et<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let ct=Math.floor(et*tt.width),ft=Math.floor(et*tt.height);if(u===void 0)u=g(ct,ft);let H=x?g(ct,ft):u;return H.width=ct,H.height=ft,H.getContext("2d").drawImage(b,0,0,ct,ft),zt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ct+"x"+ft+")."),H}else{if("data"in b)zt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+").");return b}return b}function E(b){return b.generateMipmaps}function S(b){t.generateMipmap(b)}function A(b){if(b.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(b.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function R(b,x,U,et,tt,ct=!1){if(b!==null){if(t[b]!==void 0)return t[b];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ft;if(et){if(ft=e.get("EXT_texture_norm16"),!ft)zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let H=x;if(x===t.RED){if(U===t.FLOAT)H=t.R32F;if(U===t.HALF_FLOAT)H=t.R16F;if(U===t.UNSIGNED_BYTE)H=t.R8;if(U===t.UNSIGNED_SHORT&&ft)H=ft.R16_EXT;if(U===t.SHORT&&ft)H=ft.R16_SNORM_EXT}if(x===t.RED_INTEGER){if(U===t.UNSIGNED_BYTE)H=t.R8UI;if(U===t.UNSIGNED_SHORT)H=t.R16UI;if(U===t.UNSIGNED_INT)H=t.R32UI;if(U===t.BYTE)H=t.R8I;if(U===t.SHORT)H=t.R16I;if(U===t.INT)H=t.R32I}if(x===t.RG){if(U===t.FLOAT)H=t.RG32F;if(U===t.HALF_FLOAT)H=t.RG16F;if(U===t.UNSIGNED_BYTE)H=t.RG8;if(U===t.UNSIGNED_SHORT&&ft)H=ft.RG16_EXT;if(U===t.SHORT&&ft)H=ft.RG16_SNORM_EXT}if(x===t.RG_INTEGER){if(U===t.UNSIGNED_BYTE)H=t.RG8UI;if(U===t.UNSIGNED_SHORT)H=t.RG16UI;if(U===t.UNSIGNED_INT)H=t.RG32UI;if(U===t.BYTE)H=t.RG8I;if(U===t.SHORT)H=t.RG16I;if(U===t.INT)H=t.RG32I}if(x===t.RGB_INTEGER){if(U===t.UNSIGNED_BYTE)H=t.RGB8UI;if(U===t.UNSIGNED_SHORT)H=t.RGB16UI;if(U===t.UNSIGNED_INT)H=t.RGB32UI;if(U===t.BYTE)H=t.RGB8I;if(U===t.SHORT)H=t.RGB16I;if(U===t.INT)H=t.RGB32I}if(x===t.RGBA_INTEGER){if(U===t.UNSIGNED_BYTE)H=t.RGBA8UI;if(U===t.UNSIGNED_SHORT)H=t.RGBA16UI;if(U===t.UNSIGNED_INT)H=t.RGBA32UI;if(U===t.BYTE)H=t.RGBA8I;if(U===t.SHORT)H=t.RGBA16I;if(U===t.INT)H=t.RGBA32I}if(x===t.RGB){if(U===t.UNSIGNED_SHORT&&ft)H=ft.RGB16_EXT;if(U===t.SHORT&&ft)H=ft.RGB16_SNORM_EXT;if(U===t.UNSIGNED_INT_5_9_9_9_REV)H=t.RGB9_E5;if(U===t.UNSIGNED_INT_10F_11F_11F_REV)H=t.R11F_G11F_B10F}if(x===t.RGBA){let J=ct?Fa:jt.getTransfer(tt);if(U===t.FLOAT)H=t.RGBA32F;if(U===t.HALF_FLOAT)H=t.RGBA16F;if(U===t.UNSIGNED_BYTE)H=J===he?t.SRGB8_ALPHA8:t.RGBA8;if(U===t.UNSIGNED_SHORT&&ft)H=ft.RGBA16_EXT;if(U===t.SHORT&&ft)H=ft.RGBA16_SNORM_EXT;if(U===t.UNSIGNED_SHORT_4_4_4_4)H=t.RGBA4;if(U===t.UNSIGNED_SHORT_5_5_5_1)H=t.RGB5_A1}if(H===t.R16F||H===t.R32F||H===t.RG16F||H===t.RG32F||H===t.RGBA16F||H===t.RGBA32F)e.get("EXT_color_buffer_float");return H}function p(b,x){let U;if(b){if(x===null||x===In||x===Xn)U=t.DEPTH24_STENCIL8;else if(x===_n)U=t.DEPTH32F_STENCIL8;else if(x===$i)U=t.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(x===null||x===In||x===Xn)U=t.DEPTH_COMPONENT24;else if(x===_n)U=t.DEPTH_COMPONENT32F;else if(x===$i)U=t.DEPTH_COMPONENT16;return U}function y(b,x){if(E(b)===!0||b.isFramebufferTexture&&b.minFilter!==Rn&&b.minFilter!==We)return Math.log2(Math.max(x.width,x.height))+1;else if(b.mipmaps.length>0)return b.mipmaps.length;else if(b.isCompressedTexture&&Array.isArray(b.image))return x.mipmaps.length;else return 1}function I(b){let x=new WeakRef(b);i.get(b).__ref=x,_.add(x),M.register(b,x,x)}function O(b){let x=i.get(b).__ref;if(x===void 0)return;_.delete(x),M.unregister(x)}function P(b){Q(b.target)}function G(b){w(b.target)}function Q(b){if(b.removeEventListener("dispose",P),O(b),q(b),b.isVideoTexture)h.delete(b);if(b.isHTMLTexture)d.delete(b)}function w(b){b.removeEventListener("dispose",G),O(b),rt(b)}function X(){for(let b of _){let x=b.deref();if(x===void 0)continue;if(x.isRenderTarget===!0)w(x);else Q(x)}_.clear(),d.clear()}function q(b){let x=i.get(b);if(x.__webglInit===void 0)return;let U=b.source,et=f.get(U);if(et){let tt=et[x.__cacheKey];if(tt.usedTimes--,tt.usedTimes===0)B(b);if(Object.keys(et).length===0)f.delete(U)}i.remove(b)}function B(b){let x=i.get(b);t.deleteTexture(x.__webglTexture);let U=b.source,et=f.get(U);delete et[x.__cacheKey],a.memory.textures--}function rt(b){let x=i.get(b);if(x.__depthDisposeCallback)x.__depthDisposeCallback();let U=b.depthTexture;if(U&&U.renderTarget===b)Q(U);if(b.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(x.__webglFramebuffer[tt]))for(let ct=0;ct<x.__webglFramebuffer[tt].length;ct++)t.deleteFramebuffer(x.__webglFramebuffer[tt][ct]);else t.deleteFramebuffer(x.__webglFramebuffer[tt]);if(x.__webglDepthbuffer)t.deleteRenderbuffer(x.__webglDepthbuffer[tt])}else{if(Array.isArray(x.__webglFramebuffer))for(let tt=0;tt<x.__webglFramebuffer.length;tt++)t.deleteFramebuffer(x.__webglFramebuffer[tt]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer)t.deleteRenderbuffer(x.__webglDepthbuffer);if(x.__webglMultisampledFramebuffer)t.deleteFramebuffer(x.__webglMultisampledFramebuffer);if(x.__webglColorRenderbuffer){for(let tt=0;tt<x.__webglColorRenderbuffer.length;tt++)if(x.__webglColorRenderbuffer[tt])t.deleteRenderbuffer(x.__webglColorRenderbuffer[tt])}if(x.__webglDepthRenderbuffer)t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let et=b.textures;for(let tt=0,ct=et.length;tt<ct;tt++){let ft=i.get(et[tt]);if(ft.__webglTexture)t.deleteTexture(ft.__webglTexture),a.memory.textures--;i.remove(et[tt])}i.remove(b)}let W=0;function K(){W=0}function nt(){return W}function bt(b){W=b}function Z(){let b=W;if(b>=s.maxTextures)zt("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures);return W+=1,b}function it(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.mipmapsAutoUpdate),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function Tt(b,x){let U=i.get(b);if(b.isVideoTexture)Ot(b);if(b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&U.__version!==b.version){let et=b.image;if(et===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(U,b,x);return}}else if(b.isExternalTexture)U.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+x)}function Nt(b,x){let U=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){Et(U,b,x);return}else if(b.isExternalTexture)U.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+x)}function Dt(b,x){let U=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){Et(U,b,x);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+x)}function St(b,x){let U=i.get(b);if(b.version>0&&U.__version!==b.version){Mt(U,b,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+x)}let ne={[$l]:t.REPEAT,[Ds]:t.CLAMP_TO_EDGE,[Kl]:t.MIRRORED_REPEAT},qt={[Rn]:t.NEAREST,[Ql]:t.NEAREST_MIPMAP_NEAREST,[Ji]:t.NEAREST_MIPMAP_LINEAR,[We]:t.LINEAR,[Us]:t.LINEAR_MIPMAP_NEAREST,[Cn]:t.LINEAR_MIPMAP_LINEAR},Bt={[lc]:t.NEVER,[za]:t.ALWAYS,[cc]:t.LESS,[Oa]:t.LEQUAL,[hc]:t.EQUAL,[Ba]:t.GEQUAL,[uc]:t.GREATER,[dc]:t.NOTEQUAL};function te(b,x){if(x.type===_n&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===We||x.magFilter===Us||x.magFilter===Ji||x.magFilter===Cn||x.minFilter===We||x.minFilter===Us||x.minFilter===Ji||x.minFilter===Cn))zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(b,t.TEXTURE_WRAP_S,ne[x.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,ne[x.wrapT]),b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)t.texParameteri(b,t.TEXTURE_WRAP_R,ne[x.wrapR]);if(t.texParameteri(b,t.TEXTURE_MAG_FILTER,qt[x.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,qt[x.minFilter]),x.compareFunction)t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Bt[x.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Rn)return;if(x.minFilter!==Ji&&x.minFilter!==Cn)return;if(x.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function j(b,x){let U=!1;if(b.__webglInit===void 0)b.__webglInit=!0,x.addEventListener("dispose",P),I(x);let et=x.source,tt=f.get(et);if(tt===void 0)tt={},f.set(et,tt);let ct=it(x);if(ct!==b.__cacheKey){if(tt[ct]===void 0)tt[ct]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0;tt[ct].usedTimes++;let ft=tt[b.__cacheKey];if(ft!==void 0){if(tt[b.__cacheKey].usedTimes--,ft.usedTimes===0)B(x)}b.__cacheKey=ct,b.__webglTexture=tt[ct].texture}return U}function at(b,x,U){return Math.floor(Math.floor(b/U)/x)}function ht(b,x,U,et){let ct=b.updateRanges;if(ct.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,U,et,x.data);else{ct.sort((C,Y)=>C.start-Y.start);let ft=0;for(let C=1;C<ct.length;C++){let Y=ct[ft],V=ct[C],st=Y.start+Y.count,ot=at(V.start,x.width,4),mt=at(Y.start,x.width,4);if(V.start<=st+1&&ot===mt&&at(V.start+V.count-1,x.width,4)===ot)Y.count=Math.max(Y.count,V.start+V.count-Y.start);else++ft,ct[ft]=V}ct.length=ft+1;let H=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),ut=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let C=0,Y=ct.length;C<Y;C++){let V=ct[C],st=Math.floor(V.start/4),ot=Math.ceil(V.count/4),mt=st%x.width,Lt=Math.floor(st/x.width),It=ot,xt=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,mt),n.pixelStorei(t.UNPACK_SKIP_ROWS,Lt),n.texSubImage2D(t.TEXTURE_2D,0,mt,Lt,It,1,U,et,x.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,H),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,ut)}}function Et(b,x,U){let et=t.TEXTURE_2D;if(x.isDataArrayTexture||x.isCompressedArrayTexture)et=t.TEXTURE_2D_ARRAY;if(x.isData3DTexture)et=t.TEXTURE_3D;let tt=j(b,x),ct=x.source;n.bindTexture(et,b.__webglTexture,t.TEXTURE0+U);let ft=i.get(ct);if(ct.version!==ft.__version||tt===!0){if(n.activeTexture(t.TEXTURE0+U),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let xt=jt.getPrimaries(jt.workingColorSpace),Ut=x.colorSpace===Yn?null:jt.getPrimaries(x.colorSpace),Xt=x.colorSpace===Yn||xt===Ut?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let J=T(x.image,!1,s.maxTextureSize);J=kt(x,J);let ut=r.convert(x.format,x.colorSpace),C=r.convert(x.type),Y=R(x.internalFormat,ut,C,x.normalized,x.colorSpace,x.isVideoTexture);te(et,x);let V,st=x.mipmaps,ot=x.isVideoTexture!==!0,mt=ft.__version===void 0||tt===!0,Lt=ct.dataReady,It=y(x,J);if(x.isDepthTexture){if(Y=p(x.format===Pn,x.type),mt)if(ot)n.texStorage2D(t.TEXTURE_2D,1,Y,J.width,J.height);else n.texImage2D(t.TEXTURE_2D,0,Y,J.width,J.height,0,ut,C,null)}else if(x.isDataTexture)if(st.length>0){if(ot&&mt)n.texStorage2D(t.TEXTURE_2D,It,Y,st[0].width,st[0].height);for(let xt=0,Ut=st.length;xt<Ut;xt++)if(V=st[xt],ot){if(Lt)n.texSubImage2D(t.TEXTURE_2D,xt,0,0,V.width,V.height,ut,C,V.data)}else n.texImage2D(t.TEXTURE_2D,xt,Y,V.width,V.height,0,ut,C,V.data);x.generateMipmaps=!1}else if(ot){if(mt)n.texStorage2D(t.TEXTURE_2D,It,Y,J.width,J.height);if(Lt)ht(x,J,ut,C)}else n.texImage2D(t.TEXTURE_2D,0,Y,J.width,J.height,0,ut,C,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){if(ot&&mt)n.texStorage3D(t.TEXTURE_2D_ARRAY,It,Y,st[0].width,st[0].height,J.depth);for(let xt=0,Ut=st.length;xt<Ut;xt++)if(V=st[xt],x.format!==xn)if(ut!==null)if(ot){if(Lt)if(x.layerUpdates.size>0){let Xt=To(V.width,V.height,x.format,x.type);for(let vt of x.layerUpdates){let le=V.data.subarray(vt*Xt/V.data.BYTES_PER_ELEMENT,(vt+1)*Xt/V.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,xt,0,0,vt,V.width,V.height,1,ut,le)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,xt,0,0,0,V.width,V.height,J.depth,ut,V.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,xt,Y,V.width,V.height,J.depth,0,V.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ot){if(Lt)n.texSubImage3D(t.TEXTURE_2D_ARRAY,xt,0,0,0,V.width,V.height,J.depth,ut,C,V.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,xt,Y,V.width,V.height,J.depth,0,ut,C,V.data);if(x.layerUpdates.size>0)x.clearLayerUpdates()}else{if(ot&&mt)n.texStorage2D(t.TEXTURE_2D,It,Y,st[0].width,st[0].height);for(let xt=0,Ut=st.length;xt<Ut;xt++)if(V=st[xt],x.format!==xn)if(ut!==null)if(ot){if(Lt)n.compressedTexSubImage2D(t.TEXTURE_2D,xt,0,0,V.width,V.height,ut,V.data)}else n.compressedTexImage2D(t.TEXTURE_2D,xt,Y,V.width,V.height,0,V.data);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ot){if(Lt)n.texSubImage2D(t.TEXTURE_2D,xt,0,0,V.width,V.height,ut,C,V.data)}else n.texImage2D(t.TEXTURE_2D,xt,Y,V.width,V.height,0,ut,C,V.data)}else if(x.isDataArrayTexture)if(ot){if(mt)n.texStorage3D(t.TEXTURE_2D_ARRAY,It,Y,J.width,J.height,J.depth);if(Lt)if(x.layerUpdates.size>0){let xt=To(J.width,J.height,x.format,x.type);for(let Ut of x.layerUpdates){let Xt=J.data.subarray(Ut*xt/J.data.BYTES_PER_ELEMENT,(Ut+1)*xt/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ut,J.width,J.height,1,ut,C,Xt)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ut,C,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Y,J.width,J.height,J.depth,0,ut,C,J.data);else if(x.isData3DTexture)if(ot){if(mt)n.texStorage3D(t.TEXTURE_3D,It,Y,J.width,J.height,J.depth);if(Lt)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ut,C,J.data)}else n.texImage3D(t.TEXTURE_3D,0,Y,J.width,J.height,J.depth,0,ut,C,J.data);else if(x.isFramebufferTexture){if(mt)if(ot)n.texStorage2D(t.TEXTURE_2D,It,Y,J.width,J.height);else{let xt=J.width,Ut=J.height;for(let Xt=0;Xt<It;Xt++)n.texImage2D(t.TEXTURE_2D,Xt,Y,xt,Ut,0,ut,C,null),xt>>=1,Ut>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){let xt=t.canvas;if(!xt.hasAttribute("layoutsubtree"))xt.setAttribute("layoutsubtree","true");if(J.parentNode!==xt){xt.appendChild(J),d.add(x),xt.onpaint=(Ut)=>{let Xt=Ut.changedElements;for(let vt of d)if(Xt.includes(vt.image))vt.needsUpdate=!0},xt.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{let{RGBA:Xt,RGBA:vt,UNSIGNED_BYTE:le}=t;t.texElementImage2D(t.TEXTURE_2D,0,Xt,vt,le,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(st.length>0){if(ot&&mt){let xt=ye(st[0]);n.texStorage2D(t.TEXTURE_2D,It,Y,xt.width,xt.height)}for(let xt=0,Ut=st.length;xt<Ut;xt++)if(V=st[xt],ot){if(Lt)n.texSubImage2D(t.TEXTURE_2D,xt,0,0,ut,C,V)}else n.texImage2D(t.TEXTURE_2D,xt,Y,ut,C,V);x.generateMipmaps=!1}else if(ot){if(mt){let xt=ye(J);n.texStorage2D(t.TEXTURE_2D,It,Y,xt.width,xt.height)}if(Lt)n.texSubImage2D(t.TEXTURE_2D,0,0,0,ut,C,J)}else n.texImage2D(t.TEXTURE_2D,0,Y,ut,C,J);if(E(x)&&x.mipmapsAutoUpdate===!0)S(et);if(ft.__version=ct.version,x.onUpdate)x.onUpdate(x)}b.__version=x.version}function Mt(b,x,U){if(x.image.length!==6)return;let et=j(b,x),tt=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+U);let ct=i.get(tt);if(tt.version!==ct.__version||et===!0){n.activeTexture(t.TEXTURE0+U);let ft=jt.getPrimaries(jt.workingColorSpace),H=x.colorSpace===Yn?null:jt.getPrimaries(x.colorSpace),J=x.colorSpace===Yn||ft===H?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ut=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,Y=[];for(let vt=0;vt<6;vt++){if(!ut&&!C)Y[vt]=T(x.image[vt],!0,s.maxCubemapSize);else Y[vt]=C?x.image[vt].image:x.image[vt];Y[vt]=kt(x,Y[vt])}let V=Y[0],st=r.convert(x.format,x.colorSpace),ot=r.convert(x.type),mt=R(x.internalFormat,st,ot,x.normalized,x.colorSpace),Lt=x.isVideoTexture!==!0,It=ct.__version===void 0||et===!0,xt=tt.dataReady,Ut=y(x,V);te(t.TEXTURE_CUBE_MAP,x);let Xt;if(x.isDepthTexture){if(mt=p(x.format===Pn,x.type),It)if(Lt)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,mt,V.width,V.height);else for(let vt=0;vt<6;vt++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,mt,V.width,V.height,0,st,ot,null)}else if(ut){if(Lt&&It)n.texStorage2D(t.TEXTURE_CUBE_MAP,Ut,mt,V.width,V.height);for(let vt=0;vt<6;vt++){Xt=Y[vt].mipmaps;for(let le=0;le<Xt.length;le++){let be=Xt[le];if(x.format!==xn)if(st!==null)if(Lt){if(xt)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le,0,0,be.width,be.height,st,be.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le,mt,be.width,be.height,0,be.data);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Lt){if(xt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le,0,0,be.width,be.height,st,ot,be.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le,mt,be.width,be.height,0,st,ot,be.data)}}}else{if(Xt=x.mipmaps,Lt&&It){if(Xt.length>0)Ut++;let vt=ye(Y[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ut,mt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(C){if(Lt){if(xt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Y[vt].width,Y[vt].height,st,ot,Y[vt].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,mt,Y[vt].width,Y[vt].height,0,st,ot,Y[vt].data);for(let le=0;le<Xt.length;le++){let ln=Xt[le].image[vt].image;if(Lt){if(xt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le+1,0,0,ln.width,ln.height,st,ot,ln.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le+1,mt,ln.width,ln.height,0,st,ot,ln.data)}}else{if(Lt){if(xt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,st,ot,Y[vt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,mt,st,ot,Y[vt]);for(let le=0;le<Xt.length;le++){let be=Xt[le];if(Lt){if(xt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le+1,0,0,st,ot,be.image[vt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le+1,mt,st,ot,be.image[vt])}}}if(E(x)&&x.mipmapsAutoUpdate===!0)S(t.TEXTURE_CUBE_MAP);if(ct.__version=tt.version,x.onUpdate)x.onUpdate(x)}b.__version=x.version}function Ft(b,x,U,et,tt,ct){let ft=r.convert(U.format,U.colorSpace),H=r.convert(U.type),J=R(U.internalFormat,ft,H,U.normalized,U.colorSpace),ut=i.get(x),C=i.get(U);if(C.__renderTarget=x,!ut.__hasExternalTextures){let Y=Math.max(1,x.width>>ct),V=Math.max(1,x.height>>ct);if(tt===t.TEXTURE_3D||tt===t.TEXTURE_2D_ARRAY)n.texImage3D(tt,ct,J,Y,V,x.depth,0,ft,H,null);else n.texImage2D(tt,ct,J,Y,V,0,ft,H,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,b),ae(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,et,tt,C.__webglTexture,0,gt(x));else if(tt===t.TEXTURE_2D||tt>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,et,tt,C.__webglTexture,ct);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pt(b,x,U){if(t.bindRenderbuffer(t.RENDERBUFFER,b),x.depthBuffer){let et=x.depthTexture,tt=et&&et.isDepthTexture?et.type:null,ct=p(x.stencilBuffer,tt),ft=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(ae(x))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,gt(x),ct,x.width,x.height);else if(U)t.renderbufferStorageMultisample(t.RENDERBUFFER,gt(x),ct,x.width,x.height);else t.renderbufferStorage(t.RENDERBUFFER,ct,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,ft,t.RENDERBUFFER,b)}else{let et=x.textures;for(let tt=0;tt<et.length;tt++){let ct=et[tt],ft=r.convert(ct.format,ct.colorSpace),H=r.convert(ct.type),J=R(ct.internalFormat,ft,H,ct.normalized,ct.colorSpace);if(ae(x))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,gt(x),J,x.width,x.height);else if(U)t.renderbufferStorageMultisample(t.RENDERBUFFER,gt(x),J,x.width,x.height);else t.renderbufferStorage(t.RENDERBUFFER,J,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Zt(b,x,U){let et=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(x.depthTexture);tt.__renderTarget=x;let ct=et?x.depthTexture.image[0]:x.depthTexture.image;if(!tt.__webglTexture||ct.width!==x.width||ct.height!==x.height)ct.width=x.width,ct.height=x.height,x.depthTexture.needsUpdate=!0;if(et)St(x.depthTexture,0);else Tt(x.depthTexture,0);let ft=tt.__webglTexture,H=gt(x),J=et?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,ut=x.depthTexture.format===Pn?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ei)if(ae(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ut,J,ft,0,H);else t.framebufferTexture2D(t.FRAMEBUFFER,ut,J,ft,0);else if(x.depthTexture.format===Pn)if(ae(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ut,J,ft,0,H);else t.framebufferTexture2D(t.FRAMEBUFFER,ut,J,ft,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Jt(b){let x=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let et=b.depthTexture;if(x.__depthDisposeCallback)x.__depthDisposeCallback();if(et){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,et.removeEventListener("dispose",tt)};et.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=et}if(b.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let et=0;et<6;et++)Zt(x.__webglFramebuffer[et],b,et);else if(b.texture.mipmaps.length>0)Zt(x.__webglFramebuffer[0],b,0);else Zt(x.__webglFramebuffer,b,0);else if(U){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]===void 0)x.__webglDepthbuffer[et]=t.createRenderbuffer(),Pt(x.__webglDepthbuffer[et],b,!1);else{let tt=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer[et];t.bindRenderbuffer(t.RENDERBUFFER,ct),t.framebufferRenderbuffer(t.FRAMEBUFFER,tt,t.RENDERBUFFER,ct)}}else{if(b.texture.mipmaps.length>0)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer);if(x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Pt(x.__webglDepthbuffer,b,!1);else{let tt=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ct),t.framebufferRenderbuffer(t.FRAMEBUFFER,tt,t.RENDERBUFFER,ct)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(b,x,U){let et=i.get(b);if(x!==void 0)Ft(et.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(U!==void 0)Jt(b)}function N(b){let x=b.texture,U=i.get(b),et=i.get(x);b.addEventListener("dispose",G),I(b);let tt=b.textures,ct=b.isWebGLCubeRenderTarget===!0,ft=tt.length>1;if(!ft){if(et.__webglTexture===void 0)et.__webglTexture=t.createTexture();et.__version=x.version,a.memory.textures++}if(ct){U.__webglFramebuffer=[];for(let H=0;H<6;H++)if(x.mipmaps.length>0){U.__webglFramebuffer[H]=[];for(let J=0;J<x.mipmaps.length;J++)U.__webglFramebuffer[H][J]=t.createFramebuffer()}else U.__webglFramebuffer[H]=t.createFramebuffer()}else{if(x.mipmaps.length>0){U.__webglFramebuffer=[];for(let H=0;H<x.mipmaps.length;H++)U.__webglFramebuffer[H]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ft)for(let H=0,J=tt.length;H<J;H++){let ut=i.get(tt[H]);if(ut.__webglTexture===void 0)ut.__webglTexture=t.createTexture(),a.memory.textures++}if(b.samples>0&&ae(b)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let H=0;H<tt.length;H++){let J=tt[H];U.__webglColorRenderbuffer[H]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[H]);let ut=r.convert(J.format,J.colorSpace),C=r.convert(J.type),Y=R(J.internalFormat,ut,C,J.normalized,J.colorSpace,b.isXRRenderTarget===!0),V=gt(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,V,Y,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.RENDERBUFFER,U.__webglColorRenderbuffer[H])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer)U.__webglDepthRenderbuffer=t.createRenderbuffer(),Pt(U.__webglDepthRenderbuffer,b,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ct){n.bindTexture(t.TEXTURE_CUBE_MAP,et.__webglTexture),te(t.TEXTURE_CUBE_MAP,x);for(let H=0;H<6;H++)if(x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Ft(U.__webglFramebuffer[H][J],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,J);else Ft(U.__webglFramebuffer[H],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);if(E(x))S(t.TEXTURE_CUBE_MAP);else if(x.mipmaps.length>0)t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,x.mipmaps.length-1);n.unbindTexture()}else if(ft){for(let H=0,J=tt.length;H<J;H++){let ut=tt[H],C=i.get(ut),Y=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)Y=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(Y,C.__webglTexture),te(Y,ut),Ft(U.__webglFramebuffer,b,ut,t.COLOR_ATTACHMENT0+H,Y,0),E(ut))S(Y)}n.unbindTexture()}else{let H=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)H=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(H,et.__webglTexture),te(H,x),x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Ft(U.__webglFramebuffer[J],b,x,t.COLOR_ATTACHMENT0,H,J);else Ft(U.__webglFramebuffer,b,x,t.COLOR_ATTACHMENT0,H,0);if(E(x))S(H);else if(x.mipmaps.length>0)t.texParameteri(H,t.TEXTURE_MAX_LEVEL,x.mipmaps.length-1);n.unbindTexture()}if(b.depthBuffer)Jt(b)}function ve(b){let x=b.textures;for(let U=0,et=x.length;U<et;U++){let tt=x[U];if(E(tt)&&tt.mipmapsAutoUpdate===!0){let ct=A(b),ft=i.get(tt).__webglTexture;n.bindTexture(ct,ft),S(ct),n.unbindTexture()}}}let Vt=[];function ge(b){if(b.samples>0){if(ae(b)===!1){let{textures:x,width:U,height:et}=b,tt=t.COLOR_BUFFER_BIT,ct=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ft=i.get(b),H=x.length>1;if(H)for(let ut=0;ut<x.length;ut++)n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ut,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ut,t.TEXTURE_2D,null,0);if(n.bindFramebuffer(t.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(b.resolveDepthBuffer){if(b.depthBuffer)tt|=t.DEPTH_BUFFER_BIT;if(b.stencilBuffer&&b.resolveStencilBuffer)tt|=t.STENCIL_BUFFER_BIT}if(H){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ft.__webglColorRenderbuffer[ut]);let C=i.get(x[ut]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,C,0)}if(t.blitFramebuffer(0,0,U,et,0,0,U,et,tt,t.NEAREST),l===!0){if(Vt.length=0,Vt.push(t.COLOR_ATTACHMENT0+ut),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1)Vt.push(ct);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Vt)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),H)for(let ut=0;ut<x.length;ut++){n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ut,t.RENDERBUFFER,ft.__webglColorRenderbuffer[ut]);let C=i.get(x[ut]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ut,t.TEXTURE_2D,C,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let x=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function gt(b){return Math.min(s.maxSamples,b.samples)}function ae(b){let x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ot(b){let x=a.render.frame;if(h.get(b)!==x)h.set(b,x),b.update()}function kt(b,x){let{colorSpace:U,format:et,type:tt}=b;if(b.isCompressedTexture===!0||b.isVideoTexture===!0)return x;if(U!==Ua&&U!==Yn)if(jt.getTransfer(U)===he){if(et!==xn||tt!==je)zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Gt("WebGLTextures: Unsupported texture color space:",U);return x}function ye(b){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement)c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height;else if(typeof VideoFrame<"u"&&b instanceof VideoFrame)c.width=b.displayWidth,c.height=b.displayHeight;else c.width=b.width,c.height=b.height;return c}this.allocateTextureUnit=Z,this.resetTextureUnits=K,this.getTextureUnits=nt,this.setTextureUnits=bt,this.setTexture2D=Tt,this.setTexture2DArray=Nt,this.setTexture3D=Dt,this.setTextureCube=St,this.rebindTextures=se,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=ae,this.dispose=X}function Ig(t,e){function n(i,s=Yn){let r,a=jt.getTransfer(s);if(i===je)return t.UNSIGNED_BYTE;if(i===jr)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ta)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ec)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===nc)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===jl)return t.BYTE;if(i===tc)return t.SHORT;if(i===$i)return t.UNSIGNED_SHORT;if(i===Qr)return t.INT;if(i===In)return t.UNSIGNED_INT;if(i===_n)return t.FLOAT;if(i===rn)return t.HALF_FLOAT;if(i===ic)return t.ALPHA;if(i===sc)return t.RGB;if(i===xn)return t.RGBA;if(i===Ei)return t.DEPTH_COMPONENT;if(i===Pn)return t.DEPTH_STENCIL;if(i===rc)return t.RED;if(i===ea)return t.RED_INTEGER;if(i===qn)return t.RG;if(i===na)return t.RG_INTEGER;if(i===ia)return t.RGBA_INTEGER;if(i===Fs||i===Os||i===Bs||i===zs)if(a===he)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Os)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sa||i===ra||i===aa||i===oa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===la||i===ca||i===ha||i===ua||i===da||i===Gs||i===fa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===la||i===ca)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ha)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ua)return r.COMPRESSED_R11_EAC;if(i===da)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Gs)return r.COMPRESSED_RG11_EAC;if(i===fa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===pa||i===ma||i===ga||i===_a||i===xa||i===va||i===ya||i===Sa||i===Ma||i===ba||i===Ea||i===Ta||i===Aa||i===wa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ma)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ga)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_a)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===va)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ya)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ma)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ba)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ea)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ta)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Aa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ra||i===Ca||i===Ia)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ra)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ia)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pa||i===La||i===ks||i===Na)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===La)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ks)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Xn)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var Pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lg=`
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

}`;class fh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new $s(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new Sn({vertexShader:Pg,fragmentShader:Lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new Kn(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ph extends vn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,h=null,d=null,u=null,f=null,_=typeof XRWebGLBinding<"u",M=new fh,m={},g=e.getContextAttributes(),T=null,E=null,S=[],A=[],R=new lt,p=null,y=null,I=new Fe;I.viewport=new me;let O=new Fe;O.viewport=new me;let P=[I,O],G=new Mo,Q=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=S[Z];if(it===void 0)it=new Qi,S[Z]=it;return it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=S[Z];if(it===void 0)it=new Qi,S[Z]=it;return it.getGripSpace()},this.getHand=function(Z){let it=S[Z];if(it===void 0)it=new Qi,S[Z]=it;return it.getHandSpace()};function X(Z){let it=A.indexOf(Z.inputSource);if(it===-1)return;let Tt=S[it];if(Tt!==void 0)Tt.update(Z.inputSource,Z.frame,l||r),Tt.dispatchEvent({type:Z.type,data:Z.inputSource})}function q(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",B);for(let Z=0;Z<S.length;Z++){let it=A[Z];if(it===null)continue;A[Z]=null,S[Z].disconnect(it)}Q=null,w=null,M.reset();for(let Z in m)delete m[Z];if(t.setRenderTarget(T),u=null,d=null,h=null,i=null,E=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(p),t.setSize(R.width,R.height,!1),y!==null){let Z=y.camera;Z.fov=y.fov,Z.zoom=y.zoom,Z.updateProjectionMatrix(),y=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){if(s=Z,n.isPresenting===!0)zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){if(a=Z,n.isPresenting===!0)zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){if(h===null&&_)h=new XRWebGLBinding(i,e);return h},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",q),i.addEventListener("inputsourceschange",B),g.xrCompatible!==!0)await e.makeXRCompatible();if(p=t.getPixelRatio(),t.getSize(R),!(_&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,Tt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),E=new Ve(u.framebufferWidth,u.framebufferHeight,{format:xn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Tt=null,Nt=null,Dt=null;if(g.depth)Dt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=g.stencil?Pn:Ei,Nt=g.stencil?Xn:In;let St={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(St),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Ve(d.textureWidth,d.textureHeight,{format:xn,type:je,depthTexture:new Ln(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),bt.setContext(i),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(Z){for(let it=0;it<Z.removed.length;it++){let Tt=Z.removed[it],Nt=A.indexOf(Tt);if(Nt>=0)A[Nt]=null,S[Nt].disconnect(Tt)}for(let it=0;it<Z.added.length;it++){let Tt=Z.added[it],Nt=A.indexOf(Tt);if(Nt===-1){for(let St=0;St<S.length;St++)if(St>=A.length){A.push(Tt),Nt=St;break}else if(A[St]===null){A[St]=Tt,Nt=St;break}if(Nt===-1)break}let Dt=S[Nt];if(Dt)Dt.connect(Tt)}}function rt(Z,it){if(it===null)Z.matrixWorld.copy(Z.matrix);else Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix);Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let{near:it,far:Tt}=Z;if(M.texture!==null){if(M.depthNear>0)it=M.depthNear;if(M.depthFar>0)Tt=M.depthFar}if(G.near=O.near=I.near=it,G.far=O.far=I.far=Tt,Q!==G.near||w!==G.far)i.updateRenderState({depthNear:G.near,depthFar:G.far}),Q=G.near,w=G.far;G.layers.mask=Z.layers.mask|6,I.layers.mask=G.layers.mask&-5,O.layers.mask=G.layers.mask&-3;let Nt=Z.parent,Dt=G.cameras;rt(G,Nt);for(let St=0;St<Dt.length;St++)rt(Dt[St],Nt);if(G.projectionMatrix.copy(I.projectionMatrix),G.projectionMatrixInverse.copy(I.projectionMatrixInverse),y===null&&Z.isPerspectiveCamera)y={camera:Z,fov:Z.fov,zoom:Z.zoom};W(Z,G,Nt)};function W(Z,it,Tt){if(Tt===null)Z.matrix.copy(it.matrixWorld);else Z.matrix.copy(Tt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld);if(Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera)Z.fov=xi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1}this.getCamera=function(){return G},this.getFoveation=function(){if(d===null&&u===null)return;return o},this.setFoveation=function(Z){if(o=Z,d!==null)d.fixedFoveation=Z;if(u!==null&&u.fixedFoveation!==void 0)u.fixedFoveation=Z},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(G)},this.getCameraTexture=function(Z){return m[Z]};let K=null;function nt(Z,it){if(c=it.getViewerPose(l||r),f=it,c!==null){let Tt=c.views;if(u!==null)t.setRenderTargetFramebuffer(E,u.framebuffer),t.setRenderTarget(E);let Nt=!1;if(Tt.length!==G.cameras.length)G.cameras.length=0,Nt=!0;for(let qt=0;qt<Tt.length;qt++){let Bt=Tt[qt],te=null;if(u!==null)te=u.getViewport(Bt);else{let at=h.getViewSubImage(d,Bt);if(te=at.viewport,qt===0)t.setRenderTargetTextures(E,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(E)}let j=P[qt];if(j===void 0)j=new Fe,j.layers.enable(qt),j.viewport=new me,P[qt]=j;if(j.matrix.fromArray(Bt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Bt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(te.x,te.y,te.width,te.height),qt===0)G.matrix.copy(j.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);if(Nt===!0)G.cameras.push(j)}let Dt=i.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let qt=h.getDepthInformation(Tt[0]);if(qt&&qt.isValid&&qt.texture)M.init(qt,i.renderState)}if(Dt&&Dt.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let qt=0;qt<Tt.length;qt++){let Bt=Tt[qt].camera;if(Bt){let te=m[Bt];if(!te)te=new $s,m[Bt]=te;let j=h.getCameraImage(Bt);te.sourceTexture=j}}}}for(let Tt=0;Tt<S.length;Tt++){let Nt=A[Tt],Dt=S[Tt];if(Nt!==null&&Dt!==void 0)Dt.update(Nt,it,l||r)}if(K)K(Z,it);if(it.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:it});f=null}let bt=new Qc;bt.setAnimationLoop(nt),this.setAnimationLoop=function(Z){K=Z},this.dispose=function(){}}}var Ng=new de,mh=new Ht;mh.set(-1,0,0,0,1,0,0,0,1);function Dg(t,e){function n(m,g){if(m.matrixAutoUpdate===!0)m.updateMatrix();g.value.copy(m.matrix)}function i(m,g){if(g.color.getRGB(m.fogColor.value,ro(t)),g.isFog)m.fogNear.value=g.near,m.fogFar.value=g.far;else if(g.isFogExp2)m.fogDensity.value=g.density}function s(m,g,T,E,S){if(g.isNodeMaterial)g.uniformsNeedUpdate=!1;else if(g.isMeshBasicMaterial)r(m,g);else if(g.isMeshLambertMaterial){if(r(m,g),g.envMap)m.envMapIntensity.value=g.envMapIntensity}else if(g.isMeshToonMaterial)r(m,g),d(m,g);else if(g.isMeshPhongMaterial){if(r(m,g),h(m,g),g.envMap)m.envMapIntensity.value=g.envMapIntensity}else if(g.isMeshStandardMaterial){if(r(m,g),u(m,g),g.isMeshPhysicalMaterial)f(m,g,S)}else if(g.isMeshMatcapMaterial)r(m,g),_(m,g);else if(g.isMeshDepthMaterial)r(m,g);else if(g.isMeshDistanceMaterial)r(m,g),M(m,g);else if(g.isMeshNormalMaterial)r(m,g);else if(g.isLineBasicMaterial){if(a(m,g),g.isLineDashedMaterial)o(m,g)}else if(g.isPointsMaterial)l(m,g,T,E);else if(g.isSpriteMaterial)c(m,g);else if(g.isShadowMaterial)m.color.value.copy(g.color),m.opacity.value=g.opacity;else if(g.isShaderMaterial)g.uniformsNeedUpdate=!1}function r(m,g){if(m.opacity.value=g.opacity,g.color)m.diffuse.value.copy(g.color);if(g.emissive)m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity);if(g.map)m.map.value=g.map,n(g.map,m.mapTransform);if(g.alphaMap)m.alphaMap.value=g.alphaMap,n(g.alphaMap,m.alphaMapTransform);if(g.bumpMap){if(m.bumpMap.value=g.bumpMap,n(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Be)m.bumpScale.value*=-1}if(g.normalMap){if(m.normalMap.value=g.normalMap,n(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Be)m.normalScale.value.negate()}if(g.displacementMap)m.displacementMap.value=g.displacementMap,n(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias;if(g.emissiveMap)m.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,m.emissiveMapTransform);if(g.specularMap)m.specularMap.value=g.specularMap,n(g.specularMap,m.specularMapTransform);if(g.alphaTest>0)m.alphaTest.value=g.alphaTest;let T=e.get(g),{envMap:E,envMapRotation:S}=T;if(E){if(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(mh);m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio}if(g.lightMap)m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,m.lightMapTransform);if(g.aoMap)m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,m.aoMapTransform)}function a(m,g){if(m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map)m.map.value=g.map,n(g.map,m.mapTransform)}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,T,E){if(m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*T,m.scale.value=E*0.5,g.map)m.map.value=g.map,n(g.map,m.uvTransform);if(g.alphaMap)m.alphaMap.value=g.alphaMap,n(g.alphaMap,m.alphaMapTransform);if(g.alphaTest>0)m.alphaTest.value=g.alphaTest}function c(m,g){if(m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map)m.map.value=g.map,n(g.map,m.mapTransform);if(g.alphaMap)m.alphaMap.value=g.alphaMap,n(g.alphaMap,m.alphaMapTransform);if(g.alphaTest>0)m.alphaTest.value=g.alphaTest}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,0.0001)}function d(m,g){if(g.gradientMap)m.gradientMap.value=g.gradientMap}function u(m,g){if(m.metalness.value=g.metalness,g.metalnessMap)m.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=g.roughness,g.roughnessMap)m.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,m.roughnessMapTransform);if(g.envMap)m.envMapIntensity.value=g.envMapIntensity}function f(m,g,T){if(m.ior.value=g.ior,g.diffuseRoughness>0){if(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap)m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,n(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform)}if(g.sheen>0){if(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap)m.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,m.sheenColorMapTransform);if(g.sheenRoughnessMap)m.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(g.clearcoat>0){if(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap)m.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,m.clearcoatMapTransform);if(g.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(g.clearcoatNormalMap){if(m.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Be)m.clearcoatNormalScale.value.negate()}}if(g.dispersion>0)m.dispersion.value=g.dispersion;if(g.retroreflectivity>0)m.retroreflectivity.value=g.retroreflectivity;if(g.iridescence>0){if(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap)m.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,m.iridescenceMapTransform);if(g.iridescenceThicknessMap)m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(g.transmission>0){if(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap)m.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=g.thickness,g.thicknessMap)m.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)}if(g.anisotropy>0){if(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap)m.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap)m.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,m.specularColorMapTransform);if(g.specularIntensityMap)m.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,m.specularIntensityMapTransform)}function _(m,g){if(g.matcap)m.matcap.value=g.matcap}function M(m,g){let T=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ug(t,e,n,i){let s={},r={};function a(T,E){let S=E.program;i.uniformBlockBinding(T,S,s[T.id])}function o(T,E){let S=s[T.id];if(S===void 0)_(T),S=l(T),s[T.id]=S,T.addEventListener("dispose",m);let A=E.program;i.updateUBOMapping(T,A);let R=e.render.frame;if(r[T.id]!==R)c(T),r[T.id]=R}function l(T){let E=t.createBuffer(),{__size:S,usage:A}=T;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,S,A),t.bindBuffer(t.UNIFORM_BUFFER,null),E}function c(T){let E=s[T.id],{uniforms:S,__cache:A}=T;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let R=0,p=S.length;R<p;R++){let y=S[R];if(Array.isArray(y))for(let I=0,O=y.length;I<O;I++)h(y[I],R,I,A);else h(y,R,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(T,E,S,A){if(u(T,E,S,A)===!0){let{__offset:R,value:p}=T;if(Array.isArray(p)){let y=0;for(let I=0;I<p.length;I++){let O=p[I],P=M(O,!0);d(O,T.__data,y),y+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(p,T.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,R,T.__data)}}function d(T,E,S){if(typeof T==="number"||typeof T==="boolean")E[S]=T;else if(T.isMatrix3)E[S]=T.elements[0],E[S+1]=T.elements[1],E[S+2]=T.elements[2],E[S+3]=0,E[S+4]=T.elements[3],E[S+5]=T.elements[4],E[S+6]=T.elements[5],E[S+7]=0,E[S+8]=T.elements[6],E[S+9]=T.elements[7],E[S+10]=T.elements[8],E[S+11]=0;else if(ArrayBuffer.isView(T))E.set(T.subarray(0,E.length-S),S);else T.toArray(E,S)}function u(T,E,S,A){let R=T.value,p=E+"_"+S;if(Array.isArray(R)){if(A[p]===void 0)A[p]=[];let y=A[p],I=!1;for(let O=0;O<R.length;O++)if(f(R[O],y,O)===!0)I=!0;return I}return f(R,A,p)}function f(T,E,S){if(E[S]===void 0){if(typeof T==="number"||typeof T==="boolean")E[S]=T;else if(ArrayBuffer.isView(T))E[S]=T.slice();else E[S]=T.clone();return!0}else{let A=E[S];if(typeof T==="number"||typeof T==="boolean"){if(A!==T)return E[S]=T,!0}else if(ArrayBuffer.isView(T))return!0;else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function _(T){let E=T.uniforms,S=0,A=16;for(let p=0,y=E.length;p<y;p++){let I=Array.isArray(E[p])?E[p]:[E[p]];for(let O=0,P=I.length;O<P;O++){let G=I[O],Q=Array.isArray(G.value)?G.value:[G.value],w=Array.isArray(E[p])||Array.isArray(G.value),X=S;for(let B=0,rt=Q.length;B<rt;B++){let W=Q[B],K=M(W,w),nt=S%A,bt=nt%K.boundary,Z=nt+bt;if(S+=bt,Z!==0&&A-Z<K.storage)S+=A-Z;if(B===0)X=S;S+=K.storage}let q=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new q((S-X)/Float32Array.BYTES_PER_ELEMENT),G.__offset=X}}let R=S%A;if(R>0)S+=A-R;return T.__size=S,T.__cache={},this}function M(T,E){let S={boundary:0,storage:0};if(typeof T==="number"||typeof T==="boolean")S.boundary=4,S.storage=4;else if(T.isVector2)S.boundary=8,S.storage=8;else if(T.isVector3||T.isColor)S.boundary=16,S.storage=12;else if(T.isVector4)S.boundary=16,S.storage=16;else if(T.isMatrix3)S.boundary=16,S.storage=48;else if(T.isMatrix4)S.boundary=16,S.storage=64;else if(T.isTexture)zt("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(T))S.boundary=16,S.storage=T.byteLength;else zt("WebGLRenderer: Unsupported uniform value type.",T);if(E===!0)S.boundary=16,S.storage=Math.ceil(S.storage/16)*16;return S}function m(T){let E=T.target;E.removeEventListener("dispose",m),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(let T in s)t.deleteBuffer(s[T]);s={},r={}}return{bind:a,update:o,dispose:g}}var Fg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),an=null;function Og(){if(an===null)an=new Ka(Fg,16,16,qn,rn),an.name="DFG_LUT",an.minFilter=We,an.magFilter=We,an.wrapS=Ds,an.wrapT=Ds,an.generateMipmaps=!1,an.needsUpdate=!0;return an}class Co{constructor(t={}){let{canvas:e=fc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=je}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let _=u,M=new Set([ia,na,ea]),m=new Set([je,In,$i,Xn,jr,ta]),g=new Uint32Array(4),T=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},S=null,A=null,R=[],p=[],y=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,O=!1,P=null,G=null,Q=null,w=null;this._outputColorSpace=oc;let X=0,q=0,B=null,rt=-1,W=null,K=new me,nt=new me,bt=null,Z=new ee(0),it=0,{width:Tt,height:Nt}=e,Dt=1,St=null,ne=null,qt=new me(0,0,Tt,Nt),Bt=new me(0,0,Tt,Nt),te=!1,j=new Hn,at=new Ys,ht=!1,Et=!1,Mt=new de,Ft=new D,Pt=new me,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function se(){return B===null?Dt:1}let N=n;function ve(v,L){return e.getContext(v,L)}let Vt,ge,gt,ae,Ot,kt,ye,b,x,U,et,tt,ct,ft,H,J,ut,C,Y,V,st,ot,mt;try{let v={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${gl}`);if(e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",Xt,!1),N===null){if(N=ve("webgl2",v),N===null)if(ve("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(v){throw e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",Xt,!1),Gt("WebGLRenderer: "+v.message),v}function Lt(){if(Vt=new Zp(N),Vt.init(),st=new Ig(N,Vt),ge=new Op(N,Vt,t,st),gt=new Rg(N,Vt),ge.reversedDepthBuffer&&d)gt.buffers.depth.setReversed(!0);G=N.createFramebuffer(),Q=N.createFramebuffer(),w=N.createFramebuffer(),ae=new Kp(N),Ot=new pg,kt=new Cg(N,Vt,gt,Ot,ge,st,ae),ye=new Yp(I),b=new Qu(N),ot=new Up(N,b),x=new Jp(N,b,ae,ot),U=new jp(N,x,b,ot,ae),C=new Qp(N,ge,kt),H=new Bp(Ot),et=new fg(I,ye,Vt,ge,ot,H),tt=new Dg(I,Ot),ct=new gg,ft=new Mg(Vt),ut=new Dp(I,ye,gt,U,f,o),J=new wg(I,U,ge),mt=new Ug(N,ae,ge,gt),Y=new Fp(N,Vt,ae),V=new $p(N,Vt,ae),ae.programs=et.programs,I.capabilities=ge,I.extensions=Vt,I.properties=Ot,I.renderLists=ct,I.shadowMap=J,I.state=gt,I.info=ae}if(_!==je)y=new em(_,e.width,e.height,a,i,s);let It=new ph(I,N);this.xr=It,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=Vt.get("WEBGL_lose_context");if(v)v.loseContext()},this.forceContextRestore=function(){let v=Vt.get("WEBGL_lose_context");if(v)v.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(v){if(v===void 0)return;Dt=v,this.setSize(Tt,Nt,!1)},this.getSize=function(v){return v.set(Tt,Nt)},this.setSize=function(v,L,k=!0){if(It.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Tt=v,Nt=L,e.width=Math.floor(v*Dt),e.height=Math.floor(L*Dt),k===!0)e.style.width=v+"px",e.style.height=L+"px";if(y!==null)y.setSize(e.width,e.height);this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(Tt*Dt,Nt*Dt).floor()},this.setDrawingBufferSize=function(v,L,k){Tt=v,Nt=L,Dt=k,e.width=Math.floor(v*k),e.height=Math.floor(L*k),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(_===je){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(K)},this.getViewport=function(v){return v.copy(qt)},this.setViewport=function(v,L,k,F){if(v.isVector4)qt.set(v.x,v.y,v.z,v.w);else qt.set(v,L,k,F);gt.viewport(K.copy(qt).multiplyScalar(se()).round())},this.getScissor=function(v){return v.copy(Bt)},this.setScissor=function(v,L,k,F){if(v.isVector4)Bt.set(v.x,v.y,v.z,v.w);else Bt.set(v,L,k,F);gt.scissor(nt.copy(Bt).multiplyScalar(se()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(v){gt.setScissorTest(te=v)},this.setOpaqueSort=function(v){St=v},this.setTransparentSort=function(v){ne=v},this.getClearColor=function(v){return v.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,k=!0){let F=0;if(v){let z=!1;if(B!==null){let pt=B.texture.format;z=M.has(pt)}if(z){let pt=B.texture.type,At=m.has(pt),dt=ut.getClearColor(),yt=ut.getClearAlpha(),{r:Ct,g:Wt,b:Kt}=dt;if(At)g[0]=Ct,g[1]=Wt,g[2]=Kt,g[3]=yt,N.clearBufferuiv(N.COLOR,0,g);else T[0]=Ct,T[1]=Wt,T[2]=Kt,T[3]=yt,N.clearBufferiv(N.COLOR,0,T)}else F|=N.COLOR_BUFFER_BIT}if(L)F|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(k)F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(F!==0)N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),P=v},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",Xt,!1),ut.dispose(),ct.dispose(),ft.dispose(),kt.dispose(),Ot.dispose(),ye.dispose(),U.dispose(),x.dispose(),ot.dispose(),mt.dispose(),et.dispose(),It.dispose(),It.removeEventListener("sessionstart",Io),It.removeEventListener("sessionend",Po),Dn.stop()};function xt(v){v.preventDefault(),Ha("WebGLRenderer: Context Lost."),O=!0}function Ut(){Ha("WebGLRenderer: Context Restored."),O=!1;let v=ae.autoReset,L=J.enabled,k=J.autoUpdate,F=J.needsUpdate,z=J.type;Lt(),ae.autoReset=v,J.enabled=L,J.autoUpdate=k,J.needsUpdate=F,J.type=z}function Xt(v){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function vt(v){let L=v.target;L.removeEventListener("dispose",vt),le(L)}function le(v){be(v),Ot.remove(v)}function be(v){let L=Ot.get(v).programs;if(L!==void 0){if(L.forEach(function(k){et.releaseProgram(k)}),v.isShaderMaterial)et.releaseShaderCache(v)}}this.renderBufferDirect=function(v,L,k,F,z,pt){if(L===null)L=Zt;let At=z.isMesh&&z.matrixWorld.determinantAffine()<0,dt=Mh(v,L,k,F,z);gt.setMaterial(F,At);let yt=k.index,Ct=1;if(F.wireframe===!0){if(yt=x.getWireframeAttribute(k),yt===void 0)return;Ct=2}let Wt=k.drawRange,Kt=k.attributes.position,wt=Wt.start*Ct,Qt=(Wt.start+Wt.count)*Ct;if(pt!==null)wt=Math.max(wt,pt.start*Ct),Qt=Math.min(Qt,(pt.start+pt.count)*Ct);if(yt!==null)wt=Math.max(wt,0),Qt=Math.min(Qt,yt.count);else if(Kt!==void 0&&Kt!==null)wt=Math.max(wt,0),Qt=Math.min(Qt,Kt.count);let _e=Qt-wt;if(_e<0||_e===1/0)return;ot.setup(z,F,dt,k,yt);let ue,ce=Y;if(yt!==null)ue=b.get(yt),ce=V,ce.setIndex(ue);if(z.isMesh)if(F.wireframe===!0)gt.setLineWidth(F.wireframeLinewidth*se()),ce.setMode(N.LINES);else ce.setMode(N.TRIANGLES);else if(z.isLine){let Ce=F.linewidth;if(Ce===void 0)Ce=1;if(gt.setLineWidth(Ce*se()),z.isLineSegments)ce.setMode(N.LINES);else if(z.isLineLoop)ce.setMode(N.LINE_LOOP);else ce.setMode(N.LINE_STRIP)}else if(z.isPoints)ce.setMode(N.POINTS);else if(z.isSprite)ce.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(!Vt.get("WEBGL_multi_draw")){let{_multiDrawStarts:Ce,_multiDrawCounts:Rt,_multiDrawCount:Ue}=z,re=yt?b.get(yt).bytesPerElement:1,Un=Ot.get(F).currentProgram.getUniforms();for(let Ie=0;Ie<Ue;Ie++)Un.setValue(N,"_gl_DrawID",Ie),ce.render(Ce[Ie]/re,Rt[Ie])}else ce.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ce.renderInstances(wt,_e,z.count);else if(k.isInstancedBufferGeometry){let Ce=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Rt=Math.min(k.instanceCount,Ce);ce.renderInstances(wt,_e,Rt)}else ce.render(wt,_e)};function ln(v,L,k,F){if(P!==null&&v.isNodeMaterial)P.setObject(F,v);if(ht===!0)H.setState(v,k,!1);if(v.transparent===!0&&v.side===nn&&v.forceSinglePass===!1)v.side=Be,v.needsUpdate=!0,Pi(v,L,F),v.side=Si,v.needsUpdate=!0,Pi(v,L,F),v.side=nn;else Pi(v,L,F)}this.compile=function(v,L,k=null){if(k===null)k=v;if(P!==null)P.renderStart(v,L,k);if(A=ft.get(k),A.init(L),p.push(A),k.traverseVisible(function(z){if(z.isLight&&z.layers.test(L.layers)){if(A.pushLight(z),z.castShadow)A.pushShadow(z)}}),v!==k)v.traverseVisible(function(z){if(z.isLight&&z.layers.test(L.layers)){if(A.pushLight(z),z.castShadow)A.pushShadow(z)}});if(A.setupLights(),P!==null)P.updateLights(A.state.lightsArray);if(Et=this.localClippingEnabled,ht=H.init(this.clippingPlanes,Et),ht===!0)H.setGlobalState(this.clippingPlanes,L);if(P!==null)J.render(A.state.shadowsArray,k,L);let F=new Set;if(v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let pt=z.material;if(pt)if(Array.isArray(pt))for(let At=0;At<pt.length;At++){let dt=pt[At];ln(dt,k,L,z),F.add(dt)}else ln(pt,k,L,z),F.add(pt)}),A=p.pop(),P!==null)P.renderEnd();return F},this.compileAsync=function(v,L,k=null){let F=this.compile(v,L,k);return new Promise((z)=>{function pt(){if(F.forEach(function(At){let yt=Ot.get(At).currentProgram;if(yt===void 0||yt.isReady())F.delete(At)}),F.size===0){z(v);return}setTimeout(pt,10)}if(Vt.get("KHR_parallel_shader_compile")!==null)pt();else setTimeout(pt,10)})};let dr=null;function yh(v){if(dr)dr(v)}function Io(){Dn.stop()}function Po(){Dn.start()}let Dn=new Qc;if(Dn.setAnimationLoop(yh),typeof self<"u")Dn.setContext(self);this.setAnimationLoop=function(v){dr=v,It.setAnimationLoop(v),v===null?Dn.stop():Dn.start()},It.addEventListener("sessionstart",Io),It.addEventListener("sessionend",Po),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(P!==null)P.renderStart(v,L);let k=It.enabled===!0&&It.isPresenting===!0,F=y!==null&&(B===null||k)&&y.begin(I,B);if(v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(L.parent===null&&L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(It.enabled===!0&&It.isPresenting===!0&&(y===null||y.isCompositing()===!1)){if(It.cameraAutoUpdate===!0)It.updateCamera(L);L=It.getCamera()}if(v.isScene===!0)v.onBeforeRender(I,v,L,B);if(A=ft.get(v,p.length),A.init(L),A.state.textureUnits=kt.getTextureUnits(),p.push(A),Mt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera)at.setFromArrayCamera(L);else j.setFromProjectionMatrix(Mt,ka,L.reversedDepth);if(Et=this.localClippingEnabled,ht=H.init(this.clippingPlanes,Et),S=ct.get(v,R.length),S.init(),R.push(S),this.info.render.frame++,It.enabled===!0&&It.isPresenting===!0){let At=I.xr.getDepthSensingMesh();if(At!==null)fr(At,L,-1/0,I.sortObjects)}if(fr(v,L,0,I.sortObjects),S.finish(),P!==null)P.updateLights(A.state.lightsArray);if(I.sortObjects===!0)S.sort(St,ne);if(Jt=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Jt)ut.addToRenderList(S,v);if(this.info.autoReset===!0)this.info.reset();if(ht===!0)H.beginShadows();let z=A.state.shadowsArray;if(J.render(z,v,L),ht===!0)H.endShadows();if((F&&y.hasRenderPass())===!1){let At=S.opaque,dt=S.transmissive;if(A.setupLights(),L.isArrayCamera){let yt=L.cameras;if(dt.length>0)for(let Ct=0,Wt=yt.length;Ct<Wt;Ct++){let Kt=yt[Ct];No(At,dt,v,Kt)}if(Jt)ut.render(v);for(let Ct=0,Wt=yt.length;Ct<Wt;Ct++){let Kt=yt[Ct];Lo(S,v,Kt,Kt.viewport)}}else{if(dt.length>0)No(At,dt,v,L);if(Jt)ut.render(v);Lo(S,v,L)}}if(B!==null&&q===0)kt.updateMultisampleRenderTarget(B),kt.updateRenderTargetMipmap(B);if(F)y.end(I);if(v.isScene===!0)v.onAfterRender(I,v,L);if(ot.resetDefaultState(),rt=-1,W=null,p.pop(),p.length>0){if(A=p[p.length-1],kt.setTextureUnits(A.state.textureUnits),ht===!0)H.setGlobalState(I.clippingPlanes,A.state.camera)}else A=null;if(R.pop(),R.length>0)S=R[R.length-1];else S=null;if(P!==null)P.renderEnd()};function fr(v,L,k,F){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD){if(v.autoUpdate===!0)v.update(L)}else if(v.isLight){if(A.pushLight(v),v.castShadow)A.pushShadow(v)}else if(v.isSprite){let At=L.isArrayCamera?at:j;if(!v.frustumCulled||v.intersectsFrustum(At)){if(F)Pt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Mt);let dt=U.update(v),yt=v.material;if(yt.visible)S.push(v,dt,yt,k,Pt.z,null,L)}}else if(v.isMesh||v.isLine||v.isPoints){let At=L.isArrayCamera?at:j;if(!v.frustumCulled||v.intersectsFrustum(At)){let dt=U.update(v),yt=v.material;if(F){if(v.boundingSphere!==void 0){if(v.boundingSphere===null)v.computeBoundingSphere();Pt.copy(v.boundingSphere.center)}else{if(dt.boundingSphere===null)dt.computeBoundingSphere();Pt.copy(dt.boundingSphere.center)}Pt.applyMatrix4(v.matrixWorld).applyMatrix4(Mt)}if(Array.isArray(yt)){let Ct=dt.groups;for(let Wt=0,Kt=Ct.length;Wt<Kt;Wt++){let wt=Ct[Wt],Qt=yt[wt.materialIndex];if(Qt&&Qt.visible)S.push(v,dt,Qt,k,Pt.z,wt,L)}}else if(yt.visible)S.push(v,dt,yt,k,Pt.z,null,L)}}}let pt=v.children;for(let At=0,dt=pt.length;At<dt;At++)fr(pt[At],L,k,F)}function Lo(v,L,k,F){let{opaque:z,transmissive:pt,transparent:At}=v;if(A.setupLightsView(k),ht===!0)H.setGlobalState(I.clippingPlanes,k);if(F)gt.viewport(K.copy(F));if(z.length>0)os(z,L,k);if(pt.length>0)os(pt,L,k);if(At.length>0)os(At,L,k);gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function No(v,L,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[F.id]===void 0){let wt=Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[F.id]=new Ve(1,1,{generateMipmaps:!0,type:wt?rn:je,minFilter:Cn,samples:Math.max(4,ge.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}let pt=A.state.transmissionRenderTarget[F.id],At=F.viewport||K;pt.setSize(At.z*I.transmissionResolutionScale,At.w*I.transmissionResolutionScale);let dt=I.getRenderTarget(),yt=I.getActiveCubeFace(),Ct=I.getActiveMipmapLevel();if(I.setRenderTarget(pt),I.getClearColor(Z),it=I.getClearAlpha(),it<1)I.setClearColor(16777215,0.5);if(I.clear(),Jt)ut.render(k);let Wt=I.toneMapping;I.toneMapping=sn;let Kt=F.viewport;if(F.viewport!==void 0)F.viewport=void 0;if(A.setupLightsView(F),ht===!0)H.setGlobalState(I.clippingPlanes,F);if(os(v,k,F),kt.updateMultisampleRenderTarget(pt),kt.updateRenderTargetMipmap(pt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Qt=0,_e=L.length;Qt<_e;Qt++){let ue=L[Qt],{object:ce,geometry:Ce,material:Rt,group:Ue}=ue;if(Rt.side===nn&&ce.layers.test(F.layers)){let re=Rt.side;Rt.side=Be,Rt.needsUpdate=!0,Do(ce,k,F,Ce,Rt,Ue),Rt.side=re,Rt.needsUpdate=!0,wt=!0}}if(wt===!0)kt.updateMultisampleRenderTarget(pt),kt.updateRenderTargetMipmap(pt)}if(I.setRenderTarget(dt,yt,Ct),I.setClearColor(Z,it),Kt!==void 0)F.viewport=Kt;I.toneMapping=Wt}function os(v,L,k){let F=L.isScene===!0?L.overrideMaterial:null;for(let z=0,pt=v.length;z<pt;z++){let At=v[z],{object:dt,geometry:yt,group:Ct}=At,Wt=At.material;if(Wt.allowOverride===!0&&F!==null)Wt=F;if(dt.layers.test(k.layers))Do(dt,L,k,yt,Wt,Ct)}}function Do(v,L,k,F,z,pt){if(P!==null&&z.isNodeMaterial)P.setObject(v,z);if(v.onBeforeRender(I,L,k,F,z,pt),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(I,L,k,F,v,pt),z.transparent===!0&&z.side===nn&&z.forceSinglePass===!1)z.side=Be,z.needsUpdate=!0,I.renderBufferDirect(k,L,F,z,v,pt),z.side=Si,z.needsUpdate=!0,I.renderBufferDirect(k,L,F,z,v,pt),z.side=nn;else I.renderBufferDirect(k,L,F,z,v,pt);v.onAfterRender(I,L,k,F,z,pt)}function Uo(v){let L=0;for(let k of v)if(k.texture!==null)L++;return L}function Pi(v,L,k){if(L.isScene!==!0)L=Zt;let F=Ot.get(v),z=A.state.lights,pt=A.state.shadowsArray,At=z.state.version,dt=et.getParameters(v,z.state,pt,L,k,A.state.lightProbeGridArray),yt=et.getProgramCacheKey(dt),Ct=F.programs;F.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,F.fog=L.fog;let Wt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;if(F.envMap=ye.get(v.envMap||F.environment,Wt),F.envMapRotation=F.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Ct===void 0)v.addEventListener("dispose",vt),Ct=new Map,F.programs=Ct,F.programVariants=new Map;let Kt=Ct.get(yt);if(Kt!==void 0){if(F.currentProgram===Kt&&F.lightsStateVersion===At)return Oo(v,dt),Kt}else{if(dt.uniforms=et.getUniforms(v),P!==null&&v.isNodeMaterial)P.build(v,k,dt);v.onBeforeCompile(dt,I),Kt=et.acquireProgram(dt,yt),Ct.set(yt,Kt),F.uniforms=dt.uniforms}let wt=F.uniforms;if(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)wt.clippingPlanes=H.uniform;if(Oo(v,dt),F.needsLights=Eh(v),F.lightsStateVersion=At,F.needsLights)wt.ambientLightColor.value=z.state.ambient,wt.lightProbe.value=z.state.probe,wt.sunLights.value=z.state.sun,wt.sunLightShadows.value=z.state.sunShadow,wt.directionalLights.value=z.state.directional,wt.directionalLightShadows.value=z.state.directionalShadow,wt.spotLights.value=z.state.spot,wt.spotLightShadows.value=z.state.spotShadow,wt.rectAreaLights.value=z.state.rectArea,wt.ltc_1.value=z.state.rectAreaLTC1,wt.ltc_2.value=z.state.rectAreaLTC2,wt.pointLights.value=z.state.point,wt.pointLightShadows.value=z.state.pointShadow,wt.hemisphereLights.value=z.state.hemi,wt.sunShadowMatrix.value=z.state.sunShadowMatrix,wt.sunShadowCascade.value=z.state.sunShadowCascade,wt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,wt.spotLightMatrix.value=z.state.spotLightMatrix,wt.spotLightMap.value=z.state.spotLightMap,wt.pointShadowMatrix.value=z.state.pointShadowMatrix;return F.numLightProbeGrids=Uo(A.state.lightProbeGridArray),F.currentProgram=Kt,F.uniformsList=null,Kt}function Sh(v,L,k,F,z){let pt=Ot.get(v),At=pt.currentProgram.id+","+F+","+z,dt=pt.programVariants.get(At);if(dt===void 0)dt=Pi(v,L,k),pt.programVariants.set(At,dt);else pt.currentProgram=dt,pt.uniformsList=null,pt.outputColorSpace=F,pt.toneMapping=z;return dt}function Fo(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=rs.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Oo(v,L){let k=Ot.get(v);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function Mh(v,L,k,F,z){if(L.isScene!==!0)L=Zt;kt.resetTextureUnits();let pt=L.fog,At=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?L.environment:null,dt=B===null?I.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:jt.workingColorSpace,yt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Ct=ye.get(F.envMap||At,yt),Wt=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Kt=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),wt=!!k.morphAttributes.position,Qt=!!k.morphAttributes.normal,_e=!!k.morphAttributes.color,ue=sn;if(F.toneMapped){if(B===null||B.isXRRenderTarget===!0)ue=I.toneMapping}let ce=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ce=ce!==void 0?ce.length:0,Rt=Ot.get(F),Ue=A.state.lights;if(ht===!0){if(Et===!0||v!==W){let fe=v===W&&F.id===rt;H.setState(F,v,fe)}}let re=!1,Un=!1;if(F.version===Rt.__version){if(Rt.needsLights&&Rt.lightsStateVersion!==Ue.state.version)re=!0;else if(z.isBatchedMesh&&Rt.batching===!1)re=!0;else if(!z.isBatchedMesh&&Rt.batching===!0)re=!0;else if(z.isBatchedMesh&&Rt.batchingColor===!0&&z._colorsTexture===null)re=!0;else if(z.isBatchedMesh&&Rt.batchingColor===!1&&z._colorsTexture!==null)re=!0;else if(z.isInstancedMesh&&Rt.instancing===!1)re=!0;else if(!z.isInstancedMesh&&Rt.instancing===!0)re=!0;else if(z.isSkinnedMesh&&Rt.skinning===!1)re=!0;else if(!z.isSkinnedMesh&&Rt.skinning===!0)re=!0;else if(z.isInstancedMesh&&Rt.instancingColor===!0&&z.instanceColor===null)re=!0;else if(z.isInstancedMesh&&Rt.instancingColor===!1&&z.instanceColor!==null)re=!0;else if(z.isInstancedMesh&&Rt.instancingMorph===!0&&z.morphTexture===null)re=!0;else if(z.isInstancedMesh&&Rt.instancingMorph===!1&&z.morphTexture!==null)re=!0;else if(Rt.envMap!==Ct)re=!0;else if(F.fog===!0&&Rt.fog!==pt)re=!0;else if(Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==H.numPlanes||Rt.numIntersection!==H.numIntersection))re=!0;else if(Rt.vertexAlphas!==Wt)re=!0;else if(Rt.vertexTangents!==Kt)re=!0;else if(Rt.morphTargets!==wt)re=!0;else if(Rt.morphNormals!==Qt)re=!0;else if(Rt.morphColors!==_e)re=!0;else if(Rt.morphTargetsCount!==Ce)re=!0;else if(Rt.numLightProbeGrids!==Uo(A.state.lightProbeGridArray))re=!0;else if(Rt.outputColorSpace!==dt||Rt.toneMapping!==ue)Un=!0}else re=!0,Rt.__version=F.version;let Ie=Rt.currentProgram;if(re===!0||Un===!0){if(Ie=Un===!0?Sh(F,L,z,dt,ue):Pi(F,L,z),P&&F.isNodeMaterial)P.onUpdateProgram(F,Ie,Rt)}let ls=!1,Mn=!1,Fn=!1,ie=Ie.getUniforms(),Ae=Rt.uniforms;if(gt.useProgram(Ie.program))ls=!0,Mn=!0,Fn=!0;if(F.id!==rt)rt=F.id,Mn=!0;if(ls||W!==v){if(gt.buffers.depth.getReversed()&&v.reversedDepth!==!0)v._reversedDepth=!0,v.updateProjectionMatrix();ie.setValue(N,"projectionMatrix",v.projectionMatrix),ie.setValue(N,"viewMatrix",v.matrixWorldInverse);let Ee=ie.map.cameraPosition;if(Ee!==void 0)Ee.setValue(N,Ft.setFromMatrixPosition(v.matrixWorld));if(ge.logarithmicDepthBuffer)ie.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2));if(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)ie.setValue(N,"isOrthographic",v.isOrthographicCamera===!0);if(W!==v)W=v,Mn=!0,Fn=!0}if(Rt.needsLights){if(Ue.state.sunShadowMap.length>0)ie.setValue(N,"sunShadowMap",Ue.state.sunShadowMap,kt);if(Ue.state.directionalShadowMap.length>0)ie.setValue(N,"directionalShadowMap",Ue.state.directionalShadowMap,kt);if(Ue.state.spotShadowMap.length>0)ie.setValue(N,"spotShadowMap",Ue.state.spotShadowMap,kt);if(Ue.state.pointShadowMap.length>0)ie.setValue(N,"pointShadowMap",Ue.state.pointShadowMap,kt)}if(z.isSkinnedMesh){ie.setOptional(N,z,"bindMatrix"),ie.setOptional(N,z,"bindMatrixInverse");let fe=z.skeleton;if(fe){if(fe.boneTexture===null)fe.computeBoneTexture();ie.setValue(N,"boneTexture",fe.boneTexture,kt)}}if(z.isBatchedMesh){if(ie.setOptional(N,z,"batchingTexture"),ie.setValue(N,"batchingTexture",z._matricesTexture,kt),ie.setOptional(N,z,"batchingIdTexture"),ie.setValue(N,"batchingIdTexture",z._indirectTexture,kt),ie.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null)ie.setValue(N,"batchingColorTexture",z._colorsTexture,kt)}let Ze=k.morphAttributes;if(Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)C.update(z,k,Ie);if(Mn||Rt.receiveShadow!==z.receiveShadow)Rt.receiveShadow=z.receiveShadow,ie.setValue(N,"receiveShadow",z.receiveShadow);if((F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&L.environment!==null)Ae.envMapIntensity.value=L.environmentIntensity;if(Ae.dfgLUT!==void 0)Ae.dfgLUT.value=Og();if(Mn){if(ie.setValue(N,"toneMappingExposure",I.toneMappingExposure),Rt.needsLights)bh(Ae,Fn);if(pt&&F.fog===!0)tt.refreshFogUniforms(Ae,pt);if(tt.refreshMaterialUniforms(Ae,F,Dt,Nt,A.state.transmissionRenderTarget[v.id]),Rt.needsLights&&Rt.numLightProbeGrids>0){let fe=E,Ee=0;for(let cn of A.state.lightProbeGridArray){if(cn.texture===null)continue;fe.textures[Ee]=cn.texture,fe.min[Ee]=cn.boundingBox.min,fe.max[Ee]=cn.boundingBox.max,fe.resolution[Ee]=cn.resolution,Ee++}for(let cn in fe)fe[cn].length=Ee;Ae.probesSH.value=fe.textures,Ae.probesMin.value=fe.min,Ae.probesMax.value=fe.max,Ae.probesResolution.value=fe.resolution}rs.upload(N,Fo(Rt),Ae,kt)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0)rs.upload(N,Fo(Rt),Ae,kt),F.uniformsNeedUpdate=!1;if(F.isSpriteMaterial)ie.setValue(N,"center",z.center);if(ie.setValue(N,"modelViewMatrix",z.modelViewMatrix),ie.setValue(N,"normalMatrix",z.normalMatrix),ie.setValue(N,"modelMatrix",z.matrixWorld),F.uniformsGroups!==void 0){let fe=F.uniformsGroups;for(let Ee=0,cn=fe.length;Ee<cn;Ee++){let zo=fe[Ee];mt.update(zo,Ie),mt.bind(zo,Ie)}}return Ie}function bh(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Eh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(v,L,k){let F=Ot.get(v);if(F.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1)F.__useRenderToTexture=!1;Ot.get(v.texture).__webglTexture=L,Ot.get(v.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:k,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){let k=Ot.get(v);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,k=0){B=v,X=L,q=k;let F=null,z=!1,pt=!1;if(v){let dt=Ot.get(v);if(dt.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(N.FRAMEBUFFER,dt.__webglFramebuffer),K.copy(v.viewport),nt.copy(v.scissor),bt=v.scissorTest,gt.viewport(K),gt.scissor(nt),gt.setScissorTest(bt),rt=-1;return}else if(dt.__webglFramebuffer===void 0)kt.setupRenderTarget(v);else if(dt.__hasExternalTextures)kt.rebindTextures(v,Ot.get(v.texture).__webglTexture,Ot.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Wt=v.depthTexture;if(dt.__boundDepthTexture!==Wt){if(Wt!==null&&Ot.has(Wt)&&(v.width!==Wt.image.width||v.height!==Wt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(v)}}let yt=v.texture;if(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)pt=!0;let Ct=Ot.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget){if(Array.isArray(Ct[L]))F=Ct[L][k];else F=Ct[L];z=!0}else if(v.samples>0&&kt.useMultisampledRTT(v)===!1)F=Ot.get(v).__webglMultisampledFramebuffer;else if(Array.isArray(Ct))F=Ct[k];else F=Ct;K.copy(v.viewport),nt.copy(v.scissor),bt=v.scissorTest}else K.copy(qt).multiplyScalar(Dt).floor(),nt.copy(Bt).multiplyScalar(Dt).floor(),bt=te;if(k!==0)F=G;if(gt.bindFramebuffer(N.FRAMEBUFFER,F))gt.drawBuffers(v,F);if(gt.viewport(K),gt.scissor(nt),gt.setScissorTest(bt),z){let dt=Ot.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,k)}else if(pt){let dt=L;for(let yt=0;yt<v.textures.length;yt++){let Ct=Ot.get(v.textures[yt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+yt,Ct.__webglTexture,k,dt)}}else if(v!==null&&k!==0){let dt=Ot.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dt.__webglTexture,k)}rt=-1};function Bo(v){let L=Ot.get(v);if(L.__readFormat!==v.format||L.__readType!==v.type)L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=ge.textureFormatReadable(v.format),L.__typeReadable=ge.textureTypeReadable(v.type);return L}if(this.readRenderTargetPixels=function(v,L,k,F,z,pt,At,dt=0){if(!(v&&v.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Ot.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&At!==void 0){if(yt=yt[At],Array.isArray(yt))yt=yt[0]}if(yt){gt.bindFramebuffer(N.FRAMEBUFFER,yt);try{let Ct=v.textures[dt],{format:Wt,type:Kt}=Ct;if(v.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+dt);let wt=Bo(Ct);if(wt.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(L>=0&&L<=v.width-F&&(k>=0&&k<=v.height-z))N.readPixels(L,k,F,z,st.convert(Wt),st.convert(Kt),pt)}finally{let Ct=B!==null?Ot.get(B).__webglFramebuffer:null;gt.bindFramebuffer(N.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(v,L,k,F,z,pt,At,dt=0){if(!(v&&v.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Ot.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&At!==void 0){if(yt=yt[At],Array.isArray(yt))yt=yt[0]}if(yt)if(L>=0&&L<=v.width-F&&(k>=0&&k<=v.height-z)){gt.bindFramebuffer(N.FRAMEBUFFER,yt);let Ct=v.textures[dt],{format:Wt,type:Kt}=Ct;if(v.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+dt);let wt=Bo(Ct);if(wt.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Qt),N.bufferData(N.PIXEL_PACK_BUFFER,pt.byteLength,N.STREAM_READ),N.readPixels(L,k,F,z,st.convert(Wt),st.convert(Kt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let _e=B!==null?Ot.get(B).__webglFramebuffer:null;gt.bindFramebuffer(N.FRAMEBUFFER,_e);let ue=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await mc(N,ue,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Qt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Qt),N.deleteSync(ue),pt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,k=0){let F=Math.pow(2,-k),z=Math.floor(v.image.width*F),pt=Math.floor(v.image.height*F),At=L!==null?L.x:0,dt=L!==null?L.y:0;kt.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,At,dt,z,pt),gt.unbindTexture()},this.copyTextureToTexture=function(v,L,k=null,F=null,z=0,pt=0){let At,dt,yt,Ct,Wt,Kt,wt,Qt,_e,ue=v.isCompressedTexture?v.mipmaps[pt]:v.image;if(k!==null)At=k.max.x-k.min.x,dt=k.max.y-k.min.y,yt=k.isBox3?k.max.z-k.min.z:1,Ct=k.min.x,Wt=k.min.y,Kt=k.isBox3?k.min.z:0;else{let ie=Math.pow(2,-z);if(At=Math.floor(ue.width*ie),dt=Math.floor(ue.height*ie),v.isDataArrayTexture)yt=ue.depth;else if(v.isData3DTexture)yt=Math.floor(ue.depth*ie);else yt=1;Ct=0,Wt=0,Kt=0}if(F!==null)wt=F.x,Qt=F.y,_e=F.z;else wt=0,Qt=0,_e=0;let ce=st.convert(L.format),Ce=st.convert(L.type),Rt;if(L.isData3DTexture)kt.setTexture3D(L,0),Rt=N.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)kt.setTexture2DArray(L,0),Rt=N.TEXTURE_2D_ARRAY;else kt.setTexture2D(L,0),Rt=N.TEXTURE_2D;gt.activeTexture(N.TEXTURE0),gt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),gt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),gt.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let Ue=gt.getParameter(N.UNPACK_ROW_LENGTH),re=gt.getParameter(N.UNPACK_IMAGE_HEIGHT),Un=gt.getParameter(N.UNPACK_SKIP_PIXELS),Ie=gt.getParameter(N.UNPACK_SKIP_ROWS),ls=gt.getParameter(N.UNPACK_SKIP_IMAGES);gt.pixelStorei(N.UNPACK_ROW_LENGTH,ue.width),gt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ue.height),gt.pixelStorei(N.UNPACK_SKIP_PIXELS,Ct),gt.pixelStorei(N.UNPACK_SKIP_ROWS,Wt),gt.pixelStorei(N.UNPACK_SKIP_IMAGES,Kt);let Mn=v.isDataArrayTexture||v.isData3DTexture,Fn=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){let ie=Ot.get(v),Ae=Ot.get(L),Ze=Ot.get(ie.__renderTarget),fe=Ot.get(Ae.__renderTarget);gt.bindFramebuffer(N.READ_FRAMEBUFFER,Ze.__webglFramebuffer),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ee=0;Ee<yt;Ee++){if(Mn)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.get(v).__webglTexture,z,Kt+Ee),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.get(L).__webglTexture,pt,_e+Ee);N.blitFramebuffer(Ct,Wt,Ct+At,Wt+dt,wt,Qt,wt+At,Qt+dt,N.DEPTH_BUFFER_BIT,N.NEAREST)}gt.bindFramebuffer(N.READ_FRAMEBUFFER,null),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||Ot.has(v)){let ie=Ot.get(v),Ae=Ot.get(L);gt.bindFramebuffer(N.READ_FRAMEBUFFER,Q),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,w);for(let Ze=0;Ze<yt;Ze++){if(Mn)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ie.__webglTexture,z,Kt+Ze);else N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ie.__webglTexture,z);if(Fn)N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.__webglTexture,pt,_e+Ze);else N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ae.__webglTexture,pt);if(z!==0)N.blitFramebuffer(Ct,Wt,Ct+At,Wt+dt,wt,Qt,wt+At,Qt+dt,N.COLOR_BUFFER_BIT,N.NEAREST);else if(Fn)N.copyTexSubImage3D(Rt,pt,wt,Qt,_e+Ze,Ct,Wt,At,dt);else N.copyTexSubImage2D(Rt,pt,wt,Qt,Ct,Wt,At,dt)}gt.bindFramebuffer(N.READ_FRAMEBUFFER,null),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Fn)if(v.isDataTexture||v.isData3DTexture)N.texSubImage3D(Rt,pt,wt,Qt,_e,At,dt,yt,ce,Ce,ue.data);else if(L.isCompressedArrayTexture)N.compressedTexSubImage3D(Rt,pt,wt,Qt,_e,At,dt,yt,ce,ue.data);else N.texSubImage3D(Rt,pt,wt,Qt,_e,At,dt,yt,ce,Ce,ue);else if(v.isDataTexture)N.texSubImage2D(N.TEXTURE_2D,pt,wt,Qt,At,dt,ce,Ce,ue.data);else if(v.isCompressedTexture)N.compressedTexSubImage2D(N.TEXTURE_2D,pt,wt,Qt,ue.width,ue.height,ce,ue.data);else N.texSubImage2D(N.TEXTURE_2D,pt,wt,Qt,At,dt,ce,Ce,ue);if(gt.pixelStorei(N.UNPACK_ROW_LENGTH,Ue),gt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re),gt.pixelStorei(N.UNPACK_SKIP_PIXELS,Un),gt.pixelStorei(N.UNPACK_SKIP_ROWS,Ie),gt.pixelStorei(N.UNPACK_SKIP_IMAGES,ls),pt===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0)N.generateMipmap(Rt);gt.unbindTexture()},this.initRenderTarget=function(v){if(Ot.get(v).__webglFramebuffer===void 0)kt.setupRenderTarget(v)},this.initTexture=function(v){if(v.isCubeTexture)kt.setTextureCube(v,0);else if(v.isData3DTexture)kt.setTexture3D(v,0);else if(v.isDataArrayTexture||v.isCompressedArrayTexture)kt.setTexture2DArray(v,0);else kt.setTexture2D(v,0);gt.unbindTexture()},this.resetState=function(){X=0,q=0,B=null,gt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ka}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}function _h(t,e=!1){let n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),s=new Set(Object.keys(t[0].morphAttributes)),r={},a={},o=t[0].morphTargetsRelative,l=new Xe;l.morphTargetsRelative=o;let c=0;for(let h=0;h<t.length;++h){let d=t[h],u=0,f=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let _ in d.attributes){if(!i.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;if(r[_]===void 0)r[_]=[];r[_].push(d.attributes[_]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let _ in d.morphAttributes){if(!s.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[_].length!==t[0].morphAttributes[_].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+_+'" morph attribute.'),null;if(a[_]===void 0)a[_]=[];a[_].push(d.morphAttributes[_]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let _;if(n)_=d.index.count;else if(d.attributes.position!==void 0)_=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,_,h),c+=_}}if(n){let h=0,d=[];for(let u=0;u<t.length;++u){let f=t[u].index;for(let _=0;_<f.count;++_)d.push(f.getX(_)+h);h+=t[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=gh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let M=0;M<a[h].length;++M)f.push(a[h][M][u]);let _=gh(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function gh(t){let e,n,i,s=-1,r=0;for(let c=0;c<t.length;++c){let h=t[c];if(e===void 0)e=h.array.constructor;if(e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0)n=h.itemSize;if(n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0)i=h.normalized;if(i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1)s=h.gpuType;if(s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let a=new e(r),o=new Qe(a,n,i),l=0;for(let c=0;c<t.length;++c){let h=t[c];if(h.isInterleavedBufferAttribute){let d=l/n;for(let u=0,f=h.count;u<f;u++)for(let _=0;_<n;_++){let M=h.getComponent(u,_);o.setComponent(u+d,_,M)}}else a.set(h.array,l);l+=h.count*n}if(s!==void 0)o.gpuType=s;return o}function Gg(t){let e=Math.max(1,t.clientWidth),n=Math.max(1,t.clientHeight),i=t.getContext("webgl2");if(!i)return;let s=new Vs,r=new Fe(45,e/n,1,1000);r.position.z=10,r.position.y=-200;let a=new Co({antialias:!0,canvas:t,context:i});a.setClearColor("#100E0F"),a.setPixelRatio(window.devicePixelRatio),a.setSize(e,n,!1);let o=new es({color:"#2DB1A4",emissive:"#2DB1A4",emissiveIntensity:0.5});function l(R){let p=new Ai(0.5,0.5,0.5,32);return new Re(p,R)}function c(R){let p=new Ri(new wi([new lt(-0.5,-0.5),new lt(-0.5,0.5),new lt(0,0.5),new lt(0,0),new lt(0.5,0),new lt(0.5,-0.5)]),{depth:0.5,bevelEnabled:!1});return new Re(p,R)}function h(R){let p=new Ri(new wi([new lt(-0.7,-0.65),new lt(0,0.65),new lt(0.7,-0.65)]),{depth:1,bevelEnabled:!1});return new Re(p,R)}function d(R){let p=new Ai(0.75,0.75,0.75,32,1,!1,Math.PI/2,Math.PI),y=new Kn(1.5,0.75,32),I=new Re(p),O=new Re(y);I.updateMatrix(),p.applyMatrix4(I.matrix),O.updateMatrix(),y.applyMatrix4(O.matrix);let P=_h([p,y]);return p.dispose(),y.dispose(),new Re(P,R)}function u(){switch(Math.floor(Math.random()*4)){case 0:return h(o);case 1:return l(o);case 2:return c(o);case 3:return d(o)}}let f=u();if(f?.position.set(2,2,-5),f)s.add(f);let _=new Ci(10444700,1,100);_.position.set(1,4,0),_.intensity=80;let M=new Ci(14463529,1,100);M.position.set(0,2,5),M.intensity=80;let m=new Ci(2994596,1,100);m.position.set(2,2,-5),m.intensity=100;let g=new sr(16777215,0.5);g.intensity=0.5,s.add(_,M,g,m);function T(){let R=new Nn(0.8,0.8,0.8),p=new es({color:"#231f20"}),y=new Re(R,p);return y.position.set(Ti.randFloatSpread(50),Ti.randFloatSpread(200),Ti.randFloat(-20,0)),y.rotation.x=Math.random()*2*Math.PI,y}let E=Array(1200).fill(null).map(T);s.add(...E);function S(){if(f){let R=-vh;f.rotation.x+=0.01,f.rotation.y+=0.01,f.position.y=R*0.005,m.position.y=R*0.005;for(let p of E)p.rotation.x+=0.005;r.position.y=R*0.01}a.render(s,r),requestAnimationFrame(S)}return new ResizeObserver(()=>{let R=Math.max(1,t.clientWidth),p=Math.max(1,t.clientHeight);r.aspect=R/p,r.updateProjectionMatrix(),a.setSize(R,p,!1)}).observe(t),S(),!0}var vh=0;window.addEventListener("message",(t)=>{if(t.source===window.parent&&t.data?.type==="lab-scroll"&&Number.isFinite(t.data.y))vh=t.data.y});var xh=document.querySelector("canvas"),ur=document.querySelector("[role=status]");if(xh&&ur)try{if(Gg(xh))ur.remove();else ur.textContent="This browser could not start WebGL 2."}catch{ur.textContent="The 3D scene could not start."}})();

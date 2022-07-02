// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},n=Math.floor;var t=function(r){return n(r)===r},e=t;var u=function(r){return e(r/2)};var i=function(r){return u(r>0?r-1:r+1)},o=Number.POSITIVE_INFINITY,f=Number.NEGATIVE_INFINITY,a=o,c=f;var v=function(r){return r===a||r===c},y=Math.sqrt;var l=function(r){return Math.abs(r)};var p=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var A=function(){return p&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,b=w;var U=function(r){return b.call(r)},m=Object.prototype.hasOwnProperty;var h=function(r,n){return null!=r&&m.call(r,n)},I="function"==typeof Symbol?Symbol.toStringTag:"",N=h,s=I,d=w;var F=U,S=function(r){var n,t,e;if(null==r)return d.call(r);t=r[s],n=N(r,s);try{r[s]=void 0}catch(n){return d.call(r)}return e=d.call(r),n?r[s]=t:delete r[s],e},H=A()?S:F,O=H,g="function"==typeof Uint32Array;var E="function"==typeof Uint32Array?Uint32Array:null,j=function(r){return g&&r instanceof Uint32Array||"[object Uint32Array]"===O(r)},T=E;var G=function(){var r,n;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,4294967296,4294967297]),r=j(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var L="function"==typeof Uint32Array?Uint32Array:void 0,W=function(){throw new Error("not implemented")},M=G()?L:W,P=H,V="function"==typeof Float64Array;var Y="function"==typeof Float64Array?Float64Array:null,_=function(r){return V&&r instanceof Float64Array||"[object Float64Array]"===P(r)},q=Y;var x=function(){var r,n;if("function"!=typeof q)return!1;try{n=new q([1,3.14,-3.14,NaN]),r=_(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var k="function"==typeof Float64Array?Float64Array:void 0,z=function(){throw new Error("not implemented")},B=x()?k:z,C=H,D="function"==typeof Uint8Array;var J="function"==typeof Uint8Array?Uint8Array:null,K=function(r){return D&&r instanceof Uint8Array||"[object Uint8Array]"===C(r)},Q=J;var R=function(){var r,n;if("function"!=typeof Q)return!1;try{n=new Q(n=[1,3.14,-3.14,256,257]),r=K(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var X="function"==typeof Uint8Array?Uint8Array:void 0,Z=function(){throw new Error("not implemented")},$=R()?X:Z,rr=H,nr="function"==typeof Uint16Array;var tr="function"==typeof Uint16Array?Uint16Array:null,er=function(r){return nr&&r instanceof Uint16Array||"[object Uint16Array]"===rr(r)},ur=tr;var ir=function(){var r,n;if("function"!=typeof ur)return!1;try{n=new ur(n=[1,3.14,-3.14,65536,65537]),r=er(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var or,fr="function"==typeof Uint16Array?Uint16Array:void 0,ar=function(){throw new Error("not implemented")},cr={uint16:ir()?fr:ar,uint8:$};(or=new cr.uint16(1))[0]=4660;var vr,yr,lr=52===new cr.uint8(or.buffer)[0];!0===lr?(vr=1,yr=0):(vr=0,yr=1);var pr=M,Ar={HIGH:vr,LOW:yr},wr=new B(1),br=new pr(wr.buffer),Ur=Ar.HIGH,mr=Ar.LOW;var hr=function(r,n){return wr[0]=n,r[0]=br[Ur],r[1]=br[mr],r};var Ir=function(r,n){return 1===arguments.length?hr([0,0],r):hr(r,n)},Nr=M,sr=!0===lr?0:1,dr=new B(1),Fr=new Nr(dr.buffer);var Sr=function(r,n){return dr[0]=r,Fr[sr]=n>>>0,dr[0]},Hr=Sr;var Or=function(r){return 0|r},gr=M,Er=!0===lr?1:0,jr=new B(1),Tr=new gr(jr.buffer);var Gr,Lr,Wr=function(r){return jr[0]=r,Tr[Er]};!0===lr?(Gr=1,Lr=0):(Gr=0,Lr=1);var Mr=M,Pr={HIGH:Gr,LOW:Lr},Vr=new B(1),Yr=new Mr(Vr.buffer),_r=Pr.HIGH,qr=Pr.LOW;var xr=function(r,n){return Yr[_r]=r,Yr[qr]=n,Vr[0]},kr=xr,zr=Ir,Br=Wr,Cr=kr,Dr=[0,0];var Jr=function(r,n){var t,e;return zr(Dr,r),t=Dr[0],t&=2147483647,e=Br(n),Cr(t|=e&=2147483648,Dr[1])},Kr=i,Qr=Jr,Rr=f,Xr=o;var Zr=function(r,n){return n===Rr?Xr:n===Xr?0:n>0?Kr(n)?r:0:Kr(n)?Qr(Xr,r):Xr},$r=Wr;var rn=function(r,n){return(2147483647&$r(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},nn=l,tn=o;var en=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:nn(r)<1==(n===tn)?0:tn},un=M,on=!0===lr?1:0,fn=new B(1),an=new un(fn.buffer);var cn=function(r,n){return fn[0]=r,an[on]=n>>>0,fn[0]};var vn=Wr,yn=Hr,ln=cn,pn=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},An=[1,1.5],wn=[0,.5849624872207642],bn=[0,1.350039202129749e-8];var Un=Hr,mn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var hn=v,In=r,Nn=l;var sn=function(r,n){return In(n)||hn(n)?(r[0]=n,r[1]=0,r):0!==n&&Nn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var dn=Wr;var Fn=function(r){var n=dn(r);return(n=(2146435072&n)>>>20)-1023|0},Sn=o,Hn=f,On=r,gn=v,En=Jr,jn=function(r,n){return 1===arguments.length?sn([0,0],r):sn(r,n)},Tn=Fn,Gn=Ir,Ln=kr,Wn=[0,0],Mn=[0,0];var Pn=function(r,n){var t,e;return 0===n||0===r||On(r)||gn(r)?r:(jn(Wn,r),n+=Wn[1],(n+=Tn(r=Wn[0]))<-1074?En(0,r):n>1023?r<0?Hn:Sn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Gn(Mn,r),t=Mn[0],t&=2148532223,e*Ln(t|=n+1023<<20,Mn[1])))};var Vn=Wr,Yn=cn,_n=Hr,qn=Or,xn=Pn,kn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var zn=r,Bn=i,Cn=v,Dn=t,Jn=y,Kn=l,Qn=Ir,Rn=Hr,Xn=Or,Zn=f,$n=o,rt=Zr,nt=rn,tt=en,et=function(r,n,t){var e,u,i,o,f,a,c,v,y,l,p,A,w,b,U,m,h,I,N,s;return I=0,t<1048576&&(I-=53,t=vn(n*=9007199254740992)),I+=(t>>20)-1023|0,t=1072693248|(N=1048575&t|0),N<=235662?s=0:N<767610?s=1:(s=0,I+=1,t-=1048576),e=524288+(t>>1|536870912),f=(h=1/((n=ln(n,t))+(c=An[s])))*((m=n-c)-(o=yn(u=m*h,0))*(a=ln(0,e+=s<<18))-o*(n-(a-c))),U=(i=u*u)*i*pn(i),a=yn(a=3+(i=o*o)+(U+=f*(o+u)),0),w=(p=-7.028461650952758e-9*(y=yn(y=(m=o*a)+(h=f*a+(U-(a-3-i))*u),0))+.9617966939259756*(h-(y-m))+bn[s])-((A=yn(A=(l=.9617967009544373*y)+p+(v=wn[s])+(b=I),0))-b-v-l),r[0]=A,r[1]=w,r},ut=function(r,n){var t,e,u,i,o;return t=(o=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*mn(u)))-((e=Un(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r},it=function(r,n,t){var e,u,i,o,f,a,c,v,y,l;return l=((y=2147483647&r|0)>>20)-1023|0,v=0,y>1071644672&&(e=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),n-=i=Yn(0,e)),a=(f=.6931471805599453*(t-((i=_n(i=t+n,0))-n))+-1.904654299957768e-9*i)-((c=(o=.6931471824645996*i)+f)-o),u=c-(i=c*c)*kn(i),r=Vn(c=1-(c*u/(u-2)-(a+c*a)-c)),r=qn(r),c=(r+=v<<20>>>0)>>20<=0?xn(c,v):Yn(c,r)},ot=1e300,ft=1e-300,at=[0,0],ct=[0,0];var vt=function r(n,t){var e,u,i,o,f,a,c,v,y,l,p,A,w,b;if(zn(n)||zn(t))return NaN;if(Qn(at,t),f=at[0],0===at[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Jn(n);if(-.5===t)return 1/Jn(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Cn(t))return tt(n,t)}if(Qn(at,n),o=at[0],0===at[1]){if(0===o)return rt(n,t);if(1===n)return 1;if(-1===n&&Bn(t))return-1;if(Cn(n))return n===Zn?r(-0,-t):t<0?0:$n}if(n<0&&!1===Dn(t))return(n-n)/(n-n);if(i=Kn(n),e=2147483647&o|0,u=2147483647&f|0,c=f>>>31|0,a=(a=o>>>31|0)&&Bn(t)?-1:1,u>1105199104){if(u>1139802112)return nt(n,t);if(e<1072693247)return 1===c?a*ot*ot:a*ft*ft;if(e>1072693248)return 0===c?a*ot*ot:a*ft*ft;p=ut(ct,i)}else p=et(ct,i,e);if(l=(t-(v=Rn(t,0)))*p[0]+t*p[1],y=v*p[0],Qn(at,A=l+y),w=Xn(at[0]),b=Xn(at[1]),w>=1083179008){if(0!=(w-1083179008|b))return a*ot*ot;if(l+8008566259537294e-32>A-y)return a*ot*ot}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|b))return a*ft*ft;if(l<=A-y)return a*ft*ft}return a*(A=it(w,y,l))},yt=vt;function lt(r,n){return r>=n?NaN:.125*yt(n-r,2)}export{lt as default};
//# sourceMappingURL=mod.js.map
